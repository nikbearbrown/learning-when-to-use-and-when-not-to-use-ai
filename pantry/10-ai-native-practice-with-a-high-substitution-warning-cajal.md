# CAJAL Figure Intelligence — Chapter 10: AI-Native Practice With a High Substitution Warning
**Source:** chapters/10-ai-native-practice-with-a-high-substitution-warning.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 4 figures using Mixed density.

---

## Figure 1 — The Bastani divergence: assisted practice vs. unassisted learning  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** When the answer button is available, in-tool practice scores climb while the external unassisted-assessment line diverges downward, and the gap is invisible in platform metrics.
**Figure type:** Two-line divergence chart (time series), y-axis from zero.

**Block 1 — Illustrae paste block:** Create a single-column line chart on a white canvas, 89mm wide, 300 DPI, flat vector. The horizontal axis represents weeks of platform use, left to right; the vertical axis represents vocabulary performance and must begin at zero. Plot two configuration conditions, each as a pair of lines. Condition A (attempt-first): two lines that rise together and stay close, in sky blue. Condition B (answer-available): one line that rises steeply (in-tool practice score, in orange) and a second that bends downward and separates from it (unassisted assessment score, in vermillion). The widening vertical gap between the orange and vermillion lines is the visual payload and should be the most prominent feature, placed center-right. Use a thin horizontal reference line marking the never-used-AI baseline. Keep four plotted lines maximum. Map color: positive/together movement in sky blue and bluish green, the harmful divergence in vermillion, the climbing-but-deceptive practice line in orange. One-pixel strokes, white background, no annotations or numbers baked in. Request an unannotated vector chart with clean axes and no legend text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, line chart.
- **C:** X-axis = weeks of use; Y-axis = vocabulary performance from zero. Condition A (attempt-first): practice line and unassisted-assessment line move together. Condition B (answer-available): practice line climbs, unassisted-assessment line diverges downward. A faint horizontal baseline = students who never used AI [inferred placement]. Empirical anchor is the Bastani field experiment (+48% practice / −17% unassisted exam) — numbers not baked in.
- **O:** Two line-pairs on one set of axes; the answer-available divergence is the dominant visual, opening toward the right edge; reference baseline as a thin flat line.
- **P:** Flat vector, Okabe-Ito: together-lines sky blue #56B4E9 and bluish green #009E73; climbing practice line orange #E69F00; diverging harmful line vermillion #D55E00; baseline neutral light gray. 1pt strokes, white bg, unannotated.
- **E:** Exclude the vocabulary-encounter pipeline stages (Figure 2), the receptive/productive distinction, the four-row effect-size comparison (Figure 4), assistive-technology content, the equity-concentration argument, Carmen's contract conditions, and any depiction of the chat-window interface.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Figure 2 — The vocabulary-encounter pipeline  ·  Critical
**Heuristic:** MC
**Concept (one sentence):** A single word moves through first exposure, then repeated spaced retrieval-plus-feedback cycles, to unprompted use weeks later — with each stage split into what AI administers and what must remain the learner's act.
**Figure type:** Horizontal left-to-right flowchart with a two-band split per stage.

**Block 1 — Illustrae paste block:** Create a horizontal left-to-right flowchart on a white single-column canvas, 89mm wide, 300 DPI, flat vector. Show a single word traveling through six sequential stages: first exposure, spaced retrieval attempt 1 with feedback, spaced retrieval attempt 2 with feedback, a third retrieval-feedback cycle, then unprompted use weeks later at the far right. Connect stages with single-headed arrows pointing right to show progression. Beneath the stage band, run two parallel horizontal lanes: an upper lane marking the actions AI performs (generate exposure, schedule timing, check the attempt) and a lower lane marking the learner's irreducible act (the retrieval, the composition, the meaning-making). Make the retrieval-attempt nodes the visual anchor of each cycle — these carry the mechanism. Use blue for the dominant word-journey track, bluish green for the learner's active lane, secondary orange for the AI administration lane, light gray for connectors. Maximum seven labeled components. One-pixel strokes, white background, unannotated vector with no baked-in text.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, horizontal flowchart.
- **C:** Stages: first exposure → retrieval attempt 1 + feedback → retrieval attempt 2 + feedback → retrieval attempt 3 + feedback → unprompted use (weeks later). Two lanes below: AI lane (generate exposure, schedule spacing, check attempt); learner lane (perform retrieval, compose, make meaning). Retrieval attempts marked as the mechanism.
- **O:** Horizontal L-to-R single-headed progression arrows across the stage band; two parallel administration/performance lanes spanning the same horizontal extent; retrieval nodes emphasized.
- **P:** Flat vector, Okabe-Ito: word-journey track blue #0072B2; learner active lane bluish green #009E73; AI administration lane orange #E69F00; connectors neutral light gray. 1pt strokes, white bg, unannotated.
- **E:** Exclude the assisted/unassisted divergence chart (Figure 1), the answer-button substitution event, the four-row effect-size data, assistive-access content (text-to-speech), Carmen's renewal contract, and the equity argument.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Figure 3 — Receptive half, productive half, and the silent deletion  ·  Important
**Heuristic:** VG
**Concept (one sentence):** A vocabulary encounter has a receptive half (meet the word) and a productive half (retrieve and use it); substitution deletes only the productive half, leaving usage and quiz metrics intact while the durable learning fails to form.
**Figure type:** Structural before/after comparison panel (two states of one encounter).

**Block 1 — Illustrae paste block:** Create a single-column comparison schematic on a white canvas, 89mm wide, 300 DPI, flat vector. Represent a single vocabulary encounter as a unit divided into two halves: a receptive half (meeting the word) and a productive half (retrieving and using it), with the productive half visibly weighted as the larger, load-bearing portion. Show two side-by-side states of this unit. State one (intact): both halves present, the productive half solid and prominent. State two (after substitution): the receptive half remains, but the productive half is hollowed or removed, while a row of surviving indicators below — usage logged, completion recorded, recognition-quiz passed — stays unchanged across both states. The contrast to surface: the metrics row is identical in both states even though the productive half vanished. Use blue for the intact encounter unit, bluish green for the productive half when present, light gray for the deleted productive half and for the unchanged metrics row, orange for the surviving surface indicators. Maximum six labeled components. One-pixel strokes, white background, unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, comparison panel.
- **C:** One encounter unit = receptive half + productive half (productive half larger/load-bearing). State A: both halves intact. State B: productive half deleted, receptive half retained. A constant indicator row below both states: usage logged, completion, recognition-quiz pass — unchanged between states.
- **O:** Two side-by-side states of the same unit; shared metrics row spanning beneath both; emphasis on the identical metrics despite the missing productive half.
- **P:** Flat vector, Okabe-Ito: intact unit blue #0072B2; productive half bluish green #009E73; deleted half and metrics row neutral light gray; surface indicators orange #E69F00. 1pt strokes, white bg, unannotated.
- **E:** Exclude the encounter pipeline sequence (Figure 2), the Bastani line chart (Figure 1), the four-row effect-size data, assistive-access vs. substitution distinction, the equity-concentration claim, and Carmen's contract.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Figure 4 — The four group influences with effect sizes  ·  Supplementary
**Heuristic:** PQ
**Concept (one sentence):** The group's four influences span d = 0.44 to 0.62, all above the 0.40 hinge, with two broad technology rows carrying a pre-generative provenance flag.
**Figure type:** Horizontal dot/bar plot against the 0.40 hinge reference line, y-axis from zero.

**Block 1 — Illustrae paste block:** Create a horizontal dot plot on a white single-column canvas, 89mm wide, 300 DPI, flat vector. Plot four influences as points or short bars along a value axis that begins at zero and runs to roughly 0.70, ordered top to bottom by magnitude: vocabulary programs (0.62), technology with learning-needs students (0.57), technology in other subjects (0.55), technology with elementary students (0.44). Draw a single prominent vertical reference line at the 0.40 hinge so all four points sit visibly to its right. Distinguish the two broad-aggregation rows (technology in other subjects, technology with elementary students) with a secondary marker style or color to signal their pre-generative-provenance flag, while keeping the two cleaner rows in the primary color. Use blue for the primary rows, orange for the two provenance-flagged rows, light gray for the axis, and a distinct neutral for the hinge line. Proportional ink: marker positions strictly reflect values. Maximum six labeled components. One-pixel strokes, white background, unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background, dot/bar plot.
- **C:** Four influences with effect sizes: vocabulary programs 0.62; technology with learning-needs students 0.57; technology in other subjects 0.55; technology with elementary students 0.44. Hinge reference at 0.40. Two broad-aggregation rows flagged for pre-generative provenance.
- **O:** Horizontal value axis from zero; four rows ordered by magnitude; one vertical hinge line at 0.40; provenance-flagged rows visually differentiated.
- **P:** Flat vector, Okabe-Ito: primary rows blue #0072B2; provenance-flagged rows orange #E69F00; hinge line neutral mid-gray; axis light gray. Proportional ink, 1pt strokes, white bg, unannotated.
- **E:** Exclude the [HYPOTHESIS] AI-discounted estimates (0.55, 0.50, 0.40, 0.35), the mechanism pipeline, the Bastani divergence, the receptive/productive split, and any rank numbers.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion.

---

## Video Candidate Pass
Figure 1 — Status: Not recommended — Criterion: none — Reason: A static two-line divergence reads fully at a glance; animating the weeks adds drama without changing the learning target.
Figure 2 — Status: Weak candidate — Criterion: 2 (≥3 sequential causal stages with natural playback direction) — Reason: The encounter pipeline has sequential stages, but the learning target is the AI/learner division of labor at each stage, which a static split-lane view shows better than playback.
Figure 3 — Status: Not recommended — Criterion: none — Reason: A two-state comparison, not a transition mechanism.
Figure 4 — Status: Not recommended — Criterion: none — Reason: Static quantitative comparison.

Video candidates: 1 (weak). Recommended: none — no figure's transition mechanism is itself the learning target.
