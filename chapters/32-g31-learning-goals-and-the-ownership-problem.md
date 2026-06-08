# Chapter 32 — G31: Learning Goals and the Ownership Problem

## The Decision on the Table

Renee Okafor runs the advisory program at a 1,600-student high school, which means she owns the thirty-five minutes each week in which every student is supposed to set goals, track them, and talk about them with an adult who knows their name. The program is sincere and uneven. Some advisors run it like a seminar; some run it like a study hall with a worksheet; a few quietly let students do homework. The goal-setting forms, collected each October, are a monument to compliance: "get better grades," "pass chemistry," "do my best."

The platform now under review promises to fix exactly this. It ingests each student's grades, attendance, and assessment history, and generates a personalized set of SMART goals — specific, measurable, properly scoped, written in encouraging second person. The student clicks "accept," the advisor's dashboard turns green, and progress updates flow automatically from the gradebook. The sales engineer's demo is genuinely impressive: in ninety seconds, a fictional sophomore goes from no goals to five beautifully calibrated ones. The vendor's research page cites Hattie: learning goals versus no goals, d = 0.68.

Renee's hesitation is hard for her to phrase in the meeting, so she writes it on a sticky note afterward: *whose goals are these?* The platform produces goals the way a bakery produces bread — finished, uniform, and belonging to the producer. The question this chapter answers is whether a goal manufactured for a student can do what the research says goals do — and the answer turns out to be the cleanest illustration in the book of an influence whose active ingredient is *ownership*.

## What This Group Is

A single influence, classified: Above hinge, AI-AUGMENTED, low human irreducibility, low substitution risk, **partial cognitive-work conflict**.

At first glance this looks like one of the book's gentler rows — low irreducibility, low substitution risk, a feasibility class that invites help. The flag to read carefully is the partial conflict, because the dataset's note states it precisely: AI onboarding engines can prompt explicit goal formulation, but the mechanism conflicts *if AI sets goals for the student rather than requiring the student to formulate them*. The conflict is not about whether AI touches the goal-setting process. It is about which side of one specific act the AI stands on: the formulation.

That makes this group the book's purest case of a recurring pattern: an influence where the artifact is trivially automatable and almost worthless, while the act that produces the artifact is cheap, human, and carries the entire effect. A goal is a sentence. AI writes better sentences than fifteen-year-olds. None of that matters, because the sentence was never the intervention.

## The Influences

**Learning goals vs. no goals (d = 0.68)** — rank 36 on the 2018 252-influence list. The comparison in the name deserves attention: this influence measures having explicit learning goals against having none, which is among the more generous contrasts on the list. It is also worth keeping this row distinct from its neighbor "appropriately challenging goals" (d = 0.59), which Chapter 4 handled inside the metacognitive-gate group; this chapter's question is prior — not how hard the goal should be, but who must make it.

The mechanism evidence here is unusually deep, because it predates education research's interest in it. Locke and Latham's goal-setting theory, synthesized in their 2002 *American Psychologist* review of roughly four decades and hundreds of studies, is one of the most replicated bodies of work in applied psychology: specific, challenging goals reliably outperform vague "do your best" instructions, and the effect runs through four named mechanisms — goals *direct attention* to goal-relevant activity, *energize* effort, *extend persistence*, and *prompt the discovery of strategies*. And the whole apparatus runs through one moderator that Locke and Latham put at the center: **commitment**. A goal the person is not committed to produces none of the four effects. Commitment, in turn, is built by two things — believing the goal matters and believing it is attainable — and is strengthened when the person participates in setting it.

Hattie and Timperley's feedback model arrives at the same place from the classroom side: their first question, *Where am I going?*, only functions if the learner can actually answer it. A goal stored in a platform that the student cannot state from memory is, functionally, no goal at all — which would put the student on the wrong side of this influence's own comparison condition. There is also intervention evidence that the formulation work itself carries weight: Morisano and colleagues (2010) found that struggling university students assigned to an intensive written goal-setting exercise — articulating, elaborating, and reflecting on personal goals over a couple of hours — showed meaningful GPA improvement against controls [verify — single study, specific magnitudes vary by report; cite the design, not a number]. The intervention was not receiving goals. It was the slow, effortful authoring of them.

## Why It Works

Strip goal-setting to its mechanism and three things are happening, all of them in the learner.

**Formulation is self-diagnosis.** To write "I will be able to balance redox equations without the reference sheet by November," a student must inspect what they currently cannot do. The act of making a goal specific forces the gap-analysis that vague aspiration avoids. This is cognitive work — selection and self-assessment — and it is precisely the work an auto-generated goal performs on the student's behalf.

**Ownership powers the pursuit.** All four Locke-Latham mechanisms are commitment-gated. Attention, effort, persistence, and strategy search are things the *student's* motivational system allocates, and it allocates them to goals the student regards as theirs. The literature's verdict on assigned goals is more forgiving than folk intuition expects — assigned goals can work *when the assigner explains the rationale and the assignee buys in* — but that buy-in is itself a human persuasion event, not a default. A goal accepted by click carries the commitment of a click.

**The goal becomes the reference standard for self-monitoring.** Once a student owns a specific goal, every quiz and homework becomes interpretable as progress or gap — the comparator in the self-regulation loop that Chapters 4, 5, and 13 kept returning to. A goal the student never internalized cannot serve as a comparator, because comparison happens in the head, not in the dashboard.

One sentence to carry: **a goal is not information; it is a commitment device — and you cannot outsource a commitment.**

The AI-era hazard follows directly. Generating goals is the easiest of these acts to automate and the only one whose automation is harmless-looking. The platform's goals will be *better written* than the students' — more specific, better calibrated, properly measurable. Better artifact, absent mechanism: the form of the influence with its engine removed. The book has a name for the gap between those two, and by now the reader can supply the Bastani citation themselves: help that improves the assisted performance while the unassisted capacity — here, the capacity to direct one's own learning — goes unbuilt.

## What AI Can Safely Do

The augmentation surface is real and wide, because everything *around* the formulation is fair territory:

- **Interview, don't author.** A well-prompted AI is a patient Socratic onboarding partner: "What was your hardest unit last year? What would 'better at chemistry' look like on a test? What could you check in two weeks to know you're on track?" The student types the goal; the AI asks the questions a good advisor would ask if advisors had unlimited time.
- **Critique student-drafted goals against quality criteria.** Specific or vague? Measurable by what evidence? Learning-focused or purely outcome-focused ("understand stoichiometry" versus "get a B")? This is criteria-based evaluation — the niche where AI feedback held up in Steiss and colleagues' head-to-head — applied to a one-sentence artifact a teacher could never review 1,600 of.
- **Surface the data for realism calibration.** Showing a student their own attendance and assessment history while *they* set the goal supports the self-diagnosis; it does not replace it.
- **Track and prompt.** Progress nudges, reflection prompts at intervals ("You said November — what's your evidence so far?"), and advisor-facing summaries of which students' goals have gone stale. The accountability conversation those summaries set up remains the advisor's.

The dataset's hypothesis column records the calibrated conjecture for this row: AI goal-setting prompts are useful and accountability requires teacher enforcement, hypothesized at d ≈ 0.50 [HYPOTHESIS] — a prediction about well-gated use, never a finding, and the gate is the entire prediction.

## The Substitution Trap

The trap here is unusually polite. Nothing breaks, nobody cheats, and every metric improves. The platform generates goals; students accept them; dashboards fill; the October monument to compliance is replaced by a sleeker November monument to compliance. The program now has 8,000 SMART goals and approximately the same amount of goal-directed behavior as before.

The tell is recoverable in one question that costs nothing: *ask a student what their goal is, away from the screen.* A goal that is functioning — directing attention, recruiting effort — is one the student can state, roughly, unprompted. A goal that cannot survive that question is an entry in someone else's database. The formulation work the student skipped was the work that would have installed it.

Two refinements keep the trap honest. First, the "accept suggested goal" button is not evil in itself; it is evil as a *default*. Suggestion-first designs harvest clicks because clicking is easier than thinking, and the students least practiced at self-direction — the program's actual targets — will click most. That is the same equity inversion Chapter 28 documented for summaries: the tool delivers its non-teaching most efficiently to those who most needed the teaching. Second, beware goal-type drift: platforms wired to gradebooks naturally generate *performance* goals (grades, scores) because grades are what they can measure. The influence is named *learning* goals, and a system that quietly converts "be able to explain" into "get a B+" has swapped the construct while keeping the citation.

## Case Study

Renee Okafor got her pilot — one semester, four advisories, and a configuration fight she won before launch.

**The tool.** The goal-setting platform. **The influence.** Learning goals vs. no goals, d = 0.68 — presented to the advisory leads with the ownership reading: the comparison is explicit goals against none, the mechanism is commitment, and commitment is built in formulation.

**The useful moment.** Vendor settings allowed "suggestion mode" to be disabled, and Renee disabled it. In the pilot configuration, the platform opened with a seven-question interview — strongest subject, hardest subject, evidence the student trusted, what "better" would look like — and required the student to type a goal in their own words before anything else unlocked. Then the AI critiqued: too vague, not checkable, all-outcome-no-learning. Students revised an average of twice [pilot-internal observation]. Advisors received one-page summaries before each conference: the goal as the student wrote it, the revision trail, and the progress evidence since. Several advisors reported the same surprise — the conferences got better, because they began from a sentence the student recognized as their own and could be held to. The platform's best feature turned out to be the revision trail: watching "pass chemistry" become "be able to do the stoichiometry problems without copying Marisol" told an advisor more than any dashboard.

**The dangerous moment.** Week three, a vendor update quietly re-enabled suggestion mode "to reduce onboarding friction," and one advisory ran a full cycle on it before anyone noticed. The data from that accidental A/B test became the pilot's most cited slide: in the suggestion-mode advisory, the overwhelming majority of students accepted the AI's first proposed goal verbatim, and two weeks later most could not state their goal when asked at the door — against a clear majority who could in the interview-mode advisories [pilot-internal observation, n of four advisories; an anecdote with a control group, not a study]. Same students, same platform, same influence citation. The only difference was which side of the formulation the AI stood on.

**The decision.** Adopt for the full program, with conditions written into the renewal: (1) suggestion mode contractually disabled — the AI may interview and critique, never draft; (2) every goal that enters the system is student-typed, and the revision trail is retained as the advisor's primary document; (3) advisors own the accountability conversations, with platform summaries as preparation, not replacement; (4) the program's evidence check is the door question, run as a sampled audit each quarter — can students state their goal, unprompted, away from the screen — alongside whether goal-referenced behavior (help-seeking, strategy changes) shows up in advisor logs.

## The Phase Gate

**AI may** interview students toward goal formulation with Socratic prompts, critique student-drafted goals against explicit quality criteria, surface the student's own performance data during goal-setting, track progress, prompt scheduled reflection, and prepare advisor-facing summaries and stale-goal alerts.

**The learner must** formulate every goal in their own words — the self-diagnosis and commitment work *is* the influence — and revise it against critique. **The advisor must** hold the accountability conversations, supply the rationale and buy-in work when goals need steering, and watch for performance-goal drift in what the platform rewards.

**Evidence that learning improved is** students stating their goals accurately and unprompted weeks after setting them, goal-referenced behavior changes visible to advisors (strategy shifts, help-seeking, self-initiated progress checks), and movement on the unassisted performance the goals named — never the count, formatting quality, or dashboard completion rate of the goals themselves.

## The Evidence Check

For any goal-setting tool or routine, demand:

1. **The door question, sampled.** A random sample of students asked, away from any screen: "What's your goal right now, and how's it going?" Accurate unprompted recall with a progress self-assessment is the mechanism running. Blank looks at green dashboards are the trap realized.
2. **Authorship in the logs.** What fraction of active goals were student-typed versus machine-suggested-and-accepted? If the platform cannot tell you, that is itself a finding.
3. **Goal-type distribution.** Classify a sample as learning goals versus pure performance goals. A system drifting toward "get a B" is no longer the influence on the vendor's research page.
4. **Behavior downstream.** Any observable change the goal predicts — attendance at help sessions, strategy changes, requests for feedback. A goal that changes nothing the student does has an effect of zero regardless of its formatting.

What does not count: number of goals set, SMART-ness scores of machine-drafted goals, dashboard completion, or student satisfaction with the onboarding flow.

## Reader Exercises

1. **The reader audit.** Choose one goal-setting routine or tool in your setting — an advisory program, an IEP-adjacent tracker, a platform's onboarding flow. Write one sentence each: the mechanism (self-diagnosis plus commitment built in formulation), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Run the door question now.** If you work with students who have goals on file, ask five of them — unprompted, away from the system — what their goal is. Score recall against the database. The gap you find is your program's current ownership deficit, measured in five minutes for free.
3. **Build the interview.** Write the seven questions an AI should ask a student *before* the student drafts a goal — and the three critique criteria it should apply *after*. Then test your interview on a willing colleague or student with any chatbot. Notice where the model tries to helpfully draft the goal anyway; that reflex is the default you are designing against.

## What Would Change My Mind

A randomized comparison in which students receiving well-calibrated, machine-authored goals — accepted by click, with no formulation work — showed equal goal recall, equal goal-directed behavior change, and equal movement on unassisted outcomes compared to students who formulated their own, would collapse this chapter's central distinction. The Locke-Latham assigned-goals literature makes a weak version of that outcome conceivable: assigned goals can work when rationale and buy-in are supplied. If buy-in turns out to be cheaply manufacturable at scale by a sufficiently persuasive onboarding flow — if commitment is a UX problem — then ownership was a romantic gloss on a delivery problem, and this row's conflict flag should be downgraded. The current evidence on click-through behavior runs the other way, but the decisive study in school populations has not been run.

## Still Puzzling

- Where is the line between Socratic interviewing and ghostwriting-by-installments? An AI that asks enough leading questions has effectively drafted the goal; the student merely transcribed it. The formulation gate needs a sharper definition than "who typed."
- Assigned goals work in workplaces when a respected manager explains the rationale. Is advisor endorsement of an AI-suggested goal a legitimate equivalent — or does the persuasion event only transfer commitment when the persuader also owns the relationship?
- Goal-setting programs show some of their largest effects for the lowest-performing students (the Morisano population) — exactly the students most likely to click "accept." Whether interview-mode designs can hold that population's attention long enough to formulate is an open implementation question, and it decides the equity ledger of this whole row.

## Further Reading

- **Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. *American Psychologist*, 57(9), 705–717.** The mechanism source: four pathways, commitment-gated, four decades of replication — and the assigned-goals nuance that keeps this chapter honest.
- **Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77(1), 81–112.** *Where am I going?* as the learner's question — the model that makes goal ownership a prerequisite for every feedback loop the rest of the book audits.
- **Morisano, D., Hirsh, J. B., Peterson, J. B., Pihl, R. O., & Shore, B. M. (2010). Setting, elaborating, and reflecting on personal goals improves academic performance. *Journal of Applied Psychology*, 95(2), 255–264.** The intervention evidence that the slow authoring work — not the possession of goals — carried the gain.
- **Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. *Theory Into Practice*, 41(2), 64–70.** Goal-setting as the forethought phase of the self-regulation cycle — the frame connecting this chapter back to Chapters 4, 5, and 13.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The book's recurring signature, applicable here in slow motion: assistance that improves the artifact while the self-directing capacity it stands in for goes unbuilt.
