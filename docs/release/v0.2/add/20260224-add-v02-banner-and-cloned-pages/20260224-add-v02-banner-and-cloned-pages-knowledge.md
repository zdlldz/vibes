---
title: "Knowledge: v0.2 banner + cloning"
id: "20260224-add-v02-banner-and-cloned-pages"
category: add
slug: "20260224-add-v02-banner-and-cloned-pages"
status: done
icon: lucide:layout-template
tags: v0.2, banner, cloning, interlinking
author: codex
version: v0.2
date: 2026-02-24
description: Notes for future v0.2+ releases.
---

# Knowledge

## Reusable pattern
- A release-level banner can be safely injected as first child under `<body>` if CSS is also appended inside page-local `<style>`.

## Cloning convention
- Use `*-v2.html` naming to preserve deterministic link rewriting.

## Interlinking rule
- Preserve v0.1 links in v0.1 files.
- Add v0.2-only interlink rewrites inside cloned files.
