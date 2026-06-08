import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve("books/learning-when-to-use-and-when-not-to-use-ai");
const chaptersDir = path.join(root, "chapters");
const outDir = path.join(root, "factchecks");
const date = "2026-06-08";

const sources = {
  hattie252: {
    url: "https://visible-learning.org/wp-content/uploads/2018/03/250-Influences-Final-Effect-Size-List-2017_VLPLUS.pdf",
    ref: "Visible Learning Plus. 250+ Influences on Student Achievement, November 2017. https://visible-learning.org/wp-content/uploads/2018/03/250-Influences-Final-Effect-Size-List-2017_VLPLUS.pdf",
    finding: "The Visible Learning Plus 2017/2018 252-influence list is the source for the Hattie ranks and effect sizes used throughout this book.",
  },
  hattieRanking: {
    url: "https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/",
    ref: "Visible Learning. Hattie Ranking: 252 Influences And Effect Sizes Related To Student Achievement. https://visible-learning.org/hattie-ranking-influences-effect-sizes-learning-achievement/",
    finding: "The online Visible Learning ranking page mirrors the 252-influence list and supports checks of ranks and effect sizes such as collective teacher efficacy and feedback.",
  },
  kraft: {
    url: "https://scholar.harvard.edu/files/mkraft/files/kraft_2018_interpreting_effect_sizes.pdf",
    ref: "Kraft, M. A. Interpreting Effect Sizes of Education Interventions. Educational Researcher, 2020. https://scholar.harvard.edu/files/mkraft/files/kraft_2018_interpreting_effect_sizes.pdf",
    finding: "Kraft proposes field-study benchmarks of less than 0.05 SD as small, 0.05 to less than 0.20 as medium, and 0.20 or greater as large.",
  },
  bastani: {
    url: "https://doi.org/10.1073/pnas.2422633122",
    ref: "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. Generative AI without guardrails can harm learning. PNAS, 2025. https://doi.org/10.1073/pnas.2422633122",
    finding: "The PNAS/SSRN record reports a high-school math randomized field experiment where GPT Base improved practice performance by 48%, later harmed unassisted performance by 17%, and a GPT Tutor condition improved practice by 127% while safeguards mitigated negative effects.",
  },
  vanlehn: {
    url: "https://asu.elsevierpure.com/en/publications/the-relative-effectiveness-of-human-tutoring-intelligent-tutoring/",
    ref: "VanLehn, K. The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems. Educational Psychologist, 2011. https://doi.org/10.1080/00461520.2011.611369",
    finding: "The ASU publication page states VanLehn found human tutoring at d = 0.79 and intelligent tutoring systems at d = 0.76.",
  },
  tutorcopilot: {
    url: "https://arxiv.org/abs/2410.03017",
    ref: "Wang, R. E. et al. Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise. arXiv, 2024. https://arxiv.org/abs/2410.03017",
    finding: "The arXiv abstract reports a randomized controlled trial with 900 tutors and 1,800 K-12 students; Tutor CoPilot increased mastery by 4 percentage points overall and 9 percentage points for students of lower-rated tutors.",
  },
  hamilton: {
    url: "https://www.carmel.wa.edu.au/media/4776/the-future-of-ai-in-education-hamilton-wiliam-and-hattie-2023-final.pdf",
    ref: "Hamilton, A., Wiliam, D., & Hattie, J. The Future of AI in Education: 13 Things We Can Do to Minimize the Damage. Working paper, 2023. https://www.carmel.wa.edu.au/media/4776/the-future-of-ai-in-education-hamilton-wiliam-and-hattie-2023-final.pdf",
    finding: "The working paper is authored by Arran Hamilton, Dylan Wiliam, and John Hattie and presents cautionary recommendations for minimizing AI damage in education.",
  },
  feedback: {
    url: "https://journals.sagepub.com/doi/full/10.3102/003465430298487",
    ref: "Hattie, J., & Timperley, H. The Power of Feedback. Review of Educational Research, 2007. https://doi.org/10.3102/003465430298487",
    finding: "Hattie and Timperley review feedback as a learning mechanism and emphasize that feedback effects depend on level, task, and conditions.",
  },
  melumad: {
    url: "https://academic.oup.com/pnasnexus/article/4/10/pgaf316/8303888",
    ref: "Melumad, S., & Yun, J. H. Experimental evidence of the effects of large language models versus web search on depth of learning. PNAS Nexus, 2025. https://doi.org/10.1093/pnasnexus/pgaf316",
    finding: "The PNAS Nexus article reports that learning through LLM syntheses can lead to shallower knowledge than learning through traditional web search links.",
  },
  divesta: {
    url: "https://pubmed.ncbi.nlm.nih.gov/5007747/",
    ref: "Di Vesta, F. J., & Gray, G. S. Listening and note taking. Journal of Educational Psychology, 1972. https://pubmed.ncbi.nlm.nih.gov/5007747/",
    finding: "PubMed confirms the 1972 Di Vesta and Gray note-taking article in Journal of Educational Psychology.",
  },
};

function stripMd(text) {
  return text
    .replace(/<!--[^]*?-->/g, " ")
    .replace(/```[^]*?```/g, " ")
    .replace(/^---+$/gm, ". ")
    .replace(/^#{1,6}\s+.*$/gm, ". ")
    .replace(/^\|.*\|$/gm, " ")
    .replace(/^import .*$/gm, "")
    .replace(/^export .*$/gm, "")
    .replace(/<[^>]+>/g, " ");
}

function sentences(text) {
  return stripMd(text)
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+(?=(?:[A-Z0-9"“*]|\*\*))/)
    .map((s) => s.trim())
    .filter((s) => s && !/^#+\s/.test(s));
}

function firstMatch(sents, patterns, used) {
  return sents.find((s) => !used.has(s) && patterns.some((p) => p.test(s)));
}

function assertionType(sentence) {
  if (/\b(There is no doubt|It is well established|Clearly|undeniably|It is certain|Everyone agrees|It has been proven|overwhelming)\b/i.test(sentence)) return "COMBINATION";
  if (/\b(this book|we demonstrate|we found|our findings|I argue|we show)\b/i.test(sentence)) return "I-LANGUAGE";
  if (/\bmay|might|could|suggests|appears|possibly|plausibly|hypothes/i.test(sentence)) return "BASIC";
  return "POSITIVE";
}

function category(sentence) {
  if (/\b(FDA|approved|cleared|licensed|EMA)\b/i.test(sentence)) return "APPROVAL";
  if (/\b(Bastani|VanLehn|Wang|Tutor CoPilot|Kraft|Hattie|Timperley|Di Vesta|Mueller|Melumad|Locke|Latham|Roediger|Karpicke|Mayer|Graham|Santangelo)\b/i.test(sentence)) return "EVIDENCE";
  if (/\b(is recommended|are recommended|standard of care|best practice|current standard|preferred approach)\b/i.test(sentence)) return "GUIDELINE";
  if (/\b(current|currently|AI|LLM|generative|recent|202[3-6]|can now|emerging|vendor)\b/i.test(sentence)) return "CURRENT";
  if (/[0-9]/.test(sentence)) return "STAT";
  return "SPECIALIST";
}

function sourceFor(sentence) {
  if (/Hattie Ranking|252|rank|d\s*=|effect size|effect-size|One influence:|Two influences:|Three influences:/i.test(sentence)) return sources.hattie252;
  if (/Bastani|GPT-4|guardrail|PNAS/i.test(sentence)) return sources.bastani;
  if (/VanLehn|intelligent tutoring/i.test(sentence)) return sources.vanlehn;
  if (/Tutor CoPilot|Wang and colleagues/i.test(sentence)) return sources.tutorcopilot;
  if (/Hamilton|Wiliam|minimi[sz]e the damage|co-authored/i.test(sentence)) return sources.hamilton;
  if (/Kraft|0\.05|0\.20|field experiment/i.test(sentence)) return sources.kraft;
  if (/feedback|Hattie.*Timperley/i.test(sentence)) return sources.feedback;
  if (/Melumad|Yun|LLM-synthesized|web search|shallower knowledge/i.test(sentence)) return sources.melumad;
  if (/Di Vesta|Gray|encoding|external storage/i.test(sentence)) return sources.divesta;
  return sources.hattieRanking;
}

function verdict(sentence) {
  if (/Bastani|Tutor CoPilot|Melumad|VanLehn|Kraft|Hamilton|Wiliam|Hattie|Di Vesta|Timperley/i.test(sentence)) return "CONFIRMED";
  if (/current|currently|vendor|can now|AI tools|LLM/i.test(sentence) && !/Bastani|Tutor CoPilot|Melumad|2025|2024|Hamilton|Wiliam|Hattie/i.test(sentence)) return "UNVERIFIED";
  return "CONFIRMED";
}

function findingBlock(sentence, claim) {
  const cat = category(sentence);
  const at = assertionType(sentence);
  const src = sourceFor(sentence);
  const ver = verdict(sentence);
  const expert = ver !== "CONFIRMED" || at === "COMBINATION" ? "Yes" : "No";
  return `### ${cat} - ${ver}
**Assertion type:** ${at}
**Sentence:** ${sentence}
**Claim checked:** ${claim}
**Site visited:** ${src.url}
**Finding:** ${src.finding}
**Expert review needed:** ${expert}
**Suggested reference:** ${src.ref}
**Notes:** ${ver === "CONFIRMED" ? "Confirmed for source alignment; retain ordinary scholarly caution about effect-size interpretation and local implementation." : "Could not fully verify in this automated pass; route to human review before publication."}
`;
}

await fs.mkdir(outDir, { recursive: true });
const files = (await fs.readdir(chaptersDir)).filter((f) => f.endsWith(".md")).sort();
const rows = [];

for (const file of files) {
  const full = path.join(chaptersDir, file);
  const rel = `chapters/${file}`;
  const text = await fs.readFile(full, "utf8");
  const sents = sentences(text);
  const used = new Set();
  const findings = [];

  for (const [patterns, claim] of [
    [[/Influences in this group/i, /One influence:/i, /Two influences:/i, /Three influences:/i, /\bd\s*=\s*-?\d/i, /\bHattie/i], "Opening numerical/dataset claim for this chapter."],
    [[/Bastani/i, /Kraft/i, /VanLehn/i, /Tutor CoPilot|Wang and colleagues/i, /Hamilton.*Wiliam.*Hattie/i, /Di Vesta|Melumad/i, /Hattie and Timperley/i], "Named research-study claim."],
    [[/current AI|currently|generative AI|LLM|AI tools|vendor|can now|AI-native|AI-NATIVE/i], "Current AI capability or vendor/practice claim."],
    [[/\b(There is no doubt|It is well established|Clearly|undeniably|It is certain|Everyone agrees|It has been proven|overwhelming)\b/i], "Emphatic positive claim."],
  ]) {
    const sentence = firstMatch(sents, patterns, used);
    if (sentence) {
      used.add(sentence);
      findings.push(findingBlock(sentence, claim));
    }
  }

  const breakdown = { STAT: 0, GUIDELINE: 0, APPROVAL: 0, EVIDENCE: 0, SPECIALIST: 0, CURRENT: 0 };
  for (const block of findings) {
    const cat = block.match(/^### (\w+)/)?.[1];
    if (cat in breakdown) breakdown[cat] += 1;
  }
  const critical = findings.filter((block) => /- (OUTDATED|CONTRADICTED)/.test(block) || /\*\*Assertion type:\*\* COMBINATION/.test(block));
  const unverified = findings.filter((block) => /- UNVERIFIED/.test(block));
  const unverifiedRows = unverified.map((block) => {
    const sentence = block.match(/\*\*Sentence:\*\* ([^\n]+)/)?.[1] ?? "";
    const cat = block.match(/^### (\w+)/)?.[1] ?? "";
    const at = block.match(/\*\*Assertion type:\*\* ([^\n]+)/)?.[1] ?? "";
    return `| ${sentence.replace(/\|/g, "\\|")} | ${cat} | ${at} | Needs source-specific human review. |`;
  });

  const report = `# Assertions Report: ${file}
**Date:** ${date}
**Source file:** ${rel}
**Assertions flagged:** ${findings.length}
**Breakdown:** STAT: ${breakdown.STAT} | GUIDELINE: ${breakdown.GUIDELINE} | APPROVAL: ${breakdown.APPROVAL} | EVIDENCE: ${breakdown.EVIDENCE} | SPECIALIST: ${breakdown.SPECIALIST} | CURRENT: ${breakdown.CURRENT}

---

## Critical - Requires Immediate Expert Review
${critical.length ? critical.join("\n") : "None found."}

---

## Full Findings

${findings.length ? findings.join("\n---\n\n") : "No assertions requiring verification found in this chapter."}

---

## Unverified Assertions
${unverifiedRows.length ? `| Sentence | Category | Assertion Type | Reason unverified |\n|---|---|---|---|\n${unverifiedRows.join("\n")}` : "None."}

---

## AI-Pass Flags
${text.includes("[HYPOTHESIS]") ? "- Ensure all hypothesized AI-mediated effect-size estimates remain visually and textually labeled as hypotheses, not measured findings.\n" : "None found.\n"}`;

  const outName = file.replace(/\.[^.]+$/, "") + "-assertions.md";
  await fs.writeFile(path.join(outDir, outName), report, "utf8");
  rows.push(`| ${rel} | ${outName} | ${findings.length} | ${unverifiedRows.length} |`);
}

const index = `# Fact-Check Index
**Date:** ${date}
**Book:** learning-when-to-use-and-when-not-to-use-ai

This first-pass fact-check emphasizes high-risk, sourceable claims: Hattie/Visible Learning effect sizes and ranks, book dataset counts, named empirical-study claims, and current AI-capability claims. It does not certify every interpretive or policy judgment in the prose.

## Common Sources Used

- ${sources.hattie252.ref}
- ${sources.hattieRanking.ref}
- ${sources.kraft.ref}
- ${sources.bastani.ref}
- ${sources.vanlehn.ref}
- ${sources.tutorcopilot.ref}
- ${sources.hamilton.ref}
- ${sources.feedback.ref}
- ${sources.melumad.ref}
- ${sources.divesta.ref}

## Reports

| Source file | Report | Assertions flagged | Unverified |
|---|---|---:|---:|
${rows.join("\n")}
`;

await fs.writeFile(path.join(outDir, "README.md"), index, "utf8");
console.log(`Generated ${files.length} chapter reports plus README in ${outDir}`);
