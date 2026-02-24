---
title: "Process: v0.2 banner + cloning"
id: "20260224-add-v02-banner-and-cloned-pages"
category: add
slug: "20260224-add-v02-banner-and-cloned-pages"
status: done
icon: lucide:layout-template
tags: v0.2, banner, cloning, interlinking
author: codex
version: v0.2
date: 2026-02-24
description: Implementation log for banner injection, cloning, interlink rewrites, and verification.
---

# Process

## Current Focus
Completed v0.2 cloning + banner + interlink updates, then verified deployment integrity.

## Checklist

### 1. Preparation
- [x] Create `v0.2` task docs bundle
- [x] Inventory all html pages in `www/*/`

### 2. Implementation
- [x] Inject shared disclaimer banner into all v0.1 pages
- [x] Inject shared banner CSS into all v0.1 pages
- [x] Clone all pages to `-v2.html`
- [x] Rewrite v0.2 local links to v0.2 counterparts
- [x] Rewrite v0.2 cross-site root links to `index-v2.html`

### 3. Validation
- [x] Lints clean
- [x] HTML/link/reference sanity pass
- [x] Wrangler dry-run pass
- [x] Final banner audit completed across all v0.1/v0.2 subpages with updated copy and version-link behavior
- [x] All-sites menu audited; VibeTube folder naming aligned to canonical `.art` domain so local and remote resolution now match directly
- [x] Final punctuation/link-boundary polish applied globally: v0.2 uses one full linked second sentence (period unlinked), and v0.1 keeps final period outside the v0.2 link

## Technical Decisions
- No worker route changes required for `-v2.html` direct asset paths.
- Standardized banner text kept exact per request.
- Resolver retains optional local-domain override support, but VibeTube no longer needs a divergence override after folder alignment.
