# CAJAL Figure Intelligence — Chapter 20: Problem Solving and Expectations Need Human Calibration
**Source:** chapters/20-problem-solving-and-expectations-need-human-calibration.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mechanistic density.

The chapter carries two explicit author placeholders (the parallel-calibration diagram and the prediction-loop diagram), both of which are strong figure intentions worth designing. A third figure is warranted by the two-influence effect-size structure (0.68 and 0.43 against the 0.40 hinge), which the prose repeatedly invokes but never visualizes.

---

## Figure 1 — The self-sealing prediction loop versus the provisional-belief alternative  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** Routing tasks by predicted proficiency creates a circular, self-confirming loop (predicted low → scaffolded routine → less repertoire built → performs as predicted → predicted lower), whereas the high-expectation teacher's provisional belief runs a linear, evidence-updating chain that does not seal.

**Figure type:** cycle diagram with adjacent linear chain (systems/causal diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with two coupled structures. On the left, draw a closed clockwise circular loop of five nodes connected by single-headed arrows: "student predicted low," "receives scaffolded routine," "less problem-solving repertoire built," "performs as predicted," "prediction updated lower," with the final arrow returning to the first node to close the circle. Render this loop in vermillion to signal a blocking, self-confirming dynamic. To the right, draw a separate horizontal left-to-right linear chain of three nodes with single-headed arrows: "demand for all," "support calibrated in the moment," "performance data updates belief provisionally," and leave the chain open-ended (no return arrow) to show it does not seal. Render this chain in bluish green to signal the positive alternative. Keep the two structures visually distinct and spatially separated. Use 1pt strokes, flat fills, white background. Maximum six nodes in the loop plus three in the chain. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Confirmed loop nodes (from prose): "student predicted low" → "receives scaffolded routine" → "less problem-solving repertoire built" → "performs as predicted" → "prediction updated lower" → back to start. Confirmed linear-chain nodes: "demand for all" → "support calibrated in the moment" → "performance data updates belief provisionally." The loop is self-sealing; the chain is open. No inferred entities required.
- **O:** Left region: closed clockwise pentagonal loop, single-headed arrows between nodes, arrow closing back to the first node. Right region: horizontal L-to-R three-node chain, single-headed arrows, terminating open. Two structures clearly separated with whitespace.
- **P:** Flat vector, 1pt strokes. Loop nodes and arrows in Vermillion #D55E00 (blocking/self-confirming). Chain nodes and arrows in Bluish Green #009E73 (positive alternative). Node containers in black #000000 outline. White background. Unannotated.
- **E:** Exclude the task-factory workflow, the allocation-audit content, the kill-log material, the Bastani +48/−17 numbers, and any effect-size values — those belong to other figures. No timeline axis, no quantitative scale.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Two parallel calibration problems  ·  Critical
**Heuristic:** VG
**Concept (one sentence):** Problem-solving teaching and teacher expectations are the same structural problem — calibration — each with a mechanism, an AI default that opposes it, and a resulting conflict, unified by the bottom claim that calibration means withholding certainty while evidence arrives.

**Figure type:** two-column comparison panel with shared base row (conceptual map)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure organized as two parallel vertical columns above a shared horizontal base bar. The left column has three stacked cells reading top to bottom: mechanism, AI default, conflict. The right column mirrors it with three stacked cells: mechanism, AI default, conflict. Below both columns, a single full-width base bar spans the figure. Use single-headed downward arrows connecting the three cells within each column to show the progression from mechanism through AI default to conflict. Color the left column's mechanism cell and the right column's mechanism cell in blue as the anchoring concept; color both AI-default cells in vermillion to signal the opposing force; color both conflict cells in a transitional reddish purple; color the shared base bar in neutral gray. Keep the two columns visually symmetric so the parallelism is immediate. Use 1pt strokes, flat fills, white background, six content cells plus one base bar. Request an unannotated vector layout with no styling flourishes.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Left column (Problem-solving teaching): mechanism = calibrated productive struggle; AI default = helpfulness on request; conflict = rescue removes the struggle. Right column (Teacher expectations): mechanism = tuned belief → opportunity allocation; AI default = prediction from priors; conflict = prediction manufactures the expectation. Shared base bar: "calibration = withholding certainty while evidence arrives." All entities explicit in prose.
- **O:** Two symmetric vertical columns, each three cells stacked top-to-bottom with single-headed downward arrows between cells. One full-width base bar beneath both columns. Symmetry emphasized.
- **P:** Flat vector, 1pt strokes. Mechanism cells in Blue #0072B2 (dominant anchoring concept). AI-default cells in Vermillion #D55E00 (opposing force). Conflict cells in Reddish Purple #CC79A7 (transitional). Base bar in gray (neutral). Black #000000 cell outlines. White background. Unannotated.
- **E:** Exclude the prediction-loop circular structure (Figure 1), the effect-size numbers, the task-factory list, and the case-study outcomes. This figure is purely the structural parallelism — no quantitative content.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Two influences against the Hattie hinge  ·  Important
**Heuristic:** PQ
**Concept (one sentence):** The group's two influences — problem-solving teaching (d = 0.68) and teacher expectations (d = 0.43) — both sit above the d = 0.40 hinge, but with a meaningful gap between them.

**Figure type:** horizontal bar chart with reference line

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal bar chart with a quantitative x-axis running from zero to 0.80, scaled linearly and beginning at true zero. Draw two horizontal bars of equal height: an upper bar extending to 0.68 and a lower bar extending to 0.43. Draw a single vertical reference line crossing all bars at 0.40 to mark the hinge. Color the longer 0.68 bar in blue as the dominant influence and the shorter 0.43 bar in orange as the secondary influence. Render the 0.40 reference line in neutral gray. Keep bar heights and spacing uniform, ink proportional to value, no axis breaks. Use 1pt strokes, flat fills, white background, exactly two bars and one reference line. Request an unannotated vector chart with no data labels, no gridline clutter, and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Two values: problem-solving teaching d = 0.68; teacher expectations d = 0.43. Reference line at the d = 0.40 hinge. All explicit in prose and group-profile table.
- **O:** Horizontal bars, x-axis from 0 to ~0.80 linear, two bars stacked vertically (longer on top), one vertical hinge reference line at 0.40 crossing both bars.
- **P:** Flat vector, 1pt strokes. The 0.68 bar in Blue #0072B2 (dominant). The 0.43 bar in Orange #E69F00 (secondary). Hinge reference line in gray (neutral). Black #000000 axis. Proportional ink, zero baseline. White background. Unannotated.
- **E:** Exclude the Bastani practice/exam percentages (different chapter figures), the prediction loop, the calibration-parallelism content, and any effect sizes from other groups. Only these two bars and the hinge line.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a video candidate — Criterion: none — Reason: the self-sealing loop is a conceptual causal structure best read as a static closed cycle; animating it adds drama without exposing a transition mechanism below direct observation.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: a static structural comparison; no temporal or transformational process.
Figure 3 — Status: Not a video candidate — Criterion: none — Reason: a quantitative comparison with no time dimension.

Video candidates: 0. Recommended: none.
