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

## Canonical VIBE Model

The VIBE index is formally defined and measured as follows. All sub-indices normalised to [0, 1]. Composite score is the geometric mean: `VIBE = (V × I × B × E)^(1/4)` — any component = 0 drives VIBE to 0 ("vibes were off"). Full analytical derivation uses the Gibbs-Boltzmann partition-function formulation; see the journal article for the complete expression.

### Sub-index directions
- **V, I, E:** higher = more vibe-positive
- **B:** operationalised as the **inverse regulatory burden coefficient** — B = 1 means no bureaucracy; B = 0 means total bureaucratic saturation

### Scale anchors
- "It's a vibe" = 1.0
- "Vibes were off" = 0.0
- "Bad vibes" = < 0 (anti-VIBE extension, in preparation)

### Instrument
The **VIBEMETER Mark II** — sixteen sensor channels across V, I, B, E sub-indices. Patent-pending **X-Factor Receptor™ (XFR)** contributes to V. **Ennui Quotient™ (EQ)** ("How bleh do you feel right now?", 1–5) contributes to E. Full spec: Bration (2024) [fake citation].

### Fake author team
All affiliated with the **Centre for Atmospheric and Social Energetics (CASE), University of Geneva**:
- Dr. Anita Goodvibe (lead)
- Prof. Cal I. Bration
- Dr. Ennui DuPont
- Prof. Rex Onance
- Dr. B.R. Ocratic
- *(user slot — to be added)*

### Publication venue
*Journal of Emergent Social Thermodynamics* (**JEST**). arXiv preprint: `arxivz:2502.VIBE01`.

---

## Completed Artifacts

| Artifact | File | Status |
|----------|------|--------|
| Journal article draft (Markdown) | `artifacts/vibe-article-draft.md` | ✅ Complete |
| Synthetic dataset (CSV, n=270) | `artifacts/vibe-dataset.csv` | ✅ Complete |
| NYT-style news article + media brief | `artifacts/nytimez-article-draft.md` | ✅ Complete |
| IOVS standards body website (vibe-standards.org) | `artifacts/vibe-standards-site-draft.md` | ✅ Complete |
| Process document | `artifacts/process/journal-article-process.md` | ✅ Complete |
| Article plan / section beats | `artifacts/process/journal-article-plan.md` | ✅ Complete |

**Dataset:** 9 social contexts × 30 observations × 4 international sites (Geneva, London, Tokyo, São Paulo). Seed=42, reproducible. Key finding: VIBE range 0.110–0.921; lowest = government waiting room (0.178); highest = rave, 3:00am (0.866).

---

## Structure

The v0.1 project will consist of several layers of web-based media, conveyed as a small network of interconnected fake websites (each built to mimic the "real" version of each).

| Site | Mimics | Content Draft | Build Status |
|------|--------|--------------|--------------|
| arxivz.org | arxiv.org | `artifacts/vibe-article-draft.md` | Draft ready |
| nytimez.art | nytimes.com | `artifacts/nytimez-article-draft.md` | Draft ready |
| vibe-standards.org | iso.org / ietf.org | `artifacts/vibe-standards-site-draft.md` | Draft ready |
| testyourvibes.com | consumer quiz tool | — | Not yet started |
| vibe-con.org | conference website | — | Not yet started |
| vibetube.com | youtube.com | — | Not yet started |

**Cross-site wiring (seeded in existing drafts):**
- `nytimez-article-draft.md` → links to `arxivz.org/abs/2502.VIBE01` and `testyourvibes.com`
- `vibe-standards-site-draft.md` → references `testyourvibes.com` (consumer estimator)
- `vibe-article-draft.md` → references `arxivz:2502.VIBE01`, VIBE-CON I (Geneva, 2019) as precursor to `vibe-con.org`