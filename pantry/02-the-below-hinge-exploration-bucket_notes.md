# Research Notes: Chapter 02 — G01: The Below-Hinge Exploration Bucket
**Source:** TIKTOC.md chapter entry (## Chapter 2, ~line 463) + data/hattie-ai-7dimensions.csv (all 130 rows with effect_size < 0.40) + chapters/93-hattie-ai-analysis-summary.md + web verification (this session)
**Notes file:** `02-g01-the-below-hinge-exploration-bucket_notes.md`
**Corresponding chapter:** `chapters/02-g01-the-below-hinge-exploration-bucket.md` (not yet written)
**Generated:** 2026-06-07

---
## Chapter summary (from TIKTOC.md)

**Group signature:** Lower-impact / d < 0.40 / reader exploration bucket
**Count:** 130 influences
**Effect-size range:** -0.90 to 0.39; weighted average 0.15

**Highest-ranked examples:**
- 123. Social skills programs (d=0.39)
- 124. Relations of high school achievement to career performance (d=0.38)
- 125. Drama/arts programs (d=0.38)
- 126. Career interventions (d=0.38)
- 127. Music programs (d=0.37)
- 128. Worked examples (d=0.37)
- 129. Mobile phones (d=0.37)
- 130. Bilingual programs (d=0.36)

**Human-readable example:** A teacher sees that a favorite intervention, such as music programs or worked examples, sits below the d = 0.40 hinge. The point is not to discard it, but to ask whether it is the right tool for the local problem.

**Case study:** A district AI committee receives a menu of low-effect technology purchases. The team learns to stop asking whether each tool is exciting and instead asks whether it belongs below the hinge, in a niche use case, or outside the strategic plan.

**AI use / do-not-use boundary:** Use AI to explore, sort, and question low-impact influences; do not let novelty or automation move a weak intervention into the strategic center.

**Chapter structure:** 1. Translate the group signature. 2. Explain the strongest examples and mechanisms. 3. Walk the case study. 4. Productive AI role + substitution trap. 5. Phase gate (AI may do X / human must do Y / evidence is Z). 6. Reader audit.

**Reflection exercise:** Choose one tool or routine in your own setting that resembles this group. Write one sentence each for: mechanism, safe AI support, forbidden substitution, and proof that learning happened.

---
## A. Conceptual foundations

### 1. Why d < 0.40 does not mean "doesn't work" — four distinct reasons

The bucket's whole pedagogy is teaching readers to *disaggregate* a low number. Four different stories produce a below-hinge d, and they demand opposite responses:

1. **Different ruler.** Kraft (2020): in field RCTs on standardized outcomes, 0.20 is *large*. Many bucket entries (e.g., tech-for-disadvantaged ES ≈ +0.20, Pellegrini) are respectable causal effects judged on the right scale. The hinge was built from a synthesis full of inflated lab effects; honest field studies look "weak" beside it (Slavin 2018).
2. **Averaged-away moderators.** The bucket's best example is its own resident: worked examples (see §2). Low average ≠ low effect for the population/condition where the mechanism actually operates.
3. **Not an intervention at all.** Dozens of rows are background variables, correlations, or structural conditions: relations of HS achievement to career performance (d = 0.38) is a *correlation*; SES proxies, family structure, gender, relative age are not buyable; the Harmful band (boredom −0.49, deafness −0.61, ADHD −0.90, depression −0.36) describes conditions, not failed treatments. The CSV's notes mark many rows "N/A — not a manipulable intervention." Reading these as a menu is the category error Chapter 1 warned about.
4. **Genuinely weak as typically implemented.** Some entries earn the low number as deployed at scale: web-based learning 0.18, one-to-one laptops 0.16, distance education 0.13. The dataset calls several of these "the honest number vendors should be required to cite" — these rows are the book's anti-hype receipts.

**Common misconception:** "Below hinge = discard." Correction: below hinge = *interrogate*. Ask which of the four stories applies before deciding anything.

**Worked example:** Put class size reduction (d = 0.21) and AI tutoring-as-measured beside each other with costs attached (the `_lib_The_Digital_Delusion_Counter.md` arithmetic: ~$3,000/student vs. ~$50/student; cost per 0.10 SD differs ~48×). The hinge is silent about cost, scalability, equity, and population — the four things adoption decisions actually turn on.

### 2. Worked examples (d = 0.37): the bucket's pedagogically richest tension

Cognitive load theory (Sweller; Renkl; Atkinson) finds worked examples *powerful for novices*: studying worked solutions beats unsupported problem-solving early in skill acquisition — Sweller calls the worked-example effect "the best known and most widely studied of the cognitive load effects." The **expertise reversal effect** (Kalyuga et al. 2003) then flips it: for advanced learners, worked examples become redundant or harmful, and problem-solving wins. So "what is the effect of worked examples?" has no single answer — *the moderator (learner expertise) is the finding*.

The Hattie number embodies the averaging problem: VL 2009 reported d = 0.57 from one meta-analysis (rank ~30); the later 252-list shows d = 0.37 after averaging in Wittwer & Renkl's (2010) meta-analysis of *instructional explanations within example-based learning* (≈0.16) — a related-but-different construct (per visablelearning.blogspot.com's reconciliation; verify against Corwin/MetaX before printing the mechanics). Either way the public number moved 0.57 → 0.37 while the underlying cognitive-load literature didn't change at all.

AI angle: worked examples are the bucket's clearest **AI-NATIVE** member (CSV: "AI can generate infinite correctly-worked examples aligned to student error patterns and curriculum level") — legitimately so, *for novices, faded over time* (worked example → completion problem → full problem). The trap is the expertise reversal: an AI that keeps serving worked examples past the novice phase converts a learning aid into a crutch — a miniature of the book's whole fading argument.

**Common misconception:** "d = 0.37 means worked examples barely work." Correction: they work very well for exactly the learners and phase the mechanism specifies, and can be negative outside it. The average is the artifact.

**Sources:** Sweller & Cooper 1985; Atkinson, Derry, Renkl & Wortham 2000 (Rev. Educ. Research); Renkl 2014; Kalyuga, Ayres, Chandler & Sweller 2003, "The Expertise Reversal Effect," Educational Psychologist 38(1); Wittwer & Renkl 2010 (Educ. Psych. Review); en.wikipedia.org/wiki/Worked-example_effect; visablelearning.blogspot.com/p/worked-examples.html (blog reconciliation — flagged).

### 3. The shopping-list fallacy and its mirror image

Reading the ranked list top-down as "buy the top, cut the bottom" fails twice in this bucket. Downward: cutting music, drama, play, or bilingual programs because of low ds ignores that (a) their primary outcomes aren't achievement transfer (Sala & Gobet 2017, *Does Far Transfer Exist?*: music/chess far-transfer to academics is small-to-null and shrinks with design quality — but nobody funds music programs to raise math scores; the honest defense of arts is intrinsic + civic + embodied, not test-score alchemy), and (b) equity populations hide inside averages (text-to-speech for a dyslexic reader is not "0.20-mediocre," it is the difference between reading and not reading — the Counter file's strongest passage). Upward: the mirror fallacy is letting AI novelty *promote* a bucket member into the strategic center — AI-generated PowerPoints (host d = 0.26), AI gamification (0.35), AI web platforms (0.18) inherit the host influence's ceiling unless the mechanism changes. The CSV's recurring phrasing for the bucket's tech rows — "legitimate use case; the effect size below hinge is the honest number" — is the chapter's refrain.

**Common misconception:** "AI will lift a weak intervention above the hinge." The hypothetical_ai_effect column never claims this for the bucket — its estimates are mostly at or below the original d, several negative — and those are [HYPOTHESIS] labels anyway.

**Worked example:** Homework (d = 0.29, AI-RESISTANT, conflict present, HIGH vendor activity) — the bucket's danger zone: a weak-average influence whose mechanism (independent practice and consolidation) is *actively destroyed* by answer-providing AI "homework helpers," now a massive product category. Below-hinge + high vendor activity = maximum skepticism.

### 4. Sorting the bucket: explore / niche / de-prioritize (the chapter's learning outcome)

The TIKTOC outcome is a three-way sort, and the CSV supports operationalizing it:
- **Explore** — manipulable interventions with strong moderator stories or cheap implementations: worked examples, gaming/simulations (0.35), interleaved practice (0.21 — beloved by cognitive psychology yet low here; another averaging casualty worth a sentence), calculators-after-conceptual-mastery (0.27).
- **Niche** — population- or purpose-specific wins: bilingual programs (0.36), test-prep (0.30) before a genuine gate, mindfulness (0.29) for wellbeing-not-achievement goals, assistive tech (cross-reference its above-hinge twin, technology with learning-needs students, d = 0.57).
- **De-prioritize (strategically)** — structural variables you can't buy (school choice 0.12, single-sex schools 0.08), placebo-grade entries (background music 0.10, humor 0.04), and "honest number" tech buckets (one-to-one laptops 0.16, distance education 0.13).
- Plus the **Harmful band** (17 rows, −0.01 to −0.90): mostly conditions to mitigate, not interventions to avoid buying — retention (−0.32) and suspension/expulsion (−0.20) being the actionable policy exceptions.

**Common misconception:** "The sort is in the data." It isn't — it requires the local problem statement. The same row sorts differently in different districts; that is what makes this an exploration bucket rather than a verdict list.

---
## B. Domain examples and cases

### Case 1 (TIKTOC case): The district AI committee's purchase menu
A committee faces a vendor menu: AI presentation generator ("saves teachers hours"), AI gamified math app, AI homework helper, AI phone-based microlearning. The chapter walks the sort: PowerPoint host influence 0.26 (legitimate, peripheral — time savings count only if the time returns to learning); gaming/simulations 0.35 (explore, with explicit transfer conditions); homework helper (decline — mechanism conflict + high vendor activity); phone microlearning (mobile phones d = 0.37 is *not* an endorsement — see Case 2). Decision artifact: each tool tagged explore/niche/outside-plan with a one-line mechanism rationale.

### Case 2: Mobile phones (d = 0.37) — the row that teaches CSV literacy
The bucket's best "read the notes, not the number" exercise. A naive reader sees 0.37 and concludes phones nearly clear the hinge. The CSV notes say the opposite: physical phone presence adds distraction and multitasking cost, and the hypothetical column even posits a *negative* AI-on-phones estimate (d ≈ −0.30 [HYPOTHESIS]). External evidence is genuinely mixed and modest: Beland & Murphy (UK) found post-ban exam gains ≈ 0.07 SD overall, concentrated in low achievers (~0.14 SD), with high achievers ≈ 0; a 2024 rapid review puts ban effects around d = 0.16 overall (stronger for wellbeing than achievement); Florida's statewide ban showed modest year-1 and larger year-2 gains; scoping reviews (Campbell et al. 2024) caution against one-size-fits-all conclusions. Lesson: a mid-pack d can sit on top of a sign-flipping, population-dependent literature.

### Case 3: Music and drama programs — defending what the number can't see
A superintendent proposes cutting arts funding "because Hattie." The chapter's move: Sala & Gobet show far-transfer claims for music are weak — so don't defend arts with test-score alchemy; defend them on their actual outcomes (musicianship, ensemble experience, performance before a human audience, belonging, embodiment — all AI-ADJACENT per the CSV: "AI tools are peripheral; embodied practice and human audience are the mechanism"). The below-hinge bucket protects programs from bad defenses as much as from bad attacks.

### Failure case: Classroom management (d = 0.35) read as "skippable"
A new-teacher mentor sees classroom management below the hinge and deprioritizes it in coaching. Two-part correction: (1) the number moved — VL 2009 reported d = 0.52 for classroom management (Marzano, Marzano & Pickering 2003 likewise found ~0.52 on achievement and 0.90 on reducing disruptive behavior); the 252-list shows 0.35 — same averaging dynamics as worked examples; (2) management is an *enabling condition*: it doesn't raise achievement directly, it purchases the time-on-task and relational order in which above-hinge influences can operate. The CSV codes it AI-RESISTANT, conflict present ("behavioral authority, physical presence, and relational credibility are the mechanisms... AI has no meaningful role") — a below-hinge influence that is simultaneously near-irreplaceable. The bucket contains load-bearing walls.

---
## C. Connections and dependencies

**Prerequisites:** Chapter 1 entirely — the hinge and its limits, the two-ruler problem (Kraft), the intervention/condition/correlation distinction, the [HYPOTHESIS] label, the phase gate.

**Unlocks:** the sorting discipline (explore/niche/de-prioritize) reused implicitly in every group chapter; the "honest number" framing reused at full strength in Ch38 (ICT as infrastructure) and Ch39 (technology in writing); the homework warning anticipates Ch31 (feedback trap) and Ch35 (note taking); worked-examples-with-fading anticipates Ch27 (scaffolding/deliberate practice) and Ch19 (low-risk AI-native practice); the arts/embodiment defense anticipates Ch22 (cohesion and adventure beyond the screen).

**Contrasts:** Ch3 (G02) is the structural opposite — above-hinge, low-risk augmentation. The Ch2→Ch3 seam is where the reader learns the taxonomy's two axes (impact band × mechanism fit) are independent.

---
## D. Current state of the field

**Settled:**
- Effect-size benchmarks must be design-relative; 0.20 in a field RCT on standardized outcomes is large (Kraft 2020).
- Worked examples robustly help novices; expertise reversal is replicated (Sweller; Kalyuga et al. 2003).
- Far transfer from music/chess/working-memory training to academic outcomes is small-to-null in the best-controlled designs (Sala & Gobet 2017) — with named dissent.
- Phone bans produce modest achievement gains concentrated in lower-achieving students (Beland & Murphy; later replications mixed in size, fairly consistent in direction).

**Contested:**
- Whether the below-hinge band means anything at all given effect-size non-comparability (Bergeron & Rivard; Simpson) — the chapter should concede the band is a heuristic sort of a debated synthesis.
- Arts/music transfer (Bigand & Tillmann and others dispute Sala & Gobet's near/far partition).
- Phone-ban magnitudes and the right policy grain (Campbell et al. 2024 scoping review: nuanced, not one-size-fits-all).
- Interleaving and individualized instruction sitting below hinge while lab literatures celebrate them — live reconciliation debates and good classroom discussion fodder.

**Key references:** Kraft 2020 (doi 10.3102/0013189X20912798); Sweller & Cooper 1985; Atkinson et al. 2000; Kalyuga et al. 2003 (doi 10.1207/S15326985EP3801_4); Wittwer & Renkl 2010; Sala & Gobet 2017 (doi 10.1177/0963721417712760); Beland & Murphy 2016 ("Ill Communication," LSE CEP / Labour Economics); Böttger & Zierer rapid review 2024 (MDPI Educ. Sci. 14(8):906); Campbell et al. 2024 (doi 10.1177/20556365241270394); Marzano, Marzano & Pickering 2003; Slavin 2018 blog.

**Recent developments:** statewide/national phone bans (Florida 2023 onward; several countries) are generating the first at-scale quasi-experiments — these numbers will keep moving; AI "homework helper" and phone-based tutoring products are pushing directly into this bucket's highest-conflict rows; *The Sequel* (2023) re-bands several bucket members under new technology domains — the chapter should freeze on the 252-list and say so explicitly.

---
## E. Teaching considerations

**Where readers get stuck:**
- *The bucket feels like a graveyard.* Readers skim 130 "losers." Fix: open with worked examples or classroom management — bucket members that are alive, powerful, and merely mis-averaged — before showing genuine duds.
- *Sorting without a problem statement.* Readers want explore/niche/de-prioritize labels handed to them. Force a local problem definition first; same row, different district, different sort.
- *Negative-band confusion.* Readers treat Harmful-band rows (ADHD −0.90, deafness −0.61) as "interventions that hurt." They are mostly conditions correlated with lower achievement, not treatments; the CSV notes say so explicitly. One paragraph of band hygiene prevents an embarrassing misread.
- *The novelty promotion.* Readers grant AI versions of bucket items a fresh hearing ("but it's AI now"). Counter: the mechanism didn't change, so the ceiling didn't either — unless the tool changes who does the cognitive work, in which case classify the *new* mechanism, on its own evidence.

**Analogies that work:** the bucket as a *toolbox drawer, not a trash can* — specialized tools, wrong as defaults; averages as smoothies (0.37 is what worked examples taste like blended with their own moderators); the hinge as sea level (fertile land exists below it — you just need to know you're below it and build accordingly); the answer-providing homework AI as a forklift at the gym.

**Exercises:** (1) The three-way sort: give readers 12 CSV rows (mixing intervention/condition/correlation/harmful) and require explore/niche/de-prioritize tags + one-sentence mechanism rationales (analyze). (2) Moderator hunt: for worked examples, complete "works for ___ under ___, reverses for ___" from the Kalyuga et al. abstract (understand/analyze). (3) Vendor-menu triage: the Case 1 menu with prices attached; compute cost-per-plausible-benefit and defend one purchase and one decline (evaluate). (4) The TIKTOC reflection exercise verbatim (mechanism / safe AI support / forbidden substitution / proof of learning).

---
## F. Library files relevant to this chapter

- `_lib_The_Digital_Delusion_Counter.md` — **the chapter's spine**: the 0.40-threshold-is-arbitrary argument, the cost-effectiveness arithmetic (class size vs. AI tutoring), "half of education is below the average by definition," average-vs-universal collapse (Butter Knife Fallacy; barber-surgeon parable), equity populations inside low averages (dyslexia TTS; rural online AP access), the dosage inverted-U.
- `_lib_The_Digital_Delusion_-_Jared_Cooney_Horvath.md` — the absolutist below-hinge position the chapter argues against, plus genuinely useful bucket data: the EdTech ≈ +0.29 convergence, screen-inferiority and handwriting effects, smartphone-ban evidence as he reads it.
- `_lib_Science_Fictions.md` — why lab-inflated literatures (the bucket's comparison class) overstate effects; publication-bias mechanics for the moderator discussions.
- `_lib_Calling_Bullshit.md` — reading vendor menus; the "honest number" discipline.
- `_lib_Weapons_of_Math_Destruction.md` — what happens when a single score (a d, a ranking) drives resource allocation over populations the average can't see — the equity argument of Case 3.
- `_lib_Building_Thinking_Classrooms.md` — non-AI classroom structures relevant to classroom management and the enabling-condition argument.
- `_lib_Teaching_for_Deeper_Learning.md` — mechanism vocabulary for worked examples, retrieval, and fading.
- `_lib_Co-Intelligence.md` — the "but it's AI now" promotion temptation; disciplined-experimentation framing for the *explore* tier.
- `_lib_Whistling_Vivaldi.md` — stereotype threat (d = 0.33, in this bucket) is a psychological condition addressed relationally, not a product category; the CSV codes the remedy as human-relational.

---
## G. Gaps and flags

- **CRITICAL FLAG (inherited, book-level):** every hypothetical_ai_effect cited from the bucket (e.g., mobile phones d ≈ −0.30, homework d ≈ −0.10) is **[HYPOTHESIS]** — the author's estimate, never a finding. The chapter cites them only as the author's explicit conjectures, in hypothesis language.
- **FLAG (verify before printing):** the worked-examples 0.57 → 0.37 reconciliation (VL 2009 single meta-analysis vs. later averaging-in of Wittwer & Renkl 2010's ≈0.16) comes from the visablelearning.blogspot critique site; direction and components are corroborated, but confirm the exact arithmetic against MetaX before asserting it as the mechanism of the drop. Same flag for classroom management 0.52 (VL 2009) → 0.35 (252-list).
- **FLAG:** TIKTOC says the bucket = 130 influences (ranks 123–252); appendix 93's band table gives Below hinge 81 + Negligible 32 + Harmful 17 = 130. Consistent — but the chapter must present the bucket as three bands, not one undifferentiated mass, or the Harmful-band misread (see E) is guaranteed.
- **FLAG:** Wittwer & Renkl 2010 measured *instructional explanations in example-based learning*, not worked examples wholesale — if the chapter tells the averaging story, name the construct mismatch; that mismatch is the actual pedagogical point.
- **FLAG:** Sala & Gobet is contested (near/far partition critiques; Bigand & Tillmann reply literature) — present as best-current-evidence with named dissent, not as settled.
- **GAP:** Beland & Murphy's exact subgroup coefficients (0.07 SD overall / ~0.14 SD bottom quintile are the widely reported figures) were not verified at full text this session — check the LSE CEP working paper or the Labour Economics 2016 version before printing decimals.
- **GAP:** Bilingual programs (d = 0.36) received no dedicated search this session; if the chapter features it beyond a list mention, research the substantial, contested bilingual-education effectiveness literature separately.
