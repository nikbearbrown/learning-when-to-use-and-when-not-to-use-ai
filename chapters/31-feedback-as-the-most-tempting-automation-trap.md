# Chapter 31 — Feedback as the Most Tempting Automation Trap
*The most-cited number in educational technology marketing — and the distribution nobody quotes alongside it.*

One influence: feedback, d = 0.70 — the most cited number in educational technology marketing, and one of the most heterogeneous findings in Hattie's entire synthesis: feedback's average conceals variants that help enormously and variants that measurably harm. AI makes feedback infinitely abundant for the first time in history, which makes the distribution, not the average, the design problem. The partial conflict: receiving feedback is not the mechanism — acting on it is, and a system that drowns the learner in instant commentary can displace the very revision it was meant to provoke. Abundance is the new failure mode.

Hector Alvarez is director of secondary curriculum in a district of six high schools, and the procurement request on his desk has more political momentum than anything he has reviewed in years. The English department chairs, jointly, want an AI essay-feedback platform: students submit drafts, the system returns detailed comments in under a minute, and teachers — each carrying 150 students — stop spending Sundays buried in paper. The vendor's one-pager leads with the number everyone in the building already knows: "Feedback: effect size 0.70–0.73, among the most powerful influences on achievement. Our platform delivers it instantly, on every draft, for every student."

The superintendent is supportive. The teachers' association is supportive. The budget exists. Hector's hesitation comes from a single line he half-remembers from a research methods course: something about a third of feedback interventions making performance *worse*.

If that is true, the district is not proposing to automate a good thing. It is proposing to automate a coin-weighted thing, at scale, in every English classroom simultaneously.

It is true.

## The Distribution Nobody Quotes

Kluger and DeNisi (1996) meta-analyzed 607 effect sizes from feedback-intervention studies — 23,663 observations. Average d = 0.41. And over one-third of feedback interventions *decreased performance*. Not "were less effective." Decreased it. Their Feedback Intervention Theory explains the sign flips: feedback that directs attention to the *task and its details* tends to help; feedback that directs attention to the *self* — praise, ego-involving comparison — routinely hurts.

Every EdTech feedback pitch quotes the average and deletes the distribution.

Wisniewski, Zierer, and Hattie (2020) updated the synthesis: 435 studies, 994 effects, over 61,000 students, overall d = 0.48, with heterogeneity so large the authors state that feedback "cannot be understood as a single consistent form of treatment." The strongest moderator is *information content*: high-information feedback (what was wrong, why, what next) outperforms reinforcement-and-punishment-style feedback, with stronger effects on cognitive outcomes than motivational ones.

Note what this means for the book's own dataset. The 2018-list value of 0.70 runs high against the field's current meta-analytic center of 0.48. This chapter flags the overstatement in its own dataset rather than waiting for a critic to find it.

The working model for what makes feedback work comes from Hattie and Timperley (2007): three questions — *Where am I going? How am I going? Where to next?* — operating at four levels: task, process, self-regulation, and self. Self-level feedback (praise) is reliably least effective [verify — model structure cited from field knowledge; pull the full text before quoting verbatim]. The center of gravity is feed-forward and self-regulation — building the student's own error-detection — which is precisely the level automated systems address least.

One sentence to carry out of this section: **feedback is not a vitamin whose value scales with dose and speed. It is a high-variance treatment whose sign depends on content.**

## Why Content Decides Everything

When feedback works, the mechanism is information a learner *uses* to close a gap: a clear picture of the goal, an accurate reading of current performance against it, and a usable next move — followed by the learner actually making that move.

Three implications fall out.

**Content decides the sign.** Three machine-generatable comments on the same essay: "87% — great job, you're a strong writer!" (self-directed; harm-prone). "Your thesis is unclear" (a task verdict with no path). "Your second paragraph asserts X but your quotation shows Y — reconcile them" (task and process information with a next move). Same speed. Opposite mechanisms.

**The loop must close.** Feedback nobody acts on has an effect size of zero, whatever its quality. Revision is where feedback becomes learning — which is why every metric in this chapter points at revision behavior rather than comment volume.

**Speed is the wrong variable.** Latency matters at the margins — feedback on work the student no longer remembers writing is weaker — but a fast wrong-level comment is harm delivered promptly. The one dimension where AI wins automatically is the dimension least connected to the mechanism.

<!-- → [TABLE: Three comment types on the same essay — columns: Comment text, Level (Hattie-Timperley), Attention directed to (Kluger-DeNisi), Predicted sign, Usable next move; rows: Person-directed praise, Task verdict without path, Task+process with next move — student should see that speed is constant across all three while mechanism and predicted sign vary completely] -->

## What AI Can Safely Do

The head-to-head evidence draws the boundary with unusual precision. Steiss and colleagues (2024) compared expert human feedback with ChatGPT feedback on real student writing. Humans were better on *every assessed dimension except criteria-based evaluation*, where the AI held its own — and the AI was slightly better on feedback focused on reasoning and argumentation. Both halves must travel together. Quoting either alone misleads in opposite directions.

**Draft criteria-locked, task- and process-level comments** against an explicit rubric — the niche where AI performance is documented as comparable — for teacher review before release.

**Aggregate error patterns across a class.** "19 of 28 essays confuse correlation and causation in the second body paragraph" is feedback to *instruction*, the no-conflict use. It turns 120 papers into tomorrow's reteach, which no individual comment could.

**Speed low-stakes practice loops** — frequent drafting exercises and retrieval checks where fast task-level response is the point and stakes are low.

**Support the feedback-giver.** The strongest documented AI feedback win is feedback *to the human instructor*: in the Tutor CoPilot study, expert-modeled live suggestions to tutors produced +4 percentage points overall and +9 for students of the lowest-rated tutors. The machine made the human's feedback better. The human stayed in the loop.

The triage arithmetic answers the workload objection. AI drafts criteria-based comments on all 150 essays overnight. The teacher reviews — deleting harm-prone, personalizing a handful, reading the class pattern. Review runs several times faster than compose. The saved hours fund the five personal where-to-next notes and the reteach.

## The Substitution Trap

**Unreviewed comments at scale.** Release machine feedback directly and the Kluger–DeNisi distribution applies with no human filter. Most platforms default to praise-heavy, person-directed language — the precise register the evidence flags as harm-prone — because warmth tests well with users. Automating feedback blind means automating something that harms performance roughly one time in three.

**The feedback channel becomes an answer channel.** The dataset's conflict note names it. A "feedback" button that reveals the worked solution teaches students to click within seconds. Practice accuracy soars; cold-test performance drops among the heaviest users — the Bastani signature (+48 percent on assisted practice, −17 percent on the unassisted exam, absent guardrails). The audit question for any feedback feature: *can the student convert the feedback channel into an answer channel?* If yes, the design is a solution dispenser in a feedback costume.

**Volume mistaken for value.** Ten times the comments with unchanged revision behavior is noise with a turnaround-time metric. And the plausible-surface problem makes the failure invisible: AI comments read like expert comments — Scarfe and colleagues showed AI-generated text passes expert readers undetected — so nobody notices the wrong-level, generic, or subtly inaccurate ones without deliberately looking.

A compounding loop worth naming for the procurement context: if students draft with AI and the platform gives AI feedback on those drafts, the system is partly grading its own prose. Design must assume non-detection and move the stakes to supervised and revision-evidenced work.

<!-- → [DIAGRAM: Three substitution failure modes — three parallel vertical channels: (1) Unreviewed comments → Kluger-DeNisi distribution applies unfiltered → one-in-three harm rate; (2) Answer channel → Bastani +48/-17 signature → practice performance up, unassisted performance down; (3) Volume mistaken for value → plausible surface hides quality failures → revision behavior unchanged; each channel labeled with the failure's observable signature and what audit would catch it] -->

## The Case in Full

Hector ran a one-semester pilot in two schools before any district contract. The pilot's design, not the vendor's demo, decided the outcome.

He presented the committee with the full d-table on one slide: 0.41 (Kluger & DeNisi), 0.48 (Wisniewski et al.), 0.70 (the 2018 Hattie list), each with what was measured and when. The chairs' reaction to the over-one-third-negative figure reshaped the pilot before it began. The question changed from "how fast can students get comments?" to "which comments, and what happens after?"

Configured to the pilot's rules, the platform earned its keep. Comments were locked to the district's writing rubric — the criteria-based niche where the head-to-head evidence supports AI — and delivered mid-draft, when students could still use them, rather than as a post-mortem. Teachers reviewed each batch before release; review averaged under a minute per essay, against eight to compose. The class-pattern report became the teachers' favorite feature within weeks: one teacher discovered two-thirds of her juniors misusing sources the same way and taught a fifteen-minute mini-lesson that no amount of individual commenting would have replaced. Her sentence went into the committee's final report: *"It reads the stack so I can teach the class."*

The dangerous moment arrived in week zero of the demo. The vendor's default configuration crossed the gate three ways simultaneously: comments released instantly with no teacher review, a tone engine that opened every response with person-directed praise ("You're a natural storyteller!"), and a "see suggested revision" button that rewrote the student's paragraph on request — the answer channel, fully built, one click deep. In the first pilot week, before the settings were locked down, teachers watched students paste in drafts, harvest the rewrites, and resubmit. Feedback volume up tenfold. Revision behavior — in the sense of students changing their own prose — near zero. The vendor called the button "scaffolding." The committee called it scaffolding without fading.

**The decision: six conditions written into the contract as binding.** Student-facing comments criteria-locked to district rubrics and delivered mid-draft. No comment reaches a student unreviewed — teacher release is a workflow step the vendor cannot disable. The praise engine and the rewrite button are off, contractually, with quarterly settings audits. Every released comment requires a logged student revision response — the loop-closing rule. Self-regulation and person-level communication stay teacher work, named as such in the implementation guide. Renewal at eighteen months depends on the district's own metric: blind-scored revision quality deltas and falling error recurrence across drafts — explicitly not turnaround time, comment volume, or satisfaction surveys.

## What Would Change My Mind

A preregistered classroom RCT showing that autonomous student-facing AI feedback — unreviewed by teachers — produces durable learning gains on unassisted transfer measures, without the negative-effect tail Kluger and DeNisi documented, would dismantle this chapter's central condition. The teacher-review gate rests on two premises: that machine comments still skew toward harm-prone registers, and that no one else catches the wrong-level ones. A system demonstrating reliably task- and process-level output, with revision uptake matching teacher-reviewed conditions across a full year, would convert the review requirement from gate to transition arrangement — and this book would owe its readers the update.

## Still Puzzling

The revision-uptake question is wide open: do students act differently on AI comments than on identical teacher comments — and does knowing the source change what they do? Early studies exist; nothing settled.

Where does criteria-based evaluation end? Steiss et al. found AI comparable on rubric-anchored feedback and slightly better on argumentation-focused feedback — which hints the safe niche may be wider than rubric-checking. Nobody has mapped its edges.

The compounding loop has no good answer yet: when drafts are partly AI-written and feedback is AI-generated, what exactly is the learning system optimizing — the student's writing, or a conversation between two models with a student relaying messages?

## Further Reading

**Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance. *Psychological Bulletin*, 119, 254–284.** The most important paper in this chapter: 607 effect sizes, d = 0.41, over one-third negative — and the theory explaining when feedback helps and when it wounds.

**Wisniewski, B., Zierer, K., & Hattie, J. (2020). The power of feedback revisited. *Frontiers in Psychology*, 10:3087.** The current meta-analytic center (d = 0.48), the heterogeneity warning, and the information-content moderator that should drive every comment-design decision.

**Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77, 81–112.** The three questions and four levels — the working vocabulary for classifying any comment, human or machine, in ten seconds.

**Steiss, J., et al. (2024). Comparing the quality of human and ChatGPT feedback on students' writing.** The head-to-head that draws this chapter's boundary: humans better on everything except criteria-based evaluation — both halves required reading before any procurement meeting.

**Mollick, E. (2024). *Co-Intelligence*.** The centaur division of labor — and the jagged-frontier caution that explains why AI holds up on rubric-checking while failing at developmental judgment, often within the same comment.

---

## Exercises

**Warm-up**

1. *(Recall — The distribution)* The chapter opens with a finding from Kluger and DeNisi that Hector half-remembers. State it precisely: what they studied, what the average effect size was, what fraction of interventions decreased performance, and what their theory says determines the sign.

2. *(Recall — Four levels)* Hattie and Timperley organize feedback into four levels. Name them in order from least to most effective. For each level, write one example comment on a student essay that would fall into that level.

3. *(Recall — Three implications)* The chapter derives three implications from the feedback mechanism. Name them, and for each explain why it indicts a common automation — a specific feature type a platform might offer.

**Application**

4. *(Transfer — Comment classification)* A feedback platform releases the following five comments on a student's history essay: (a) "Outstanding work — you clearly understand this period deeply!"; (b) "Your introduction needs improvement"; (c) "Your claim in paragraph 3 is not supported by the primary source you cite — revise your evidence or change your claim"; (d) "You are so close to mastering this!"; (e) "Your argument shifts from political to economic causation between paragraphs 2 and 4 — decide which causal chain you're making and sustain it." Classify each by Hattie-Timperley level, predict its sign using the Kluger-DeNisi logic, and identify which contains a usable next move. What does the distribution of these five comments tell you about whether this platform's default configuration should be teacher-reviewed before release?

5. *(Transfer — Audit design)* The chapter specifies an "answer-channel audit" using time-to-feedback-click distributions and rewrite-feature usage. Design a practical version of this audit for a school that has deployed an AI feedback platform for 90 days: what data you would request from the vendor, what specific patterns would confirm answer-channel behavior is occurring, and what design changes would interrupt it.

6. *(Transfer — Contract clause)* The case study produced six contract conditions. Take condition four — every released comment requires a logged student revision response — and draft it as procurement language specific enough that a compliance auditor could verify it without asking the vendor. Then identify the most likely workaround in practice (for example, a student logging a "revision" that changes one word) and add a clause that addresses it.

**Synthesis**

7. *(Combine — Full platform policy)* Design the complete implementation policy Hector's district adopted, filling in the specifics the chapter sketches: the exact criteria-lock prompt the district gives the AI, the teacher-review workflow (what the teacher sees, what actions are available, what the time budget is), the revision-log requirement (what counts as a logged revision, who sees it), the settings-audit schedule and process, and the eighteen-month renewal metric including how blind scoring is operationalized. Your policy should be specific enough that a new department chair could implement it without asking Hector.

8. *(Combine — Triage arithmetic)* The chapter argues that teacher review of AI-generated comments runs several times faster than composing comments, which frees hours for personal where-to-next notes. Design a time-use study that would confirm or disconfirm that claim for a specific department context: what baseline data you would collect, how you would define and measure "review time" versus "compose time," what the comparison condition is, and what result would confirm the triage arithmetic is sound — versus what result would indicate the arithmetic is wrong and the review burden is too high to sustain.

**Challenge**

9. *(Open — Autonomous feedback reversal)* The chapter's What Would Change My Mind section specifies the experiment that would dismantle the teacher-review gate: autonomous AI feedback showing durable gains on unassisted transfer without the negative-effect tail. Design that experiment: population, random assignment, what the autonomous AI condition must demonstrate about comment level distribution before it qualifies as a test (not a repetition of the failure mode), outcome measures and timing, and sample size reasoning. Then evaluate honestly: what is the single hardest design problem your experiment faces — and is it a solvable methodological challenge, or does it point to a structural limit on what autonomous feedback can be tested to show?
