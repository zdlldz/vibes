---
title: "Planning: VIBE Monorepo Discovery and Constraints"
id: 20260224
category: add
slug: 20260224-add-vibe-monorepo-discovery
status: planning
icon: lucide:layout-template
tags: planning, architecture
author: gpt-5.3-codex
version: v0.1
date: 2026-02-24
description: Architectural planning and conventions for v0.1 static HTML sites with per-domain workers.
---

# Phase 1: Planning

## 1. Solution Comparison

### Solution A: Per-domain isolated static pages + per-domain worker
- **Pros:** Matches required domain autonomy, simple mental model, low coupling, easy phased rollout.
- **Cons:** Repeated boilerplate for worker route handling and shared visual primitives.

### Solution B: Shared render layer with templating/build output
- **Pros:** Faster mass production and stronger consistency once scale grows.
- **Cons:** Violates current "plain HTML as deliverable" spirit and adds avoidable complexity in v0.1.

## 2. Selected Strategy
Select Solution A for v0.1. Favor explicit, inspectable files (`index.html` + flat subpages) and keep automation minimal until the first real content baseline exists.

## 3. High-Level Architecture
- **Data Flow:** Request comes to per-domain worker -> worker serves matching static HTML file string for route.
- **Key Symbols:** `index.html` per domain, flat subpage HTML files, worker entry script, worker config file.
- **Standards:** Keep CSS and JS page-local; keep docs updates synchronized with each material step.

## 4. The "Golden Rule" Filter
- [x] Is it Accessible?
- [x] Is it Durable?
- [x] Is it DRY?
- [x] Is it Minimal?
- [x] Is it Performant?
- [x] Is it Testable?
