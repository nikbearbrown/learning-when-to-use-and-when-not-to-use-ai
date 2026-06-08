# CAJAL Figure Intelligence — Chapter 21: AI-Native Testing and Tutoring With Guardrails
**Source:** chapters/21-ai-native-testing-and-tutoring-with-guardrails.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mechanistic density.

The chapter carries three explicit author placeholders: the four-curve fork chart (CHART), the three-panel pilot loop (INFOGRAPHIC), and the phase-gate table (TABLE). The fork chart is the chapter's load-bearing visual and is a clean PQ candidate. The three-panel pilot loop is a strong MC candidate. The phase-gate table is text-dense and best left as a typeset table, not a generated figure, so I design two figures plus one secondary effect-size comparison.

---

## Figure 1 — The configuration fork: guardrailed versus unguardrailed  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** The same AI model, same students, same material, splits by a configuration setting — guardrailed practice and exam curves converge while unguardrailed curves diverge (practice rising, exam falling), the Bastani signature made visual.

**Figure type:** four-curve line chart (two-panel divergence/convergence comparison)

**Block 1 — Illustrae paste block:** Produce a single-column vector line chart with time (weeks in platform) on the x-axis and performance score on the y-axis beginning at zero. Plot four monotonic trend lines forming two contrasting pairs. The guardrailed pair: a practice curve and an exam curve that both rise and stay close together, converging toward the right. The unguardrailed pair: a practice curve that rises steeply and an exam curve that declines, the two diverging as they move right. Use a solid stroke for practice curves and a dashed stroke for exam curves to distinguish measure type within each pair. Color both guardrailed curves bluish green to signal the protective configuration and both unguardrailed curves vermillion to signal the harmful one. Keep four curves only, smooth and unannotated, 1pt strokes, flat white background, y-axis from zero. Request an unannotated vector chart with no numeric callouts, no gridline clutter, and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Four curves over time: guardrailed practice (rising), guardrailed exam (rising, near practice — converging); unguardrailed practice (rising steeply), unguardrailed exam (declining — diverging). Underlying values cited in prose: guardrailed +127% practice / ≈0 exam; unguardrailed +48% practice / −17% exam. Curves are directional [inferred shapes from the stated endpoints].
- **O:** X-axis = weeks; y-axis = performance score from zero. Guardrailed pair converges; unguardrailed pair diverges. Practice = solid stroke, exam = dashed stroke, within each configuration pair.
- **P:** Flat vector, 1pt strokes. Both guardrailed curves in Bluish Green #009E73 (positive). Both unguardrailed curves in Vermillion #D55E00 (harmful). Solid vs dashed distinguishes practice vs exam. Black #000000 axes. Zero baseline. White background. Unannotated.
- **E:** Exclude the pilot three-panel loop, the phase-gate content, the effect-size bars, and the VanLehn 0.76/0.79 figures — separate material. No annotation of the +48/−17/+127 numbers inside the plot.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — The pilot loop: diagnosis, teaching, verification  ·  Important
**Heuristic:** MC
**Concept (one sentence):** The chemistry pilot's value came from a three-stage loop — the platform diagnoses (error clustering, mastery map), humans teach (reteach the step, pre-brief tutors), the platform verifies (cluster dissolution, exam performance) — feeding human decisions rather than replacing them.

**Figure type:** three-panel horizontal flow with return loop (systems diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure of three panels arranged left to right, connected by single-headed arrows showing forward flow, with a return arrow from the third panel back to the first to indicate the loop repeats. Panel one (platform diagnosis layer) contains two stacked items: error clustering and mastery map. Panel two (human teaching layer) contains two stacked items: retaught step and tutor pre-briefed by session summaries. Panel three (platform verification layer) contains two stacked items: cluster dissolution and exam performance. Color the two platform panels (diagnosis and verification) in sky blue as the machine-driven anchor stages, and color the central human teaching panel in orange to mark it as the irreducibly human stage. Render the connecting arrows in black. Keep three panels, six total items, left-to-right progression, 1pt strokes, flat fills, white background. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Panel 1 = platform diagnosis (error clustering, mastery map). Panel 2 = human teaching (retaught step, tutor pre-briefed by session summaries). Panel 3 = platform verification (cluster dissolution, exam performance). Forward arrows panel 1→2→3, return arrow 3→1. All explicit in prose.
- **O:** Three panels left-to-right, single-headed forward arrows, one return arrow closing the loop. Two stacked items per panel.
- **P:** Flat vector, 1pt strokes. Platform panels (1 and 3) in Sky Blue #56B4E9 (machine anchor). Human teaching panel (2) in Orange #E69F00 (human stage). Arrows in Black #000000. White background. Unannotated.
- **E:** Exclude the four-curve fork chart, the usage-signature spike description, the phase-gate rows, and the effect-size figures. Only the three-stage loop.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Tutoring effect sizes against the hinge and human-tutor benchmark  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** ITS systems average d = 0.48 across implementations but reach d = 0.76 under step-level conditions — near the human-tutor benchmark of d = 0.79 — while the group's three rows (0.54, 0.48, 0.42) all clear the 0.40 hinge.

**Figure type:** horizontal dot/bar plot with two reference lines

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal bar chart with a quantitative x-axis from zero to 0.85, linear, beginning at true zero. Draw three primary bars for the group's rows: practice testing at 0.54, intelligent tutoring systems at 0.48, technology with college students at 0.42. Add two short reference markers as labeled tick positions: one vertical reference line at 0.40 (the hinge) and one vertical reference line at 0.79 (human-tutor benchmark). Also place a single open dot marker at 0.76 on the intelligent-tutoring-systems row to show the step-level high-fidelity value distinct from its average bar. Color the three bars in sky blue as the group anchor, the 0.76 dot in blue to mark the high-fidelity condition, the hinge line in gray, and the human-tutor benchmark line in neutral gray dashed. Use 1pt strokes, proportional ink, zero baseline, flat white background. Request an unannotated vector chart with no numeric labels and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Bars: practice testing d = 0.54; ITS d = 0.48; technology with college students d = 0.42. Overlay dot: ITS step-level d = 0.76. Reference lines: hinge d = 0.40; human-tutor benchmark d = 0.79. All explicit in prose.
- **O:** Horizontal bars, x from 0 to ~0.85 linear. Three bars stacked. One open dot on the ITS row at 0.76. Vertical reference line at 0.40 and a dashed vertical reference line at 0.79.
- **P:** Flat vector, 1pt strokes. Three bars in Sky Blue #56B4E9 (group anchor). The 0.76 dot in Blue #0072B2 (high-fidelity condition). Hinge line in gray. Benchmark line in gray dashed. Black #000000 axis. Proportional ink, zero baseline. White background. Unannotated.
- **E:** Exclude the Bastani percentage curves, the pilot loop, and the phase-gate content. Only effect-size magnitudes and the two reference lines.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Candidate (weak) — Criterion: 2 — Reason: the divergence-versus-convergence over weeks is a sequential process with natural playback, but the learning target is the static contrast, not the unfolding, so static is sufficient.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: a structural loop best read at once; cyclical return is implementation, not the concept itself.
Figure 3 — Status: Not a video candidate — Criterion: none — Reason: static quantitative comparison.

Video candidates: 1. Recommended: none — Figure 1's fork is more legible as a single static frame where both pairs are visible simultaneously for direct comparison; animation would hide the convergent pair while the divergent pair plays.
