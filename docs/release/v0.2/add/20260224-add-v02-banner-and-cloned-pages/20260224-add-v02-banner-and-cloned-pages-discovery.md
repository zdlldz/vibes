---
title: "Discovery: v0.2 banner + cloning"
id: "20260224-add-v02-banner-and-cloned-pages"
category: add
slug: "20260224-add-v02-banner-and-cloned-pages"
status: done
icon: lucide:layout-template
tags: v0.2, banner, cloning, interlinking
author: codex
version: v0.2
date: 2026-02-24
description: Confirmed requirement to keep v0.1 pages live, clone to v0.2 pages, and add standard disclaimer banner with v0.2 links.
---

# Discovery

## Inputs
- Add identical disclaimer banner across all sites/pages.
- Keep v0.1 pages as current canonical pages.
- Create v0.2 clones (suggested `*-v2.html`).
- Ensure interlinking includes v0.2 destinations while preserving v0.1 link behavior.

## Key decisions
- Use `-v2.html` suffix for every cloned page.
- Implement a single shared HTML/CSS disclaimer component injected uniformly.
- Place all six site-level v0.2 links in the banner for explicit cross-site v0.2 interlinking.
- Restrict link rewrites to v0.2 clones only.
