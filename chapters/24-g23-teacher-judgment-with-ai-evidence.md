# Chapter 24 — G23: Teacher Judgment With AI Evidence

## The Decision on the Table

Dana Whitfield runs the eighth-grade data team at a middle school of about 700 students. In October, the district pushes an update to the learning management system: a new early-warning module that assigns every student a color-coded risk score, refreshed nightly from attendance, quiz results, and assignment completion. The vendor's onboarding webinar makes the pitch directly: "Teacher estimates of achievement is the number three influence on Hattie's list, with an effect size of 1.29. Our dashboard operationalizes it."

Dana's team is split. Two teachers love the module — it caught a slow grade slide they had missed. A veteran teacher refuses to open it, saying she already knows her students and the colors will just second-guess her. The principal wants a recommendation by December: should risk scores appear automatically in every teacher's gradebook view, and should the data-meeting protocol be rebuilt around them?

The vendor's sentence sounds rigorous. It contains one true number and one large category error, and the difference between them is what this chapter is about.

## What This Group Is

This group sits in the High band — the influences at the very top of the 2018 Visible Learning list of 252. Its classification reads: AI-AUGMENTED, high human irreducibility, medium substitution risk, no mechanism conflict.

In plain language: AI can genuinely help here, because the work involves gathering and weighing evidence, and machines are good at gathering. But the thing the effect size actually describes — a teacher's accurate, contextual knowledge of each student — cannot be transferred to a tool, which is what "high human irreducibility" means. There is no cognitive-work conflict because the cognitive work in question is not the student's; it is the teacher's. And the substitution risk is rated medium rather than high because the danger is quiet and gradual: not a tool doing students' thinking for them, but a dashboard slowly doing teachers' judging for them.

## The Influences

The group contains two influences from the 2018 252-influence list (the values below are from that list; other editions and the MetaX database report different figures, so the year matters):

**Teacher estimates of achievement (d = 1.29).** This is the cleanest case in the whole book of a number that does not mean what it appears to mean. The figure is not the payoff of an intervention anyone can buy or implement. It derives from research on judgment *accuracy*: Südkamp, Kaiser, and Möller (2012) meta-analyzed 75 studies of how well teachers' judgments of student achievement track measured achievement and found an average correlation of r = .63 — substantial, far from perfect, and varying widely with how the judgment was elicited and whether teachers knew what test was coming. The d ≈ 1.29 comes from converting that family of correlations into a standardized-difference metric. So the influence describes how much teachers already know about their students. It is a measurement of existing knowledge, not a lever a school can pull for 1.29 standard deviations. As Kraft (2020) notes, a genuine intervention effect of that size would be implausible on its face in field research.

**Teacher clarity (d = 0.75).** This figure traces to a single unpublished doctoral dissertation — Fendick (1990) — which defined clarity as four components: clarity of organization, clarity of explanation, clarity of examples and guided practice, and clarity of assessment of student learning, and reported a correlation of about r = .35 (roughly d = 0.75), with stronger effects when students rather than observers rated the teacher [verify — full dissertation text not obtained; claims here are limited to what secondary analyses report]. The thin provenance is worth knowing, but the construct converges with the much larger explicit-teaching literature: clarity is a design property of instruction — goals, explanations, examples, practice, and checks that line up — not a talent for talking plainly.

One disambiguation prevents a common misreading: teacher *estimates* (how accurately teachers know their students) is a different influence from teacher *expectations* (beliefs that can become self-fulfilling, which sit much lower on the list). One is a measurement story; the other is a prophecy story. This chapter is about the first.

## Why It Works

Why would teacher knowledge of students be associated with such strong numbers? Because accurate judgment is the raw material for nearly every consequential decision in a school: who gets which task tomorrow, who is placed in which group, what feedback means, when to reteach, when to refer. A teacher who knows precisely where each student stands can aim instruction; a teacher working from a blurry picture aims at the average.

The honest complication is that teacher judgment, while good on average, is uneven. The r = .63 hides wide variation between teachers and contexts — the pattern Kahneman, Sibony, and Sunstein call noise. And here the empirical anchor for the AI question is unusually clean. Eegdeman, Cornelisz, van Klaveren, and Meeter (2022) ran a head-to-head in Dutch vocational education: who predicts student dropout better, teachers or machine-learning models? At the start of the program, *teachers won* — they identified very-high-risk students who were invisible in the data, because their knowledge was relational and contextual. Once first-period grades arrived, the algorithms caught up and then outperformed the teachers on average. And a ranking that combined the teacher composite with a random forest had better sensitivity than either alone — though not better precision. One study, one context; treat it as an existence proof of complementarity, not a law. But the shape of the result is exactly what this group's classification predicts: the teacher's contribution is strongest precisely where the data is thinnest — new students, transitions, life events — and the machine's contribution grows as structured evidence accumulates.

## What AI Can Safely Do

The classification grants AI a real role here, and the role is evidence work:

- **Aggregate and surface.** Pull attendance, assignment trajectories, and assessment results into one view per student, so the teacher's judgment runs on more complete information.
- **Flag trajectories.** Detect slow drifts — the student whose quiz average has declined four points a week for six weeks — that no human watching 150 students will reliably catch.
- **Support clarity drafting.** On the teacher-clarity side, a language model can draft learning intentions and success criteria at several grain sizes, generate worked examples and non-examples, and standardize goal language across a course. The teacher edits against yesterday's misconceptions; the delivery and the live checking of understanding stay in the room.
- **Create calibration data.** If teachers record their own estimates before seeing model output, the system can track over time where each teacher's judgment is sharp and where it drifts — judgment improvement as a measurable professional skill.

The book's classification hypothesizes that AI risk-flagging of this kind supports, but cannot replace, the teacher's localized judgment — a hypothesis about a support role, not a measured effect.

## The Substitution Trap

The trap in this group is teacher-side, not student-side. Nothing here lets a student outsource thinking. What can be outsourced — invisibly, comfortably, one nightly refresh at a time — is the teacher's estimate itself.

The mechanism is automation bias. A dashboard that presents *verdicts* (a red badge, a risk percentile) instead of *evidence* (the attendance record, the quiz trajectory) invites teachers to adopt the verdict as their own judgment. At first the teacher checks the score against what she knows. Then the score arrives first and anchors what she knows. Then she stops forming an independent estimate at all, because "the dashboard already does that." The capacity the d = 1.29 documents — the most valuable diagnostic instrument in the building — atrophies from disuse, and when the model mislabels a student, no one is left who is positioned to contradict it. Remember which direction the Eegdeman result points: the teachers beat the model exactly at the information-poor start, the moment when a new student most needs someone to see what the data cannot.

The practical test for any tool in this group is one question: **does it require the teacher to record an independent judgment before revealing its own?** Tools that skip this step are not augmenting teacher judgment. They are replacing it on an installment plan.

## Case Study

Dana Whitfield's data team chose to pilot the early-warning module for one semester under rules the team wrote itself.

**The tool.** The LMS early-warning module, generating nightly risk flags from attendance, grades, and assignment completion. **The influence.** Teacher estimates of achievement — the team framed the pilot explicitly as "does this make our estimates better, or does it make them disappear?"

**The useful moment.** In week six, the module flagged a student named Marcus whose math quiz scores had drifted down so gradually that neither his math teacher nor his advisory teacher had registered it. The flag came with the underlying evidence — the trajectory chart, the missing-assignment list — and the math teacher, looking at it, said, "I'd have caught this in November. This is September." That is the augmentation case in one sentence: the machine saw a slow pattern early; the human decided what it meant and what to do.

**The dangerous moment.** In week nine, Dana noticed the data-meeting conversation had changed. Teachers had begun opening the meeting by reading the dashboard colors aloud — "I've got four reds and a yellow" — instead of describing students. One teacher admitted she had stopped writing her own pre-meeting notes because the module "already ranks them." The team had crossed the gate without noticing: the tool's output was becoming the estimate rather than informing it. Two students made the problem concrete: a quiet high performer was flagged red purely from an absence artifact (a recorded family emergency), and a student in real trouble showed green because he submitted everything — late, minimal, and copied. The teachers knew both stories. The model knew neither.

**The decision.** The team recommended adoption, with conditions, and the principal accepted them: (1) before each grading cycle, every teacher logs a predicted quartile per student *before* model flags are revealed — the independent-judgment rule; (2) flags must always display the underlying evidence, never a bare score, and teachers may annotate or contest any flag; (3) teacher–model disagreements are the standing first agenda item of every data meeting — a disagreement is information, not a tie the model breaks; (4) at semester's end, the team reviews calibration: where the model beat the teachers, where the teachers beat the model, and whether teacher estimates are getting sharper. The vendor's auto-display of risk badges in the default gradebook view was turned off.

## The Phase Gate

**AI may** aggregate evidence about each student — attendance, work patterns, assessment trajectories — flag risk patterns and slow drifts with the underlying evidence attached, draft learning intentions, success criteria, and worked examples for the teacher to edit, and maintain records of teacher estimates over time so calibration can be examined.

**The teacher must** form and record an independent estimate of each student's standing before seeing any model output, synthesize machine flags with relational and contextual knowledge the data cannot contain, treat disagreement with the model as an investigation rather than a deferral, and personally deliver and check instructional clarity in the room — the explaining, the examples, the live questioning that reveals what students actually understood.

**Evidence that learning improved is** documented, revisable teacher estimates that grow more accurate over time against subsequent student performance; earlier and better-targeted interventions traceable to flags a teacher confirmed and acted on; and student outcomes on independent assessments — never the count of flags generated, dashboard logins, or the model's own accuracy statistics reported in isolation from teacher judgment.

## The Evidence Check

What would count as proof that a tool in this group worked? Not tool-internal metrics. The claims to demand:

1. **Calibration improvement.** Teachers' recorded estimates, compared against later measured achievement, track more closely after a year with the tool than before it. This is measurable with nothing more than a spreadsheet and the independent-judgment rule.
2. **Earlier accurate intervention.** Students who needed support were identified and reached sooner than the school's historical baseline — and the identifications were confirmed by outcomes, not just by flag volume.
3. **Preserved disagreement.** Teachers still contradict the model, and a meaningful fraction of those contradictions prove correct. If teacher–model disagreement falls to zero, that is not a sign the model is right; it is a sign no one is checking.
4. **Student learning on unassisted, external measures** — end-of-course assessments the tool does not touch — improving for the flagged-and-served population.

## Reader Exercises

1. **The reader audit.** Choose one tool or routine in your setting that resembles this group — any dashboard, risk score, or analytics product that summarizes students. Write one sentence each for: the mechanism (what human knowledge or judgment the tool touches), the safe AI support, the forbidden substitution, and the proof that learning improved.
2. **Run your own calibration study.** Before your next significant assessment, privately predict each student's score. Afterward, compute how well your predictions tracked the results, and look at *where* you missed — which students, in which direction. You have just measured the construct behind d = 1.29 in your own classroom, and you know more about your judgment than any dashboard does.
3. **Rewrite the vendor sentence.** Take the pitch from this chapter's opening — "Teacher estimates is the #3 influence; our dashboard operationalizes it" — and write the honest two-sentence version: what the 1.29 actually measures, and what role the dashboard can legitimately claim. Then write the design requirement (the independent-judgment rule) you would put in the contract.

## What Would Change My Mind

A well-designed multi-site study showing that teachers who work with verdict-style risk dashboards — no independent-estimate requirement, scores shown first — maintain or improve their judgment accuracy over two or more years, relative to teachers using evidence-style displays, would force a rewrite of this chapter's central warning. The atrophy argument rests on automation-bias research from other fields plus one head-to-head prediction study; if classroom-scale evidence showed teacher judgment is robust to verdict-first design, the medium substitution risk should be downgraded and the independent-judgment rule reframed as optional hygiene rather than a gate condition.

## Still Puzzling

- Eegdeman et al. found teacher-plus-model rankings improved sensitivity but not precision. What is the right operational recipe for combining the two — and does anyone have replicated evidence for one in K-12 settings?
- Teacher estimates and teacher expectations interact in ways the two separate influences conceal: does seeing a model's risk label change what a teacher expects, and does that expectation then change the student? No study located cleanly separates the loop.
- LLM-based "data chat" features are arriving in LMS products faster than anyone is evaluating them against teacher baselines. What would a fair benchmark for those features even look like?

## Further Reading

- **Südkamp, A., Kaiser, J., & Möller, J. (2012). Accuracy of teachers' judgments of students' academic achievement: A meta-analysis. *Journal of Educational Psychology*, 104, 743–762.** The source under the headline number: 75 studies, mean r = .63, and the moderator analysis showing judgment accuracy depends on how the judgment is asked for.
- **Eegdeman, I., Cornelisz, I., van Klaveren, C., & Meeter, M. (2022). Computer or teacher: Who predicts dropout best? *Frontiers in Education*, 7:976922.** The cleanest head-to-head of teacher versus algorithmic prediction — and the timing result (teachers win early, models win late) that should shape every early-warning deployment.
- **Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). *Noise: A Flaw in Human Judgment*.** Why judgments vary between professionals looking at the same evidence, and the decision-hygiene practices — independent judgments before group or model reveal — this chapter's case design borrows.
- **Kraft, M. A. (2020). Interpreting effect sizes of education interventions. *Educational Researcher*, 49, 241–253.** The benchmark paper for asking "could an intervention really produce a d of 1.29?" — and the fastest vaccine against vendor effect-size citation.
- **Agrawal, A., Gans, J., & Goldfarb, A. (2018). *Prediction Machines*.** The economic one-liner behind this whole group: when prediction gets cheap, human judgment becomes more valuable, not less.
