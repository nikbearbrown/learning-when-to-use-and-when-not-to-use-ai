# Chapter 5 — G04: High-Impact Self-Regulation Without Outsourcing Thinking

## The Decision on the Table

Jerome Ellis, the assistant principal who owns the advisory program at a 900-student middle school, built last year's quiet success story: a self-assessment routine. Every other week, advisory students predict their performance on upcoming assessments, compare predictions with results, and write three sentences about the gap. It was cheap, slightly awkward at first, and by spring the advisors swore by it — students were talking about their own learning in a way the school had never heard.

Now a vendor has seen the program and raised it. The pitch deck is titled "Metacognition at Scale," and the product does everything Jerome's paper routine does, plus everything it doesn't: predicts each student's likely grade from LMS data before the student does, drafts the reflection from performance analytics ("just edit and submit"), generates personalized goals, and renders the whole thing as a glowing dashboard for advisors. The sales engineer's best line lands hard in the cabinet meeting: "Hattie's number one student factor is self-reported grades — 1.33. We operationalize it."

Jerome has the dataset open on his laptop, and he can see that the number is real. He can also see, in the row's own notes, a phrase the pitch deck does not contain: *the student must do the self-assessment act or the mechanism hollows out.* The decision on the table is whether to scale the program with the tool — and it turns on understanding what that 1.33 actually measured, because the vendor is operationalizing a misreading.

## What This Group Is

Eight influences: **High band**, AI-AUGMENTED, medium human irreducibility, low substitution risk, **partial cognitive-work conflict**. Effect sizes 0.74 to 1.33 on the 2018 252-influence list, weighted average 0.88 — the highest-powered group in the book that still says "augment."

Structurally, this is Chapter 4's group promoted to the top of the list. Same signature except the band: these are the self-regulation influences that post the largest numbers Hattie's synthesis contains. That combination — enormous effect sizes, partial conflict flag — makes G04 the most tempting group in the dataset for both vendors and administrators. The numbers justify investment; the mechanisms involve exactly the cognitive acts (self-assessment, planning, elaboration, reflection) that current AI performs fluently on a person's behalf. Everything Chapter 4 said about the metacognitive gate applies here at higher stakes: the bigger the effect, the more expensive the hollowing.

One discipline before the rows: in this band especially, a large d is a description of where learning was found, not a recipe for producing it. The group's headline number is the book's single best teaching case for that distinction.

## The Influences

**Self-reported grades (d = 1.33)** — rank 2 of 252, and the most misread row on the list. The meta-analyses behind it measured how accurately students *predict their own performance* — correlations between student self-estimates and subsequent achievement. The d = 1.33 says students' judgments of their own learning track their actual learning remarkably well. It is a finding about **judgment accuracy, not an intervention**: nobody raised achievement by 1.33 standard deviations by asking students to guess their grades. Hattie himself has glossed the practical upshot as raising expectations and calibration — helping students form *accurate, ambitious* expectations — not as a guessing ritual. What the row licenses is calibration work: prediction, comparison, recalibration. What it does not license is any product claiming the 1.33 as its expected payoff. [Hattie's own later commentary renames the influence "student expectations"; treat any stronger causal gloss as contested.]

**Self-efficacy (d = 0.92).** A learner's belief in their capacity to succeed at a task — built, in Bandura's account, through mastery experiences, vicarious models, persuasion from credible others, and managed emotional states. Note which of those four an AI can manufacture and which require a trusted human; the dataset's note draws the line at exactly that joint: AI success loops can foster immediate confidence; durable efficacy is built through human encouragement over time.

**Transfer strategies (d = 0.86).** Explicitly teaching for application beyond the practiced context — near and far. **Strategy to integrate with prior knowledge (0.93)** — connecting new material to what the learner already holds. **Planning and prediction (0.76)**, **elaboration and organization (0.75)**, **evaluation and reflection (0.75)** — the self-regulation loop's segments, each independently measured, each above 0.74.

**Reciprocal teaching (d = 0.74).** Palincsar and Brown's structured dialogue — predict, clarify, question, summarize — with students rotating as discussion leader. Chapter 28 already flagged the measurement caveat that travels with this literature: effects around 0.32 on standardized tests versus 0.88 on experimenter-developed measures in Rosenshine and Meister's review [verify — confirmed via secondary sources only]. The strategies are trainable by anything; the *social structure* — teaching one's peers, being accountable to them — is the part the dataset marks human.

## Why It Works

One engine drives all eight rows: **calibration under ownership**. A self-regulated learner runs a loop — predict, plan, attempt, monitor, evaluate, adjust — and every cycle does two jobs at once. It improves the work, and it improves the *model of self* doing the work. The student who predicts a 78, scores a 64, and confronts the gap is debugging their own judgment of learning. Over cycles, the judgment sharpens; sharpened judgment redirects effort toward actual weakness; redirected effort produces mastery experiences; mastery feeds efficacy; efficacy funds the persistence the next cycle needs. The group's influences are this flywheel measured at different points.

Two properties of the flywheel matter for AI decisions. First, *the error is the curriculum*. The 14-point miss is not a defect in the routine — it is the routine's most valuable output, the precise address of a miscalibration. Any tool that prevents the miss (by predicting for the student) or smooths it (by drafting the reflection) deletes the lesson. Second, *ownership is not decoration*. Prediction works because the student stakes a claim and is confronted with its accuracy; reflection works because the student authors the account. The acts are first-person performatives — like apologizing or promising, they cannot be done for you. A ghostwritten apology is not an apology; a ghostwritten reflection is not reflection. This is why the conflict flag sits on a group whose substitution risk is nominally low: the artifacts are easy to fake precisely because they look like short texts, and short texts are what AI makes best.

## What AI Can Safely Do

Point the tool at the loop's logistics and its feedback, never its first-person acts:

- **Force the prediction, then keep the books.** Require a prediction before any practice or assessment unlocks; log predictions against outcomes; chart each student's calibration curve over the semester. The dataset's note endorses exactly this: AI can scaffold prediction and tracking; the self-assessment act stays with the student.
- **Surface the gap, structured.** After results, present prediction versus outcome with the student's own history — "you ran 12 points optimistic on the last three quizzes, all on multi-step problems" — as raw material for a reflection the student writes.
- **Generate transfer practice.** Near- and far-transfer problem sets varied beyond what any teacher can hand-build; the dataset calls this legitimate while reserving the explicit modeling of cross-domain principles for human instruction.
- **Map prior knowledge.** Pre-diagnostic tasks that surface what a student actually holds, so integration strategies connect to real schema rather than assumed ones; analogies checked against the student's demonstrated knowledge.
- **Model the moves, then exit.** Demonstrate predict-clarify-question-summarize as worked examples before reciprocal-teaching groups run — the rehearsal room, never the stage. The peer exchange itself stays embodied and mutual.
- **Flag efficacy collapses.** Patterns suggesting a student has stopped attempting — for a counselor or advisor to act on, because the dataset is blunt that durable efficacy runs through a trusted adult.

The book's classification hypothesizes high retained value for the headline row — d ≈ 1.10 [HYPOTHESIS] for AI-scaffolded self-assessment with student ownership intact — a conjecture whose only function here is to mark how much the classification thinks is at stake in the ownership clause.

## The Substitution Trap

**The ghostwritten self.** The vendor's "draft reflection" button is the cleanest gate-crossing in this book: a tool performing a first-person cognitive act and offering it for signature. Every edited-and-submitted draft produces compliant artifacts and zero calibration; worse, it trains students that reflection is a formatting task. The arXiv work on judgment of learning names the deep problem — the model has no access to the student's knowing; it can only simulate the *genre* of self-assessment. Genre-perfect, content-empty.

**The pre-empted prediction.** Showing the student an AI-predicted grade before (or instead of) their own prediction converts calibration training into anchoring. The student's judgment never gets exercised against reality — it gets exercised against the model's guess, which is both more accurate and entirely beside the point. The 1.33 row measured *students'* judgment accuracy; a dashboard that out-predicts them does not operationalize the influence, it unemploys it.

**Efficacy on a drip.** Adaptive systems can engineer unbroken micro-success — every task calibrated to be just achievable, confidence rising on schedule. The trap is that efficacy built exclusively on frictionless success is brittle exactly where it matters: at the first unengineered difficulty. Mastery experiences count when the learner attributes success to their own effortful agency, and the attribution needs occasional genuine struggle to stay honest. Bastani's signature haunts this group too — assisted performance inflating while unassisted capability quietly falls is precisely what a reflection-drafting, prediction-supplying advisory platform would produce, with the gap hidden until some unassisted moment exposes it.

## Case Study

Jerome Ellis took the vendor meeting, and what he did with it became the district's reference case for this group.

**The tool.** The "Metacognition at Scale" platform. **The influence.** Self-reported grades, d = 1.33 — presented to his cabinet with the misreading corrected first: the number describes how well students can judge their own learning, which is an asset the program trains, not an effect the program purchases.

**The useful moment.** Jerome's counter-proposal kept the platform's skeleton and amputated its voice. In the pilot, the tool ran prediction logistics flawlessly: predictions required before each assessment window, calibration curves per student, advisor dashboards showing who ran chronically optimistic (and on what kinds of tasks), reflection *prompts* generated from each student's actual gap data. Advisory conversations changed measurably — advisors stopped asking "how do you think you did?" cold and started from the student's own three-month calibration history. The school's multilingual families got prediction prompts in home languages. A seventh-grader's flat-zero predictions — predicting failure on everything, scoring well — surfaced an efficacy collapse no grade report would have caught; that finding went to a counselor, not an algorithm.

**The dangerous moment.** Mid-pilot, the vendor pushed an update: the "reflection assistant" began autocompleting after one typed word, and the dashboard started displaying its own predicted grade *next to the student's prediction box*. Within two weeks, advisor-flagged reflections converged on identical phrasing across sections, and student predictions snapped to the model's number — calibration curves went flat not because judgment improved but because judgment had been replaced by copying. The platform's metrics celebrated: prediction accuracy up, reflection completion 100 percent. Both numbers measured the mechanism's death.

**The decision.** Renew only on contract conditions: (1) no AI-visible grade prediction until after the student's prediction is locked; (2) reflection fields accept no generated text — prompts yes, prose no — with autocomplete disabled at the platform level; (3) calibration data flows to advisors as conversation material, never to students as verdicts and never into any grouping or grading decision; (4) the advisory conversation remains the program's center — the platform schedules and feeds it, the human runs it; (5) evidence reviewed each semester: students' unprompted prediction accuracy on novel assessments, and reflection specificity rated blind against the paper-era samples. The vendor accepted three conditions, balked at autocomplete, and lost the contract to the configuration that complied.

## The Phase Gate

**AI may** require and log predictions, chart calibration histories, surface gap data and tailored reflection prompts, generate transfer and prior-knowledge diagnostics, model discussion strategies before peer teaching, and flag efficacy-collapse patterns to a human.

**The learner must** make every prediction before seeing any machine estimate, author every reflection in their own prose, set the goals the loop runs on, and do the explaining in every peer-teaching exchange. **The teacher or advisor must** hold the conversation the data feeds, supply the credible human encouragement efficacy is built from, and act on the flags.

**Evidence that learning improved is** calibration accuracy improving on *novel, unprompted* predictions; reflection content growing more specific and more often acted on; and achievement plus persistence rising on unassisted work — never reflection completion rates or in-platform prediction scores.

## The Evidence Check

For any tool claiming this group:

1. **Unprompted calibration transfer.** Students predict performance on an assessment outside the platform, cold. Accuracy versus baseline is the direct test of whether judgment moved into the student.
2. **Reflection authorship and uptake.** Blind-rate samples for specificity; track whether reflections name an action and whether the action happened. Identical phrasing across students is a known signature of crossing — audit for it explicitly.
3. **Unassisted achievement and persistence.** The Bastani check: capability with the tool absent, including behavior at genuine difficulty (re-attempt rates, help-seeking quality).
4. **The anchoring audit.** Verify, in the interface itself, that no machine estimate is visible before student predictions lock. This is a settings inspection, not a vendor assurance.

What does not count: completion rates, dashboard engagement, the accuracy of the *platform's* predictions, sentiment scores on reflections, or advisor satisfaction with the visualizations.

## Reader Exercises

1. **The reader audit.** Take one self-assessment, goal-setting, or reflection routine in your setting (with or without AI). One sentence each: the mechanism (calibration under ownership), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Run your own calibration loop.** Before your next significant piece of work — a lesson, a presentation, this book's later exercises — write a prediction: what will go well, what will not, and a numeric self-estimate. Afterward, score yourself and write the three-sentence gap account. Two cycles in, you will understand viscerally why no one can draft this for you — and you will have the program Jerome built, at n = 1.
3. **Produce the contract language.** Draft the five renewal conditions from the case study as actual procurement language for a metacognition product your district might face: prediction-lock ordering, no generated reflection prose, data-flow restrictions, human-conversation centrality, and the evidence standard. Trade it with a colleague and attack each other's loopholes.

## What Would Change My Mind

Two reversals would matter. If a randomized study showed that students who receive AI-drafted reflections and lightly edit them develop calibration accuracy and self-regulated behavior equal to students who author their own — measured on novel, unassisted tasks at delay — then reflection is exposure-trainable, the first-person ownership claim is romantic surplus, and this chapter's gate is overbuilt. And if longitudinal evidence showed AI-engineered success streaks producing efficacy that *survives* unengineered difficulty as well as struggle-built efficacy does, the "drip" warning would need retracting. Current evidence — the generation effect, the Bastani signature, the judgment-of-learning argument — bets against both, but the decisive school-population experiments have not been run.

## Still Puzzling

- The headline row's causal status remains genuinely awkward: if self-reported grades is judgment accuracy rather than an intervention, the honest effect size for *calibration training itself* is some smaller, mostly unmeasured number. The book inherits Hattie's row but not his confidence.
- Where does scaffolded prediction end and anchoring begin? Showing a student their own past calibration curve before they predict is feedback; showing the class average is context; showing the model's estimate is anchoring. The middle case is undertheorized.
- Reciprocal teaching with one human and one AI "peer": clearly not the influence as measured — but is it worthless rehearsal or genuine partial value for students with no available partner? The dataset says the social exchange requires human presence; the boundary case of *no* available human has no data at all.

## Further Reading

- **Education Endowment Foundation. *Metacognition and Self-Regulated Learning* — guidance report and evidence review.** The practitioner synthesis for this group's loop, including explicit teaching and gradual release toward independence.
- **Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research*, 77(1), 81–112.** The self-regulation level of feedback — the kind this chapter's dashboards must feed and must not replace.
- **Judgment of Learning: A Human Ability Beyond Generative AI (2024). arXiv:2410.13392.** The theoretical case that self-assessment is constitutively first-person — the deepest justification for this chapter's ownership clause.
- **Bastani, H., et al. (2025). Generative AI can harm learning. *PNAS*.** The assisted/unassisted divergence (+48/−17 unguardrailed) that every evidence check in this chapter is designed to detect early.
- **Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3), 249–255.** Prediction-then-test as a special case of the generation family: the act, not the artifact, carries the effect.
