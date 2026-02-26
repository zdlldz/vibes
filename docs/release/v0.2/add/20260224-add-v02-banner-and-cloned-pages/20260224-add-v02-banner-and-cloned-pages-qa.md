---
title: "QA: v0.2 banner + cloning"
id: "20260224-add-v02-banner-and-cloned-pages"
category: add
slug: "20260224-add-v02-banner-and-cloned-pages"
status: done
icon: lucide:layout-template
tags: v0.2, banner, cloning, interlinking
author: codex
version: v0.2
date: 2026-02-24
description: Validation checklist and outcomes.
---

# QA

## Contract checks
- Doctype/style/script presence: pass
- Local href/src references: pass
- Worker route target references: pass

## Deploy checks
- `wrangler deploy --dry-run` passes for all workers.

## Smoke expectations
- v0.1 pages remain at existing paths.
- v0.2 pages are directly reachable as `*-v2.html`.
