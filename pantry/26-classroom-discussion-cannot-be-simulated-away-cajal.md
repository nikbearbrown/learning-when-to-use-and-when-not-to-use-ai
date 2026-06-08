# CAJAL Figure Intelligence — Chapter 26: Classroom Discussion Cannot Be Simulated Away
**Source:** chapters/26-classroom-discussion-cannot-be-simulated-away.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 3 figures using Mixed density.

The chapter carries three placeholders: the three-panel live-seminar-versus-AI-dialogue comparison, the seminar-week timeline INFOGRAPHIC, and the phase-gate TABLE (typeset). The three-property comparison is the chapter's spine — a strong VG candidate. The seminar-week timeline (AI before and after, never instead) is a clean MC candidate. I add a supplementary PQ figure on the Murphy-et-al asymmetry (strong comprehension gains, rare critical-thinking gains) since the chapter argues vendors hide it.

---

## Figure 1 — Three properties a chatbot cannot have  ·  Critical
**Heuristic:** VG
**Concept (one sentence):** Live seminar has three properties — public (social stakes), plural (genuine disagreement), shared-context-building (accumulating referents) — that a private student–AI dialogue lacks by construction, and the d = 0.82 was earned by the live version only.

**Figure type:** three-panel structural comparison (comparison panels)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with three panels arranged left to right. The left panel represents a live seminar: draw four to five student nodes interconnected by single-headed arrows running between several of them, indicating multi-directional exchange among co-present people. The center panel represents a student–AI dialogue: draw a single student node connected to one AI node by a single bidirectional-free pair of single-headed arrows, isolated, with no other nodes. The right panel represents the d = 0.82 evidence base: draw a single bar or block element with a single-headed arrow pointing left toward the live-seminar panel only, indicating the evidence belongs to the left structure. Color the live-seminar nodes and their arrows in bluish green to signal the working mechanism, the student–AI nodes in vermillion to signal the hollowed simulation, and the evidence block in blue as the anchoring fact. Use 1pt strokes, flat fills, white background, three panels, maximum eight total nodes. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Left panel: live seminar, multiple interconnected student nodes (public, plural, shared referents accumulating). Center panel: single student node connected to one AI node (private, simulated disagreement, no shared deposit). Right panel: the d = 0.82 evidence block, arrow pointing left only. All explicit in prose.
- **O:** Three panels left to right. Left: 4–5 student nodes with single-headed inter-node arrows. Center: one student node, one AI node, isolated. Right: one evidence block with a single-headed arrow to the left panel.
- **P:** Flat vector, 1pt strokes. Live-seminar nodes/arrows in Bluish Green #009E73 (working mechanism). Student–AI nodes in Vermillion #D55E00 (hollowed simulation). Evidence block in Blue #0072B2 (anchoring fact). Black #000000 outlines. White background. Unannotated.
- **E:** Exclude the seminar-week timeline, the Murphy asymmetry bars, the two substitution traps, and the case-study conditions. Only the three-panel comparison.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — AI at the edges of the talk, never its center  ·  Important
**Heuristic:** MC
**Concept (one sentence):** Across a seminar week, AI appears at three points — Monday rehearsal (student generates, AI cross-examines), Thursday analytics (talk map to instructor), weekend prep — all pointing toward the single live seminar on Wednesday, never replacing it.

**Figure type:** weekly timeline with role-placement arrows (cycle/flow diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal timeline running left to right across the week with four marked stages: Monday AI rehearsal, Wednesday live seminar, Thursday AI analytics, weekend instructor prep, with a return arrow from weekend back to Monday to show the cycle repeats. Draw the Wednesday live-seminar stage as the central, visually largest node. From each of the three AI stages (Monday rehearsal, Thursday analytics, weekend prep), draw a single-headed arrow pointing toward the Wednesday seminar node to show every AI stage serves the seminar. Color the Wednesday live-seminar node in bluish green as the irreplaceable human core, and the three AI stages in sky blue as the supporting machine roles. Render the timeline spine and the cycle-return arrow in black. Use 1pt strokes, flat fills, white background, four stages plus the central seminar emphasis. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Monday: AI rehearsal (student generates claim, AI cross-examines). Wednesday: live seminar (central). Thursday: AI analytics (talk map to instructor). Weekend: instructor prep. Cycle repeats. Each AI stage points toward the seminar. All explicit in prose.
- **O:** Horizontal weekly timeline, four stages, Wednesday seminar as the largest central node. Single-headed arrows from each AI stage to the seminar. Return arrow weekend → Monday.
- **P:** Flat vector, 1pt strokes. Wednesday seminar node in Bluish Green #009E73 (human core). Three AI stages in Sky Blue #56B4E9 (supporting roles). Timeline spine and return arrow in Black #000000. White background. Unannotated.
- **E:** Exclude the three-property comparison, the Murphy asymmetry bars, the substitution-trap content, and the phase-gate rows. Only the weekly role placement.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — The asymmetry vendors omit: comprehension versus critical thinking  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** The Murphy et al. meta-analysis behind the d = 0.82 shows strong, reliable comprehension gains but rare, unreliable critical-thinking gains — an asymmetry the aggregate number hides.

**Figure type:** two-bar comparison with hinge reference line

**Block 1 — Illustrae paste block:** Produce a single-column vector horizontal bar chart with a quantitative x-axis from zero to 0.90, linear, beginning at true zero. Draw the headline aggregate value, classroom discussion at 0.82, as a reference bar. Then draw two contrasting outcome bars representing the asymmetry: a long, solid bar for text-comprehension gains (reliable and strong) and a short, open-outline bar for critical-thinking-and-reasoning gains (rare and unreliable). Since the meta-analysis reports the asymmetry qualitatively rather than as two clean decimals, render the comprehension bar near the aggregate length and the critical-thinking bar markedly shorter, with the open outline marking its uncertainty. Add a single vertical reference line at 0.40 to mark the hinge. Color the aggregate and comprehension bars in blue as the supported claim and the critical-thinking bar in orange as the weak, often-absent outcome. Render the hinge line in neutral gray. Use 1pt strokes, proportional ink, zero baseline, flat white background. Request an unannotated vector chart with no numeric labels and no three-dimensional effects.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Aggregate classroom discussion d = 0.82 (explicit). Comprehension gains: strong, reliable [magnitude inferred near aggregate, qualitative in source]. Critical-thinking gains: rare, unreliable [short, inferred — source reports qualitatively]. Hinge at d = 0.40.
- **O:** Horizontal bars, x from 0 to ~0.90 linear. Aggregate bar plus two contrast bars: long solid comprehension bar, short open-outline critical-thinking bar. One vertical hinge reference line at 0.40.
- **P:** Flat vector, 1pt strokes. Aggregate and comprehension bars in Blue #0072B2 (supported). Critical-thinking bar in Orange #E69F00 (weak/absent), open outline. Hinge line in gray. Black #000000 axis. Proportional ink, zero baseline. White background. Unannotated.
- **E:** Exclude the three-property comparison, the weekly timeline, and the case-study conditions. Only the asymmetry bars and the hinge line. Mark inferred magnitudes as approximate, not precise data.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a video candidate — Criterion: none — Reason: a static structural comparison of three network states; no transition is the learning target.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: the weekly cycle is best read at once as a placement map; cyclical return is scheduling, not the concept.
Figure 3 — Status: Not a video candidate — Criterion: none — Reason: static quantitative comparison.

Video candidates: 0. Recommended: none.
