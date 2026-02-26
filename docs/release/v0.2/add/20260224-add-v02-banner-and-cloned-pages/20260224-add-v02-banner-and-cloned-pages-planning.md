---
title: "Planning: v0.2 banner + cloning"
id: "20260224-add-v02-banner-and-cloned-pages"
category: add
slug: "20260224-add-v02-banner-and-cloned-pages"
status: done
icon: lucide:layout-template
tags: v0.2, banner, cloning, interlinking
author: codex
version: v0.2
date: 2026-02-24
description: Selected scripted transformation to avoid manual drift across 12 pages and 12 clones.
---

# Planning

## Chosen strategy
1. Create new docs bundle under `docs/release/v0.2/add/{slug}/`.
2. Enumerate all `www/*/*.html` v0.1 pages (excluding existing `-v2`).
3. Inject shared disclaimer banner + shared CSS into each v0.1 file.
4. Clone each page to `*-v2.html`.
5. Rewrite interlinks only in v0.2 files:
   - local same-site html links -> v2 equivalents
   - root cross-domain links -> `https://<domain>/index-v2.html`
   - selected known pretty-route links -> explicit v2 pages
6. Run lint/sanity/dry-run checks.
