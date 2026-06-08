# Chapter 28 — G27: Summarization Is Learning Only When the Learner Does It

## The Decision on the Table

Tom Calloway has taught AP U.S. History for eleven years, and this is the first October he cannot read his students' study habits. The textbook chapters are long; the course is a forced march; and his strongest students have discovered that an AI notebook tool will produce a clean, accurate, beautifully organized summary of any chapter in eleven seconds. Several students now arrive at his review sessions with flawless summary documents — and fail the document-based questions that ask them to apply what the chapter argued.

Now the decision has left his classroom. The social studies department meeting opens with a proposal from a well-meaning colleague: standardize on the AI notebook tool department-wide, pre-load every textbook chapter, and distribute the AI summaries as official study guides — "so at least everyone's working from accurate notes." The department chair turns to Tom: he has used the tool the longest. Should the department hand every student a perfect summary of everything?

Tom's instinct says something is wrong, but the instinct needs an argument. The argument is this chapter — and it is the sharpest case in the book.

## What This Group Is

A single influence, classified: High band, **AI-NATIVE**, low human irreducibility, **high** substitution risk, **cognitive-work conflict present**.

Read that combination slowly, because it is the book's cleanest paradox. AI-NATIVE means no tool category on earth is better suited to this task than a large language model — summarization is arguably *the* canonical LLM capability. And directly on top of that sits a conflict flag and high substitution risk: the dataset's notes say it without hedging — if AI summarizes for the student, the student does not build the capacity. AI must evaluate student summaries, not produce them.

The general principle this row teaches is the one the whole book turns on: **AI feasibility is orthogonal to pedagogical legitimacy.** How good AI is at a task tells you nothing about whether AI should do that task in a learning context. If anything, the relationship runs backward: the better AI is at a cognitive act, the more attractive the substitution, and the larger the hollowing risk. Summarization is AI-native the way forklifts are gym-native: they lift weights superbly.

## The Influences

**Summarization (d = 0.79)** — rank 18 on the 2018 252-influence list. A caution before anything else: this d may be edition-variant — summarization aggregations move across Visible Learning editions and the MetaX database, so the figure is quoted here as the 2018 list's value, no more.

The crucial fact about the evidence base: the d = 0.79 comes from *training studies* — studies in which students were taught to summarize. The National Reading Panel (2000) lists summarization among the comprehension strategies with sound scientific support; Rosenshine and Meister's review of reciprocal teaching — where summarizing is one of the four trained strategies — found effects around 0.32 on standardized tests and 0.88 on experimenter-developed measures [verify — figures confirmed via secondary sources only; the standardized-versus-experimenter gap is itself worth a caveat]. Across this literature, what produced the gains was always the same thing: students learning to select main ideas, delete redundancy, condense, and restate in their own words.

Which means the influence's name is slightly misleading. The d = 0.79 does not belong to summaries. It belongs to *summarizing*.

## Why It Works

Producing a summary forces three cognitive acts at once, and all three live on the production side:

**Selection.** To compress, you must decide what matters — discriminating central claims from supporting detail, which requires actually understanding the architecture of the text.

**Generation.** Restating in your own words engages what memory researchers call the generation effect: content you produce is retained far better than content you receive. The words you choose are the understanding you built.

**Self-testing.** The moment you try to restate a chapter from memory, you discover — precisely, immediately, for free — what you did not understand. Summarizing is a diagnostic that administers itself.

Now run the inversion. A summary that arrives finished delivers none of these. The selection was done elsewhere; the generation was done elsewhere; the self-test never happens — worse, the polished page produces a *feeling* of mastery (cognitive scientists call it fluency) precisely because it is easy to read. The cleaner the summary, the stronger the illusion.

One sentence carries the whole chapter: **the summary is exhaust; producing it is the engine-run.** Two students prepare for a test. Student A reads an excellent AI summary five times. Student B writes a mediocre summary from memory, checks it against the chapter, and fixes two gaps in a different color. A engaged recognition; B engaged retrieval, generation, and monitoring. Everything this book treats as established predicts B wins on transfer — and A *feels* more prepared walking in.

The AI-era evidence has begun to arrive, and it points the predicted direction. Melumad and Yun (2025, *PNAS Nexus*) ran seven experiments comparing people who learned topics from LLM syntheses against people who learned via standard web search: the LLM-summary learners developed measurably *shallower* knowledge, felt less invested in the advice they went on to write, and produced advice that was sparser and less original. Strikingly, adding source links to the LLM summaries did not restore depth — the format itself, not access to sources, removes the synthesis work. The boundaries travel with the citation: these were adults learning everyday topics over short horizons, so it is mechanism evidence, not a classroom effect size. It triangulates with the rest of the canon — Kosmyna and colleagues' EEG study found reduced neural engagement and impaired recall when an LLM did the composing [verify — preprint, small sample], and Bastani and colleagues' field experiment showed the assisted-performance/unassisted-capability split whenever help is unguardrailed. Three methods, one direction: offloading the generative act removes the learning the act produced. Direction with confidence; magnitude with humility — no classroom RCT on AI-summary consumption in school populations exists yet.

## What AI Can Safely Do

Flip the tool to point at its legitimate targets and this row becomes genuinely useful — because everything safe here exploits AI's generative cheapness without touching the student's production:

- **Evaluate student-produced summaries.** Compare a student's summary against the source at a scale no teacher can match: coverage, accuracy, compression, voice. This sits squarely in AI's demonstrated competence — in Steiss and colleagues' comparison, expert human feedback beat ChatGPT on every assessed dimension *except* criteria-based evaluation, and rubric-checking a summary against a source is close to a pure criteria task.
- **Generate practice material.** New passages at controlled difficulty; worked example summaries for novices to study *before* producing their own (worked-example logic: novices only, faded quickly).
- **Manufacture contrast sets.** Deliberately flawed summaries — one too broad, one drowned in detail, one subtly wrong — for students to diagnose, rank, and repair. Only cheap generation makes this exercise routine, and the student doing the diagnosing is doing real selection-and-monitoring work against the source.
- **Serve as the answer key — after.** The student summarizes from memory first; the AI summary then becomes the comparison document the student diffs against. The artifact is repositioned from substitute to check.

The book's classification hypothesizes that AI involvement in summarization supports learning only when the student does the summarizing — a hypothesis, not a finding, but one the early evidence has so far declined to contradict.

## The Substitution Trap

The trap barely needs construction; it ships pre-built in every browser, LMS, and PDF reader that now carries a one-click "summarize" button. The substitution no longer requires intent. That raises the design burden on courses: the default behavior of students' everyday tools is now the failure mode.

Name the trap precisely. When the AI produces the summary the student then studies, the student receives the *artifact* of someone else's cognition and skips the cognition. The resulting page is better than what the student would have written — that is exactly the problem. Better artifact, zero engine-run, plus a fluency illusion that tells the student the studying worked.

The equity sting makes it worse: the students least able to summarize lean on the button hardest, so the tool delivers its non-teaching most efficiently to those who most needed the teaching. High substitution risk realized exactly as coded.

Two boundary clarifications keep the trap from swallowing legitimate practice. First, the apparent hypocrisy — AI may write *flawed* summaries for diagnosis but not *good* summaries for studying — dissolves under the one test that governs this whole group: who does the thinking? In the contrast set, the student still performs evaluation against the source; in the study guide, the work is deleted. Second, policing artifacts is a dead end: AI-written text passes expert readers undetected (Scarfe et al.), so the response must be design, not detection — supervised production, in-class writes, oral restatement, and AI summaries repositioned as answer keys.

## Case Study

The department meeting did not standardize on the study-guide proposal. It standardized on Tom Calloway's redesign instead.

**The tool.** The AI notebook/summarizer his students already used. **The influence.** Summarization, d = 0.79 — with the training-study provenance read aloud at the meeting: the number belongs to students producing summaries, not owning them.

**The useful moment.** Tom's redesign put the tool to work four ways, none of them authorship. At the end of each reading cycle, students wrote a closed-notes "brain dump" summary of the chapter from memory — the retrieval event. They then checked it against the text and revised in a different color — monitoring made visible, and a record Tom could read in seconds per student. *Then* the AI evaluated each revised summary against a rubric and the source, flagging omissions and distortions — criteria-based feedback at a scale Tom could never produce on 140 students weekly. Fridays, students ranked three AI-generated summaries of a new passage — one faithful, one bloated, one subtly wrong — and defended the ranking. The subtly-wrong one became the most instructive document in the course: finding its flaw required exactly the source-checking the course was trying to teach.

**The dangerous moment.** The original proposal — distribute AI summaries as official study guides — was the gate crossing, and the department nearly took it with the best intentions. Tom's evidence was his own gradebook: the students arriving with the most polished AI summaries were underperforming on document-based questions relative to their own earlier work, the signature of artifact-without-engine. Distributing the summaries department-wide would have institutionalized the failure mode and stamped it with the department's authority.

**The decision.** Adopt the tool, with the work reassigned: (1) every summary that counts is student-produced, from memory first; (2) AI appears as evaluator, contrast-generator, and post-hoc answer key — never as author of any summary a student then studies in place of producing one; (3) the department's assessment of summarizing moves to supervised settings (in-class writes, oral restatement of a chapter's argument), since artifact policing is unreliable by design; (4) the spring evidence check is fixed in advance: unaided, closed-notes summaries of an unseen passage, scored blind against fall samples.

## The Phase Gate

**AI may** evaluate student-produced summaries against the source for coverage, accuracy, and compression; generate practice passages and contrast sets of deliberately flawed summaries for students to diagnose; provide worked examples for novices that fade quickly; and serve as the after-the-fact answer key a student diffs their own summary against.

**The learner must** produce every summary that counts — from memory first where possible, then revised against the text — because the selection, generation, and self-testing inside that production *are* the influence. The teacher must keep assessed summarizing in supervised or oral settings and read the revision trails, not just the final artifacts.

**Evidence that learning improved is** the quality of unaided summaries of novel texts, trending upward over the year — rated against the source, not against an AI's version — together with performance on application tasks (essay questions, document analysis) that summary-consumption notoriously fails to move.

## The Evidence Check

For any tool or routine touching summarization, demand:

1. **Unaided production on novel texts.** Closed-notes student summaries of passages never run through any tool, scored against the source on selection, accuracy, and compression — fall versus spring, blind-scored.
2. **Transfer to application.** Performance on tasks that require *using* the material — analysis, argument, application questions — not recognition quizzes, which polished-summary studying can pass while understanding stays hollow.
3. **The production record.** Revision trails showing students discovering and fixing their own gaps — the visible signature of the self-testing mechanism running.
4. **Usage asymmetry.** If the tool logs anything, check who uses the summarize-for-me pathway most. Heavy consumption concentrated among the weakest summarizers is the equity failure in progress, not a sign of helpful differentiation.

What does not count: the quality of summaries the AI produced, time-on-platform, quiz scores immediately after studying a summary, or how complete the class's shared notes look.

## Reader Exercises

1. **The reader audit.** Choose one summarization-adjacent tool or routine in your setting — a notebook AI, a browser summarize button, a "study guide" workflow. Write one sentence each: the mechanism (selection + generation + self-monitoring during production), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Run the self-experiment — on this chapter.** Close the book and write a six-sentence summary of this chapter from memory. Then reopen it and mark your gaps in another color. Notice what the act surfaced that rereading never would have. You have just felt the difference between the engine-run and the exhaust — and you now know this chapter better than a highlighted copy of it.
3. **Build a contrast set.** Prompt an LLM for three summaries of a text your students actually read: one faithful, one bloated with detail, one subtly wrong (ask it to misstate one causal claim). Write the diagnosis key, then run it with students. The conversation about how they caught the subtle error is the comprehension lesson.

## What Would Change My Mind

A classroom-scale randomized study showing that students who study high-quality AI summaries perform as well as students who produce their own summaries — on *delayed, transfer-flavored* measures, not immediate recognition quizzes — would gut this chapter's central claim. The current evidence (Melumad & Yun's depth findings, the generation-effect literature, the Bastani pattern) makes that outcome unlikely, but the directly relevant experiment in school populations has not been run. If consumption ever matches production on transfer, then summarizing's d = 0.79 was about exposure to organized content rather than the act of organizing it, and the conflict flag on this row was a mistake.

## Still Puzzling

- Where exactly do worked examples shade into substitution? Novices learn from studying model summaries — the worked-example effect is real — yet the same artifact that teaches a novice de-skills a developing summarizer. The fading point is unmapped.
- Melumad & Yun found source links did not restore depth. Is there *any* presentation format for AI synthesis that preserves the reader's cognitive work — or is the rescue always a task design (produce first), never a display design?
- The biggest hole in the literature: no classroom RCT on AI-summary consumption in school populations. Every district that distributes AI study guides is running this experiment without a control group — someone should run it with one.

## Further Reading

- **Melumad, S., & Yun, J. H. (2025). Experimental evidence of the effects of large language models versus web search on depth of learning. *PNAS Nexus*, 4(10), pgaf316.** The chapter's empirical anchor: seven experiments, shallower knowledge from LLM syntheses, and the link-supplementation null that pins the harm on the format itself.
- **National Reading Panel (2000). *Teaching Children to Read*, Comprehension chapter.** Where summarization's evidence actually lives: training studies in which students learned to summarize — the provenance that settles what the d = 0.79 is a measurement of.
- **Rosenshine, B., & Meister, C. (1994). Reciprocal teaching: A review of the research. *Review of Educational Research*, 64, 479–530.** Summarizing as one of four trained strategies, and a useful caution about how effect sizes differ between standardized and researcher-built measures.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The unguardrailed-help signature — inflated assisted performance, damaged unassisted capability — that this chapter's failure modes all reduce to.
- **McTighe, J., & Silver, H. F. (2020). *Teaching for Deeper Learning*.** Summarizing and paraphrasing as meaning-making moves within a larger repertoire — the pedagogical frame that keeps this chapter's prohibition from collapsing into mere nostalgia for note cards.
