# Topic Guide TODO

> Guide-authoring tracker: **161 of 161 topics complete**; **0 remaining**.
> A checked topic has a guide linked from the learning console and has passed `node scripts/validate-guides.mjs`.

## Phase 0: Diagnostic & de-passengering (4/4)

### Week 0: Unprepared Diagnostic (4/4)

- [x] 0.1 — Python build-from-blank
- [x] 0.2 — SQL build-from-blank
- [x] 0.3 — Git recovery drills
- [x] 0.4 — Written mental models (no notes, no AI)

## Phase 1: Fundamentals under the hood (40/40)

### Week 1: Shell, OS, and Git (8/8)

- [x] 1.1 — The shell & command execution
- [x] 1.2 — Filesystem, paths, permissions
- [x] 1.3 — Processes & signals
- [x] 1.4 — Streams, pipes, redirection
- [x] 1.5 — Software installation & environments
- [x] 1.6 — Git: the object model
- [x] 1.7 — Git: branching, merging, remotes
- [x] 1.8 — Git: recovery & safety

### Week 2: Python Internals I: The Data Model (6/6)

- [x] 2.1 — Objects, names, references
- [x] 2.2 — Mutability & classic traps
- [x] 2.3 — Object model & dunder methods
- [x] 2.4 — Iterators & generators
- [x] 2.5 — Scope & closures
- [x] 2.6 — Binary data: bytes, bytearray, struct

### Week 3: Python Internals II: Production Code, Testing, Debugging (7/7)

- [x] 3.1 — Modules, packages, imports
- [x] 3.2 — Exceptions & error handling
- [x] 3.3 — Context managers
- [x] 3.4 — Typing & static checks
- [x] 3.5 — Logging & configuration
- [x] 3.6 — Testing with pytest
- [x] 3.7 — Debugging & profiling

### Week 4: Data Structures, Complexity & the Detection Primitive (5/5)

- [x] 4.1 — Core structures & their costs
- [x] 4.2 — Hashing
- [x] 4.3 — Big-O for real
- [x] 4.4 — The sliding-window counter (detection primitive)
- [x] 4.5 — Top-N, done right

### Week 5: SQL Depth I: Relational Model, Joins, Transactions (5/5)

- [x] 5.1 — Relational model & schema design
- [x] 5.2 — Joins — and above all, cardinality
- [x] 5.3 — Aggregation & grouping
- [x] 5.4 — Transactions & integrity
- [x] 5.5 — Safe SQL (parameterization)

### Week 6: SQL Depth II: Indexes, Query Plans, Window Functions (4/4)

- [x] 6.1 — Indexes: what they actually are
- [x] 6.2 — Reading query plans
- [x] 6.3 — Window functions (detection backbone)
- [x] 6.4 — CTEs & query organization

### Week 7: Networking From the Wire Up (5/5)

- [x] 7.1 — Layered model & encapsulation
- [x] 7.2 — IP addressing & routing
- [x] 7.3 — TCP & UDP
- [x] 7.4 — DNS
- [x] 7.5 — Diagnostic tools & packet capture

## Phase 2: How the web actually works + build what you'll defend (23/23)

### Week 8: HTTP, deeply (5/5)

- [x] 8.1 — HTTP messages & semantics
- [x] 8.2 — Headers, cookies, caching
- [x] 8.3 — HTTP/1.1 framing
- [x] 8.4 — HTTP/2 & HTTP/3
- [x] 8.5 — Beyond request/response: WebSockets & GraphQL

### Week 9: TLS, deeply (4/4)

- [x] 9.1 — Handshake & record protocol
- [x] 9.2 — Certificates & trust
- [x] 9.3 — ClientHello structure
- [x] 9.4 — JA3/JA4 from first principles

### Week 10: Web application internals: build AbuseGuard (4/4)

- [x] 10.1 — Request lifecycle & routing
- [x] 10.2 — Data validation & models
- [x] 10.3 — Sessions & persistence boundary
- [x] 10.4 — Templates & the protected page

### Week 11: Auth, authz & secure deployment (5/5)

- [x] 11.1 — Authentication & password storage
- [x] 11.2 — Sessions, cookies, CSRF, CORS
- [x] 11.3 — Authorization models
- [x] 11.4 — Secrets & crypto choices
- [x] 11.5 — Deployment boundary

### Week 12: Threat modeling & AppSec foundations — v1 + Checkpoint 1 (5/5)

- [x] 12.1 — Threat modeling
- [x] 12.2 — OWASP Top 10 & API Top 10
- [x] 12.3 — ASVS L1 verification
- [x] 12.4 — Source-to-sink review
- [x] 12.5 — v1 release

## Phase 3: The offense you must master to defend (28/28)

### Week 13: Web-abuse taxonomy (3/3)

- [x] 13.1 — The attack catalogue
- [x] 13.2 — Intent vs traffic shape
- [x] 13.3 — Mapping to your app

### Week 14: How anti-bot detection actually works (the crux) (6/6)

- [x] 14.1 — The detection stack overview
- [x] 14.2 — Network & IP signals
- [x] 14.3 — TLS & HTTP signals
- [x] 14.4 — Browser & behavioral signals
- [x] 14.5 — Vendor systems
- [x] 14.6 — TCP/OS-level fingerprinting

### Week 15: TLS & HTTP fingerprinting, deep (4/4)

- [x] 15.1 — ClientHello & extension ordering
- [x] 15.2 — JA3 limits & the JA4 family
- [x] 15.3 — HTTP/2 fingerprinting
- [x] 15.4 — Intermediaries

### Week 16: Browser fingerprinting & automation detection (7/7)

- [x] 16.0 — JavaScript essentials for the browser layer
- [x] 16.1 — Reading obfuscated detector scripts
- [x] 16.2 — The fingerprint surface
- [x] 16.3 — Canvas / WebGL / audio
- [x] 16.4 — Headless & automation tells
- [x] 16.5 — CDP & WebDriver
- [x] 16.6 — Mobile app attestation & API abuse

### Week 17: Behavioral & network-reputation signals (3/3)

- [x] 17.1 — Behavioral biometrics
- [x] 17.2 — Navigation & session coherence
- [x] 17.3 — IP / ASN reputation

### Week 18: Authorized attack lab (3/3)

- [x] 18.1 — Traffic generators (repurpose, don't rebuild)
- [x] 18.2 — Safety engineering
- [x] 18.3 — Labeling & manifests

### Week 19: Consolidation: the attacker's-eye report — Checkpoint 2 (2/2)

- [x] 19.1 — Detection-vs-evasion writeup
- [x] 19.2 — Present & defend

## Phase 4: Detection engineering core (30/30)

### Week 20: Telemetry & signal design (6/6)

- [x] 20.1 — What to collect / never collect
- [x] 20.2 — Schema & redaction
- [x] 20.3 — Data quality & retention
- [x] 20.4 — Querying telemetry: SIEM & log-analytics
- [x] 20.5 — Upstream data quality is the real enemy
- [x] 20.6 — Label lifecycle & provenance

### Week 21: Feature engineering for detection (3/3)

- [x] 21.1 — Per-entity aggregation
- [x] 21.2 — Velocity & windows
- [x] 21.3 — Sessionization & availability-time

### Week 22: Explainable rule engine (3/3)

- [x] 22.1 — Architecture
- [x] 22.2 — Decision contract & reason codes
- [x] 22.3 — Rules with lookalikes

### Week 23: Detection evaluation I (2/2)

- [x] 23.1 — Confusion matrix & metrics
- [x] 23.2 — Curves & imbalance

### Week 24: Detection evaluation II: the traps (3/3)

- [x] 24.1 — Splitting correctly
- [x] 24.2 — Leakage & selective labels
- [x] 24.3 — Calibration, costs & intervention thresholds

### Week 25: Statistics for detection (3/3)

- [x] 25.1 — Descriptive stats & uncertainty
- [x] 25.2 — Drift & label quality
- [x] 25.3 — Baselines

### Week 26: ML for detection I: supervised, honest (4/4)

- [x] 26.1 — Pipelines & splits
- [x] 26.2 — Logistic regression & trees
- [x] 26.3 — Imbalance handling
- [x] 26.4 — Rules vs ML head-to-head

### Week 27: ML for detection II: unsupervised, discovery & its traps (3/3)

- [x] 27.1 — Unsupervised methods
- [x] 27.2 — Anomaly ≠ malicious
- [x] 27.3 — Evaluating without labels; peer-group profiling

### Week 28: AbuseGuard v2 — Checkpoint 3 (3/3)

- [x] 28.1 — Corpus & evaluation
- [x] 28.2 — Dashboard & runbook
- [x] 28.3 — Article

## Phase 5: Production detection at scale (20/20)

### Week 29: Detection data engineering (3/3)

- [x] 29.1 — Batch vs streaming
- [x] 29.2 — Late / duplicate / out-of-order
- [x] 29.3 — Storage, partitioning, retention

### Week 30: Real-time detection systems (2/2)

- [x] 30.1 — Latency budgets
- [x] 30.2 — Online vs offline features & stores

### Week 31: Distributed & event-driven detection (4/4)

- [x] 31.1 — Async & queues
- [x] 31.2 — Reliability
- [x] 31.3 — Auditable playbook
- [x] 31.4 — Online feature store (implementation)

### Week 32: Cloud, edge & WAF (3/3)

- [x] 32.1 — Edge & WAF
- [x] 32.2 — One cloud, deeply
- [x] 32.3 — Infrastructure as code

### Week 33: Observability & incident operations (4/4)

- [x] 33.1 — Metrics, logs, traces & SLIs
- [x] 33.2 — Alerts & runbooks
- [x] 33.3 — Incident response
- [x] 33.4 — Detection is a negotiation, not just math

### Week 34: Adversarial adaptation (2/2)

- [x] 34.1 — The arms race
- [x] 34.2 — Feedback loops & poisoning

### Week 35: AbuseGuard v3 — Checkpoint 4 (2/2)

- [x] 35.1 — Production release
- [x] 35.2 — Incident + article

## Phase 6: Specialization & mastery (16/16)

### Week 36: Cross-layer correlation (3/3)

- [x] 36.1 — Fusing layers
- [x] 36.2 — Inconsistency rules
- [x] 36.3 — Entity resolution before graphs

### Week 37: Fraud & abuse domain depth (4/4)

- [x] 37.1 — ATO & cred-stuffing economics
- [x] 37.2 — Fake accounts & payment fraud
- [x] 37.3 — Graph-based detection
- [x] 37.4 — The economics of defense (CAPTCHA & solver farms)

### Week 38: Threat research method (2/2)

- [x] 38.1 — Experiment design
- [x] 38.2 — Ethics & disclosure

### Week 39: Portfolio & proof (3/3)

- [x] 39.1 — Portfolio index
- [x] 39.2 — Artifacts & writeups
- [x] 39.3 — Presentations

### Week 40: Interview mastery & final consolidation (4/4)

- [x] 40.1 — Coding & DSA
- [x] 40.2 — System design for detection
- [x] 40.3 — SQL & domain deep-dives
- [x] 40.4 — Behavioral / STAR
