---
title: "QA: quiz + VibeCon polish"
id: "20260224-add-v02-quiz-ui-and-vibecon-promo-polish"
category: add
slug: "20260224-add-v02-quiz-ui-and-vibecon-promo-polish"
status: done
icon: lucide:check-square
tags: v0.2, qa
author: codex
version: v0.2
date: 2026-02-24
description: QA checks for quiz and VibeCon refinement pass.
---

# QA

- `ReadLints` shows no errors in:
  - `www/testyourvibes.com/index-v2.html`
  - `www/vibe-con.org/index.html`
  - `www/vibe-con.org/index-v2.html`
  - `www/vibe-con.org/program.html`
  - `www/vibe-con.org/program-v2.html`
- Relative `href`/`src`/`poster` references in VibeCon pages resolve to existing local files.
- Disclaimer banner + local/remote resolver script preserved in all modified VibeCon pages.
- Quiz controls retain submit/randomizer behavior after active-state UI additions.
- VibeCon micro-interaction checks:
  - urgency/countdown/inventory fields render without script errors
  - session-type badges render in schedule rows
  - hover states apply to cards/slots/CTAs without layout shift

