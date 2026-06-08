# CAJAL Figure Intelligence — Chapter 36: Highlighting, Underlining, and False Fluency
**Source:** chapters/36-highlighting-underlining-and-false-fluency.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mixed density.

Three author placeholders (the three-conditions TABLE, the two-path fluency-illusion DIAGRAM, and an explicit two-line CHART of selection quality over ten weeks). The CHART placeholder is the strongest signal — a genuine time-series the author wants — and the three-condition comparison plus the two-path illusion mechanism are both load-bearing.

---

## Figure 1 — Selection quality over ten weeks: constrained-with-critique vs. pre-marked  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Under constraint plus AI critique, the proportion of student marks landing on structural claims rises across ten weeks, while in sections where Smart Highlights pre-marks are visible, selection quality stays flat or declines.
**Figure type:** two-line time series

**Block 1 — Illustrae paste block:** Create a single-column two-line time-series chart, 89mm wide, 300 DPI, vector, white background. The horizontal axis is week, one through ten; the vertical axis is the proportion of student marks landing on claims rather than examples or trivia, scaled from zero. Plot two lines: Line A (constrained marking with AI critique) rising steadily from a low value in week one to a high value by week ten; Line B (sections where pre-marks were visible) flat or gently declining across the same span. Keep the two lines clearly distinguishable by color alone, with simple markers at each week. The divergence between the rising line and the flat line is the entire message. Zero-anchored y-axis, even tick marks, 1pt strokes, no 3D, no baked-in numbers or legend text. Request an unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Two confirmed series across weeks 1–10: Line A = proportion of marks on claims under constraint + critique, rising; Line B = proportion in sections with pre-marks visible, flat or declining. Pilot-internal, direction confirmed; values illustrative. Explicit in the chapter.
- **O:** Two lines over a 1–10 week x-axis, zero-anchored y-axis (proportion on claims); Line A ascending, Line B flat/declining.
- **P:** Flat vector, 1pt strokes. Color map: Line A (constraint + critique, improving) → #009E73 (positive); Line B (pre-marks visible, suppressed) → #D55E00 (the suppressed/harmed condition). Axes → gray. White bg, unannotated.
- **E:** Exclude the three-condition table, the fluency-illusion mechanism, Dunlosky rating prose, and case-study toggle narrative.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Two paths: discrimination retained vs. fluency illusion installed  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** Constrained marking forces a judgment of importance and is reviewed by closed-book retrieval (fluency illusion broken); free or pre-marked text is reread, each pass feels smoother, confidence rises, and the gap to actual retrieval is the illusion.
**Figure type:** two-path mechanism diagram with divergent terminal states

**Block 1 — Illustrae paste block:** Create a single-column two-path diagram, 89mm wide, 300 DPI, vector, white background, reading top to bottom. Path A (constrained marking): student judges importance → marks one sentence per paragraph → reviews by closing the book and retrieving from memory, terminating in a node marking "fluency illusion broken, storage strength tested." Path B (free or pre-marked): text arrives already highlighted → student rereads → rereading feels smooth → confidence rises, terminating in a node marking "fluency was the signal, retrieval untested, the gap is the illusion." Connect stages within each path by single downward arrows. The two terminal nodes must contrast sharply by color — one a tested/sound endpoint, one an illusory endpoint. The figure makes visible that the same surface behavior (marking) splits into a learning path and an illusion path depending on whether discrimination and retrieval occur. Flat fills, 1pt strokes, single-headed arrows, no baked-in text. Request an unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Path A: judge importance → mark one sentence per paragraph → closed-book retrieval review → illusion broken, storage tested. Path B: pre-marked/free text → reread → feels smooth → confidence rises → retrieval untested, gap = illusion. Explicit in the chapter (Koriat-Bjork mechanism).
- **O:** Two parallel vertical paths, single downward arrows, divergent terminal nodes (tested vs. illusory).
- **P:** Flat vector, 1pt strokes. Color map: Path A (discrimination + retrieval) → #009E73 (positive); Path B (fluency illusion) → #D55E00 (harm); the constant surface behavior of "marking" at the top → gray. Arrows → black. White bg, unannotated.
- **E:** Exclude the ten-week time series, the three-condition table, the safe-AI-roles list, and the default-toggle case.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Three marking conditions and the mechanism profile  ·  Important
**Heuristic:** VG
**Concept (one sentence):** Three conditions diverge on whether the discrimination mechanism runs and whether the fluency illusion is installed: constrained marking (mechanism runs, benefit), free marking (no discrimination, low utility), and AI pre-marked text (discrimination removed, illusion pre-installed).
**Figure type:** three-row condition matrix

**Block 1 — Illustrae paste block:** Create a single-column three-row matrix, 89mm wide, 300 DPI, vector, white background. Three horizontal rows for the three conditions: (1) constrained marking — one sentence per paragraph, justified; (2) free marking — paint the page; (3) AI pre-marked text. Two aligned indicator columns to the right of each row: a "discrimination running?" indicator and a "fluency illusion installed?" indicator, each rendered as a present/absent state marker. Row 1 shows discrimination present and illusion absent; row 2 shows discrimination minimal and illusion mild; row 3 shows discrimination absent and illusion present — the inverse of row 1. Order rows so the descent from healthy mechanism to pure illusion reads top to bottom. Encode the two indicator states by color only. Flat fills, 1pt cell strokes, no baked-in text. Request an unannotated vector grid.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Three confirmed conditions: (1) constrained marking — discrimination runs, meaningful benefit; (2) free marking — minimal discrimination, low utility; (3) AI pre-marked — discrimination removed, fluency illusion pre-installed. Two indicators per row: discrimination running (yes/minimal/no), illusion installed (no/mild/yes). Explicit in the chapter.
- **O:** Three condition rows, two aligned indicator columns (discrimination, illusion), present/absent state markers, ordered healthy-to-illusory top-to-bottom.
- **P:** Flat vector, 1pt strokes. Color map: "discrimination running" present → #009E73, absent → #D55E00; "illusion installed" present → #D55E00, absent → #009E73; intermediate (free marking) states → #E69F00. Cell strokes → black. White bg, unannotated. (Note: positive states green, harmful states vermillion — no red-green pairing within any single indicator.)
- **E:** Exclude the time series, the two-path illusion mechanism, the upgrade-path roles, and evidence-check prose.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a candidate — Criterion: none — Reason: static time series.
Figure 2 — Status: Not a candidate — Criterion: none — Reason: a two-path mechanism comprehensible as static; no sub-observable transformation needs playback.
Figure 3 — Status: Not a candidate — Criterion: none — Reason: a static condition matrix.

Video candidates: 0. Recommended: none.
