# Chapter 39 — G38: Technology in Writing and the Authorship Gate

## The Decision on the Table

Amara Diallo directs the first-year writing program at a state university and co-chairs its dual-enrollment partnership, which means her decisions land in college seminar rooms and eleventh-grade classrooms in the same week. The document open on her screen is the draft revision of the program's academic integrity policy, due to the faculty senate Friday, and the committee has deadlocked at the only sentence that matters. One faction wants the policy built around detection: licensed AI-detection software, mandatory originality scores, a disciplinary pipeline. The other wants surrender dressed as innovation: "AI is the new word processor; we teach with it, not against it; policing is over."

Both factions cite evidence. The detection faction cites the integrity crisis — and it is real; nobody on the committee believes the current essays are all human. The surrender faction cites the history — and it is also real; writing instruction has absorbed the pen, the typewriter, the word processor, and the spell-checker, and Hattie's list even has a number for it: technology in writing, d = 0.42, above the hinge. Their syllogism is the last vendor syllogism in this book: *writing technology has always helped; AI is writing technology; therefore AI helps.*

Amara's program is where this book's argument has been heading for thirty-eight chapters, because writing is where the substitution question stops being one consideration among several and becomes the whole decision. The committee is not really arguing about software. It is arguing about where authorship begins — and a program that cannot draw that line will have it drawn by default settings. This chapter draws the line. It is the book's last gate.

## What This Group Is

A single influence, classified: Above hinge, **AI-NATIVE**, low human irreducibility, **high substitution risk**, **cognitive-work conflict present**.

The reader has seen this signature at full strength once before, in Chapter 28 — and the symmetry is the book's architecture showing. Summarization and writing bookend the high-substitution tail: the two influences where the technology is not merely able to do the student's task but is, in a precise sense, *made of* the task. Text generation is what a large language model is. There is no version of this technology that does not write.

Which gives this row the book's starkest internal tension, and the dataset's note states it without softening: AI writing tools that produce text for students are the **antithesis** of this intervention — legitimate only as feedback and editing tools on student-produced writing. The vendor-activity column reads High, the highest concentration of commercial pressure on any single row, because every general-purpose AI product on earth is, among other things, a writing product. AI-NATIVE plus conflict-present plus maximal vendor pressure: the trap of Chapter 28, scaled up to the cognitive act that schools exist to certify.

## The Influences

**Technology in writing (d = 0.42)** — rank 114 on the 2018 252-influence list. The provenance work here is the entire argument, so it gets done slowly.

The studies inside this number are pre-LLM by definition: word processing in classrooms, revision-support tools, early collaborative writing platforms. The pattern across that literature is consistent. Bangert-Drowns's (1993) meta-analysis of word processing found modest positive effects, concentrated where the technology lowered the *cost of revision*. Graham and Perin's (2007) *Writing Next* synthesis found word processing among its effective elements at around half a standard deviation [verify — Writing Next reports g ≈ 0.55; confirm against the report], beneath writing-strategies instruction and summarization at the top of the table. The mechanism behind every positive result: the technology removed friction *around* the student's composing — transcription drudgery, the pain of recopying a revised draft — so that more of the student's effort reached planning, translating, and revising.

Read that provenance with Chapter 1's discipline and the conclusion is exact: **d = 0.42 is a measurement of technology that made it easier for students to do their own writing.** Every study in the bucket shares one design feature so universal nobody thought to name it: the student produced the words. A tool that produces the words is not a stronger version of the things measured here; it is the inversion of the only thing they had in common. The surrender faction's syllogism fails at its middle term — "AI is writing technology" equivocates between technology *for* writing and technology *instead of* writing, and the d = 0.42 belongs exclusively to the first.

## Why It Works

Why does friction-reduction around composing help, while composing's replacement is the antithesis? Because of what composing is.

The cognitive research on writing converged decades ago on what practitioners know in their bones: writing is not the transcription of finished thought; it is a primary site of thinking. Flower and Hayes (1981) modeled composing as recursive problem-solving — planning, translating, reviewing, each loop revising the writer's understanding of their own subject. Bereiter and Scardamalia (1987) drew the developmental line this chapter's gate formalizes: novices *knowledge-tell* (write down what they already think, in the order they think it), while mature writers *knowledge-transform* — the effort of making the text work forces reorganization of the knowledge itself. The struggle to find the next sentence is not the price of writing. It is the product. The writer who cannot make the paragraph cohere has discovered, at the only moment it is cheap to discover, that the thinking does not cohere either.

This is why the chapter's one-sentence carrier is the book's thesis in miniature: **writing is the only subject where the artifact and the thinking are the same object — so substituting the artifact substitutes the thinking, with nothing left over.**

The AI-era evidence runs exactly where this mechanism predicts. Kosmyna and colleagues' EEG study had participants write essays with an LLM, with a search engine, or unaided: the LLM group showed the weakest neural connectivity during composing, the poorest recall of "their" essays minutes later, and the thinnest sense of ownership over the text — flagged here as it must be: a preprint, small sample, not yet peer-reviewed, mechanism evidence rather than a classroom result [verify — preprint status and findings should be rechecked near publication]. It triangulates with Melumad and Yun's depth findings on received synthesis, with the generation-effect literature, and with the Bastani signature that has anchored this book since Chapter 1: assistance inflates the assisted artifact (+48 percent in practice) while the unassisted capability quietly falls (−17 points), unless the design withholds exactly the thing the learner must produce (+127 percent assisted, ≈ 0 harm, under guardrails). For writing, "the thing the learner must produce" is the text. All of it? No — and locating the boundary precisely is what the gate is for.

## What AI Can Safely Do

The safe set is real, substantial, and entirely on one side of a single line: **AI may respond to writing the student has produced; it may not produce writing the student adopts.** Applied:

- **Feedback on drafts, gated as Chapter 31 specifies.** Criteria-locked, task- and process-level comments on student-produced text — the niche where Steiss and colleagues found AI holding its own against expert humans (criteria-based evaluation; humans better on everything else, including the mentoring registers). Mid-draft, teacher-reviewed where stakes are high, always ending in the student's own revision.
- **The interrogative editor.** Questions, not sentences: "Your second paragraph asserts X; your quotation shows Y — which do you believe?" An editor who only asks questions cannot commit the substitution, which makes question-only configuration the cleanest technical expression of the gate.
- **Reading-side support.** Summarizing *sources* for orientation (with Chapter 28's gates), surfacing counterarguments the student must answer in their own prose, checking citations against originals.
- **Surface mechanics, post-composition.** Spelling, grammar, formatting — the spell-checker's legitimate descendants, run after the thinking is on the page, with every acceptance a student decision.
- **Rhetorical sparring.** Generating the *opposing* brief for the student to rebut; producing deliberately flawed model paragraphs for diagnosis — the contrast-set move from Chapters 28 and 33, which puts machine fluency to work as the student's whetstone instead of their ghostwriter.

The dataset's hypothesis column reads: writing assistance tools only if the student produces the writing, hypothesized at d ≈ 0.20 [HYPOTHESIS] — the book's most conservative conjecture, sized to a row where the legitimate share of the technology's capability is the smallest fraction of what it can do.

## The Substitution Trap

The trap is the product working as designed. Every mainstream writing surface now drafts, continues, rewrites, and polishes by default; the substitution requires no intent, no policy violation, sometimes no keystroke beyond Tab. And the resulting text is good — calibrated to the assignment, fluent past any reader's suspicion. That last clause is now measured: Scarfe and colleagues (2024) injected fully AI-written submissions into a real university exam system, and **94 percent went undetected** while outscoring the real students' work on average. Detection-based policy is not a strict option that hard-liners can choose at some cost. It is a failed option. The detectors' false-positive problem — which falls hardest on second-language writers — only completes the indictment.

So the trap must be named at the level where it operates: not "students will cheat," but *the certifying artifact has detached from the capability it certified.* For a century, a competent essay was acceptable evidence of organized thought, because no path existed to the artifact except through the thinking. That inference is dead. A program that keeps grading take-home artifacts as if it held is not being cheated; it is publishing certificates it can no longer back.

Beneath the integrity layer sits the deeper loss, the one Kosmyna's electrodes and Bereiter and Scardamalia's model both point at: the student who Tab-completes through four years of writing assignments arrives at the far end never having had the experience writing exists to force — discovering, against the resistance of the page, what they actually think. And the equity sting makes its final appearance: the students with the least writing confidence lean on generation hardest, and the tool delivers its non-teaching most efficiently to those who most needed the teaching.

## Case Study

The policy Amara Diallo carried to the senate on Friday rejected both factions in its first paragraph and was adopted with the dual-enrollment high schools as co-signers. The committee came to call it **the authorship gate**, and its architecture is this book's, so it is worth recording properly.

**The tool.** Every writing surface students already use — the policy named the condition, not a product. **The influence.** Technology in writing, d = 0.42 — read into the senate record with its provenance: a number earned entirely by tools that lowered the friction of student-produced text, citable for exactly that and nothing else.

**The useful moment.** The program rebuilt assessment around where writing is *witnessed* rather than where it is policed. Each course anchors on supervised writing — in-class essays, drafted and revised across sessions, each student's authorship baseline. Take-home writing continues, AI-permitted within the gate, but assessed through **process portfolios**: planning notes, drafts, the AI-interaction record (logging-enabled education configurations), and a closing reflective memo — *what did you change, and why* — with grades weighted toward the visible distance between draft one and draft four. Oral defense backstops at scale: any essay can draw a ten-minute conversation, sampled randomly rather than on suspicion, so the conversation is a feature of the course, not an accusation. The AI configuration follows the gate: question-mode feedback and criteria checks on, generation and rewrite off in program contexts — and where students use unrestricted tools anyway, the portfolio makes the usage visible instead of pretending it away. The first semester's quiet discovery: the reflective memos, written to document authorship, turned out to be the best metacognitive writing instruction the program had ever accidentally delivered.

**The dangerous moment.** It had already happened, the previous spring, and it drove both factions to the table. A detection-faction instructor, armed with a detector subscription, had accused a first-generation student whose essay scored 98 percent "AI-likely." The student had written it alone, in the library, in her third language. The case collapsed — the detector's vendor declined to stand behind its score in a hearing — but not before four weeks of investigation. The surrender faction's future held its own dangerous moment in the data Amara presented Friday: in courses that had informally gone permissive the prior year, supervised in-class writing scores had slid against portfolio-course baselines [program-internal observation, uncontrolled — the reason to run the real comparison, not its result]. One faction's failure mode was injustice; the other's was hollowing. The gate exists because both are real.

**The decision.** (1) Authorship is assessed where it can be witnessed: supervised writes and process evidence, never detector scores — detection software unlicensed, by policy; (2) AI may respond to student text and question it; text generated by AI does not enter assessed work as the student's own, and the configuration plus the portfolio make the line auditable rather than aspirational; (3) disclosure is normalized: an AI-use statement on every major assignment, graded for honesty never for abstinence; (4) the program's evidence check, co-designed with the high schools: supervised, unassisted writing quality tracked longitudinally against pre-policy baselines — the only ledger on which the whole argument can finally be settled.

## The Phase Gate

**AI may** give criteria-locked feedback on student-produced drafts, interrogate arguments with questions, support reading and source work, check mechanics post-composition, generate opposing briefs and flawed models for the student to rebut and repair — every role on the responding side of the line.

**The learner must** produce the text: the planning, the sentences, the revisions, and the reflective account of what changed and why — because in writing the text is the thinking, and the program certifies the thinking. **The teacher must** witness authorship somewhere supervised, read process instead of policing product, and hold the feedback and conferencing work that the evidence says humans still do better.

**Evidence that learning improved is** supervised, unassisted writing quality rising over semesters and across cohorts; revision distance — the measurable growth between drafts the student can explain; and transfer of the thinking to other unassisted performances, oral defense included. Never the polish of take-home artifacts, the throughput of the feedback tool, or an originality score from software the evidence has already retired.

## The Evidence Check

For any writing tool, policy, or program touching AI, demand:

1. **Supervised unassisted writing, longitudinally.** The program's anchor metric: in-class writing quality, blind-scored against prior-cohort baselines. If this falls while take-home quality rises, you are watching the artifact detach from the capability in real time.
2. **Revision distance.** The measured difference between a student's first and final drafts, and whether the student can account for it. Authorship leaves a trail; generation does not.
3. **The detection refusal.** Any policy resting on AI-detection scores fails this book's evidence standard on the published data — 94 percent undetected, false positives concentrated on the vulnerable. Design for witnessed authorship instead; treat any vendor leading with detection accuracy as having disqualified the deck.
4. **The configuration audit.** In program-controlled tools: is generation off and interrogation on? Logs of rewrite-feature usage are the writing-program version of Chapter 31's answer-channel audit.
5. **Disclosure honesty rates.** If AI-use statements are graded for honesty, their distribution should be plausible and stable. A program reporting near-zero AI use in 2026 is measuring fear, not behavior.

## Reader Exercises

1. **The reader audit, one last time.** Choose the writing technology nearest you — your students', or your own. Write one sentence each: the mechanism (composing as knowledge-transforming), the safe AI support (responding to produced text), the forbidden substitution (producing adoptable text), and the proof that the writer, not the channel, improved.
2. **Feel the gate from inside.** Take a paragraph you must write this week. Write it unaided; note where it fought you. Then have an AI rewrite it, and read the rewrite carefully: smoother, probably better — and notice what you can no longer say about it: why each sentence is there. The thing you lost is what your students lose, and you now know it by acquaintance rather than argument.
3. **Draft the authorship gate for your own program.** One page: where authorship is witnessed, what AI may respond to, what disclosure looks like, what the longitudinal evidence plan is. Then run it through the four questions below — out loud, with a colleague, the way Dana Whitfield should have been able to do in Chapter 1.

## What Would Change My Mind

The claim under everything: producing the text is how writing produces thinking, so text production cannot be delegated without losing the learning. A body of randomized classroom evidence showing that students who compose *with* generation — drafting by prompt, revising machine prose — match production-gated students on **supervised, unassisted, transfer-bearing writing and reasoning measures** over semesters would falsify the gate where it stands. It would mean composing's cognitive work can migrate into curation and orchestration, the way arithmetic migrated into the calculator without ending mathematical thought — the strongest version of the surrender faction's case, and not an absurd one. The Kosmyna direction, the Bastani signature, and the generation-effect literature all bet against it; but the bet is empirical, the study is runnable, and this book's own evidence standard binds its last chapter most of all. If the data comes, the gate moves. That is what a gate is for.

## Still Puzzling

- Where exactly does responding end and producing begin? A question that embeds its answer, a "suggestion" one click from adoption, an outline that is secretly a draft — the boundary needs case law, and every program adopting the gate is generating precedents nobody is yet collecting.
- The professional world Amara's students graduate into writes with generation, openly. At what point in development does the authorship gate properly lift — and is "after the capability is built" a satisfying answer when nobody has defined the assessment that certifies *built*?
- Writing was the cheap, universal instrument for both exercising and certifying thought. If take-home prose is permanently compromised as evidence, the replacements — supervised writes, orals, portfolios — are all more expensive, and the cost lands unevenly across institutions. The certification problem may reshape schooling more than the learning problem does; this book has mapped only its first mile.

## Further Reading

- **Bereiter, C., & Scardamalia, M. (1987). *The Psychology of Written Composition*. Erlbaum.** Knowledge-telling versus knowledge-transforming — the developmental distinction the authorship gate exists to protect, stated before anyone needed it for this purpose.
- **Graham, S., & Perin, D. (2007). *Writing Next: Effective strategies to improve writing of adolescents in middle and high schools*. Alliance for Excellent Education.** Where d = 0.42's neighborhood actually lives: the effective elements of writing instruction, with technology as friction-reducer ranked among, not above, them.
- **Scarfe, P., Watcham, K., Clarke, A., & Roesch, E. (2024). A real-world test of artificial intelligence infiltration of a university examinations system. *PLOS ONE*, 19(6).** The 94 percent result — the paper that retires detection-based policy and forces the redesign this chapter describes.
- **Steiss, J., et al. (2024). Comparing the quality of human and ChatGPT feedback on students' writing. *Learning and Instruction*.** The boundary evidence for the safe roles: AI competent at criteria-based response to student text, humans better at everything closer to the writer.
- **Kosmyna, N., et al. (2025). Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant for essay writing (preprint).** The mechanism evidence, carried with its flag: small, unreviewed, and pointing exactly where the fifty-year-old composition literature predicts.

## Coda: The Vendor Deck, Answered

Thirty-eight chapters ago, Dana Whitfield had forty minutes, a board that liked slide 7, and a superintendent's note reading *"This checks out, right?"*

You now know everything that note requires. The influence on the slide has a mechanism, and you can name it. The product has a relationship to that mechanism — strengthening it, impersonating it, or deleting it — and you can classify which, because you have watched the analysis run on goals and concept maps, on parents and notebooks, on highlighters, dashboards, device leases, and the act of writing itself. You know what AI may do, what humans must keep, and you know that the third blank — evidence Z, delayed, unassisted, transfer-bearing, agreed in writing before the money moves — is the one the deck is designed to keep blank.

The questions are four. The gate is three sentences. The work, as every chapter has insisted, stays where it always was: in the learner who must do the thinking, the teacher who must witness it, and the institution that must refuse to certify what no one witnessed. AI belongs in your schools — this book has put it there, deliberately, dozens of times. It belongs everywhere except the one place each influence cannot survive its presence, and you can now find that place yourself, influence by influence, deck by deck.

*This checks out, right?* It does now — because you checked.
