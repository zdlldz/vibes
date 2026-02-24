# Journal Article: Planning Document
## Section-by-Section Content Plan

**Status:** Phase 1 — Planning COMPLETE → Ready to Write
**Date:** 2026-02-24
**Follows from:** `.context/journal-article-process.md`
**Dataset:** `.context/vibe-dataset.csv` (270 obs, seed=42, reproducible)

---

## Writing Order

Write in this sequence — not linear — to ensure numbers and claims stay internally consistent:

1. **Methods** — defines the model; everything else references it
2. **Results** — uses the dataset directly; fixes the narrative claims
3. **Introduction** — can now gesture forward to specific findings
4. **Future Research** — references gaps exposed by Results
5. **Abstract** — written last; pure compression of the whole paper
6. **Acknowledgements** — last; two sentences

---

## Section Plans

---

### 1. Abstract (~100 words)

**Written last. Summarizes the whole paper.**

Beats (in order):
1. Open with the problem — "vibe" is a term with global cultural currency but no scientific definition
2. Announce the contribution — we introduce the **VIBE index** (Vibrations, Intimacy, Bureaucracy, Entropy) and the **VIBEMETER** instrument
3. State the study — 270 field measurements across 9 social contexts in 4 international cities
4. Headline finding — VIBE scores ranged from **0.178** (government waiting room) to **0.866** (rave, 3:00am); an unexpected mid-range result was observed in the funeral reception context (mean VIBE = 0.534)
5. Note anomaly — a small cluster of observations in the government waiting room context exhibited anomalously elevated Intimacy sub-index values, warranting further investigation
6. Close — findings establish a rigorous empirical basis for vibe quantification; implications for social, architectural, and thermodynamic science are discussed

**Tone note:** The abstract never smiles. Pure journal-speak.

---

### 2. Introduction

**~3–4 paragraphs. Sets up the problem, the gap, and the paper.**

**¶1 — The ubiquity of the vibe (and its definitional vacuum)**
- Open with the cultural omnipresence of "vibe" — cross-linguistic, cross-generational, universally understood
- Note the paradox: something understood by everyone has never been formally defined, let alone measured
- The phrase "it's a vibe" (colloquially equivalent to a composite score of 1.0) operates as an assertion of unmistakable, irreducible quality — and yet science has nothing to say about it
- One or two gestures toward adjacent literature that has *tried* and failed: phenomenology, affect theory, "social atmosphere" studies — all hand-wavy, none with an instrument

**¶2 — Prior art and its limitations (fake citations do their work here)**
- Reference Goodvibe & Onance (2021): promising early observations on vibrational coherence, but no unified framework and no measurement instrument
- Reference DuPont, Ocratic & Bration (2022): successfully isolates ennui as a thermodynamic-adjacent state variable, but does not connect it to the broader vibe construct
- Reference Frequencies & Wellbeing (2019): identifies bureaucratic friction as a suppressor of social energy, but the mechanism is underspecified
- Verdict: "the field has advanced considerably in recent years, yet a unified, instrument-backed quantitative framework for the composite vibe state has remained elusive"

**¶3 — The present contribution**
- We introduce the **VIBE index** — a four-component composite measure
- We describe the **VIBEMETER Mark II** — a purpose-built field instrument
- We report **270 measurements** across 9 social contexts and 4 international sites
- We propose a formal aggregation function based on the geometric mean (with full statistical mechanical derivation provided)
- We identify and classify a class of "anti-VIBE" states (VIBE approaching zero via single-component nullification) and note preliminary observations of sub-zero VIBE values

**¶4 — Paper structure** (optional, often included in short papers)
- One sentence: "The remainder of this paper is organised as follows: Section 2 describes the VIBE index, its components, and the VIBEMETER instrument; Section 3 presents the study design and measurement protocol; Section 4 reports findings; Section 5 identifies directions for future research."

---

### 3. Methods

**The load-bearing section. Two logical halves: the model, then the study design.**

**3.1 — The VIBE Index: Definition and Components**

Open with formal definition:
> "We define the Vibrational-Intimate-Bureaucratic-Entropic (VIBE) index as a composite scalar quantity representing the aggregate affective-thermodynamic state of a given social environment at a given moment in time."

Then define each sub-index in sequence:

- **V (Vibrations):** the total measured vibrational energy density of the environment, integrating acoustic (20 Hz–20 kHz + infrasound extension to 0.1 Hz), photonic (luminance flux variation), atmospheric (MEMS anemometry), and micro-seismic (3-axis accelerometry) channels. Also includes a proprietary **X-Factor Receptor™ (XFR)** channel, the precise specifications of which are withheld pending patent application (XFR-2024-EU-00441). V is expressed as a normalised index ∈ [0, 1].

- **I (Intimacy):** the aggregate interpersonal and neurophysiological proximity coefficient of the subjects present. Measured via infrared thermometry (body heat gradient), functional near-infrared spectroscopy (fNIRS)-adjacent BrainSync™ optical probes (neurological coherence index), galvanic skin response (perspiration index), respiratory coherence monitoring, and the **Semantic Proximity Analyzer™ (SPA)**, which quantifies the ratio of words expressed to words demonstrably withheld ("words unsaid") via contextual gap analysis of ambient speech. I ∈ [0, 1].

- **B (Bureaucracy):** operationalised as the **inverse regulatory burden coefficient** — i.e., B = 1 represents complete absence of institutional constraint, and B = 0 represents total bureaucratic saturation. Measured via the Regulatory Burden Index (RBI) scanner, Paperwork Density Gauge (PDG), and Authority Proximity Sensor (APS). The inversion is noted explicitly: *higher B values indicate freer social conditions, and thus greater potential for unimpeded vibe expression.* B ∈ [0, 1].

- **E (Entropy):** the entropic richness of the social environment — quantifying not disorder per se, but the availability and complexity of affective-informational states. Following Shannon (1948) and Boltzmann (1877), we operationalise E as the normalised information entropy of the composite ambient signal. High E values correspond to environments of high informational and emotional complexity; low E values correspond to ordered, settled, or depleted environments. E ∈ [0, 1]. Note: the colloquial concept of "ennui" (a state of high personal entropy with low social entropy) is captured via the **Ennui Quotient™ (EQ)**, a self-reported 5-point Likert instrument administered to subjects present: *"How bleh do you feel right now?"* (1 = not at all; 5 = profoundly).

**3.2 — The Composite VIBE Score**

Present the accessible shorthand first:

> "The composite VIBE index is defined as the geometric mean of its four sub-indices:"

```
VIBE = (V × I × B × E)^(1/4)
```

> "This formulation ensures that any sub-index approaching zero drives the composite score toward zero — a property consistent with the well-attested colloquial observation that 'the vibes were off' describes a total null state rather than a partial one. In formal terms, the VIBE score admits no partial credit."

Then introduce the full expression:

> "The above may be recognised as a convenient field approximation. The complete analytical expression, derived from the Gibbs-Boltzmann statistical mechanical framework, is given by:"

```
VIBE = Z⁻¹ · exp(−β · H_VIBE)
```

> "where H_VIBE = −(1/4) Σᵢ ln(φᵢ) is the VIBE Hamiltonian, β = (k_B · T_soc)⁻¹ is the inverse social temperature, k_B is the Boltzmann constant, T_soc is the social temperature of the environment (a novel intensive quantity introduced herein, defined as the mean kinetic energy of interpersonal exchange per unit social mass), and Z is the VIBE partition function normalising across all accessible microstates of the system. Under standard social conditions, this expression reduces to the geometric mean given above."

(The joke lands silently: it is exactly the geometric mean, every time, because that's what it is.)

**3.3 — The VIBEMETER Mark II**

Brief instrument description — refer readers to Bration (2024) for full specifications. Note: this study used the Mark II model. List the sensor modules organised by sub-index (V, I, B, E — each with its sub-sensors, as per the locked spec). Include one dry, authoritative sentence like: *"All VIBEMETER units were calibrated against a reference vibe source prior to each measurement session."* (What is a reference vibe source? The paper does not say.)

**3.4 — Study Design**

- 9 social contexts selected to span a wide range of expected VIBE scores
- 30 independent measurements per context (n_total = 270)
- 4 international field sites: Geneva (Switzerland), London (United Kingdom), Tokyo (Japan), São Paulo (Brazil) — chosen to control for cultural specificity of vibe expression
- Each observation: VIBEMETER deployed by a trained operator for a minimum of 15 minutes; sub-index values averaged over the observation window
- Operators blinded to expected VIBE scores (single-blind protocol)
- Note on B inversion reiterated briefly here for clarity

**Brief footnote on anti-VIBE:**
> "In four observations, sub-index values appeared to approach or cross the zero boundary in the negative direction, suggesting the existence of 'anti-VIBE' states (VIBE < 0) in which active suppression — rather than mere absence — of vibrational, intimate, bureaucratic, or entropic signal was detected. These observations are excluded from the primary analysis pending development of an extended measurement framework; see Section 5."

---

### 4. Results

**Data-forward. Table 1 anchors the section. Narrative picks out the interesting moments.**

**Opening sentence:** Report the range. Something like:
> "VIBE scores across the 270 observations ranged from 0.071 to 0.952, with context-level means between 0.178 (government waiting room) and 0.866 (rave, 3:00am)."

**Table 1** — Summary of mean VIBE scores and sub-index means by context:

| Context | V̄ | Ī | B̄ | Ē | VIBE (mean ± SD) |
|---------|---|---|---|---|-----------------|
| Rave, 3:00am | 0.920 | 0.811 | 0.871 | 0.890 | 0.866 ± 0.031 |
| Monday morning remote standup | 0.222 | 0.191 | 0.340 | 0.411 | 0.272 ± 0.048 |
| First date (restaurant) | 0.610 | 0.789 | 0.830 | 0.540 | 0.677 ± 0.054 |
| Government waiting room | 0.180 | 0.178* | 0.080 | 0.440 | 0.178 ± 0.041 |
| Funeral reception | 0.310 | 0.580 | 0.720 | 0.620 | 0.534 ± 0.071 |
| Dog park, Sunday afternoon | 0.740 | 0.840 | 0.910 | 0.760 | 0.797 ± 0.038 |
| University library, silent reading room | 0.140 | 0.210 | 0.420 | 0.290 | 0.242 ± 0.039 |
| Conference keynote, one attendee | 0.520 | 0.090 | 0.480 | 0.710 | 0.343 ± 0.052 |
| Christmas dinner | 0.790 | 0.850 | 0.610 | 0.820 | 0.740 ± 0.094 |

*Intimacy sub-index inflated by 4 anomalous observations (n=4; Ī_anomalous = 0.614); see text.

**Narrative beats after the table:**

1. **The extremes** — The rave (0.866) and dog park (0.797) represent the two highest-VIBE environments observed, distinguished by high scores across all four sub-indices. Notably, the rave's superior V score (0.920 vs. 0.740) is the decisive differentiator between first and second place. The government waiting room (0.178) represents the minimum — driven primarily by an extreme B suppression (B̄ = 0.080), the lowest bureaucracy-freedom score observed in the study. *Bureaucracy, alone, is sufficient to destroy a vibe.*

2. **The surprising result: the funeral** — The funeral reception (mean VIBE = 0.534) scored above the midpoint of the observed range — an unexpected finding. High Intimacy (Ī = 0.580) and Entropy (Ē = 0.620) scores indicate that grief, while subdued in its vibrational expression, generates substantial interpersonal warmth and affective complexity. The authors note that this result, while counterintuitive, is consistent with the informal observation that "a good funeral" is a recognized social phenomenon.

3. **The anomaly in Context 4 (Government Waiting Room)** — Four observations (obs. 21–24 in the dataset, collected at the São Paulo site) exhibited anomalously elevated Intimacy sub-index values (Ī = 0.614 vs. context mean 0.152 for remaining observations). Field notes recorded by the operator indicate that during this measurement window, two individuals in the queue entered into an extended conversation regarding the shared experience of waiting, establishing a transient but measurable bond. This phenomenon — designated provisionally as **Bureaucracy-Induced Intimacy Surge (BIIS)** — represents a subject of considerable theoretical interest and is flagged for follow-up study.

4. **The lone-attendee keynote** — The conference keynote with one attendee (mean VIBE = 0.343) was notably *not* the lowest-scoring context, owing to a respectable Vibrations score (V̄ = 0.520) generated by the presenter's continued performance despite audience attrition, as well as elevated Entropy (Ē = 0.710) consistent with conditions of high systemic uncertainty. The authors observe that the continued presentation itself, in the absence of an audience, may represent a boundary condition for the VIBE construct — a situation in which vibes are, technically, generated but not received.

5. **Christmas dinner variance** — Christmas dinner produced the highest standard deviation in the dataset (SD = 0.094), driven primarily by variance in the Intimacy (SD_I = 0.14) and Entropy (SD_E = 0.12) sub-indices. This reflects the well-documented bimodal distribution of Christmas dinner emotional valence across cultures and family configurations.

---

### 5. Future Research

**Short section. ~4–5 brief paragraphs or a numbered list. Each item is a genuine-sounding research gap.**

1. **Anti-VIBE states** — The four anomalous observations approaching sub-zero VIBE values indicate that the current [0, 1] model requires extension. A proposed extension to φ ∈ [−1, 1] — in which negative values represent active suppression rather than mere absence — is under development by the authors. A companion paper formalising the anti-VIBE framework is in preparation.

2. **The X-Factor Receptor (XFR)** — The XFR channel contributed meaningfully to V scores throughout the study, yet its underlying measurement mechanism remains proprietary and unpublished pending patent resolution. Formal characterisation and open publication of XFR specifications is a priority for the lab.

3. **Longitudinal VIBE decay** — Consistent with the Second Law of Thermodynamics, it is theorised that any environment's VIBE will tend toward equilibrium — i.e., toward a mean value — over time, unless energy is actively introduced. A longitudinal study tracking VIBE scores in fixed environments over weeks or months would test this hypothesis and potentially establish the first empirical VIBE half-life constant.

4. **Cross-species VIBE** — The VIBE index was developed for and validated exclusively in human social contexts. Whether non-human animals generate, perceive, or respond to VIBE signals is an open and philosophically rich question. *If a tree falls in the forest and no one is there to feel it — does it have a vibe?* Preliminary evidence from Context 6 (dog park) suggests that dogs may in fact be significant contributors to ambient VIBE, warranting dedicated instrumentation.

5. **Bureaucracy-Induced Intimacy Surge (BIIS)** — The anomalous observations in Context 4 suggest that extreme bureaucratic conditions may, paradoxically, catalyse intimacy through shared adversity. This effect, if replicable, would constitute a surprising corrective to the generally suppressive role of B in the VIBE model, and would have significant implications for the design of public administrative spaces.

---

### 6. Acknowledgements

**Two to three sentences. Warm, slightly formal, with one absurd detail.**

- Thank the study participants across all four sites
- Thank the funding body: *European Research Council under grant agreement VIBE-2023-EU-88312*
- Thank the rave organizers who "graciously permitted instrumentation of the venue without disruption to the programme"
- Optional: thank the one attendee at the conference keynote, "whose continued presence enabled completion of the measurement protocol"

---

### 7. References

**Final, complete reference list:**

[1] Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung respektive den Sätzen über das Wärmegleichgewicht. *Wien. Ber.*, 76, 373–435.

[2] Bration, C.I. (2024). Design and calibration of the VIBEMETER Mark II: a field instrument for composite VIBE index measurement. *Instruments for Social Science*, 7(4), 201–215.

[3] Clausius, R. (1865). Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie. *Annalen der Physik*, 125, 353–400.

[4] DuPont, E., Ocratic, B.R., & Bration, C.I. (2022). Ennui as a thermodynamic state variable: toward a first approximation. *Journal of Unmeasured Phenomena*, 4(2), 44–51.

[5] Frequencies, S. & Wellbeing, M. (2019). Bureaucratic friction and its measurable suppression of ambient social energy. *Proceedings of the 1st International Conference on Affective Thermodynamics*, Geneva, pp. 112–118.

[6] Goodvibe, A. & Onance, R. (2021). Preliminary observations on interpersonal vibrational coherence in confined social spaces. *Journal of Emergent Social Thermodynamics*, 1(1), 1–8.

[7] Shannon, C.E. (1948). A mathematical theory of communication. *Bell System Technical Journal*, 27(3), 379–423.

**Note on [5]:** "Frequencies, S." = Dr. Seymour Frequencies; "Wellbeing, M." = Prof. Max Wellbeing — both independent researchers, not CASE affiliates. They attended VIBE-CON 1 (Geneva, 2019) and this citation quietly establishes that conference as the precursor to vibe-con.org. Nice ecosystem seeding.

---

## Key Numbers to Hold Consistently Across All Sections

These must be identical everywhere they appear:

| Fact | Value |
|------|-------|
| Total observations | 270 |
| Contexts | 9 |
| Observations per context | 30 |
| International sites | 4 (Geneva, London, Tokyo, São Paulo) |
| Highest VIBE (mean) | 0.866 — Rave, 3:00am |
| Lowest VIBE (mean) | 0.178 — Government waiting room |
| Surprising mid-range | 0.534 — Funeral reception |
| Anomalous outliers | 4 observations, Context 4, high-I cluster (BIIS) |
| Max SD | 0.094 — Christmas dinner |
| Dataset citation | seed=42; full dataset available via CASE data repository |

---

## Flagged Decisions for Writer Attention

1. **B inversion** — must be explained clearly in Methods 3.1 and reiterated briefly in 3.4. The paper should not let readers wonder why a "bureaucracy" component scores *high* at a rave.

2. **T_soc ("social temperature")** — introduced in the formula derivation. Defined as *"the mean kinetic energy of interpersonal exchange per unit social mass"* — keep this as a throwaway parenthetical; do not over-explain. The comedy is in the confidence, not the explanation.

3. **XFR patent number** — use XFR-2024-EU-00441 throughout. Invent once, use consistently.

4. **ERC grant number** — use VIBE-2023-EU-88312 in Acknowledgements.

5. **arXiv header** — the preprint header should include: received Jan 15 2025 / accepted Nov 3 2025 / published Feb 2026. arXiv ID: arxivz:2502.VIBE01.

6. **"The vibes were off" / "it's a vibe"** — these colloquial reference points should appear in the Introduction (perhaps in the opening paragraph), establishing them as the empirical anchors the model was designed to formalize. Never used again after that.
