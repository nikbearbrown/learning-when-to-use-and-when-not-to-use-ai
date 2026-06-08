# CAJAL Figure Intelligence — Chapter 23: Collective Teacher Efficacy as the North Star
**Source:** chapters/23-collective-teacher-efficacy-as-the-north-star.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mixed density.

The chapter carries two figure placeholders worth designing — the Bandura-four-sources stacked diagram and the four-substitution-traps TABLE (better as a typeset table) — plus one strong unmarked PQ candidate: the 1.57-to-0.15 collapse, described in prose as "the largest hypothesized collapse in the book." I design the four-sources diagram (Critical), the collapse bar (Critical), and a supplementary causal chain (belief → channels → teacher behavior → outcomes).

---

## Figure 1 — Bandura's four efficacy sources, by strength, and what touches them  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** Collective efficacy grows from four sources ranked by strength — mastery experience (strongest, self-compounding), vicarious experience, social persuasion (weak alone), affective state — and the dashboard touches only source 3, leaving sources 1 and 2 untouched and source 4 degraded.

**Figure type:** vertical ranked stack with adjacent capability columns (systems diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with four horizontal bands stacked vertically, ordered top to bottom by decreasing strength: mastery experience (top, drawn largest), vicarious experience, social persuasion, affective state (bottom). Make the top band visibly largest and each lower band progressively smaller to encode the strength ordering. To the right of each band, place two narrow columns: a "what AI can do" cell and a "what requires humans together over time" cell. At the bottom, draw a single-headed arrow flowing from the stacked sources to a node representing behavior change, and a second single-headed arrow from behavior change to a node representing student outcomes, both arranged left to right. Color mastery experience in blue as the dominant self-compounding source, vicarious experience in sky blue as the secondary anchor, social persuasion in reddish purple as the transitional weak source, and affective state in neutral gray. Use 1pt strokes, flat fills, white background, four bands plus two outcome nodes. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Four sources ranked: mastery experience (strongest, self-compounding); vicarious experience; social persuasion (weak alone); affective state. Two adjacent capability columns per source [structural placeholders, kept as empty cells since the figure is unannotated]. Bottom flow: sources → behavior change → student outcomes. All explicit in prose.
- **O:** Four vertically stacked bands, decreasing size top-to-bottom encoding strength. Two narrow columns to the right of each band. Bottom: left-to-right single-headed arrows sources → behavior change → student outcomes.
- **P:** Flat vector, 1pt strokes. Mastery experience in Blue #0072B2 (dominant). Vicarious in Sky Blue #56B4E9 (secondary anchor). Social persuasion in Reddish Purple #CC79A7 (transitional/weak). Affective state in gray (neutral). Outcome nodes and arrows in Black #000000. White background. Unannotated.
- **E:** Exclude the 1.57-to-0.15 collapse numbers, the four-substitution-traps content, the belief-channels causal chain (Figure 3), and the case-study conditions. Only the ranked sources and the bottom flow.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — The largest hypothesized collapse: 1.57 to 0.15  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Collective teacher efficacy carries the dataset's largest effect size (d = 1.57) as a converted correlation, but the hypothesized survival under AI-dashboard-only delivery is d ≈ 0.15 — the largest hypothesized collapse in the book.

**Figure type:** two-bar comparison chart with hinge reference line

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal bar chart with a quantitative x-axis from zero to 1.70, linear, beginning at true zero. Draw two horizontal bars: an upper bar extending to 1.57 representing the measured correlational effect size, and a lower, very short bar extending to 0.15 representing the hypothesized AI-dashboard-only survival. Add a single vertical reference line at 0.40 to mark the hinge, which the 1.57 bar clears enormously and the 0.15 bar falls below. Color the 1.57 bar in blue as the dominant headline value and render it solid filled; color the 0.15 bar in vermillion to signal the collapse and render it as an open outline to mark its hypothesis status. Render the hinge line in neutral gray. Use 1pt strokes, proportional ink, zero baseline, uniform bar heights, flat white background. Request an unannotated vector chart with no numeric labels and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Measured d = 1.57 (converted correlation). Hypothesized AI-dashboard-only d ≈ 0.15 [HYPOTHESIS]. Hinge at d = 0.40. All explicit in prose.
- **O:** Horizontal bars, x from 0 to ~1.70 linear. Upper long bar (1.57) solid; lower short bar (0.15) open outline. One vertical hinge reference line at 0.40.
- **P:** Flat vector, 1pt strokes. The 1.57 bar in Blue #0072B2 (dominant headline), solid filled. The 0.15 bar in Vermillion #D55E00 (collapse), open outline. Hinge line in gray. Black #000000 axis. Proportional ink, zero baseline. White background. Unannotated.
- **E:** Exclude the four-sources stack, the substitution-traps content, the causal chain, and the case-study material. Only the two bars and the hinge line.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Belief is the fuel, not the engine  ·  Supplementary
**Heuristic:** MC
**Concept (one sentence):** Collective belief changes outcomes only by running through four behavioral channels — attempt more, persist longer, attribute struggle to instruction, cooperate at higher bandwidth — every one of which terminates in teacher behavior toward students.

**Figure type:** horizontal causal fan-in (systems diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure flowing left to right. On the left, a single node represents collective belief. From it, four single-headed arrows fan out to four parallel channel nodes stacked vertically: attempt more, persist longer, attribute struggle to instruction, cooperate at higher bandwidth. From all four channel nodes, single-headed arrows converge (fan in) to a single node on the right representing teacher behavior toward students, and one final single-headed arrow continues from that node to a terminal node representing student outcomes. Color the left belief node in orange as the upstream fuel, the four channel nodes in sky blue as the transmitting mechanism, and the teacher-behavior and student-outcome nodes in bluish green as the positive terminus. Render all arrows in black. Use 1pt strokes, flat fills, white background, four channels plus three anchor nodes. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Source node = collective belief. Four channels: attempt more; persist longer; attribute struggle to instruction; cooperate at higher bandwidth. Convergence node = teacher behavior toward students. Terminal node = student outcomes. All explicit in prose.
- **O:** Left-to-right. Belief node fans out to four stacked channel nodes; channels fan in to teacher-behavior node; one arrow to student-outcomes node.
- **P:** Flat vector, 1pt strokes. Belief node in Orange #E69F00 (upstream fuel). Channel nodes in Sky Blue #56B4E9 (mechanism). Teacher-behavior and outcome nodes in Bluish Green #009E73 (positive terminus). Arrows in Black #000000. White background. Unannotated.
- **E:** Exclude the four-sources stack, the 1.57/0.15 bars, and the substitution-trap content. Only the belief-to-outcome causal fan.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a video candidate — Criterion: none — Reason: a static ranked structure; the strength ordering reads at once.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: a two-value magnitude comparison with no temporal dimension.
Figure 3 — Status: Not a video candidate — Criterion: none — Reason: a static causal fan; no transition mechanism is the learning target.

Video candidates: 0. Recommended: none.
