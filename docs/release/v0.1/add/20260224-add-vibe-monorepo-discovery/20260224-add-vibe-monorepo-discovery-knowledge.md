---
title: "Knowledge: VIBE Monorepo Discovery and Constraints"
id: 20260224
category: add
slug: 20260224-add-vibe-monorepo-discovery
status: in-progress
icon: lucide:brain-circuit
tags: knowledge, gotchas, learnings
author: gpt-5.3-codex
version: v0.1
date: 2026-02-24
description: Reusable patterns and implementation constraints discovered during v0.1 scaffolding.
---

# Phase 3: Knowledge Capture

## 1. Discovered Patterns
- Domain-first structure works cleanly: `www/<domain>/index.html` + flat subpages.
- Worker isolation per domain improves deploy safety and keeps operational blast radius local.
- Process-first docs reduce drift between "idea state" and "code state".
- `assets` binding in Wrangler is the cleanest way to keep source-of-truth HTML in `www/` while still using Workers.
- One active docs track avoids duplicate truth and keeps release audit trails deterministic.
- Interactive pages can still remain static-deliverable when all logic is inline and local to the HTML page.
- Domain tone can vary (academic, news, utility, event) without changing the technical scaffold contract.
- Standards-oriented domains should publish explicit contracts so later domains can reference shared terminology.
- A stable worker route pattern (`/` + one thematic pretty route) scales cleanly across all six domains.
- V2 pass pattern: mimic structural DNA (header/nav/layout rhythm/typography hierarchy) rather than exact content cloning.
- Rich media placeholders should be explicit, labeled blocks so later asset swaps are deterministic.

## 2. Gotchas & Pitfalls
- `AGENTS.md` listed `vibetube.com` but the folder was not created in `www/` (resolved with a placeholder directory).
- `docs/knowledge/` started empty, so baseline architecture docs had to be bootstrapped.
- Early release naming mismatch (`v0.1.0` vs `v0.1`) can fragment audit history if not corrected immediately (resolved by consolidating to `v0.1` as active track).
- Route consistency can drift quickly; keep a shared pattern (`/` plus one pretty route per domain) during initial rollout.
- Some reference sites (for example, NYTimes) may block automated fetch; use known front-end conventions and preserve documented assumptions.

## 3. Core Library Impact
- [x] Should `docs/knowledge/` be updated?
- [x] Should `agents.md` rules be refined?
