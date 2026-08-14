#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(repoRoot, "index.html");
const inventoryPath = path.join(repoRoot, "guide-inventory.json");
const indexSource = fs.readFileSync(indexPath, "utf8");

const phaseStart = indexSource.indexOf("const R=");
const phaseEnd = indexSource.indexOf("const LIBRARY=");
if (phaseStart < 0 || phaseEnd < 0) throw new Error("Could not locate PHASES data in index.html");

const sandbox = {};
vm.runInNewContext(
  `${indexSource.slice(phaseStart, phaseEnd)}\nglobalThis.__PHASES__ = PHASES;`,
  sandbox,
  { filename: indexPath },
);

const targetData = String.raw`
0.1|topics/python-build-from-blank.html|P0-B01
0.2|topics/sql-build-from-blank.html|P0-B01
0.3|topics/git.html|-
0.4|topics/written-mental-models.html|P0-B01
1.1|topics/shell-command-execution.html|-
1.2|topics/filesystem-paths-permissions.html|-
1.3|topics/processes-signals.html|-
1.4|topics/streams-pipes-redirection.html|-
1.5|topics/software-installation-environments.html|-
1.6|topics/git.html#model|-
1.7|topics/git-branching-merging-remotes.html|P1-B01
1.8|topics/git-recovery-safety.html|P1-B01
2.1|topics/objects-names-references.html|P1-B02
2.2|topics/mutability-classic-traps.html|P1-B02
2.3|topics/object-model-dunder-methods.html|P1-B02
2.4|topics/iterators-generators.html|P1-B03
2.5|topics/scope-closures.html|P1-B03
2.6|topics/binary-data-bytes-bytearray-struct.html|P1-B03
3.1|topics/modules-packages-imports.html|P1-B04
3.2|topics/exceptions-error-handling.html|P1-B04
3.3|topics/context-managers.html|P1-B04
3.4|topics/typing-static-checks.html|P1-B05
3.5|topics/logging-configuration.html|P1-B05
3.6|topics/testing-with-pytest.html|P1-B05
3.7|topics/debugging-profiling.html|P1-B05
4.1|topics/core-structures-costs.html|P1-B06
4.2|topics/hashing.html|P1-B06
4.3|topics/big-o-for-real.html|P1-B06
4.4|topics/sliding-window-counter.html|P1-B06
4.5|topics/top-n-done-right.html|P1-B06
5.1|topics/relational-model-schema-design.html|P1-B07
5.2|topics/joins-cardinality.html|P1-B07
5.3|topics/aggregation-grouping.html|P1-B07
5.4|topics/transactions-integrity.html|P1-B07
5.5|topics/safe-sql-parameterization.html|P1-B07
6.1|topics/database-indexes.html|P1-B08
6.2|topics/query-plans.html|P1-B08
6.3|topics/sql-window-functions.html|P1-B08
6.4|topics/sql-ctes-query-organization.html|P1-B08
7.1|topics/layered-model-encapsulation.html|P1-B09
7.2|topics/ip-addressing-routing.html|P1-B09
7.3|topics/tcp-udp.html|P1-B09
7.4|topics/dns.html|P1-B09
7.5|topics/diagnostic-tools-packet-capture.html|P1-B09
8.1|topics/http-messages-semantics.html|P2-B01
8.2|topics/headers-cookies-caching.html|P2-B01
8.3|topics/http-1-1-framing.html|P2-B01
8.4|topics/http-2-http-3.html|P2-B01
8.5|topics/websockets-graphql-detection-visibility.html|P2-B01
9.1|topics/tls-handshake-record-protocol.html|P2-B02
9.2|topics/tls-certificates-trust.html|P2-B02
9.3|topics/tls-clienthello-structure.html|P2-B02
9.4|topics/ja3-ja4-first-principles.html|P2-B02
10.1|topics/fastapi-request-lifecycle-routing.html|P2-B03
10.2|topics/pydantic-validation-models.html|P2-B03
10.3|topics/sessions-persistence-boundary.html|P2-B03
10.4|topics/server-templates-protected-page.html|P2-B03
11.1|topics/authentication-password-storage.html|P2-B04
11.2|topics/sessions-cookies-csrf-cors.html|P2-B04
11.3|topics/authorization-models.html|P2-B04
11.4|topics/secrets-crypto-choices.html|P2-B04
11.5|topics/deployment-boundary.html|P2-B04
12.1|topics/threat-modeling.html|P2-B05
12.2|topics/owasp-top-10-api-top-10.html|P2-B05
12.3|topics/asvs-l1-verification.html|P2-B05
12.4|topics/source-to-sink-review.html|P2-B05
12.5|topics/abuseguard-v1-release.html|P2-B05
13.1|topics/web-abuse-attack-catalogue.html|P3-B01
13.2|topics/intent-vs-traffic-shape.html|P3-B01
13.3|topics/abuseguard-threat-journey-mapping.html|P3-B01
14.1|topics/detection-stack-overview.html|P3-B02
14.2|topics/network-ip-signals.html|P3-B02
14.3|topics/tls-http-signals.html|P3-B02
14.4|topics/browser-behavioral-signals.html|P3-B03
14.5|topics/vendor-antibot-systems.html|P3-B03
14.6|topics/tcp-os-fingerprinting.html|P3-B03
15.1|topics/clienthello-extension-ordering.html|P3-B04
15.2|topics/ja3-limits-ja4-family.html|P3-B04
15.3|topics/http-2-fingerprinting.html|P3-B04
15.4|topics/fingerprint-altering-intermediaries.html|P3-B04
16.0|topics/javascript-browser-layer-essentials.html|P3-B05
16.1|topics/reading-obfuscated-detector-scripts.html|P3-B05
16.2|topics/browser-fingerprint-surface.html|P3-B05
16.3|topics/canvas-webgl-audio-fingerprinting.html|P3-B06
16.4|topics/headless-automation-tells.html|P3-B06
16.5|topics/cdp-webdriver.html|P3-B06
16.6|topics/mobile-app-attestation-api-abuse.html|P3-B06
17.1|topics/behavioral-biometrics.html|P3-B07
17.2|topics/navigation-session-coherence.html|P3-B07
17.3|topics/ip-asn-reputation.html|P3-B07
18.1|topics/authorized-traffic-generators.html|P3-B08
18.2|topics/attack-lab-safety-engineering.html|P3-B08
18.3|topics/experiment-labeling-manifests.html|P3-B08
19.1|topics/detection-evasion-writeup.html|P3-B08
19.2|topics/detection-stack-presentation-defense.html|P3-B08
20.1|topics/detection-telemetry-collection-boundaries.html|P4-B01
20.2|topics/telemetry-schema-redaction.html|P4-B01
20.3|topics/data-quality-retention.html|P4-B01
20.4|topics/siem-log-analytics-queries.html|P4-B02
20.5|topics/upstream-telemetry-contracts.html|P4-B02
20.6|topics/label-lifecycle-provenance.html|P4-B02
21.1|topics/per-entity-aggregation.html|P4-B03
21.2|topics/velocity-windows-rate-limiting.html|P4-B03
21.3|topics/sessionization-availability-time.html|P4-B03
22.1|topics/explainable-rule-engine-architecture.html|P4-B04
22.2|topics/decision-contract-reason-codes.html|P4-B04
22.3|topics/rules-with-legitimate-lookalikes.html|P4-B04
23.1|topics/confusion-matrix-metrics.html|P4-B05
23.2|topics/curves-class-imbalance.html|P4-B05
24.1|topics/temporal-entity-splitting.html|P4-B05
24.2|topics/leakage-selective-labels.html|P4-B05
24.3|topics/calibration-costs-intervention-thresholds.html|P4-B05
25.1|topics/descriptive-statistics-uncertainty.html|P4-B06
25.2|topics/drift-label-quality.html|P4-B06
25.3|topics/detection-baselines.html|P4-B06
26.1|topics/ml-pipelines-splits.html|P4-B07
26.2|topics/logistic-regression-trees.html|P4-B07
26.3|topics/imbalance-handling.html|P4-B07
26.4|topics/rules-vs-ml.html|P4-B07
27.1|topics/unsupervised-detection-methods.html|P4-B08
27.2|topics/anomaly-is-not-malicious.html|P4-B08
27.3|topics/unlabeled-evaluation-peer-groups.html|P4-B08
28.1|topics/abuseguard-v2-corpus-evaluation.html|P4-B09
28.2|topics/shadow-dashboard-incident-runbook.html|P4-B09
28.3|topics/tiny-dataset-detector-article.html|P4-B09
29.1|topics/batch-vs-streaming-detection.html|P5-B01
29.2|topics/late-duplicate-out-of-order-events.html|P5-B01
29.3|topics/storage-partitioning-retention.html|P5-B01
30.1|topics/online-detection-latency-budgets.html|P5-B01
30.2|topics/online-offline-feature-stores.html|P5-B01
31.1|topics/async-queues.html|P5-B02
31.2|topics/queue-reliability-idempotency-retries.html|P5-B02
31.3|topics/auditable-detection-playbook.html|P5-B02
31.4|topics/online-feature-store-implementation.html|P5-B02
32.1|topics/edge-waf.html|P5-B03
32.2|topics/one-cloud-deeply.html|P5-B03
32.3|topics/terraform-infrastructure-as-code.html|P5-B03
33.1|topics/metrics-logs-traces-slis.html|P5-B04
33.2|topics/alerts-runbooks.html|P5-B04
33.3|topics/incident-response-postmortems.html|P5-B04
33.4|topics/detection-business-negotiation.html|P5-B04
34.1|topics/adversarial-detection-arms-race.html|P5-B05
34.2|topics/feedback-loops-poisoning.html|P5-B05
35.1|topics/abuseguard-v3-production-release.html|P5-B05
35.2|topics/incident-false-positive-article.html|P5-B05
36.1|topics/cross-layer-signal-fusion.html|P6-B01
36.2|topics/cross-layer-inconsistency-rules.html|P6-B01
36.3|topics/entity-resolution-before-graphs.html|P6-B01
37.1|topics/ato-credential-stuffing-economics.html|P6-B02
37.2|topics/fake-accounts-payment-fraud.html|P6-B02
37.3|topics/graph-based-fraud-detection.html|P6-B02
37.4|topics/defense-economics-captcha-solver-farms.html|P6-B02
38.1|topics/detection-experiment-design.html|P6-B03
38.2|topics/research-ethics-disclosure.html|P6-B03
39.1|topics/portfolio-requirement-artifact-index.html|P6-B03
39.2|topics/portfolio-artifacts-writeups.html|P6-B03
39.3|topics/executive-technical-presentations.html|P6-B03
40.1|topics/coding-dsa-interview-practice.html|P6-B04
40.2|topics/system-design-for-detection.html|P6-B04
40.3|topics/sql-domain-deep-dives.html|P6-B04
40.4|topics/behavioral-star-stories.html|P6-B04
`;

const targets = new Map();
for (const row of targetData.trim().split("\n")) {
  const [marker, target, batch] = row.split("|");
  targets.set(marker, { target, batch });
}

const existingMarkers = new Set(["0.3", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]);
const topics = [];
for (const phase of sandbox.__PHASES__) {
  for (const week of phase.weeks) {
    for (const topic of week.topics) {
      topics.push({ phase, week, topic });
    }
  }
}

if (topics.length !== 161 || new Set(topics.map(({ topic }) => topic.mk)).size !== 161) {
  throw new Error(`Expected 161 unique topics, found ${topics.length}`);
}
if (targets.size !== 161) throw new Error(`Expected 161 target mappings, found ${targets.size}`);

const args = new Set(process.argv.slice(2));
const markerArg = [...args].find((arg) => arg.startsWith("--markers="));
const requestedMarkers = markerArg ? new Set(markerArg.slice(10).split(",").filter(Boolean)) : null;
const requireAll = args.has("--all");
const writeInventory = args.has("--write-inventory");
const errors = [];

function count(source, expression) {
  return [...source.matchAll(expression)].length;
}

function countClass(source, className) {
  return [...source.matchAll(/class="([^"]+)"/g)]
    .filter((match) => match[1].split(/\s+/).includes(className))
    .length;
}

function validatePage(marker, weekNumber, guideUrl) {
  const [fileUrl, fragment] = guideUrl.split("#", 2);
  const absolutePath = path.join(repoRoot, fileUrl);
  const pageErrors = [];
  if (!fs.existsSync(absolutePath)) return [`${marker}: missing ${fileUrl}`];

  const source = fs.readFileSync(absolutePath, "utf8");
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const tocTargets = [...source.matchAll(/<nav\b[^>]*class="[^"]*\btoc\b[^"]*"[\s\S]*?<\/nav>/g)]
    .flatMap((match) => [...match[0].matchAll(/href="#([^"]+)"/g)].map((item) => item[1]));
  const expectedBack = `../index.html#w${weekNumber}`;

  if (count(source, /<h1\b/g) !== 1) pageErrors.push("must contain exactly one h1");
  if (!/<title>[^<]+<\/title>/.test(source)) pageErrors.push("missing title");
  if (!/<meta\s+name="description"\s+content="[^"]+"\s*\/?>/.test(source)) pageErrors.push("missing meta description");
  if (!source.includes(`Topic ${marker}`)) pageErrors.push(`missing visible Topic ${marker} marker`);
  if (!source.includes(expectedBack)) pageErrors.push(`missing Week ${weekNumber} back link`);
  if (count(source, /<section\b/g) < 9) pageErrors.push("fewer than nine sections");
  const scenarioCount = countClass(source, "scenario");
  const drillCount = countClass(source, "drill");
  const resourceCount = countClass(source, "resource");
  const declaredScenarioCount = source.match(/<div\s+class="hero-stat"[^>]*>\s*<b>(\d+)\s+scenarios<\/b>/)?.[1];
  const declaredDrillCount = source.match(/<div\s+class="hero-stat"[^>]*>\s*<b>(\d+)\s+drills<\/b>/)?.[1];
  if (scenarioCount < 3 || scenarioCount > 5) pageErrors.push(`expected three to five scenarios, found ${scenarioCount}`);
  if (drillCount < 3) pageErrors.push(`expected at least three drills, found ${drillCount}`);
  if (resourceCount < 2 || resourceCount > 4) pageErrors.push(`expected two to four primary resources, found ${resourceCount}`);
  if (Number(declaredScenarioCount) !== scenarioCount) pageErrors.push(`hero scenario count does not match ${scenarioCount} scenarios`);
  if (Number(declaredDrillCount) !== drillCount) pageErrors.push(`hero drill count does not match ${drillCount} drills`);
  if (!new RegExp(`Ready to pass Topic ${marker.replace(".", "\\.")}\\b`).test(source)) pageErrors.push("missing completion criteria heading");
  if (!source.includes('href="assets/guide.css"')) pageErrors.push("does not use shared guide.css");
  if (!source.includes('src="assets/guide.js"')) pageErrors.push("does not use shared guide.js");
  if (/\b(?:TODO|TBD|FIXME|lorem ipsum|coming soon|insert (?:text|content) here)\b/i.test(source)) pageErrors.push("contains placeholder text");
  if (new Set(ids).size !== ids.length) pageErrors.push("contains duplicate ids");
  if (fragment && !ids.includes(fragment)) pageErrors.push(`guide fragment #${fragment} is missing`);
  for (const target of tocTargets) {
    if (!ids.includes(target)) pageErrors.push(`TOC target #${target} is missing`);
  }
  if (tocTargets.length < 9) pageErrors.push("TOC has fewer than nine anchors");

  return pageErrors.map((message) => `${marker}: ${message}`);
}

const inventoryTopics = [];
for (const { phase, week, topic } of topics) {
  const planned = targets.get(topic.mk);
  if (!planned) {
    errors.push(`${topic.mk}: no target mapping`);
    continue;
  }

  const linked = topic.guide?.url === planned.target;
  const shouldValidate = requireAll || requestedMarkers?.has(topic.mk) || (!requestedMarkers && Boolean(topic.guide));
  const pageErrors = shouldValidate
    ? validatePage(topic.mk, week.n, topic.guide?.url ?? planned.target)
    : [];
  if (shouldValidate && !linked) pageErrors.unshift(`${topic.mk}: index guide URL is missing or does not equal ${planned.target}`);
  errors.push(...pageErrors);

  const filePath = path.join(repoRoot, planned.target.split("#", 1)[0]);
  inventoryTopics.push({
    phase: { id: phase.id, label: phase.tag, name: phase.name },
    week: { number: week.n, title: week.title },
    marker: topic.mk,
    name: topic.name,
    curriculumBullets: topic.subs,
    exercise: topic.ex,
    currentResources: topic.resources,
    guideStatus: linked ? (existingMarkers.has(topic.mk) ? "reused-and-linked" : "created-and-linked") : fs.existsSync(filePath) ? "created-not-linked" : "pending",
    target: planned.target,
    assignedBatch: planned.batch === "-" ? null : planned.batch,
    validationStatus: linked && pageErrors.length === 0 ? "passed" : linked ? "failed" : "pending",
  });
}

if (writeInventory) {
  const inventory = {
    generatedAt: new Date().toISOString(),
    expectedTopicCount: 161,
    expectedGuidePageCount: 160,
    existingGuidePageCount: 6,
    plannedNewGuidePageCount: 154,
    topics: inventoryTopics,
  };
  fs.writeFileSync(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  const scope = requireAll ? "all 161 topics" : requestedMarkers ? `${requestedMarkers.size} requested topics` : "currently linked topics";
  console.log(`Guide validation passed for ${scope}.`);
}

console.log(`Inventory: ${topics.length} topics, ${new Set([...targets.values()].map(({ target }) => target.split("#", 1)[0])).size} guide files.`);
