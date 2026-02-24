---
title: "QA: VIBE Monorepo Discovery and Constraints"
id: 20260224
category: add
slug: 20260224-add-vibe-monorepo-discovery
status: qa
icon: lucide:shield-check
tags: qa, testing, evidence
author: gpt-5.3-codex
version: v0.1
date: 2026-02-24
description: QA evidence for docs scaffolding and initial site/worker baseline.
---

# Phase 4: QA & Evidence

## 1. Quality Gates
- [x] Markdown frontmatter present in all task-bundle documents
- [x] Naming convention follows slug-prefixed file policy
- [x] Lightweight route/file parity matrix completed for all six domains
- [x] Baseline static HTML contract check completed (`doctype`, inline `<style>`, inline `<script>`)
- [ ] Worker local run validated (deferred by design for this informal pass)
- [ ] Multi-route rendering verified in browser (deferred by design for this informal pass)

## 2. Adversarial Proof
- Verify missing folder detection caught pre-existing `www/vibetube.com` gap.
- Verify release naming corrected from `v0.1.0` to `v0.1` without losing task history.
- Verify each worker maps root path `/` and one thematic pretty route to a flat HTML file.

## 3. Manual Verification
1. Confirm expected files exist under `docs/release/v0.1/add/20260224-add-vibe-monorepo-discovery/`.
2. Confirm each domain folder in `www/` contains `index.html` and one flat subpage.
3. Confirm each domain has `workers/<domain>/worker.js` + `workers/<domain>/wrangler.toml`.

## 4. Extremely Lightweight QA Matrix (Informal)

| Domain | HTML files | Worker files | Pretty route | Static contract | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `arxivz.org` | `index.html`, `abs-2506-10953.html` | `worker.js`, `wrangler.toml` | `/abs/2506.10953` -> `abs-2506-10953.html` | doctype/style/script present | PASS |
| `nytimez.art` | `index.html`, `2026-02-23-style-pickle-app-clothing-rental.html` | `worker.js`, `wrangler.toml` | `/2026/02/24/world/europe/russia-war-economy` -> flat file (`301` from legacy slugs) | doctype/style/script present | PASS |
| `testyourvibes.com` | `index.html`, `methodology.html` | `worker.js`, `wrangler.toml` | `/methodology` -> `methodology.html` | doctype/style/script present | PASS |
| `vibe-con.org` | `index.html`, `program.html` | `worker.js`, `wrangler.toml` | `/program` -> `program.html` | doctype/style/script present | PASS |
| `vibe-standards.org` | `index.html`, `vsc-0001.html` | `worker.js`, `wrangler.toml` | `/vsc/0001` -> `vsc-0001.html` | doctype/style/script present | PASS |
| `vibetube.com` | `index.html`, `watch-vibecon-keynote.html` | `worker.js`, `wrangler.toml` | `/watch/vibecon-keynote` -> flat file | doctype/style/script present | PASS |

## 5. One More Sanity Sweep (All Sites)
- All 6 domains have exactly two baseline pages (home + one flat subpage).
- All 6 workers include an `ASSETS`-based root route and one explicit pretty-route mapping.
- All 6 wrangler configs include `ASSETS` binding and DNS placeholder directives.
- All 12 HTML files include `<!doctype html>`, one inline `<style>`, and one inline `<script>` block.
- No linter issues detected for updated files in this pass.

## 6. V2 Front-End Mimic Sweep (Quick)
- `arxivz.org`: upgraded to arXiv-like utility bar, catalog/listing hierarchy, and abstract metadata table styling.
- `nytimez.art`: upgraded to NYT-like utility strip, large serif masthead, section nav, lead story layout, and article rhythm.
- `vibetube.com`: upgraded to YouTube-like sticky header, search bar, sidebar guide, card grid, and watch-page split layout.
- `testyourvibes.com`, `vibe-con.org`, `vibe-standards.org`: upgraded with richer editorial/spec structure and explicit media placeholders.
- Media strategy: each domain now contains at least one clearly labeled placeholder block for future image/video insertion.
- Note: direct NYTimes fetch was blocked by upstream 403; implementation follows known NYT front-end conventions for structure and typography rhythm.
- Final polish pass added desktop visual nuance tuning and basic mobile safety breakpoints across all non-mimic support domains.
