# CAJAL Figure Intelligence — Chapter 31: Feedback as the Most Tempting Automation Trap
**Source:** chapters/31-feedback-as-the-most-tempting-automation-trap.md
**Date:** 2026-06-08
**Density recommendation:** I recommend 4 figures using Mixed density.

Two author placeholders (the three-comment-types TABLE, the three-failure-modes DIAGRAM) are strong. The chapter is also dense with quotable effect sizes (Kluger-DeNisi d = 0.41 with >1/3 negative, Wisniewski d = 0.48, the 0.70 dataset value, Bastani +48/-17, Tutor CoPilot +4/+9) — a forest/dot plot of the feedback meta-analyses against the hinge is the single most valuable figure the chapter does not yet name.

---

## Figure 1 — The feedback distribution: meta-analytic centers and the negative tail  ·  Critical
**Heuristic:** PQ
**Concept (one sentence):** The most-cited feedback number (d = 0.70) runs high against the field's meta-analytic centers (Kluger-DeNisi d = 0.41, Wisniewski d = 0.48), and over one-third of feedback interventions decrease performance — the distribution the average conceals.
**Figure type:** dot plot of meta-analytic centers plus a proportion bar for the negative tail

**Block 1 — Illustrae paste block:** Create a single-column composite figure, 89mm wide, 300 DPI, vector, white background, in two stacked registers sharing alignment. Upper register: a horizontal dot plot with a zero-anchored axis from 0 to 0.80, plotting three labeled points — Kluger & DeNisi d = 0.41, Wisniewski et al. d = 0.48, and the 2018 Hattie-list value d = 0.70 — with one full-height vertical reference line at d = 0.40. Lower register: a single horizontal 100%-width proportion bar divided into two segments, the left segment representing the just-over-one-third of feedback interventions that decreased performance and the right segment the remainder, the dividing point placed just past the one-third mark. Align the two registers on the same left margin. The figure must let the reader see both that the headline number sits above the credible centers and that a large minority of interventions do harm. Flat fills, constant marker size, 1pt strokes, Proportional Ink, no 3D, no baked-in numbers. Request an unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Three confirmed effect-size points: Kluger & DeNisi (1996) d = 0.41; Wisniewski, Zierer & Hattie (2020) d = 0.48; 2018 Hattie list d = 0.70. One hinge at d = 0.40. One confirmed proportion: "over one-third" of feedback interventions decreased performance. All explicit in the chapter.
- **O:** Upper dot plot (three points, zero-anchored axis, hinge line); lower single-bar proportion split at just past one-third; shared left alignment.
- **P:** Flat vector, 1pt strokes. Color map: Hattie 0.70 → #E69F00 (overstated/secondary); Kluger-DeNisi 0.41 → #0072B2 (the load-bearing distribution paper); Wisniewski 0.48 → #56B4E9 (current center); negative-tail segment → #D55E00 (harm); remainder segment → gray; hinge → gray. White bg, unannotated.
- **E:** Exclude the four Hattie-Timperley levels, the three comment examples, Steiss head-to-head text, and case-study content.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 2 — Same essay, three comments, opposite signs  ·  Critical
**Heuristic:** VG
**Concept (one sentence):** Three machine-generatable comments on the same essay, delivered at identical speed, differ completely in Hattie-Timperley level, where they direct attention, predicted sign, and whether they supply a usable next move.
**Figure type:** three-column comparison panel (annotated example matrix, rendered unannotated as a structured grid)

**Block 1 — Illustrae paste block:** Create a single-column three-column comparison grid, 89mm wide, 300 DPI, vector, white background. Three equal vertical columns represent three comments on one shared essay: a person-directed praise comment, a task-verdict-without-path comment, and a task-plus-process comment with a next move. Down the left, four aligned horizontal rows form a shared matrix: comment register, Hattie-Timperley level, attention direction (toward self vs. toward task), and predicted sign (harmful / neutral / helpful). Across the very top, a single full-width band of uniform fill spans all three columns to signify that speed/latency is constant across them. Encode predicted sign by column color so the leftmost column reads as harm-prone, the middle as neutral, the rightmost as helpful. The figure must make the constant-speed band and the diverging sign row the two dominant reads. Flat fills, 1pt cell strokes, no text baked into cells. Request an unannotated vector grid.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Three confirmed comment types on the same essay: person-directed praise (self level, harm-prone); task verdict without path (task level, neutral); task+process with next move (helpful). Shared rows: level, attention direction, predicted sign, usable-next-move present/absent. A constant-speed band across all three. Explicit in the chapter.
- **O:** Three vertical columns, four shared annotation rows beneath a full-width constant-speed band; sign encoded by column color.
- **P:** Flat vector, 1pt strokes. Color map: praise column → #D55E00 (harm); verdict-only column → gray (neutral); task+process column → #009E73 (helpful); constant-speed band → #56B4E9 (the dimension AI wins, drawn neutral-primary). White bg, unannotated.
- **E:** Exclude the meta-analytic effect sizes, the three substitution failure modes, and the contract conditions.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Figure 3 — Three substitution failure modes and their signatures  ·  Important
**Heuristic:** MC
**Concept (one sentence):** Automated feedback fails through three parallel channels — unreviewed comments triggering the Kluger-DeNisi harm distribution, the feedback channel becoming an answer channel with the Bastani +48/-17 signature, and volume mistaken for value behind a plausible surface — each with its own observable signature.
**Figure type:** three parallel vertical failure-channel diagram

**Block 1 — Illustrae paste block:** Create a single-column diagram of three parallel vertical channels, 89mm wide, 300 DPI, vector, white background. Each channel is a top-to-bottom sequence of three linked stages connected by single downward arrows. Channel 1: unreviewed comments → harm distribution applies unfiltered → one-in-three harm outcome. Channel 2: feedback channel converts to answer channel → assisted-practice performance rises while unassisted performance falls (the split signature) → dependence. Channel 3: comment volume multiplies → plausible surface hides quality failures → revision behavior unchanged. End each channel in a distinct terminal node marking its observable failure signature. The three channels run strictly parallel and do not cross. Use a blocking bar (⊣) rather than an arrowhead at each channel's terminal node to mark the blocked learning outcome. Flat fills, 1pt strokes, single-headed arrows only, no baked-in text. Request an unannotated vector.

**Block 2 — Full SCOPE prompt:**
- **S:** Single-column 89mm, 300 DPI, vector, white background.
- **C:** Three confirmed failure channels, each three stages: (1) unreviewed → unfiltered harm distribution → ~one-in-three harm; (2) answer channel → assisted up / unassisted down → dependence; (3) volume → plausible surface masks quality → revision unchanged. Explicit in the chapter.
- **O:** Three non-crossing vertical channels, top-to-bottom, single downward arrows between stages, blocking-bar terminal on each.
- **P:** Flat vector, 1pt strokes. Color map: channel 1 → #D55E00 (harm); channel 2 → #CC79A7 (transitional dependence); channel 3 → #E69F00 (noise/secondary); terminal blocking bars → black. White bg, unannotated.
- **E:** Exclude the meta-analytic dot plot, the comment-types grid, Tutor CoPilot figures, and triage-arithmetic prose.

**Block 3 — Negative prompt:** text labels, words, gibberish letters, titles, captions, decorative borders, realistic textures, drop shadows, gradient backgrounds, photographic elements, dual-headed arrows, hand-drawn styles, sketch lines, human figures, visual clutter, fuzzy borders, watermarks, red-green color combinations, rainbow color scales, 3D perspective distortion

---

## Video Candidate Pass
Figure 1 — Status: Not a candidate — Criterion: none — Reason: static quantitative comparison.
Figure 2 — Status: Not a candidate — Criterion: none — Reason: a comparison matrix; no temporal mechanism.
Figure 3 — Status: Not a candidate — Criterion: none — Reason: three parallel causal chains legible as a static diagram; no single transition mechanism is the learning target.

Video candidates: 0. Recommended: none.
