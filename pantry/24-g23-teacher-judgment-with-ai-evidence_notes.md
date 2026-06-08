# Research Notes: Chapter 24 — G23: Teacher Judgment With AI Evidence
**Source:** TIKTOC.md chapter entry (## Chapter 24, ~line 1129) + data/hattie-ai-7dimensions.csv (rows: rank 3, rank 24) + chapters/93-hattie-ai-analysis-summary.md + web verification (this session)
**Notes file:** `24-g23-teacher-judgment-with-ai-evidence_notes.md`
**Corresponding chapter:** `chapters/24-g23-teacher-judgment-with-ai-evidence.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Group signature:** High / AI-AUGMENTED / High human irreducibility / Medium substitution risk / no cognitive-work conflict
**Count:** 2 influences
**Effect-size range:** 0.75 to 1.29; weighted average 1.02

**Highest-ranked examples:**
- 3. Teacher estimates of achievement (d=1.29)
- 24. Teacher clarity (d=0.75)

**Human-readable example:** AI can support 3. Teacher estimates of achievement (d=1.29), 24. Teacher clarity (d=0.75) by making planning, diagnosis, examples, and feedback faster, while the teacher and learner retain the decisive cognitive work.

**Case study:** A teacher pilots AI around 3. Teacher estimates of achievement (d=1.29). The case follows where the tool helps, what remains human, and the exact phase gate that keeps the mechanism intact.

**AI use / do-not-use boundary:** Use AI to scaffold and expose thinking; do not let it complete the core cognitive act for the learner.

**Chapter structure:** 1. Translate the group signature. 2. Explain the strongest examples and mechanisms. 3. Walk the case study. 4. Productive AI role + substitution trap. 5. Phase gate (AI may do X / human must do Y / evidence is Z). 6. Reader audit.

**Reflection exercise:** Choose one tool or routine in your own setting that resembles this group. Write one sentence each for: mechanism, safe AI support, forbidden substitution, and proof that learning happened.

---
## A. Conceptual foundations

### 1. Teacher estimates of achievement (d=1.29) is a measure of judgment accuracy, not a teaching move

The group's headline number is the book's cleanest case of the moderator-not-intervention category error. The evidence base is correlational: Südkamp, Kaiser & Möller (2012, *Journal of Educational Psychology*, 104, 743–762; verified this session) meta-analyzed 75 studies of how well teachers' judgments of student achievement track measured achievement and found a mean correlation of r = .63 — substantial, far from perfect, and heterogeneous across moderators (judgment format, whether teachers were informed about the test, domain). The d ≈ 1.29 arises from converting this family of correlations into a standardized-difference metric. So the influence describes *how accurate teacher knowledge already is*; it is not a treatment a school can "implement" for 1.29 standard deviations. A later psychometric replication check (Urhahne & Wijnia line, PMC11271880) confirms moderate-to-strong but variable accuracy.

**Common misconception:** "Teacher estimates rank #3, so training estimation is the highest-leverage intervention." Practitioner summaries routinely make this slide; even Hattie-aligned commentary concedes the number reflects "the accuracy of a teacher's knowledge of their students," not a lever to pull. The actionable content is downstream: accurate judgment is the raw material for placement, feedback, and expectation decisions.

**Worked example:** Show two readings of the same number side by side — (a) vendor reading: "our dashboard operationalizes the #3 influence on Hattie's list"; (b) correct reading: "teachers already know a great deal; the design question is what evidence sharpens that knowledge and what distorts it."

**Sources:** Südkamp et al. 2012 (doi 10.1037/a0027627); Urhahne & Wijnia replication-check meta-analysis; Kraft 2020 (canon) for why a true *intervention* effect of 1.29 would be implausible on its face.

### 2. Teacher clarity (d=0.75) rests on one unpublished dissertation

Hattie's clarity figure traces to Fendick (1990), an unpublished University of Florida doctoral dissertation meta-analysis (verified provenance via secondary analyses this session). Fendick defined clarity as four components — clarity of organization, clarity of explanation, clarity of examples and guided practice, and clarity of assessment of student learning — and found r = .35 (≈ d = 0.75), with larger effects when *students* rather than observers rated the teacher. The construct is structural, not rhetorical: it is alignment of goals, explanations, worked examples, practice, and assessment, which is why it converges with the explicit-teaching literature despite its thin base.

**Common misconception:** "Clarity = talking plainly." Fendick's four components make clarity a design property of instruction; an articulate lecture over a disorganized unit is not clarity.

**Worked example:** A teacher prompts an LLM to draft learning intentions and success criteria at three grain sizes, plus two worked examples and one non-example. The teacher edits against yesterday's misconceptions, then delivers and live-checks with hinge questions. AI accelerates components 1–3; component 4 — checking what students actually learned — stays in the room. (CSV row 24: "verbal delivery and live checking must be human.")

**Sources:** Fendick 1990 (unpublished — flag); O'Leary's and evidencebasedteaching.org analyses of the clarity evidence base; CSV row 24.

### 3. Human judgment and algorithmic prediction are complements, and the order matters

The chapter's empirical anchor: Eegdeman, Cornelisz, van Klaveren & Meeter (2022, *Frontiers in Education* 7:976922, "Computer or teacher: Who predicts dropout best?"; verified this session, including author list from full text). In Dutch vocational education, **teachers predicted dropout better than machine-learning algorithms at the start of the program** — they identified very-high-risk students invisible to the data — but once first-period grades arrived, **algorithms performed at least as well and then outperformed teachers**; a ranking combining the teacher composite with a random forest had better sensitivity than either alone (not better precision). Teachers also varied widely in predictive skill — the Kahneman/Sibony/Sunstein "noise" result in classroom form.

**Common misconception:** "The model is objective; defer to it." Automation bias inverts the intended design. The High human-irreducibility coding exists precisely because the teacher's relational, contextual knowledge is the component the model cannot see — strongest exactly when data is sparsest (new students, transitions, life events).

**Worked example:** The phase gate from CSV row 3 — AI may flag risk trajectories and aggregate evidence (legitimate; no mechanism conflict); the teacher must synthesize flags with knowledge of the individual student; evidence is a documented, revisable estimate plus the action taken and its calibration over time.

**Sources:** Eegdeman et al. 2022; *Noise* (Kahneman, Sibony & Sunstein) for the judgment-noise frame; clinical-vs-actuarial prediction lineage (Meehl) as background.

### 4. The substitution trap here is teacher-side, not student-side

Mechanism conflict is coded "No conflict" — AI cannot do the student's cognitive work in this group because the cognitive work *is the teacher's*. The Medium substitution risk names a quieter failure: dashboards that present **verdicts instead of evidence**, slowly replacing the teacher's estimate rather than informing it. The practical test: does the tool require the teacher to record an independent judgment before showing its own? Tools that skip this step de-skill the very capacity the d=1.29 documents.

---
## B. Domain examples and cases

### Case 1 (TIKTOC case): Piloting AI around teacher estimates
A middle-school team pilots an early-warning module inside their LMS. Design choices that keep the mechanism intact: (1) teachers log their own predicted quartile per student *before* the model's flag is revealed (preserves independent judgment and creates calibration data); (2) flags arrive with the underlying evidence (attendance, quiz trajectory), never a bare risk score; (3) disagreements between teacher and model are the agenda for the data meeting, not a tie automatically broken by the model. After a term, the team reviews calibration: where the model beat teachers (slow grade drift), where teachers beat the model (a family disruption, a quiet high performer mislabeled by an absence artifact — the Eegdeman pattern).

### Case 2: The clarity pipeline
A new teacher uses an LLM to standardize unit-level learning intentions and success criteria across a course, then peer-reviews them with a colleague against student work. Maps directly onto Fendick's components and CSV row 24's hypothetical d≈0.60 [HYPOTHESIS] framing: drafting is accelerated; delivery and checking remain human.

### Failure case: Automation bias eats the estimate
A school adopts a proprietary risk score; teachers stop recording independent estimates because "the dashboard already does that." When the model mislabels students, no one contradicts it — the contradiction habit has atrophied. Two years later the school's teacher-judgment accuracy is unmeasurable because it is no longer exercised. The Eegdeman result (teachers beat the model precisely at the information-poor start) is the counter-evidence; the failure is organizational, not algorithmic.

---
## C. Connections and dependencies

**Prerequisites:** Ch. 1 (hinge point, [HYPOTHESIS] discipline, intervention-vs-moderator distinction); the self-reported grades treatment (rank 2, in its group chapter) — the student-side mirror of judgment accuracy.

**Unlocks:** Ch. 25 (prior ability — same "attribute, not lever" logic applied to student data); Ch. 31 (feedback — teacher judgment decides what feedback means and what happens next); Ch. 14 (diagnosis/teacher learning loops); the reader-audit habit of asking "who makes the inference?"

**Contrasts:** Ch. 23 (collective teacher efficacy, AI-RESISTANT) — there AI can barely touch the mechanism; here AI genuinely improves the evidence base while the inference stays human. The seam teaches the difference between *irreducible* and *augmentable* judgment.

---
## D. Current state of the field

**Settled:**
- Teacher judgment accuracy is moderate-to-high on average (r ≈ .63) with large between-teacher and between-context variance (Südkamp et al. 2012; replication check).
- Judgment accuracy depends on judgment format and domain; informed judgments are more accurate.
- Clarity-as-alignment converges with explicit-teaching evidence even though Fendick's d itself is fragile.

**Contested:**
- Whether "teacher estimates" belongs on an influence list at all (moderator-not-intervention critique); correlation→d conversion practices in Visible Learning aggregation generally (Bergeron; Simpson — covered in the book's critique paper).
- How teacher judgment and algorithmic prediction should be combined operationally (single head-to-head studies exist; no mature combination literature).

**Key references:** Südkamp, Kaiser & Möller 2012; Urhahne & Wijnia replication line; Fendick 1990; Eegdeman, Cornelisz, van Klaveren & Meeter 2022 (doi 10.3389/feduc.2022.976922); Kluger & DeNisi 1996 and Hattie & Timperley 2007 forward-link to Ch. 31; Kraft 2020 (canon).

**Recent developments:** LLM-based achievement prediction and "AI data chat" features are arriving in LMS products faster than evaluations against teacher baselines; Eegdeman remains the cleanest head-to-head. No published study of LLM-assisted teacher *estimates of achievement* located this session — the case study must be framed as a designed pilot, not reported research.

---
## E. Teaching considerations

- **Lead with the category error.** This chapter is the book's best vehicle for "read the evidence base behind the d before designing AI around it" — the reader who internalizes it here can run the audit on any influence.
- **Where readers get stuck:** conflating teacher estimates (accuracy of knowledge) with teacher expectations (rank 107 — beliefs that shape behavior). One is a measurement story, the other a self-fulfilling-prophecy story; one paragraph of disambiguation prevents the misread.
- **Make calibration concrete:** have readers predict student scores before a real assessment, then compute their own judgment–outcome correlation. Turns the chapter's central construct into a felt experience and echoes self-reported grades from the student side.
- **The reflection exercise maps cleanly:** mechanism = accurate contextual teacher knowledge; safe AI support = evidence aggregation and pattern-flagging; forbidden substitution = dashboard verdicts replacing independent estimates; proof of learning = documented estimates improving in calibration over time.
- **Analogy that works:** AI evidence as a second radiologist's read — valuable exactly when it disagrees, worthless if the first radiologist stops looking.

---
## F. Library files relevant to this chapter

- `_lib_Noise_ A Flaw in Judgment.md` (`_lib_Noise_ A Flaw in Human Judgment.md`) — between-teacher variance in prediction; decision hygiene (independent judgments before group/model reveal) is the chapter's case-design backbone.
- `_lib_Thinking,_Fast_and_Slow.md` — clinical-vs-actuarial prediction lineage; anchoring (why seeing the model's score first contaminates the estimate).
- `_lib_Prediction Machines_ The Simple Economics of Artificial Intelligence.md` — prediction becomes cheap, judgment becomes valuable: the chapter's economic one-liner.
- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` + Counter file — standing pair for any effect-size discussion (the 1.29 needs the Kraft benchmark conversation).
- `_lib_Calling_Bullshit__The_Art_of_Skepticism_in_a_Data-Driven_World.md` — reading vendor dashboards and risk scores skeptically.

---
## G. Gaps and flags

- **CRITICAL FLAG (inherited, book-level):** the CSV's hypothetical effects (teacher estimates d≈0.90; teacher clarity d≈0.60) are **[HYPOTHESIS]** — the author's structured estimates, never findings. Cite only in hypothesis language.
- **FLAG:** d=1.29 is from the 2018 252-influence list; other VL editions/MetaX report different values (some summaries circulate 1.62 for teacher estimates, 0.84 for clarity in later updates). The chapter must name the list and year it freezes on.
- **FLAG:** Fendick 1990 is an unpublished dissertation; full text not obtained this session. Claims limited to the four-component definition and r=.35→d=0.75 as reported in secondary analyses — do not attribute additional findings to it.
- **FLAG:** Eegdeman et al. 2022 is one study, one Dutch vocational context; cite as existence proof of complementarity, not a general law. The "combined ranking better sensitivity but not precision" nuance should survive into the chapter.
- **GAP:** no empirical literature located on LLM-assisted formulation of learning intentions/success criteria affecting student outcomes; the clarity pipeline case is a design proposal and must read as one.
- **GAP:** if the chapter wants a teacher-expectations contrast paragraph, the Rosenthal/Rubie-Davies expectation literature was not searched this session — research separately before printing claims.
