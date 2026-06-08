# CAJAL Figure Intelligence — Chapter 1: Hattie's Visible Learning and the AI Question
**Source:** chapters/01-hatties-visible-learning-and-the-ai-question.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 4 figures using Mixed density.

This chapter carries the book's heaviest conceptual load — it establishes the two-rulers lesson, the four AI-feasibility classes, the Bastani three-arm result, and the epistemological distinction between measured and hypothesized columns. Five author figure placeholders appear; I recommend producing four (the full 252-row master table is a reference artifact, not a figure, and is excluded). The Bastani three-arm result and the classification distribution are the two structural findings that no prose can ground.

---

## Figure 1 — Bastani three-arm outcome  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Identical AI technology produces opposite learning outcomes depending on whether it is guardrailed, measured as practice-period gain versus unassisted-exam change across three experimental arms.
**Figure type:** statistical (grouped/paired bar chart)

**Block 1 — Illustrae paste block:** Create a single-column scientific bar chart, 89mm wide at 300 DPI, vector, white background, comparing three experimental conditions from a randomized education trial. Render two measures per condition as paired vertical bars: a practice-period performance change and a subsequent unassisted-exam performance change, both as signed values against a zero baseline that runs across the full width. The three conditions are unrestricted AI access, no-AI control, and a guardrailed tutor. The unrestricted condition shows a tall positive practice bar and a clearly negative exam bar; the control shows a near-zero baseline reference; the guardrailed condition shows the tallest positive practice bar and an exam bar at approximately zero. Place the zero line prominently so positive and negative directions read instantly. Color the unrestricted-condition bars vermillion to signal harm, the guardrailed-condition bars bluish green to signal the safe design, and the control neutral light gray. Keep all bars flat, two-dimensional, equal width, with uniform thin strokes. Request an unannotated vector diagram with no baked-in text, numbers, or labels.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background, publication scientific chart.
- **C:** Three conditions — (1) unrestricted GPT-4: practice +48% (positive bar), exam −17 percentage points (negative bar); (2) no-AI control: baseline reference at zero; (3) guardrailed tutor: practice +127% (positive bar), exam ≈ 0 (bar at baseline). Two measures per condition: practice-period change and unassisted-exam change.
- **O:** Grouped vertical bars, three condition-groups left to right, two bars each. A single horizontal zero baseline spanning the chart, with bars rising above and dropping below it. The guardrailed group is the visual focal point (rightmost, tallest practice bar, exam at zero).
- **P:** Flat vector. Unrestricted arm bars in vermillion #D55E00 (harm); guardrailed arm bars in bluish green #009E73 (safe design); control in light gray. Zero baseline in black #000000. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the phase-gate X/Y/Z framework; omit VanLehn and Tutor CoPilot figures; omit any effect-size hinge line (that belongs to other figures); omit error bars and confidence intervals (not specified in source); omit the writing-feedback cautionary-tale pilot; do not add a y-axis scale break.

**Block 3 — Negative prompt:** confidence interval whiskers, error bars, third measure per group, hinge reference line, percentage gridlines, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Two rulers for the same effect size  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** The same d = 0.40 reads as "impressive" or "exceptional" depending on whether it is placed against Hattie's inflated synthesis distribution or Kraft's realistic field-experiment distribution.
**Figure type:** comparison panels (two distribution panels)

**Block 1 — Illustrae paste block:** Create a two-panel comparison figure, single-column 89mm wide at 300 DPI, vector, white background, sharing one horizontal effect-size axis running from below zero to about one. The left panel shows a distribution of effect sizes shifted toward higher values with three benchmark gridlines positioned at a small, a medium-hinge, and a large mark. The right panel shows a second distribution of the same shape but compressed and shifted left, with its three benchmark gridlines positioned much closer to zero. Draw one identical vertical marker at the same horizontal position in both panels to represent a single fixed effect-size value, so the eye sees it landing mid-pack in the left panel and far into the high tail in the right panel. Stack the two panels vertically, aligned on a shared horizontal axis. Use blue for the left-panel distribution and orange for the right-panel distribution; render the shared fixed marker in black so it reads as the same object in both. Flat shapes, uniform thin strokes. Request an unannotated vector diagram with no baked-in numbers or text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Left panel — Hattie synthesis distribution with benchmark lines at 0.2 (small), 0.4 (hinge), 0.8 (large). Right panel — Kraft field-experiment distribution, compressed/shifted left, benchmarks at 0.05 (small) and 0.20 (large). A single fixed vertical marker at d = 0.40 drawn identically in both panels.
- **O:** Two panels stacked vertically on a shared, aligned horizontal effect-size axis (range ~−0.1 to 1.0). Benchmark lines as light vertical rules within each panel. The shared d=0.40 marker positioned mid-distribution left, high-tail right.
- **P:** Flat vector. Left distribution blue #0072B2; right distribution orange #E69F00; shared fixed marker black #000000; benchmark rules light gray. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the Bergeron/Simpson/Slavin critiques; omit the four AI-feasibility classes; omit the Bastani arms; do not label the benchmark values numerically in-image; omit any curve-fitting statistics or sample sizes.

**Block 3 — Negative prompt:** numeric axis tick labels, benchmark value text, three or more distributions, the four feasibility classes, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Four AI-feasibility classes across the list  ·  Important
**Heuristic:** PQ
**Concept (one sentence):** The 252 influences distribute unevenly across four AI-feasibility classes, and the high-impact subset is dominated by AUGMENTED rather than NATIVE — augmentation territory, not replacement territory.
**Figure type:** statistical (paired stacked bars)

**Block 1 — Illustrae paste block:** Create a two-view proportional bar figure, single-column 89mm wide at 300 DPI, vector, white background. The first view is a single horizontal stacked bar representing the full set of 252 influences, divided into four proportional segments sized for the four AI-feasibility classes — the largest segment for the adjacent class, a nearly-as-large segment for the augmented class, a medium segment for the resistant class, and the smallest segment for the native class. Directly below, draw a second horizontal stacked bar of the same length representing only the above-hinge subset, where the augmented segment now dominates overwhelmingly, the resistant and native segments are small, and the adjacent segment shrinks to a sliver. Align the two bars left-edge to left-edge so the reordering of proportions between the full set and the high-impact subset is immediately legible. Color the augmented segment bluish green as the dominant productive class, the native segment blue, the resistant segment orange, and the adjacent segment light gray. Flat, equal-height bars, uniform thin strokes. Request an unannotated vector diagram with no baked-in text or percentages.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** View 1 (all 252): AI-ADJACENT 97 (38.5%), AI-AUGMENTED 88 (34.9%), AI-RESISTANT 38 (15.1%), AI-NATIVE 29 (11.5%). View 2 (above-hinge, 122): AI-AUGMENTED 81, AI-RESISTANT 18, AI-NATIVE 14, AI-ADJACENT 9.
- **O:** Two horizontal 100%-stacked bars of equal length, stacked vertically and left-aligned. Segment order consistent between bars so the eye tracks each class's expansion/contraction. AUGMENTED is the focal segment.
- **P:** Flat vector. AI-AUGMENTED bluish green #009E73; AI-NATIVE blue #0072B2; AI-RESISTANT orange #E69F00; AI-ADJACENT light gray. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the High-band (d≥0.70) third breakdown — keep to two views only to respect the component cap; omit the seven-dimension column structure; omit treemap nesting; do not render numeric counts or percentages in-image; omit per-influence labels.
- *Note:* the High-band sub-distribution (24 augmented / 4 native of 32) is a candidate split if a third view is wanted later; held out here to stay within the 6–8 component cap.

**Block 3 — Negative prompt:** treemap subdivisions, third stacked bar, numeric counts, percentage labels, per-influence tick marks, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 4 — Anatomy of one framework row (epistemic status)  ·  Important
**Heuristic:** VG
**Concept (one sentence):** A single influence row carries seven columns of three different epistemic kinds — measured, classified, and hypothesized — and the hypothesized cell must be visually unmistakable from the measured one.
**Figure type:** annotated example (single row schematic)

**Block 1 — Illustrae paste block:** Create a single horizontal row schematic, single-column 89mm wide at 300 DPI, vector, white background, depicting one data row divided into seven cells arranged left to right. The first cell — an effect-size band — is marked as the measured kind. The next five cells — feasibility, irreducibility, substitution risk, mechanism conflict, vendor activity — are marked as the classified kind. The seventh and final cell — a hypothetical effect — is marked as the hypothesized kind and must be visually quarantined: give it a distinct heavy border and a separating gap from the preceding six cells. Use three color treatments to encode the three epistemic kinds: one fill for the single measured cell, a second fill for the five classified cells, and a third distinct fill plus the heavy border for the hypothesized cell. The visual goal is that a reader instantly sees the seventh cell as a different kind of object from the first. Flat cells, uniform thin strokes except the deliberately heavier border on the final cell. Request an unannotated vector diagram with no baked-in text or numbers.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Seven cells in one row: cell 1 = effect-size band (MEASURED); cells 2–6 = AI feasibility, human irreducibility, substitution risk, mechanism conflict, vendor activity (CLASSIFIED); cell 7 = hypothetical AI effect (HYPOTHESIZED), separated by a gap and a heavy border.
- **O:** Single horizontal row, seven cells left to right, with a visible gap between cell 6 and cell 7. Cell 7 set apart by a heavier enclosing border.
- **P:** Flat vector. Measured cell blue #0072B2; classified cells light gray; hypothesized cell yellow #F0E442 fill with a black #000000 heavy border. Classified/measured cells uniform 1pt strokes; hypothesized cell ~2pt border. White background, unannotated.
- **E:** Omit the full 252-row table; omit the actual feedback-row values and the d≈0.50 text; omit column header text; do not depict more than one row; omit the four-class distribution.

**Block 3 — Negative prompt:** multiple rows, column header text, cell values, the d=0.70 or d=0.50 numbers, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
- **Figure 1 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** The three arms are compared simultaneously; no transition mechanism is simulated and there is no playback direction the reader must follow.
- **Figure 2 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A side-by-side comparison of two static distributions; the insight is spatial, not temporal.
- **Figure 3 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** Two proportional snapshots; the reordering is read at a glance, not animated.
- **Figure 4 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A static schematic of epistemic categories; nothing changes over time.

Video candidates: 0. Recommended for production: none.
