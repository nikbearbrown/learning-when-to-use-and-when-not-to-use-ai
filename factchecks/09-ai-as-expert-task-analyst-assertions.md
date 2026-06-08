# Assertions Report: 09-ai-as-expert-task-analyst.md
**Date:** 2026-06-08
**Source file:** chapters/09-ai-as-expert-task-analyst.md
**Assertions flagged:** 6
**Breakdown:** STAT: 1 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 4 | SPECIALIST: 1 | CURRENT: 0

---

## ⚠️ Critical — Requires Immediate Expert Review
None found. (No OUTDATED, CONTRADICTED, or COMBINATION assertions.)

---

## Full Findings

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "Cognitive task analysis at d = 1.29 — rank 4 of 252 — is a family of interview and observation methods for extracting what experts actually do... Figures around seventy percent of critical decision points appear in the CTA literature. [verify — the canonical claim traces to Clark and colleagues' reviews]."
**Claim checked:** CTA effect size ~1.29; the ~70% expert-omission figure; attribution to Clark and colleagues.
**Site visited:** pubmed.ncbi.nlm.nih.gov/24667500/ ; researchgate (Clark, Feldon, van Merriënboer, Yates & Early, "Cognitive Task Analysis")
**Finding:** Confirmed. The omission figure is well supported: studies in the CTA literature (associated with Clark and colleagues) report experts omitting ~70% of decision steps (e.g., ~71% of clinical knowledge steps, ~73% of decision steps; surgeons omitting nearly 70% of necessary decision steps when unaided). The ~1.29 effect size is from the verified 2018 Hattie list (rank 4). The chapter's inline "[verify]" tag can be cleared.
**Expert review needed:** No
**Suggested reference:** Clark, R. E., Feldon, D. F., van Merriënboer, J. J. G., Yates, K. A., & Early, S. (2008). Cognitive task analysis. In Handbook of Research on Educational Communications and Technology (3rd ed.).
**Notes:** The chapter correctly notes the CTA meta-analytic base is small and skews military/medical/technical rather than K-12.

### STAT — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "cognitive task analysis (d = 1.29), Piagetian programs (d = 1.28), conceptual change programs (d = 0.99), help seeking (d = 0.72)... weighted average 1.07."
**Claim checked:** Per-row effect sizes for the four influences.
**Site visited:** visible-learning.org influence list.
**Finding:** Drawn from the verified 2018 252-influence list (core fact #2). Piagetian programs (~1.28) and CTA (~1.29) are among Hattie's highest-ranked influences, consistent with published values; conceptual change (~0.99) and help-seeking (~0.72) plausible. Author self-flags "[verify all figures against MetaX]."
**Expert review needed:** No (low risk — anchored to verified list)
**Suggested reference:** Visible Learning, Hattie Ranking: 252 Influences. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** The chapter appropriately flags Piagetian programs as substantially a measurement correlation (per Ch.6's context-variable grammar) — accurate caveat.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "Bastani's field experiment is the receipt: unrestricted GPT access lifted practice performance forty-eight percent and left students seventeen percent *worse* on unaided assessment, while the guardrailed tutor — hints, no answers — avoided the harm."
**Claim checked:** Bastani PNAS figures (reused).
**Site visited:** https://www.pnas.org/doi/10.1073/pnas.2422633122 (reused from Ch.1).
**Finding:** Confirmed against verified Bastani result.
**Expert review needed:** No
**Suggested reference:** Bastani, H., et al. (2025). Generative AI without guardrails can harm learning. PNAS, 122. https://www.pnas.org/doi/10.1073/pnas.2422633122
**Notes:** Resolved: chapter prose now uses the full Bastani title.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "VanLehn's review of the tutoring literature puts human tutoring at d = 0.79 and step-based intelligent tutoring at a statistically comparable 0.76 — the effect lives in coached stepping, not answer delivery."
**Claim checked:** VanLehn 2011: human tutoring d = 0.79, step-based ITS d = 0.76.
**Site visited:** https://eric.ed.gov/?id=EJ946764 (reused from Ch.1).
**Finding:** Confirmed precisely. Human tutoring 0.79; step-based ITS 0.76. The chapter's "statistically comparable" framing matches VanLehn's central finding.
**Expert review needed:** No
**Suggested reference:** VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 46(4), 197–221. https://doi.org/10.1080/00461520.2011.611369
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "Conceptual change programs at d = 0.99. Instruction that surfaces a learner's existing misconception, confronts it with discrepant evidence, and supports rebuilding — because misconceptions are not absences of knowledge but rival theories that fight back."
**Claim checked:** Definition/mechanism of conceptual change instruction (misconceptions as coherent rival theories).
**Site visited:** Established (Posner, Strike, Hewson & Gertzog 1982; Vosniadou; diSessa conceptual-change literature).
**Finding:** Confirmed. The chapter's description matches the standard conceptual-change account: misconceptions are coherent, experience-grounded alternative frameworks that must be confronted with discrepant evidence and reconstructed, not simply overwritten. Accurate.
**Expert review needed:** No
**Suggested reference:** Posner, G. J., Strike, K. A., Hewson, P. W., & Gertzog, W. A. (1982). Accommodation of a scientific conception: Toward a theory of conceptual change. Science Education, 66(2), 211–227.
**Notes:** None.

### SPECIALIST — CONFIRMED (capability claim, plausible)
**Assertion type:** POSITIVE
**Sentence:** "An LLM's decomposition is a synthesis of how tasks like this are *described in text*, not an observation of Ray's hands... it will fill gaps with plausible interpolation, indistinguishable in fluency from the parts it got right."
**Claim checked:** Functional claim that LLM task decompositions reflect textual training data and can hallucinate tacit/local steps with undetectable fluency.
**Site visited:** General knowledge of LLM behavior; consistent with documented hallucination literature.
**Finding:** Confirmed and accurate. LLM outputs reflect patterns in text training data, not direct observation; confident fabrication of plausible-but-wrong content ("hallucination") that is stylistically indistinguishable from correct content is well documented. The chapter's "convincing incompetence" framing and its non-negotiable expert-validation clause are well grounded.
**Expert review needed:** No
**Suggested reference:** Could not identify a single specific source; established LLM-behavior consensus.
**Notes:** The chapter correctly tags the d ≈ 1.00 AI-assisted-CTA figure as [HYPOTHESIS].

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
|---|---|---|---|
| "Piagetian programs at d = 1.28... derives substantially from correlating children's Piagetian developmental-stage measures with achievement [contested]." | EVIDENCE | POSITIVE | Author self-flagged "[contested]"; the precise composition of the Piagetian-programs effect (program vs. measurement correlation) not independently re-derived. The author's skeptical framing is reasonable. |
| Clark et al. (2008) Further Reading "[verify edition and omission-percentage figures]" | EVIDENCE | BASIC | Author self-flagged on edition/exact figures. The omission percentages (~70% decision steps) are corroborated above; the specific handbook edition/chapter not independently confirmed. |

---

## AI-Pass Flags
1. No logical inconsistencies found. The "double blindness" repair framing (task model / readiness model / prior-knowledge model / learner-run repair), the draft-as-interview-instrument reframe, and the two traps (unvalidated decomposition / executive-help machine) are internally coherent.
2. The chapter maintains [HYPOTHESIS] discipline on the d ≈ 1.00 AI-assisted-CTA estimate. No flag.
3. Resolved: chapter prose now uses the full Bastani title.
