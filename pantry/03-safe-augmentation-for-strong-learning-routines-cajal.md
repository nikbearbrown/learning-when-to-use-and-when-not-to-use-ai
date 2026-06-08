# CAJAL Figure Intelligence — Chapter 3: Safe Augmentation for Strong Learning Routines
**Source:** chapters/03-safe-augmentation-for-strong-learning-routines.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mixed density.

The chapter's anchor mechanism — the spacing effect's delayed-recall crossover — is a genuine verification-gap claim that a single line chart grounds definitively. The division-of-labor structure (AI logistics vs. protected cognitive act) recurs and merits one schematic. Five author placeholders appear; several are routine phase-gate/time-accounting tables better left as typeset tables, so I recommend three true figures.

---

## Figure 1 — The spacing effect crossover  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Spaced practice produces lower immediate recall but dramatically higher delayed recall than massed practice — the two retention curves cross, and the strain is the mechanism.
**Figure type:** statistical (two-line retention chart)

**Block 1 — Illustrae paste block:** Create a single-column line chart, 89mm wide at 300 DPI, vector, white background, with a horizontal axis representing days after the study session and a vertical axis representing recall accuracy. Draw two curves. The massed-practice curve starts high at the left (strong immediate recall) and decays steeply, ending low at the right. The spaced-practice curve starts lower at the left (weaker immediate recall) but decays gently, ending high at the right. The two curves cross within the first week so the reader sees the reversal: massed wins early, spaced wins late. Mark the crossover point clearly where the lines intersect. Color the massed curve orange and the spaced curve bluish green to signal which routine is durable. Keep both lines smooth and flat-styled with uniform thin strokes, the vertical axis beginning at zero. Request an unannotated vector diagram with no baked-in text or numbers.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Two retention curves over time — massed practice (high immediate, steep decay) and spaced practice (lower immediate, shallow decay). Crossover within the first week. X = days after study; Y = recall accuracy starting at zero.
- **O:** Standard line chart, two curves crossing once in the early region, divergence widening toward the right. Intersection point marked with a small node.
- **P:** Flat vector. Massed curve orange #E69F00; spaced curve bluish green #009E73; axes and crossover node black #000000. Uniform 1pt strokes, y-axis from zero, white background, unannotated.
- **E:** Omit the three-row classification; omit the phase gate; omit numeric accuracy values and specific day counts; do not add a third curve or confidence bands.

**Block 3 — Negative prompt:** third curve, confidence bands, numeric axis labels, data point markers beyond the crossover node, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

*Color note: orange + bluish green is an Okabe-Ito pair, not a red-green combination — kept deliberately to avoid the forbidden contrast while preserving distinguishability.*

---

## Figure 2 — Division of labor: logistics vs. the retrieval moment  ·  Important
**Heuristic:** VG
**Concept (one sentence):** AI runs the separable logistics around a practice routine — scheduling, varying, recording, flagging — while the learner's retrieval moment and the teacher's selection judgment stay structurally protected.
**Figure type:** systems diagram (perimeter-and-core)

**Block 1 — Illustrae paste block:** Create a single-column systems diagram, 89mm wide at 300 DPI, vector, white background. Place a central protected core node representing the learner's retrieval moment. Surround it with an outer ring of four to five perimeter nodes representing the AI-run logistics: scheduling intervals, varying retrieval prompts, keeping records, flagging drift, structuring second chances. Draw single-headed arrows from each perimeter node pointing inward toward the core but stopping at a visible boundary ring that encircles the core — the arrows reach the boundary and do not penetrate it, signaling that AI supports the perimeter but does not touch the mechanism. Place one additional node above the boundary representing the teacher's selection judgment, connected to the core by a single-headed arrow that does cross the boundary. Color the AI perimeter nodes orange, the protected core blue, the teacher-judgment node bluish green, and the boundary ring black. Flat nodes, uniform thin strokes. Request an unannotated vector diagram with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Core = learner's retrieval moment (protected). Perimeter (AI) = scheduling, retrieval-prompt variation, record keeping, drift flagging, second-chance structuring. One teacher node = curriculum selection judgment, which legitimately crosses into the core.
- **O:** Central core inside a boundary ring; AI perimeter nodes arranged around it with inward single-headed arrows stopping at the ring; teacher-judgment node with a single-headed arrow crossing the ring into the core.
- **P:** Flat vector. AI perimeter nodes orange #E69F00; protected core blue #0072B2; teacher-judgment node bluish green #009E73; boundary ring and arrows black #000000, single-headed. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the spacing-curve content; omit the three traps; omit the time-accounting case; cap perimeter nodes at five; do not depict the student or teacher as human figures.

**Block 3 — Negative prompt:** more than five perimeter nodes, human figures, the three-trap content, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Reclaimed-hours accounting  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** The tool's value appears only when planning-period time is accounted for — hours shift away from calendar-building and item-writing toward student-work analysis and feedback.
**Figure type:** statistical (before/after stacked bar)

**Block 1 — Illustrae paste block:** Create a single-column paired stacked-bar figure, 89mm wide at 300 DPI, vector, white background, comparing a teacher's planning-period time allocation before and after adopting an automated review tool. Draw two equal-height vertical stacked bars side by side, each divided into segments representing time uses. In the before bar, large segments represent calendar-building and item-writing, with a small segment for student-work analysis. In the after bar, the calendar-building and item-writing segments shrink dramatically and the student-work-analysis and feedback segment expands to fill the reclaimed space. Align the two bars so the reallocation is legible as a vertical shift. Color the logistics segments (calendar-building, item-writing) light gray as the reducible overhead, and the student-work-analysis and feedback segment bluish green as the high-value reclaimed time. Flat segments, equal bar heights, uniform thin strokes. Request an unannotated vector diagram with no baked-in text or numbers.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Before bar segments: calendar-building (large), item-writing (large), student-work analysis (small). After bar segments: calendar-building (small), item-writing (small), student-work analysis + feedback (large, reclaimed ≈ 2 hrs/week).
- **O:** Two equal-height vertical stacked bars side by side, consistent segment order, the reclaimed region visually expanding from before to after.
- **P:** Flat vector. Logistics segments light gray; student-work-analysis/feedback segment bluish green #009E73; bar outlines black #000000. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit numeric hour counts; omit the spacing curve and division-of-labor diagram; omit the five adoption conditions; do not add a third bar.

**Block 3 — Negative prompt:** numeric hour labels, third bar, percentage labels, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
- **Figure 1 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** The crossover is fully legible in a static two-line chart; no stage-by-stage simulation is needed.
- **Figure 2 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A spatial boundary diagram; nothing transforms over time.
- **Figure 3 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A two-state before/after comparison read at a glance, not a continuous process.

Video candidates: 0. Recommended for production: none.
