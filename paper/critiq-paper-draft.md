# Visible Learning × AI: A Mechanism-Based Classification of 252 Hattie Influences Under AI Mediation

---

## Author Action Placeholders Before Submission

The current draft is now framed as expert analytical coding and hypothesis generation, not as validated empirical measurement. Before submission, resolve the following placeholders:

- [TODO: add a second coder or keep the single-analyst limitation prominent; if adding a second coder, report Cohen's kappa or Krippendorff's alpha.]
- [TODO: verify the exact source and publication status of the 2018 Hattie updated ranking used for the 252 influences.]
- [TODO: verify all citations in the References to Verify section, especially Hattie & Timperley (2007), Simpson (2017), Bergeron & Rivard (2017), and the source for collective teacher efficacy mechanisms.]
- [TODO: decide whether vendor activity remains an illustrative market-awareness rating or becomes a systematic vendor-claim corpus.]
- [TODO: split the free-text `notes` field into `mechanism_notes`, `implementation_notes`, and `policy_notes` if this paper is going to carry a formal dataset appendix.]
- [TODO: review Appendix Table A1 and decide whether hypothetical AI effect estimates should remain in the supplement or be removed entirely for a stricter journal version.]
- [TODO: add the actual appendix tables and figure files after charts are generated from `data/hattie-ai-analysis-summary.md`, `data/hattie-ai-band-by-feasibility.csv`, and `data/hattie-ai-band-by-mechanism-conflict.csv`.]

## Abstract

**Background.** Hattie's Visible Learning synthesis of 252 educational influences is among the most cited evidence bases in education policy and is routinely invoked to support EdTech product claims. These claims typically treat effect sizes as transferable by label — asserting, for example, that an AI tutoring product inherits the effect size for "feedback" (d=0.70) or "intelligent tutoring systems" (d=0.48) by virtue of categorical resemblance. This conflation ignores the mechanism specificity that generated the original effect.

**Objective.** This paper develops and applies a mechanism-based classification framework to all 252 Hattie influences, evaluating each across six dimensions: AI feasibility, human irreducibility, substitution risk, mechanism conflict, effect-size band, and vendor activity.

**Methods.** We conducted expert analytical coding of each influence, assigning categorical values to each dimension based on the documented mechanisms of the original meta-analytic literature. Descriptive grouping by shared categorical profiles produced 78 classification groups. All classifications are analytical judgments; no empirical AI-mediated implementation data were collected, and no inter-rater reliability assessment has yet been performed.

**Results.** Of 252 influences, 97 (38.5%) are classified AI-ADJACENT, 88 (34.9%) AI-AUGMENTED, 38 (15.1%) AI-RESISTANT, and 29 (11.5%) AI-NATIVE. Of the 122 influences at or above Hattie's 0.40 hinge point, 81 are AI-AUGMENTED, 18 AI-RESISTANT, 14 AI-NATIVE, and 9 AI-ADJACENT. Mechanism conflict is present or partial in 59 of those 122 high-value influences. Only 12 influences carry high vendor activity — and 11 of those 12 fall in the AI-AUGMENTED or AI-NATIVE categories, all within effect-size ranges that require mechanism preservation to remain valid.

**Conclusion.** The data do not support a general claim that AI improves education. They support a mechanism-specific view: AI is most defensible when it augments high-effect interventions without replacing the human, relational, or cognitive condition that produced the original effect. The framework predicts that AI implementations which substitute for rather than augment those conditions will produce attenuated or inverted effects. Empirical validation of this prediction is the necessary next step.

---

## Introduction

### The Problem with General AI Claims in Education

The question "does AI help education?" is not a useful research question. It is the shape a research question takes before the mechanism has been named. A claim that AI improves learning is structurally equivalent to the claim that "medicine helps health" — true in some cases, false in others, and useless for deciding what to do next. What matters is not whether AI can deliver an educational intervention but whether the version it delivers preserves the mechanism that generated the effect in the first place.

This matters because the education technology market has converged on a particular rhetorical move: citing meta-analytic effect sizes as product evidence without accounting for the implementation conditions those effect sizes describe. A vendor offering an AI writing assistant cites the Hattie effect size for "feedback" (d=0.70) as if the product's feedback mechanism is equivalent to the human feedback mechanisms studied across hundreds of trials over four decades. A vendor offering adaptive learning software cites "mastery learning" (d=0.57) as if software-defined mastery gates reproduce the teacher judgment, conceptual assessment, and readiness verification that the original mastery learning research required. The numbers are real. The inference is not.

The purpose of this paper is to make that inference visible.

### Why Hattie Is a Useful but Dangerous Starting Point

Hattie's Visible Learning synthesis [VERIFY: Hattie, J. (2009). Visible Learning. Routledge; Hattie, J. (2012). Visible Learning for Teachers. Routledge; updated rankings reported in 2018] is the largest meta-analytic compilation of educational effect sizes available. Its value is breadth: 252 influences, covering instructional strategies, school-level factors, student characteristics, home and family variables, and technology interventions, organized by effect size against a common hinge point of d=0.40. No comparable synthesis exists at this scale.

Its danger is the same as its value: the breadth required to aggregate across 252 influences collapses heterogeneous mechanisms into single labels. "Feedback" (d=0.70) aggregates more than 50 different feedback types — corrective, elaborative, self-referential, peer-generated, delayed, immediate — each with its own mechanism and implementation requirements [VERIFY: Hattie & Timperley, 2007, The Power of Feedback, Review of Educational Research]. Citing the aggregate effect size to justify any specific feedback implementation requires the implicit claim that the specific implementation matches the central tendency of the distribution that produced the aggregate. This claim is almost never examined.

This problem compounds when the intervention is AI-mediated. The original studies that produced many of Hattie's effect sizes were conducted before modern learning management systems existed, let alone before large language models. Applying a 1990s effect size for "technology in education" to a current generative AI product is not a research-based inference — it is a category error wearing the clothes of evidence.

### The Core Methodological Problem

An effect size belongs to a mechanism under implementation conditions — not to a label.

This sentence is the organizing principle of the present paper. It means that when a vendor cites d=0.48 for "intelligent tutoring systems," the defensible inference is limited to: implementations that resemble the studies in the ITS meta-analysis in curriculum scope, learner modeling approach, feedback mechanism, implementation fidelity, teacher oversight structure, and student population characteristics. If an AI product differs from those studies on most of those dimensions — as modern large language models almost certainly do — the effect size provides no evidentiary support for the product's claims.

The mechanism specificity problem also runs in the other direction. Several of the highest-effect influences in the Hattie synthesis — collective teacher efficacy (d=1.57), teacher credibility (d=0.90), classroom discussion (d=0.82) — are high-effect precisely because the human, relational, and social conditions that constitute them cannot be extracted from the intervention without destroying it. These are not interventions that happen to involve humans. They are interventions where human relationship, trust, and shared professional identity are the mechanism. No AI implementation is coherent for these categories — not because the technology is immature, but because the mechanism is definitionally human.

### The AI+1 Framing

The analytic frame we apply throughout this paper is AI+1: AI as an augmentation layer added to a teacher-student mechanism that already exists, rather than as a replacement for that mechanism. The "+1" is the teacher. The frame predicts that effect sizes are most likely to survive AI mediation when: (a) the original mechanism was procedural rather than relational; (b) the AI layer increases the frequency, personalization, or accessibility of the intervention without removing the student cognitive work that generates learning; and (c) a teacher remains present to handle the cases that the AI cannot — the misconceptions requiring direct instruction, the motivational failures requiring human relationship, the assessments of transfer and depth requiring professional judgment.

The AI+1 frame also generates a falsifiable prediction: AI implementations that remove the teacher, replace the student's cognitive work with machine output, or apply effect sizes from pre-AI studies without verifying mechanism preservation will underperform the original effect size. This prediction can be tested empirically. The present paper establishes the classification framework on which that testing would be based.

### Research Questions

This paper addresses the following research questions:

1. Which high-effect Hattie influences does AI genuinely enable, augment, or make more accessible — and under what conditions?
2. Which high-effect influences does AI actively undermine through substitution of the causal human or cognitive mechanism?
3. Which low-effect influences does AI make cheaper to deploy, and does cheaper deployment change their analytical value?
4. For AI-mediated implementations of high-effect influences, what must the implementation preserve for the original mechanism to survive?
5. Where does AI's strongest case rest on realistic competitive baseline rather than comparison to ideal human implementation?
6. Where is mechanism conflict most dangerous — where AI is most likely to produce performance gains while removing the cognitive work that constitutes learning?

---

## Methods

### Data Source

The analysis is based on Hattie's 252 educational influences as compiled in the Visible Learning synthesis [TODO: verify exact source for Hattie 2018 updated rankings]. Each influence was treated as a unit of analysis. The normalized main analysis dataset is included as supplementary material (`data/hattie-ai-main-analysis.csv`), with hypothetical AI effect estimates separated into `data/hattie-ai-hypothetical-effects-appendix.csv`.

### Classification Dimensions

Six dimensions were applied to each influence:

**Table 1. Classification Dimensions and Values**

| Dimension | Values | Description |
|---|---|---|
| AI Feasibility | AI-NATIVE, AI-AUGMENTED, AI-ADJACENT, AI-RESISTANT | Can AI deliver the core mechanism? At what level of human mediation? |
| Effect-Size Band | High (d≥0.70), Above hinge (0.40–0.69), Below hinge (0.15–0.39), Negligible (0.01–0.14), Harmful (<0) | Hattie's hinge point is 0.40: the average effect of a year of schooling |
| Human Irreducibility | High, Medium, Low | Is a specific human — their relationship, judgment, or presence — central to the mechanism? |
| Substitution Risk | High, Medium, Low | Does AI implementation remove the human condition that generated the effect? |
| Mechanism Conflict | Conflict present, Partial conflict, No conflict | Does AI doing the work prevent the student from performing the cognitive work that builds the capacity? |
| Vendor Activity | High, Moderate, Low | Is this influence currently being marketed by EdTech vendors? |

**AI Feasibility definitions:**
- *AI-NATIVE*: AI can deliver the core mechanism at scale without teacher mediation.
- *AI-AUGMENTED*: AI can support the intervention, but human judgment or student work remains essential.
- *AI-ADJACENT*: AI touches logistics, tracking, or reporting but not the core mechanism.
- *AI-RESISTANT*: AI substitution breaks or degrades the core mechanism.

### Effect-Size Band Thresholds

Hattie's hinge point of d=0.40 represents the average effect of a year of regular schooling. Influences below this point add less to achievement than a year of school would in their absence. We apply this threshold as our primary analytical boundary. The High band (d≥0.70) identifies influences with strong, consistent meta-analytic support warranting significant implementation investment.

### Classification Procedure

Each of the 252 influences was coded across all six dimensions based on: (a) the documented mechanism in the source meta-analytic literature where available, (b) the implementation conditions described in the original studies, and (c) analytical reasoning about how AI mediation would interact with those mechanisms and conditions.

For this revision, the `substitution_risk` label was normalized so that all entries use the three-level scale High, Medium, and Low; earlier `Moderate` entries were recoded as `Medium`. The normalized file is `data/hattie-ai-7dimensions-normalized.csv`. This correction changes only label consistency, not the substantive coding logic.

Classifications represent expert analytical coding by a single analyst. **No inter-rater reliability assessment was conducted.** All classifications should be treated as a structured set of hypotheses for empirical investigation rather than as established findings. This framing is appropriate for a framework paper of this type; the classifications are intended to generate testable predictions, not to settle empirical questions.

A note on hypothetical AI effect estimates: the supplementary dataset includes analyst-generated hypothetical AI effect size estimates for each influence (e.g., "d≈0.50 [HYPOTHESIS]: AI mastery gating is legitimate"). These estimates appear in Appendix Table A1 and are explicitly not included in the main analyses. They represent analytical judgment about the plausible direction and magnitude of effect size change under AI mediation. They are not empirical findings, not validated predictions, and not claims about any specific product. They are structured hypotheses for future empirical testing.

### Categorical Profile Grouping

After coding, we grouped influences by shared categorical profiles across all six dimensions. Influences with identical classification signatures were assigned to the same group. This process produced 78 descriptive categorical profile groups. These groups are not derived from a statistical clustering algorithm; they are descriptive collections of influences sharing the same classification profile. We use the term "classification groups" throughout to distinguish them from statistically derived clusters.

### Limitations of the Method

The classification method has the following limitations, which must be held in mind when interpreting the results:

- *Single-analyst coding*: No inter-rater reliability data are available. Classifications are hypotheses, not verdicts.
- *Mechanism documentation varies*: Some Hattie influences have rich mechanistic literature; others are sparsely documented. Classifications in the latter category carry greater uncertainty.
- *Temporal validity*: All technology-related Hattie categories were coded with reference to the implementation conditions documented in the original meta-analyses, which substantially predate generative AI. No technology-related effect size in the Hattie synthesis was produced under conditions resembling modern large language models.
- *No empirical AI-mediated outcome data*: This framework predicts the likely effect of AI mediation based on mechanism analysis. No classroom outcome data comparing AI-mediated to human-mediated implementations were collected or analyzed.
- *Vendor claims not systematically audited*: Vendor activity ratings reflect general market awareness rather than a systematic corpus of verified product claims.

---

## Results

### Overview

The full classification of 252 influences produced the following distribution across dimensions.

**Table 2. Distribution by AI Feasibility**

| AI Feasibility | n | % of 252 |
|---|---|---|
| AI-ADJACENT | 97 | 38.5% |
| AI-AUGMENTED | 88 | 34.9% |
| AI-RESISTANT | 38 | 15.1% |
| AI-NATIVE | 29 | 11.5% |

**Table 3. Distribution by Human Irreducibility**

| Human Irreducibility | n | % of 252 |
|---|---|---|
| Low | 117 | 46.4% |
| Medium | 78 | 31.0% |
| High | 57 | 22.6% |

**Table 4. Distribution by Substitution Risk**

| Substitution Risk | n | % of 252 |
|---|---|---|
| Low | 170 | 67.5% |
| High | 53 | 21.0% |
| Medium | 29 | 11.5% |

**Table 5. Distribution by Mechanism Conflict**

| Mechanism Conflict | n | % of 252 |
|---|---|---|
| No conflict | 169 | 67.1% |
| Partial conflict | 48 | 19.0% |
| Conflict present | 35 | 13.9% |

**Table 6. Distribution by Vendor Activity**

| Vendor Activity | n | % of 252 |
|---|---|---|
| Low | 229 | 90.9% |
| High | 12 | 4.8% |
| Moderate | 11 | 4.4% |

**Table 7. Distribution by Effect-Size Band**

| Band | n | % of 252 |
|---|---|---|
| Above hinge (0.40–0.69) | 90 | 35.7% |
| Below hinge (0.15–0.39) | 81 | 32.1% |
| High (d≥0.70) | 32 | 12.7% |
| Negligible (0.01–0.14) | 32 | 12.7% |
| Harmful (<0) | 17 | 6.7% |

### High-Effect Influences (d≥0.70)

Of the 32 influences in the High effect-size band, the majority are AI-AUGMENTED (n=24, 75.0%), reflecting that many of the most powerful educational interventions can be supported but not replaced by AI. Four High-band influences are AI-NATIVE (Summarization, Mnemonics, Repeated reading programs, Rehearsal and memorization), though Summarization carries a Conflict present flag (addressed in the Discussion). Three High-band influences are AI-RESISTANT: Collective teacher efficacy (d=1.57), Jigsaw method (d=1.20), and Teacher credibility (d=0.90). One High-band influence, Prior ability (d=0.94), is AI-ADJACENT because AI can measure or model it but does not create the underlying prior knowledge condition.

Twelve of the 32 High-band AI-AUGMENTED influences carry Partial or full mechanism conflict — meaning AI can support delivery but specific implementation choices determine whether the student performs the cognitive work that generates the learning effect.

### Above-Hinge Influences (0.40≤d<0.70)

Of the 90 above-hinge influences, 59 are AI-AUGMENTED (65.6%), 18 are AI-RESISTANT (20.0%), 9 are AI-ADJACENT (10.0%), and 4 are AI-NATIVE (4.4%). Mechanism conflict is present or partial in 38 of the 90 above-hinge influences (42.2%), concentrated in the AI-AUGMENTED category.

### Below-Hinge Technology Profile

The most important finding in the below-hinge category is not the size of the effects but their misuse. The five pre-AI technology influences (Technology in mathematics, d=0.33; Technology with high school students, d=0.30; Online and digital tools, d=0.29; Technology in reading/literacy, d=0.29; Use of PowerPoint, d=0.26) form a coherent classification group: AI-NATIVE feasibility, High substitution risk, and Low vendor activity in the dataset — because the products that would claim these effects do not label themselves as "technology in mathematics" but instead claim the far larger effect sizes of feedback, mastery learning, or individualized instruction. The ICT aggregate (rank 93, d=0.47) presents the same problem at a higher effect size: it is the pre-LLM technology bucket, and it should not be used as evidence for any current AI product.

### High Vendor Activity Influences

Twelve influences carry High vendor activity. Eleven of the twelve fall in the AI-AUGMENTED or AI-NATIVE category. Ten of the twelve are at or above the hinge point. The highest-effect examples include Feedback (d=0.70, AI-AUGMENTED, Partial conflict), Scaffolding (d=0.82, AI-AUGMENTED, Partial conflict), Mastery learning (d=0.57, AI-AUGMENTED, Partial conflict), and Meta-cognitive strategies (d=0.60, AI-AUGMENTED, Partial conflict). The consistent pattern is that vendor activity concentrates near the intersection of high effect size, AI-AUGMENTED feasibility, and mechanism conflict — exactly the category where implementation design most determines whether the effect survives.

**Table 8. High Vendor Activity Influences: Feasibility and Conflict**

| Rank | Influence | d | Band | Feasibility | Mechanism Conflict |
|---|---|---|---|---|---|
| 5 | Response to intervention | 1.29 | High | AI-AUGMENTED | No conflict |
| 10 | Strategy to integrate with prior knowledge | 0.93 | High | AI-AUGMENTED | Partial conflict |
| 13 | Micro-teaching/video review of lessons | 0.88 | High | AI-AUGMENTED | No conflict |
| 16 | Scaffolding | 0.82 | High | AI-AUGMENTED | Partial conflict |
| 22 | Planning and prediction | 0.76 | High | AI-AUGMENTED | Partial conflict |
| 32 | Feedback | 0.70 | High | AI-AUGMENTED | Partial conflict |
| 46 | Meta-cognitive strategies | 0.60 | Above hinge | AI-AUGMENTED | Partial conflict |
| 57 | Mastery learning | 0.57 | Above hinge | AI-AUGMENTED | Partial conflict |
| 89 | Intelligent tutoring systems | 0.48 | Above hinge | AI-NATIVE | Partial conflict |
| 97 | Writing programs | 0.45 | Above hinge | AI-AUGMENTED | Partial conflict |
| 114 | Technology in writing | 0.42 | Above hinge | AI-NATIVE | Conflict present |
| 159 | Homework | 0.29 | Below hinge | AI-RESISTANT | Conflict present |

### Classification Group Structure

The 252 influences produced 78 categorical profile groups. The five largest groups account for 101 influences (40.1% of the total):

**Table 9. Five Largest Classification Groups**

| Group | n | Avg d | Profile |
|---|---|---|---|
| C01 | 38 | 0.27 | Below hinge / AI-adjacent / Low human irreducibility / Low substitution risk / No conflict / Low vendor |
| C02 | 22 | 0.08 | Negligible / AI-adjacent / Low human irreducibility / Low substitution risk / No conflict / Low vendor |
| C03 | 21 | 0.50 | Above hinge / AI-augmented / Medium human irreducibility / Low substitution risk / No conflict / Low vendor |
| C04 | 11 | 0.50 | Above hinge / AI-augmented / Medium human irreducibility / Low substitution risk / Partial conflict / Low vendor |
| C05 | 9 | 0.25 | Below hinge / AI-native / Low human irreducibility / High substitution risk / No conflict / Low vendor |

C01 (n=38) and C02 (n=22) together account for 60 influences — 23.8% of the total — that are below the hinge point, AI-adjacent, and carry low vendor activity. These are interventions where AI plays no meaningful role in the core mechanism and commercial interest is minimal. Their presence in the dataset is important as a baseline: most of the Hattie taxonomy is neither an AI opportunity nor an AI threat.

C03 (n=21) and C04 (n=11) are the most educationally significant groups: above-hinge, AI-AUGMENTED, with low substitution risk. These 32 influences represent the legitimate AI augmentation opportunity — where AI can support delivery without degrading the mechanism, provided implementation preserves student cognitive engagement. C04's partial conflict flag signals that design choices matter: AI implementations in this group can either scaffold or hollow out, depending on whether the student's cognitive work is preserved.

C05 (n=9) is the pre-AI technology profile. Average effect size of d=0.25, below hinge, AI-NATIVE technically, but with High substitution risk — the AI version can deliver these interventions procedurally while removing implementation conditions that the original studies required.

---

## Discussion

### AI's Strongest Case Is Augmentation

The data support a clear hierarchy of AI feasibility. AI-NATIVE classification does not mean high-effect; of the 29 AI-NATIVE influences, most fall below the hinge point or in the negligible range. The genuinely high-effect AI-NATIVE cases — Mnemonics (d=0.76), Repeated reading programs (d=0.75), Rehearsal and memorization (d=0.73) — work because their mechanisms are procedural: practice, repetition, encoding. AI can implement these mechanisms reliably, at scale, with low substitution risk. They are legitimate AI targets.

The more important finding is in the AI-AUGMENTED category. Of 88 AI-AUGMENTED influences, 81 fall at or above the hinge point. The AI-AUGMENTED profile describes the largest legitimate AI opportunity in education: interventions where AI can increase the frequency, personalization, or accessibility of a high-effect practice without displacing the human or cognitive mechanism that generated the effect. Feedback, scaffolding, metacognitive strategy prompting, mastery gating, and practice testing all belong to this category — on the condition that implementation preserves the mechanism.

The condition matters. AI-AUGMENTED is not a guarantee; it is a feasibility assessment. An AI system can implement feedback in ways that preserve the mechanism — providing specific, timely information about the gap between student performance and target, with a flag to the teacher when error patterns suggest conceptual misconceptions — or it can implement feedback in ways that hollow it out, providing completion signals that students game, generic praise that carries no information, or hint-on-demand systems that transfer the cognitive work from the student to the machine. The feasibility assessment says the former is possible. The mechanism analysis says the latter is the failure mode to monitor.

### Effect Sizes Do Not Transfer by Label

The central methodological claim of this paper deserves a concrete illustration. Consider Feedback (rank 32, d=0.70). Hattie and Timperley's synthesis of feedback research [VERIFY] identifies at least four levels of feedback that have distinct mechanisms and distinct effect sizes: feedback about the task, feedback about the process, feedback about self-regulation, and feedback about the self. Task-level feedback — "your answer is wrong; the correct method is X" — is the most amenable to AI delivery. Self-regulation feedback — "you tend to abandon retrieval attempts before consolidation; here is a strategy to extend your practice" — requires knowledge of the student across time and contexts that current AI systems approximate poorly. Personal feedback — relationship-contingent encouragement — requires the human relationship that constitutes it.

The d=0.70 aggregate does not distinguish between these. An AI system that delivers task-level feedback efficiently is not implementing the d=0.70 intervention; it is implementing one component of a heterogeneous category that averaged d=0.70 across all components. The vendor claiming d=0.70 for a task-level feedback system is not lying about the number — they are lying about what the number covers.

This logic applies across the high-vendor-activity influences. Mastery learning (d=0.57) requires a teacher to validate that mastery is genuine transfer, not procedural recall; to diagnose why a student is stuck; and to make a pedagogically informed decision about when the student is ready to advance. Software-defined mastery gates that assess procedural retrieval and advance students automatically are not implementing mastery learning in the sense that produced d=0.57. Metacognitive strategies (d=0.60) require systematic fading of the scaffolding as the student internalizes the regulatory capacity; an AI system that perpetually prompts metacognitive reflection creates a dependency that defeats the mechanism. In each case, the label is the same. The mechanism is not.

### The Teacher Is Often the Mechanism

The highest AI-RESISTANT influences at or above the hinge point make the starkest version of the argument. Collective teacher efficacy (d=1.57) is the highest-effect influence in the entire Hattie synthesis and is definitionally AI-resistant: it describes the shared belief among a teaching team that their collective action can improve student outcomes. Bandura's four efficacy sources — mastery experiences, vicarious modeling, social persuasion, and emotional states — all require physical collaboration and shared professional identity [VERIFY: Bandura, Social Foundations of Thought and Action]. No AI dashboard can create this. AI can provide the data that a high-efficacy team discusses; it cannot provide the team, the trust, or the shared history of professional success that produces the efficacy.

Teacher credibility (d=0.90) presents the same structure at the classroom level. Student perception of teacher competence, trustworthiness, and goodwill is strictly interpersonal; it is produced by interaction over time, through a specific relationship between a specific teacher and specific students. An AI tutor that is fluent, accurate, and responsive is not teacher-credible in the research sense — it is executing a different mechanism that has not been validated at d=0.90 [VERIFY: Hattie credibility construct]. Classroom discussion (d=0.82) requires socio-cognitive friction between actual peers: the mechanism is not information exchange but the cognitive disruption produced by encountering another person's reasoning about shared content. An AI interlocutor can approximate this surface structure, but the AI's position in the social context of the classroom — not a peer, not a teacher, not a co-learner — removes the mechanism.

Teacher-student relationships (d=0.52), positive peer influences (d=0.53), peer tutoring (d=0.53), and cooperative learning (d=0.40) complete the pattern: a substantial profile of above-hinge influences where the human relationship is not incidental to the mechanism but constitutive of it.

The policy implication is direct: investment in teacher training, teacher collaboration structures, and teacher-student relationship conditions is investment in the category of influences most likely to survive AI mediation intact, because they are the influences AI cannot mediate. AI can free teacher time — by automating grading, logistics, and low-level feedback — to invest in the relational and professional work that produces the largest effects. This is the AI+1 argument in its most defensible form.

### Mechanism Conflict Is the Central AI Risk

The most dangerous category in this framework is not AI-RESISTANT — those influences are clearly outside the AI implementation space. The most dangerous category is AI-AUGMENTED with mechanism conflict, because it describes interventions where AI can produce measurable performance gains while removing the cognitive work that constitutes learning.

Summarization (rank 18, d=0.79) is the clearest example. AI can summarize fluently. The Hattie effect size for summarization was produced by students summarizing — selecting, condensing, and reconstructing information in their own words. These are cognitive operations. When an AI summarizes for a student, the performance outcome (a good summary exists) is achieved while the learning mechanism (the student performed the cognitive operations) is removed. An AI-generated summary can look like learning while being its opposite.

The same conflict structure applies to Note taking (d=0.50, AI-AUGMENTED, Conflict present), Technology in writing (d=0.42, AI-NATIVE, Conflict present), and — in partial form — to Metacognitive strategies (d=0.60, Partial conflict), Planning and prediction (d=0.76, Partial conflict), and Self-reported grades (d=1.33, Partial conflict). In each case, the student activity that produces the effect can be replaced by AI output that achieves the surface form without the generative process.

This is where the replication crisis analogy is most apt. Just as researcher degrees of freedom can produce statistically significant findings that do not replicate, AI implementation degrees of freedom can produce performance gains that do not reflect learning. A student who has been AI-summarizing all semester may perform well on tasks that require recognizing summaries but poorly on tasks that require constructing one. The performance metric and the learning metric diverge. The AI implementation optimizes the former while degrading the latter.

Implementation design is the mechanism that prevents this failure. An AI system that prompts a student to summarize, evaluates the student's summary, identifies the gap, and provides corrective feedback — while the student does the summarizing — preserves the mechanism. An AI system that offers to "help" by generating the summary is delivering a different product with a different effect on a different outcome. Both exist in the market. The classification framework distinguishes them; the intervention label does not.

### The Legitimate AI Case: Realistic Baseline

Not all of the AI case rests on high-fidelity mechanism preservation. Some of it rests on an honest comparison to the realistic alternative.

In a class of 28 students, a teacher has approximately 4 minutes of individual contact time per student per class period. At this student-to-teacher ratio, the feedback mechanism for most students is not a human teacher providing timely, specific, corrective information about the gap between their performance and the target. The feedback mechanism is a grade returned two days after submission, or no feedback at all. Against that baseline, an AI system that provides task-level corrective feedback within seconds of a student submitting work is a genuine improvement — not because AI feedback is as good as optimal human feedback, but because the realistic alternative is no feedback.

This argument — AI vs. realistic baseline rather than AI vs. ideal implementation — is the honest version of the EdTech value proposition, and the data support it for a specific subset of influences. The nine below-hinge AI-NATIVE influences in C05 (average d=0.25) represent procedural interventions — technology-assisted practice, retrieval, and repetition — where the AI implementation may produce effects at or above the historical average, not because the mechanism is preserved at full fidelity, but because the AI makes the intervention available at a frequency and personalization level that the realistic classroom does not.

The distinction between "AI vs. ideal human" and "AI vs. realistic alternative" must be made explicit in vendor claims and policy discussions. Conflating them produces either unwarranted pessimism (AI can't match optimal human implementation) or unwarranted optimism (AI will produce the effect size from the controlled study). The honest claim is narrower: AI can produce some fraction of the effect, in contexts where the alternative is nothing, at a cost and scale that human implementation cannot match.

### Vendor Claims Require Mechanism Audits

The Goldacre structure for evaluating a vendor claim [VERIFY: Goldacre, B. (2012). Bad Pharma] asks five questions:
1. What is the claim?
2. What was measured?
3. What is the mechanism?
4. What changed under the specific implementation?
5. What conditions must hold for the effect to survive?

Applying this structure to the twelve high-vendor-activity influences in this dataset produces a consistent finding: the claim typically cites a meta-analytic effect size for a broad category; the measurement typically assesses a surface-level outcome; the mechanism is typically not specified; the changes introduced by AI mediation are typically not discussed; and the conditions required for the effect to survive are typically assumed rather than verified.

Feedback (d=0.70) example: *Claim*: AI provides feedback at Hattie effect size. *Measured*: Completion rates, quiz scores on platform. *Mechanism*: Specific information about the gap between performance and target, enabling adjustment. *What AI changes*: Feedback becomes immediate, automated, and task-level; teacher-student relationship is removed; feedback about self-regulation is absent. *Conditions required*: Feedback must be specific to the gap, must arrive within a timeframe enabling adjustment, must not be gameable, must address the actual cognitive error. These conditions can be met by AI — but their presence in a specific product requires verification, not assumption.

Intelligent tutoring systems (d=0.48) example: *Claim*: AI tutors inherit the ITS effect size. *Measured*: End-of-module assessments. *Mechanism*: Curriculum-aligned learner modeling, step-level feedback, individualized problem sequencing. *What AI changes*: Modern LLM-based tutors are not curriculum-constrained, may not maintain persistent learner models, provide natural language explanations that students may not engage with cognitively. *Conditions required*: Curriculum constraint, learner modeling, step-level feedback, teacher oversight for stuck students, enforcement preventing student disengagement. The pre-LLM ITS research was conducted under conditions that most LLM-based tutoring products do not replicate. [VERIFY: Kulik & Fletcher, 2016, Effectiveness of Intelligent Tutoring Systems]

---

## Priority Ten: Mechanism Analysis

**Table 10. Priority Ten Influences: Classification Summary**

| Rank | Influence | d | Band | Feasibility | Human Irreducibility | Substitution Risk | Mechanism Conflict | Vendor Activity |
|---|---|---|---|---|---|---|---|---|
| 1 | Collective teacher efficacy | 1.57 | High | AI-RESISTANT | High | High | No conflict | Low |
| 12 | Teacher credibility | 0.90 | High | AI-RESISTANT | High | High | Conflict present | Low |
| 15 | Classroom discussion | 0.82 | High | AI-AUGMENTED | High | High | Conflict present | Moderate |
| 32 | Feedback | 0.70 | High | AI-AUGMENTED | Medium | High | Partial conflict | High |
| 46 | Meta-cognitive strategies | 0.60 | Above hinge | AI-AUGMENTED | Medium | Low | Partial conflict | High |
| 57 | Mastery learning | 0.57 | Above hinge | AI-AUGMENTED | Medium | High | Partial conflict | High |
| 75 | Teacher-student relationships | 0.52 | Above hinge | AI-RESISTANT | High | High | Conflict present | Moderate |
| 89 | Intelligent tutoring systems | 0.48 | Above hinge | AI-NATIVE | Low | High | Partial conflict | High |
| 93 | ICT | 0.47 | Above hinge | AI-ADJACENT | Low | High | No conflict | Low |
| 129 | Mobile phones | 0.37 | Below hinge | AI-ADJACENT | Low | High | No conflict | Low |

**Collective teacher efficacy (d=1.57)**
*Original mechanism*: Shared professional belief among a teaching team that their collective action can produce student outcomes; sustained through Bandura's four efficacy channels (mastery experiences, vicarious modeling, social persuasion, physiological states). *What AI changes*: AI can provide performance data for team review; it cannot provide the social fabric of professional collaboration, shared history of success, or co-constructed professional identity that constitutes efficacy. *What breaks under AI substitution*: The mechanism itself — there is no collective efficacy without a collective. *Teacher role in AI+1 version*: Central and irreplaceable; AI supplies evidence that the team discusses. *Empirical claim requiring verification*: Whether AI-facilitated data dashboards increase or decrease the frequency of high-efficacy teacher team meetings and conversations [VERIFY].

**Teacher credibility (d=0.90)**
*Original mechanism*: Student perception of teacher competence, trustworthiness, and goodwill — formed through repeated interpersonal interaction. *What AI changes*: AI fluency is not teacher credibility; an AI that is accurate and responsive has not established the relational history that constitutes credibility. *What breaks*: The student-teacher trust relationship that is the mechanism. *Teacher role*: The intervention cannot be AI-mediated; teacher presence is the intervention. *Empirical claim*: Whether AI-mediated interactions affect student ratings of human teacher credibility when both are present [VERIFY].

**Classroom discussion (d=0.82)**
*Original mechanism*: Socio-cognitive friction between peers reasoning about shared content; the productive cognitive disruption of encountering another person's genuine argument. *What AI changes*: AI removes the social and emotional stakes of peer reasoning; an AI interlocutor's agreement or disagreement does not carry the relational weight of a peer's. *What breaks*: The social context and co-learner relationship that gives the friction its effect. *Teacher role*: Facilitating, challenging, and structuring genuine peer reasoning exchanges; AI can map participation patterns and flag students who are not engaging. *Empirical claim*: Whether AI-facilitated discussion preparation increases the quality of subsequent human discussion sessions [VERIFY].

**Feedback (d=0.70)**
*Original mechanism*: Specific information about the gap between current performance and the target, within a timeframe enabling adjustment. *What AI changes*: AI can deliver task-level corrective feedback at high frequency; it cannot assess self-regulation or self-concept feedback dimensions without persistent modeling. *What breaks*: The mechanism is intact for task-level feedback; partial conflict arises because hint-on-demand and immediate reveal systems enable gaming that transfers cognitive work from student to system. *Teacher role*: Reviews error patterns flagged by AI; intervenes with students whose misconceptions require direct instruction; provides the process- and self-regulation-level feedback AI cannot. *Empirical claim*: Whether AI task-level feedback produces learning transfer comparable to human feedback when measured on novel tasks rather than platform-matched assessments [VERIFY].

**Meta-cognitive strategies (d=0.60)**
*Original mechanism*: Student internalization of planning, monitoring, and evaluation strategies that can be applied independently across contexts. The endpoint is independence, not scaffolded performance. *What AI changes*: AI can prompt metacognitive behaviors effectively, but perpetual AI prompting creates external regulation dependency — the student performs metacognitive behaviors when prompted but does not develop autonomous metacognitive capacity. *What breaks*: The development of independent metacognitive capacity, which is the mechanism. *Teacher role*: Designing systematic fading of AI scaffolding as student internalization is demonstrated; assessing transfer to non-AI contexts. *Empirical claim*: Whether systematic fading of AI metacognitive prompts produces comparable long-term gains to human-faded metacognitive instruction [VERIFY].

**Mastery learning (d=0.57)**
*Original mechanism*: Students advance only upon demonstrating genuine mastery; teacher verification of transfer and depth; diagnosis of why students are stuck; human decision-making about readiness. *What AI changes*: Software-defined mastery gates typically assess procedural retrieval within a constrained domain; they do not assess conceptual transfer, cannot diagnose the pedagogical cause of stuckness, and cannot make the relational judgment about when a student needs encouragement versus challenge. *What breaks*: The teacher decision-making layer that distinguishes procedural performance from genuine mastery. *Teacher role*: Validates AI-gated mastery decisions against transfer evidence; intervenes when students are stuck in ways the AI cannot diagnose; makes final readiness decisions. *Empirical claim*: Whether AI mastery-gated platforms produce learning outcomes comparable to human-verified mastery learning when assessed on transfer tasks [VERIFY].

**Teacher-student relationships (d=0.52)**
*Original mechanism*: Empathetic, trusting, and consistent interpersonal connection between a teacher who knows a specific student and that student. *What AI changes*: AI can free teacher time by automating grading and logistics; it cannot be the relationship. *What breaks*: The mechanism — there is no teacher-student relationship without the teacher. *Teacher role*: The intervention. AI's contribution is enabling teachers to invest more time in the relational work. *Empirical claim*: Whether AI-automated administrative tasks increase teacher time spent in relationship-building interactions with students [VERIFY].

**Intelligent tutoring systems (d=0.48)**
*Original mechanism*: Curriculum-constrained learner modeling, step-level feedback, individualized problem sequencing, and teacher oversight for escalated problems. *What AI changes*: Modern LLM-based tutors are not curriculum-constrained; many lack persistent learner models; step-level feedback in natural language may not engage students cognitively; enforcement against disengagement requires human presence. *What breaks*: The curriculum constraint and learner modeling that the ITS literature validated; real-world compliance collapses without teacher oversight. *Teacher role*: Enforces engagement; handles escalated cases; validates that AI-reported mastery reflects genuine understanding. *Empirical claim*: Whether LLM-based tutoring produces the ITS effect size (d≈0.48) in curriculum-aligned implementations with teacher oversight, compared to unconstrained chat implementations [VERIFY].

**ICT (d=0.47)**
*Original mechanism*: Broad pre-LLM technology-in-education aggregate; encompasses computer-assisted instruction, interactive multimedia, and early internet applications primarily from the 1990s and 2000s. *What AI changes*: This category should not be used as evidence for any current AI product. The implementation conditions that produced d=0.47 do not describe generative AI. *What breaks*: The temporal validity of the inference. *Teacher role*: Not relevant to modern AI claims; this entry requires a fresh meta-analysis of LLM-era implementations. *Empirical claim*: Vendors citing this effect size for AI products are making a category error that requires explicit correction in any evidence review [VERIFY: Cheung & Slavin, 2013, for a validity critique of technology effect size aggregation].

**Mobile phones (d=0.37)**
*Original mechanism*: Mobile learning applications used as educational tools. Effect size below hinge; physical phone presence introduces cognitive load and off-task multitasking. *What AI changes*: AI learning apps on personal phones introduce the same multitasking risks as all phone-based learning, and add the additional mechanism conflict of AI-generated outputs potentially replacing student cognitive work. *What breaks*: The intervention is already below hinge; AI mediation is more likely to introduce mechanism conflicts than to improve it. *Teacher role*: Human authority is required to enforce phone bans or constrained-use policies; AI cannot enforce its own use restrictions. *Empirical claim*: Whether AI-powered phone-based learning apps produce above-hinge effects when controlling for off-task multitasking and device-use enforcement [VERIFY].

---

## Limitations

This study has six principal limitations:

**1. Single-analyst classification without inter-rater reliability.** All 252 classifications were produced by a single analytical process. No second coder independently classified a sample of influences, and no inter-rater reliability coefficient is available. Different analysts applying the same framework may reach different conclusions on ambiguous cases. This limitation is most consequential for influences where the mechanistic literature is sparse or contested. All findings should be treated as structured hypotheses rather than established classifications.

**2. Hattie effect-size limitations and aggregation critique.** The Hattie synthesis has been subject to methodological critique on multiple grounds, including double-counting of studies across categories, inconsistent effect size calculation methods across included meta-analyses, and the heterogeneity of studies aggregated under single labels [VERIFY: Simpson, 2017; Bergeron & Rivard, 2017]. These critiques do not invalidate the synthesis as a reference point for mechanism analysis, but they do limit the precision of any interpretation based on specific effect sizes.

**3. No empirical AI-mediated outcome data.** This is a framework paper. No classroom data comparing AI-mediated implementations to human-mediated implementations were collected. The AI feasibility classifications and mechanism conflict assessments are analytical predictions, not empirical findings. Empirical validation — comparing AI-mediated implementations of high-priority influences to realistic classroom baselines and to human-implemented controls — is the necessary next step.

**4. Vendor activity not a systematic market audit.** Vendor activity ratings reflect general market awareness rather than a systematic corpus of documented product claims. A rigorous vendor-claim analysis would require building and coding a corpus of specific claims from specific products and verifying them against the mechanistic literature. That analysis is not performed here.

**5. Hypothetical AI effect estimates are analytical placeholders.** The hypothetical AI effect estimates in the supplementary dataset (Appendix Table A1) are analyst-generated predictions based on mechanism analysis. They are not empirically derived, not validated, and not claims about any specific product. They represent the direction and rough magnitude of effect size change that mechanism analysis predicts under AI mediation. They must not be cited as empirical findings.

**6. Categorical profile groups are descriptive, not causal classes.** The 78 categorical profile groups are collections of influences sharing identical classification signatures across the six dimensions. They are not derived from a statistical clustering algorithm and do not imply causal similarity beyond their shared classification profile. Their primary value is descriptive: they reveal the distribution of the dataset across the classification space and identify the influences that share the most relevant characteristics for AI implementation analysis.

---

## Future Work

Six research directions follow directly from this framework:

**1. Double-coded classification with inter-rater reliability.** A second analyst should independently code a stratified sample of 30–40 influences (stratified by effect-size band and AI feasibility category), producing a Cohen's kappa or Krippendorff's alpha estimate. This would convert the current framework from expert hypothesis to validated taxonomy.

**2. Systematic vendor-claim corpus.** Building a corpus of specific, documented vendor claims linked to specific Hattie effect sizes, with mechanism audits applied to each, would produce the evidence base for the policy argument this paper makes analytically. The Goldacre structure applied in the Discussion to Feedback and ITS should be applied systematically to the 12 high-vendor-activity influences.

**3. Case studies for priority ten influences.** Selecting one or two current AI products for each of the ten priority influences, and applying the mechanism-preservation audit framework, would produce a set of concrete, publishable evaluations. These are the most tractable empirical studies that follow from this framework.

**4. Empirical studies comparing AI-mediated to realistic classroom baseline.** The AI+1 prediction is falsifiable: AI implementations of AI-AUGMENTED high-effect influences that preserve the mechanism will produce above-hinge effects; implementations that substitute for the mechanism will not. Testing this requires experimental or quasi-experimental studies comparing AI-mediated implementations (with varying degrees of mechanism preservation) to realistic classroom baselines, assessed on transfer tasks rather than platform-matched assessments.

**5. Mechanism-preservation rubric development.** A validated rubric for assessing whether a specific AI product implementation preserves the mechanism of a target influence would make this framework actionable for practitioners, purchasing committees, and policy makers. The rubric dimensions would follow from the classification framework: does the implementation preserve human irreducibility where required? Does it prevent mechanism conflict? Does it maintain the implementation conditions under which the original effect was produced?

**6. Temporal validity re-analysis.** A focused analysis of all Hattie technology-related categories — ICT, various technology-by-subject categories, web-based learning, intelligent tutoring systems — updating the mechanism documentation with post-2015 LLM-era literature, would produce a more defensible evidence base for AI-specific claims than the current pre-LLM aggregates allow.

---

## Conclusion

The 252 influences in the Hattie Visible Learning synthesis do not support a general claim that AI improves education. They support a mechanism-specific view: AI is most defensible when it augments high-effect interventions without replacing the human, relational, or cognitive condition that produced the original effect. AI is least defensible when it substitutes for the human mechanism, turns student cognitive work into machine output, or imports effect sizes from pre-AI interventions into product claims without preserving implementation conditions.

Of 122 influences at or above Hattie's 0.40 hinge point, 18 are AI-RESISTANT — including three of the five highest-effect influences in the entire synthesis. Eighty-one are AI-AUGMENTED, representing the largest legitimate AI opportunity in education: interventions where AI can increase the accessibility, frequency, or personalization of high-effect practice without displacing the mechanism. But 59 of those 122 influences carry partial or full mechanism conflict, meaning that implementation design — not the technology — is the variable that determines whether the effect survives.

The question is not whether AI helps. The question is what human, relational, and cognitive conditions the original intervention required, and whether the AI version preserves them. A framework that cannot ask that question is not an evidence base — it is a marketing tool.

---

## Tables

*See Tables 1–9 in text.*

**Appendix Table A1: Analyst-Generated Hypothetical AI Effect Estimates**

*Note: These are analytical hypotheses, not empirical findings. They represent predicted direction and approximate magnitude of effect size change under AI mediation based on mechanism analysis. They have not been validated empirically and must not be cited as predictions about specific products.*

*Full hypothetical effect appendix available in supplementary materials: `data/hattie-ai-hypothetical-effects-appendix.csv`.*

---

## Figure Concepts

**Figure 1. AI Feasibility Distribution**
Bar chart: four bars (AI-ADJACENT n=97, AI-AUGMENTED n=88, AI-RESISTANT n=38, AI-NATIVE n=29), ordered by count. Secondary annotation showing the proportion of each category falling at or above the hinge point.

**Figure 2. Effect-Size Band × AI Feasibility Matrix**
Heatmap with effect-size band on the y-axis (High, Above hinge, Below hinge, Negligible, Harmful) and AI feasibility on the x-axis. Cell values = count of influences. Generate from `data/hattie-ai-band-by-feasibility.csv`. [TODO: render figure and check whether an annotation layer for mechanism conflict is legible.]

**Figure 3. Mechanism Conflict by Effect-Size Band**
Stacked bar chart: for each effect-size band, three stacks (Conflict present, Partial conflict, No conflict) showing proportion of influences in each conflict category. Generate from `data/hattie-ai-band-by-mechanism-conflict.csv`. [TODO: decide whether to show all influences or filter to AI-AUGMENTED influences only.]

**Figure 4. Categorical Profile Map**
Bubble chart or tile layout of the 78 classification groups, with bubble size proportional to group count, x-axis = average effect size, y-axis = AI feasibility category, color = mechanism conflict status. Annotates the five largest groups.

**Figure 5. AI+1 Mechanism-Preservation Diagram**
Conceptual diagram: two columns (Human implementation / AI+1 implementation), five rows (Collective teacher efficacy, Teacher credibility, Classroom discussion, Feedback, Mastery learning), showing which mechanism components transfer to AI mediation and which require the teacher to remain in the loop. Color coding: green = AI can deliver, amber = design-dependent, red = human required.

---

## References to Verify

- Hattie, J. (2009). *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement*. Routledge.
- Hattie, J. (2012). *Visible Learning for Teachers*. Routledge.
- Hattie, J. (2018). Updated Visible Learning influence rankings. [Verify current publication form]
- Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77(1), 81–112.
- Bandura, A. (1986). *Social Foundations of Thought and Action*. Prentice Hall.
- Bloom, B.S. (1984). The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. *Educational Researcher*, 13(6), 4–16.
- Goldacre, B. (2012). *Bad Pharma*. Fourth Estate. [For Goldacre audit structure]
- Kulik, J.A., & Fletcher, J.D. (2016). Effectiveness of intelligent tutoring systems: A meta-analytic review. *Review of Educational Research*, 86(1), 42–78.
- Cheung, A.C.K., & Slavin, R.E. (2013). The effectiveness of educational technology applications for enhancing mathematics achievement in K-12 classrooms. *Educational Research Review*, 9, 88–113.
- Simpson, A. (2017). The misdirection of public policy: Comparing and combining standardized effect sizes. *Journal of Education Policy*, 32(4), 450–466.
- Bergeron, P.-J., & Rivard, L. (2017). How to engage in pseudoscience with real data: A criticism of John Hattie's arguments in Visible Learning from the perspective of a statistician. *McGill Journal of Education*, 52(1), 237–246.
- Seidel, T., & Shavelson, R.J. (2007). Teaching effectiveness research in the past decade: The role of theory and research design in disentangling meta-analysis results. *Review of Educational Research*, 77(4), 454–499.
