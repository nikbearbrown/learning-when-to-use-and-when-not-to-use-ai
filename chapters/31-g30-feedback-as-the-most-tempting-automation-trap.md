# Chapter 31 — G30: Feedback as the Most Tempting Automation Trap

## The Decision on the Table

Hector Alvarez is director of secondary curriculum in a district of six high schools, and the procurement request on his desk has more political momentum than anything he has reviewed in years. The English department chairs, jointly, want an AI essay-feedback platform: students submit drafts, the system returns detailed comments in under a minute, and teachers — each carrying 150 students — stop spending Sundays buried in paper. The vendor's one-pager leads with the number everyone in the building already knows: "Feedback: effect size 0.70–0.73, among the most powerful influences on achievement. Our platform delivers it instantly, on every draft, for every student."

The superintendent is supportive; the teachers' association is supportive; the budget exists. Hector's hesitation comes from a single line he half-remembers from a research methods course: something about a third of feedback interventions making performance *worse*. If that is true, the district is not proposing to automate a good thing. It is proposing to automate a coin-weighted thing, at scale, in every English classroom simultaneously.

It is true. And it is the reason this influence — the most-cited claim in all of educational technology marketing — is the book's most tempting trap.

## What This Group Is

A single influence, classified: High band, AI-AUGMENTED, medium human irreducibility, **high** substitution risk, **partial** cognitive-work conflict.

In plain language: AI can genuinely help with feedback — parts of the work are mechanical, scale-starved, and well within current capability. But this row carries the dataset's most explicit warning label, because four features converge here that converge nowhere else. Feedback is the *highest-burden* teacher task, so the relief offer is real and the temptation maximal. It is the *most-cited* EdTech claim, so vendor pressure is constant. AI feedback has a *plausible surface* — machine comments look like expert comments, so quality failures are invisible at a glance. And uniquely, feedback carries *sign risk*: badly automated, it does not merely underperform; it can harm. Temptation times invisibility times sign risk is the trap.

The partial conflict names the learner-side hazard: a feedback channel that students can convert into an answer channel stops being feedback at all.

## The Influences

**Feedback (d = 0.70)** — rank 32 on the 2018 252-influence list. Before anything else, this chapter must do to its own number what it asks readers to do to vendors' numbers — because this is the book's most-quoted row, and sloppiness here would be fatal.

**The number everyone quotes, and the distribution nobody quotes.** Kluger and DeNisi (1996) meta-analyzed 607 effect sizes from feedback-intervention studies — 23,663 observations: average d = 0.41, and **over one-third of feedback interventions decreased performance.** Not "were less effective." Decreased it. Their Feedback Intervention Theory explains the sign flips: feedback that directs attention to the *task and its details* tends to help; feedback that directs attention to the *self* — praise, ego-involving comparison — routinely hurts. Every EdTech feedback pitch quotes the average and deletes the distribution.

**The current central estimate.** Wisniewski, Zierer, and Hattie (2020) — 435 studies, 994 effects, over 61,000 students: overall **d = 0.48**, with heterogeneity so large the authors state that feedback "cannot be understood as a single consistent form of treatment." The strongest moderator is *information content*: high-information feedback (what was wrong, why, what next) outperforms reinforcement-and-punishment-style feedback, with stronger effects on cognitive outcomes than motivational ones. Note what this means: the book's own 2018-list value of 0.70 runs high against the field's current meta-analytic center of 0.48 — an overstatement this chapter flags in its own dataset rather than waiting for a critic to find it.

**The working model.** Hattie and Timperley (2007) organize effective feedback around three questions — *Where am I going? How am I going? Where to next?* — operating at four levels: task, process, self-regulation, and self, with self-level feedback (praise) reliably least effective [verify — model structure cited from field knowledge; pull the full text before quoting verbatim]. The center of gravity is feed-*forward* and self-regulation — building the student's own error-detection — which is precisely the level automated systems address least.

One sentence to carry out of this section: feedback is not a vitamin whose value scales with dose and speed. It is a high-variance treatment whose *sign* depends on content.

## Why It Works

When feedback works, the mechanism is information a learner *uses* to close a gap: a clear picture of the goal, an accurate reading of current performance against it, and a usable next move — followed by the learner actually making that move. Three implications fall out, and each one indicts a common automation.

First, content decides the sign. Compare three machine-generatable comments on the same essay: "87% — great job, you're a strong writer!" (self-directed; the harm-prone category), "Your thesis is unclear" (a task verdict with no path), "Your second paragraph asserts X but your quotation shows Y — reconcile them" (task and process information with a next move). Same speed. Opposite mechanisms.

Second, the loop must close. Feedback nobody acts on has an effect size of zero, whatever its quality. Revision is where feedback becomes learning, which is why every metric in this chapter points at revision behavior rather than comment volume.

Third, speed — the one dimension where AI wins automatically — is the dimension least connected to the mechanism. Latency matters at the margins (feedback on work the student no longer remembers writing is weaker), but a fast wrong-level comment is just harm delivered promptly.

## What AI Can Safely Do

The head-to-head evidence draws the boundary with unusual precision. Steiss and colleagues (2024) compared expert human feedback with ChatGPT feedback on real student writing: humans were better on **every assessed dimension except criteria-based evaluation**, where the AI held its own — and the AI was slightly better on feedback focused on reasoning and argumentation. Both halves of that finding must travel together; quoting either alone misleads in opposite directions. The safe roles follow:

- **Draft criteria-locked, task- and process-level comments** against an explicit rubric — the niche where AI performance is documented as comparable — for teacher review before release.
- **Aggregate error patterns across a class**: "19 of 28 essays confuse correlation and causation in the second body paragraph" is feedback to *instruction*, the no-conflict neighbor of this row, and the use that turns 120 papers into tomorrow's reteach.
- **Speed low-stakes practice loops** — frequent retrieval checks and drafting exercises where fast task-level response is the point and stakes are low.
- **Support the feedback-giver.** The strongest documented AI feedback win so far is feedback *to the human instructor*: in the Tutor CoPilot study, expert-modeled live suggestions to tutors produced +4 percentage points overall and +9 for students of the lowest-rated tutors. The machine made the human's feedback better; the human stayed in the loop.

The triage arithmetic answers the workload objection. AI drafts criteria-based comments on all 150 essays overnight; the teacher reviews — deleting the harm-prone, personalizing a handful, reading the class pattern. Review-and-delete runs several times faster than compose; the saved hours fund the five personal where-to-next notes and the reteach. The book's classification hypothesizes that fast task-level AI feedback is the legitimate share, with relational and self-regulation feedback remaining human — a hypothesis about the division of labor, not a measured effect.

## The Substitution Trap

Three failure modes, in ascending order of subtlety.

**Unreviewed comments at scale.** Release machine feedback directly to students and the Kluger–DeNisi distribution applies with no human filter. Most platforms default to praise-heavy, person-directed language — the precise register the evidence flags as harm-prone — because warmth tests well with users. Automating feedback blind means automating something that, implemented blind, harms performance roughly one time in three.

**The feedback channel becomes an answer channel.** The dataset's conflict note names it: AI feedback can enable system-gaming. A "feedback" button that reveals the worked solution teaches students to click within seconds; practice accuracy soars; cold-test performance drops among the heaviest users — the Bastani signature (+48% on assisted practice, −17% on the unassisted exam, absent guardrails). The audit question for any feedback feature: *can the student convert the feedback channel into an answer channel?* If yes, the design is a solution dispenser in a feedback costume.

**Volume mistaken for value.** Ten times the comments with unchanged revision behavior is not ten times the feedback; it is noise with a turnaround-time metric. And the plausible-surface problem makes the failure invisible: AI comments read like expert comments (Scarfe and colleagues showed AI-generated text passes expert readers undetected), so nobody notices the wrong-level, generic, or subtly inaccurate ones without deliberately looking.

There is also a compounding loop worth naming for the procurement context: if students draft with AI and the platform gives AI feedback on those drafts, the system is partly grading its own prose — whose writing is being fed back on? Design must assume non-detection and move the stakes to supervised and revision-evidenced work.

## Case Study

Hector Alvarez ran a one-semester pilot in two schools before any district contract — and the pilot's design, not the vendor's demo, decided the outcome.

**The tool.** The essay-feedback platform. **The influence.** Feedback — presented to the committee with the full d-table on one slide: 0.41 (Kluger & DeNisi), 0.48 (Wisniewski et al.), 0.70 (the 2018 Hattie list), each with what was measured and when. The chairs' reaction to the over-one-third-negative figure reshaped the pilot before it began: the question changed from "how fast can students get comments?" to "which comments, and what happens after?"

**The useful moment.** Configured to the pilot's rules, the platform earned its keep. Comments were locked to the district's writing rubric — the criteria-based niche where the head-to-head evidence supports AI — and delivered *mid-draft*, when students could still use them, rather than as a post-mortem. Teachers reviewed each batch before release; review averaged under a minute per essay, against eight to compose. The class-pattern report became the teachers' favorite feature within weeks: one teacher discovered two-thirds of her juniors misusing sources the same way and taught a fifteen-minute mini-lesson that no amount of individual commenting would have replaced. Her sentence went into the committee's final report: "It reads the stack so I can teach the class."

**The dangerous moment.** The default configuration, demoed by the vendor in week zero, crossed the gate three ways at once: comments released instantly with no teacher review; a tone engine that opened every response with person-directed praise ("You're a natural storyteller!"); and a "see suggested revision" button that rewrote the student's paragraph on request — the answer channel, fully built, one click deep. In the first pilot week, before the settings were locked down, teachers watched students paste in drafts, harvest the rewrites, and resubmit — feedback volume up tenfold, revision *behavior* (in the sense of students changing their own prose) near zero. The vendor called the button "scaffolding." The committee, by then fluent in Chapter 27, called it scaffolding without fading, or a ghostwriter.

**The decision.** Procure, with the configuration written into the contract as binding conditions: (1) student-facing comments are criteria-locked to district rubrics and delivered mid-draft; (2) no comment reaches a student unreviewed — teacher release is a workflow step the vendor cannot disable; (3) the praise engine and the rewrite button are off, contractually, with the district auditing settings quarterly; (4) every released comment requires a logged student revision response — the loop-closing rule, and the source of the pilot's outcome data; (5) self-regulation and person-level communication — the where-to-next conference, the note on the final draft — remain teacher work, named as such in the implementation guide; (6) renewal at eighteen months depends on the district's own metric: blind-scored revision quality deltas and falling error recurrence across drafts, benchmarked against pre-pilot samples — explicitly not turnaround time, comment volume, or satisfaction surveys.

## The Phase Gate

**AI may** draft criteria-locked, task- and process-level comments for teacher review, aggregate error patterns across classes into instructional reports, accelerate feedback on low-stakes practice, and support live human feedback-givers with expert-modeled suggestions.

**The teacher must** review and release all student-facing comments, deleting harm-prone and wrong-level ones; own all self-regulation- and person-level feedback — the conferences, the where-to-next notes, the relationship in which hard feedback is hearable; and convert class-pattern reports into changed instruction. **The learner must** act on feedback: every comment that counts ends in a logged revision, because unused feedback has an effect size of zero — and a feedback channel the learner can mine for answers must be redesigned until they cannot.

**Evidence that learning improved is** revision quality on blind-scored drafts improving over time, error recurrence falling across successive pieces of work, and writing quality rising on supervised, unassisted tasks — never feedback volume, turnaround time, comment sentiment, or platform engagement.

## The Evidence Check

For any feedback product or policy, demand:

1. **Revision deltas, blind-scored.** Does the work measurably improve between drafts, scored by raters who cannot see which feedback condition produced it? This is the loop-closing metric, and it is the one vendors never lead with.
2. **Error recurrence curves.** The same student's same error class, tracked across assignments. Feedback that works extinguishes error patterns; feedback that doesn't produces beautifully commented repetition.
3. **Unassisted transfer.** Writing quality on supervised, in-class tasks where no platform is present — the only place the question "did the student learn, or did the channel?" gets a clean answer.
4. **The answer-channel audit.** Time-to-feedback-click distributions and rewrite-feature usage. A median click latency of a few seconds is students mining, not reading.
5. **A sign check.** Sample released comments and classify them by level (task, process, self-regulation, self). A platform whose output skews self-level is — per the best evidence in this literature — running a measurable risk of negative effect, at scale.

## Reader Exercises

1. **The reader audit.** Choose one feedback tool or routine in your setting — a platform, an autograder, your own comment habits. Write one sentence each: the mechanism (information the learner uses to close a gap), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Classify ten comments.** Take ten real comments — yours, a colleague's, or a platform's — and sort each by Hattie and Timperley level (task, process, self-regulation, self), then predict its sign using the Kluger–DeNisi logic (attention to task versus attention to self). Count how many of the ten carry a usable next move. Most people are surprised by their own distribution.
3. **Redesign the naive pilot.** Write the configuration memo that turns "students submit, AI comments instantly" into a gate-respecting workflow: the criteria-lock prompt, the teacher-review step, the revision-log requirement, and the renewal metric. Then compare your memo against the default settings of any platform you can access — every mismatch is a finding.

## What Would Change My Mind

A preregistered classroom RCT showing that *autonomous* student-facing AI feedback — unreviewed by teachers — produces durable learning gains on unassisted transfer measures, without the negative-effect tail Kluger and DeNisi documented, would dismantle this chapter's central condition. The teacher-review gate rests on two premises: that machine comments still skew toward harm-prone registers, and that no one else catches the wrong-level ones. A system demonstrating reliably task- and process-level output, with revision uptake matching teacher-reviewed conditions across a full year, would convert the review requirement from gate to transition arrangement — and this book would owe its readers the update.

## Still Puzzling

- The revision-uptake question is wide open: do students act differently on AI comments than on identical teacher comments — and does knowing the source change what they do? Early studies exist; nothing settled.
- Where does criteria-based evaluation end? Steiss et al. found AI comparable on rubric-anchored feedback and slightly better on argumentation-focused feedback — which hints the safe niche may be wider than "rubric-checking." Nobody has mapped its edges.
- The compounding loop has no good answer yet: when drafts are partly AI-written and feedback is AI-generated, what exactly is the learning system optimizing — the student's writing, or a conversation between two models with a student relaying messages?

## Further Reading

- **Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance. *Psychological Bulletin*, 119, 254–284.** The most important paper in this chapter and arguably in this book: 607 effect sizes, d = 0.41, over one-third negative — and the theory explaining when feedback helps and when it wounds.
- **Wisniewski, B., Zierer, K., & Hattie, J. (2020). The power of feedback revisited. *Frontiers in Psychology*, 10:3087.** The current meta-analytic center (d = 0.48), the heterogeneity warning, and the information-content moderator that should drive every comment-design decision.
- **Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77, 81–112.** The three questions and four levels — the working vocabulary for classifying any comment, human or machine, in ten seconds.
- **Steiss, J., et al. (2024). Comparing the quality of human and ChatGPT feedback on students' writing.** The head-to-head that draws this chapter's boundary: humans better on everything except criteria-based evaluation — both halves required reading before any procurement meeting.
- **Mollick, E. (2024). *Co-Intelligence*.** The centaur division of labor — and the jagged-frontier caution that explains why AI holds up on rubric-checking while failing at developmental judgment, often within the same comment.
