# CAJAL Figure Intelligence — Chapter 24: Teacher Judgment With AI Evidence
**Source:** chapters/24-teacher-judgment-with-ai-evidence.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mechanistic density.

The chapter carries three placeholders: a two-influence TABLE (typeset), the teacher-model complementarity timeline DIAGRAM, and the two-student audit DIAGRAM. The complementarity timeline is the chapter's signature visual (the Eegdeman timing-asymmetry result) — a strong PQ candidate. The two-student audit is a clean VG comparison. I add the effect-size comparison (1.29 and 0.75 against the hinge) as a supplementary figure.

---

## Figure 1 — Teacher-model complementarity over the school year  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Teacher judgment starts high and plateaus while the model starts low and rises steeply as structured evidence accumulates; the combined ranking runs above both after the first grading period — teachers win at the information-poor start, models catch up late.

**Figure type:** multi-line trend chart (prediction-accuracy over time)

**Block 1 — Illustrae paste block:** Produce a single-column vector line chart with time into the school year on the x-axis and prediction accuracy for student risk on the y-axis beginning at zero. Plot three lines. The teacher-judgment line starts high on the left and plateaus, staying roughly flat across the year. The model line starts low on the left and rises steeply, crossing the teacher line near the first grading period and ending higher on the right. The combined-ranking line runs above both lines for the portion after the first grading period. Mark two points without text: the information-poor early region where the teacher line is highest, and the crossover region where the model line overtakes. Color the teacher-judgment line in orange as the human contribution, the model line in sky blue as the machine contribution, and the combined-ranking line in blue as the dominant superior combination. Use solid strokes for teacher and model, and a heavier solid stroke for the combined line. Use 1pt base strokes, flat white background, y-axis from zero, three lines only. Request an unannotated vector chart with no numeric callouts, no gridline clutter, and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Teacher judgment: starts high, plateaus. Model: starts low, rises steeply, overtakes after first grading period. Combined ranking: above both after first grading period (better sensitivity, per prose). Crossover near first grading period. All explicit in prose [line shapes inferred from stated start/end behavior].
- **O:** X-axis = time into year; y-axis = prediction accuracy from zero. Three lines: teacher (high→plateau), model (low→steep rise→overtake), combined (above both, post-crossover only).
- **P:** Flat vector. Teacher line in Orange #E69F00 (human). Model line in Sky Blue #56B4E9 (machine). Combined line in Blue #0072B2 (dominant), heavier stroke. 1pt base strokes. Black #000000 axes. Zero baseline. White background. Unannotated.
- **E:** Exclude the two-student audit content, the effect-size bars, the installment-plan automation-bias text, and the case-study conditions. Only the three accuracy curves over time.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — The two-student audit: where model and teacher disagree  ·  Important
**Heuristic:** VG
**Concept (one sentence):** Two week-nine cases show why model output and teacher knowledge must stay distinct — a quiet high performer flagged red by an absence artifact, and a struggling student shown green by mere assignment completion — with the disagreement being the most valuable signal.

**Figure type:** two-case side-by-side comparison panel (annotated structural schematic, unannotated)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with two equal-width case panels side by side. Each panel has two stacked cells: an upper cell representing the model's output and a lower cell representing the teacher's knowledge. Left case: the model-output cell is rendered in vermillion to signal a red flag, while the teacher-knowledge cell beneath it is rendered in bluish green to signal the teacher knows the flag is incorrect (an absence artifact). Right case: the model-output cell is rendered in bluish green to signal a green status, while the teacher-knowledge cell beneath it is rendered in vermillion to signal the teacher suspects real trouble (completion masking copied work). Between the two cells in each panel, draw a short double-line gap marker (not an arrow) indicating contradiction between the layers. The deliberate cross-pattern — colors inverted between the model and teacher rows across the two cases — is the visual point. Use 1pt strokes, flat fills, white background, four cells total. Request an unannotated vector schematic with no decorative styling and no arrows.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Left case: model flags red (absence artifact); teacher knows it is incorrect. Right case: model shows green (assignment completion); teacher suspects trouble. Each case = model-output cell over teacher-knowledge cell, contradicting. All explicit in prose.
- **O:** Two equal panels side by side, each with model-output cell stacked above teacher-knowledge cell, separated by a short contradiction gap marker (no arrows). Color inversion between the two cases is intentional.
- **P:** Flat vector, 1pt strokes. Left case: model cell Vermillion #D55E00, teacher cell Bluish Green #009E73. Right case: model cell Bluish Green #009E73, teacher cell Vermillion #D55E00. Black #000000 outlines and gap markers. White background. Unannotated.
- **E:** Exclude the complementarity timeline, the effect-size bars, the automation-bias installment-plan text, and the phase-gate rows. Only the two contradicting cases.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Two influences against the hinge  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** Teacher estimates of achievement (d = 1.29) and teacher clarity (d = 0.75) both sit in the High band, far above the 0.40 hinge, with estimates near the top of the entire list.

**Figure type:** horizontal bar chart with hinge reference line

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal bar chart with a quantitative x-axis from zero to 1.40, linear, beginning at true zero. Draw two horizontal bars: an upper bar extending to 1.29 (teacher estimates of achievement) and a lower bar extending to 0.75 (teacher clarity). Add a single vertical reference line at 0.40 to mark the hinge, which both bars clear comfortably. Color the longer 1.29 bar in blue as the dominant influence and the shorter 0.75 bar in orange as the secondary influence. Render the hinge line in neutral gray. Use 1pt strokes, proportional ink, zero baseline, uniform bar heights, flat white background, exactly two bars and one reference line. Request an unannotated vector chart with no numeric labels and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Teacher estimates of achievement d = 1.29; teacher clarity d = 0.75. Hinge at d = 0.40. All explicit in prose and group-profile table.
- **O:** Horizontal bars, x from 0 to ~1.40 linear, two bars stacked (longer on top), one vertical hinge reference line at 0.40.
- **P:** Flat vector, 1pt strokes. The 1.29 bar in Blue #0072B2 (dominant). The 0.75 bar in Orange #E69F00 (secondary). Hinge line in gray. Black #000000 axis. Proportional ink, zero baseline. White background. Unannotated.
- **E:** Exclude the complementarity timeline, the two-student audit, and the automation-bias material. Only the two bars and the hinge line.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Candidate (weak) — Criterion: 2 — Reason: the timing asymmetry unfolds sequentially across the year with natural playback, but the crossover is read more clearly as a single static frame showing all three lines at once.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: a static structural contradiction; no transition.
Figure 3 — Status: Not a video candidate — Criterion: none — Reason: static quantitative comparison.

Video candidates: 1. Recommended: none — Figure 1's complementarity is better as one static frame; the combined-ranking line's superiority is a simultaneous comparison, not a process to watch unfold.
