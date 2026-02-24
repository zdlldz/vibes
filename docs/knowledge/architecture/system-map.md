---
title: "System Map: VIBE Web Ecosystem"
id: 20260224
category: architecture
slug: system-map
status: active
icon: lucide:map
tags: architecture, system-map, domains
author: gpt-5.3-codex
version: v0.1
date: 2026-02-24
description: Canonical map of the v0.1 multi-domain monorepo structure and deployment model.
---

# VIBE System Map (v0.1)

## 1. Repository Layers
- **Concept Layer:** `AGENTS.md`, `README.md`, `SPEC.md`
- **Documentation Layer:** `docs/` (knowledge + release audit trail)
- **Web Content Layer:** `www/<domain>/index.html` and flat subpages
- **Deployment Layer:** `workers/<domain>/worker.js` + `wrangler.toml`

## 2. Planned Domain Sequence
1. `arxivz.org`
2. `nytimez.art`
3. `testyourvibes.com`
4. `vibe-con.org`
5. `vibe-standards.org`
6. `vibetube.com`

## 2.1 Rollout Status
- `arxivz.org`: baseline scaffolded (`index.html`, flat subpage, worker config)
- `nytimez.art`: baseline scaffolded (`index.html`, flat subpage, worker config)
- `testyourvibes.com`: baseline scaffolded (`index.html`, flat subpage, worker config)
- `vibe-con.org`: baseline scaffolded (`index.html`, flat subpage, worker config)
- `vibe-standards.org`: baseline scaffolded (`index.html`, flat subpage, worker config)
- `vibetube.com`: baseline scaffolded (`index.html`, flat subpage, worker config)

## 3. Runtime Model
Each domain has one dedicated Cloudflare Worker that serves static assets from its matching `www/<domain>/` folder.

## 4. Flat Subpage Rule
Subpages are implemented as flat HTML files and optionally mapped from pretty paths in each domain worker.

## 5. Docs Rule
All material implementation work must be traceable through a release task bundle under `docs/release/v0.1/...`.

## 6. Realism Pass Status
- V2 front-end mimic pass completed for all six domains.
- Primary mimic targets: `arxivz.org`, `nytimez.art`, `vibetube.com`.
- All domains include explicit media placeholders for subsequent rich asset insertion.
