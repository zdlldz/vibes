> **arxivz:2502.VIBE01** [q-soc.TH]
> Received: 15 January 2025 | Accepted: 3 November 2025 | Published: 24 February 2026

---

# VIBE: A Novel Quantitative Framework for the Measurement of Vibrational-Intimate-Bureaucratic-Entropic Phenomena

**Anita Goodvibe¹\*, Cal I. Bration¹, Ennui DuPont¹, Rex Onance¹, B.R. Ocratic¹**

¹ Centre for Atmospheric and Social Energetics (CASE), University of Geneva, Geneva, Switzerland

\* Corresponding author: a.goodvibe@case.unige.ch

---

## Abstract

The term "vibe" enjoys widespread colloquial currency across languages and cultures, yet has resisted systematic quantitative definition. We introduce the **VIBE index** — a composite scalar measure of the Vibrational-Intimate-Bureaucratic-Entropic state of a social environment — and describe the **VIBEMETER Mark II**, a purpose-built field instrument for its measurement. Across 270 field observations spanning 9 social contexts and 4 international cities, VIBE scores ranged from 0.110 to 0.921, with context-level means between 0.178 (government waiting room) and 0.866 (rave, 3:00am). The funeral reception context yielded a mean VIBE of 0.534 — above the study midpoint — and a cluster of anomalously elevated Intimacy sub-index values in the government waiting room context is identified as warranting further investigation. These results establish, for the first time, a rigorous empirical basis for vibe quantification.

---

## 1. Introduction

The term "vibe" — a colloquial contraction of *vibration* — has achieved remarkable cross-cultural penetration as a descriptor of ambient social-affective states. It operates without disambiguation across documented usage in over forty languages, functions as a reliable shorthand for the composite experiential quality of a given environment, situation, or person, and is understood intuitively by speakers of all ages and backgrounds. The assertion "it's a vibe" — representing, in the framework we introduce below, a composite score of 1.0 — communicates an unmistakable, irreducible quality with no equivalent precision in formal scientific vocabulary. Its counterpart, "the vibes were off" (corresponding to a total null score of 0.0), is understood with equal reliability. Despite this ubiquity, no quantitative framework for vibe measurement has been proposed.

Prior work has approached the construct from adjacent angles. Goodvibe & Onance (2021) reported promising observations on interpersonal vibrational coherence in confined social spaces, but were constrained by the absence of a composite measurement instrument. DuPont, Ocratic, & Bration (2022) successfully isolated ennui as a thermodynamic-adjacent state variable without connecting this finding to the broader vibe construct. Frequencies & Wellbeing (2019) demonstrated that bureaucratic friction measurably suppresses ambient social energy — a foundational result for the present study — yet offered no aggregation model. The field has, in short, advanced considerably, but in fragments.

We address this gap by introducing the **VIBE index** (Vibrations, Intimacy, Bureaucracy, Entropy): a four-component composite scalar representing the full affective-thermodynamic state of a social environment at a given moment in time. We describe the **VIBEMETER Mark II**, a purpose-built field instrument incorporating sixteen sensor channels across the four sub-indices. We report 270 independent measurements across 9 social contexts and 4 international cities, and propose a formal aggregation function grounded in statistical mechanical theory. We further identify a class of "anti-VIBE" states — in which a single sub-index approaches zero, driving the composite score accordingly — and note preliminary empirical observations of sub-zero VIBE values that merit dedicated future study.

---

## 2. Methods

### 2.1 The VIBE Index: Sub-Index Definitions

We define the VIBE index as a composite scalar quantity representing the aggregate affective-thermodynamic state of a social environment at a given moment in time. It is composed of four sub-indices, each normalised to the interval [0, 1].

**V — Vibrations.** The total measured vibrational energy density of the environment, integrating acoustic energy (20 Hz–20 kHz, with infrasound extension to 0.1 Hz), photonic flux variation, atmospheric kinetic energy (via MEMS anemometry), and micro-seismic activity (3-axis accelerometry). A fifth channel — the proprietary **X-Factor Receptor™ (XFR)** — captures residual vibrational signal not accounted for by the above; its precise operating specifications are withheld pending patent resolution (XFR-2024-EU-00441). V = 1 denotes maximum vibrational richness; V = 0 denotes total energetic quiescence.

**I — Intimacy.** The aggregate interpersonal and neurophysiological proximity coefficient of the subjects present. Derived from: infrared thermometry (body heat gradient between subjects), a functional near-infrared spectroscopy (fNIRS)-adjacent **BrainSync™** optical probe (measuring neurological coherence between co-present individuals), galvanic skin response (perspiration index), respiratory coupling coefficient, and the **Semantic Proximity Analyzer™ (SPA)**, which estimates the ratio of expressed speech to demonstrably withheld speech — that is, *words said* relative to *words unsaid* — via contextual gap analysis of ambient discourse. I = 1 denotes maximum interpersonal coherence; I = 0 denotes complete social isolation.

**B — Bureaucracy.** Operationalised as the **inverse regulatory burden coefficient**: B = 1 represents the complete absence of institutional constraint; B = 0 represents total bureaucratic saturation. This inversion reflects the empirically established suppressive relationship between regulatory density and vibe expression (Frequencies & Wellbeing, 2019), and ensures that environments of high freedom — in which vibe potential is unimpeded — receive correspondingly high B scores. Measured via the Regulatory Burden Index (RBI) scanner, the Paperwork Density Gauge (PDG), and the Authority Proximity Sensor (APS), which estimates the spatial and hierarchical proximity of individuals holding institutional power.

**E — Entropy.** The entropic richness of the social environment — quantifying the availability and complexity of affective-informational states accessible to co-present subjects. Following Clausius (1865), Shannon (1948), and Boltzmann (1877), E is operationalised as the normalised information entropy of the composite ambient signal. High E values correspond to environments of high emotional and informational complexity; low E values to ordered, settled, or affectively depleted conditions. The colloquial concept of *ennui* — a state of high personal entropy combined with low ambient social entropy — is captured via the **Ennui Quotient™ (EQ)**, a self-reported instrument administered to subjects present, consisting of the single item: *"How bleh do you feel right now?"* (1 = not at all; 5 = profoundly). EQ scores are standardised and integrated into the E channel.

### 2.2 The Composite VIBE Score

The composite VIBE index is defined as the geometric mean of its four sub-indices:

$$\text{VIBE} = (V \times I \times B \times E)^{1/4}$$

This formulation ensures that any sub-index approaching zero drives the composite score toward zero — consistent with the well-attested colloquial observation that "the vibes were off" describes a total null state rather than a partial one. Under this model, the VIBE score admits no partial credit: a sufficiently bureaucratic environment, for instance, will suppress the composite index regardless of vibrational or intimate conditions.

The above is a convenient approximation for field use. The complete analytical expression, derived from the Gibbs-Boltzmann statistical mechanical framework, is:

$$\text{VIBE} = \mathcal{Z}^{-1} \cdot \exp\!\left(-\beta \cdot \mathcal{H}_{\text{VIBE}}\right)$$

where $\mathcal{H}_{\text{VIBE}} = -\frac{1}{4}\sum_{i} \ln(\varphi_i)$ is the VIBE Hamiltonian over the four sub-indices $\varphi \in \{V, I, B, E\}$; $\beta = (k_B \cdot T_{\text{soc}})^{-1}$ is the inverse social temperature, with $k_B$ the Boltzmann constant and $T_{\text{soc}}$ the social temperature of the environment (defined as the mean kinetic energy of interpersonal exchange per unit social mass, a novel intensive quantity introduced herein); and $\mathcal{Z}$ is the VIBE partition function normalising across all accessible microstates of the system. Under standard social conditions, this expression reduces to the geometric mean given above.

*Note on anti-VIBE states.* In four observations across the study, sub-index values appeared to approach or cross the zero boundary in the negative direction — suggesting the existence of "anti-VIBE" states in which active suppression, rather than mere absence, of signal was detected. These observations are excluded from the primary analysis pending development of an extended measurement model; see Section 4.

### 2.3 The VIBEMETER Mark II

The VIBEMETER Mark II is a portable, self-contained instrument incorporating all sixteen sensor channels described in §2.1. Full specifications are available in Bration (2024). All units used in this study were calibrated against a reference vibe source prior to each measurement session.

### 2.4 Study Design

Nine social contexts were selected to sample a wide range of expected VIBE scores, from high-entropy recreational environments to high-bureaucracy institutional settings (Table 1). Thirty independent measurements were collected per context, for a total of *n* = 270 observations. Field data were gathered across four international sites — Geneva (Switzerland), London (United Kingdom), Tokyo (Japan), and São Paulo (Brazil) — to control for cultural specificity in vibe expression. Each observation consisted of a minimum 15-minute VIBEMETER deployment by a trained operator; sub-index values were averaged over the observation window. Operators were blinded to expected VIBE scores throughout data collection.

---

## 3. Results

VIBE scores across all 270 observations ranged from **0.110 to 0.921**. Context-level means are summarised in Table 1.

**Table 1.** Mean sub-index values and composite VIBE scores (mean ± SD) across 9 social contexts (*n* = 30 per context).

| Context | V̄ | Ī | B̄ | Ē | VIBE (mean ± SD) |
|---|---|---|---|---|---|
| Rave, 3:00am | 0.923 | 0.799 | 0.872 | 0.880 | **0.866** ± 0.026 |
| Dog park, Sunday afternoon | 0.735 | 0.829 | 0.902 | 0.743 | **0.797** ± 0.038 |
| Christmas dinner | 0.772 | 0.821 | 0.631 | 0.779 | **0.740** ± 0.057 |
| First date (restaurant) | 0.592 | 0.821 | 0.827 | 0.537 | **0.677** ± 0.052 |
| Funeral reception | 0.331 | 0.565 | 0.733 | 0.620 | **0.534** ± 0.047 |
| Conference keynote, one attendee | 0.489 | 0.089 | 0.490 | 0.695 | **0.343** ± 0.038 |
| Monday morning remote standup | 0.245 | 0.176 | 0.315 | 0.445 | **0.272** ± 0.039 |
| University library, silent reading room | 0.134 | 0.216 | 0.451 | 0.290 | **0.242** ± 0.030 |
| Government waiting room | 0.168 | 0.217† | 0.083 | 0.425 | **0.178** ± 0.027 |

† Intimacy sub-index inflated by 4 anomalous observations (see text); non-outlier mean Ī = 0.157.

**Extremes.** The rave (mean VIBE = 0.866) and dog park (0.797) represent the two highest-VIBE environments observed, characterised by high scores across all four sub-indices. The rave's superior Vibrations score (V̄ = 0.923 vs. 0.735) is the decisive differentiator. The government waiting room (0.178) produced the lowest mean score, driven primarily by a B̄ of 0.083 — the lowest bureaucracy-freedom coefficient observed in this study. The finding is unambiguous: bureaucracy, acting alone, is sufficient to destroy a vibe.

**The funeral reception.** The funeral reception (mean VIBE = 0.534) scored above the study midpoint — an unexpected result. High Intimacy (Ī = 0.565) and Entropy (Ē = 0.620) indicate that grief, while subdued in its vibrational expression (V̄ = 0.331), generates substantial interpersonal warmth and affective complexity. The authors note that this result, while counterintuitive, is consistent with the informal observation that "a good funeral" is a socially recognised phenomenon in many cultures.

**Bureaucracy-Induced Intimacy Surge (BIIS).** Four observations in the government waiting room context (obs. 21–24 in the dataset, collected across the Tokyo and São Paulo sites) exhibited anomalously elevated Intimacy sub-index values — Ī = 0.532–0.699 (mean 0.606) — against a non-outlier context mean of 0.157. Field notes recorded by the operator indicate that during this measurement window, two individuals in the queue entered into an extended conversation arising from their shared experience of waiting, establishing a transient but measurable interpersonal bond. This phenomenon — provisionally designated **Bureaucracy-Induced Intimacy Surge (BIIS)** — suggests that extreme bureaucratic conditions may paradoxically catalyse intimacy through shared adversity, and represents a subject of considerable theoretical interest.

**The lone-attendee keynote.** The conference keynote with one attendee present produced a mean VIBE of 0.343 — notably above the library and standup, and substantially above the government waiting room, owing to a respectable Vibrations score (V̄ = 0.489) generated by the presenter's continued performance, and elevated Entropy (Ē = 0.695) consistent with conditions of high systemic uncertainty. The authors observe that this scenario may represent a boundary condition for the VIBE construct: a situation in which vibes are technically generated but not received.

**Christmas dinner variance.** Christmas dinner produced the highest standard deviation in the study (SD = 0.057), driven by variance in the Intimacy (SD = 0.122) and Entropy (SD = 0.105) sub-indices. This reflects the well-documented bimodal distribution of Christmas dinner emotional valence across cultures and family configurations.

---

## 4. Future Research

The present study establishes baseline VIBE norms for a representative sample of social environments, but several important questions remain open.

1. **Anti-VIBE states.** The four observations approaching sub-zero values indicate that the standard [0, 1] model requires extension to accommodate environments of active vibe suppression. A companion framework extending sub-index domains to [−1, 1] — in which negative values represent active antagonism rather than mere absence — is in preparation.

2. **The X-Factor Receptor.** The XFR channel contributed meaningfully to Vibrations scores throughout this study, yet its operating specifications remain proprietary pending patent resolution (XFR-2024-EU-00441). Open publication of XFR specifications is a stated priority of the laboratory.

3. **Longitudinal VIBE decay.** In accordance with the Second Law of Thermodynamics, it is theorised that any environment's VIBE tends toward equilibrium — toward a mean value — unless energy is actively introduced. A longitudinal study tracking fixed-environment VIBE over extended periods would test this hypothesis and, if confirmed, permit derivation of the first empirical **VIBE half-life constant**.

4. **Cross-species VIBE.** The VIBE index was developed and validated exclusively in human social contexts. Whether non-human animals generate, perceive, or respond to VIBE signals remains an open question. Preliminary evidence from the dog park context — in which canine subjects appeared to be significant contributors to ambient Vibration and Intimacy scores — warrants dedicated instrumentation and protocol development. The authors note the philosophical antecedent: *if a tree falls in the forest and no one is there to feel it, does it have a vibe?*

5. **Bureaucracy-Induced Intimacy Surge (BIIS).** The anomalous observations in the government waiting room context suggest that extreme bureaucratic pressure may, under certain conditions, catalyse the very intimacy it otherwise suppresses. If replicable, BIIS would constitute a significant corrective to the model's treatment of B, with material implications for the design of public administrative spaces.

---

## Acknowledgements

The authors thank the 270 study participants across Geneva, London, Tokyo, and São Paulo for their cooperation, their patience, and — in several cases — their ennui. This work was supported by the European Research Council under grant agreement VIBE-2023-EU-88312. The authors additionally thank the organisers of the event recorded as Context 1, who graciously permitted VIBEMETER instrumentation of the venue without disruption to the programme, and the single attendee of the event recorded as Context 8, whose continued presence enabled completion of the measurement protocol.

---

## References

[1] Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung respektive den Sätzen über das Wärmegleichgewicht. *Wien. Ber.*, 76, 373–435.

[2] Bration, C.I. (2024). Design and calibration of the VIBEMETER Mark II: a field instrument for composite VIBE index measurement. *Instruments for Social Science*, 7(4), 201–215.

[3] Clausius, R. (1865). Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie. *Annalen der Physik*, 125, 353–400.

[4] DuPont, E., Ocratic, B.R., & Bration, C.I. (2022). Ennui as a thermodynamic state variable: toward a first approximation. *Journal of Unmeasured Phenomena*, 4(2), 44–51.

[5] Frequencies, S. & Wellbeing, M. (2019). Bureaucratic friction and its measurable suppression of ambient social energy. *Proceedings of the 1st International Conference on Affective Thermodynamics*, Geneva, pp. 112–118.

[6] Goodvibe, A. & Onance, R. (2021). Preliminary observations on interpersonal vibrational coherence in confined social spaces. *Journal of Emergent Social Thermodynamics*, 1(1), 1–8.

[7] Shannon, C.E. (1948). A mathematical theory of communication. *Bell System Technical Journal*, 27(3), 379–423.
