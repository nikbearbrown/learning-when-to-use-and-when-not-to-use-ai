# Research Notes: Chapter 28 — G27: Summarization Is Learning Only When the Learner Does It
**Source:** TIKTOC.md chapter entry (## Chapter 28, ~line 1239) + data/hattie-ai-7dimensions.csv (row: rank 18) + chapters/93-hattie-ai-analysis-summary.md + web verification (this session)
**Notes file:** `28-g27-summarization-is-learning-only-when-the-learner-does-it_notes.md`
**Corresponding chapter:** `chapters/28-g27-summarization-is-learning-only-when-the-learner-does-it.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Group signature:** High / AI-NATIVE / Low human irreducibility / High substitution risk / cognitive-work conflict
**Count:** 1 influences
**Effect-size range:** 0.79 to 0.79; weighted average 0.79

**Highest-ranked examples:**
- 18. Summarization (d=0.79)

**Human-readable example:** AI can directly generate practice or feedback around 18. Summarization (d=0.79), but the learner must still do the retrieval, revision, or meaning-making work.

**Case study:** A teacher pilots AI around 18. Summarization (d=0.79). The case follows where the tool helps, what remains human, and the exact phase gate that keeps the mechanism intact.

**AI use / do-not-use boundary:** Use AI to generate practice, variation, and immediate checks; do not let it perform the retrieval, composing, summarizing, or revising that the learner must practice.

**Chapter structure:** 1. Translate the group signature. 2. Explain the strongest examples and mechanisms. 3. Walk the case study. 4. Productive AI role + substitution trap. 5. Phase gate (AI may do X / human must do Y / evidence is Z). 6. Reader audit.

**Reflection exercise:** Choose one tool or routine in your own setting that resembles this group. Write one sentence each for: mechanism, safe AI support, forbidden substitution, and proof that learning happened.

---
## A. Conceptual foundations

### 1. Why summarizing teaches: the value lives entirely in the doing

Summarization's d=0.79 comes from *training studies*: teaching students to select main ideas, delete redundancy, condense, and restate in their own words improves comprehension and recall. The National Reading Panel (2000, Comprehension subgroup; verified this session) lists summarization among the comprehension strategies with sound scientific support, and Rosenshine & Meister's reciprocal-teaching meta-analysis (16 studies; mean ES .32 on standardized tests, .88 on experimenter-developed measures; verified via secondary sources) features summarizing as one of the most effective of the four trained strategies. The cognitive account: summarizing forces selection (discriminating important from unimportant), generation (recasting in one's own words — the generation effect), and self-testing (you discover what you didn't understand the moment you try to restate it). All three benefits are *production-side*. A summary as an artifact has modest value; producing it is the intervention.

**Common misconception:** "The summary is the product; a better summary is a better outcome." For learning, the summary is exhaust; the engine-run is the outcome. This single inversion is the chapter's whole argument.

**Worked example:** Two students before a test. A reads an excellent summary five times; B writes a mediocre summary from memory, checks it against the text, and fixes two gaps. B engaged retrieval, generation, and monitoring; A engaged recognition. The book's canon predicts B wins on transfer.

**Sources:** NRP 2000 ch. 4 (nichd.nih.gov full text); Rosenshine & Meister 1994 (flag: ES figures verified via secondary summaries, not full text this session); standardized vs. experimenter-test ES gap is itself a teachable caveat.

### 2. The AI-era inversion: the dataset's sharpest classification conflict

This row is the book's cleanest paradox, and the chapter should display the seven-dimension coding as the exhibit: **AI-NATIVE feasibility** (no current tool category is better at summarizing than an LLM — it is arguably *the* canonical LLM task) sitting directly on top of **conflict present** and **high substitution risk**. The CSV's note is quotable verbatim: "Critical mechanism conflict: if AI summarizes for the student, student does not build the capacity. AI must evaluate student summaries, not produce them." The general principle the chapter extracts: **AI feasibility is orthogonal to pedagogical legitimacy** — how good AI is at a task tells you nothing about whether AI should do that task in a learning context; if anything, the better AI is at a cognitive act, the more attractive the substitution and the larger the hollowing risk. This is why TIKTOC calls the boundary at "generate practice, variation, and immediate checks" while reserving "the retrieval, composing, summarizing, or revising" for the learner.

**Common misconception:** "AI-NATIVE means green light." In this dataset AI-NATIVE describes *capability fit*, not *permission*; summarization is AI-native the way forklifts are gym-native: they lift weights superbly.

**Worked example:** Build the 2×2 for readers: AI capability (low/high) × mechanism conflict (no/yes). Mnemonics sit high/no (rank 21 — delegate freely). Summarization sits high/yes — the danger quadrant where convenience and harm point the same direction.

**Sources:** CSV row 18; analysis-summary appendix (AI-NATIVE = 29 rows, of which this is the flagship conflict case); TIKTOC boundary text.

### 3. What happens when learners consume instead of produce: the emerging evidence

The AI-era empirical anchor, verified this session: **Melumad & Yun (2025, *PNAS Nexus* 4(10), pgaf316, "Experimental evidence of the effects of large language models versus web search on depth of learning")** — seven online and lab experiments showing that people who learned a topic from LLM syntheses developed **shallower knowledge** than those learning via standard web search, felt less invested in the advice they then formed, and produced advice that was **sparser and less original**; strikingly, **adding source links to the LLM summaries did not restore depth**. Mechanism per the authors: the summary format itself removes the discovery-and-synthesis work. This complements the canon: Kosmyna et al.'s EEG essay-writing study (canon; **preprint flag stands**) found reduced neural engagement and impaired recall when LLMs did the composing; Bastani et al. 2025 (canon) shows the practice-vs-capability split when help is unguardrailed. Together they triangulate the same claim from survey-experimental, neuro, and field-RCT directions: **offloading the generative act removes the learning that act produced**.

**Common misconception:** "AI summaries at least do no harm as study supplements." Melumad & Yun's link-supplementation null says the format is not rescued by access to sources; depth requires doing the synthesis, not being adjacent to it.

**Worked example:** Recreate the design at classroom scale (see Case 1): half the class preps a topic via chatbot summary, half via guided source-reading and self-summary; compare a week later on transfer questions and "what would you still want to know?" originality.

**Sources:** Melumad & Yun 2025 (doi 10.1093/pnasnexus/pgaf316; verified); Kosmyna et al. (canon, preprint flag); Bastani et al. 2025 (canon); Liljedahl mimicking (canon) as the pre-AI version of output-without-cognition.

### 4. The legitimate flip: AI as summary evaluator, variation generator, and contrast engine

The phase gate, flipped to AI's real strengths: **AI may** (a) *evaluate* student-produced summaries against the source — coverage, accuracy, compression, voice — at a scale no teacher can match (Steiss et al. 2024 canon calibrates expectations: human feedback beat ChatGPT on all dimensions *except* criteria-based evaluation, where AI held its own — and rubric-checking a summary is close to a pure criteria task); (b) *generate practice* — new passages at controlled difficulty, worked summary examples *for study before producing* (worked-example logic from Ch. 2, novices only, faded); (c) *manufacture contrasts* — deliberately flawed summaries (too broad, detail-swamped, subtly wrong) for students to diagnose and repair, an exercise only cheap generation makes routine. **The learner must** produce every summary that counts, from memory first where possible. **Evidence of learning:** unaided summary quality on novel texts trending up — rated against the source, not against an AI's version.

---
## B. Domain examples and cases

### Case 1 (TIKTOC case): The biology teacher's pilot
A biology teacher notices students arriving with flawless AI summaries of the textbook chapter and failing application questions. Redesign: (1) closed-notes "brain dump" summary at lesson end (retrieval); (2) students check their summary against the text and revise in a different color (monitoring made visible); (3) AI evaluates the *revised* summary against a rubric and the source, flagging omissions and distortions (criteria-based feedback — the Steiss-supported niche); (4) weekly, students rank three AI-generated summaries of a new passage — one good, one bloated, one subtly wrong — and justify the ranking. AI appears twice, never as author. Spring check: unaided summaries of unseen passages, scored blind against fall samples.

### Case 2: The lecture-notes economy in higher ed
University students route recorded lectures through AI summarizers and "study" the outputs. Connect to Melumad & Yun (shallow knowledge despite identical facts) and to the note-taking row (rank 81: "AI transcription removes the encoding process"). Legitimate redesign: summarize-from-memory after the lecture, then diff against the transcript — the AI artifact becomes the *answer key*, not the substitute.

### Failure case: The reading platform that "helps" by summarizing
An ELA platform adds a one-click "summarize this chapter" button to reduce frustration for struggling readers. Engagement rises; year-end comprehension flat-to-down for the heaviest users (composite illustration; consistent with Bastani's pattern and Melumad's mechanism). The kicker for equity: the students least able to summarize used the button most — the tool delivered its non-teaching most efficiently to those who most needed the teaching. High substitution risk realized exactly as the CSV codes it.

---
## C. Connections and dependencies

**Prerequisites:** Ch. 1 (mechanism-first reading; the 2×2 of capability vs. conflict); Ch. 27 (phase gate and fading — this chapter is the gate's extreme case where AI must stay out of the production act entirely).

**Unlocks:** Ch. 35 (note taking and the cost of convenience — same encoding logic); Ch. 36 (highlighting — same selection logic); Ch. 39 (technology in writing and the authorship gate — same conflict at essay scale); the "AI-NATIVE ≠ permitted" principle reused for every AI-NATIVE row.

**Contrasts:** Rank 21 mnemonics and rank 28 rehearsal (AI-NATIVE, *no* conflict — delegation legitimate): the minimal pairs that teach readers the taxonomy's discriminating dimension is conflict, not capability.

---
## D. Current state of the field

**Settled:**
- Summarization *training* improves comprehension and recall (NRP 2000; Rosenshine & Meister; decades of strategy-instruction work).
- Generation/retrieval beats re-reading and recognition for durable learning (generation-effect and testing-effect literatures, stable).
- LLMs produce summaries at or above typical student quality — the capability premise is not in dispute.

**Contested / emerging:**
- Magnitude and boundary conditions of consumption harms: Melumad & Yun is adult, non-classroom, short-horizon; Kosmyna is a preprint with a small sample; classroom RCTs on AI-summary consumption are not yet available — the chapter should claim direction with confidence and magnitude with humility.
- Whether AI evaluation of summaries matches human evaluation beyond criteria-based rubrics (Steiss canon bounds the claim).
- The d=0.79 aggregation (which training meta-analyses feed it) — VL-edition dependent.

**Key references:** NRP 2000 ch. 4; Rosenshine & Meister 1994; Melumad & Yun 2025; Kosmyna et al. (preprint flag); Bastani et al. 2025, Steiss et al. 2024, Scarfe et al. 2024, Liljedahl (all canon); Zeng et al. 2024 (canon — quote carefully: ChatGPT-*supported* learning gains do not contradict this chapter; the moderator is who does the cognitive work).

**Recent developments:** summarizer buttons are now embedded in browsers, LMSs, and PDF readers by default — the substitution no longer requires intent, which raises the design burden on courses; AI-detection of AI-written summaries is unreliable (Scarfe canon), so assessment must move to supervised production (in-class writes, oral restatement) rather than artifact policing.

---
## E. Teaching considerations

- **Lead with the inversion sentence:** "the summary is exhaust; producing it is the engine-run." Readers who keep one sentence should keep that one.
- **Where readers get stuck:** the apparent hypocrisy that AI may *write flawed summaries for diagnosis* but not *good summaries for studying*. Resolution: in the first case the student still does the cognitive work (evaluation against source); in the second the work is deleted. Who-thinks is the test, not what-AI-writes.
- **Second sticking point:** teachers fear banning a tool students use anyway. Reframe via Case 2: don't ban the artifact, *reposition* it — AI summary as answer key after self-summary, never before.
- **Exercises:** (1) Run the A1 worked example as a self-experiment on this very chapter (produce-then-check vs. read-the-abstract); (2) design a "contrast set" — prompt an LLM for one faithful, one bloated, one subtly-wrong summary of a class text, and write the diagnosis key (create); (3) TIKTOC reflection verbatim: mechanism = selection + generation + self-monitoring during production; safe AI = evaluation, practice passages, contrast sets; forbidden = AI producing any summary the learner then studies as a substitute for producing; proof = unaided summary quality on novel texts, trending.
- **Analogy bank:** the forklift at the gym (strongest here of anywhere in the book); summary-as-exhaust; the answer-key reposition; Liljedahl's mimicking as the pre-AI dress rehearsal for this failure.

---
## F. Library files relevant to this chapter

- `_lib_Teaching for Deeper Learning_ Tools to Engage Students in Meaning Making.md` — **named library anchor for this chapter**: summarizing/paraphrasing as meaning-making moves; gradual release; transfer framing.
- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` + Counter file — standing pair for the effect-size discussion; Horvath's encoding/offloading material is directly on point here.
- `_lib_Calling_Bullshit__The_Art_of_Skepticism_in_a_Data-Driven_World.md` — reading the emerging-evidence base honestly (preprint flags, magnitude humility) — model it in the chapter's own citations.
- `_lib_Thinking,_Fast_and_Slow.md` — fluency illusions: why re-reading a polished summary *feels* like learning (ease ≠ encoding).
- `_lib_Co-Intelligence__Living_and_Working_with_AI.md` — the counter-voice (delegate and collaborate) the chapter must answer; useful for steelmanning before the inversion argument lands.

---
## G. Gaps and flags

- **CRITICAL FLAG (inherited, book-level):** the CSV's d≈0.40 ("AI summarization delivery only if student does the summarizing") is **[HYPOTHESIS]** — author's estimate, never a finding.
- **FLAG:** d=0.79 is from the 2018 252-list; verify against MetaX if the chapter quotes a current value — summarization aggregations move across editions.
- **FLAG:** Rosenshine & Meister ES figures (.32 standardized / .88 experimenter-developed) verified via secondary sources only this session — pull the 1994 *Review of Educational Research* full text before printing decimals; the standardized/experimenter gap deserves its own caveat sentence either way.
- **FLAG:** Melumad & Yun is adults learning life-advice topics via search-vs-LLM, not K-12 students summarizing curriculum — the chapter may use it as mechanism evidence, not as a classroom effect size.
- **FLAG:** Kosmyna EEG study carries its standing preprint flag; sample and task limits must travel with every citation.
- **GAP:** no classroom RCT located on AI-summary consumption effects in school populations — the failure case is a composite and must read as illustrative; this is a genuine hole in the literature worth naming in the chapter as a research call.
- **GAP:** summarization-training meta-analyses beyond NRP/Rosenshine (e.g., Graham & Hebert's writing-to-read work, where writing summaries improves reading) were not searched this session — would strengthen A1 if added after verification.
