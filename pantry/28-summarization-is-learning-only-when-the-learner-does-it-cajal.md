# CAJAL Figure Intelligence — Chapter 28: Summarization Is Learning Only When the Learner Does It
**Source:** chapters/28-summarization-is-learning-only-when-the-learner-does-it.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 2 figures using Mechanistic density.

The chapter carries one explicit placeholder — the two-student preparation scenario (Student A reads AI summary; Student B writes from memory and corrects). That is the chapter's spine and a strong VG candidate. The "three acts on the production side" (selection, generation, self-testing) is an unmarked MC candidate worth designing. The chapter is conceptually dense but numerically thin (one effect size, 0.79), so the effect-size-bar move that suits other chapters is not warranted here — a single-bar chart carries no comparison. Two figures.

---

## Figure 1 — Two students, two preparation paths  ·  Critical
**Heuristic:** VG
**Concept (one sentence):** Student A reads an AI summary five times (recognition only) while Student B writes a mediocre summary from memory, checks it against the chapter, and fixes gaps — engaging retrieval, generation, monitoring, and error correction — so B is more prepared though A feels more prepared.

**Figure type:** two-path comparison panel (process comparison)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with two vertical paths side by side. The left path (Student A) is short: a single source node (AI summary) with a looping single-headed arrow indicating repeated reading, terminating in one outcome node representing recognition only. The right path (Student B) is longer: a sequence of four stacked nodes connected top to bottom by single-headed arrows representing retrieval (write from memory), generation (own words), monitoring (check against chapter), and error correction (fix gaps), terminating in an outcome node representing transfer. Make the right path visibly richer with more stages than the left. Color the left path's nodes in vermillion to signal the hollow recognition route, and the right path's four process nodes in bluish green to signal the genuine learning route. Render the two outcome nodes in blue as the compared endpoints. Use 1pt strokes, flat fills, white background, one node plus loop on the left, four process nodes on the right, two outcome nodes. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Left path (Student A): read AI summary repeatedly (looping arrow) → recognition outcome. Right path (Student B): retrieval (write from memory) → generation (own words) → monitoring (check against chapter) → error correction (fix gaps) → transfer outcome. All explicit in prose.
- **O:** Two vertical paths side by side. Left: one source node with a self-loop, one outcome node. Right: four stacked process nodes with single-headed downward arrows, one outcome node. Right path visibly longer.
- **P:** Flat vector, 1pt strokes. Student A path in Vermillion #D55E00 (hollow recognition). Student B's four process nodes in Bluish Green #009E73 (genuine learning). Outcome nodes in Blue #0072B2 (compared endpoints). Black #000000 outlines. White background. Unannotated.
- **E:** Exclude the three-acts diagram, the safe-AI-uses list, the Melumad/Kosmyna evidence text, and the case-study conditions. Only the two preparation paths.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Three acts on the production side  ·  Important
**Heuristic:** MC
**Concept (one sentence):** Producing a summary forces three cognitive acts at once — selection (decide what matters), generation (restate in your own words), self-testing (discover the gaps) — all of which a received summary deletes by completing them elsewhere.

**Figure type:** production-side three-act schematic with deletion contrast (mechanism diagram)

**Block 1 — Illustrae paste block:** Produce a single-column vector figure with a central source node representing the act of producing a summary. From it, three single-headed arrows fan out to three act nodes arranged vertically: selection, generation, self-testing. To the right, draw a contrasting received-summary node connected to three small struck-through markers aligned with the same three acts, indicating that each act is deleted (done elsewhere) when the summary arrives finished. Use a single-headed arrow from the received-summary node toward the three deletion markers. Color the central production node and its three act nodes in bluish green to signal the engine-run that builds capacity, and the received-summary node with its three deletion markers in vermillion to signal the hollowing. Use 1pt strokes, flat fills, white background, one production node plus three acts plus one received node plus three deletion markers. Request an unannotated vector diagram with no decorative styling.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column, 89mm width, 300 DPI, vector, white background.
- **C:** Production node (producing a summary) fans to three acts: selection, generation, self-testing. Received-summary node maps to the same three acts but each is deleted. All explicit in prose.
- **O:** Central production node with three single-headed arrows to three vertically stacked act nodes. To the right, a received-summary node with a single-headed arrow to three deletion markers aligned with the three acts.
- **P:** Flat vector, 1pt strokes. Production node and three act nodes in Bluish Green #009E73 (capacity-building engine-run). Received-summary node and deletion markers in Vermillion #D55E00 (hollowing). Black #000000 outlines. White background. Unannotated.
- **E:** Exclude the two-student paths, the safe-AI-uses list, the empirical-evidence triangulation, and the case-study conditions. Only the three-acts production-versus-deletion contrast.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a video candidate — Criterion: none — Reason: a static two-path comparison; the contrast is structural, not a transition to animate.
Figure 2 — Status: Not a video candidate — Criterion: none — Reason: a static mechanism schematic; the deletion is a structural absence, not a process.

Video candidates: 0. Recommended: none.
