# Chapter 13 — G12: Self-Regulated Learning in the Danger Zone

## The Decision on the Table

Priya Natarajan directs the Academic Success Center at a state university — the study-skills courses, the exam-prep workshops, the one-on-one learning consultations that catch first-generation students before the first midterm does. This fall the university licensed an AI study assistant for every enrolled student, integrated into the LMS, and the provost's office has asked Priya's center to "lead adoption." The assistant is good. It builds study schedules from a syllabus, generates practice quizzes, explains confusing passages, drafts flashcards, summarizes readings, and answers questions at 2 a.m. in the tone of an infinitely patient TA.

Priya's consultants have spent October watching what students actually do with it, and the pattern has a shape. Students arrive at consultations with gorgeous AI-generated study plans they have not followed, flashcard decks they have never tested themselves on, and summaries of readings they have not read. One sophomore, asked how she studies for biology, opened the assistant and showed Priya the prompt she uses: *"Make me a study guide, quiz me, and if I get it wrong just explain it."* Her usage logs are immaculate. Her midterm was a 61.

The provost wants a campus rollout plan with the center's name on it. Priya's actual question is harder: the center's entire mission is teaching students to regulate their own learning — and the university has just handed every student a machine that will happily do the regulating for them.

## What This Group Is

Six influences: above the hinge, **AI-AUGMENTED**, medium human irreducibility, **high substitution risk**, **partial cognitive-work conflict**. Effect sizes 0.45 to 0.57 on the 2018 252-influence list, weighted average 0.51.

The chapter title says danger zone, and the signature explains why. These influences are all *learner-side processes* — planning, self-questioning, self-monitoring, studying, writing — and every one of them is a process AI performs fluently. The partial conflict flag marks the structural problem: these influences work only when the learner runs the process, and the tool's most natural behavior is to run the process instead. Augmented is the right classification — AI can genuinely scaffold each of these — but the scaffold and the substitute are the same product in different configurations, separated by nothing but design choices and habits of use.

What makes this group more dangerous than Chapter 10's is recursion. There, AI could substitute for a practice attempt. Here, AI can substitute for the *regulatory loop itself* — the planning, monitoring, and adjusting that decide all the other attempts. A student who outsources retrieval loses an encounter. A student who outsources self-regulation loses the machinery that schedules every future encounter — and feels, the entire time, like an unusually organized student.

## The Influences

**Mastery learning (d = 0.57)** — rank 57 of 252. Instruction organized so students reach criterion on each unit before advancing, with feedback-and-correct loops in place of fixed pacing. The dataset's caution is specific: software-defined mastery typically assesses procedural retrieval, vendors' claims of "100 percent mastery" are unsupported, and deep transfer plus the accountability of self-pacing need human oversight. Hypothesis: AI mastery gating is legitimate at d ≈ 0.50 [HYPOTHESIS]; the teacher validates transfer and unsticks the stuck.

**Self-verbalization and self-questioning (d = 0.55)** — rank 63. Learners explaining to themselves, interrogating their own understanding. The mechanism conflict is written into the dataset's row: AI must *require* the verbalization, never supply it. An assistant that answers the question the student should have asked themselves has performed the influence's signature act on the wrong side of the table. Hypothesis d ≈ 0.40 [HYPOTHESIS].

**Self-regulation strategies (d = 0.52)** — rank 76. Goal-setting, monitoring, strategy adjustment — the executive loop. The dataset names the failure mode this chapter is built around: perpetual AI scaffolding prevents internalization; systematic *fading* is required. Hypothesis d ≈ 0.40 [HYPOTHESIS].

**Questioning (d = 0.48)** — rank 88, **study skills (d = 0.46)** — rank 95, and **writing programs (d = 0.45)** — rank 97. The supporting cast, each with the same grammar: AI generates question sets but live adaptive questioning is human; AI scaffolds study-skill practice but must not execute the skills; and — the dataset's bluntest line in the whole group — AI ghostwriting is the *antithesis* of a writing program. Writing carries the group's highest mechanism-conflict risk: the influence exists because composing is thinking, and the tool's core competence is composing. Hypotheses d ≈ 0.35 [HYPOTHESIS] each.

One provenance note: study-skills research has always shown that training transfers best when embedded in real course content rather than taught generically — a nuance that matters later, because the AI assistant is embedded in everything.

## Why It Works

The group's unifying mechanism is the **internalized executive loop**: plan, attempt, monitor, adjust. Every influence here is a facet of it. Mastery learning is the loop imposed externally until the criterion habit forms; self-questioning is the monitor step made audible; study skills are the loop's tactics; writing is the loop running at full depth, where composing forces planning, monitoring, and revision in every sentence.

Two facts about the loop carry the chapter. First, it is trainable — this is among the most replicated practical findings in education, and the reason the group sits above the hinge. Strategy instruction works; self-questioning training works; the EEF's evidence reviews put metacognitive and self-regulation approaches among the highest-yield, lowest-cost interventions available. Second, it is trained *by being run, effortfully, by the learner* — with support that fades. The literature's load-bearing concept is internalization: external regulation (a teacher's pacing, a worksheet's prompts, a parent's nagging) becomes self-regulation only through a managed handoff. Scaffolding that never fades is not scaffolding. It is a permanent prosthetic, and the muscle underneath atrophies on schedule.

Now place the AI assistant against that mechanism. It is the most capable external regulator ever mass-distributed: it plans, prompts, monitors, summarizes, and adjusts — tirelessly, personally, forever. Configured as a coach that asks and then fades, it is plausibly the best self-regulation training tool yet built. Configured as it ships — helpful by default, answering whatever is asked — it is a machine for ensuring the handoff never happens. And the evidence that learners will not self-police the difference is already in: Bastani's students with unrestricted access performed 48 percent better in practice and 17 percent worse on the unassisted exam, and — most relevant to this chapter — the working paper by Poulidis, Bastani, and Bastani on chess academies suggests that self-regulation alone does not prevent over-reliance on AI assistance; structural constraints did what willpower could not (working paper, unreviewed — weight accordingly). The group whose entire subject matter is willpower-plus-strategy cannot assume willpower-plus-strategy will protect it.

## What AI Can Safely Do

- **Run the mastery bookkeeping.** Track criterion per objective, schedule spaced re-checks, gate advancement on demonstrated retrieval — with the teacher validating transfer beyond the procedural and intervening where a student is stuck or gaming the gate.
- **Prompt, then shut up.** Ask the self-questions — "What's the main claim of the section you just read? What would you test yourself on?" — and require the student's answer before anything else is offered. The Socratic configuration: the assistant interrogates; the student verbalizes.
- **Coach the plan without writing it.** Elicit the student's own study schedule with questions about deadlines, weak topics, and realistic hours; critique it; never hand over a finished plan to a student who hasn't drafted one.
- **Generate the practice apparatus.** Quiz items from course material, retrieval prompts, spaced schedules — the testing-effect infrastructure of Chapter 10, applied to a student's own materials.
- **Respond to writing the student produced.** Criteria-anchored feedback on a draft — where Steiss and colleagues found AI closest to expert human feedback — plus diagnostic questions. Never sentences. Never paragraphs. Never the draft.
- **Fade on a schedule.** The configuration almost nobody ships: support that ratchets down as competence ratchets up, with the goal of its own obsolescence made explicit to the student.

## The Substitution Trap

The trap here is uniquely comfortable, because every act of substitution is indistinguishable — from the inside — from being a good student.

**The outsourced loop.** The sophomore's prompt — *make me a study guide, quiz me, explain it when I'm wrong* — delegates planning (the guide), monitoring (the quiz), and adjustment (the explanation) in a single sentence. What remains for her is compliance: she does what the machine schedules, the way a child does what a parent schedules. Her experience is of diligence; her logs show diligence; what never runs is the loop the d values belong to. She is not lazy. She is *externally regulated by subscription*, and the regulation is good enough to keep her feeling organized all the way to the 61.

**The vanished verbalization.** Self-questioning dies quietly the moment asking the assistant is easier than asking yourself. The two acts share a grammar — a question is formed, an answer arrives — but in one the student searches their own understanding and finds its edges; in the other they search the model's. The edge-finding was the influence.

**Ghostwritten thinking.** The writing row deserves its own alarm. A writing program's d = 0.45 was earned by programs that made students compose more, with structure and feedback — because composing is where planning, organizing, and revising fuse into thought. The assistant will compose on request, beautifully. Each delegated draft is a session of the loop's hardest workout, skipped. The artifact improves; the writer doesn't — Chapter 39 takes the full case, but the principle lands here, where the writing program meets the study assistant in every student's browser.

**The fading that never comes.** The structural trap beneath all three: no commercial assistant has an incentive to fade. Engagement metrics reward dependence. The product that successfully internalizes the loop loses its user — which means the influence's most important design requirement and the vendor's business model point in opposite directions, and only the institution's configuration choices stand between them.

## Case Study

Priya Natarajan wrote the rollout plan the provost asked for, but the center's name bought a price: the configuration, the curriculum, and the evidence design were hers.

**The tool.** The licensed AI study assistant. **The influences.** The self-regulation cluster, d = 0.45–0.57 — presented to the provost's council with the conflict explained in one sentence: every one of these effects belongs to a process the student must run, and the assistant ships configured to run it for them.

**The useful moment.** The center rebuilt its study-skills course around the assistant-as-coach. Students drafted their own weekly plans first, on paper; then prompted the assistant to critique the draft — find the cramming, the missing retrieval, the fantasy hours — and revised. They built their own flashcards, then used the assistant to quiz them attempt-first, explanations only after a committed answer and a confidence rating. The strongest module was the one Priya's consultants invented: students taught the assistant *their* summary of a reading, instructing it to play a skeptical peer and probe for gaps — the verbalization running in the right direction, with the machine as audience instead of author. Mid-semester data was encouraging in exactly the narrow way honest pilots are: course-embedded, attempt-first usage correlated with rising unassisted quiz scores, while the unconfigured pattern — summarize, generate, explain — correlated with nothing or worse. Correlation, Priya wrote carefully, not cause; the center's selection effects are real.

**The dangerous moment.** November delivered it. The center's own peer-consultant team, preparing workshop materials, had quietly begun using the assistant to *write their consultation plans* — the diagnostic questions, the session strategies, the very loop-coaching the center exists to teach — and a consultant flagged that her sessions had gone hollow: she was delivering machine-drafted questions she hadn't thought through, to students who answered with machine-drafted plans they hadn't thought through. Regulation theater on both sides of the table, inside the building whose mission is the opposite. If the center itself drifted within a semester, the campus-wide default configuration — helpful, unlimited, fading never — was not a neutral starting point. It was a current, and everyone was in it.

**The decision.** The rollout went campus-wide with the center's conditions attached. (1) The LMS-integrated default configuration is coach mode: plans critiqued not generated, quizzes attempt-first, writing feedback criteria-anchored on student drafts only — the generative defaults require a deliberate opt-out, flipping the friction. (2) The center's one-credit study-skills course is the adoption vehicle, teaching the loop explicitly and the assistant as its servant — strategy instruction embedded in students' live courses, where the transfer evidence says it works. (3) Fading is curricular: by week ten, students run a full exam-prep cycle with the assistant in audit-only mode, and the unassisted cycle is graded. (4) Evidence is delayed and unassisted by design: blind-scored exam performance, plus a transfer task — students plan a study week for a novel course, no assistant — fall versus spring. Usage minutes were excluded from every report by written agreement, over the vendor's objection.

## The Phase Gate

**AI may** track mastery and schedule spaced re-checks, generate retrieval practice from course materials, critique student-drafted plans, ask self-questions and probe student verbalizations as a skeptical audience, give criteria-anchored feedback on student-produced writing, and fade on an explicit schedule.

**The learner must** draft the plan, perform the retrieval, produce the verbalization, monitor their own understanding against the probes, and write every sentence that counts — because the executive loop only internalizes in the person who runs it. The teacher must validate mastery beyond the procedural, watch for regulation theater, and own the fading schedule the product will never volunteer.

**Evidence that learning improved is** delayed, unassisted performance — exams, transfer tasks, a study cycle planned and executed without the tool — improving against baseline, with the assistant demonstrably needed less over time, not more.

## The Evidence Check

For any tool or rollout touching this group:

1. **The unassisted cycle.** Can the student plan, study for, and pass an assessment with the tool switched off — and is that performance improving across the term? This is the group's defining measure, because the influence *is* the capacity to operate alone.
2. **Dependence trajectory.** Usage should fall, or shift from generative requests toward coaching requests, as competence grows. Flat or rising generative usage across a semester is the fading failure in plain sight — and the metric vendors will not surface unprompted.
3. **Verbalization provenance.** Sample the self-explanations, plans, and reflections being submitted. Machine-authored regulation artifacts are the group's signature counterfeit; supervised or oral spot-checks beat detection software, which doesn't work.
4. **Transfer of the loop.** The strongest signal: the student regulates effectively in a new course, a new domain, a context the tool never touched. Strategy that doesn't travel was compliance, not capacity.

What does not count: study-plan completeness, flashcard volume, summary quality, in-tool mastery percentages, engagement minutes, or the eloquence of any reflection the assistant could have written — and would have, if asked.

## Reader Exercises

1. **The reader audit.** Pick one self-regulation support in your setting — a study-skills course, an advising protocol, the campus AI assistant. One sentence each: the mechanism (the loop the learner must run), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Audit your own prompt history.** Look at your last ten interactions with an AI assistant in your own work. Classify each: did it *coach* a process you ran, or *run* the process? Most professionals find their ratio uncomfortable — and the discomfort is the best available empathy for what we are configuring for students.
3. **Design the fade.** Take one AI-supported routine you oversee and write its fading schedule: what support exists in week one, what is withdrawn by week five, what the unassisted demonstration looks like in week ten, and what triggers re-scaffolding for a struggling learner. If you cannot write the schedule, the routine as it stands is a prosthetic, not a scaffold.

## What Would Change My Mind

The chapter stands on internalization-through-fading — so longitudinal evidence that students using always-on, generative-mode assistants develop *equal* independent self-regulation (measured unassisted, in transfer contexts, a term or more later) would dismantle the danger-zone framing, and the right response to the provost would have been simple enthusiasm. The Poulidis working paper points the other way but is one unreviewed study in one unusual domain; a contradicting body of classroom evidence could outweigh it. I would also update on the trap's other edge: if coach-mode configurations show no advantage over generative defaults — if the loop internalizes equally either way, or fails to internalize either way — then the configuration battle this chapter equips readers to fight is ceremony, and the real variable lies elsewhere, probably in the assessment design that makes unassisted performance matter at all.

## Still Puzzling

- Where is the line between external regulation that trains and external regulation that replaces? A human tutor who schedules a student's studying for a semester is scaffolding; the assistant doing the same forever is a prosthetic. Duration? Intent? The presence of a fading plan? The theory says handoff; it does not say when the handoff becomes overdue.
- Students with executive-function disabilities complicate every line in this chapter: for some, the permanent prosthetic is the *correct* design — the regulation equivalent of a wheelchair, not a crutch. Distinguishing accommodation from atrophy student-by-student is clinical judgment the campus-wide configuration cannot make.
- The center's consultants drifted within a semester. If the professionals whose job is metacognition could not self-regulate their AI use without structure, what exactly are we asking of an eighteen-year-old at 2 a.m. — and does any amount of teaching the loop survive an environment engineered against running it?

## Further Reading

- **Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. *Theory Into Practice*, 41(2), 64–70.** The canonical map of the loop — forethought, performance, self-reflection — and the internalization story this chapter's fading requirement comes from.
- **Education Endowment Foundation. *Metacognition and Self-Regulation* evidence review.** The cost-effectiveness case: among the highest-yield interventions known, with implementation guidance that predates and outlasts any tool.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The +48/−17 divergence — the danger zone measured, and the guardrailed arm showing design beats default.
- **Poulidis, N., Bastani, H., & Bastani, O. (working paper, SSRN). Self-regulation and over-reliance on AI assistance — evidence from chess academies.** The structure-beats-willpower result this chapter leans on, flagged as what it is: unreviewed, one domain, directionally important.
- **Steiss, J., et al. (2024). Comparing the quality of human and ChatGPT feedback on students' writing.** Where machine feedback legitimately helps a writer: criteria-based response to student-produced drafts — the narrow lane, mapped.
