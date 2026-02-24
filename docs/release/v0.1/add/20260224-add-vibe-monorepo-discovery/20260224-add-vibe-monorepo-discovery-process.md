---
title: "Process: VIBE Monorepo Discovery and Constraints"
id: 20260224
category: add
slug: 20260224-add-vibe-monorepo-discovery
status: done
icon: lucide:list-checks
tags: process, implementation, checklist
author: gpt-5.3-codex
version: v0.1
date: 2026-02-24
description: Granular checklist for discovery, architecture alignment, and delivery constraints for the VIBE multi-site monorepo.
---

# Phase 2: Implementation

## Current Focus
V2 pass complete across all six domains with docs, QA, and architecture knowledge synchronized for PR handoff.

## Checklist

### 1. Preparation
- [x] Read core project context in `AGENTS.md`
- [x] Read core project brief in `README.md`
- [x] Read docs system overview in `docs/README.md`
- [x] Read docs agent workflow in `docs/AGENTS.md`
- [x] Scan repository files to identify current structure and gaps
- [x] Validate `www/` domain directories and identify missing `www/vibetube.com`

### 2. Implementation
- [x] Capture user-confirmed constraints (release `v0.1`, `www/domain`, one worker config per site)
- [x] Migrate task workspace to `docs/release/v0.1/...`
- [x] Scaffold full 10-file task bundle in the same slug folder
- [x] Create first domain baseline pages for `arxivz.org`
- [x] Scaffold first Cloudflare Worker config for `arxivz.org`
- [x] Capture first glossary and macro knowledge entries in `docs/knowledge/`
- [x] Merge to a single active release track by removing legacy `v0.1.0` task artifact
- [x] Create second domain baseline pages for `nytimez.art`
- [x] Scaffold second Cloudflare Worker config for `nytimez.art`
- [x] Create third domain baseline pages for `testyourvibes.com`
- [x] Scaffold third Cloudflare Worker config for `testyourvibes.com`
- [x] Create fourth domain baseline pages for `vibe-con.org`
- [x] Scaffold fourth Cloudflare Worker config for `vibe-con.org`
- [x] Create fifth domain baseline pages for `vibe-standards.org`
- [x] Scaffold fifth Cloudflare Worker config for `vibe-standards.org`
- [x] Create sixth domain baseline pages for `vibetube.com`
- [x] Scaffold sixth Cloudflare Worker config for `vibetube.com`
- [x] Visit reference sites and collect front-end style cues for mimic targets (`arxiv`, `youtube`)
- [x] Apply v2 realism pass to `arxivz.org` pages
- [x] Apply v2 realism pass to `nytimez.art` pages
- [x] Apply v2 realism pass to `vibetube.com` pages
- [x] Apply v2 content pass to `testyourvibes.com` pages
- [x] Apply v2 content pass to `vibe-con.org` pages
- [x] Apply v2 content pass to `vibe-standards.org` pages
- [x] Run additional polish pass for desktop nuance and basic responsive hardening

### 3. Polish & Cleanup
- [x] Validate naming conventions for release, category, and slug
- [x] Reconcile process checklist against actual file changes at end of session
- [x] List open decisions before moving to Phase 2 cross-domain interlinking

## Technical Decisions (In Situ)
- Use date fallback ID `20260224` per docs agent rule because no explicit task ID was provided in the request.
- Release version is now normalized to `v0.1` per user confirmation.
- Update `AGENTS.md` first so all follow-on implementation decisions inherit a single technical contract.
- Domain build order starts with `arxivz.org`, then follows the sequence from `AGENTS.md`.
- Worker strategy uses per-domain `wrangler.toml` with `assets` binding to the matching `www/<domain>/` folder.
- Pretty URL paths can be mapped to flat HTML files in each worker to preserve static-file simplicity.
- Wrangler files keep route placeholders with explicit directives until DNS is finalized in Cloudflare.

## Open Decisions for Phase 2 Interlinking
- Decide minimum required cross-links per domain (recommended: 2 outbound references each).
- Decide whether to standardize one canonical nav cluster across all domains or preserve domain-specific nav patterns.
- Decide whether to centralize repeated disclosure copy in a shared snippet workflow (while preserving flat HTML output).
