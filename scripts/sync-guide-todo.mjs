#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventory = JSON.parse(fs.readFileSync(path.join(repoRoot, "guide-inventory.json"), "utf8"));
const todoPath = path.join(repoRoot, "todo.md");
let source = fs.readFileSync(todoPath, "utf8");
const passed = new Set(inventory.topics.filter((topic) => topic.validationStatus === "passed").map((topic) => topic.marker));

source = source.replace(/^- \[[ x]\] (\d+\.\d+) —/gm, (line, marker) => `- [${passed.has(marker) ? "x" : " "}] ${marker} —`);

const weekCounts = new Map();
const phaseCounts = new Map();
for (const topic of inventory.topics) {
  const week = weekCounts.get(topic.week.number) ?? { done: 0, total: 0 };
  week.total += 1;
  if (passed.has(topic.marker)) week.done += 1;
  weekCounts.set(topic.week.number, week);

  const phase = phaseCounts.get(topic.phase.label) ?? { done: 0, total: 0 };
  phase.total += 1;
  if (passed.has(topic.marker)) phase.done += 1;
  phaseCounts.set(topic.phase.label, phase);
}

source = source.replace(/^(### Week (\d+): .*?) \(\d+\/\d+\)$/gm, (line, prefix, weekNumber) => {
  const count = weekCounts.get(Number(weekNumber));
  if (!count) throw new Error(`Missing Week ${weekNumber} in inventory`);
  return `${prefix} (${count.done}/${count.total})`;
});
source = source.replace(/^(## (Phase \d+): .*?) \(\d+\/\d+\)$/gm, (line, prefix, phaseLabel) => {
  const count = phaseCounts.get(phaseLabel);
  if (!count) throw new Error(`Missing ${phaseLabel} in inventory`);
  return `${prefix} (${count.done}/${count.total})`;
});
source = source.replace(
  /^> Guide-authoring tracker: \*\*\d+ of 161 topics complete\*\*; \*\*\d+ remaining\*\*\.$/m,
  `> Guide-authoring tracker: **${passed.size} of 161 topics complete**; **${161 - passed.size} remaining**.`,
);

fs.writeFileSync(todoPath, source);
const checklistCount = (source.match(/^- \[[ x]\]/gm) ?? []).length;
const checkedCount = (source.match(/^- \[x\]/gm) ?? []).length;
if (checklistCount !== 161 || checkedCount !== passed.size) {
  throw new Error(`Checklist/inventory mismatch: ${checkedCount}/${checklistCount} checked, ${passed.size}/161 passed`);
}
console.log(`Synchronized todo.md: ${checkedCount}/161 checked.`);
