# Chapter 3 — G02: Safe Augmentation for Strong Learning Routines

## The Decision on the Table

Marisol Vega runs the instructional coaching program at a 700-student middle school, and her flagship project this year is a professional-development cohort: eight math and science teachers, meeting twice a month, with one shared commitment — replace end-of-unit cramming with spaced retrieval routines. The cohort is four months in. Teachers have built review calendars by hand, written retrieval questions on index cards and exit tickets, and argued productively about which October concepts deserve a seat in January's warm-ups. It is working, and it is exhausting. Building the spacing schedule for one course takes a teacher most of a planning period per unit; writing fresh retrieval items takes longer.

Then the district's LMS vendor flips on a feature called Smart Review. It does, by its own description, exactly what the cohort has been doing by hand: it schedules spaced review automatically, generates retrieval questions from uploaded unit materials, and delivers them to students as warm-ups. The eight teachers want it yesterday. Marisol's question is not whether the tool can do the job — it visibly can. Her question is which parts of the job were the point. The cohort spent four months learning something. If the tool absorbs the routine, does it absorb the learning that built the routine — the teachers' or the students'?

This is the first true group chapter of the book, and it starts in the friendliest territory the classification offers. That is deliberate. If you cannot write a phase gate where AI is safest, you will not write one where it is dangerous.

## What This Group Is

Twenty-one influences sharing one signature: above the hinge, **AI-AUGMENTED**, medium human irreducibility, **low** substitution risk, **no cognitive-work conflict**. Effect sizes run from 0.40 to 0.68 on the 2018 252-influence list, weighted average 0.50.

Translate the signature one dimension at a time. *AI-AUGMENTED* means the productive AI role is around the mechanism — preparing, scheduling, varying, recording, surfacing — not inside it. *Medium human irreducibility* means a teacher's judgment is load-bearing somewhere in every row: someone must decide what gets spaced, who gets accelerated, whether re-engagement is genuine. *Low substitution risk* means the learning-producing act is not the kind of thing AI output naturally replaces — a scheduling algorithm cannot accidentally do a student's remembering for them the way a summarizer does a student's summarizing. And *no cognitive-work conflict* means the way these tools work does not collide with the reason the influence works.

That makes G02 the book's safe shelf — the place where "use AI" is usually the right call and the phase gate is short. But read the signature honestly: it describes the group's center of gravity, not a blanket amnesty for all twenty-one rows. Low risk is a property to be preserved by design, not assumed by category. The job of this chapter is to show what preserving it looks like when the stakes are low, so the same moves are automatic later, when they are not.

## The Influences

The full group is a mixed shelf, and sorting it is the first skill. Three kinds of rows live here:

**Routines AI can genuinely run.** Spaced vs. massed practice (d = 0.60) — this chapter's anchor. Record keeping (0.52). Time on task (0.49). These are the cleanest augmentation cases in the entire dataset: the dataset's own notes call AI scheduling of spaced practice "a legitimate use case," with the teacher ensuring curriculum alignment and assessing transfer.

**Programs AI can support but not constitute.** Acceleration programs (0.68) — AI can pace a gifted student through advanced material; the placement decision and the social-emotional mentorship stay human. Enrichment programs (0.53), second/third-chance programs (0.53), comprehension programs (0.47), visual-perception programs (0.55), early years' interventions (0.44), teaching communication skills (0.43). The recurring pattern in the dataset's notes: AI handles content, structure, and re-attempt logistics; mentorship, diagnosis, accountability, and meaning-making discussion stay with people.

**Dispositions and conditions wearing program clothes.** Field independence (0.68) tops the group, and it is a cognitive style, not a lever — AI can design tasks that exercise field-independent processing, but the trait itself is not a button (Chapter 2's "not an intervention" reflex applies above the hinge too). Concentration/persistence/engagement (0.56), perceived task value (0.46), motivation (0.42), reducing anxiety (0.42), positive self-concept (0.41). For every one of these, the dataset's notes end the same way: the durable version of the disposition is built through human relationship, classroom culture, and tasks worth caring about. AI gets the surface layer — low-stakes practice environments, competence feedback, relevance framing.

All values are from the 2018 list and should be re-checked against the MetaX database near publication; group-mate "relations of high school to university achievement" (0.60) is, like field independence, an association rather than a program.

## Why It Works

Take the anchor, because its mechanism is the one the AI tool will either serve or quietly sand off.

Spaced practice beats massed practice — d = 0.60 for the comparison — for a reason that feels backwards: spacing makes review *harder*. Mass your review the night before and every item feels fluent, because it is still warm in memory. Space it across weeks and each return forces effortful retrieval of partly forgotten material. That effort is not friction on the way to the learning; it *is* the learning. Roediger and Karpicke's testing-effect studies put the same engine in one finding: being made to retrieve produces more durable memory than restudying, even though restudying feels better at the time. Forgetting, then effortful recall, then re-consolidation — the cycle strengthens precisely because it strains.

Hold that against the group's other rows and a shared shape appears. Time on task works when the time contains practice and feedback, not occupancy. Second-chance programs work when the re-attempt involves genuine re-engagement, not procedural repetition — the dataset's note draws exactly that line. Comprehension programs work when students do the meaning-making that the teacher-led discussion demands. In every case the mechanism is a human doing effortful cognitive or pedagogical work *on a schedule and structure that someone must maintain*. The structure is automatable. The effort is not — and in this group, helpfully, the structure and the effort are cleanly separable. That separability is what "no cognitive-work conflict" means in practice, and it is why this group is safe in a way that summarization (Chapter 28) and outlining (Chapter 4) are not.

One more reading of the mechanism, because it explains the whole group's medium irreducibility: deciding *what to space* is a curriculum judgment. An algorithm can optimize intervals; it cannot know that this year's students never consolidated proportional reasoning, or that the state assessment weights data analysis, or that Tuesday's class meltdown means tomorrow's warm-up should be confidence-building retrieval rather than maximal difficulty. The schedule is AI's; the syllabus of remembering is the teacher's.

## What AI Can Safely Do

This group is where AI earns its keep most honestly, and the list is long:

- **Run the spacing engine.** Compute review intervals per topic, resurface October's concepts in January, interleave topics, and adjust intervals per student based on retrieval success. This is the one task in the chapter the dataset endorses without a conflict warning.
- **Mass-produce retrieval variation.** Fresh versions of retrieval prompts at controlled difficulty, so students retrieve the idea rather than re-recognize the question. Item drafting is exactly the labor that was eating the cohort's planning periods.
- **Keep the records.** Attendance of ideas, not just students: which concepts have been retrieved, when, by whom, with what success — surfaced as patterns a teacher reads in minutes (record keeping, 0.52, is the dataset's quietest "legitimate use case").
- **Watch for drift.** Disengagement detection, time-on-task patterns, students whose retrieval success is sliding — flags that trigger a human conversation, not an automated consequence.
- **Structure second chances.** Draft re-attempt pathways, regenerate practice for retakes, schedule the follow-up check — while the teacher holds the line on whether re-engagement is real.
- **Curate upward.** Enrichment and acceleration content matched to a student the teacher has already decided is ready.

Notice what every bullet shares: AI is doing *teacher-side logistics and material supply*. Nothing on the list touches the student's retrieval moment itself. The book's classification hypothesizes that AI involvement here can preserve most of the influence's value — for spaced practice the appendix entry is d ≈ 0.55 [HYPOTHESIS] — but that is the author's structured conjecture, not a measured result, and nothing in this chapter leans on it.

## The Substitution Trap

A low-risk group still has three traps; they are just subtler than theft of the cognitive act.

**The hint that becomes the answer.** The retrieval moment is fragile. A review tool that shows the answer after ten idle seconds, autocompletes the response, or lets a student flip the card instantly has converted retrieval practice into recognition practice — same content, same dashboard, a fraction of the learning. This is the Bastani pattern from Chapter 1 in miniature: unguardrailed help inflates practice performance while quietly removing the strain that was the point. The tool's default settings, not its category, decide which side of the line it sits on.

**Optimizing the wrong number.** An adaptive system tuned to maximize in-app success will discover, correctly, that students score better when review is easier, more recent, and more massed. Left to its own objective function, a "smart" review tool will drift back toward the cramming the cohort spent four months escaping — because fluency is what its metrics can see. Somebody human has to check that the system is preserving desirable difficulty rather than laundering it away.

**Time saved that never returns.** The honest argument for this whole group is that AI buys back teacher hours. The notes for this chapter put it bluntly: time saving is only improvement if the saved time returns to learning — to feedback, conferences, diagnosis, relationship. If Smart Review's recovered planning periods are absorbed by compliance paperwork, the tool improved a workflow and changed nothing the hinge can detect. Worse: a teacher who stops building review schedules may also stop doing the curriculum thinking that schedule-building forced. The cohort learned more from constructing the calendars than the calendars themselves contained — which is exactly the question Marisol has to answer next.

## Case Study

The cohort's fifth meeting opened with Smart Review on the projector and Marisol asking one question before anyone touched the pilot toggle: *list what we learned this fall that the tool must not undo.* The answers became the adoption conditions.

**The tool.** The LMS vendor's Smart Review module: automated spacing schedules, generated retrieval items, student-facing warm-ups, teacher dashboard. **The influence.** Spaced vs. massed practice, d = 0.60 — with the mechanism stated in the cohort's own words: the forgetting is load-bearing.

**The useful moment.** The pilot, in two classrooms first, was a genuine relief. The tool resurfaced eight-week-old concepts no teacher would have had bandwidth to rotate back in; it generated four variants of each retrieval prompt, killing the answer-memorization the index cards had bred; its dashboard showed one teacher that her students' retention of unit rates was collapsing at the three-week mark, which redirected an entire re-teach. Item quality was uneven — about one prompt in six was misaligned or trivially answerable — so the cohort instituted a fifteen-minute weekly review where each teacher skimmed and pruned the coming week's items. Planning-period savings, after pruning: roughly two hours per teacher per week, which Marisol contractually reclaimed for the cohort's student-work analysis protocol.

**The dangerous moment.** Three weeks in, a teacher noticed her students' in-app accuracy climbing while their Friday closed-book quizzes stayed flat. The cause took ten minutes to find: Smart Review's default "support mode" revealed the answer after one wrong attempt and re-queued the item the *same day* — recognition and re-massing, the two failure modes, shipped as kindness. Student accuracy was measuring exposure, not memory. The vendor called the settings "frustration reduction." The cohort called them what they were: the mechanism, refunded.

**The decision.** Adopt, with conditions written into the pilot memo: (1) support mode off — retrieval attempts are closed-book, answers revealed only after a committed response, re-queue intervals never compress below the spacing floor; (2) teachers review and prune generated items weekly — the tool drafts, the teacher owns alignment; (3) reclaimed planning time is scheduled into the cohort's protocol, not released into the building's ambient demands; (4) the evidence standard is delayed and unaided — monthly cumulative quizzes, no devices — with in-app accuracy explicitly ruled out as a success metric; (5) one cohort meeting per semester re-runs the calendar-building exercise by hand with new teachers, because the judgment that built the routine has to keep being taught even though the routine is now automated.

## The Phase Gate

**AI may** compute and run spacing schedules; generate and vary retrieval prompts at teacher-set difficulty; keep records of what has been retrieved, when, and how successfully; flag disengagement and retention drift; and draft re-attempt pathways and enrichment sequences for students the teacher has already placed.

**The teacher must** decide what enters the spacing rotation and why; review generated items for alignment and difficulty; keep retrieval moments closed-book and effortful by controlling the tool's help settings; verify that re-engagement in second chances is genuine; and return saved time to feedback, diagnosis, and relationship. **The learner must** do every act of retrieval unaided — the strain is non-transferable.

**Evidence that learning improved is** performance on delayed, cumulative, unaided assessment — material from weeks ago, retrieved cold — trending up against baseline, plus transfer items the review system never showed.

## The Evidence Check

For any tool claiming this group's territory, demand:

1. **Delayed unaided performance.** Cumulative closed-book checks at four-plus weeks' delay, compared with the pre-tool baseline. This is the only number that can vindicate a spacing tool, because durability is the entire claim.
2. **Transfer beyond the item bank.** Performance on problems the system never presented. A tool can teach its own items; the influence is about teaching the idea.
3. **The settings audit.** Inspect the defaults: When are answers revealed? Can intervals compress? What does the adaptive engine optimize? A spacing tool's pedagogy lives in its configuration screen.
4. **Where the saved time went.** An accounting — even informal — of what the recovered teacher hours now contain. If the answer is "nothing visible," the tool's main benefit has evaporated.

What does not count: in-app accuracy, streaks, completion rates, items generated, or how much teachers like the dashboard. (They will like the dashboard.)

## Reader Exercises

1. **The reader audit.** Pick one routine-support tool in your setting — a review app, an LMS scheduler, an adaptive practice system. Write one sentence each: the mechanism (effortful practice on a maintained structure), the safe AI support, the forbidden substitution (usually a help setting, not a feature), and the proof that learning happened.
2. **Run the settings inspection.** Open the actual configuration screen of one tool your students use for practice. Answer three questions in writing: when does it reveal answers, what does its adaptivity optimize, and can a student complete a session without one act of genuine retrieval? Apply the Bastani rule: any path to success that bypasses the effort is a path the weakest students will find first.
3. **Produce the pilot memo.** Draft a one-page adoption memo for Smart Review or its local equivalent, using the case study's five conditions as a template but rewritten for your context. Include the evidence standard and the settings requirements as contract language a vendor would have to accept.

## What Would Change My Mind

The claim at risk in this chapter is that scheduling and item generation can be fully delegated without loss — that the structure and the effort are cleanly separable. A study showing that teachers who hand off review-calendar construction subsequently lose measurable curricular diagnosis ability — or that their students' outcomes degrade relative to hand-built spacing even with identical settings — would mean the routine-building was itself a load-bearing teacher-learning mechanism, and this group's "low substitution risk" label was scored against the student alone when it needed to be scored against the teacher too. I would then move spacing tools toward Chapter 8's logic: scaffolds for novice teachers, faded as judgment develops.

## Still Puzzling

- Where is the floor on automating *selection*? A tool that schedules teacher-chosen content is clearly safe; a tool that also chooses what to space is doing curriculum. The group's signature says medium irreducibility, but no one has mapped which selection decisions can move without loss.
- Adaptive spacing personalizes intervals per student — almost certainly good for memory, but it dissolves the shared class rhythm of "everyone wrestles with October today," and some of the cohort's best discussion came from that synchrony. Memory optimization versus collective experience is a trade nobody is pricing.
- The dispositional rows (motivation, anxiety, self-concept) sit in this group on the strength of AI's surface contributions. Whether sustained AI-mediated success experiences can feed durable self-efficacy without a trusted adult in the loop is an open empirical question — Chapter 5 inherits it.

## Further Reading

- **Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science*, 17(3), 249–255.** The retrieval-effort engine under this chapter's anchor influence, in its cleanest experimental form.
- **U.S. Department of Education, Office of Educational Technology (2023). *Artificial Intelligence and the Future of Teaching and Learning*.** The policy frame this chapter operationalizes: humans in the loop, AI on the logistics, judgment never delegated.
- **Visible Learning MetaX, research methodology and the d = 0.40 hinge (visiblelearningmetax.com).** Where to re-check every number quoted here before relying on it, and the honest account of what the hinge does and does not mean.
- **Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77(1), 81–112.** Why the dashboards in this chapter only matter when they change what a teacher or learner does next.
