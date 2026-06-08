# Chapter 10 — G09: AI-Native Practice With a High Substitution Warning

## The Decision on the Table

Carmen Ruiz is the literacy coach at Hollis Elementary, and the vendor demo she sat through this morning was, she admits, genuinely impressive. An adaptive vocabulary platform: it takes the district's tier-two word lists, generates fresh practice contexts on demand, schedules spaced review automatically, reads everything aloud for the two students in third grade with print disabilities, and adjusts difficulty in real time. The sales rep's strongest slide showed a "word helper" — a friendly chat window where a stuck student can ask anything about any word and get an instant, patient, grade-leveled answer.

The third-grade team wants it yesterday. Vocabulary is the team's school-improvement goal; the current routine — word walls, Friday quizzes, a worn copy of a frayer-model packet — reaches maybe a dozen encounters per word when the research says students need many more. Here is a machine that can manufacture encounters by the thousand.

Carmen's hesitation is not about the manufacturing. It is about the chat window. She watched the demo student type "use the word *reluctant* in a sentence for me," receive three lovely sentences, and copy one into the practice box. The platform logged it as a completed production task. The student produced nothing. Carmen has to recommend for or against the purchase by Friday, and her recommendation needs to be more precise than a feeling about a chat window.

## What This Group Is

Four influences: above the hinge, **AI-NATIVE**, low human irreducibility, **high substitution risk**, no cognitive-work conflict. Effect sizes 0.44 to 0.62 on the 2018 252-influence list, weighted average 0.55.

This is the first group in the book where the classification says AI is not merely a helper but a legitimate *delivery mechanism* — these influences live in territory where software has always operated, and generative AI is simply the best version of that software yet built. No conflict flag: nothing about how these influences work is structurally contradicted by how AI works. Low irreducibility: no relationship or live human event sits at the center.

And then the warning light: high substitution risk, the highest of any AI-NATIVE group so far. The combination is the chapter's whole lesson. The danger here is not that AI does the task badly. It is that AI does the task so well, so willingly, that it will happily do the *learner's* half too — and nothing in the tool's design, the usage data, or the artifact quality will tell you the moment that line was crossed. In the AI-resistant groups, substitution announces itself (a chatbot is obviously not a peer). In AI-native territory, substitution is silent: the practice session looks identical from the outside whether the student retrieved the word or the word helper retrieved it for them.

## The Influences

**Vocabulary programs (d = 0.62)** — rank 40 of 252. Deliberate, structured vocabulary instruction — direct teaching of high-value words, repeated exposure across contexts, morphological work, generative use — outperforms incidental pickup. The number belongs to *programs*: multi-week, multi-encounter designs in which students repeatedly retrieve, use, and transform target words, not to word lists or definitions copied once. The dataset's classification hypothesizes that spaced-retrieval vocabulary practice at scale is genuinely AI-native — d ≈ 0.55 [HYPOTHESIS] — among the most permissive hypotheses in the appendix, and still a structured conjecture, not a finding.

**Technology with learning needs students (d = 0.57)** — rank 59. The dataset calls this the strongest legitimate AI-native case it contains: assistive technology — text-to-speech, speech-to-text, interface adaptation, alternative input — for students with identified learning needs. The nuance that matters: most of this technology *removes an access barrier* rather than performing target cognition. Reading a word problem aloud to a dyslexic student does not do the math for her. The classification hypothesizes d ≈ 0.50 [HYPOTHESIS] with specialized human oversight retained.

**Technology in other subjects (d = 0.55)** — rank 65 — and **technology with elementary students (d = 0.44)** — rank 103. Two broad aggregations, and an honesty note travels with both: these rows summarize decades of studies of *pre-generative* technology — computer-assisted instruction, drill software, multimedia — so the d values describe a category that today's tools resemble only partially. What the older literature consistently shows is that the medium itself is nearly inert; effects track what the technology gets students to *do* — more practice, more feedback, more attempts — not the screen it happens on. The hypotheses (d ≈ 0.40 and d ≈ 0.35 [HYPOTHESIS] respectively) carry strong oversight language, especially for young children.

## Why It Works

One mechanism unifies the group: **practice density with feedback**. Vocabulary growth is brutally arithmetic — students need somewhere between several and many encounters with a word, spaced over time, in varied contexts, with at least some of those encounters being *productive* (retrieving the word, using it, transforming it) rather than receptive. The well-replicated core is the testing effect: retrieval attempts strengthen memory far more than re-exposure does (Roediger & Karpicke's experiments are the canonical demonstration), and spacing those attempts beats massing them. Classroom reality has always rationed this mechanism. One teacher, twenty-five students, fifteen target words: the encounters-per-word-per-student number is small, and feedback on productive use is smaller.

This is exactly the bottleneck software relieves, which is why the group is AI-NATIVE on the merits. A generative model can produce unlimited fresh contexts (so the tenth encounter with *reluctant* is not the first one re-read), schedule retrieval at expanding intervals, check responses instantly, and vary difficulty per student. For learning-needs students, the same generativity personalizes the access layer — decodable text at the right level, read-aloud on demand, response modes that route around the disability instead of through it.

But look at where the mechanism actually lives: in the learner's *attempt*. The encounter only counts if the student performs the retrieval, makes the meaning, composes the sentence. A perfect practice item that the AI also answers is an encounter with nothing. The group's high substitution risk is the shadow of its strength: the same generativity that manufactures attempts can manufacture completions, and the artifact — a filled practice box — is identical either way. Bastani and colleagues' field experiment is the standing reference for what that looks like at scale: unrestricted help lifted practice performance 48 percent and left students 17 percent worse on the unassisted exam, while the guardrailed version — same model, answers withheld — kept the practice gains without the damage. The technology was not the variable. The division of labor was.

## What AI Can Safely Do

- **Manufacture practice.** Generate contexts, cloze items, example-rich passages, and games around target words at volumes no teacher can produce — fresh enough that students meet the word, not the memorized item.
- **Schedule the spacing.** Run expanding-interval retrieval per student per word — the bookkeeping half of the testing effect, which humans reliably intend and reliably drop.
- **Check attempts instantly.** Score retrieval attempts, flag misuse ("*reluctant* doesn't fit there — what is the person in your sentence feeling?"), and give task-level feedback in the seconds after the attempt, when it is worth most.
- **Carry the access layer.** Text-to-speech, speech-to-text, leveled rewrites, visual supports — the assistive roles where the dataset is most confident, provided the specialized educator still owns the plan.
- **Show the teacher the logs.** Surface which words are sticking, which students are requesting answers instead of attempting, and where the practice is being gamed — turning the tool's own telemetry into a self-regulation conversation.

The boundary, in imperative form: use AI to generate practice, variation, and immediate checks; never let it perform the retrieval, composing, or meaning-making the practice exists to cause.

## The Substitution Trap

The trap in AI-native territory is a button, and the button ships enabled. The demo Carmen watched contained it: *write a sentence for me*. Every general-purpose model and most education products will, by default, complete the very task they were deployed to provoke — define the word before the retrieval attempt, supply the sentence before the composition attempt, accept the pasted answer as production.

Name what is lost precisely. A vocabulary encounter has a receptive half (meet the word) and a productive half (retrieve and use it), and the productive half carries most of the durable learning. The substitution deletes only the productive half — which means usage statistics, completion rates, and even immediate quiz scores survive the deletion intact. The student who asks the helper for the sentence still "completes" the item, still gets the exposure, still passes Friday's recognition quiz. What fails to form is the retrieval pathway — invisible until the word is needed unprompted, in writing, weeks later.

The equity sting is the same one running through every high-substitution group: the students with the thinnest vocabularies find retrieval most aversive and lean on the helper hardest, so the tool delivers its non-teaching most efficiently to the students the purchase was justified by. And for the elementary grades specifically, the developmental caution compounds it — young children have the least metacognitive equipment to notice the difference between *I produced this* and *it appeared*.

One clarification keeps the trap from swallowing the group's legitimate core. Assistive use is not substitution. Text-to-speech for a print-disabled student removes a barrier in front of the target cognition; the answer button removes the cognition. The test is the one this book applies everywhere: name the operation the practice exists to strengthen, then ask whether the feature performs *that operation* or something in front of it.

## Case Study

Carmen Ruiz recommended the purchase — conditionally, and the conditions did the work.

**The tool.** The adaptive vocabulary platform, word helper included. **The influence.** Vocabulary programs, d = 0.62 — presented to the third-grade team with the provenance attached: the number comes from structured programs of repeated productive encounters; the platform earns it only if the encounters stay productive.

**The useful moment.** The pilot's gains were real and fast. Encounters per word per student went from roughly a dozen to north of forty, spaced across three weeks instead of crammed before Friday. The two students with print disabilities used read-aloud and dictation to do, for the first time, the same practice as everyone else — the assistive case performing exactly as the dataset hypothesizes. And the platform's logs gave Carmen's team something the word wall never had: by week two they could see which six words were failing across the whole grade and reteach them deliberately.

**The dangerous moment.** Week three. A teacher flagged that her weakest vocabulary student had become the platform's heaviest user — top of the leaderboard, every item green. The logs told the story in one column: he had discovered the word helper, and his "productive" items were paste jobs. The platform had logged 312 completed productions; the boy, asked at the carpet to use *observe* in a sentence about the class terrarium, could not. He was not cheating in any sense he understood. The button was there; the button helped; helping is what it said it did. Multiply him by every classroom and the purchase becomes a machine for converting the district's word list into the *appearance* of vocabulary growth — highest-fidelity appearance among precisely the students furthest behind.

**The decision.** Adopt, on four conditions written into the renewal. (1) Attempt-first configuration, contractually: the helper does not define, exemplify, or compose until the student has submitted an attempt — the vendor's "scaffold mode" became the only mode. (2) The helper coaches after the attempt — prompts, morphological hints, a contrast pair — and never supplies a usable sentence. (3) Teachers review the answer-request log weekly, and heavy helper-leaning triggers a conversation, not a penalty. (4) The evidence check is external to the platform: a monthly unassisted writing prompt, scored for unprompted use of taught words, plus the existing district vocabulary measure in spring. In-platform mastery percentages were explicitly excluded from the evaluation — the tool does not get to grade itself.

## The Phase Gate

**AI may** generate practice items, contexts, and variations at scale; schedule spaced retrieval; give immediate task-level feedback on attempts; provide assistive access (read-aloud, dictation, leveling) under the specialist's plan; and surface usage and answer-request patterns to the teacher.

**The learner must** make the retrieval attempt before any help arrives, compose their own sentences and meanings, and meet target words in their own reading and writing — because the productive encounter *is* the influence. The teacher must keep some vocabulary performance unassisted and visible (carpet talk, writing samples), read the help-request logs, and own the word list and the reteach decisions.

**Evidence that learning improved is** unprompted use of taught words in unassisted writing and speech, weeks after instruction, trending upward — plus performance on a vocabulary measure the platform never touched.

## The Evidence Check

For any tool or routine in this group, demand:

1. **Unassisted productive use, delayed.** Taught words appearing in writing and speech the tool never saw, weeks later. Recognition quizzes immediately after practice are the weakest acceptable signal; the platform's internal mastery score is not a signal at all.
2. **Transfer across contexts.** The word used correctly in a new domain — *reluctant* in a science observation, not just in the practiced sentence frame.
3. **The attempt record.** What fraction of productions were preceded by a genuine attempt? A platform that cannot answer this question cannot demonstrate it taught anyone anything.
4. **Usage asymmetry.** Who leans on the help pathway most? If answer-seeking concentrates among the weakest students and nobody is reading that log, the equity failure is already running.

What does not count: items completed, minutes on platform, streaks, leaderboard position, in-tool mastery percentages, or the polish of any artifact the helper touched.

## Reader Exercises

1. **The reader audit.** Pick one AI-native practice tool in your setting — vocabulary, math facts, spelling, language apps. Write one sentence each: the mechanism (the productive attempt the practice exists to cause), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Find the button.** Spend ten minutes in the tool as a struggling student would. Locate the fastest path from "task assigned" to "task complete with no cognition performed." Time it. That path's friction — not the demo's best feature — is the number that predicts what your weakest students will experience.
3. **Run the deletion test.** Take one week of a student's platform data and answer, from the logs alone: can you distinguish retrieval from paste? If the data cannot tell you, design the offline check that can — one unassisted prompt, ninety seconds, taught words scored.

## What Would Change My Mind

The chapter's warning rests on the claim that productive attempts, not encounters per se, carry vocabulary learning — so a credible randomized study in which students who *received* AI-composed sentences and definitions matched students who *produced* their own, on delayed and transfer-bearing vocabulary measures, would collapse the attempt-first conditions into needless friction. The generation-effect and testing-effect literatures make that outcome unlikely, but the experiment in elementary populations with current tools has not been run. Separately: if attempt-first guardrails in real deployments turn out to be trivially gamed at scale — children routing around them as efficiently as the answer button — then configuration is not a sufficient response, and this group's "adopt with conditions" verdict drifts toward supervised-use-only.

## Still Puzzling

- Where is the receptive floor? Some encounters can legitimately be receptive — hearing the word in a read-aloud counts for something. Nobody has mapped what ratio of productive to receptive encounters the d = 0.62 actually requires, which makes the attempt-first rule a safe default rather than a calibrated one.
- The assistive boundary blurs at the edges. Text-to-speech is clearly access; sentence starters for a student with a language disorder are access *and* a partial performance of the target act. The dataset's cleanest row hides the field's least clean line, and IEP teams are drawing it case by case without shared guidance.
- Young children attribute agency generously. What does a seven-year-old believe happened when the helper "helped"? The metacognitive development literature and the AI-tool literature have barely met, and this group is where they most need to.

## Further Reading

- **Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science*, 17(3), 249–255.** The retrieval-practice result underneath this whole group: attempts strengthen memory; re-exposure mostly doesn't.
- **National Reading Panel (2000). *Teaching Children to Read* — vocabulary instruction findings.** The provenance of structured vocabulary teaching: repeated, varied, active encounters — the design the d = 0.62 rewards.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The assisted/unassisted divergence this chapter's conditions exist to prevent, and the guardrail evidence that conditions work.
- **U.S. Department of Education, Office of Educational Technology (2023). *Artificial Intelligence and the Future of Teaching and Learning*.** The human-in-the-loop doctrine, including its strongest sections on assistive use and oversight for young learners.
- **Horvath, J. C. (2023). *The Digital Delusion*.** A bracing corrective on educational technology's recurring pattern: the medium impresses, the method decides.
