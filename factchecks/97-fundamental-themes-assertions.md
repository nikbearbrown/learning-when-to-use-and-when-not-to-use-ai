# Assertions Report: 97-fundamental-themes.md
**Date:** 2026-06-08
**Source file:** chapters/97-fundamental-themes.md
**Assertions flagged:** 8
**Breakdown:** STAT: 5 | GUIDELINE: 0 | APPROVAL: 0 | EVIDENCE: 2 | SPECIALIST: 0 | CURRENT: 1

---

## ⚠️ Critical — Requires Immediate Expert Review
None found. No OUTDATED or CONTRADICTED assertions. The Bastani citation here uses the shortened title "Generative AI without guardrails can harm learning" — which is actually the correct published title (see Notes on that finding); no AI-Pass title flag needed. Two STAT clusters (skills-based hiring figures and the 88% upskilling figure) are UNVERIFIED at the precise-number level and are routed below, but none rises to critical.

---

## Full Findings

The bulk of this chapter is conceptual framework (the seven-tier Irreducibly Human taxonomy, phase gates, Brutalist/Boondoggling systems). Those are the book's own definitions and design arguments — AI-ONLY, not web-verifiable. The externally checkable claims are the named empirical studies and the labor-market statistics; those are flagged below.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** This is why the Bastani finding is so precise: students who used AI freely during math practice scored 48% higher during practice and 17 percentage points *lower* on the unassisted exam.
**Claim checked:** Bastani et al. — AI-free use raised practice scores ~48% but lowered unassisted-exam scores by ~17 points.
**Site visited:** https://www.pnas.org/doi/10.1073/pnas.2422633122
**Finding:** Confirmed. The Turkish high-school math RCT (Bastani et al., PNAS 2025, vol. 122 no. 26) found the unrestricted "GPT Base" condition improved practice performance ~48% but, on the unassisted exam, students performed worse than peers who never had AI access — the harm-on-removal effect the chapter describes. A "GPT Tutor" with teacher-designed guardrails mitigated the harm.
**Expert review needed:** No
**Suggested reference:** Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS* 122(26), 2025. https://www.pnas.org/doi/10.1073/pnas.2422633122
**Notes:** The chapter's short form "the Bastani finding" plus the paraphrase "students who used AI freely" matches the published full title "Generative AI **without guardrails** can harm learning." No AI-Pass mismatch flag required — the chapter's framing (AI used *freely*, i.e., without guardrails) is faithful to the paper. A correction notice exists for the paper (PMC12403119) but does not affect these headline figures.

### EVIDENCE — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** The Kosmyna EEG study makes this visible: up to 55% reduction in functional brain connectivity during AI-assisted writing vs. brain-only writing.
**Claim checked:** Kosmyna EEG study found up to 55% reduced brain connectivity for LLM (AI-assisted) vs. brain-only writers.
**Site visited:** https://arxiv.org/abs/2506.08872
**Finding:** Confirmed. Nataliya Kos'myna et al. (MIT Media Lab), "Your Brain on ChatGPT: Accumulation of Cognitive Debt…," 54 participants across three groups (LLM / search engine / brain-only) over four sessions. The brain-only group showed the strongest, most distributed neural networks; the LLM group exhibited up to ~55% reduced connectivity relative to brain-only participants. The 55% figure is accurately reported.
**Expert review needed:** No
**Suggested reference:** Kosmyna, N., et al. Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. MIT Media Lab, arXiv:2506.08872, 2025. https://arxiv.org/abs/2506.08872
**Notes:** Surname is spelled "Kos'myna" in the source; the chapter's "Kosmyna" is an acceptable simplification. Caveat worth noting in prose: the study is a preprint with a small sample (n=54) and was not yet peer-reviewed at time of release. The directional finding is robust; treat the precise 55% as a study-reported maximum.

### STAT — CONFIRMED
**Assertion type:** POSITIVE
**Sentence:** AI-skilled workers command a 56% wage premium in 2024 — doubled from 25% the prior year. Jobs requiring AI skills grew 7.5% even as total job postings fell 11.3%.
**Claim checked:** PwC 2025 AI Jobs Barometer — 56% wage premium (up from 25%), AI-skill jobs +7.5%, total postings -11.3%, ~1 billion job ads.
**Site visited:** https://www.pwc.com/gx/en/news-room/press-releases/2025/ai-linked-to-a-fourfold-increase-in-productivity-growth.html
**Finding:** Confirmed. PwC's 2025 Global AI Jobs Barometer (released June 3, 2025), based on analysis of close to a billion job ads across six continents, reports an average 56% wage premium for AI-skilled roles (up from 25% the prior year), AI-skill jobs rising 7.5% while total job postings fell 11.3%. All four figures match the chapter, including the "~one billion job ads" basis stated at line 241.
**Expert review needed:** No
**Suggested reference:** PwC. The Fearless Future: 2025 Global AI Jobs Barometer, June 2025. https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html
**Notes:** The chapter attributes the 56% to "2024" data reported in the 2025 Barometer, which is correct (the Barometer measures 2024 outcomes).

---

## Unverified Assertions
| Sentence | Category | Assertion Type | Reason unverified |
|---|---|---|---|
| Less than 40% of employers screen by GPA (third straight year of decline) | STAT | POSITIVE | Direction confirmed (GPA screening has fallen sharply; NACE-type data shows ~42% planning to screen by GPA for 2026, down from ~73% in 2019). The precise "<40%" and "third straight year" are close but not pinned to a single named source in the chapter; the nearest public figure is ~42%. Route to author to attach the exact source (likely NACE Job Outlook). |
| Nearly two-thirds use skills-based hiring all or most of the time | STAT | POSITIVE | Direction confirmed (most US employers report skills-based practices, figures ~65–70% across sources), but the exact "nearly two-thirds … all or most of the time" phrasing is not tied to one verifiable named survey in the text. |
| Degree requirements fell 7–9 percentage points in AI-exposed jobs from 2019–2024 | STAT | POSITIVE | Plausible and directionally consistent with multiple labor-market analyses showing degree-requirement decline in AI-exposed roles, but the specific 7–9 pp / 2019–2024 figure could not be matched to a single identifiable source in this pass. |
| Practical AI skills get a 19–23% premium vs. 9–11% for credentials alone | STAT | POSITIVE | Specific paired premium figures could not be matched to a named source. No web confirmation found for these exact bands. |
| …the 88% of workers without AI upskilling who would take it if it were offered in a form that worked for them. | STAT | POSITIVE | The precise 88% figure could not be confirmed. Searches surfaced related but different figures (e.g., EY: 88% of employees use AI at work; various surveys on willingness to upskill at 61–64%). The "88% would take upskilling if offered" claim needs its source attached. |

---

## AI-Pass Flags
- **Tier numbering gap (internal structure).** The taxonomy presents Tier 1, Tier 2, then jumps to Tier 4, Tier 5, Tier 6, Tier 7 — Tier 3 has no standalone section. Tier 3 is referenced later ("Tier 3 relationship," line 284; "Tiers 3–7," line 221) as relationship/pedagogical content knowledge but is never defined in its own section like the others. Not a factual error, but a structural omission the author may want to close (define Tier 3 explicitly, or note deliberately that it is treated elsewhere in the series). No web search performed.
- No internal factual contradictions or wrong definitions detected otherwise. The Cognitive Load Theory terms (extraneous load vs. germane load) are used correctly.

---

## References
1. Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS* 122(26), 2025. https://www.pnas.org/doi/10.1073/pnas.2422633122
2. Kosmyna, N., et al. Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. MIT Media Lab, arXiv:2506.08872, 2025. https://arxiv.org/abs/2506.08872
3. PwC. The Fearless Future: 2025 Global AI Jobs Barometer, June 2025. https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html
