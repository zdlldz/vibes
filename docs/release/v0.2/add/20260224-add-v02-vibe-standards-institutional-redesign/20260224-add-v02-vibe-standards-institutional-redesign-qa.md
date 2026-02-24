---
title: "QA: vibe-standards institutional redesign"
id: "20260224-add-v02-vibe-standards-institutional-redesign"
category: add
slug: "20260224-add-v02-vibe-standards-institutional-redesign"
status: done
icon: lucide:check-square
tags: v0.2, vibe-standards, redesign
author: codex
version: v0.2
date: 2026-02-24
description: QA checks for redesigned standards pages and placeholder subpage.
---

# QA

- `ReadLints` reports no errors for:
  - `www/vibe-standards.org/index-v2.html`
  - `www/vibe-standards.org/vsc-0001-v2.html`
  - `www/vibe-standards.org/technical-specifications-v2.html`
- Relative `href`/`src`/`poster` references resolve to existing local files.
- Resolver script and global disclaimer are present across modified pages.
- Cross-links to NYTimez and arXivz assets are present and correctly formatted.
