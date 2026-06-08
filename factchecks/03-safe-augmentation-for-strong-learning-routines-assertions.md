# Assertions Report: 03-safe-augmentation-for-strong-learning-routines.md
**Date:** 2026-06-08
**Source file:** chapters/03-safe-augmentation-for-strong-learning-routines.md
**Assertions flagged:** 6
**Breakdown:** STAT: 2 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 3 | SPECIALIST: 0 | CURRENT: 1

---

## ⚠️ Critical — Requires Immediate Expert Review
None found. (No OUTDATED, CONTRADICTED, or COMBINATION assertions.)

---

## Full Findings

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "Roediger and Karpicke's retrieval-effort studies sharpen this into a finding worth sitting with: being made to retrieve produces more durable memory than restudying the same material, even though restudying feels more productive at the time."
**Claim checked:** Testing/retrieval effect attributed to Roediger & Karpicke; retrieval > restudy for long-term retention.
**Site visited:** Further Reading cross-check (Roediger & Karpicke 2006, Psychological Science 17(3):249–255); canonical in memory research.
**Finding:** Confirmed. Roediger & Karpicke (2006) is the canonical demonstration of test-enhanced learning: retrieval practice produces more durable long-term retention than repeated study, despite restudy feeling more productive (the metacognitive illusion). The chapter's characterization is accurate.
**Expert review needed:** No
**Suggested reference:** Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.
**Notes:** None.

### STAT — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "Spaced practice outperforms massed practice — d = 0.60 for the comparison — for a reason that feels wrong the first time you hear it: spacing makes review *harder.*"
**Claim checked:** Spaced vs. massed practice d = 0.60 (Hattie 2018 list).
**Site visited:** visible-learning.org influence list.
**Finding:** Consistent with the 2018 252-influence list (the verified source list, core fact #2), which places "spaced vs. mass practice" above the hinge in the ~0.60 range. The spacing-effect mechanism (effortful retrieval of partly forgotten material = desirable difficulty) is well established in cognitive psychology.
**Expert review needed:** No
**Suggested reference:** Visible Learning, Hattie Ranking: 252 Influences. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "This is the Bastani pattern in miniature: unguardrailed help inflates in-app performance while removing the strain that was the mechanism."
**Claim checked:** Bastani PNAS pattern (unguardrailed AI inflates practice performance, harms later unassisted performance).
**Site visited:** https://www.pnas.org/doi/10.1073/pnas.2422633122 (reused from Ch.1 verification).
**Finding:** Confirmed. Matches the verified Bastani et al. (2025) result: unrestricted GPT-4 (+48% practice, −17% later) vs. guardrailed tutor (+127% practice, harm largely mitigated). The chapter's "in miniature" application is faithful.
**Expert review needed:** No
**Suggested reference:** Bastani, H., et al. (2025). Generative AI without guardrails can harm learning. PNAS, 122. https://www.pnas.org/doi/10.1073/pnas.2422633122
**Notes:** None.

### STAT — UNVERIFIED
**Assertion type:** POSITIVE
**Sentence:** "Twenty-one influences share a classification signature... Effect sizes run from 0.40 to 0.68, weighted average 0.50. [verify against MetaX near publication]" and the per-row figures (Field independence d = 0.68; Acceleration d = 0.68; Spaced vs. mass practice d = 0.60; Record keeping d = 0.52; etc.).
**Claim checked:** Specific per-influence effect-size decimals and group range/average.
**Site visited:** visible-learning.org influence list (general).
**Finding:** The decimals are drawn from the verified 2018 252-influence list (core fact #2) and are individually plausible and internally consistent. Exact per-row values not each re-confirmed against MetaX; the author has self-flagged with an inline "[verify against MetaX near publication]" tag.
**Expert review needed:** No (low risk — anchored to verified list)
**Suggested reference:** Visible Learning MetaX (visiblelearningmetax.com)
**Notes:** Author self-flagged; recommend a MetaX spot-check of the group's range/average before print.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "'Relations of high school to university achievement' (d = 0.60) sits in this group as an association, not a program... [verify]"
**Claim checked:** That this entry is a correlation/association rather than an intervention.
**Site visited:** Internal-logic check against the chapter's own (verified, Ch.1) framework.
**Finding:** Conceptually correct and consistent with Chapter 1's established point that the list mixes interventions with correlations/conditions. The specific 0.60 decimal is from the 2018 list; author flags "[verify]." No external contradiction.
**Expert review needed:** No
**Suggested reference:** Visible Learning, Hattie Ranking: 252 Influences. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** None.

### CURRENT — CONFIRMED (capability claim, plausible)
**Assertion type:** BASIC
**Sentence:** "AI can run the spacing engine: compute review intervals per topic, resurface October's concepts in January, interleave ideas, and adjust intervals per student based on retrieval success."
**Claim checked:** Whether current AI/software can perform automated spaced-repetition scheduling and adaptive interval adjustment.
**Site visited:** General knowledge — spaced-repetition scheduling (SM-2/Anki-class algorithms, adaptive LMS review) is mature, pre-AI technology widely deployed.
**Finding:** Confirmed and uncontroversial. Automated interval scheduling and per-student adjustment based on success is standard functionality (Anki, Quizlet, Duolingo, LMS review engines) and predates LLMs. The claim is accurate and unlikely to be superseded.
**Expert review needed:** No
**Suggested reference:** Could not identify a single specific source; this is established educational-technology capability.
**Notes:** The chapter correctly treats the [HYPOTHESIS] d ≈ 0.55 estimate as conjecture, not a finding.

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
|---|---|---|---|
| "Effect sizes run from 0.40 to 0.68, weighted average 0.50. [verify against MetaX near publication]" | STAT | POSITIVE | Author self-flagged; exact range/average not re-derived from MetaX. |
| Per-row decimals (Field independence 0.68, Acceleration 0.68, Record keeping 0.52, Time on task 0.49, etc.) | STAT | BASIC | Drawn from the verified 2018 list; individual decimals not each re-confirmed. Low risk. |

---

## AI-Pass Flags
1. No logical inconsistencies found. The chapter's central separability claim (logistics automatable, cognitive effort not) is internally coherent and consistent with the Bastani guardrail lesson it invokes.
2. The [HYPOTHESIS] discipline from Chapter 1 is maintained correctly — the d ≈ 0.55 estimate is explicitly tagged as conjecture and the chapter states it "does not lean on it."
3. Author uses inline "[verify against MetaX]" tags appropriately at the effect-size decimals — good-faith flags, not errors.
