# CAJAL Figure Intelligence — Chapter 9: AI as Expert Task Analyst
**Source:** chapters/09-ai-as-expert-task-analyst.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mechanistic density.

The chapter has three genuine figure needs: the four-row mechanism map (all four influences repair one model of task-and-learner), the draft-as-instrument workflow (free recall vs. AI-draft-then-expert-correction, with the delta log as the prize), and the domain-specific Bastani curve (practice climbs while unaided certification collapses). Four author placeholders appear; all but one map to these. The two-path correction workflow is the chapter's most actionable diagram.

---

## Figure 1 — Draft-then-correct workflow and the delta log  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** Expert free recall yields an incomplete curriculum, but an AI draft corrected by the expert converts extraction into editing — and the corrections themselves (the delta log) are the curriculum's most valuable column.
**Figure type:** flowchart (two-path comparison with branch output)

**Block 1 — Illustrae paste block:** Create a single-column two-path flowchart, 89mm wide at 300 DPI, vector, white background. The upper path (Path A) shows expert free recall leading directly to a curriculum node via a single-headed arrow, with the curriculum node rendered as visibly incomplete (a partially filled block) to signal omitted tacit steps. The lower path (Path B) shows an AI-draft node leading via single-headed arrow to an expert-correction node, then to a validated-curriculum node rendered as a fully filled block. At the expert-correction stage of Path B, branch off a distinct delta-log node connected by a single-headed arrow, and emphasize it (heavier border) as the most valuable output — the tacit knowledge that surfaces only when there is a concrete wrong thing to correct. Color Path A and its incomplete curriculum orange to mark the weaker route, Path B's validated curriculum blue, the expert-correction node bluish green, and the emphasized delta-log node yellow. Flat nodes, uniform thin strokes except the heavier delta-log border, single-headed arrows. Request an unannotated vector diagram with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Path A: expert free recall → curriculum (incomplete). Path B: AI draft → expert correction → validated curriculum (complete). Branching from the correction stage: a delta-log node (the tacit-knowledge deltas), emphasized as the most valuable column.
- **O:** Two stacked horizontal paths, single-headed arrows. Path A short and ending in a partially filled curriculum block. Path B longer, ending in a fully filled curriculum block, with a delta-log node branching off the correction stage.
- **P:** Flat vector. Path A nodes and incomplete curriculum orange #E69F00; Path B validated curriculum blue #0072B2; expert-correction node bluish green #009E73; delta-log node yellow #F0E442 with heavier border. Arrows black #000000, single-headed. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the four-row mechanism map; omit the Bastani help-channel curve; omit the welding/HVAC narrative specifics; omit numeric effect sizes; do not render node names as text.

**Block 3 — Negative prompt:** effect-size numbers, node-name text, third path, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Four rows, one repaired model  ·  Important
**Heuristic:** VG
**Concept (one sentence):** All four influences repair part of one double-blindness — an accurate model of the task and of the learner's current knowledge — with each row fixing a different component.
**Figure type:** conceptual map (central node with four repair spokes)

**Block 1 — Illustrae paste block:** Create a single-column conceptual map, 89mm wide at 300 DPI, vector, white background, with a central node representing an accurate model of the task and the learner. From it, draw four single-headed spokes outward to four surrounding repair nodes: one repairing the task model, one repairing the readiness model, one repairing the prior-knowledge model, and one a learner-run repair. Orient the spokes so each repair node points its arrow back into the central model node, signifying that each influence contributes a fix to the shared model. Distinguish the learner-run repair node visually from the three teacher/system-side repair nodes (place it slightly apart or give it a distinct shape) since it is performed by the learner personally. Color the central model node blue as the structural anchor, the three design-side repair nodes orange, and the learner-run repair node bluish green. Flat nodes, uniform thin strokes, single-headed arrows pointing inward to the center. Request an unannotated vector diagram with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Center = accurate model of task and learner. Four repair spokes: CTA (repairs task model), Piagetian matching (repairs readiness model), conceptual change (repairs prior-knowledge model), help seeking (learner-run repair).
- **O:** Central node with four spokes; each repair node connects via a single-headed arrow pointing inward to the center. Learner-run node set slightly apart or distinctly shaped.
- **P:** Flat vector. Central model node blue #0072B2; three design-side repair nodes orange #E69F00; learner-run repair node bluish green #009E73; arrows black #000000, single-headed inward. Uniform 1pt strokes, white background, unannotated.
- **E:** Omit the effect sizes (1.29, 1.28, 0.99, 0.72); omit the draft-correction workflow; omit the two traps; do not render row names as text; omit the validation-clause content.

**Block 3 — Negative prompt:** effect-size numbers, row-name text, fifth spoke, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — The Bastani curve in a help channel  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** An executive-help AI channel lifts the supervised metric (practice performance) while the unaided metric (proctored certification) flattens then drops — the same assisted/unassisted divergence in domain-specific form.
**Figure type:** statistical (two-line divergence chart)

**Block 1 — Illustrae paste block:** Create a single-column two-line chart, 89mm wide at 300 DPI, vector, white background, with a horizontal axis representing weeks of AI-channel use and a vertical axis representing score. Draw two lines. The practice-performance line climbs steadily upward across the weeks. The unaided proctored-assessment line stays flat early and then declines toward the right. Mark the divergence point where the two lines clearly separate. The visual point is that the supervised metric rises while the unaided metric falls — assistance inflating one while hollowing the other. Color the climbing practice line orange to signal the misleading supervised gain, and the declining unaided line vermillion to signal the real harm, with the divergence point marked in black. Keep both lines smooth and flat-styled, vertical axis starting at zero, uniform thin strokes. Request an unannotated vector diagram with no baked-in text or numbers.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm width, 300 DPI, vector, white background.
- **C:** Two lines over weeks of AI-channel use. Line 1 = practice-weld/supervised performance (climbing). Line 2 = proctored mock-certification/unaided score (flat, then dropping). A marked divergence point.
- **O:** Line chart, x = weeks, y = score from zero. Two lines starting near each other and diverging; practice rising, unaided falling. Divergence point marked with a small node.
- **P:** Flat vector. Practice line orange #E69F00; unaided line vermillion #D55E00; divergence node and axes black #000000. Uniform 1pt strokes, y-axis from zero, white background, unannotated.
- **E:** Omit the draft-correction and four-row figures; omit numeric scores and week counts; omit the hint-ladder remediation; do not add a third line or confidence bands.

**Block 3 — Negative prompt:** third line, confidence bands, numeric axis labels, week numbers, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
- **Figure 1 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** Two paths compared simultaneously with a branch output; the workflow is read structurally, not as a simulated transition.
- **Figure 2 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** A hub-and-spoke conceptual map; no temporal process.
- **Figure 3 — Status: STATIC SUFFICIENT — Criterion: none — Reason:** The divergence is fully legible in a static two-line chart.

Video candidates: 0. Recommended for production: none.
