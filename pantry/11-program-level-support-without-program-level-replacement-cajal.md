# CAJAL Figure Intelligence — Chapter 11: Program-Level Support Without Program-Level Replacement
**Source:** chapters/11-program-level-support-without-program-level-replacement.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mechanistic density.

---

## Figure 1 — The four-link implementation chain  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** Program effects come from a four-link chain — Teach → Check → Diagnose → Respond — where each link can be performed by a human or automated, and the Diagnose and Respond links are the load-bearing mechanism that automating replaces rather than augments.
**Figure type:** Horizontal left-to-right flowchart with a two-row human/AI split beneath each link.

**Block 1 — Illustrae paste block:** Create a horizontal left-to-right flowchart on a white single-column canvas, 89mm wide, 300 DPI, flat vector. Show four sequential boxes connected by single-headed arrows pointing right: Teach, Check, Diagnose, Respond. Below each box place two stacked cells in a parallel grid — an upper row for "humans perform this" and a lower row for "AI performs this" — so the eye can read, per link, who owns it. Visually emphasize the third and fourth boxes (Diagnose and Respond) as the mechanism links: make them the dominant, anchored elements while Teach and Check sit as supporting upstream stages. The chain should read as a closed sequence whose force lives in the later links. Use blue for the dominant Diagnose and Respond boxes, sky blue for the upstream Teach and Check boxes, bluish green for the human-performs row, orange for the AI-performs row, light gray for connectors and the grid. Maximum eight labeled components. One-pixel strokes, white background, request an unannotated vector with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, horizontal flowchart with grid.
- **C:** Four chain links in order: Teach, Check, Diagnose, Respond. Beneath each: a human-performs cell and an AI-performs cell. Diagnose and Respond are the load-bearing mechanism links.
- **O:** L-to-R single-headed arrows across the four boxes; a two-row (human/AI) parallel grid spanning the same horizontal extent; Diagnose and Respond visually dominant.
- **P:** Flat vector, Okabe-Ito: Diagnose/Respond boxes blue #0072B2; Teach/Check boxes sky blue #56B4E9; human row bluish green #009E73; AI row orange #E69F00; grid/connectors light gray. 1pt strokes, white bg, unannotated.
- **E:** Exclude the safe-use-vs-trap table content (Figure 2), the autopilot-remediation failure narrative, the four effect-size rows (Figure 3), the Elena case contract clauses, the disagreement-log artifact, and exposure-to-reading / science-program specifics.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Figure 2 — Safe AI role vs. substitution trap, by loop link  ·  Important
**Heuristic:** VG
**Concept (one sentence):** For each of the four chain links there is a legitimate AI support role and a corresponding substitution trap where AI performs the act instead of supporting it, each with a distinct failure signature.
**Figure type:** Four-row structured matrix / comparison schematic.

**Block 1 — Illustrae paste block:** Create a structured four-row matrix on a white single-column canvas, 89mm wide, 300 DPI, flat vector. The four rows correspond to the chain links Teach, Check, Diagnose, Respond, stacked vertically. Each row is divided into three cells reading left to right: a safe-AI-support cell, a substitution-trap cell, and a failure-signature cell. Use a consistent color logic so the eye reads columns: the safe-support column in bluish green (the positive, supporting role), the substitution-trap column in vermillion (the blocking/harmful role), and the failure-signature column in a neutral gray. Keep the Diagnose and Respond rows visually weighted as the rows where the trap matters most. Single-headed connectors are not needed; this is a grid, not a flow. Maximum eight labeled cells emphasized. One-pixel strokes, white background, unannotated vector with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, matrix.
- **C:** Rows = Teach, Check, Diagnose, Respond. Columns = safe AI role, substitution trap, failure signature. Trap in each link = AI performing the act rather than supporting it. Diagnose/Respond rows carry the heaviest stakes.
- **O:** Four stacked rows, three columns each, column-consistent color coding; no flow arrows.
- **P:** Flat vector, Okabe-Ito: safe-role column bluish green #009E73; trap column vermillion #D55E00; failure-signature column neutral light gray; row dividers light gray. 1pt strokes, white bg, unannotated.
- **E:** Exclude the implementation-chain flow arrows (Figure 1), the human/AI ownership rows, the effect-size data (Figure 3), Elena's contract specifics, the Tuesday-meeting decline narrative, and mimicking/Liljedahl content.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Figure 3 — The four program-level influences with effect sizes  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** The group's four influences span d = 0.43 to 0.59, all above the 0.40 hinge.
**Figure type:** Horizontal dot/bar plot against the 0.40 hinge line, value axis from zero.

**Block 1 — Illustrae paste block:** Create a horizontal dot plot on a white single-column canvas, 89mm wide, 300 DPI, flat vector. Plot four influences as points or short bars along a value axis beginning at zero and extending to about 0.65, ordered top to bottom by magnitude: mathematics programs (0.59), science programs (0.48), providing formative evaluation (0.48), exposure to reading (0.43). Draw one prominent vertical reference line at the 0.40 hinge with all four points sitting to its right. Keep mathematics programs as the visually dominant anchor (highest value). Use blue for the markers, light gray for the axis, and a distinct neutral mid-gray for the hinge line. Proportional ink: positions strictly reflect values; no decorative scaling. Maximum six labeled components. One-pixel strokes, white background, unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, dot/bar plot.
- **C:** Four influences: mathematics programs 0.59; science programs 0.48; providing formative evaluation 0.48; exposure to reading 0.43. Hinge reference at 0.40.
- **O:** Horizontal value axis from zero; four rows ordered by magnitude; one vertical hinge line at 0.40.
- **P:** Flat vector, Okabe-Ito: markers blue #0072B2; hinge line neutral mid-gray; axis light gray. Proportional ink, 1pt strokes, white bg, unannotated.
- **E:** Exclude the [HYPOTHESIS] adaptive-practice discount estimates, rank numbers, Kraft benchmark commentary, the implementation chain, and the safe/trap matrix.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Video Candidate Pass
Figure 1 — Status: Not recommended — Criterion: none — Reason: The learning target is the human/AI ownership split per link, read better in a static grid than in playback.
Figure 2 — Status: Not recommended — Criterion: none — Reason: Static comparison matrix, no transition mechanism.
Figure 3 — Status: Not recommended — Criterion: none — Reason: Static quantitative comparison.

Video candidates: 0. Recommended: none.
