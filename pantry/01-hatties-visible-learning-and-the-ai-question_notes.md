# Research Notes: Chapter 01 — Hattie's Visible Learning and the AI Question
**Source:** TIKTOC.md chapter entry (## Chapter 1, ~line 439) + data/hattie-ai-7dimensions.csv + chapters/93-hattie-ai-analysis-summary.md + paper/hattie-ai-7dimensions.md + web verification (11 searches this session)
**Notes file:** `01-hatties-visible-learning-and-the-ai-question_notes.md`
**Corresponding chapter:** `chapters/01-hatties-visible-learning-and-the-ai-question.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Purpose:** Give readers the conceptual tools they need before the group chapters begin.

**Core argument:** Hattie's Visible Learning is useful here because it shifts the AI conversation away from tool excitement and toward educational mechanisms. The question is not "Can AI do this?" The question is "What makes this influence work, and would AI strengthen or replace that mechanism?"

**Must cover:**

- What an effect size is, why d = 0.40 is treated as a practical hinge, and why it is not a magic cutoff.
- Why the list contains interventions, conditions, practices, background factors, and harmful influences, not a simple menu of things to buy.
- The four AI feasibility categories: AI-NATIVE, AI-AUGMENTED, AI-ADJACENT, AI-RESISTANT.
- Human irreducibility: relationship, judgment, social presence, embodiment, metacognition, and accountability.
- Substitution risk: when AI makes the artifact look better while reducing the learning event.
- Mechanism conflict: when the way an AI tool works conflicts with the reason an influence works.
- The phase gate: specify what AI can do, what humans must do, and what evidence proves learning happened.

**Opening case:** A school board asks whether to buy an AI tutoring platform because "feedback has a high effect size." The chapter shows why this is the wrong level of analysis: feedback matters only when it changes teacher action, learner understanding, and next-step practice.

**Chapter deliverable:** Readers complete a one-page AI adoption audit: influence, effect size, mechanism, AI role, human role, learner role, substitution risk, evidence of learning.

---
## A. Conceptual foundations

### 1. Effect size and the d = 0.40 hinge — what it is, what Hattie claims, and what it cannot bear

An effect size (Cohen's d) expresses a difference between groups, or growth over time, in standard-deviation units. Hattie's *Visible Learning* (2009) synthesized ~800 meta-analyses (~50,000 studies) into a ranked list of influences on achievement; the franchise has grown by accretion: **138 influences (2009) → 150 (2012, *Visible Learning for Teachers*) → 195 (2015) → 252 (the 2018 list this book's dataset uses) → 357 across eleven domains (*Visible Learning: The Sequel*, 2023, synthesizing 2,100+ meta-analyses)**. The d = 0.40 "hinge point" is the approximate *average* effect across all influences in the 2009 corpus; Hattie's argument was that since almost everything "works" relative to zero, educators should ask "what works *best*" and treat 0.40 — which he loosely equated with about a year's typical growth — as the bar for above-average impact.

Three honesty obligations for the chapter:
1. **0.40 is an average, not a law of nature.** If the average is ~0.40, then by construction roughly half of education falls "below the hinge." Calling everything below it "meaningless" is a reductio the chapter must refuse (this exact error is the engine of the Horvath debate in `_lib_The_Digital_Delusion_Counter.md`).
2. **Effect sizes are age- and design-sensitive.** Hattie himself acknowledged effects run larger in younger grades (he has suggested d > 0.60 expectations for early grades vs. d > 0.30 for older ones); Wiliam notes older students' scores are more spread out, mechanically shrinking d for identical learning gains. Kraft (2020, *Educational Researcher* 49(4):241–253) shows that in well-designed field RCTs with standardized achievement outcomes, **d = 0.20 is a LARGE effect** (his benchmarks: <0.05 small, 0.05–0.20 medium, ≥0.20 large) — meaning the Hattie scale and the causal-trial scale are different rulers, and a vendor quoting "0.40 = minimum meaningful" against an RCT result is committing a category error.
3. **The "year's growth" equation is contested** — it holds only loosely, for some ages, on some tests.

**Common misconception:** "d = 0.40 separates what works from what doesn't." Correction: it separates above-average from below-average *within a heterogeneous synthesis whose entries are not measured on commensurable rulers*. It is a triage signal, not a verdict.

**Worked example for the chapter:** Two interventions, both "d = 0.40." One comes from ten one-week lab studies with researcher-designed tests on 30 second-graders each; the other from three year-long district RCTs with state assessments. Slavin's critique (below) is that Hattie's averaging treats these as identical evidence. The reader should be able to articulate why the second 0.40 means far more.

**Sources:** Hattie, *Visible Learning* (2009, Routledge); Hattie, *Visible Learning: The Sequel* (2023, Routledge, ISBN 9781032462035); visible-learning.org 252-influence list; Kraft (2020) https://journals.sagepub.com/doi/10.3102/0013189X20912798 (canon — verified); Wiliam commentary via learningspy.co.uk and ollieorange2.wordpress.com.

### 2. The critiques the book must carry honestly (load-bearing for credibility)

The chapter's authority depends on conceding what is true in the critical literature *before* using the list anyway. Verified inventory:

- **Bergeron & Rivard (2017), "How to engage in pseudoscience with real data," McGill Journal of Education 52(1):237–246** (orig. French 2016, 51(2); English translation by L. Rivard). A statistician's argument that Cohen's d cannot serve as a universal impact ruler across studies with different populations, measures, and designs; that averaging such ds is "pseudoscience" in the specific sense of borrowing scientific form without satisfying its assumptions. The journal's most-viewed article (~62,000+ views). https://mje.mcgill.ca/article/view/9475
- **The CLE errors Hattie acknowledged.** In VL 2009 Hattie reported Common Language Effect sizes that were mathematically impossible (negative probabilities, probabilities > 100%) — he had used z-values directly instead of converting them to probabilities. Norwegian readers flagged it (~2011); Hattie acknowledged the error and corrected reprints. Crucial framing: **the CLE errors do not contaminate the Cohen's d values** (the rankings rest on d, not CLE), but they show the synthesis was published with basic statistical errors no reviewer caught. Sources: ollieorange2.wordpress.com (2014); visablelearning.blogspot.com/p/cle.html; Didau, "Visible Learning, hidden error."
- **Wecker et al. (2016/2017), "Visionär und imposant — aber auch belastbar? Eine Kritik der Methodik von Hatties 'Visible Learning'"** (German-language journal critique). Conclusion: the comprehensive-integration ambition is visionary but "not feasible in a scientifically sound manner" given current publication practices; "a large proportion of the findings are subject to reasonable doubt." (Full text in German — cite at conclusion level only.)
- **Slavin (2018), "John Hattie is Wrong"** (robertslavinsblog.wordpress.com, June 21, 2018). The meta-meta-analysis accepts underlying meta-analyses uncritically; those meta-analyses are dominated by small, brief, artificial studies with researcher-made measures — all conditions known to inflate effect sizes (small n, short duration, proximal measures, publication bias, quasi-experiments).
- **Simpson (2017), "The misdirection of public policy: comparing and combining standardised effect sizes," Journal of Education Policy 32(4):450–466.** Effect size is a ratio; researchers can grow it by shrinking the denominator (restricted samples) or sharpening the numerator (proximal measures) without the intervention being any better. League tables of effect sizes "may be hierarchies of openness to research design manipulation."
- **McKnight & Whitburn (2020), "Seven reasons to question the hegemony of Visible Learning," Discourse: Studies in the Cultural Politics of Education 41(1).** The sociological critique: Visible Learning as brand and hegemony — neoliberal, de-professionalizing, cult-like adoption dynamics. Useful to the book mainly as a warning about *how institutions wield rankings* — exactly the misuse Chapter 1 tries to prevent.
- **The averaging-across-moderators problem** (the methodological core for this book): a single number for "feedback" or "worked examples" averages over moderators that reverse the effect's size or sign (see Ch2 notes: worked examples 0.57 → 0.37 when one dissenting meta-analysis was averaged in). Hattie's own feedback synthesis acknowledges ~one-third of feedback effects are negative — the average conceals the distribution that practitioners actually live in.

**Common misconception:** "Because the methodology is debated, the list is useless." Correction (the book's wager): the list is *unusable as a measurement instrument but usable as an agenda* — a map of which mechanisms educators have cared enough about to study. The book then adds its own second layer of judgment (the seven dimensions), which inherits none of Hattie's statistical claims because it makes none.

**Worked example:** Take collective teacher efficacy (d = 1.57, #1). Critics note it is correlational, definitionally fuzzy, and almost certainly inflated. The chapter shows the book's use survives the critique: even at half the size, "shared professional trust matters and cannot be bought as software" stands — the AI classification depends on the *mechanism*, not the decimal.

### 3. The book's own seven-dimension framework — author's synthesis, NOT literature

The classification layer (AI feasibility: AI-NATIVE / AI-AUGMENTED / AI-ADJACENT / AI-RESISTANT; human irreducibility; substitution risk; mechanism conflict; vendor activity; hypothetical AI effect; notes) is the **author's analytical synthesis applied to the 252-influence list. It must never be cited as if it were published findings.** Headline distribution (verified against `data/hattie-ai-7dimensions.csv` and appendix 93): AI-ADJACENT 97 (38.5%), AI-AUGMENTED 88 (34.9%), AI-RESISTANT 38 (15.1%), AI-NATIVE 29 (11.5%). Among the 122 influences at/above the hinge: 81 AI-AUGMENTED, 18 AI-RESISTANT, 14 AI-NATIVE, 9 AI-ADJACENT. Among the 32 high-band influences: 24 AI-AUGMENTED, only 4 AI-NATIVE. **The structural finding the chapter should land: the high-impact end of the list is augmentation territory, not replacement territory — the AI-native zone is small, mostly procedural, and not concentrated at the top.**

**Common misconception:** "AI-NATIVE means safe; AI-RESISTANT means no AI." Corrections: summarization (d = 0.79) is AI-NATIVE *and* carries conflict-present/high-substitution flags — AI can do the task, which is exactly the danger. AI-RESISTANT influences (e.g., collective teacher efficacy) still admit AI at the edges: documentation, scheduling, evidence-organizing — never the mechanism itself.

**Worked example:** Walk one row end to end. Feedback (d = 0.70): AI-AUGMENTED, medium irreducibility, HIGH substitution risk, partial conflict, HIGH vendor activity; the dataset note records that ~one-third of feedback studies show negative effects and that vendor claims routinely strip this caveat. The seven columns turn "feedback works" into "task-level AI feedback is legitimate; relational and self-regulation feedback must be human; beware hint-clicking gaming."

### 4. Substitution risk, mechanism conflict, and the phase gate

Substitution risk: AI improves the visible artifact while deleting the invisible learning event. Mechanism conflict: the way the tool works contradicts the reason the influence works (AI summarizes → student never compresses; AI transcribes → student never encodes; AI writes → student never composes). The phase gate is the operational discharge: **AI may do X; teacher/learner must do Y; evidence of learning is Z** — written *before* adoption, with Z defined as delayed, unassisted, transfer-bearing performance rather than in-tool metrics.

Empirical anchors (established canon, citable without re-verification): **Bastani et al. 2025 PNAS** — unguarded GPT-4 access in math practice: +48% during practice, **−17 percentage points** on the subsequent unassisted exam; the guardrailed tutor arm: +127% practice, ≈0 harm on the exam. Guardrails are the phase gate made executable. **VanLehn 2011** — intelligent tutoring at 0.76/0.79 vs. classroom controls, near human tutoring (against the Bloom two-sigma myth). **Wang et al. 2024 Tutor CoPilot** — AI assisting 900 human tutors / 1,800 students: +4pp overall mastery, +9pp for novice tutors; AI amplifying the human loop rather than replacing it. **Zeng et al. 2024 BJET g = 0.782** for ChatGPT-assisted learning outcomes (meta-analysis of an early-stage literature — cite with that caveat). **Kosmyna et al. EEG preprint** — reduced functional connectivity during AI-assisted essay writing (single-source, preprint — flag whenever used). **Poulidis, Bastani & Bastani SSRN working paper** (chess academies) — self-regulation alone fails to prevent over-reliance; structure, not willpower.

**Common misconception:** "Responsible AI use" as a disposition. The phase gate reframes it as a *specification* — enforceable in workflow, auditable after the fact.

**Worked example (mirrors the opening case):** The school board's syllogism — "feedback d = 0.70; this product automates feedback; therefore buy" — fails at the middle term: Hattie & Timperley (2007) locate feedback's power in changing the learner's next action across task/process/self-regulation levels. The audit asks: which feedback level does the product touch, who acts on it, and what would show learning rather than usage?

### 5. What Hattie himself says about technology and AI

Two strands, both verified to exist: (a) *The Sequel* (2023) adds technology-implementation domains; reviews report his framing that technology's benefits concentrate in enabling feedback, focus on learning, and **consolidation** of prior learning rather than first-exposure instruction — convergent with this book's augmentation thesis. (One review attributes "four underpinnings: the power of social media, feedback to teachers, focus on learning, consolidation" — verify against the book itself before quoting; flagged in G.) (b) **Hamilton, Wiliam & Hattie (2023), "The Future of AI in Education: 13 Things We Can Do to Minimize the Damage"** (working paper) — deliberately cautionary: without thoughtful intervention AI could "diminish human agency, stifle creativity"; recommends risk-based access restrictions for children, auditability guardrails for parents/educators, AI self-disclosure, algorithmic fairness and transparency. The convenient rhetorical fact for Chapter 1: **the man whose effect sizes vendors quote co-wrote a paper about minimizing AI's damage.** Hattie's older soundbite that technology's measured effect has hovered around ~0.3 for decades aligns with the ICT row (d = 0.47) carrying the dataset's sternest note: a pre-LLM aggregate that must not be used as evidence for modern AI products.

**Sources:** Hamilton, Wiliam & Hattie 2023 working paper (hosted PDF copies circulate, e.g., mariamercantiguerin.com/wp-content/uploads/2025/03/hamilton-wiliam-and-hattie-2023-final-1-2aieducation.pdf); sec-ed.co.uk, "AI and the future of humanity: three scenarios"; Sequel reviews (Yan 2023, researchgate.net/publication/372663244; CATESOL 2024).

---
## B. Domain examples and cases

### Case 1 (opening case, expanded): The school board and the d = 0.70 sales deck
A vendor deck quotes "feedback: d = 0.70, top-30 Hattie influence" to a board evaluating an AI tutoring platform. The chapter's audit walk: (1) the 0.70 is a synthesis of *human* feedback studies predating LLMs; (2) the dataset note — one-third of feedback effects negative; the hint-clicking/system-gaming failure mode; (3) the legitimate version exists (Bastani guardrailed arm; VanLehn step-level tutoring) but is a *design property*, not a product-category property; (4) decision: pilot with a written phase gate and a delayed unassisted-assessment evidence check, or decline. Deliverable artifact: the one-page AI adoption audit (influence → effect size → mechanism → AI role → human role → learner role → substitution risk → evidence of learning).

### Case 2: Same conversation, three opposite answers
Summarization (d = 0.79, AI-NATIVE, conflict present), teacher clarity (d = 0.75, AI-AUGMENTED, no conflict), teacher-student relationships (d = 0.52, AI-RESISTANT, conflict present). Three influences a generic "AI in education" conversation would treat identically; the seven dimensions route them to opposite adoption rules. Good for teaching the taxonomy as *discrimination*, not vibes.

### Case 3: The critic in the committee
A district committee member has read Bergeron & Rivard and moves to dismiss the entire framework. The chapter models the honest reply: concede the statistics (CLE errors real; averaging across moderators real; d non-comparability real), then re-found the book's use — effect sizes as triage/agenda, mechanisms as the unit of analysis, the seven dimensions as explicit judgment open to challenge row by row. This case inoculates the book against its own Adoption Risk Register item #1 ("Hattie critique risk").

### Failure case: The audit that audited the artifact
A school pilots an AI writing-feedback tool and declares success on usage minutes, drafts produced, rubric scores of final essays, and teacher satisfaction. Every metric is an artifact or activity metric. Unassisted on-demand writing in week 10 is flat. The failure to define Z (evidence of learning) in advance let the tool grade its own homework — the Bastani practice/exam dissociation at institutional scale.

---
## C. Connections and dependencies

**Prerequisites:** none — this is the foundation chapter; it must teach effect size, the hinge, the heterogeneity of the list, the critiques, the four feasibility categories, irreducibility, substitution risk, mechanism conflict, and the phase gate from scratch.

**Unlocks:** every group chapter (2–39) consumes this vocabulary. Specific forward dependencies worth seeding: the hinge logic → Ch2 (G01, the immediate stress test of "0.40 is not a verdict"); augmentation-with-gates → Chs 4–5, 13 (metacognitive gates) and 27–28, 31, 35 (summarization, feedback, note taking — the marquee mechanism-conflict chapters); AI-resistance → Chs 7, 12, 15, 23, 26 (relationships, cooperation, jigsaw/credibility, collective efficacy, discussion); the ICT warning → Chs 38–39.

**Series frame (chapters/97-fundamental-themes.md):** Chapter 1 quietly carries the three series themes — Frictional (struggle is the mechanism, hence substitution risk), Phase Gates (the operational boundary), Humans + AI (division of labor) — without importing the tier vocabulary wholesale; the phase gate is the shared spine.

---
## D. Current state of the field

**Settled:**
- Effect sizes vary systematically with study design, measure proximity, sample variance, and student age; raw cross-study comparison is unsound (Simpson 2017; Kraft 2020 — uncontested even by Hattie's defenders).
- The CLE statistics in VL 2009 were wrong and were corrected; the d-based rankings were not affected by that specific error.
- Field-RCT benchmarks: d ≥ 0.20 on standardized outcomes is a large effect (Kraft 2020).
- Human tutoring and step-based intelligent tutoring are roughly comparable (VanLehn 2011); Bloom's two-sigma is not a reproducible benchmark.
- Unguarded LLM access during practice can harm subsequent unassisted performance while inflating practice performance (Bastani et al. 2025 PNAS).

**Contested:**
- Whether meta-meta-analysis yields any decision-grade numbers at all (Bergeron & Rivard; Wecker; Simpson — vs. Hattie's "directionally useful" defense and practitioner defenses, e.g., EdWeek's "John Hattie isn't wrong; you are misusing his research," 2018).
- The "0.40 ≈ one year's growth" equation (age dependence; Wiliam).
- Magnitudes of generative-AI learning effects: early meta-analyses (Zeng g = 0.782) vs. cleaned, skeptical reads (~+0.17 per the Horvath-counter analysis) — young, heterogeneous, vendor-adjacent literature.
- Collective teacher efficacy's d = 1.57 specifically (correlational; definitional drift) — relevant since it tops the dataset.

**Key references:** Hattie 2009; Hattie 2023 (*The Sequel*); Bergeron & Rivard 2017 (mje.mcgill.ca/article/view/9475); Wecker et al. 2016/2017; Slavin 2018 (blog); Simpson 2017 (doi 10.1080/02680939.2017.1280183); McKnight & Whitburn 2020 (doi 10.1080/01596306.2018.1480474); Kraft 2020 (doi 10.3102/0013189X20912798); Hamilton, Wiliam & Hattie 2023 (working paper); Hattie & Timperley 2007; VanLehn 2011; Bastani et al. 2025 PNAS; Wang et al. 2024.

**Recent developments:** *The Sequel* (2023) moved Hattie toward implementation/context framing — reviewers note it "moves him closer to his critics"; UNESCO/OECD/USDOE guidance has converged on human-centered AI use and teacher judgment; the guardrailed-vs-unguarded design distinction (Bastani) is becoming the field's organizing empirical result; Hattie's public AI stance is co-authored caution, not endorsement of automation.

---
## E. Teaching considerations

**Where readers get stuck:**
- *Two-ruler confusion:* applying the Hattie 0.40 hinge to RCT effect sizes (or vice versa). Fix with a side-by-side table: Hattie scale vs. Kraft benchmarks — the same numbers earn opposite adjectives.
- *Critique whiplash:* readers either dismiss the critiques (cult mode) or dismiss the book (skeptic mode). The chapter must model the third stance: degraded-but-usable evidence + mechanism reasoning. State explicitly: every later chapter survives if you halve every effect size.
- *Taxonomy as label rather than argument:* readers will memorize AI-NATIVE/AUGMENTED/ADJACENT/RESISTANT as fixed facts. Force them to re-derive a classification and to disagree with one row (good candidates: practice testing, homework, mobile phones).
- *Hypothesis column misread as findings:* see G — must be addressed in chapter text, not only in an appendix footnote.

**Analogies that work:** nutrition meta-research ("eggs are good/bad" averages hide moderators); a ranked list as a *map of where the bodies of evidence are buried*, not a shopping list; the phase gate as a relay-race handoff zone (the baton must change hands inside a marked zone, and there's a disqualification rule); the CLE affair as "the speedometer was broken but the odometer was fine — and what that does and doesn't tell you about trusting the car."

**Exercises:** (1) Phase-gate worksheet on one real local tool (analyze/evaluate). (2) "Defend the decimal": give readers the Bergeron & Rivard abstract and have them write the strongest honest rebuttal *that still uses the list* (evaluate/create). (3) Vendor-claim rewrite: convert "our platform leverages Hattie's #1 influence" into a mechanism claim and name what evidence Z would falsify it (apply/analyze). (4) Audit the audit: given the failure case in B, redesign its evidence plan.

---
## F. Library files relevant to this chapter

- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` — the strongest available "below-hinge = meaningless" absolutist position; Chapter 1 needs it as the cautionary opposite of its own hinge usage; also the EdTech ES ≈ +0.29 convergence (Tamim 2011 +0.35, Higgins 2012 +0.27, Hattie 2023 +0.29).
- `_lib_The_Digital_Delusion_Counter.md` — **the 0.40-hinge debate, fully staged**: threshold-is-arbitrary-and-cost-blind (class size d = 0.21 at ~$3,000/student vs. AI tutoring d = 0.17 at ~$50; the cost-per-0.10-SD arithmetic); "if 0.40 is the average, half of education is 'meaningless' by definition"; average-vs-universal category collapse (the Butter Knife Fallacy; the barber-surgeon parable); the dosage inverted-U. Write Chapter 1's hinge section against this file.
- `_lib_Science_Fictions.md` — replication, publication bias, hype mechanics; Slavin's inflation point in book form.
- `_lib_Calling_Bullshit.md` — quantitative-claim hygiene; the vendor-deck reading skills the chapter deliverable trains.
- `_lib_Weapons_of_Math_Destruction.md` — what happens when a proxy metric (effect size; in-tool analytics) becomes the optimization target at institutional scale.
- `_lib_Co-Intelligence.md` — augmentation-not-replacement from the AI-practice side; centaur/cyborg framing for the phase gate.
- `_lib_EdTech.md` — implementation history; the technology effect plateau.
- `_lib_Teaching_for_Deeper_Learning.md` / `_lib_Building_Thinking_Classrooms.md` — mechanism-first pedagogy for the "what makes an influence work" section.
- `_lib_Whistling_Vivaldi.md` — lighter touch here (stereotype threat sits in Ch2's bucket); supports "the list contains psychological conditions, not just buyable interventions."

---
## G. Gaps and flags

- **CRITICAL FLAG (book-level):** the `hypothetical_ai_effect` column in `hattie-ai-7dimensions.csv` is explicitly labeled **[HYPOTHESIS]** in every populated cell — author's interpretive estimates, not measurements. Chapter 1 is where the book must teach the reader to read that label; if those numbers ever read as findings, the book's credibility argument collapses. Evidence-language rule (TIKTOC Part 10): "associated with," "classified as," "hypothesized," "priority review."
- **FLAG:** The seven-dimension framework is the author's synthesis. Label it as such on first use; never attribute it to the literature.
- **FLAG (verify before quoting):** the Sequel's "four underpinnings of technology success" list and any g = .49 technology figure came from secondary reviews (Yan 2023; review copies) — check against the book itself; the figure may belong to a cited sub-meta-analysis, not Hattie's own synthesis.
- **FLAG:** Wecker et al. is German-language; cite at conclusion level only unless full text is consulted.
- **FLAG (canon):** the WWC Cognitive Tutor "+0.04" figure is unreliable — if at-scale ITS caution is needed, use "modest at-scale effects, WWC 2016 mixed." Kosmyna EEG = preprint, single source; always flag.
- **FLAG:** McKnight & Whitburn's strongest language ("cultlike," "simulates pornography," "courts fascism") is real but rhetorically extreme — paraphrase carefully; use the article for the hegemony/brand point, not for statistics.
- **GAP:** No direct Hattie quotation specifically about *generative* AI tutoring products was verified this session beyond the Hamilton/Wiliam/Hattie working paper and derivative interviews; if the chapter wants a Hattie-on-LLMs quotation, pull it from that paper's text directly.
- **GAP:** Exact current MetaX effect sizes drift as meta-analyses are added (visiblelearningmetax.com); recheck quoted decimals near publication. The book's dataset is locked to the 252-influence 2018-era list — say so explicitly in the chapter to pre-empt "but the Sequel says 357" objections.
