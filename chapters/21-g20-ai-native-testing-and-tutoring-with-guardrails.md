# Chapter 21 — G20: AI-Native Testing and Tutoring With Guardrails

## The Decision on the Table

Dr. Camille Foster directs the Learning and Testing Center at a regional public university, which means she owns the institution's most expensive recurring problem: the gateway courses. College algebra, general chemistry, introductory statistics — high-enrollment, high-failure, and the single largest leak in the university's retention pipeline. Her center runs peer tutoring (chronically understaffed), supplemental instruction (good, small), and a practice-exam library (well-intentioned, static).

The proposal on her desk is a campus license for an AI tutoring platform — call it the genre, because the vendor is replaceable — pitched at exactly her leak. The demo is genuinely strong in places: curriculum-aligned problem sets for each gateway course, step-level feedback that catches *where* in a derivation a student went wrong, retrieval-style quizzing with spaced review, and an instructor dashboard. It also has the genre's signature feature: an open chat pane — "your 24/7 AI tutor" — that will answer any question a student types, including, Camille confirms in about ninety seconds, the question *solve this for me*, pasted directly from the homework.

The vendor's deck closes with the genre's signature slide: Bloom's two-sigma problem, solved at last — personal tutoring for every student at software prices. Camille has read enough of the tutoring literature to know that slide is doing unsupported work. But she also knows her waitlist: three hundred students who requested a human tutor last term and never got one. The alternative to the AI tutor is not, for most of her students, a human tutor. It is nothing. The question is not whether this platform beats a tutor. It is whether, configured honestly, it beats the nothing — without quietly manufacturing the −17 this book keeps finding behind inflated practice numbers.

## What This Group Is

Three influences, classified: Above hinge, **AI-NATIVE**, low human irreducibility, **high substitution risk**, **partial cognitive-work conflict**. Effect sizes 0.42 to 0.54 on the 2018 252-influence list, weighted average 0.48.

Compare this signature to Chapter 19's and the difference is the whole chapter. Same band, same AI-NATIVE, same low irreducibility — but the risk flag has flipped to high and a conflict flag has appeared. Spelling practice cannot be done *for* you; the absurdity protects it. Testing and tutoring can: a quiz that reveals the answer one tap early has done the retrieval for you, and a tutor that completes the step has done the thinking for you — and both feel, from inside, like being helped. The dataset's note on practice testing names the design variable with unusual precision: immediate answer reveal after a wrong response bypasses necessary retrieval effort; the system must require retrieval before providing the answer. The ITS row gets the dataset's most bimodal hypothesis in the entire classification: d ≈ 0.45 curriculum-aligned [HYPOTHESIS] versus d ≈ 0.20 unconstrained chat [HYPOTHESIS] — the same product category, forked by a configuration screen. And the row's notes flatly call vendor two-sigma claims unsupported.

This is the partial-conflict group in its purest commercial form: the legitimate product and the harmful product ship in the same box, and the difference between them is guardrails — which is to say, somebody at Camille's desk reading the settings.

## The Influences

**Practice testing (d = 0.54)** — rank 66. The most counterintuitively powerful row in the learning-strategies literature. Roediger and Karpicke's 2006 experiments fixed the canon: students who repeatedly *tested* themselves on material retained dramatically more at a delay than students who repeatedly restudied it — even though the restudiers felt more confident and the immediate scores favored them. The testing effect has since survived hundreds of replications across materials and ages. The mechanism is retrieval itself: the effortful act of pulling information from memory strengthens the trace and reveals the gaps, which is why the effect *requires* the pull. A "practice test" that shows the answer before or instantly upon error is restudy wearing a quiz costume — all the confidence, none of the consolidation. Hence the dataset's hypothesized d ≈ 0.50 [HYPOTHESIS] for AI micro-quizzing, with answer-reveal timing flagged as the critical design variable. The power and the crutch are the same feature on two timers.

**Intelligent tutoring systems (d = 0.48)** — rank 89. The deepest pre-LLM evidence base in this book's AI-NATIVE territory, and worth reading at two altitudes. The meta-analytic altitude: across diverse implementations, ITS effects average near this row's 0.48 — solid, above hinge, unspectacular. The focused altitude is the famous one: VanLehn's 2011 review found step-based tutoring systems reaching d ≈ 0.76 against d ≈ 0.79 for human tutors — near-parity with the gold standard — under specific conditions: well-structured domains, step-level (not answer-level) feedback, and the system holding the student in the problem rather than solving it. The gap between 0.48 and 0.76 is not noise; it is *fidelity to those conditions* across the real-world distribution of products and implementations. The same review demolished the folk premise of the genre's marketing: human tutoring's d ≈ 0.79 is itself nowhere near Bloom's legendary two sigma, which came from small early studies under conditions never replicated at scale [contested — the two-sigma figure functions as folklore; VanLehn's reanalysis is the corrective]. So the vendor slide is wrong twice: the AI does not deliver two sigma, and neither did the humans.

**Technology with college students (d = 0.42)** — rank 115. The broadest and blandest row: decades of educational-technology comparisons in higher education, averaging modestly above hinge. Its job in this group is contextual — college students are the population where self-directed tool use is highest, oversight is thinnest, and therefore where the gap between a tool's guardrailed and unguardrailed selves matters most. The dataset's hypothesis: d ≈ 0.35 [HYPOTHESIS] for AI content delivery as a legitimate use case, with the conflict risk concentrated exactly where Camille found it in ninety seconds — writing and problem-solving tasks, where "support" and "completion" share a text box.

## Why It Works

The group's engine is the same one running through Chapters 17 and 19 — effortful retrieval, immediate feedback, spacing, edge-calibration — but with two additions that explain both the higher ceiling and the conflict flag.

**Step-level visibility.** What made VanLehn's step-based systems rival human tutors is granularity. An answer-level system knows *that* you failed; a step-level system knows *where* — which line of the derivation, which misapplied rule — and can put feedback on the step while the student is still inside the attempt. That is most of what a good human tutor does, and it is legitimately automable in well-structured domains: algebra, chemistry stoichiometry, formal logic, code. Step-level tutoring requires the domain to *have* checkable steps; the approach thins fast in ill-structured territory (essays, design, interpretation), which is where the genre's marketing goes to overreach.

**Desirable difficulty, held.** The testing effect and the tutoring effect share a load-bearing discomfort: both work through effort the learner would decline if offered an exit. Retrieval feels worse than rereading; being held at a step feels worse than being shown the step. The entire value of the configuration is that it *removes the exit*. This is the precise sense in which the group has a cognitive-work conflict: the platform's chat pane is an exit-installation device. Every capability the LLM adds — fluent explanation on demand, full worked solutions, answers to pasted homework — is an off-ramp from the difficulty that was the product. Bastani and colleagues measured both roads: unguardrailed GPT-4 access during practice, +48 percent on practice problems, −17 percent on the subsequent unassisted exam; the guardrailed tutor arm — prompted to coach stepwise and withhold answers — +127 percent on practice and ≈0 exam effect. Same model, same students, same material. The guardrail was the intervention.

And one result reframes the whole genre's ambition: in Wang and colleagues' Tutor CoPilot trial, the AI was pointed at the *human tutors* — live, expert-modeled suggestions mid-session — and student mastery rose 4 percentage points overall and 9 for students of the lowest-rated tutors. For a director with three hundred students on a human-tutoring waitlist and a thin, variably skilled tutor corps, that is not a footnote. It is a third option the vendor's deck never mentions: AI under the adult, not instead of the adult.

## What AI Can Safely Do

- **Generate retrieval practice without limit.** Micro-quizzes, cumulative spaced review, interleaved problem sets per course syllabus — with attempt-before-reveal enforced in the configuration, not the syllabus language. The d ≈ 0.50 [HYPOTHESIS] lives entirely on the right side of that timer.
- **Tutor at step level in checkable domains.** Hold the student in the problem; diagnose the failed step; feed back on the step; escalate hints on a ladder that ends in a worked example only after attempts are spent. This is the VanLehn 0.76 design, and modern systems can implement it more flexibly than the classics did.
- **Model the learner for the instructor.** Per-student mastery maps, error-pattern clustering across sections, early-warning flags routed to instructors and to Camille's center — the diagnosis layer feeding human teaching loops (Chapter 14's rules apply).
- **Assist the human tutors.** Tutor CoPilot's design: live suggestions, post-session summaries, and training scenarios for the center's tutor corps — the +4/+9 result, aimed at the thin end of her staffing.
- **Deliver content on demand.** Explanations, examples, glossaries — the d ≈ 0.35 [HYPOTHESIS] legitimate zone, kept separate from assessment and from the problem-solving workspace.

## The Substitution Trap

**The chat pane.** The genre's flagship feature is its failure mode. An unconstrained "ask me anything" sidebar inside a tutoring platform is the Bastani control arm shipped as a product: solve-on-request one paste away from every assigned problem. The dataset's forked hypothesis (0.45 aligned versus 0.20 unconstrained [HYPOTHESIS]) is, if anything, polite — the unconstrained mode does not merely underperform; under deadline pressure it actively converts the platform's practice data into fiction, because the mastery map now records the chat pane's competence. The usage signature is diagnostic and Camille should demand it up front: answer-seeking spikes in the hours before deadlines, hint ladders skipped to the bottom rung, session lengths collapsing as the term progresses.

**The reveal timer.** Subtler: a quizzing module with feedback set to instant-on-error. It looks pedagogically generous — why make students stew? — and it quietly amputates the testing effect, converting retrieval practice into recognition-and-restudy. This trap hides in a settings submenu and in every well-meaning instructor who dials difficulty down when students complain. The complaint is the mechanism working.

**The two-sigma purchase.** The institutional trap: buying the platform *as* the tutoring program — defunding the human corps, the supplemental instruction, the center itself, on the strength of a folklore number. VanLehn's parity result is real and narrow: step-based systems, well-structured domains, students who stay in the system. It says nothing about the students who disengage entirely without a human relationship attached to their effort — Chapter 16's territory, and at a commuter university, most of the leak.

**Over-reliance as a habit.** The Poulidis working paper (with Bastani and Bastani; SSRN, unreviewed, one domain — chess academies) adds the longitudinal worry: learners with structurally unrestricted AI assistance developed reliance patterns that persisted when assistance was removed — structure beat willpower. College students, the population with the least imposed structure, are the natural worst case [verify — working paper; treat as directional].

## Case Study

The center licensed the platform. The license negotiation was mostly about switches.

**The tool.** The AI tutoring platform, gateway-course configuration. **The influences.** Practice testing, d = 0.54; intelligent tutoring systems, d = 0.48, with VanLehn's 0.76/0.79 and its boundary conditions read into the committee minutes; technology with college students, d = 0.42. The two-sigma slide was answered in writing, with citations, for the record.

**The useful moment.** The pilot ran in four sections of general chemistry. The step-level tutor earned its license in the stoichiometry unit — the platform's error clustering showed 40 percent of students failing at the same step (mole-ratio setup, not the arithmetic everyone assumed), the instructors retaught that step specifically, and the platform's subsequent data showed the cluster dissolving. Diagnosis by machine, teaching by humans, verification by machine: the loop this book keeps endorsing, running at section scale. The spaced quizzing module, attempt-first enforced, did what the static practice-exam library never had: cumulative retention practice that followed each student's forgetting rather than the syllabus calendar. And a small Tutor CoPilot-style experiment — the platform's session summaries routed to the center's human tutors before appointments — let a thin tutor corps arrive already knowing where each student's derivations broke.

**The dangerous moment.** Week eleven, problem set nine. The instructor dashboard showed the signature this chapter told Camille to watch for: chat-pane queries tripling in the six hours before the deadline, with paste-shaped inputs. The vendor's default chat was on in two sections — a configuration error; it had been contracted off. Those sections' practice-completion numbers were the *best* in the pilot. Their unit-exam mean came in four points under the guardrailed sections'. One configuration error had run the Bastani experiment locally, with the predicted sign [verify — local n was small; the center treated it as a warning consistent with the literature, not a finding].

**The decision.** License renewed, with the configuration written into the contract as deliverables: (1) chat constrained to coach mode — step hints, no full solutions, no answers to pasted assessed problems — verified by red-team paste-testing each term; (2) attempt-before-reveal locked on all quizzing, hint ladders with spent-attempt gating; (3) the platform deployed *alongside* the human tutoring corps, with session summaries feeding tutors and the corps's budget explicitly protected in the same memo; (4) evidence check fixed in advance: unassisted exam performance and gateway-course completion against three prior years, plus the usage-signature audit every term — deadline-hour spikes treated as a fire alarm, not a footnote.

## The Phase Gate

**AI may** generate and schedule retrieval practice with enforced attempt-before-reveal; tutor at step level in checkable domains with laddered, attempt-gated hints; cluster errors and surface mastery maps to instructors; summarize sessions for human tutors and coach the tutor corps; and deliver content explanations outside the assessed workspace.

**The learner must** perform every retrieval before any reveal, attempt every step before any hint, and sit assessments with the platform out of reach. The instructor and center must read the error maps and teach to them, keep the human tutoring layer funded and informed, and audit the usage signatures for exit-seeking.

**Evidence that learning improved is** unassisted exam performance and course completion in gateway courses, trending against multi-year baselines — together with platform practice data and exam data *converging* rather than diverging, since divergence is the −17 announcing itself.

## The Evidence Check

For any AI testing or tutoring platform, demand:

1. **The assisted/unassisted gap.** Practice performance versus proctored, tool-free exam performance, per section, per term. A widening gap is the Bastani signature in your own data — the single most important number this group produces.
2. **Reveal-timing and hint-ladder configuration, verified.** Not the policy: the settings, plus red-team evidence (paste an assessed problem into every input box; record what comes back).
3. **Usage signatures.** Query timing against deadlines, hint-skip rates, session-length trends. Exit-seeking has a shape, and the logs show it before the exams do.
4. **The counterfactual honestly framed.** Against what alternative is the platform being judged — the human tutor most students never get, or the nothing they currently have? Both comparisons are legitimate; only one belongs in the retention memo.

What does not count: practice-problem completion, in-platform mastery percentages, minutes engaged, student satisfaction with the chat pane (they are satisfied with the exits), or any slide containing the phrase "two sigma."

## Reader Exercises

1. **The reader audit.** Pick one testing or tutoring tool in your setting. Write one sentence each: the mechanism (effortful retrieval; step-held problem solving), the safe AI support, the forbidden substitution (early reveal; solve-on-request), and the proof that learning happened (unassisted, delayed, converging with practice data).
2. **Run the ninety-second test.** Open any AI study tool your students use and paste in an actual assessed problem from your course. Record what comes back, verbatim. You now know which Bastani arm your students are enrolled in.
3. **Find the reveal timer.** In your platform's settings, locate the answer-reveal and hint-escalation configuration. Write down the current values and who chose them. If the answer is "nobody — they're defaults," this chapter's central variable is currently being set by the vendor's engagement metrics.

## What Would Change My Mind

The chapter's architecture rests on the fork: guardrailed delivery preserves the mechanisms, unconstrained delivery hollows them. Replicated field evidence that unconstrained AI access produces *no* assisted/unassisted divergence in college populations — students self-regulating effectively without imposed structure — would collapse the fork and most of this chapter's contract language with it; the Poulidis direction makes me bet against, but it is one unreviewed paper in one domain. Conversely, evidence that even well-guardrailed AI tutoring fails to move *course completion* (not just exam scores) for the waitlisted population would tell me the binding constraint at places like Camille's was never practice quality but human connection — and the budget should flow to Chapter 16's mechanisms instead.

## Still Puzzling

- VanLehn's parity held in well-structured domains. The current generation of LLM tutors is being deployed confidently into ill-structured ones — essay feedback, proof strategy, design critique — where step-level correctness is undefined. Nobody has established what "step-based" even means there, let alone measured it.
- The guardrailed arm in Bastani showed ≈0 exam effect — no harm, after spectacular practice gains. Where is the configuration that produces *positive* transfer? Is the ceiling a design problem, a dosage problem, or a sign that practice-time AI help, however disciplined, mostly cannot add what retrieval alone provides?
- Tutor CoPilot helped the weakest human tutors most. The unmeasured question from Chapter 12 returns with interest here: are those tutors learning the moves, or renting them? The center's tutor corps is also a *learning* population, and nobody is tracking their fading curve either.

## Further Reading

- **VanLehn, K. (2011). The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. *Educational Psychologist*, 46, 197–221.** This chapter's anchor: the 0.76/0.79 near-parity, its boundary conditions, and the deflation of the two-sigma legend — the three facts every ITS procurement meeting should open with.
- **Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17, 249–255.** The testing effect's canonical demonstration, including the detail this group's design rule lives on: restudy *feels* better and performs worse.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The fork measured: +48/−17 unguardrailed, +127/≈0 guardrailed — the same product split by its settings.
- **Wang, R. E., et al. (2024). Tutor CoPilot: A human-AI approach for scaling real-time expertise.** The +4/+9-point third option: AI amplifying the human tutoring layer instead of replacing it.
- **Poulidis, N., Bastani, H., & Bastani, O. (working paper, SSRN). Over-reliance on AI assistance — evidence from chess academies.** Unreviewed and single-domain, flagged as such: the structure-beats-willpower result that makes default configurations, not student virtue, this chapter's unit of analysis.
