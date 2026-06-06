# Hattie × AI — Research Prompt
## Which interventions can AI do, can't do, and how exactly would they work?

---

## PURPOSE

This prompt produces a research analysis of all 252 Hattie influences through a single lens: what happens to each intervention when AI enters the classroom? The output is a structured dataset and accompanying analysis that becomes the research backbone for The Learning Engineer's Evidence Clinic series and the AI+1 framework.

The central question is not "can AI help with education?" That question is too broad to be useful. The questions are:

- Which high-effect interventions does AI genuinely enable, augment, or make more accessible?
- Which high-effect interventions does AI actively undermine or hollow out?
- Which low-effect interventions does AI make cheaper to deploy — and does cheaper deployment change anything about their effect?
- Which interventions require a human so specifically that no AI implementation is coherent?
- For interventions AI can do: what exactly does the implementation look like, and what conditions must hold for the effect size to survive?

---

## THE DATA

The full Hattie 2018 rankings live in `hattie-2018-effect-sizes.csv`:

```
rank, influence, effect_size_d_dec_2017
1, Collective teacher efficacy, 1.57
2, Self-reported grades, 1.33
3, Teacher estimates of achievement, 1.29
...
252, ADHD, -0.90
```

Hinge point: 0.40 is Hattie's threshold for meaningful effect above average schooling. Interventions below 0.40 add less value than a year of regular school. Negative values actively harm achievement.

---

## THE CLASSIFICATION TASK

For each of the 252 influences, produce a classification across five dimensions:

### DIMENSION 1 — AI FEASIBILITY
Classify each intervention as one of four categories:

**AI-NATIVE** — AI can deliver this intervention as well as or better than current practice, at scale, without requiring teacher mediation for the core mechanism.

**AI-AUGMENTED** — AI can meaningfully support this intervention but the human layer remains essential. The teacher or student does the irreducible work; AI handles logistics, feedback loops, data, or scaffolding.

**AI-ADJACENT** — AI touches this intervention at the margins — tracking, reporting, scheduling — but has no meaningful effect on the core mechanism.

**AI-RESISTANT** — The intervention requires human presence, relationship, judgment, or embodied context that AI cannot supply. AI implementation would degrade or nullify the effect.

### DIMENSION 2 — EFFECT SIZE BAND
Assign each influence to a band:
- **High** (d ≥ 0.70): Strong evidence, worth significant investment
- **Above hinge** (0.40–0.69): Above average schooling effects
- **Below hinge** (0.15–0.39): Below average schooling effects — vendor territory
- **Negligible** (0.01–0.14): Statistically present, practically irrelevant
- **Harmful** (< 0): Active harm to achievement

### DIMENSION 3 — CURRENT VENDOR ACTIVITY
Flag whether this intervention is currently being marketed by EdTech vendors:
- **High vendor activity**: Multiple products making claims in this space
- **Moderate vendor activity**: Some products, some claims
- **Low vendor activity**: Little commercial interest
- **No vendor activity**: Not commercialized

### DIMENSION 4 — HUMAN IRREDUCIBILITY
Rate the human irreducibility of the core mechanism on a 3-point scale:
- **High**: The intervention requires a specific human — a teacher who knows this student, a peer relationship, a trusted adult — and no proxy works
- **Medium**: The human layer matters but the specific human is less critical; a trained adult or structured peer interaction can deliver it
- **Low**: The mechanism is procedural enough that a well-designed system can deliver it without a specific human relationship

### DIMENSION 6 — SUBSTITUTION RISK
Rate whether AI implementation removes the human condition that generated the effect:
- **High substitution risk**: The AI version structurally eliminates the human element that the research shows was causally necessary. Effect size is unlikely to survive.
- **Medium substitution risk**: The AI version reduces human involvement; effect size may degrade but not disappear. Requires monitoring.
- **Low substitution risk**: Human involvement was procedural rather than causal; AI substitution is unlikely to affect the mechanism.

### DIMENSION 7 — MECHANISM CONFLICT
Flag whether AI implementation prevents the student from performing the cognitive work that generates the effect:
- **Conflict present**: AI doing this FOR the student removes the practice that builds the capacity. Examples: metacognitive monitoring, self-regulation, retrieval practice with immediate answer-reveal.
- **No conflict**: AI delivery does not prevent student cognitive engagement.
- **Partial conflict**: AI can deliver the intervention but specific design choices determine whether conflict occurs. Flag the design conditions.

### DIMENSION 5 — AI IMPLEMENTATION SPECIFICITY
For AI-NATIVE and AI-AUGMENTED interventions only: describe in 2–4 sentences exactly what the AI implementation looks like. Be specific. Not "AI can provide feedback" but "AI delivers corrective feedback within 30 seconds of a student completing a retrieval practice item, using the student's prior error pattern to calibrate the specificity of the correction, with a flag to the teacher when the error pattern suggests a misconception requiring direct instruction."

For AI-RESISTANT interventions: describe in 1–2 sentences what specifically breaks when AI replaces the human.

---

## RESEARCH QUESTIONS TO ANSWER FOR EACH HIGH-EFFECT INTERVENTION (d ≥ 0.40)

For every influence above the hinge point, the analysis should address:

1. **What was the original mechanism?** What did the researchers actually observe happening when this intervention worked? Not the label — the mechanism.

2. **What does AI change about the mechanism?** Does AI make the mechanism more accessible, more frequent, more personalized — or does it change the mechanism so fundamentally that the effect size no longer applies?

3. **What conditions made the original effect size hold?** Implementation fidelity, teacher training, student population, instructional context. Which of these conditions survive an AI implementation?

4. **What is the realistic effect size for an AI implementation?** Not the Hattie number — an honest estimate of what happens to the effect when the mechanism is AI-mediated. Flag this as a hypothesis requiring empirical testing.

5. **What is the teacher's role in an AI-augmented version?** Specifically. Not "the teacher remains important" but "the teacher reviews the AI's error pattern flags each morning and intervenes with the three students whose misconceptions require direct instruction before the next practice session."

---

## PRIORITY ANALYSIS — DO THESE FIRST

These ten interventions are the highest priority because they sit at the intersection of high effect size, active vendor claims, and contested AI feasibility:

| Rank | Influence | Effect Size | Why It's Priority |
|------|-----------|-------------|-------------------|
| 32 | Feedback | 0.70 | Most-cited intervention in EdTech marketing; "feedback" aggregates 50+ different mechanisms |
| 89 | Intelligent tutoring systems | 0.48 | Vendors claim AI tutors inherit this effect size; the original ITS research predates modern LLMs |
| 93 | Information communications technology (ICT) | 0.47 | The original "technology in education" bucket; vendors use this to justify everything |
| 57 | Mastery learning | 0.57 | Adaptive learning platforms claim this; the original mechanism requires human decision-making about readiness |
| 15 | Classroom discussion | 0.82 | AI cannot replicate this; worth understanding why |
| 1 | Collective teacher efficacy | 1.57 | The highest effect size; definitionally AI-resistant; almost never mentioned by vendors |
| 12 | Teacher credibility | 0.90 | Requires a relationship; worth defining exactly what credibility means and why AI can't supply it |
| 75 | Teacher-student relationships | 0.52 | Vendors imply AI tutors can build this; the research says otherwise |
| 46 | Meta-cognitive strategies | 0.60 | AI can scaffold some of this; worth specifying exactly which parts |
| 129 | Mobile phones | 0.37 | The phone ban debate in one data point; below hinge, vendor-adjacent, contested |

---

## THE FOUR RESEARCH LENSES

Apply all four to every high-priority intervention:

### LENS 1 — THE MECHANISM LENS
What is the actual causal mechanism? Strip the label. "Feedback" is not a mechanism — "a student receives specific information about the gap between their current performance and the target, within a timeframe that allows them to adjust their next attempt" is a mechanism. AI feasibility depends entirely on the mechanism, not the label.

### LENS 2 — THE IMPLEMENTATION LENS
What does it take to implement this well? What training, what conditions, what monitoring? AI implementations almost always underestimate implementation requirements. The effect size in the meta-analysis came from a controlled study with trained implementers. What happens to the effect size when implementation is delegated to a platform?

### LENS 3 — THE RELATIONSHIP LENS
Does this intervention work because of what is done, or because of who does it? Collective teacher efficacy, teacher credibility, teacher-student relationships — these are not interventions that a well-designed system can replicate. The effect is inseparable from the human. Name this clearly.

### LENS 4 — THE VENDOR LENS
Is this intervention currently being marketed? What exactly is the claim? How far is the claim from the mechanism? Use the Goldacre structure: here is the claim, here is what was measured, here is the gap.

---

## OUTPUT FORMAT

### Part 1 — Full Classification Table
A table with all 252 influences classified across the five dimensions. This becomes a research asset for every Evidence Clinic piece.

Columns:
```
rank | influence | effect_size | band | ai_feasibility | human_irreducibility | substitution_risk | mechanism_conflict | vendor_activity | notes
```

### Part 2 — Deep Analysis: Priority Ten
For each of the ten priority interventions: a 300–500 word structured analysis covering all four research lenses and all five research questions. Flag every claim requiring empirical verification with [VERIFY].

6. **What was the original dosage?** Frequency, duration, intensity, implementer training level. What does AI change about dosage — does it increase frequency, decrease intensity, remove trained implementers? Dosage changes are mechanism changes.

7. **What population did the effect size come from?** Hattie aggregates across populations. Technology with learning needs students (0.57) and technology with high school students (0.30) are the same tools, different populations. Flag any intervention where the aggregate effect size conceals population-specific variation that vendors exploit.

8. **What is the realistic competitive baseline?** Not "AI vs. ideal human implementation" but "AI vs. what actually happens in a class of 28 students with 4 minutes per student." Some AI implementations win not because they are good but because the realistic alternative is nothing. Name this honestly — it changes the policy argument.

### Part 3 — Pattern Analysis
After completing the classification, answer these four questions:

1. **Where is the AI opportunity genuinely legitimate?** Which high-effect interventions can AI actually augment without degrading the mechanism? Be specific about conditions.

2. **Where is the vendor claim most dishonest?** Which interventions are being marketed with effect sizes that don't survive the mechanism test? Rank the top five most egregious gaps.

3. **What does the classification reveal about the AI+1 argument?** Do the high-effect interventions cluster in AI-RESISTANT or AI-AUGMENTED categories? What does this say about where teacher training investment should go?

5. **Where does AI win on competitive baseline rather than absolute quality?** Which interventions does AI implement better than the realistic alternative — not better than ideal human implementation, but better than what actually happens in under-resourced classrooms? Name these honestly. They are the legitimate AI case, and they are different from the vendor case.

6. **Where is the mechanism conflict most dangerous?** Which high-effect interventions are being AI-implemented in ways that structurally prevent the student from doing the cognitive work that generates the effect? These are the interventions where AI is most likely to produce performance gains without learning gains — the central diagnostic failure the publication exists to name.

### Part 4 — The Headline Finding
One paragraph. If someone asked "what does the Hattie data say about AI in education?" — what is the honest answer, stated plainly, with the evidence named?

---

## CONSTRAINTS

- Do not fabricate citations. Flag every specific empirical claim with [VERIFY: what to verify].
- Do not use the Hattie effect size as proof that an AI implementation will work. The effect size describes what happened under specific conditions. Those conditions must be named.
- Do not treat "technology" interventions in the Hattie rankings as evidence for current AI tools. The ICT and technology entries predate large language models. Flag this gap explicitly.
- The classification is a hypothesis, not a verdict. The AI feasibility ratings are analytical judgments based on the mechanism; they should be treated as starting points for empirical investigation, not settled conclusions.
- Distinguish between "AI can do this" and "AI currently does this well." The first is a feasibility claim. The second requires evidence.
- **Fidelity decay is the default assumption.** Effect sizes from controlled studies with trained implementers degrade in real deployment. The question is not whether fidelity decay occurs but how much. Any AI implementation analysis should estimate the direction and magnitude of fidelity decay, and flag it as a hypothesis requiring empirical testing.

---

## HOW TO USE THE OUTPUT

**For Evidence Clinic pieces:** Part 1 table is the daily lookup. Pick an influence, check its AI feasibility rating, find a vendor claim in that space, apply the Goldacre structure.

**For the AI+1 framework:** Part 3 pattern analysis feeds directly into the Touch Points — especially T3 (Screen Value), T5 (Teacher is the Variable), and T10 (AI+1 is the Destination).

**For The Learning Engineer editorial calendar:** Part 2 deep analyses are rough drafts for ten individual pieces. Each 300–500 word analysis is one Evidence Clinic entry.

**For the book:** Part 4 headline finding is the chapter epigraph for any chapter making the AI+1 argument from evidence.
