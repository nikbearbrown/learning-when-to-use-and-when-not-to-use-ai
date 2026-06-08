# Chapter 20 — G19: Problem Solving and Expectations Need Human Calibration

## The Decision on the Table

André Boucher chairs the mathematics department at Whitfield Middle School, and this spring he is holding two proposals that arrived a week apart and, he is slowly realizing, are the same proposal.

The first came from his own teachers. The department is two years into a thinking-classrooms overhaul — non-routine problems, vertical whiteboards, students doing mathematics instead of watching it — and the bottleneck is task supply. Good non-routine problems are brutally expensive to write: rich enough to sustain struggle, accessible enough to start, with low floors and high ceilings. The teachers want to use a generative AI workflow to draft problem variants, anticipate misconceptions, and produce extension ladders — a task factory with humans doing quality control.

The second came from the district. Whitfield's new learning platform includes a "predicted proficiency" feature — a per-student forecast of end-of-year math performance, refreshed weekly — and the district's improvement office suggests teachers use it to "differentiate problem-solving experiences": rich tasks for students predicted to handle them, scaffolded routines for students predicted to struggle. An "expectations audit" consultant has also pitched the leadership team: her workshop uses AI analysis of classroom data to show teachers their own patterns of who gets asked the hard questions.

André's unease has a precise shape. The first proposal uses AI to *raise* the demand on every student. The second uses AI to *predict* which students can handle demand — and routes the demand accordingly. One of these is calibration. The other is prophecy with a rubric. This chapter is about telling them apart.

## What This Group Is

Two influences, classified: Above hinge, **AI-AUGMENTED**, **high human irreducibility**, low substitution risk, **partial cognitive-work conflict**. Effect sizes 0.43 to 0.68 on the 2018 252-influence list, weighted average 0.56.

The pairing looks odd until you see what the dataset saw: both rows are *calibration problems*. Problem-solving teaching works only when the difficulty is tuned — struggle that is productive rather than crushing, help that arrives late enough to matter and early enough to prevent despair. Teacher expectations work only when beliefs are tuned — high enough to offer real demand, provisional enough to update on evidence. In both rows the tuning is the irreducibly human act, and in both rows AI arrives with a strong opinion of its own. That is the partial conflict flag: AI's default behavior — helpfulness on request, prediction from priors — pushes against each row's mechanism. An AI that helps a struggling student is doing what it was built to do and dismantling the struggle the task was built to produce. An AI that predicts a student's proficiency is doing what it was built to do and manufacturing the expectation the teacher was supposed to hold lightly.

The hypothesized AI-mediated effects carry the division of labor: AI co-design of problem scenarios at d ≈ 0.45 [HYPOTHESIS], with heuristic modeling and error processing kept human-guided; AI surfacing of differential expectation patterns at d ≈ 0.30 [HYPOTHESIS], with the recalibration of beliefs left to the teacher, where it has to happen because that is where the beliefs live.

## The Influences

**Problem-solving teaching (d = 0.68)** — rank 37. The influence is the *teaching* of problem solving — heuristics, strategy selection, planning and monitoring, the disciplined autopsy of failed attempts — not the mere assignment of problems. The lineage runs from Pólya's four phases through decades of strategy-instruction research, and the consistent finding is that students get better at solving unfamiliar problems when they are taught a repertoire of moves *and* given real problems on which to deploy them, with the deploying done by the student. Liljedahl's thinking-classrooms research is the modern classroom translation: structures (random groups, vertical surfaces, problems before technique) engineered to produce thinking by making non-thinking behaviors — mimicking, waiting for the takeover, stalling until the teacher solves it — structurally unavailable. The mechanism's fuel is productive struggle; the teacher's craft is keeping struggle productive.

**Teacher expectations (d = 0.43)** — rank 107. The d here describes the association between what teachers expect and what students achieve, and the honesty notes come in a cluster. The founding study — Rosenthal and Jacobson's Pygmalion — is genuinely contested [contested — the original's psychometrics drew lasting criticism; replication produced a smaller, real effect concentrated in younger grades and stigmatized groups]. Much of the association is *accuracy*: teachers expect more from students who are in fact achieving more, so the arrow runs both ways. The leverage in the row is the slice that is causal, and the mediating channel is behavioral, not telepathic: expectations become task rigor, wait time, question difficulty, feedback depth, warmth, and grouping. Rubie-Davies's work on high-expectation teachers shows the pattern at the teacher level: some teachers run high-demand, high-support classrooms for *everyone*, and their students — across the prior-achievement range — rise toward the demand. The influence is not "think nice thoughts"; it is "allocate opportunity as if growth were the default."

The rows interlock at the point of André's unease: *who gets the rich task* is simultaneously a problem-solving decision and an expectations decision. Every routing of demand is a bet about a student, and the bets compound.

## Why It Works

**Problem solving first.** The skill being built is what to do when you do not know what to do — and that skill is constructed only in its own presence. A student who is rescued at the first stall practices being rescued. The research grammar behind productive struggle is consistent: attempting before instruction, even attempting *wrong*, prepares the mind to learn from the resolution; the struggle generates the questions that the explanation then answers. This is why the conflict flag sits on this row. The canonical evidence in this book is Bastani and colleagues' field experiment: unfettered GPT-4 access during practice inflated practice performance 48 percent and *cut* subsequent unassisted exam performance 17 percent — the machine absorbed the struggle, and with it the learning — while the guardrailed tutor arm (+127 percent practice, ≈0 exam harm) showed that design, not abstinence, is the variable. An AI that solves on request, sitting open during problem-solving time, is a struggle-removal appliance.

But the same analysis locates AI's legitimate seat: *upstream* of the struggle. Writing the problem is not the student's cognitive work — it never was; textbook authors did it for a century. Task design, variant generation, misconception anticipation, extension ladders: all of it is preparation that makes the human-calibrated struggle possible at scale. The teacher's irreducible work happens *during* — reading the room's frustration, distinguishing productive friction from despair, delivering the smallest hint that restores motion (Liljedahl's "keep thinking" moves), and running the whole-class debrief where strategies get named, compared, and turned into repertoire. That debrief — error processing, heuristic modeling — is where problems become problem-solving *teaching*, and the dataset is explicit that it stays human.

**Expectations second.** The mechanism is opportunity allocation, which means it is auditable — expectations leave fingerprints in observable behavior: who got called on, who got the follow-up probe, who got the rich task versus the worksheet. This is where AI helps, because the fingerprints are exactly the kind of distributed, high-volume pattern humans cannot see in themselves and machines count effortlessly. And it is where AI harms, because a *predicted proficiency* column is a manufactured expectation with a weekly refresh — prior achievement laundered into prophecy and handed to the person whose openness was the influence. Route rich tasks by prediction and the loop closes by itself: the predicted-low student receives the scaffolded routine, never meets the demanding task, learns less of the problem-solving repertoire, performs as predicted, and the model — vindicated — predicts lower still. Chapter 18 called this the labeling machine. Here it has a curriculum attached.

The deep symmetry of the group: both mechanisms die from premature certainty. The rescue is certainty about the *solution*; the prediction is certainty about the *student*. Calibration — of difficulty, of belief — is the practice of withholding certainty while the evidence is still arriving. Machines are bad at withholding; that is what they are for. So the humans must do it on purpose.

## What AI Can Safely Do

- **Run the task factory.** Draft non-routine problems to specification — context, floor, ceiling, mathematical target; generate variant families so groups get isomorphic-but-different problems; produce extension ladders for early finishers. Teacher review remains the quality gate (a plausible-looking task with a degenerate solution path is this factory's hallucination mode).
- **Anticipate the misconceptions.** For each task, generate the predictable wrong turns and what each one reveals — the teacher's pre-brief for hint calibration, replacing what only twenty years of experience used to supply.
- **Equip the debrief.** Cluster student strategies from photographed whiteboards, suggest the sequence for sharing (concrete to abstract), draft the "naming" language for strategies students invented — preparation for the human-led discussion, never its replacement.
- **Audit the allocation.** Count the fingerprints: who received which task tier, who got asked the extending question, wait-time patterns by student — surfaced privately to each teacher as a mirror (the consultant's workshop, minus the workshop). The dataset's d ≈ 0.30 [HYPOTHESIS] for expectation work lives here: detection by machine, recalibration by human.
- **Blind what can be blinded.** Strip names from work samples before grading and before task-routing decisions, where feasible — removing the expectancy channel from judgment rather than informing it.

## The Substitution Trap

**The rescue on demand.** The student-facing version: AI access during problem-solving time, framed as support. Every "I'm stuck" becomes a solved step; every solved step is repertoire the student did not build; and the Bastani signature (+48 assisted, −17 unassisted) is already booked before the unit test reveals it. The trap is seductive at exactly Whitfield's vulnerability — struggle looks like unproductive classroom time to anyone watching through a window, and the AI makes the room look efficient. The conflict is structural: helpfulness is the product. If the AI is reachable mid-struggle, the struggle is optional, and optional struggle is no struggle at all.

**The prophecy router.** The system-facing version: predicted proficiency deciding who gets the rich task. Note what makes it worse than an old-fashioned track: it updates weekly (so it *feels* responsive), it is expressed in decimals (so it *feels* precise), and its training data is prior achievement (so it is prior achievement, wearing a forecast's clothes — Chapter 25's row, weaponized). Differentiation-by-prediction inverts the high-expectation teacher's practice, which is demand for all with support calibrated in the moment — by a human watching *this* attempt, not a model summarizing last month's.

**The audit that becomes a verdict.** Even the expectations audit has a trap inside it: pattern reports on teachers, routed to evaluators instead of to the teachers themselves, convert a recalibration instrument into a surveillance instrument — and teachers, like students, perform differently under a label. The fingerprint data earns its keep only as a private mirror with a development conversation attached.

## Case Study

The department took both halves of André's realization to the leadership team, and Whitfield ended up adopting one proposal, amputating the second, and salvaging its useful organ.

**The tool.** The generative task workflow, plus the platform's analytics — with the predicted-proficiency feature's fate the actual decision. **The influences.** Problem-solving teaching, d = 0.68, and teacher expectations, d = 0.43 — presented with the contested Pygmalion history and the accuracy-versus-causation caveat aloud, because André wanted the department persuaded by the mechanism, not the folklore.

**The useful moment.** The task factory changed the department's economics within a month. A teacher who needed a low-floor, high-ceiling problem on proportional reasoning for Tuesday could have four candidate tasks, a misconception pre-brief, and three extensions by Monday afternoon — work that previously consumed a Sunday or simply didn't happen, defaulting the class back to the worksheet. Quality control earned its place fast: roughly one generated task in five had a flaw a teacher caught on review — a degenerate shortcut, an ambiguous condition, a context that quietly answered the question. The teachers began keeping a "kill log" of rejected tasks, which became, unexpectedly, the best professional development artifact of the year: nothing teaches task design like autopsying machine failures together.

**The dangerous moment.** The proficiency router nearly slipped in through kindness. A seventh-grade teacher, overwhelmed mid-February, turned on the platform's "suggested grouping" — which quietly sorted her sections by the prediction column and assigned the rich tasks to the top two groups. For three weeks, eleven students predicted below proficiency received only scaffolded routine practice. What surfaced it was the department's own allocation audit: André's monthly report showed those eleven students' rich-task exposure at zero, a flat line nobody had chosen on purpose. The teacher's response became the department's catchphrase for the year: "I didn't lower my expectations — I outsourced them."

**The decision.** (1) The task workflow adopted department-wide: AI drafts, teachers gate, kill log maintained. (2) AI unavailable to students during in-class problem solving; the struggle is the syllabus. (3) Predicted-proficiency display disabled in all teacher-facing views — prediction columns are labels with a refresh rate — while the underlying analytics feed one thing only: the monthly allocation audit, delivered privately to each teacher with rich-task exposure, questioning patterns, and wait-time distributions, discussed in pairs, never filed. (4) Evidence check fixed for spring: unassisted performance on novel non-routine problems against the fall baseline, plus the allocation audit's equity trend — demand distributed by design, not by forecast.

## The Phase Gate

**AI may** draft and vary non-routine tasks to teacher specification; generate misconception pre-briefs and extension ladders; cluster student strategies and prepare debrief materials; blind work samples for grading; and privately surface each teacher's opportunity-allocation patterns.

**The human must** gate every task before students see it; calibrate hints and struggle in the moment, with AI out of students' reach mid-problem; lead the strategy debrief where repertoire gets built; and own all expectations — reading the audit, recalibrating beliefs, and keeping every machine prediction out of routing decisions and teacher-facing displays.

**Evidence that learning improved is** unassisted student performance on *novel* non-routine problems, trending up across the year; strategy repertoire visible in student explanations; and the allocation audit showing demanding work reaching the full roster — especially students whose prior achievement would have predicted otherwise.

## The Evidence Check

For any tool or initiative touching this group, demand:

1. **Novel-problem transfer, unassisted.** Performance on unfamiliar problems, no AI in the room, fall versus spring. Practice-time performance with help available is the +48 that conceals the −17.
2. **The struggle ledger.** Observational evidence that students stall, persist, and recover — time-to-abandon trending up, takeover moves (by teacher *or* machine) trending down. A frictionless classroom is a non-learning classroom wearing a smile.
3. **Allocation equity.** Rich-task exposure, hard-question distribution, and wait time by student subgroup and by prior-achievement band. The expectations influence lives or dies in this table.
4. **Prediction containment.** Verify — in the configuration, not the policy memo — that proficiency forecasts touch no routing decision and no teacher-facing display. A prediction column that is technically present and visually prominent is a decision already made.

What does not count: practice-platform accuracy with hints enabled, task-generation volume, teacher satisfaction with the time saved (real, but not learning), or the audit's existence without the conversations it was supposed to start.

## Reader Exercises

1. **The reader audit.** Pick one problem-solving routine in your setting. Write one sentence each: the mechanism (calibrated productive struggle plus human-led strategy debrief), the safe AI support (upstream task work; private allocation mirrors), the forbidden substitution (mid-struggle rescue; prediction-routed demand), and the proof that learning happened (novel-problem transfer, unassisted).
2. **Run the factory with a kill log.** Have an AI draft three non-routine tasks for next week's topic, to your specification. Review them as a gate, not a consumer: find the flaw in at least one (it is usually there). Log what you rejected and why — then notice how much sharper your specification gets on the second round.
3. **Audit yourself before auditing anyone.** For one week, tally two of your own fingerprints: who got your hardest question, and how long you waited before helping. Compare against your roster's prior-achievement bands. You now know whether the consultant's workshop has a customer — and you found out privately, which is the only way the mirror works.

## What Would Change My Mind

On the problem-solving half: replicated classroom evidence that *well-designed* AI tutoring during problem solving — attempt-gated, hint-laddered, answer-withholding — produces equal or better novel-problem transfer than human-calibrated struggle would move me from "AI out of the room" to "AI as the calibrated assistant," and the Bastani guardrailed arm (+127/≈0) is honest grounds for thinking that experiment could someday succeed. The current gap is that ≈0 exam harm is not the same as positive transfer of *strategy repertoire*, which no AI arm has yet demonstrated. On the expectations half: evidence that prediction-informed routing, in practice, *raises* demand for low-prior students more often than it lowers it — the opposite of every tracking literature precedent — would rehabilitate the router. I would want the allocation audit, not the vendor, to be the witness.

## Still Puzzling

- The hint ladder problem is unsolved in both species: human teachers also rescue too early (Liljedahl documents it relentlessly). Is a well-tuned machine hint policy eventually *better* calibrated than a tired human's mercy at 1:45 p.m.? The honest answer is: possibly, and nobody has run the comparison against a thinking-classroom control.
- Expectation effects concentrate in students who carry stigmatized labels — which means the audit matters most exactly where the data is sparsest and noisiest. Small-n mirrors mislead; how do you keep a per-teacher audit honest at classroom sample sizes?
- The task factory's kill log made teachers better task designers. Does the factory eventually atrophy the same skill in the next generation of teachers, who will never write a task from scratch? The Tutor CoPilot question — does the assist build the assisted? — has a curriculum-side twin, and no one has measured either fading curve.

## Further Reading

- **Liljedahl, P. (2021). *Building Thinking Classrooms in Mathematics, Grades K-12*.** The classroom engineering of productive struggle — and the catalog of takeover behaviors that AI-on-demand reproduces at scale.
- **Pólya, G. (1945). *How to Solve It*.** The original heuristic repertoire; still the clearest statement of what problem-solving *teaching* is supposed to leave behind in the student.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The +48/−17 unguardrailed signature and the +127/≈0 guardrailed contrast — this chapter's struggle argument, measured.
- **Rubie-Davies, C. M. (2015). *High Expectation Teaching*.** Expectations as observable practice — opportunity allocation, grouping, feedback — rather than sentiment; the behavioral checklist behind this chapter's audit.
- **Rosenthal, R., & Jacobson, L. (1968). *Pygmalion in the Classroom*.** Read with its critics for the honest version: expectancy effects real, smaller than legend, concentrated where labels already do their worst — which is precisely the population prediction-routers misroute.
