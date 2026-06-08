# Change Log entry — 2026-06-08

## Group-number removal and human group openings (chapters 02–39)

- Renamed all 38 group-chapter files to drop gNN slugs (e.g., `05-g04-high-impact-…` → `05-high-impact-…`). Numeric order preserved; build (cat chapters/*.md) unaffected.
- Removed "GNN:" from 24 chapter H1 titles (14 were already clean).
- Replaced ~50 in-body G-number references with plain language ("This group collects…", "this chapter's group", "group influences/rows"); contextual one-offs rewritten by hand in chapters 04, 07, 09, 14, 17, 19, 20, 27.
- Inserted a plain-prose group explanation (4–6 sentences) in every group chapter, between the subtitle and the cold open: what the group is (named influences + effect sizes), how it relates to Hattie's synthesis, and how it relates to AI (feasibility/substitution/conflict translated from dataset jargon).
- Internal docs (TIKTOC.md, data/, outline.md) intentionally untouched — G numbers remain valid as internal crosswalk IDs per author decision.
- Verified: zero G-number references remain in chapters/; one H1 per chapter; no gNN slugs in filenames.

Reason: reader-facing chapters must not use internal group IDs; each group chapter now opens with a human explanation per author instruction.

## Addendum — 2026-06-08

- Renamed all 38 pantry `_notes.md` files to drop gNN slugs, restoring the 1:1 filename pairing with the renamed chapter files.

## Addendum 2 — 2026-06-08

- Added a named "Group Profile" markdown table to all 38 group chapters, placed between the group intro paragraph and the cold open. Each table carries: influence count (of 252), effect-size range with weighted average, Hattie band, AI feasibility, human irreducibility, substitution risk, cognitive-work conflict, and ranked member influences with d values. Tables are named after the chapter's human title — no cluster/group numbers. Internal R/C source-group IDs deliberately excluded (internal crosswalk IDs, per the same rule that removed G numbers). G33–G35 profiles keyed on influence content, not group number, due to a numbering rotation between the cluster doc and the original chapter slugs.
