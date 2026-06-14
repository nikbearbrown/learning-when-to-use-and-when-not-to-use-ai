# The High-Impact Zone Is Augmentation Territory: A Seven-Dimension Classification of Hattie's 252 Influences by AI Feasibility

**Nik Bear Brown**
Associate Teaching Professor, Northeastern University
nikbearbrown@gmail.com

---

**[TO DO: Add co-authors if applicable. Confirm author order and affiliations before submission.]**

**[TO DO: Add corresponding author designation and ORCID if available.]**

**[TO DO: Select target journal before finalizing formatting — APA style throughout for *Computers & Education* or *BJET*; check author guidelines for word limits, abstract length, and supplementary material policies.]**

---

## Abstract

The dominant framing of artificial intelligence in educational technology assumes that substitution — AI performing instructional tasks previously performed by humans — is the primary opportunity for improvement. This paper challenges that assumption by applying a systematic seven-dimension classification framework to all 252 influences in Hattie's (2018) *Visible Learning* synthesis, the most widely cited evidence base in educational procurement. We classify each influence by AI feasibility (AI-NATIVE, AI-AUGMENTED, AI-ADJACENT, or AI-RESISTANT), human irreducibility, substitution risk, mechanism conflict, and vendor activity. The central finding is that 88% of above-hinge influences (d ≥ 0.40) are classified as AI-AUGMENTED or AI-RESISTANT rather than AI-NATIVE, and that high-conflict, high-substitution-risk profiles concentrate in exactly the zones attracting highest vendor activity. We present the classification as a transparent, contestable analytical framework rather than a psychometric instrument, and argue that the distribution finding is robust to reasonable reclassification at the margins. The practical implication is a reframing of AI adoption policy: the evidence base that districts invoke to justify AI purchases does not support substitution strategies; it supports augmentation strategies in which AI handles logistical and pattern-recognition work while human cognitive and relational work is explicitly protected. We propose a phase gate framework — specifying what AI may do, what humans must do, and what counts as evidence that learning improved — as the operational form of this reframing.

**Keywords:** artificial intelligence, educational technology, Hattie, Visible Learning, effect size, augmentation, substitution risk, instructional design, EdTech procurement

**[TO DO: Confirm keyword list against target journal's taxonomy. Most journals want 4–6 keywords that appear in their indexing system.]**

**[TO DO: Check abstract word limit for target journal. *Computers & Education* typically allows 250 words; *BJET* 200. Current abstract is approximately 230 words — trim if needed.]**

---

## 1. Introduction

When a district's technology committee evaluates an AI-powered feedback platform, the evidence slide almost always carries the same number: feedback, d = 0.70, from Hattie's *Visible Learning* synthesis. The logic is presented as straightforward — feedback is one of the most powerful influences on student achievement; this platform delivers feedback; therefore the platform delivers 0.70 standard deviations of benefit. The committee approves.

This logic contains a category error that the current paper is designed to name and remedy. The d = 0.70 attached to feedback in Hattie's synthesis was assembled from studies of feedback that changed what a teacher did next and what a learner understood about their own work, almost all of which predates large language models. Whether any specific platform touches the mechanism that produced that number — or replaces it with a simulation of the mechanism that performs well on visible metrics while leaving learning unchanged — is precisely the question the effect size cannot answer.

The problem is not isolated to feedback. Across the educational technology sector, Hattie's (2009, 2018) *Visible Learning* synthesis functions simultaneously as the most persuasive evidence base and the most systematically misread one. Districts, vendors, and policy documents cite effect sizes from the list as if they were properties of product categories rather than measurements of learning mechanisms under specific conditions. The result is a procurement logic in which any platform claiming an above-hinge influence's effect size receives implicit endorsement from the research base, regardless of whether the platform's mode of operation resembles the mode of operation that generated the number.

This paper addresses that problem through a systematic classification of all 252 influences in Hattie's (2018) 252-influence list. We develop a seven-dimension framework that adds an AI feasibility analysis layer to each influence, classifying it by the nature of AI's relationship to the mechanism that produced the effect size. The classification allows us to ask, systematically, a question the effect sizes alone cannot answer: in this influence, does AI strengthen the mechanism or replace it?

The central finding is counterintuitive given the current trajectory of EdTech investment. The high-impact zone of Hattie's list — influences at or above the d = 0.40 hinge point — is not primarily territory where AI can perform the influential act. It is primarily territory where AI can support, prepare, scaffold, and inform the humans doing the influential act. Among the 122 influences at or above the hinge, 81 are classified AI-AUGMENTED and only 14 are classified AI-NATIVE. Among the 32 influences in the High band (d ≥ 0.70), 24 are AI-AUGMENTED and only 4 are AI-NATIVE.

This distribution has direct implications for how districts should evaluate AI procurement proposals and how researchers should study AI's role in education. A substitution strategy — deploying AI to perform instructional acts previously performed by humans — is misaligned with the mechanisms that produce the largest achievement effects. An augmentation strategy — deploying AI to improve the precision, consistency, and reach of human instructional acts — is supported by the evidence base that districts are already citing.

The paper is organized as follows. Section 2 reviews the relevant literature on effect size interpretation, the *Visible Learning* synthesis, and existing critiques of EdTech impact claims. Section 3 describes the seven-dimension classification framework and its application to the 252-influence list. Section 4 presents the distribution findings. Section 5 discusses implications for procurement, policy, and research. Section 6 acknowledges limitations. Section 7 concludes.

The headline counts in this section were checked against `data/hattie-ai-7dimensions-normalized.csv`: 122 influences are at or above the hinge; the above-hinge set contains 81 AI-AUGMENTED and 14 AI-NATIVE influences; the High band contains 24 AI-AUGMENTED and 4 AI-NATIVE influences.

---

## 2. Literature Review

### 2.1 The *Visible Learning* Synthesis and Its Influence on EdTech Procurement

Hattie's (2009) original *Visible Learning* synthesized more than 800 meta-analyses covering approximately 50,000 studies of educational influences. The 2018 update expanded the list to 252 influences. The synthesis introduced a practical hinge point — d = 0.40, approximately the average effect across all influences studied — as a triage tool: influences above the hinge warrant greater instructional attention than those below it. The list has become the dominant evidence framework in English-speaking school systems for evaluating instructional programs (Eacott, 2017; Terhart, 2011).

The synthesis has also attracted sustained methodological criticism. Bergeron (2017) argued that averaging effect sizes across studies with different populations, measures, and designs produces a statistical artifact that borrows the form of scientific ranking without satisfying its assumptions. Simpson (2017) demonstrated that effect sizes are manipulable ratios — researchers can enlarge them by restricting samples or using proximal, researcher-constructed outcome measures — and that meta-analytic league tables may primarily rank research design openness rather than intervention quality. Kraft (2020) established that realistic effect sizes from well-designed field experiments on standardized measures sit far lower than Hattie's average: less than d = 0.05 is small, d = 0.05–0.20 is medium, and d = 0.20 or above is large by field-experiment standards. A d = 0.40 from a randomized trial on a state assessment is a genuinely large result. The same d = 0.40 in Hattie's synthesis is merely average.

These critiques are relevant to the present paper in a specific way. We do not claim that the effect sizes in Hattie's list are accurate measurements of the causal impact of the named influences. We claim only that they are the most widely cited evidence base in EdTech procurement, and that a framework for classifying the AI feasibility of the mechanisms they describe is therefore practically valuable regardless of the effect sizes' precision.

The need for caution is not external to the Hattie tradition. Hamilton, Wiliam, and Hattie (2023) framed generative AI in education as a technology that could diminish human agency and weaken the development of capabilities schooling is meant to build unless adoption is deliberately constrained. That position is important for the present paper because it separates the use of Hattie's effect-size synthesis as a mechanism map from the use of Hattie numbers as a blanket endorsement for AI substitution.

**[TO DO: Add 3–4 additional citations on Visible Learning's influence in EdTech specifically — ideally papers or reports that show vendors citing Hattie. District procurement documents citing Hattie would strengthen this section if you can locate them.]**

### 2.2 Effect Sizes as Mechanism Descriptions, Not Product Endorsements

A recurring problem in the application of *Visible Learning* to technology procurement is the treatment of effect sizes as properties of product categories rather than measurements of mechanisms under specific conditions. Hattie and Timperley (2007) demonstrated this problem for the feedback row specifically: the d = 0.70 for feedback conceals a distribution in which approximately one third of feedback interventions decreased performance. Kluger and DeNisi (1996) reached a similar conclusion from a larger meta-analytic base: feedback interventions that directed attention to the self rather than the task reliably produced negative effects. The average conceals the variance that is actually decision-relevant.

The mechanism-versus-product confusion is compounded when AI enters the analysis. An effect size assembled from studies of human-delivered feedback in pre-LLM classrooms does not describe what an AI feedback platform will do, because the platform may or may not operate through the same mechanism. Whether it does is an empirical question — but it is a question the effect size cannot answer, and the citation of the effect size implies an answer.

**[TO DO: Add any direct citations of AI vendors using Hattie numbers in marketing materials, if any have been published in the academic literature. Molnar et al. or similar EdTech market analysis papers may have documented this.]**

### 2.3 AI in Education: Empirical Evidence and the Substitution Problem

The empirical literature on AI in education has grown rapidly but remains heterogeneous and often vendor-adjacent. Recent meta-analytic work on AI tutoring and adaptive learning systems reports effects ranging from modest to substantial depending on implementation quality, outcome measure, and comparison condition (Kulik & Fletcher, 2016; Ma et al., 2014; VanLehn, 2011). VanLehn's (2011) systematic review established that step-based intelligent tutoring systems reach approximately d = 0.76 against d = 0.79 for human tutoring under well-controlled conditions in structured domains — a near-parity result that represents the strongest empirical case for AI tutoring.

The most policy-relevant recent evidence on the substitution problem comes from Bastani et al. (2025), who conducted a randomized field experiment with approximately 1,000 high-school students assigned to three conditions: unrestricted GPT-4 access during math practice, a guardrailed AI tutor designed to provide hints rather than solutions, and no AI access. Students with unrestricted GPT-4 access performed 48% better during practice and 17 percentage points worse on a subsequent unassisted exam than students with no AI access. The guardrailed tutor produced approximately 127% improvement in practice performance with approximately zero harm on the exam. The same technology, differently configured, produced opposite outcomes. The variable was whether the AI performed the cognitive work the practice was designed to develop, or scaffolded the student doing that work themselves.

This result is the empirical anchor for the substitution risk dimension in our framework. It demonstrates that AI feasibility — whether AI can perform a task — is orthogonal to pedagogical appropriateness — whether AI should perform that task in a learning context. The mechanism-versus-artifact distinction that the Bastani result makes visible is what the present paper systematizes across all 252 Hattie influences.

The augmentation counterexample is Wang et al.'s (2024) Tutor CoPilot trial. In that randomized study, AI was aimed at the human tutor rather than used as a replacement tutor: live, expert-modeled suggestions were delivered to tutors during sessions. The intervention increased student mastery by 4 percentage points overall and by 9 percentage points for students assigned to lower-rated tutors. This pattern is central to the present argument because it shows a configuration in which AI amplifies a human instructional mechanism instead of substituting for it.

AI-generated feedback evidence also supports the need for mechanism-specific boundaries. Steiss et al. (2024) compared expert human feedback with ChatGPT feedback on student writing and found that humans were stronger across most assessed dimensions, while ChatGPT was competitive in criteria-based evaluation and reasoning/argumentation-focused feedback. The implication is not that AI feedback is uniformly good or uniformly bad; it is that safe deployment depends on the feedback level, the role of human review, and whether the AI response supports or replaces the learner's revision work.

### 2.4 Classification Frameworks for Educational Technology

Several prior frameworks have attempted to classify educational technologies by their relationship to learning mechanisms. The SAMR model (Puentedura, 2006) classifies technology use on a substitution-modification-redefinition continuum but was designed for a pre-AI context and does not engage with mechanism-specificity at the level of individual influences. The TPACK framework (Mishra & Koehler, 2006) addresses the intersection of technology, pedagogy, and content knowledge but does not produce testable predictions about which technology deployments will preserve versus undermine specific effect-size mechanisms.

The present paper offers a more granular and evidence-anchored approach: rather than classifying technologies, we classify the learning mechanisms themselves by their AI feasibility. This reverses the typical analytic direction and produces a directly actionable output — for any specific influence in Hattie's synthesis, a classification of whether AI can strengthen the mechanism, replaces the mechanism, is adjacent to the mechanism, or cannot touch the mechanism.

**[TO DO: Check whether any papers have applied a similar mechanism-level classification to Hattie's list specifically. A literature search on "Visible Learning AI" and "Hattie artificial intelligence" would confirm novelty. If a partial precedent exists, cite and distinguish.]**

---

## 3. Methods

### 3.1 The Seven-Dimension Framework

We developed a seven-dimension classification framework to characterize the relationship between each of Hattie's 252 influences and AI capability. The framework was designed to produce classifications that are mechanistically grounded, explicitly contestable, and sufficient to detect the distribution pattern we hypothesized — that high-impact influences are primarily augmentation territory rather than substitution territory.

The seven dimensions are:

**Dimension 1: Effect-size band.** Hattie's reported effect size, organized into five bands: High (d ≥ 0.70), Above hinge (d = 0.40–0.69), Below hinge (d = 0.15–0.39), Negligible (d = 0.01–0.14), and Harmful (d < 0). This is the only dimension inherited from the source data; all others are analyst classifications.

**Dimension 2: AI feasibility.** The load-bearing dimension. We classify each influence into one of four categories:

- *AI-NATIVE*: Current AI can perform the core task itself — generate worked examples, summarize a text, produce practice items, administer and score retrieval quizzes.
- *AI-AUGMENTED*: AI can strengthen the influence — improving planning, drafting, diagnosis, feedback at scale, or data analysis — while humans retain the decisive cognitive or relational work.
- *AI-ADJACENT*: The influence is primarily a context variable or structural condition (prior achievement, socioeconomic status, school size); AI can read the signal but cannot pull the lever.
- *AI-RESISTANT*: The active ingredient is relationship, presence, trust, or collective agency; AI can support the perimeter but must not replace the mechanism.

The decision rule for AI feasibility classification is: what is the core cognitive or relational act that the mechanism literature identifies as responsible for the effect? Can AI reliably perform that act? If yes, the influence is AI-NATIVE. If AI can strengthen but not perform the act, it is AI-AUGMENTED. If the act is structural or conditional rather than performable, it is AI-ADJACENT. If the act is irreducibly relational, embodied, or social, it is AI-RESISTANT.

**Dimension 3: Human irreducibility.** The degree to which the mechanism depends on human judgment, relationship, social presence, or embodiment. Coded Low, Medium, or High. High irreducibility means the effect disappears or reverses if the human role is removed.

**Dimension 4: Substitution risk.** The probability that AI use replaces the learning-producing act while improving the visible artifact. Coded Low, Medium, or High. High substitution risk means that well-intentioned AI deployment will frequently produce the Bastani pattern — improved assisted performance, degraded unassisted performance — because the AI naturally performs the act whose difficulty was the mechanism.

**Dimension 5: Mechanism conflict.** Whether the way AI tools naturally operate contradicts the reason the influence works. Coded None, Partial, or Present. Example: AI summarizes → the student never compresses, which is the compression that constituted the learning.

**Dimension 6: Vendor activity.** How actively the influence is currently being productized. Coded Low, Moderate, or High. This is a risk signal, not a quality signal — high vendor activity in high-conflict zones indicates a market dynamic that warrants policy attention.

**Dimension 7: Hypothetical AI effect.** A structured conjecture about the AI-mediated effect size under stated conditions. This dimension is clearly labeled as hypothesis throughout and is not reported in the main findings. It exists as a falsifiable prediction for future empirical work.

### 3.2 Classification Procedure

Each of the 252 influences was classified by the first author against the decision rules specified above. Classification rationale for each influence is documented in the supplementary dataset. Where the mechanism literature for a specific influence supported multiple reasonable classifications, we report the classification we judged most defensible and document the alternative in the notes column of the supplementary data.

We present this as a structured analytical framework rather than a psychometric instrument. The classification decisions are based on the mechanistic literature for each influence and are documented to allow replication, critique, and revision. Readers who disagree with specific coding decisions are encouraged to apply their own judgment using the published decision rules. The distribution finding — that the high-impact zone is overwhelmingly augmentation territory — is robust to reasonable reclassification at the margins because the pattern holds across 122 above-hinge influences, not a narrow subset.

Construction validity is supported in four ways. First, each dimension is tied to an observable question about the influence rather than to a global impression of whether AI is "good" or "bad": Can AI perform the focal act? Does the effect depend on human relationship, judgment, or agency? Would AI performance replace the learner's work? Does the tool's natural mode of operation conflict with the mechanism? Second, the framework separates feasibility from pedagogical desirability, preventing a technically possible AI use from being automatically coded as an appropriate instructional use. Third, the coding is conservative at the main-claim boundary: ambiguous high-impact cases are more often classified AI-AUGMENTED than AI-RESISTANT, and AI-NATIVE is reserved for influences where software can plausibly run the mechanism without displacing the learner's or teacher's essential act. Fourth, the claims reported in the results depend primarily on distributional contrasts, not on a small number of fragile row-level decisions. The supplementary rationales make each classification contestable and revisable, which is the appropriate validity standard for a conceptual classification framework.

The supplementary dataset is `data/hattie-ai-7dimensions-normalized.csv`. It contains 252 rows and includes rank, influence name, effect size, effect-size band, AI feasibility, human irreducibility, substitution risk, mechanism conflict, vendor activity, hypothetical AI effect notes, and classification rationale notes for each influence. The normalization step changes only the substitution-risk vocabulary, recoding `Moderate` to `Medium` for consistency.

The analysis is anchored to the 2018 252-influence list. Because *Visible Learning* effect sizes shift between editions as new meta-analyses are incorporated, the 2018 list is treated as a fixed snapshot. This is a methodological convenience rather than a claim that the 2018 decimals are final: the paper's main argument depends on band-level and mechanism-level patterns, not on the precision of any single effect-size estimate.

### 3.3 Scope and Limitations of the Classification

Three scope decisions require explicit statement.

First, the classification describes the *current* state of AI capability. AI-NATIVE classification means that current large language model and adaptive learning systems can perform the core task. As AI capability develops, classifications may shift — particularly in the AI-ADJACENT and AI-AUGMENTED categories. We treat the classification as a snapshot of the 2024–2025 AI capability landscape.

Second, the classification is mechanism-level, not product-level. We classify Hattie's influences, not specific tools. Whether any particular product operates in a way consistent with the AI-AUGMENTED classification for its claimed influence is an empirical question the framework does not answer directly. The framework specifies what would need to be true for a product to be consistent with its claimed mechanism.

Third, some influences in Hattie's list are correlational associations rather than interventions — prior achievement, deafness, socioeconomic status, relative age within a class. These are classified AI-ADJACENT by construction, because AI can detect the association but cannot perform an act to change it. The classification for these rows has a different logical character than for genuine intervention rows, and we note this where relevant in the results.

---

## 4. Results

### 4.1 Distribution by AI Feasibility

Table 1 presents the distribution of the 252 influences by AI feasibility category.

**Table 1.** Distribution of Hattie's 252 influences by AI feasibility.

| AI Feasibility | n | % |
|---|---:|---:|
| AI-ADJACENT | 97 | 38.5% |
| AI-AUGMENTED | 88 | 34.9% |
| AI-RESISTANT | 38 | 15.1% |
| AI-NATIVE | 29 | 11.5% |
| **Total** | **252** | **100%** |

The plurality of influences — 97, or 38.5% — are AI-ADJACENT: structural conditions and correlational associations that AI can detect but not alter. AI-AUGMENTED influences, where AI can strengthen but not replace the human mechanism, constitute the second largest category at 88 influences (34.9%). AI-NATIVE influences, where AI can perform the core task itself, are the smallest category at 29 influences (11.5%).

### 4.2 Distribution by Effect-Size Band

Table 2 presents the distribution of influences by effect-size band.

**Table 2.** Distribution of Hattie's 252 influences by effect-size band.

| Band | d range | n | % |
|---|---|---:|---:|
| High | ≥ 0.70 | 32 | 12.7% |
| Above hinge | 0.40–0.69 | 90 | 35.7% |
| Below hinge | 0.15–0.39 | 81 | 32.1% |
| Negligible | 0.01–0.14 | 32 | 12.7% |
| Harmful | < 0 | 17 | 6.7% |

There are 122 influences at or above the d = 0.40 hinge point.

### 4.3 Cross-Tabulation: Effect-Size Band by AI Feasibility

Table 3 presents the joint distribution of effect-size band and AI feasibility — the paper's central finding.

**Table 3.** Effect-size band by AI feasibility (n = 252).

| Band | AI-ADJACENT | AI-AUGMENTED | AI-NATIVE | AI-RESISTANT | Total |
|---|---:|---:|---:|---:|---:|
| High (d ≥ 0.70) | 1 | 24 | 4 | 3 | 32 |
| Above hinge (0.40–0.69) | 8 | 57 | 10 | 15 | 90 |
| Below hinge (0.15–0.39) | 51 | 2 | 13 | 15 | 81 |
| Negligible (0.01–0.14) | 27 | 1 | 2 | 2 | 32 |
| Harmful (< 0) | 10 | 4 | 0 | 3 | 17 |
| **Total** | **97** | **88** | **29** | **38** | **252** |

The pattern is striking. Among the 122 above-hinge influences, 81 (66.4%) are classified AI-AUGMENTED and 18 (14.8%) AI-RESISTANT. Only 14 (11.5%) are AI-NATIVE. Among the 32 high-band influences, 24 (75%) are AI-AUGMENTED, 3 (9.4%) AI-RESISTANT, and only 4 (12.5%) AI-NATIVE. Conversely, AI-NATIVE influences concentrate in the below-hinge zone: 13 of 29 AI-NATIVE influences (44.8%) are below the hinge.

### 4.4 Mechanism Conflict and Substitution Risk in the Above-Hinge Zone

Table 4 presents the distribution of mechanism conflict among above-hinge influences.

**Table 4.** Mechanism conflict among above-hinge influences (n = 122).

| Mechanism Conflict | n | % |
|---|---:|---:|
| No conflict | 63 | 51.6% |
| Partial conflict | 38 | 31.1% |
| Conflict present | 21 | 17.2% |

Nearly half of above-hinge influences can be supported by AI without direct mechanism conflict. However, 59 (48.4%) carry partial or full conflict — meaning that AI's natural mode of operation is at least partly at odds with the mechanism that produced the effect size. This concentration of partial-conflict cases in the above-hinge zone is where the phase gate framework has its greatest practical relevance.

Table 5 presents substitution risk among above-hinge influences.

**Table 5.** Substitution risk among above-hinge influences (n = 122).

| Substitution Risk | n | % |
|---|---:|---:|
| Low | 68 | 55.7% |
| Medium | 18 | 14.8% |
| High | 36 | 29.5% |

36 above-hinge influences (29.5%) carry high substitution risk — meaning that well-intentioned AI deployment is likely to improve visible performance metrics while degrading unassisted learning outcomes, because the AI naturally performs the act whose difficulty constituted the mechanism.

### 4.5 Vendor Activity Concentration

Table 6 presents vendor activity among above-hinge influences.

**Table 6.** Vendor activity among above-hinge influences (n = 122).

| Vendor Activity | n | % |
|---|---:|---:|
| Low | 100 | 81.9% |
| Moderate | 11 | 9.0% |
| High | 11 | 9.0% |

Vendor activity is concentrated. The 22 influences with moderate or high vendor activity disproportionately include high-substitution-risk and mechanism-conflict cases: feedback (d = 0.70, high substitution risk, partial conflict), scaffolding (d = 0.82, medium substitution risk, partial conflict), mastery learning (d = 0.57, high substitution risk, partial conflict), writing programs (d = 0.45, high substitution risk, conflict present), and intelligent tutoring systems (d = 0.48, high substitution risk, partial conflict).

Tables 3–6 were checked against `data/hattie-ai-7dimensions-normalized.csv`. The verified counts are: 252 total rows; 122 at or above the hinge; 32 High-band rows; above-hinge mechanism conflict = 63 no conflict, 38 partial conflict, 21 conflict present; above-hinge substitution risk = 68 low, 18 medium, 36 high; above-hinge vendor activity = 100 low, 11 moderate, 11 high.

Figure 1 should visualize Table 3 as a stacked bar chart: effect-size band on the x-axis and count of influences on the y-axis, stacked by AI feasibility category. A second panel should filter to the 122 at-or-above-hinge influences and show AI-AUGMENTED = 81, AI-RESISTANT = 18, AI-NATIVE = 14, and AI-ADJACENT = 9. The required figure data are present in `data/hattie-ai-band-by-feasibility.csv` and reproduced in Appendix A.

The high-vendor-activity list was checked against the dataset's `vendor_activity` column. The 12 High vendor-activity influences are: response to intervention, strategy to integrate with prior knowledge, micro-teaching/video review of lessons, scaffolding, planning and prediction, feedback, meta-cognitive strategies, mastery learning, intelligent tutoring systems, writing programs, technology in writing, and homework. This list is included in Appendix A as a supplementary table.

---

## 5. Discussion

### 5.1 The Augmentation Finding and Its Implications

The central finding of this paper is that the high-impact zone of Hattie's *Visible Learning* list is overwhelmingly augmentation territory, not substitution territory. Among above-hinge influences, AI-AUGMENTED classifications outnumber AI-NATIVE by approximately 6:1. Among high-band influences, the ratio is approximately 6:1 as well. Whatever the right AI strategy for a school district is, the evidence base districts cite to justify that strategy does not support a primarily substitutive approach.

This finding inverts a common procurement assumption. The implicit logic of many EdTech pitches is that technology advances a spectrum from low-impact to high-impact deployment, and that AI represents the most powerful version of educational technology available. The present analysis suggests a different structure: AI is not uniformly capable across educational activities. It is superhumanly capable at pattern-recognition, content generation, scheduling, and consistency — Tier 1 tasks that constitute the mechanism in a small minority of high-impact influences. It is genuinely useful as a support layer for the majority of high-impact influences, which depend on human judgment, relationship, feedback interpretation, and situated knowledge. And it is potentially harmful — through the substitution mechanism documented by Bastani et al. (2025) — in a meaningful proportion of high-impact influences, specifically those where the cognitive work AI naturally performs is the same cognitive work whose difficulty constituted the learning.

The policy implication is concrete. Districts evaluating AI platforms should not ask "does this platform target an above-hinge influence?" They should ask "is this influence AI-NATIVE or AI-AUGMENTED, and if AI-AUGMENTED, does the platform's design explicitly protect the human cognitive or relational work that produced the effect size?" The present framework provides a starting vocabulary for that question.

### 5.2 The Phase Gate as Operational Framework

The augmentation finding points toward a design principle we call the phase gate: a specification, made explicit before adoption, of what AI may do, what humans must do, and what counts as evidence that learning improved.

The phase gate has three required elements. First, AI role specification: the specific tasks AI performs (generating practice items, scheduling spaced review, surfacing error patterns, drafting feedback for teacher review). Second, human role specification: the specific cognitive or relational acts that must remain with the human — not as an aspiration but as a design constraint. Third, evidence specification: what counts as evidence that learning improved, defined in advance, that is delayed, unassisted, and transfer-bearing rather than measured by the AI platform itself.

The third element is particularly important and frequently absent from EdTech evaluations. Bastani et al.'s (2025) unrestricted GPT-4 group achieved impressive practice performance metrics. The mechanism failure was invisible until the unassisted exam. Districts that evaluate AI platforms on usage metrics, teacher satisfaction, or in-platform performance scores are systematically unable to detect the substitution failure mode. Only assessments of unassisted performance at delay — what students can do later, alone, on something new — are sensitive to the pattern.

**[TO DO: This section could be strengthened by citing 2–3 specific examples from the EdTech evaluation literature where platforms that improved in-platform metrics failed on delayed, unassisted assessments. The Bastani result is the strongest example; if you can find 1–2 more in the published literature, add them here.]**

### 5.3 The Vendor Activity Pattern

The concentration of high vendor activity in high-substitution-risk, mechanism-conflict zones warrants specific discussion. Feedback, scaffolding, intelligent tutoring, writing, and metacognitive strategies are all commercially attractive precisely because they are high-impact. They are also, by the present analysis, the zones where AI deployment is most likely to produce the substitution failure mode: visible improvement in assisted performance, degraded unassisted capability.

This is not an argument against AI deployment in these zones. It is an argument that deployment in these zones requires explicit phase gate design — not because the technology is less capable, but because the mechanism is more fragile. A feedback platform that generates excellent comments but releases them without teacher review is more dangerous in the feedback zone (d = 0.70, high substitution risk) than in a lower-stakes zone, because the stakes of getting the mechanism wrong are proportional to the effect size.

### 5.4 Robustness of the Distribution Finding

We stated in the methods section that the distribution finding is robust to reasonable reclassification at the margins, and this claim requires substantiation. The 6:1 AI-AUGMENTED to AI-NATIVE ratio in the above-hinge zone is a large structural pattern. To reverse it, a reclassifier would need to move approximately 50 AI-AUGMENTED influences to AI-NATIVE — roughly half of all AI-AUGMENTED above-hinge cases. That would require arguing that AI can perform the core cognitive act in influences such as collective teacher efficacy, teacher-student relationships, metacognitive strategies, self-efficacy, and reciprocal teaching — influences where the mechanism literature consistently identifies the human cognitive or relational act as constitutive of the effect.

Reasonable reclassification — disagreeing with 10–20 specific coding decisions — would change individual cells in Table 3 but would not change the direction or approximate magnitude of the finding. The pattern is structural, not dependent on contested edge cases.

As a simple sensitivity analysis, consider the most AI-favorable plausible recoding: moving 10 above-hinge AI-AUGMENTED cases to AI-NATIVE. This would reduce the above-hinge AI-AUGMENTED count from 81 to 71 and increase AI-NATIVE from 14 to 24. The augmentation-to-native ratio would fall from 5.8:1 to 3.0:1, but AI-AUGMENTED would still be the dominant category and AI-NATIVE would still represent less than one fifth of the above-hinge set. Even a more aggressive 20-case recoding would yield 61 AI-AUGMENTED and 34 AI-NATIVE cases, preserving the central conclusion that above-hinge influence space is not primarily AI-native. A reversal would require moving roughly 34 cases from AI-AUGMENTED to AI-NATIVE just to reach parity, and approximately 50 cases to make AI-NATIVE clearly dominant. That level of recoding would no longer be a marginal disagreement; it would require a substantively different theory of what counts as the core learning mechanism in many of the strongest human-centered influences.

### 5.5 Implications for Research

The present classification generates several empirical predictions that constitute an agenda for future research.

First, the hypothetical AI effect estimates in the supplementary data (Dimension 7) are falsifiable predictions about AI-mediated effect sizes under specified conditions. Each one can be tested by a well-designed field experiment. The most important predictions are those in the high-substitution-risk, mechanism-conflict zone — feedback, summarization, scaffolding, metacognitive strategies — where the framework predicts that AI deployment in substitution mode will degrade unassisted outcomes relative to human-only or properly guardrailed conditions.

Second, the vendor activity pattern generates a surveillance hypothesis: as AI deployment in high-substitution-risk zones increases, we should expect to see systematic discrepancies between in-platform performance metrics and delayed, unassisted assessment outcomes. Prospective studies with pre-registered evidence plans including both types of outcome measures would test this hypothesis.

Third, the AI-ADJACENT category — 97 influences including prior achievement, socioeconomic status, and school size — points toward a research opportunity in early-warning system design. AI can identify these context signals earlier and more systematically than human attention allows; the research question is whether early identification translates into improved outcomes when the response is a human instructional intervention.

Three candidate studies follow directly from the classification. First, a feedback trial should compare human-only feedback, AI-drafted teacher-reviewed feedback, and AI-released feedback on student writing, with outcomes measured by delayed unaided revision and transfer writing rather than immediate rubric gain. The prediction is that AI-drafted teacher-reviewed feedback will improve teacher throughput without degrading student revision quality, while unreviewed AI feedback will show weaker transfer where it substitutes for teacher judgment or student revision work.

Second, a tutoring trial should compare unrestricted chat assistance, stepwise answer-withholding tutoring, and Tutor CoPilot-style AI support to human tutors. The primary outcome should be delayed unassisted problem solving on novel items; secondary outcomes should include in-platform practice performance and tutor learning over time. The prediction is that unrestricted chat will maximize assisted performance but create the largest assisted/unassisted gap, while human-loop AI will produce smaller but more durable gains.

Third, an early-warning system trial should test whether AI-ADJACENT signal detection improves outcomes only when attached to a specified human intervention. Schools would be assigned to business-as-usual data review, AI risk flagging alone, or AI risk flagging plus required human response protocols. The prediction is that flagging alone will improve detection but not outcomes, while flagging plus human instructional response will improve both.

---

## 6. Limitations

Several limitations of the present analysis require explicit acknowledgment.

**Classification subjectivity.** The seven-dimension framework was applied by a single coder. Although the decision rules are explicit and documented, and although we argue the distribution finding is robust to reasonable reclassification, the absence of independent coding is a methodological constraint. Future work should apply the framework with multiple coders and report inter-rater reliability statistics.

**Effect size provenance.** As Bergeron (2017), Simpson (2017), and Kraft (2020) have documented, the effect sizes in Hattie's synthesis are assemblages of heterogeneous studies with different designs, populations, and outcome measures. The present paper treats them as banded categories — High, Above hinge, Below hinge — rather than precise measurements, which mitigates but does not eliminate this concern.

**Temporal snapshot.** The AI feasibility classification reflects the 2024–2025 AI capability landscape. As AI capabilities develop — particularly in natural language understanding, multimodal processing, and embodied agent systems — classifications may need revision. AI-AUGMENTED influences where the decisive human act is judgment or relationship may remain stable; AI-ADJACENT influences where the constraint is structural may shift as AI acquires new capabilities.

**Mechanism literature coverage.** The classification rationale for each influence draws on the mechanism literature as available. For some below-hinge and negligible-band influences, the mechanism literature is thin, and classification decisions are correspondingly less certain. The above-hinge and high-band classifications, which are the paper's focus, rest on a richer literature base.

**List version.** The analysis is anchored to the 2018 252-influence list. Effect sizes for specific influences differ across editions of *Visible Learning* as new meta-analyses are incorporated. The band-level classification approach largely insulates the findings from inter-edition drift for most influences, but influences near the hinge point may be reclassified if their effect sizes shift substantially.

---

## 7. Conclusion

This paper has applied a seven-dimension classification framework to all 252 influences in Hattie's (2018) *Visible Learning* synthesis and found that the high-impact zone is overwhelmingly augmentation territory rather than substitution territory. Among above-hinge influences, AI-AUGMENTED classifications outnumber AI-NATIVE by approximately 6:1. Among high-band influences, the ratio is approximately 6:1. The influences most heavily targeted by current AI vendor activity — feedback, scaffolding, writing, metacognitive strategies — disproportionately carry high substitution risk and mechanism conflict.

These findings do not argue against AI in education. They argue for a specific design discipline: the phase gate, which explicitly specifies what AI may do, what humans must keep, and what delayed, unassisted evidence will determine whether learning improved. The evidence base that districts invoke to justify AI purchases does not support substitution strategies. It supports augmentation strategies in which AI handles logistical, pattern-recognition, and consistency work while human cognitive and relational work is explicitly protected.

The classification framework, all coding decisions, and rationale notes are publicly available in the supplementary dataset. Researchers and practitioners who disagree with specific classifications are encouraged to apply their own judgment using the published decision rules. The distribution finding does not depend on contested edge cases; it is a structural pattern that holds across the full 252-influence set.

---

## Acknowledgments

**[TO DO: Add acknowledgments. If any graduate students assisted with coding or literature review, name them here. If the work was supported by a grant, include the grant number.]**

---

## Conflict of Interest

The author declares no conflict of interest.

**[TO DO: Confirm this is accurate. If Medhavy or any related platform is discussed in the paper or if the author has any financial interest in EdTech products, this disclosure needs to be more specific.]**

---

## Data Availability

The full classification dataset, including all seven dimension codes and rationale notes for each of the 252 influences, is available as Supplementary Material. The dataset is also available at: **[TO DO: Add OSF, GitHub, or institutional repository link before submission. The data should be publicly deposited before or at the time of submission for *Computers & Education* and most BJET submissions.]**

---

## References

**[TO DO: Complete DOI verification and target-journal reference formatting before submission. Local chapter and fact-check files have verified the Bergeron, Hamilton, Steiss, Simpson, and Wang entries below, but a final reference-manager pass is still needed.]**

Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS*, 122. https://www.pnas.org/doi/10.1073/pnas.2422633122

Bergeron, P.-J. (2017). How to engage in pseudoscience with real data: A criticism of John Hattie's arguments in Visible Learning from the perspective of a statistician (L. Rivard, Trans.). *McGill Journal of Education*, 52(1), 237–246. https://mje.mcgill.ca/article/view/9475

Hattie, J. (2009). *Visible Learning: A synthesis of over 800 meta-analyses relating to achievement*. Routledge.

Hattie, J. (2018). *Visible Learning*: 252 influences and effect sizes. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/

Hamilton, A., Wiliam, D., & Hattie, J. (2023). *The future of AI in education: 13 things we can do to minimize the damage*. Working paper (EdArXiv). https://osf.io/preprints/edarxiv/372vr/

Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77(1), 81–112.

Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. *Psychological Bulletin*, 119(2), 254–284.

Kraft, M. A. (2020). Interpreting effect sizes of education interventions. *Educational Researcher*, 49(4), 241–253. https://journals.sagepub.com/doi/10.3102/0013189X20912798

Kulik, J. A., & Fletcher, J. D. (2016). Effectiveness of intelligent tutoring systems: A meta-analytic review. *Review of Educational Research*, 86(1), 42–78.

Ma, W., Adesope, O. O., Nesbit, J. C., & Liu, Q. (2014). Intelligent tutoring systems and learning outcomes: A meta-analysis. *Journal of Educational Psychology*, 106(4), 901–918.

Mishra, P., & Koehler, M. J. (2006). Technological pedagogical content knowledge: A framework for teacher knowledge. *Teachers College Record*, 108(6), 1017–1054.

Puentedura, R. (2006). *Transformation, technology, and education*. http://hippasus.com/resources/tte/

Simpson, A. (2017). The misdirection of public policy: Comparing and combining standardised effect sizes. *Journal of Education Policy*, 32(4), 450–466.

Steiss, J., Tate, T., Graham, S., et al. (2024). Comparing the quality of human and ChatGPT feedback of students' writing. *Learning and Instruction*, 91, 101894. https://www.sciencedirect.com/science/article/pii/S0959475224000215

Terhart, E. (2011). Has John Hattie really found the holy grail of research on teaching? An extended review of *Visible Learning*. *Journal of Curriculum Studies*, 43(3), 425–438.

VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. *Educational Psychologist*, 46(4), 197–221.

Wang, R. E., et al. (2024). Tutor CoPilot: A human-AI approach for scaling real-time expertise. arXiv:2410.03017. https://arxiv.org/abs/2410.03017

**[TO DO: Add Eacott (2017) citation on Visible Learning's policy influence — find the exact paper.]**

---

## Appendix A: Summary of Classification Distribution

**Table A1.** Full distribution summary across all seven dimensions.

| Dimension | Category | n | % |
|---|---|---:|---:|
| AI feasibility | AI-ADJACENT | 97 | 38.5% |
| AI feasibility | AI-AUGMENTED | 88 | 34.9% |
| AI feasibility | AI-RESISTANT | 38 | 15.1% |
| AI feasibility | AI-NATIVE | 29 | 11.5% |
| Human irreducibility | Low | 117 | 46.4% |
| Human irreducibility | Medium | 78 | 31.0% |
| Human irreducibility | High | 57 | 22.6% |
| Substitution risk | Low | 170 | 67.5% |
| Substitution risk | Medium | 29 | 11.5% |
| Substitution risk | High | 53 | 21.0% |
| Mechanism conflict | No conflict | 169 | 67.1% |
| Mechanism conflict | Partial conflict | 48 | 19.0% |
| Mechanism conflict | Conflict present | 35 | 13.9% |
| Vendor activity | Low | 229 | 90.9% |
| Vendor activity | Moderate | 11 | 4.4% |
| Vendor activity | High | 12 | 4.8% |

**Table A2.** Effect-size band by AI feasibility.

| Band | AI-ADJACENT | AI-AUGMENTED | AI-NATIVE | AI-RESISTANT | Total |
|---|---:|---:|---:|---:|---:|
| High | 1 | 24 | 4 | 3 | 32 |
| Above hinge | 8 | 57 | 10 | 15 | 90 |
| Below hinge | 51 | 2 | 13 | 15 | 81 |
| Negligible | 27 | 1 | 2 | 2 | 32 |
| Harmful | 10 | 4 | 0 | 3 | 17 |
| **Total** | **97** | **88** | **29** | **38** | **252** |

**Table A3.** At-or-above-hinge summary (d >= 0.40; n = 122).

| Dimension | Breakdown |
|---|---|
| AI feasibility | AI-AUGMENTED = 81; AI-RESISTANT = 18; AI-NATIVE = 14; AI-ADJACENT = 9 |
| Mechanism conflict | No conflict = 63; Partial conflict = 38; Conflict present = 21 |
| Human irreducibility | Medium = 72; High = 27; Low = 23 |
| Substitution risk | Low = 68; High = 36; Medium = 18 |
| Vendor activity | Low = 100; High = 11; Moderate = 11 |

**Table A4.** High vendor-activity influences.

| Rank | Influence | d | Band | AI feasibility | Substitution risk | Mechanism conflict |
|---:|---|---:|---|---|---|---|
| 5 | Response to intervention | 1.29 | High | AI-AUGMENTED | Medium | No conflict |
| 10 | Strategy to integrate with prior knowledge | 0.93 | High | AI-AUGMENTED | Low | Partial conflict |
| 13 | Micro-teaching/video review of lessons | 0.88 | High | AI-AUGMENTED | Medium | No conflict |
| 16 | Scaffolding | 0.82 | High | AI-AUGMENTED | Medium | Partial conflict |
| 22 | Planning and prediction | 0.76 | High | AI-AUGMENTED | Low | Partial conflict |
| 32 | Feedback | 0.70 | High | AI-AUGMENTED | High | Partial conflict |
| 46 | Meta-cognitive strategies | 0.60 | Above hinge | AI-AUGMENTED | Low | Partial conflict |
| 57 | Mastery learning | 0.57 | Above hinge | AI-AUGMENTED | High | Partial conflict |
| 89 | Intelligent tutoring systems | 0.48 | Above hinge | AI-NATIVE | High | Partial conflict |
| 97 | Writing programs | 0.45 | Above hinge | AI-AUGMENTED | High | Partial conflict |
| 114 | Technology in writing | 0.42 | Above hinge | AI-NATIVE | High | Conflict present |
| 159 | Homework | 0.29 | Below hinge | AI-RESISTANT | High | Conflict present |

---

## Appendix B: Selected High-Priority Classification Rationales

| Rank | Influence | d | AI feasibility | Key rationale |
|---:|---|---:|---|---|
| 1 | Collective teacher efficacy | 1.57 | AI-RESISTANT | The mechanism is shared professional trust and collective agency among teachers. AI dashboards may support coordination, but the effect-producing construct is social and cannot be automated. |
| 2 | Self-reported grades | 1.33 | AI-AUGMENTED | AI can prompt prediction and reflection, but the mechanism is the student's own calibration of expected performance. If AI predicts for the student, the self-assessment act is removed. |
| 5 | Response to intervention | 1.29 | AI-AUGMENTED | AI can monitor trajectories and flag tier transitions, but targeted Tier 2/3 instruction and team judgment remain human-delivered mechanisms. |
| 7 | Jigsaw method | 1.20 | AI-RESISTANT | The effect depends on peer-to-peer teaching, interdependence, and social accountability. AI can optimize grouping logistics but cannot replace the human exchange. |
| 16 | Scaffolding | 0.82 | AI-AUGMENTED | Adaptive hinting is plausible, but systematic fading and transfer of responsibility are essential. Permanent AI scaffolding risks replacing the competence it is meant to build. |
| 18 | Summarization | 0.79 | AI-NATIVE | AI can summarize text, but that capability creates direct mechanism conflict: if AI performs the compression, the student does not practice summarizing. Safe use requires evaluation of student summaries rather than substitution. |
| 32 | Feedback | 0.70 | AI-AUGMENTED | AI can draft task-level feedback, but feedback effects depend on level, timing, interpretation, and response. Unreviewed feedback or answer-revealing hints can convert the channel into a solution dispenser. |
| 57 | Mastery learning | 0.57 | AI-AUGMENTED | Platforms can track mastery and route practice, but software-defined mastery may overfit procedural performance. Human judgment is needed to verify conceptual transfer and prevent platform metrics from becoming the outcome. |
| 89 | Intelligent tutoring systems | 0.48 | AI-NATIVE | This is a legitimate AI-native zone when domains are structured and feedback is step-level. The risk is configuration: unconstrained chat or answer access converts tutoring into substitution. |
| 114 | Technology in writing | 0.42 | AI-NATIVE | AI can produce text, but writing instruction works through learner authorship. Generative writing tools are safe only when they support planning, feedback, or revision without replacing composition. |

---

*Current file word count: 8,034 words by `wc -w`, including tables, references, and TO DO markers. Target word count for Computers & Education: 8,000–10,000 words. If the target journal excludes references and appendices, expansion is still most likely needed in the Literature Review (Section 2) and Discussion (Section 5).*

**[TO DO: Final pre-submission checklist:
- [x] Verify all counts in Tables 1–6 against the normalized dataset
- [x] Add second coder reliability OR strengthen construction validity argument
- [ ] Deposit dataset in public repository and add link to Data Availability section
- [ ] Confirm all references have DOIs where available
- [ ] Format references to target journal style (APA 7th for most)
- [ ] Check abstract word count against journal limit
- [ ] Add acknowledgments
- [ ] Confirm conflict of interest statement
- [x] Add Appendix B classification rationales
- [ ] Run through target journal's submission checklist
- [ ] Remove all TO DO markers before submission]**
