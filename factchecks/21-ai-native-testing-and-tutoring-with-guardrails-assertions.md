# Assertions Report: 21-ai-native-testing-and-tutoring-with-guardrails.md
**Date:** 2026-06-08
**Source file:** chapters/21-ai-native-testing-and-tutoring-with-guardrails.md
**Assertions flagged:** 4
**Breakdown:** STAT: 0 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 4 | SPECIALIST: 0 | CURRENT: 0

---

## ⚠️ Critical — Requires Immediate Expert Review
None found.

---

## Full Findings

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "VanLehn's 2011 review found step-based tutoring systems reaching d ≈ 0.76 against d ≈ 0.79 for human tutors — near-parity with the gold standard..."
**Claim checked:** VanLehn (2011) ITS d≈0.76 vs human tutoring d≈0.79.
**Site visited:** https://www.tandfonline.com/doi/abs/10.1080/00461520.2011.611369 ; ASU Pure publication page.
**Finding:** Confirmed. VanLehn (2011), Educational Psychologist 46(4):197–221, found step-based ITS reaching d≈0.76 against human tutoring d≈0.79 — near-parity, under the well-structured-domain/step-level conditions the chapter names. The two-sigma deflation point is also correctly attributed to this review.
**Expert review needed:** No
**Suggested reference:** VanLehn, K. The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 46:197–221, 2011. https://doi.org/10.1080/00461520.2011.611369
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC / POSITIVE
**Sentence:** "Roediger and Karpicke's 2006 experiments fixed the canon: students who repeatedly tested themselves on material retained dramatically more at a delay than students who repeatedly restudied it — even though the restudiers felt more confident..."
**Claim checked:** Roediger & Karpicke (2006) testing effect; restudy feels better, performs worse at delay.
**Site visited:** https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x ; PubMed 16507066.
**Finding:** Confirmed. Psychological Science 17:249–255. Immediate test favored restudy at 5 min, but prior testing produced substantially greater retention at 2-day and 1-week delays — exactly the characterization in the chapter.
**Expert review needed:** No
**Suggested reference:** Roediger, H. L., & Karpicke, J. D. Test-enhanced learning. Psychological Science, 17:249–255, 2006.
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** "in the Tutor CoPilot trial, the AI was pointed at human tutors ... student mastery rose four percentage points overall and nine for students of the lowest-rated tutors."
**Claim checked:** Wang et al. (2024) Tutor CoPilot +4 overall / +9 for lowest-rated tutors.
**Site visited:** https://arxiv.org/abs/2410.03017 ; nssa.stanford.edu.
**Finding:** Confirmed. Preregistered RCT, 900 tutors / 1,800 K-12 students from Title I schools; students of lower-rated tutors improved mastery by up to 9 p.p. The overall ~4 p.p. figure is consistent with the study's reported effects. Low cost (~$20/tutor/year) also matches.
**Expert review needed:** No
**Suggested reference:** Wang, R. E., et al. Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise. arXiv:2410.03017, 2024.
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "Bastani and colleagues measured both roads. Unguardrailed GPT-4 access during practice: +48 percent on practice problems, −17 percent on the subsequent unassisted exam. The guardrailed tutor arm ... +127 percent on practice and approximately zero exam effect."
**Claim checked:** Bastani et al. (2025) +48/−17 and +127/≈0.
**Site visited:** https://doi.org/10.1073/pnas.2422633122 (pre-verified core fact)
**Finding:** Confirmed against the PNAS record; figures used consistently with the rest of the book.
**Expert review needed:** No
**Suggested reference:** Bastani, H., et al. Generative AI without guardrails can harm learning. PNAS, 2025.
**Notes:** None.

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
| "The Poulidis working paper adds the longitudinal worry: learners with structurally unrestricted AI assistance developed reliance patterns that persisted..." | EVIDENCE | hedged | Chapter itself flags "[verify — unreviewed working paper, single domain]." SSRN working paper on chess academies; treated as directional by the chapter. Not independently confirmed but appropriately hedged. |

---

## AI-Pass Flags
None. The bimodal ITS hypothesis (0.45 aligned vs 0.20 unconstrained) and the d≈0.35/0.50 figures are clearly tagged [HYPOTHESIS]. The local-pilot result on line 89 is appropriately flagged "[verify — local n was small; treated as directional]." Two-sigma is correctly characterized as folklore/contested.

## References
1. VanLehn, K. Educational Psychologist, 46:197–221, 2011. (CONFIRMED)
2. Roediger, H. L., & Karpicke, J. D. Psychological Science, 17:249–255, 2006. (CONFIRMED)
3. Wang, R. E., et al. Tutor CoPilot. arXiv:2410.03017, 2024. (CONFIRMED)
4. Bastani, H., et al. PNAS, 2025. (CONFIRMED — core fact)
