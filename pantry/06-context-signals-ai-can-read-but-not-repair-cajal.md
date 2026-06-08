# CAJAL Figure Intelligence — Chapter 6: Context Signals AI Can Read but Not Repair
**Source:** chapters/06-context-signals-ai-can-read-but-not-repair.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 2 figures using Mechanistic density.

The chapter's central structural claim is the gap between a detection pipeline (which AI completes) and a response pipeline (which only humans touch) — a verification-gap/process figure that grounds the whole "read but not repair" thesis. The second high-value figure is the working-memory task-redesign, the chapter's one genuine lever, shown as a concrete before/after. The six-row table and phase-gate table are typeset tables, not figures.

---

## Figure 1 — Detection pipeline vs. response pipeline  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** AI completes the detection pipeline entirely (context variables → model → risk score → flag) but touches nothing in the response pipeline (flag → human review → instructional decision → support → trajectory change); the two systems connect only at human review.
**Figure type:** systems diagram (two-pipeline flow with single handoff)

**Block 1 — Illustrae paste block:** Create a single-column two-pipeline flow diagram, 89mm wide at 300 DPI, vector, white background. Draw an upper horizontal pipeline of four sequential nodes connected by single-headed arrows: context variables, model, risk score, flag. Draw a lower horizontal pipeline of four sequential nodes connected by single-headed arrows: human review, instructional decision, support, trajectory change. Connect the two pipelines with a single vertical single-headed arrow running from the upper pipeline's final flag node down to the lower pipeline's first human-review node — this is the only connection between them. Visually enclose the upper pipeline in a shaded zone marked as the AI-completed region and leave the lower pipeline in an unshaded zone marked as the human region, so the reader sees the model fills the entire top and touches nothing below the single handoff. Color the upper AI pipeline nodes blue, the single handoff arrow black and emphasized, and the lower human pipeline nodes bluish green. Flat nodes, uniform thin strokes, all arrows single-headed. Request an unannotated vector diagram with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Upper pipeline (AI-completed): context variables → model → risk score → flag. Lower pipeline (human): human review → instructional decision → support → trajectory change. Single connection: flag → human review.
- **O:** Two stacked horizontal four-node pipelines, single-headed arrows within each; one vertical single-headed handoff arrow from the upper-right flag node to the lower-left human-review node. Upper pipeline in a shaded AI zone, lower in an unshaded human zone.
- **P:** Flat vector. Upper AI-pipeline nodes blue #0072B2; lower human-pipeline nodes bluish green #009E73; handoff arrow black #000000 emphasized; AI-zone shading light gray. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the six context-variable names; omit the working-memory task-redesign; omit the equity-audit and reversibility content; do not depict the risk score as a numeric value; omit the "fire alarm in empty building" metaphor.

**Block 3 — Negative prompt:** numeric risk scores, variable-name text, second handoff connection, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Working-memory load reduction in a task  ·  Important
**Heuristic:** VG
**Concept (one sentence):** The group's one genuine lever is task redesign — the same multi-step procedure made to fit a narrower working-memory channel by externalizing steps and adding an adjacent worked example.
**Figure type:** annotated example (before/after structural schematic)

**Block 1 — Illustrae paste block:** Create a single-column before/after schematic, 89mm wide at 300 DPI, vector, white background, comparing two versions of the same multi-step task side by side. The left (before) version shows a single compact problem block with four procedure steps represented as items the learner must hold simultaneously in mind — depict these as four small tokens hovering above the block with no place to rest, signaling working-memory overload. The right (after) version shows the same problem block but with the four steps externalized as a visible ordered list down the page and a small adjacent worked-example block beside it, so nothing must be held in mind. The contrast should make the load-reduction moves concrete: steps externalized, worked example adjacent, split attention removed. Color the overloaded held-in-mind tokens vermillion in the before version, and the externalized steps and worked example bluish green in the after version, with the problem block neutral blue in both. Flat shapes, uniform thin strokes. Request an unannotated vector diagram with no baked-in text or numbers.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Before = four-step procedure with no external supports, steps held in working memory (four floating tokens above a compact problem block). After = same problem with steps externalized as a visible ordered list plus an adjacent worked example.
- **O:** Two side-by-side versions; before on left with floating overload tokens, after on right with externalized step list and adjacent worked-example block.
- **P:** Flat vector. Held-in-mind tokens (before) vermillion #D55E00; externalized steps and worked example (after) bluish green #009E73; problem block blue #0072B2 in both. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the detection/response pipeline; omit any specific math content or numbers inside the problem; omit the equity-audit figures; do not show more than four steps.

**Block 3 — Negative prompt:** specific math equations, numeric values, more than four steps, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
- **Figure 1 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** Two static pipelines with one handoff; the structural point (AI fills the top, humans own the bottom) is read at a glance.
- **Figure 2 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A before/after comparison; no transition mechanism the reader must simulate.

Video candidates: 0. Recommended for production: none.
