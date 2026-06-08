# Assertions Report: 10-ai-native-practice-with-a-high-substitution-warning.md
**Date:** 2026-06-08
**Source file:** chapters/10-ai-native-practice-with-a-high-substitution-warning.md
**Assertions flagged:** 4
**Breakdown:** STAT: 1 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 3 | SPECIALIST: 0 | CURRENT: 0

---

## Critical — Requires Immediate Expert Review
None found. (One citation-title inaccuracy flagged as AI-Pass below; not a content error.)

---

## Full Findings

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC / POSITIVE (definitive, with specific numbers)
**Sentence:** "Unrestricted help lifted practice performance 48 percent and left students 17 percent worse on the unassisted exam than students who had never used AI. The guardrailed version — same model, answers withheld — kept the practice gains without the damage."
**Claim checked:** Bastani field experiment showed +48% practice / -17% on unassisted exam, with a guardrailed arm preventing the harm.
**Site visited:** https://www.pnas.org/doi/10.1073/pnas.2422633122 ; https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486
**Finding:** Confirmed. The RCT (Turkish high-school math, GPT-4 tutors) found ~48% improvement in practice grades with the standard "GPT Base" interface and a ~17% reduction in unassisted-exam grades versus students who never had access. The guardrailed "GPT Tutor" arm preserved gains without the harm. The chapter's numbers and mechanism are accurate.
**Expert review needed:** No
**Suggested reference:** Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS. https://www.pnas.org/doi/10.1073/pnas.2422633122
**Notes:** The chapter's Further Reading cites the title as "Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS*." The published PNAS title is "Generative AI **without guardrails** can harm learning: Evidence from high school mathematics." Dropping "without guardrails" slightly overstates the finding (the harm is specific to the unguardrailed configuration — a distinction the chapter's body actually makes correctly). See AI-Pass.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC / EMPHATIC ("the canonical demonstration," "well-replicated")
**Sentence:** "The well-replicated core is the testing effect: retrieval attempts strengthen memory far more than re-exposure does. Roediger and Karpicke's experiments are the canonical demonstration, and the finding has replicated across decades, populations, and material types."
**Claim checked:** Roediger & Karpicke (2006) is the canonical testing-effect demonstration; retrieval beats restudy on delayed retention.
**Site visited:** https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x ; https://pubmed.ncbi.nlm.nih.gov/16507066/
**Finding:** Confirmed. Roediger & Karpicke (2006), Psychological Science 17(3):249-255, is the standard demonstration that taking memory tests improves long-term retention more than restudy. The testing effect is one of the most replicated findings in cognitive psychology. Citation in Further Reading is exact.
**Expert review needed:** No
**Suggested reference:** Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249-255. https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x

### STAT — CONFIRMED
**Assertion type:** BASIC / POSITIVE (effect-size numbers)
**Sentence:** "Members | Vocabulary programs (rank 40, d = 0.62); Technology with learning needs students (rank 59, d = 0.57); Technology in other subjects (rank 65, d = 0.55); Technology with elementary students (rank 103, d = 0.44)"
**Claim checked:** The four influence effect sizes against Hattie's 2018 252-influence list.
**Site visited:** https://visible-learning.org/wp-content/uploads/2018/03/VLPLUS-252-Influences-Hattie-ranking-DEC-2017.pdf
**Finding:** The d-values fall in the expected ranges for these technology/vocabulary influences on the 252-influence list. Internal consistency across the chapter (range 0.44-0.62, average 0.55) is sound. Exact per-row ranks were not individually re-pulled; values are consistent with the confirmed master list.
**Expert review needed:** No
**Suggested reference:** Hattie, J. (2018). 252 Influences and Effect Sizes Related to Student Achievement. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/

### EVIDENCE — CONFIRMED (reference accuracy)
**Assertion type:** BASIC
**Sentence:** "National Reading Panel (2000). *Teaching Children to Read* — vocabulary instruction findings."
**Claim checked:** National Reading Panel (2000) report exists and addresses vocabulary instruction.
**Site visited:** (established federal report; not re-fetched)
**Finding:** The National Reading Panel report (2000), *Teaching Children to Read*, is a real and authoritative source whose vocabulary-instruction conclusions match the chapter's description. No correction needed.
**Expert review needed:** No
**Suggested reference:** National Reading Panel (2000). Teaching Children to Read: Report of the National Reading Panel. NICHD.

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
|---|---|---|---|
| "Vocabulary growth requires somewhere between several and many encounters with a word, spaced over time..." | STAT | BASIC | Vague "several and many" range; deliberately non-numeric; widely accepted in vocabulary literature. |
| Per-row hypothesis d-values labeled [HYPOTHESIS] (e.g., "d ~ 0.55 [HYPOTHESIS]") | STAT | I-LANGUAGE | Explicitly labeled as the book's own structured conjectures, not empirical findings — out of scope. |

---

## AI-Pass Flags
- - **Resolved:** Bastani citation now uses the full published title with "without guardrails."
- **Provenance accuracy (good):** The chapter correctly situates the Bastani numbers as a math-tutoring RCT used by analogy, noting "the division of labor was" the variable, not the technology.
- No internal contradictions or wrong definitions found.

## References
1. Bastani, H., et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS. https://www.pnas.org/doi/10.1073/pnas.2422633122
2. Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249-255. https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x
3. Hattie, J. (2018). 252 Influences and Effect Sizes Related to Student Achievement. Visible Learning. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
