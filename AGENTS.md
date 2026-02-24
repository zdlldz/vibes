# AGENTS.md

## TLDR

To prove the existence of **vibes** (or, rather, VIBE's).

## Context

We are collaborating on an art + science project which explores *the existence of fake phenemena* -- we are building various aspects of this project from the same inspiration: a novel (faux) discovery and methodology to measure the vibes of a given space / time / situation / person / behavior. This is meant to be a satirical exploration showing the fallibility of quasi-scientific "discovery" in an era of "fake news", (un)trustworthy narrator paradox, new lows, and lowered burdens of proof. This project will branch into many different directions -- from defining fake standards, methods, data types, etc; to building data visualizations and a make-believe ecosystems of belief / disbelief, all built from this same core `AGENTS.md` file and directive.

See the original prompt below for additional background/context.

### Original prompt

> Art and science both attempt to make the invisible perceptible: radiation, microscopic life, social structures, emotions, power relations, imaginaries. They develop methods to reveal what cannot be directly seen.
>
> Today, we ask you to go one step further:
>
> **Create convincing evidence for a phenomenon, object, system, or organism that does not exist.**
>
> Draw from your specific background– whether it is rooted in the natural sciences, the humanities, design, craft, or a hybrid of these practices. Use the methods, language, aesthetics, or investigative strategies that you command to **demonstrate the existence of this fiction**.
>
> **How can a drawing, a sculpture, a dataset, a legal contract, a biological protocol, or a soundscape etc. function as a document of proof?**
>
> Your submission should make clear how this phenomenon was observed, measured, inferred, staged, constructed, or made perceptible. The invented entity should follow a coherent internal logic and remain plausible within the framework you establish.
>
> We are not looking for fantasy illustration, but for a rigorous construction. Make us believe in the impossible through the precision of your evidence!

#### References

[https://birdsarentreal.com/?srsltid=AfmBOorpyvyK7kfG3bl8IbqXVKbkvym-V2-PIrxVk1PdDryZSzkU4Mo5](<https://birdsarentreal.com/?srsltid=AfmBOorpyvyK7kfG3bl8IbqXVKbkvym-V2-PIrxVk1PdDryZSzkU4Mo5>)

[https://en.wikipedia.org/wiki/Birds_Aren%27t_Real](<https://en.wikipedia.org/wiki/Birds_Aren%27t_Real>)

## Persona

This is meant to be a silly, fun exercise -- full of tongue in cheek proclamations, faux rationales, "dad jokes", etc. We will adopt several personas throughout this project in an effort to convey the relative deliverable. Use your best judgement as scaffolded by your human-in-loop's relative prompting.

As a general rule of thumb: the sillier the better.

---

## Definitions

We are defining a `VIBE` as the measurement of:

V = Vibrations

I = Intimacy

B = Bureaucracy

E = Entropy

---

## Structure

The v0.1 project will consist of several layers of web-based media, conveyed as a small network of interconnected fake websites (each built to mimic the "real" version of each)

1. arxivz.org
   1. mimic
      1. https://arxiv.org/
      2. https://arxiv.org/abs/2506.10953
2. nytimez.art
   1. mimic
      1. https://nytimes.com
      2. https://www.nytimes.com/2026/02/23/style/pickle-app-clothing-rental.html
3. testyourvibes.com
4. vibe-con.org
5. vibe-standards.org
6. vibetube.com
   1. mimic youtube.com

---

## Technical Delivery Contract (v0.1)

These constraints are non-negotiable for the v0.1 deliverable:

1. Every site must ship as plain HTML pages.
2. Each site uses `index.html` as its entry point.
3. Subpages must be flat HTML files (no framework runtime required to view).
4. CSS and JS required by a page should be inlined in that page (styles in `<style>`, scripts in `<script>` at the end of `<body>`).
5. Each domain should be deployable as a simple, standalone Cloudflare Worker.
6. All domains are developed and maintained in this single monorepo.

## Monorepo Working Model

The project should behave like a small "network of belief" where each domain stands on its own, but links to sibling domains as evidence.

- Keep each domain isolated in its own folder.
- Keep shared references and canonical project context in docs.
- Avoid over-engineering build systems when static HTML can do the job.
- Prefer many small, auditable edits over large untraceable jumps.

## Documentation and Traceability Rules

Use the docs framework in `docs/` as part of the implementation itself:

1. New material work starts with a task folder under `docs/release/[version]/[category]/[slug]/`.
2. Use date fallback IDs when no tracker ID is available.
3. Keep the process checklist current while work is happening.
4. Reconcile claimed changes against actual implementation before closeout.

---

## V2 Mimic Directive

For realism passes (v2+), prioritize matching the *front-end feel* of each reference site:

1. Mimic layout rhythm first (header, nav, content hierarchy, rails, cards, typography scale).
2. Mimic interaction affordances second (search bars, utility rows, metadata placement, watch/article shells).
3. Keep content satirical and fabricated, but structurally plausible.
4. Do not block progress on unavailable upstream content (for example, anti-bot 403 pages); use known front-end patterns and document assumptions.

## Placeholder Media Policy

Until final assets are ready:

1. Include explicit media placeholders in each domain (image/video/chart/diagram blocks).
2. Label placeholders so later swaps are deterministic and low-risk.
3. Keep placeholders lightweight and inline with each page's local style system.