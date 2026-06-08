# Research Notes: Chapter 29 — G28: Repeated Reading as AI-Supported Fluency Practice
**Source:** TIKTOC.md chapter entry (## Chapter 29, ~line 1266) + data/hattie-ai-7dimensions.csv (row: rank 23) + chapters/93-hattie-ai-analysis-summary.md + web verification (this session)
**Notes file:** `29-g28-repeated-reading-as-ai-supported-fluency-practice_notes.md`
**Corresponding chapter:** `chapters/29-g28-repeated-reading-as-ai-supported-fluency-practice.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Group signature:** High / AI-NATIVE / Low human irreducibility / High substitution risk / no cognitive-work conflict
**Count:** 1 influences
**Effect-size range:** 0.75 to 0.75; weighted average 0.75

**Highest-ranked examples:**
- 23. Repeated reading programs (d=0.75)

**Human-readable example:** AI can directly generate practice or feedback around 23. Repeated reading programs (d=0.75), but the learner must still do the retrieval, revision, or meaning-making work.

**Case study:** A teacher pilots AI around 23. Repeated reading programs (d=0.75). The case follows where the tool helps, what remains human, and the exact phase gate that keeps the mechanism intact.

**AI use / do-not-use boundary:** Use AI to generate practice, variation, and immediate checks; do not let it perform the retrieval, composing, summarizing, or revising that the learner must practice.

**Chapter structure:** 1. Translate the group signature. 2. Explain the strongest examples and mechanisms. 3. Walk the case study. 4. Productive AI role + substitution trap. 5. Phase gate (AI may do X / human must do Y / evidence is Z). 6. Reader audit.

**Reflection exercise:** Choose one tool or routine in your own setting that resembles this group. Write one sentence each for: mechanism, safe AI support, forbidden substitution, and proof that learning happened.

---
## A. Conceptual foundations

### 1. Why rereading the same passage works: automaticity frees the mind for meaning

Repeated reading (rereading a short passage aloud until a fluency criterion is met, with feedback) targets *automaticity*: when decoding is effortful, it consumes the working memory that comprehension needs; when word recognition becomes automatic, capacity is released for meaning (LaBerge & Samuels' automaticity theory — the standard account; flag: classic source, not re-verified at full text this session). The evidence anchor verified this session: **Therrien (2004, *Remedial and Special Education*, 25(4), "Fluency and Comprehension Gains as a Result of Repeated Reading: A Meta-Analysis")** — repeated reading produced **large fluency gains (ES ≈ 0.83) and moderate comprehension gains (ES ≈ 0.67) on practiced passages**, with effects for both nondisabled students and students with learning disabilities. Therrien's structural contribution: separating **non-transfer** (the rehearsed passage) from **transfer** (novel passages) outcomes — transfer effects are real but smaller, which is the honest boundary of the intervention. The National Reading Panel (2000) likewise concluded guided repeated oral reading has significant positive impact on word recognition, fluency, and comprehension across grade levels (verified at summary level).

**Common misconception:** "Fluency = speed." The construct is accuracy + appropriate rate + prosody in service of comprehension; a word-per-minute race trains the wrong target and invites robotic reading.

**Worked example:** A 2nd grader reads a 150-word passage cold (62 wcpm, 8 errors), then three more times across two days with error feedback (94 wcpm, 2 errors, better phrasing). The gain that matters is the *cold read of next week's new passage* — the transfer measure.

**Sources:** Therrien 2004 (doi 10.1177/07419325040250040801; verified); NRP 2000 fluency subgroup (verified at summary level — see G for the exact-d flag); LaBerge & Samuels 1974 (flag).

### 2. Why this row is genuinely AI-NATIVE with no conflict — the listener is replaceable, the reader is not

The CSV's coding is unusual and worth displaying: **AI-NATIVE, high substitution risk, no mechanism conflict.** The resolution of the apparent tension: in repeated reading, the learner's irreplaceable act — reading aloud, again — *cannot be offloaded even in principle*; a tool cannot do your oral reading for you in any way that tempts. What AI substitutes is the **listener**: the adult who hears the reading, catches errors, and gives feedback. That role is bottlenecked (one teacher, 25 readers) and largely procedural — which is why automatic speech recognition (ASR) tutors are among the oldest serious AI-in-education systems (Project LISTEN's Reading Tutor lineage; flag: historical claim, not re-verified). The high substitution risk attaches to a different boundary: substituting *the practice ecosystem* — AI listening replacing human listening entirely — loses the relational reasons children read aloud to adults (motivation, modeled prosody, the adult noticing comprehension breakdowns ASR can't hear), and substituting *text-to-speech* (the machine reads to the child) inverts the intervention completely.

**Common misconception:** "If AI listens, the child loses the human element, so refuse." The CSV's coding is the rebuttal: this is the *legitimate* AI-native zone — the alternative to AI listening is mostly *no* listening (silent seat-work), not more teacher time. The design question is dosage and mix, not permission.

**Worked example:** The substitution ledger for this row: reader (child — never substitutable), text (AI-generatable at controlled decodability — legitimate), listener/error-catcher (AI-substitutable with caveats), prosody model (human-preferred; AI acceptable), motivation/relationship (human). Most rows in the book need a gate; this one needs a *roster*.

**Sources:** CSV row 23 ("AI real-time oral reading evaluation and word-level intervention is a legitimate AI-native implementation"); VanLehn 2011 (canon) for step-level-feedback logic transposed to decoding.

### 3. The evidence base for ASR reading tutors — promising, vendor-heavy

What exists, verified this session: **Amira Learning** (the flagship ASR reading tutor) holds a **"Moderate" rating from Evidence for ESSA**; its evidence base includes a comparison showing higher Woodcock Reading Mastery Test composite scores vs. control (reported ES ≈ +0.64) and district analyses (e.g., North Dakota state-assessment gains for regular users). **Flag prominently: most of this corpus is vendor-published or vendor-funded; the "twice as effective as traditional tutoring" line is marketing copy and should appear in the chapter only as an example of claims requiring the Kraft-benchmark interrogation.** Independent, peer-reviewed RCTs at scale are scarce. A second documented concern: **ASR accuracy varies by speaker** — young children, second-language speakers, and speakers of non-mainstream dialects face higher misrecognition rates, which converts directly into false error feedback and wrong difficulty placement (general ASR-bias literature; flag: cited from field knowledge, verify specific figures before printing). An ASR tutor that mishears a dialect as disfluency is an equity failure wearing a personalization badge.

**Common misconception:** "The tool measured fluency, so the score is the fluency." The score is the tool's *recognition* of the reading; for some children the gap between the two is the finding.

**Sources:** Evidence for ESSA Amira entry (verified); Amira evidence-base PDF (vendor — flagged); ASR dialect-bias literature (flag for verification).

### 4. The phase gate, stated for this group

**AI may:** listen to every rehearsal, catch word-level errors, track wcpm/accuracy/prosody proxies over time, serve passages at calibrated decodability, and surface to the teacher which students' growth curves have flattened. **The teacher/learner must:** the child does every minute of the actual reading aloud; the teacher sets the fluency criteria, models prosody, keeps a regular human-listening rotation (the comprehension-and-relationship channel), and reviews flagged students personally. **Evidence of learning is:** cold-read fluency and comprehension on *novel* passages (Therrien's transfer measure), not the rehearsed-passage scores the dashboard prefers to show — and not minutes-of-use, the engagement metric vendors prefer to sell.

---
## B. Domain examples and cases

### Case 1 (TIKTOC case): The fluency station
A 2nd-grade teacher with 26 students and one aide pilots an ASR reading station: each child gets 3×10 minutes/week of repeated reading with AI listening and word-level feedback; the teacher's human listening time, freed from drill supervision, is reallocated to the eight lowest readers and to weekly prosody modeling for the class. Design safeguards: passages matched to the phonics scope-and-sequence (Ch. 30 link); transfer checks every two weeks on cold passages; any child whose ASR error rate looks anomalous (flagged dialect/L2 mismatch) moves to human-listening verification. The pilot's deciding metric is cold-read growth, not platform minutes.

### Case 2: The home-practice loop
Repeated reading is homework-friendly (short passages, repetition) but historically unsupervisable. ASR practice at home with a weekly in-class cold read changes the economics: practice volume rises where it was zero. Caveat to carry: this is the one chapter where the book's homework warning (rank 159, AI-RESISTANT, conflict) does *not* transfer — because the mechanism is performance practice, not problem-solving, AI assistance cannot "do the homework." Useful contrast pair for readers.

### Failure case: The app that reads to the child
A district adopts a "reading support" app whose accessibility mode defaults to read-aloud-with-highlighting. Struggling readers follow along with their eyes while the app performs the decoding — repeated *listening*, not repeated reading. Engagement is excellent; fluency growth stalls; the intervention has been silently inverted (the child now practices exactly nothing the d=0.75 measures). TTS has legitimate uses (access to grade-level *content* for students with disabilities — rank 59's territory); the failure is deploying an access tool inside a fluency-practice slot. The audit question: *who is doing the decoding?*

---
## C. Connections and dependencies

**Prerequisites:** Ch. 1 (mechanism-first; the substitution ledger as a phase-gate variant); Ch. 30 is the natural companion (phonics gives the decoding knowledge; repeated reading automatizes it) — the two chapters should cross-reference explicitly in both directions.

**Unlocks:** the "legitimate AI-native zone" pattern reused for vocabulary (rank 40), spelling (rank 51), rehearsal (rank 28); the equity-of-ASR concern recurs in any speech-interface discussion.

**Contrasts:** Ch. 28 (summarization — AI-NATIVE *with* conflict) is the structural opposite: same feasibility coding, opposite permission, because there the learner's act is offloadable and here it is not. The 28→29 seam is the cleanest one-variable comparison in the book's middle chapters.

---
## D. Current state of the field

**Settled:**
- Repeated reading improves fluency and comprehension on practiced passages, for general and LD populations (Therrien 2004); guided oral reading has significant positive impact (NRP 2000).
- Transfer to novel passages is positive but smaller than rehearsed-passage gains — programs must measure cold reads.
- ASR can score oral reading accuracy/rate well enough for practice feedback in mainstream-accent populations.

**Contested:**
- Repeated reading vs. *wide* reading (equivalent time on varied texts): comparison studies show mixed results, with some finding wide/continuous reading matches repeated reading's gains — the chapter should present repeated reading as one strong fluency tool, not the only one.
- ASR feedback equity across dialects and L2 speakers (documented concern; magnitude in current commercial systems under-studied).
- The independence and durability of commercial ASR-tutor effects (vendor-heavy corpus; Evidence for ESSA "Moderate," not "Strong").

**Key references:** Therrien 2004; NRP 2000 fluency chapter; Evidence for ESSA Amira entry; Project LISTEN lineage (flag); VanLehn 2011, Kraft 2020, Bastani et al. 2025 (canon, for benchmark and guardrail framing); Liljedahl (canon) less central here — performance practice resists mimicking.

**Recent developments:** LLM-enhanced ASR tutors now add comprehension questioning and adaptive passage generation on top of fluency scoring — which quietly moves them *out* of this row's no-conflict zone and into summarization/questioning territory (Chs. 26, 28) where the gates are stricter; decodable-text generation by LLMs is improving but needs phonics-scope QC (Ch. 30 link).

---
## E. Teaching considerations

- **Use this chapter as the book's "yes" exhibit.** After several trap chapters, readers need a clean case where the seven dimensions say *go* — it proves the framework isn't a refusal machine and makes its prohibitions elsewhere more credible.
- **Where readers get stuck:** the high-substitution-risk/no-conflict pairing reads as contradictory. The listener-vs-reader distinction (A2) resolves it; the substitution ledger makes it teachable.
- **Second sticking point:** readers over-generalize the "yes" — if AI can listen to reading, why not let it tutor writing? Answer at the seam with Ch. 28/39: because in those rows the learner's act is offloadable. The discriminator is *can the tool do the child's part?* Here, no; there, yes.
- **Exercises:** (1) Build the substitution ledger for a different practice routine (instrument practice, math-fact drills) (analyze); (2) audit a reading app: who does the decoding, what does the dashboard headline (minutes vs. cold-read growth), what happens to a Scottish/AAVE/L2 voice (evaluate); (3) TIKTOC reflection verbatim: mechanism = the child's own repeated oral decoding with feedback; safe AI = listening, error-catching, passage supply, progress curves; forbidden = TTS doing the reading, rehearsed-passage scores sold as growth; proof = cold-read fluency + comprehension trending on novel passages.
- **Analogy bank:** the metronome-and-recording-booth (practice infrastructure, not performer); flight-simulator hours still flown by the trainee; the dashboard that grades its own echo (rehearsed-passage inflation).

---
## F. Library files relevant to this chapter

- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` + Counter file — standing effect-size pair; the Counter's equity material (assistive tech for dyslexic readers) helps draw the TTS-access vs. fluency-practice boundary precisely.
- `_lib_EdTech .md` — procurement and evidence-reading frame for the vendor-heavy ASR corpus.
- `_lib_Calling_Bullshit__The_Art_of_Skepticism_in_a_Data-Driven_World.md` — "twice as effective as tutoring" as a case-study claim to dissect (what's the comparison, whose study, what outcome).
- `_lib_Weapons_of_Math_Destruction__…md` — ASR dialect bias as a worked example of encoded inequity in a "neutral" measurement tool.
- `_lib_Teaching for Deeper Learning_…md` — keeps fluency in its place: automaticity as the on-ramp to meaning-making, not the destination.

---
## G. Gaps and flags

- **CRITICAL FLAG (inherited, book-level):** the CSV's d≈0.65 ("AI voice recognition for fluency tracking is genuinely AI-native") is **[HYPOTHESIS]** — author's estimate, never a finding.
- **FLAG:** d=0.75 is from the 2018 252-list; repeated reading values differ across VL editions/MetaX — name list and year.
- **FLAG:** Therrien's exact figures circulate in two versions (fluency .83/comprehension .67 on practiced passages; some summaries cite .75/.73 means) — full text not obtained this session; verify decimals against the journal PDF before printing, and always attach the practiced-vs-transfer qualifier.
- **FLAG:** the commonly cited NRP guided-oral-reading d=0.41 was *not* confirmed at source this session — if the chapter wants the number, pull NRP ch. 3 directly; otherwise stay qualitative ("significant positive impact").
- **FLAG:** Amira/ASR-tutor evidence is predominantly vendor-funded; Evidence for ESSA rating is "Moderate." Cite the rating, not the marketing ratios. LaBerge & Samuels and Project LISTEN cited from field knowledge — verify if featured.
- **GAP:** ASR dialect/L2 misrecognition rates in current commercial reading tutors — documented as a concern class, but no specific recent audit located this session; research separately if the equity section grows beyond a paragraph.
- **GAP:** repeated vs. wide reading comparison literature (e.g., randomized comparisons in elementary samples) seen only at abstract level — verify before the chapter adjudicates between them.
