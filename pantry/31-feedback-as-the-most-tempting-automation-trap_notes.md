# Research Notes: Chapter 31 — G30: Feedback as the Most Tempting Automation Trap
**Source:** TIKTOC.md chapter entry (## Chapter 31, ~line 1320) + data/hattie-ai-7dimensions.csv (row: rank 32) + chapters/93-hattie-ai-analysis-summary.md (high vendor-activity table) + web verification (this session)
**Notes file:** `31-g30-feedback-as-the-most-tempting-automation-trap_notes.md`
**Corresponding chapter:** `chapters/31-g30-feedback-as-the-most-tempting-automation-trap.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Group signature:** High / AI-AUGMENTED / Medium human irreducibility / High substitution risk / partial cognitive-work conflict
**Count:** 1 influences
**Effect-size range:** 0.70 to 0.70; weighted average 0.70

**Highest-ranked examples:**
- 32. Feedback (d=0.7)

**Human-readable example:** AI can support 32. Feedback (d=0.7) by making planning, diagnosis, examples, and feedback faster, while the teacher and learner retain the decisive cognitive work.

**Case study:** A teacher pilots AI around 32. Feedback (d=0.7). The case follows where the tool helps, what remains human, and the exact phase gate that keeps the mechanism intact.

**AI use / do-not-use boundary:** Use AI to scaffold and expose thinking; do not let it complete the core cognitive act for the learner.

**Chapter structure:** 1. Translate the group signature. 2. Explain the strongest examples and mechanisms. 3. Walk the case study. 4. Productive AI role + substitution trap. 5. Phase gate (AI may do X / human must do Y / evidence is Z). 6. Reader audit.

**Reflection exercise:** Choose one tool or routine in your own setting that resembles this group. Write one sentence each for: mechanism, safe AI support, forbidden substitution, and proof that learning happened.

---
## A. Conceptual foundations

### 1. The number everyone quotes and the distribution nobody quotes: Kluger & DeNisi 1996

The chapter's essential, verified anchor: **Kluger & DeNisi (1996, *Psychological Bulletin*, 119, 254–284)** meta-analyzed 607 effect sizes (23,663 observations) of feedback interventions on performance: average **d = 0.41 — and over one-third (≈38%) of feedback interventions DECREASED performance**. Their Feedback Intervention Theory explains the sign flips: feedback that directs attention to the *task and its details* helps; feedback that directs attention to the *self* (praise, ego-involving comparisons) routinely hurts. This is the single most load-bearing citation of the chapter, because the entire EdTech feedback pitch — "feedback is the top influence, our product automates feedback" — quotes the average and deletes the distribution. The CSV row says it directly: "One-third of feedback studies show negative effects. Vendor claims routinely strip this caveat." Automating feedback means automating something that, implemented blind, harms students about one time in three.

**Common misconception:** "More feedback, faster, is better." Kluger & DeNisi's whole point: feedback is a *high-variance* treatment whose sign depends on content and attention-direction, not a vitamin whose value scales with dosage and speed.

**Worked example:** Show the same returned essay with three machine-generatable comments: "87% — great job, you're a strong writer!" (self-directed; harm-prone), "Your thesis is unclear" (task verdict, no path), "Your second paragraph asserts X but the quote shows Y — reconcile them" (task/process with a next move). Same speed, opposite mechanisms.

**Sources:** Kluger & DeNisi 1996 (doi 10.1037/0033-2909.119.2.254; figures verified this session: 607 ES, 23,663 obs, d=0.41, >1/3 negative); CSV row 32.

### 2. What makes feedback work when it works: Hattie & Timperley's model and the 2020 update

**Hattie & Timperley (2007, "The Power of Feedback")** organize effective feedback around three questions — *Where am I going? How am I going? Where to next?* — operating at four levels: **task, process, self-regulation, and self** — with the self level (praise) reliably the least effective and process/self-regulation levels carrying the durable gains (flag: model cited from field knowledge; structure is uncontroversial but pull the full text before quoting). The meta-analytic update, verified this session: **Wisniewski, Zierer & Hattie (2020, *Frontiers in Psychology* 10:3087)** — 435 studies, k=994, N>61,000: overall **d = 0.48** (not 0.70/0.73), with significant heterogeneity ("feedback cannot be understood as a single consistent form of treatment"), stronger effects the more *information* the feedback carries (high-information feedback > reinforcement/punishment-style), and stronger effects on cognitive and motor outcomes than motivational/behavioral ones. So the book's own d=0.70 row is already an overstatement relative to the field's current central estimate — a self-audit the chapter should perform on its own dataset, visibly.

**Common misconception:** "Feedback = telling students what was wrong." The model's center of gravity is *feed-forward* (where to next) and self-regulation (building the student's own error-detection) — the level AI systems address least and matter most.

**Worked example:** Map the three questions onto a returned lab report: goal clarity (criteria), status (what the data section does and doesn't show), next move (one revision target). Most automated feedback answers question 2 only.

**Sources:** Wisniewski et al. 2020 (doi 10.3389/fpsyg.2019.03087; verified: 435 studies, k=994, d=0.48, heterogeneity, information moderator); Hattie & Timperley 2007 (flag).

### 3. AI feedback head-to-head: where it holds up and where it doesn't

The canon evidence, deployed precisely: **Steiss et al. 2024** — expert human feedback on student writing beat ChatGPT on **all** assessed dimensions **except criteria-based evaluation**, where ChatGPT was comparable, and ChatGPT was *slightly better on reasoning/argumentation-focused feedback*. Calibration for the chapter: AI feedback is genuinely usable where the task is rubric-checking against explicit criteria; it underperforms experts on localization, specificity to the student, and developmental appropriateness — the relational and contextual layers. Add **Zeng et al. 2024** (canon, g=0.782 for ChatGPT-supported learning overall — quote with its duration/outcome caveats) and **Tutor CoPilot** (canon, +4pp/+9pp): the strongest documented AI feedback win so far is feedback *to the human instructor* (expert-modeled suggestions in live tutoring), not student-facing automation. And the gaming risk: CSV row 32 names the mechanism conflict — "AI feedback can enable system-gaming (clicking hints for answers)" — the Bastani pattern (canon: +48 practice/−17 exam unguardrailed) is what feedback-on-demand becomes when the student's job collapses into extracting answers from the feedback channel.

**Common misconception:** "AI feedback at scale ≈ a personal tutor for every child." VanLehn 2011 (canon) bounds what tutoring-grade interaction achieves (d≈0.76–0.79) under *step-level, curriculum-constrained* conditions; generic instant comments on finished products are a different, weaker intervention — and Kluger & DeNisi warn the sign isn't even guaranteed.

**Worked example:** The triage design: AI drafts criteria-based comments on all 28 essays overnight; the teacher reviews, deletes the harm-prone ones, personalizes five, and uses the batch pattern ("19 of 28 confused correlation/causation in §2") to plan tomorrow's reteach. AI multiplies the teacher's feedback reach; the teacher owns judgment and relationship.

**Sources:** Steiss et al. 2024, Zeng et al. 2024, Tutor CoPilot, Bastani et al. 2025, VanLehn 2011 (all canon); CSV row 32.

### 4. Why "most tempting": the trap anatomized

Assemble the four features that make feedback the book's maximal automation temptation: (1) **highest-burden teacher task** — feedback is the most time-expensive routine in teaching, so the relief offer is real; (2) **most-cited EdTech claim** — the CSV calls this row "most-cited EdTech claim," and the appendix's high-vendor-activity table puts feedback (High substitution risk + High vendor activity + partial conflict) in the danger cell; (3) **plausible surface** — LLM comments *look* like expert feedback (Scarfe et al. 2024 canon: AI text passes expert readers undetected), so quality failures are invisible at a glance; (4) **sign risk** — unlike most automations, badly automated feedback doesn't just underperform, it can *harm* (the 38%). Temptation × invisibility × sign-risk is the trap. The phase gate: **AI may** draft criteria-based, task/process-level comments, surface error patterns across a class, and speed feedback cycles on low-stakes practice; **the teacher must** review before release, own all self-regulation- and person-level communication, and decide consequences for instruction; **the learner must** act on feedback (revision is where feedback becomes learning — feedback nobody uses has an effect size of zero); **evidence is** revision quality and shrinking error recurrence, not feedback volume or turnaround time.

---
## B. Domain examples and cases

### Case 1 (TIKTOC case): The essay-feedback pilot
A high-school English teacher pilots LLM feedback. Round 1 (naive): students submit, AI returns instant comments, students glance and move on — feedback volume up 10×, revision behavior unchanged. Round 2 (redesigned): AI comments are criteria-locked to the class rubric (the Steiss-supported niche), arrive *mid-draft* not post-submission, every comment requires a logged revision response, praise/person-level language is filtered out (Kluger & DeNisi hygiene), and the teacher personally writes the where-to-next note on each final draft. Outcome metric: blind-scored revision deltas, not sentiment surveys.

### Case 2: Feedback to the teacher, not just from the teacher
Two appendix-adjacent moves: (a) Tutor CoPilot-style live suggestion for novice tutors/teachers (canon: +9pp where instructor skill was lowest) — the documented win; (b) AI pattern reports turning 120 quiz papers into "three misconception clusters" — feedback to *instruction* (the formative-evaluation row, rank 87, is the no-conflict neighbor). Both keep humans as the feedback's deliverers and beneficiaries of AI's aggregation strength.

### Failure case: The instant-feedback math platform
A platform advertises "immediate feedback on every problem." Implementation reality: the feedback button reveals the worked solution; students learn to click it within seconds (the CSV's gaming clause; practice-testing row 66's answer-reveal warning is the same mechanism). Practice accuracy soars; cold-test performance drops in the heaviest users — the Bastani signature. The audit question for any feedback feature: *can the student convert the feedback channel into an answer channel?* If yes, the design is a solution dispenser with a feedback costume.

---
## C. Connections and dependencies

**Prerequisites:** Ch. 1 (reading distributions, not averages); Ch. 27 (scaffolding/fading — feedback is scaffolding's information channel, and hint-gaming is the shared failure mode); Ch. 24 (teacher judgment — feedback quality rides on judgment accuracy).

**Unlocks:** Ch. 32 (learning goals — "where am I going" presupposes owned goals); Ch. 39 (technology in writing — feedback-vs-ghostwriting is that chapter's boundary); the vendor-audit pattern at its highest stakes (this is the influence vendors cite most).

**Contrasts:** Formative evaluation (rank 87, no conflict — AI collects, teacher interprets) sits one step away with the danger removed: a clean minimal pair showing that what makes feedback risky is the *student-facing, judgment-bearing* surface, not the data work.

---
## D. Current state of the field

**Settled:**
- Feedback's average effect is positive and moderate (d≈0.41–0.48 across the two great meta-analyses), with massive heterogeneity; a substantial minority of implementations backfire (Kluger & DeNisi's >1/3).
- Content moderates everything: high-information, task/process-level feedback outperforms praise and verdicts; self-level feedback is least effective (Kluger & DeNisi; Wisniewski et al.; Hattie & Timperley's model).
- Expert human feedback currently outperforms LLM feedback on most quality dimensions; LLMs hold up on criteria-based evaluation (Steiss canon).

**Contested:**
- The true central estimate (0.41 vs. 0.48 vs. Hattie's earlier 0.70/0.73) — aggregation choices; the chapter should treat its own row's 0.70 as edition-bound and high.
- Whether student-facing LLM feedback improves *learning* (vs. document quality) — revision-behavior studies are early; no convincing classroom RCT located this session showing durable learning gains from autonomous AI feedback.
- Detection/authenticity interactions: if students draft with AI and receive AI feedback, whose writing is being fed back on? (Scarfe canon makes policing impractical; design must assume non-detection.)

**Key references:** Kluger & DeNisi 1996; Hattie & Timperley 2007 (flag: pull full text); Wisniewski, Zierer & Hattie 2020; Steiss et al. 2024, Zeng et al. 2024, Bastani et al. 2025, Tutor CoPilot, VanLehn 2011, Scarfe et al. 2024 (canon); CSV row 32 + appendix high-vendor-activity table.

**Recent developments:** LLM feedback features are now default in major LMS/writing platforms (turnaround-time arms race); research focus is shifting from "can AI write good comments?" to "do students *do* anything with them?" — the right question, and the chapter should plant its flag on revision-as-the-outcome.

---
## E. Teaching considerations

- **Open with the 38%.** No other single fact reframes the reader's intuition as efficiently; it converts "automate the good thing" into "automate a coin-weighted thing" in one sentence.
- **Where readers get stuck:** the d-soup (0.41, 0.48, 0.70, 0.73, 0.782). Build the table once: what was measured, on whom, by which synthesis — and model the book's discipline of naming the edition/year for every number. Zeng's g=0.782 especially must not be allowed to read as "AI feedback beats human feedback."
- **Second sticking point:** teachers hear "review every AI comment" as no time saved. The triage math says otherwise: review-and-delete is 5× faster than compose; the saved time funds the five personalized notes and the reteach — show the arithmetic.
- **Third:** distinguish feedback *latency* from feedback *quality*; speed is the only dimension where AI wins automatically, and it is the dimension least connected to the mechanism.
- **Exercises:** (1) Classify 10 real comments by Hattie & Timperley level and predict sign per Kluger & DeNisi (analyze); (2) the answer-channel audit on a real platform's feedback feature (evaluate); (3) redesign Case 1 Round 1 into Round 2, writing the criteria-lock prompt and the revision-log requirement (create); (4) TIKTOC reflection verbatim: mechanism = information the learner uses to close a gap; safe AI = criteria-based drafts, pattern aggregation, low-stakes practice loops; forbidden = unreviewed student-facing comments, praise automation, feedback channels that dispense answers; proof = revision deltas and falling error recurrence.
- **Analogy bank:** feedback as medication (dose, timing, contraindications — and a 38% adverse-event rate when prescribed blind); the answer-channel costume; turnaround time as the drive-through metric.

---
## F. Library files relevant to this chapter

- `_lib_Co-Intelligence__Living_and_Working_with_AI.md` — **named library anchor for this chapter**: centaur/cyborg division of labor for the triage design; jagged frontier as why criteria-checking works and developmental judgment doesn't.
- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` + Counter file — standing pair for the effect-size discussion; Horvath on feedback myths is directly on point.
- `_lib_Calling_Bullshit__The_Art_of_Skepticism_in_a_Data-Driven_World.md` — the vendor-claim anatomy (average quoted, distribution deleted) as a formal fallacy.
- `_lib_Noise_ A Flaw in Human Judgment.md` — consistency vs. validity in graded judgment; why "consistent AI comments" is not the same claim as "valid AI comments."
- `_lib_Thinking,_Fast_and_Slow.md` — regression to the mean masquerading as feedback efficacy (the flight-instructor parable belongs in this chapter's sidebar).
- `_lib_Building Thinking Classrooms…md` — flow-preserving feedback and why answer-revealing help kills thinking (the platform failure case's pedagogy).

---
## G. Gaps and flags

- **CRITICAL FLAG (inherited, book-level):** the CSV's d≈0.50 ("AI fast task-level feedback is legitimate; relational and self-regulation feedback must be human") is **[HYPOTHESIS]** — author's estimate, never a finding.
- **FLAG:** d=0.70 is from the 2018 252-list; Wisniewski et al. 2020's d=0.48 is the field's current meta-analytic center — the chapter must show the discrepancy and date-stamp every figure (this is the book's most-quoted row; sloppiness here would be fatal to its credibility).
- **FLAG:** Hattie & Timperley 2007's model structure cited from field knowledge this session — uncontroversial, but pull the full text before quoting the three questions/four levels verbatim.
- **FLAG:** the ≈38%-negative figure is standardly reported from Kluger & DeNisi's "over 1/3" — verified at that precision; if the chapter prints "38%," confirm the exact proportion in the original (some summaries say "more than one-third," others 38%).
- **FLAG:** Steiss et al. 2024 nuances must travel together (humans better on everything *except* criteria-based; ChatGPT slightly better on reasoning/argumentation) — quoting either half alone misleads in opposite directions.
- **GAP:** no classroom RCT located this session on autonomous student-facing LLM feedback and durable learning outcomes — name the absence in the chapter; the failure case is a composite, must read as illustrative.
- **GAP:** the revision-behavior literature (do students act on AI vs. teacher comments differently?) is emerging and was not searched in depth — research before the chapter claims anything quantitative about uptake.
