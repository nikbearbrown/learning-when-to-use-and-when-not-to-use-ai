# Assertions Report: 93-hattie-ai-analysis-summary.md
**Date:** 2026-06-08
**Source file:** chapters/93-hattie-ai-analysis-summary.md
**Assertions flagged:** 4
**Breakdown:** STAT: 3 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 1 | SPECIALIST: 0 | CURRENT: 0

---

## ⚠️ Critical — Requires Immediate Expert Review
None found. No OUTDATED, CONTRADICTED, or COMBINATION assertions. One internal-consistency note appears under AI-Pass Flags (self-reported grades effect size) but it does not meet the critical threshold.

---

## Full Findings

This appendix is overwhelmingly a description of the book's OWN coded dataset (252 rows, AI-feasibility/substitution/mechanism counts, categorical profiles, crosstabs). Those counts are internal analyst outputs, not external claims, and are AI-ONLY / not web-verifiable. Only the externally checkable anchors — the 252-influence basis and named Hattie effect sizes — were flagged.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** The dataset starts from 252 Hattie influences, preserves their effect sizes, and adds an AI classification layer: AI feasibility, human irreducibility, substitution risk, mechanism conflict, vendor activity, categorical profile, and hypothetical AI-mediated effect notes.
**Claim checked:** The dataset is built on the 252-influence Hattie list.
**Site visited:** https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Finding:** The 2018 Visible Learning ranking comprises 252 influences, matching the dataset's stated basis (REUSE core fact #2, CONFIRMED). The appendix correctly anchors its coding layer on this list.
**Expert review needed:** No
**Suggested reference:** Visible Learning. Hattie Ranking: 252 Influences And Effect Sizes Related To Student Achievement, 2018. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** Reused from verified core facts; no new search required.

### STAT — CONFIRMED
**Assertion type:** BASIC
**Sentence:** | 1 | Collective teacher efficacy | 1.57 | AI-RESISTANT | High | High | No conflict | Low |
**Claim checked:** Collective teacher efficacy d = 1.57.
**Site visited:** (REUSE core fact #10)
**Finding:** Collective teacher efficacy d = 1.57 is the established top-ranked Visible Learning influence. CONFIRMED.
**Expert review needed:** No
**Suggested reference:** Hattie, J. Visible Learning (collective teacher efficacy, d=1.57). https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** Reused verified core fact.

### STAT — CONFIRMED
**Assertion type:** BASIC
**Sentence:** There are 122 influences at or above the hinge point of d >= 0.40.
**Claim checked:** Hinge point is d = 0.40.
**Site visited:** (REUSE core fact #4)
**Finding:** Hattie's hinge point d = 0.40 is correctly used as the band threshold. CONFIRMED. The count of 122 above-hinge influences is an internal dataset tally (not independently web-verifiable) and is internally consistent with the band table (32 High + 90 Above hinge = 122).
**Expert review needed:** No
**Suggested reference:** Hattie, J. Visible Learning, 2009 (hinge d=0.40). https://www.routledge.com/p/book/9780415476188
**Notes:** Hinge value reused; the 122 tally is internal and self-consistent.

### STAT — CONFIRMED (with note)
**Assertion type:** BASIC
**Sentence:** | 32 | Feedback | 0.70 | AI-AUGMENTED | Medium | High | Partial conflict | High |
**Claim checked:** Feedback d = 0.70.
**Site visited:** (REUSE core fact #5)
**Finding:** Feedback d = 0.70 (≈0.73 in some editions) is an established Visible Learning value. CONFIRMED.
**Expert review needed:** No
**Suggested reference:** Hattie, J. Visible Learning (feedback d≈0.70–0.73). https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
**Notes:** Reused verified core fact.

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
|---|---|---|---|
| The average effect size across all 252 influences is approximately d = 0.379, with a median of d = 0.375, a minimum of d = -0.90, and a maximum of d = 1.57. | STAT | BASIC | Aggregate statistic computed from the book's own coded dataset; not an external published figure. Internally plausible (max 1.57 matches collective teacher efficacy; min -0.90 is consistent with the known most-negative influences). Not independently web-verifiable. |
| All dataset count tables (AI feasibility, human irreducibility, substitution risk, mechanism conflict, vendor activity, categorical profiles, priority cases). | STAT | BASIC | These are the authors' own classification outputs, not external claims — AI-ONLY, not web-verifiable. Spot-checked for internal arithmetic consistency (e.g., feasibility 97+88+38+29 = 252; bands 32+90+81+32+17 = 252) and they sum correctly. |

---

## AI-Pass Flags
- **Self-reported grades effect size — internal value note.** Line: "| 2 | Self-reported grades | 1.33 | AI-AUGMENTED | Medium | Low | Partial conflict | Low |" and the hypothetical-effects table "| 2 | Self-reported grades | 1.33 |". The widely-cited Visible Learning value for self-reported grades / student expectations is d = 1.44 (verified core fact #10). This appendix uses d = 1.33. This is internally consistent within the appendix (both tables use 1.33) and likely reflects the specific 252-influence list edition the dataset was built from, where the "Self-reported grades / Student expectations" entry can appear at differing values across editions. Not a contradiction of an external source per se, but flag for the author to confirm which edition value is intended, since 1.44 is the more commonly cited figure and appears elsewhere in this book series. No web search performed (internal-consistency flag).

---

## References
1. Hattie, J. *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement*. Routledge, 2009. https://www.routledge.com/p/book/9780415476188
2. Visible Learning. Hattie Ranking: 252 Influences And Effect Sizes Related To Student Achievement (2018 list). https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/
