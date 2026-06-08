# CAJAL Figure Intelligence — Appendix 93: Hattie x AI Analysis Summary
**Source:** chapters/93-hattie-ai-analysis-summary.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 4 figures using Mixed density.

This appendix is dense quantitative reporting over a 252-influence dataset with multiple categorical classification layers and several effect-size crosstabs. The strongest figure opportunities are proportional (PQ): the distribution of 252 influences across feasibility/risk/conflict categories, the band × feasibility crosstab, and the effect-size profile of the priority cases. One conceptual figure (VG) captures the central "phase-gate / amplification vs. substitution" argument that organizes the whole appendix. I deliberately do NOT make a figure per table — many tables are redundant slices of the same distribution, so I consolidate to the highest-leverage views.

---

## Figure 1 — Distribution of 252 influences across AI-classification dimensions  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** Across the four AI-classification dimensions (feasibility, human irreducibility, substitution risk, mechanism conflict), most of the 252 Hattie influences fall into the low-risk / support-layer categories rather than the AI-native or high-conflict ones.
**Figure type:** Small-multiple horizontal bar chart (four stacked-category panels) — counts out of 252.

**Block 1 — Illustrae paste block:** Create a flat vector figure on a white double-column canvas, 180mm wide, 300 DPI, composed of four small horizontal bar-chart panels arranged in a 2x2 grid, all sharing an identical count axis from 0 to 252 anchored at zero. Panel one shows AI Feasibility with four bars of lengths 97, 88, 38, 29. Panel two shows Human Irreducibility with three bars of lengths 117, 78, 57. Panel three shows Substitution Risk with three bars of lengths 170, 29, 53. Panel four shows Mechanism Conflict with three bars of lengths 169, 48, 35. Order bars within each panel from longest to shortest, except keep ordinal categories (Low, Medium, High) in their natural order. Use a horizontal left-to-right bar orientation with bars growing rightward from a common left baseline. Map the dominant "support/low-risk" category in each panel to blue and the highest-risk or most-AI-native category to vermillion, with intermediate categories in gray and orange. Keep all bars the same height with uniform spacing. Request an unannotated vector with no numeric labels, no gridline text, and no panel titles.

**Block 2 — Full SCOPE prompt:**
- **S:** Double-column 180mm width, 300 DPI, vector, white background, four-panel 2x2 small-multiple layout.
- **C:** Confirmed counts (n out of 252). Panel A — AI Feasibility: AI-ADJACENT 97, AI-AUGMENTED 88, AI-RESISTANT 38, AI-NATIVE 29. Panel B — Human Irreducibility: Low 117, Medium 78, High 57. Panel C — Substitution Risk: Low 170, Medium 29, High 53. Panel D — Mechanism Conflict: No conflict 169, Partial 48, Conflict present 35.
- **O:** Four horizontal bar panels, shared 0–252 count axis, bars grow rightward from a common left baseline, uniform bar thickness and gap; ordinal panels (B, C, D) keep Low→High order, feasibility panel sorted descending.
- **P:** Flat vector, 1pt strokes, white bg, Okabe-Ito: dominant low-risk/support category #0072B2 (Blue), highest-risk/AI-native category #D55E00 (Vermillion), secondary categories #E69F00 (Orange) and gray #808080. Unannotated.
- **E:** Exclude numeric value labels, axis tick text, category text labels, panel titles, legend text, gridlines with numbers, 3D bars, shadows, gradients, percentage callouts, any red-green pairing.

**Block 3 — Negative prompt:** numeric value labels, axis numbers, category text, panel titles, legend text, gridline labels, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Effect band by AI feasibility (where the high-impact influences concentrate)  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** The high and above-hinge effect-size bands are overwhelmingly AI-AUGMENTED, while the negligible and below-hinge bands are dominated by AI-ADJACENT influences — so the strongest learning effects cluster in amplification, not native automation.
**Figure type:** Grouped horizontal bar chart (effect band on the vertical axis, four feasibility groups per band), counts.

**Block 1 — Illustrae paste block:** Create a flat vector grouped horizontal bar chart on a white single-column canvas, 89mm wide, 300 DPI. Five effect-size bands stack vertically from top to bottom in this order: High, Above hinge, Below hinge, Negligible, Harmful. Within each band, draw four adjacent horizontal bars representing the four AI-feasibility categories, all sharing one count axis anchored at zero. The High band bars are 1, 24, 4, 3. Above hinge: 8, 57, 10, 15. Below hinge: 51, 2, 13, 15. Negligible: 27, 1, 2, 2. Harmful: 10, 4, 0, 3. The four bars in every band follow a fixed color assignment so the same feasibility category keeps one color throughout. Make the AI-AUGMENTED bar visually distinct as the dominant category in the top two bands. Bars grow rightward from a shared left baseline. Request an unannotated vector with no numeric labels, no band names, and no legend text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Confirmed crosstab counts, bands top-to-bottom High/Above hinge/Below hinge/Negligible/Harmful; four bars per band in fixed order AI-ADJACENT, AI-AUGMENTED, AI-NATIVE, AI-RESISTANT. High: 1, 24, 4, 3. Above hinge: 8, 57, 10, 15. Below hinge: 51, 2, 13, 15. Negligible: 27, 1, 2, 2. Harmful: 10, 4, 0, 3.
- **O:** Five vertically stacked band groups, four clustered horizontal bars each, single shared 0-based count axis, bars grow rightward from common baseline, consistent per-category color across all bands.
- **P:** Flat vector, 1pt strokes, white bg. Okabe-Ito mapping: AI-AUGMENTED (dominant) #0072B2 Blue, AI-ADJACENT #E69F00 Orange, AI-NATIVE #CC79A7 Reddish Purple, AI-RESISTANT #009E73 Bluish Green. Unannotated.
- **E:** Exclude all numeric labels, band names, category text, legend, gridline text, percentage marks, stacked-bar form (must be grouped not stacked), 3D, shadows, gradients, red-green adjacency.

**Block 3 — Negative prompt:** numeric value labels, band name text, category text, legend text, axis numbers, gridline labels, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — The amplification-vs-substitution phase gate  ·  Important
**Heuristic:** VG
**Concept (one sentence):** Across the dataset the decisive structural distinction is whether AI amplifies the learning mechanism (supports feedback, practice, diagnosis, planning, reflection) or substitutes for it by crossing a phase gate to perform the cognitive/social work that produces the effect.
**Figure type:** Horizontal two-branch conceptual schematic with a central gate.

**Block 1 — Illustrae paste block:** Create a flat vector conceptual schematic on a white single-column canvas, 89mm wide, 300 DPI, laid out horizontally left to right. On the left place a single node representing a high-impact learning influence. An arrow leads right into a central vertical gate element representing the phase gate. From the gate, two divergent paths exit to the right. The upper path is an enabling arrow leading to a node representing amplification, where AI supports the human mechanism (feedback, practice, diagnosis, planning, reflection) and the learning effect is preserved. The lower path is a blocked path, drawn with a perpendicular blockage bar (⊣) crossing it, leading to a node representing substitution, where AI performs the cognitive or social work and the learning effect collapses. Keep total components to six or fewer. Map the amplification path and its node to bluish green, the substitution path and its node to vermillion, the source influence node to sky blue, and the gate to gray. Request an unannotated vector — shapes, arrows, and the blockage symbol only, no text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, horizontal L-to-R flow.
- **C:** Entities: one source node (high-impact influence) [inferred grouping], one central phase-gate element, one amplification outcome node (AI supports mechanism; effect preserved), one substitution outcome node (AI performs the learning-producing act; effect collapses). Relationship: source → gate → divergence into supported branch (→) and blocked branch (⊣).
- **O:** Left source node, rightward arrow into central gate, two diverging right-bound paths: upper enabling arrow to amplification node, lower path with perpendicular blockage bar to substitution node.
- **P:** Flat vector, 1pt strokes, white bg. Okabe-Ito: source/primary anchor #56B4E9 Sky Blue, amplification (positive) #009E73 Bluish Green, substitution (blocking/negative) #D55E00 Vermillion, gate neutral gray #808080. Single-headed arrows only; ⊣ blockage symbol on lower path. Unannotated.
- **E:** Exclude all text, labels, tier numbers, effect-size numbers, dual-headed arrows, icons of people, any decorative framing, gradients, shadows, red-green pairing.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 4 — Priority review cases by effect size and mechanism conflict  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** The top priority-review influences span a wide effect-size range (from d=0.70 up to d=1.57) and carry varying mechanism-conflict levels, marking exactly where high leverage and high risk coincide.
**Figure type:** Horizontal dot plot (one row per influence), effect size on the x-axis from zero, dot color encoding mechanism-conflict level.

**Block 1 — Illustrae paste block:** Create a flat vector horizontal dot plot on a white single-column canvas, 89mm wide, 300 DPI. Plot fifteen rows, one per influence, sorted top to bottom by descending effect size. The x-axis is effect size anchored at zero and extending to roughly 1.6. Place one dot per row at these effect-size positions from top to bottom: 1.57, 1.33, 1.29, 1.20, 0.93, 0.92, 0.90, 0.88, 0.86, 0.82, 0.82, 0.79, 0.79, 0.76, 0.70. Draw a thin vertical reference line at 0.40 marking the hinge point. Color each dot by mechanism-conflict level using three categories. Map "conflict present" dots to vermillion, "partial conflict" dots to orange, and "no conflict" dots to gray. Keep dots uniform in size and rows evenly spaced. Request an unannotated vector with no influence names, no numeric labels, and no legend text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Fifteen confirmed top priority cases, effect sizes (descending): 1.57, 1.33, 1.29, 1.20, 0.93, 0.92, 0.90, 0.88, 0.86, 0.82, 0.82, 0.79, 0.79, 0.76, 0.70. Mechanism-conflict per row (in same order): No conflict, Partial, No conflict, Conflict present, Partial, Partial, Conflict present, No conflict, Partial, Conflict present, Partial, Partial, Conflict present, Partial, Partial. Vertical reference line at hinge d=0.40.
- **O:** One dot per horizontal row, rows sorted by descending effect size, x-axis from 0 to ~1.6, thin vertical hinge line at 0.40, dots colored by conflict category.
- **P:** Flat vector, 1pt strokes, white bg. Okabe-Ito: conflict present #D55E00 Vermillion, partial conflict #E69F00 Orange, no conflict gray #808080; hinge reference line thin gray dashed. Unannotated.
- **E:** Exclude influence names, rank numbers, effect-size value labels, axis numbers, legend text, connecting lines between dots, variable dot sizes, 3D, shadows, gradients, red-green pairing.

**Block 3 — Negative prompt:** influence names, rank numbers, value labels, axis numbers, legend text, text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
- Figure 1 (distribution small-multiples): static distribution snapshot, no transition mechanism. Not a video candidate.
- Figure 2 (band × feasibility crosstab): static comparison. Not a video candidate.
- Figure 3 (amplification-vs-substitution gate): the divergence is conceptual, not a temporal mechanism with ≥3 sequential causal stages; the contrast reads better held static. Not a strong candidate.
- Figure 4 (priority dot plot): static distribution. Not a video candidate.

Video candidates: 0. Recommended: none.
