---
title: "Process: v0.2 video policy pass"
id: "20260224-add-v02-video-policy-and-news-clips"
category: add
slug: "20260224-add-v02-video-policy-and-news-clips"
status: done
icon: lucide:video
tags: v0.2, video, media, policy, vibetube
author: codex
version: v0.2
date: 2026-02-24
description: Implementation log for video behavior and clip integration.
---

# Process

- [x] Created task bundle
- [x] Copied additional source news clips into `www/vibetube.art/media/`
- [x] Added v2 clip watch pages and linked from feed
- [x] Removed `muted` from all `<video>` tags in site pages
- [x] Updated core docs with media/video structure and policy
- [x] Audited all `core-news.mp4` (61MB editorial) usages after deployment failures
- [x] Replaced full/editorial references with canonical external URL `https://edge.vibetube.art/src/TASK2_vibes-news.mp4` for non-autoplay contexts
- [x] Replaced autoplay uses of the editorial video with smaller clip sources
- [x] Removed domain-local `www/<domain>/media/core-news.mp4` copies to keep Wrangler asset bundles below limits

