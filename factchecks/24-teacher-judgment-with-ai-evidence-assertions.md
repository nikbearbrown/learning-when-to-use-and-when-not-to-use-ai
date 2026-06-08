# Assertions Report: 24-teacher-judgment-with-ai-evidence.md
**Date:** 2026-06-08
**Source file:** chapters/24-teacher-judgment-with-ai-evidence.md
**Assertions flagged:** 5
**Breakdown:** STAT: 1 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 4 | SPECIALIST: 0 | CURRENT: 0

---

## ⚠️ Critical — Requires Immediate Expert Review
None found.

---

## Full Findings

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC / POSITIVE
**Sentence:** "Südkamp, Kaiser, and Möller (2012) meta-analyzed 75 studies of how well teachers' judgments of student achievement track measured achievement, and found an average correlation of r = .63 ... The d = 1.29 comes from converting that family of correlations into a standardized-difference metric."
**Claim checked:** Südkamp et al. (2012) — 75 studies, mean r=.63; 1.29 a converted correlation.
**Site visited:** Semantic Scholar / scirp reference (Journal of Educational Psychology 104:743–762, 2012).
**Finding:** Confirmed. 75 studies, mean judgment-accuracy r = .63, with moderators depending on how judgment is elicited. The chapter's framing — that 1.29 is a converted measurement of existing teacher knowledge, not an intervention effect — is accurate and well-handled.
**Expert review needed:** No
**Suggested reference:** Südkamp, A., Kaiser, J., & Möller, J. Accuracy of teachers' judgments of students' academic achievement: A meta-analysis. Journal of Educational Psychology, 104:743–762, 2012.
**Notes:** None.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC / POSITIVE
**Sentence:** "Eegdeman, Cornelisz, van Klaveren, and Meeter (2022) ran a head-to-head in Dutch vocational education ... At the start of the program, *teachers won* ... Once first-period grades arrived, the algorithms caught up and then outperformed the teachers on average."
**Claim checked:** Eegdeman et al. (2022) teacher-vs-model dropout prediction; timing asymmetry.
**Site visited:** https://www.frontiersin.org/articles/10.3389/feduc.2022.976922/full
**Finding:** Confirmed. Frontiers in Education 7:976922. The study compares teacher and ML prediction of dropout in Dutch vocational education; the teachers-win-early / models-win-late timing pattern and the combined-ranking sensitivity gain are consistent with the published study.
**Expert review needed:** No
**Suggested reference:** Eegdeman, I., Cornelisz, I., van Klaveren, C., & Meeter, M. Computer or teacher: Who predicts dropout best? Frontiers in Education, 7:976922, 2022.
**Notes:** Chapter appropriately calls it "one study, one context."

### EVIDENCE — UNVERIFIED
**Assertion type:** BASIC / hedged
**Sentence:** "This figure traces to a single unpublished doctoral dissertation — Fendick (1990) — which defined clarity as four components ... and reported a correlation of roughly r = .35 [verify — full dissertation text not obtained; claims here are limited to what secondary analyses report]."
**Claim checked:** Fendick (1990) teacher clarity dissertation; four components; r≈.35.
**Site visited:** archive.org (full text "Correlation between teacher clarity of communication and student achievement gain: a meta-analysis"); KY DOE EBIP-2 doc.
**Finding:** PARTIAL. The dissertation exists (Frank Fendick, 1990, University of Florida) and the four-component definition (organization, explanation, examples/guided practice, assessment of learning) is confirmed. The specific r ≈ .35 figure could not be independently confirmed in the available secondary sources within this pass. The chapter already flags this with [verify], so the prose is honest.
**Expert review needed:** Yes (for the r≈.35 figure only)
**Suggested reference:** Fendick, F. The correlation between teacher clarity of communication and student achievement gain: A meta-analysis (doctoral dissertation, University of Florida), 1990.
**Notes:** Chapter cites "Fendick (1990)" without affiliation, so no attribution error; affiliation is University of Florida.

### EVIDENCE — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "Kraft (2020) notes that real intervention effects of that magnitude do not exist in controlled studies."
**Claim checked:** Kraft (2020) — effects ≥~1.0 SD implausible in field research.
**Site visited:** https://journals.sagepub.com/doi/10.3102/0013189X20912798 (pre-verified core fact)
**Finding:** Confirmed in substance. Kraft's benchmarks (≥0.20 large; large field effects rare) support the claim that a 1.29 SD overnight software effect would be implausible.
**Expert review needed:** No
**Suggested reference:** Kraft, M. A. Educational Researcher, 49:241–253, 2020.
**Notes:** None.

### STAT — CONFIRMED
**Assertion type:** BASIC
**Sentence:** "Teacher estimates of achievement (d = 1.29) — rank 3." / "Teacher clarity (d = 0.75) — rank 24."
**Claim checked:** 2018 Hattie list effect sizes/ranks.
**Site visited:** https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/ (pre-verified core fact)
**Finding:** Effect sizes and ranks are consistent with the 2018 list. The prior internal inconsistency was resolved; the body text now matches the Group Profile table.
**Expert review needed:** No
**Suggested reference:** Hattie, J. visible-learning.org (2018, 252 influences).
**Notes:** Kahneman/Sibony/Sunstein (2021) and Agrawal/Gans/Goldfarb (2018) are correctly cited classics — AI-only.

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
| "Fendick (1990) ... reported a correlation of roughly r = .35" | EVIDENCE | hedged | Dissertation and four-component definition confirmed; the specific r≈.35 figure not confirmed in available secondary sources. Chapter already flags [verify]. |

---

## AI-Pass Flags
- Resolved: teacher clarity is now rank 24 in both the Group Profile table and the body text.

## References
1. Südkamp, A., Kaiser, J., & Möller, J. Journal of Educational Psychology, 104:743–762, 2012. (CONFIRMED)
2. Eegdeman, I., et al. Frontiers in Education, 7:976922, 2022. (CONFIRMED)
3. Kraft, M. A. Educational Researcher, 49:241–253, 2020. (CONFIRMED — core fact)
4. Hattie, J. visible-learning.org (2018, 252 influences). (CONFIRMED — core fact)
