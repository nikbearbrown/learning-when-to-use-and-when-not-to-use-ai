# Peer Review Critique
## Visible Learning × AI: A Mechanism-Based Classification of 252 Hattie Influences Under AI Mediation

---

## Overall Verdict

This manuscript addresses a genuine and underserved problem: the systematic misuse of Hattie effect sizes in EdTech marketing. The framework is intellectually coherent, the classification dimensions are well-chosen, and the central argument — that effect sizes belong to mechanisms under implementation conditions, not to labels — is both correct and important. The paper is worth publishing in a venue focused on educational technology policy, evidence-based practice, or learning science methodology.

However, the manuscript as described cannot be submitted without addressing three structural problems that will cause rejection at any peer-reviewed venue: (1) the classification has no inter-rater reliability data, which means it cannot be presented as more than expert-generated hypotheses; (2) the substitution risk labels are inconsistently named across the dataset (`High`, `Medium`, `Moderate` coexist, with 22 rows labeled `Moderate` and 7 labeled `Medium` — these are not the same value); and (3) the hypothetical AI effect sizes, though labeled `[HYPOTHESIS]`, appear in the same column as classification values and risk being read as empirical estimates rather than analytical placeholders. Each of these is fixable in revision. None requires new data collection.

**Recommendation: Major Revision**

---

## Critical Findings

### CF-1: No Inter-Rater Reliability
The classification of 252 influences across seven dimensions was performed by a single analyst (or a single analytic process). There is no reported inter-rater reliability coefficient (Cohen's kappa, Krippendorff's alpha, or equivalent). This is the first question any methodologist reviewer will ask, and the absence of an answer is fatal to claims of rigor.

**What the manuscript must do:** Reframe the entire classification explicitly as expert analytical coding — a hypothesis-generating framework, not a validated taxonomy. Every section that implies the classifications are stable or objective must be hedged accordingly. The manuscript should state directly in the Methods section: "No inter-rater reliability assessment was conducted. Classifications represent a single-analyst expert coding and should be treated as a structured set of hypotheses for empirical investigation rather than as established findings." This framing is honest, defensible, and consistent with how similar frameworks in the literature are positioned. Alternatively, conduct a second independent coding of a stratified sample (n=30–40 influences) and report the agreement coefficient before submission.

### CF-2: Effect Sizes Are Meta-Analytic Aggregates Applied to a Classification Task
Hattie's effect sizes are meta-analytic averages aggregated across heterogeneous studies, populations, implementations, and time periods. Applying them as if they represent the expected outcome of a specific well-implemented intervention conflates two different things: the average historical signal and the expected effect of a future implementation. This problem is compounded when the paper uses these effect sizes to evaluate AI feasibility — the original studies that produced the effect sizes preceded modern large language models, and many preceded digital technology entirely.

**What the manuscript must do:** The Introduction must include an explicit discussion of what a meta-analytic effect size does and does not license. The paper should distinguish between: (a) the historical average effect of a labeled category of intervention, and (b) the expected effect of a specific implementation under specific conditions. Every table and section that references an effect size should carry a consistent note: "Effect sizes are Hattie (2018) meta-analytic aggregates; they describe historical average outcomes under implementation conditions that predate AI mediation and may not be transferable to AI-mediated implementations."

### CF-3: Hypothetical AI Effect Sizes Must Be Visually and Structurally Separated
The `hypothetical_ai_effect` column contains values like `d≈0.50 [HYPOTHESIS]` alongside the factual classification values in the same dataset. Despite the `[HYPOTHESIS]` tag, a reader scanning a table will not reliably distinguish these from empirical findings. This is a publication integrity risk.

**What the manuscript must do:** Move all hypothetical AI effect estimates to a separate appendix table, clearly labeled: "Table A1: Analyst-Generated Hypothetical AI Effect Estimates — These are not empirical findings. They are structured hypotheses for future empirical investigation." In the main Results tables, replace the hypothetical estimates with the text "Pending empirical validation." In the Methods section, add a paragraph explaining exactly how these estimates were generated (analytical judgment based on mechanism analysis), what they are meant to represent (plausible hypotheses for effect size change under AI mediation), and what they are not (predictions, validated findings, or claims about any specific product).

### CF-4: The Technology Hattie Categories Predate Large Language Models
Several influences in the dataset — particularly ICT (rank 93, d=0.47), Intelligent Tutoring Systems (rank 89, d=0.48), Technology in mathematics (rank 142, d=0.33), Web-based learning (rank 197, d=0.18), and others — represent research conducted primarily in the 1990s and 2000s. Applying these effect sizes to claims about current generative AI products is not supported. The manuscript's `AI-ADJACENT` classification of ICT (rank 93) is methodologically sound — it correctly refuses to treat this bucket as evidence for modern AI — but this reasoning must be made explicit and applied consistently throughout.

**What the manuscript must do:** The Methods section must include a temporal validity statement: all Hattie technology-related categories were coded with reference to the implementation conditions documented in the original meta-analyses, which predate generative AI. The manuscript must not use the effect size from any pre-LLM technology category as evidence for or against the value of current AI products. The ICT entry (rank 93) should be discussed explicitly as a case study in how vendors misuse temporal validity.

---

## Major Findings

### MF-1: Substitution Risk Label Inconsistency
The `substitution_risk` column contains four distinct values: `Low` (n=170), `High` (n=53), `Moderate` (n=22), and `Medium` (n=7). The original classification schema defines three levels: High, Medium, and Low. The coexistence of `Moderate` and `Medium` as separate values indicates a data entry inconsistency that was not caught before analysis. This will be identified by any reviewer who examines the dataset.

**What the manuscript must do:** Normalize the `substitution_risk` column to three levels before finalizing any tables. Decide whether `Moderate` rows should map to `Medium` or represent a distinct intermediate; document the decision in the Methods section. Rerun all counts after normalization.

### MF-2: Cluster IDs Are Descriptive, Not Statistically Learned
The 78 clusters in the dataset are categorical groupings — rows with identical or near-identical profiles across the classification dimensions — not clusters produced by a statistical algorithm (k-means, hierarchical clustering, etc.). The word "cluster" has a specific meaning in research methods literature that implies statistical derivation. Using it without qualification will mislead reviewers.

**What the manuscript must do:** Rename these "categorical profiles" or "classification groups" throughout. The Methods section should state: "We group influences by shared categorical profiles across the six classification dimensions. These groups are descriptive — they collect influences with identical or near-identical classification signatures — and are not derived from a statistical clustering algorithm." This is a framing change, not a methodological flaw.

### MF-3: Row-Level Notes Mix Mechanism Claims, Implementation Claims, and Policy Claims
The `notes` column in the dataset combines three qualitatively different types of content: (a) mechanism descriptions ("Emergent social construct; Bandura's four efficacy channels require physical collaboration"), (b) implementation claims ("AI can flag risk trajectories"), and (c) implicit policy claims ("Vendor claims of 100% mastery are unsupported"). Mixing these in a single field makes it impossible to audit which claims require empirical support and which are analytical judgments.

**What the manuscript must do:** The supplementary materials should separate the notes into three labeled fields: `mechanism_notes`, `implementation_notes`, and `policy_notes`. In the manuscript itself, every policy claim drawn from the notes column should be explicitly flagged as an analytical judgment and distinguished from the mechanism descriptions, which have a stronger grounding in the source literature.

### MF-4: The AI-NATIVE High-Effect Cases Require Individual Scrutiny
Four influences in the High effect-size band are classified AI-NATIVE: Summarization (rank 18, d=0.79), Mnemonics (rank 21, d=0.76), Repeated reading programs (rank 23, d=0.75), and Rehearsal and memorization (rank 28, d=0.73). Three of these present no mechanism conflict. But Summarization (rank 18) carries a `Conflict present` flag — AI doing the summarization removes the cognitive work that produces the effect. This tension between AI-NATIVE feasibility and Conflict present is the most important classification paradox in the dataset, and the manuscript must address it directly rather than allowing it to sit unresolved in a table.

**What the manuscript must do:** Add a discussion paragraph (or a dedicated section in the Discussion) on what "AI-NATIVE with Conflict present" means as a classification combination. Summarization is the central example: AI can summarize fluently, but the research effect size came from students summarizing. These are different mechanisms. The paper should use this case to make the broader argument: AI feasibility describes what AI can do technically; mechanism conflict describes what that technical capability costs learning. Both dimensions are necessary; neither alone is sufficient.

---

## Minor Findings

### mf-1: Column Naming Inconsistency
The first-pass classification file (`hattie_ai_classification_first_pass.csv`) uses a different column set than the seven-dimensions file. If supplementary materials include both files, the Methods section must explain their relationship and which file is the authoritative version for analysis.

### mf-2: The `band` Category "High" Requires a Definition
The four effect-size bands are defined in the research prompt (High ≥0.70, Above hinge 0.40–0.69, Below hinge 0.15–0.39, Negligible 0.01–0.14, Harmful <0). These definitions must appear explicitly in a table in the Methods section of the manuscript. Reviewers should not have to infer thresholds from the data.

### mf-3: "Moderate" vs. "Moderate Vendor Activity" Ambiguity
The `vendor_activity` column contains `Low`, `High`, and `Moderate`. In the `substitution_risk` column, `Moderate` was used inconsistently. The manuscript should include a definitions table for all classification values to eliminate ambiguity.

### mf-4: No Reproducibility Trail
The classification was performed analytically, not algorithmically, but there is no documentation of the classification process — the decision rules, the sequence of application, or the edge cases. A reproducibility appendix (even a brief one) would materially strengthen the manuscript's credibility with methods-oriented reviewers.

### mf-5: Reference List Will Require Verification
The manuscript cannot be submitted with unchecked citations. Every citation to Hattie (2018), Bandura, Bloom, Goldacre, or any other source must be verified against the actual text before submission. The draft is flagged throughout with `[VERIFY]` markers; these must be resolved, not left in the submitted version.

---

## Required Revisions Before Paper Draft

| Finding | Required Action | Blocking? |
|---|---|---|
| CF-1: No inter-rater reliability | Reframe as expert analytical coding throughout; add explicit Methods statement | Yes — rejection risk |
| CF-2: Effect sizes are aggregates | Add temporal validity discussion to Introduction and Methods | Yes — rejection risk |
| CF-3: Hypothetical AI effects | Move to Appendix; remove from main Results tables | Yes — publication integrity |
| CF-4: Pre-LLM technology categories | Add temporal validity statement to Methods; address explicitly in Discussion | Yes — rejection risk |
| MF-1: Substitution risk normalization | Normalize `Moderate`/`Medium` before finalizing tables | Yes — data integrity |
| MF-2: Cluster terminology | Rename to "categorical profiles" throughout | No — but will flag with reviewers |
| MF-3: Mixed note types | Separate in supplementary materials | No — but strengthens credibility |
| MF-4: Summarization paradox | Address in Discussion | No — but intellectual gap |
| mf-1–5: Minor cleanup | Definitions table, reproducibility note, citation verification | No — but required before submission |
