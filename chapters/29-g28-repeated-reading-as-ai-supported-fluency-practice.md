# Chapter 29 — G28: Repeated Reading as AI-Supported Fluency Practice

## The Decision on the Table

Lena Fitzgerald teaches second grade — twenty-six students, one part-time aide, and a fluency problem she can name to the child. Eight of her students decode accurately but so slowly that by the end of a sentence they have lost its beginning. She knows the intervention they need: repeated reading — short passages read aloud, again and again, with someone catching errors and nudging expression — and she knows the arithmetic that defeats it. Eight students times four sessions a week times ten minutes of one-to-one listening is more adult hours than her classroom contains.

The district's literacy director offers a way out: a pilot license for an AI reading tutor — an Amira-class tool that listens to a child read aloud through a headset, catches word-level errors in real time, tracks accuracy and rate, and serves passages at calibrated difficulty. The vendor's brochure claims the product is "twice as effective as traditional tutoring."

Lena's grade-level team is wary; the book in your hands has spent several chapters warning about AI doing learners' work for them. But the literacy director asks the right question: "What work, exactly, would this tool be doing — and whose work is it?" For once in this book, the answer mostly comes back clean.

## What This Group Is

A single influence, classified: High band, **AI-NATIVE**, low human irreducibility, high substitution risk, **no mechanism conflict**.

That pairing — high substitution risk *with* no conflict — looks contradictory until you ask what, precisely, can be substituted. In repeated reading, the learner's irreplaceable act is reading aloud, again. No tool can do your oral reading for you in any way that tempts; the cognitive work cannot be offloaded even in principle. What AI substitutes is the **listener** — the adult who hears the reading, catches the errors, gives the feedback. That role is the intervention's bottleneck (one teacher, twenty-six readers), and much of it is procedural, which is why speech-recognition reading tutors are among the oldest serious AI applications in education.

So this is the book's "yes" chapter — the clean exhibit that the seven-dimension framework is not a refusal machine. After several chapters of traps, here the classification says: go, with conditions. The conditions are what the high substitution risk is guarding, and they are real — but they concern *what gets substituted around* the practice, not the practice itself.

## The Influences

**Repeated reading programs (d = 0.75)** — rank 23 on the 2018 252-influence list (values differ across Visible Learning editions; the year matters).

The evidence anchor is Therrien's (2004) meta-analysis: repeated reading produced large fluency gains and moderate comprehension gains on practiced passages, with benefits for both general-education students and students with learning disabilities [verify — the exact decimals circulate in more than one version; confirm against the journal PDF before quoting figures]. Therrien's structural contribution matters more than any decimal: he separated **non-transfer** outcomes (the rehearsed passage itself) from **transfer** outcomes (novel passages). Transfer effects are real but smaller — which is the honest boundary of the intervention and, as we will see, the honest test of any product built on it. The National Reading Panel (2000) reached the convergent conclusion: guided repeated oral reading has significant positive impact on word recognition, fluency, and comprehension across grade levels.

One contested edge to carry: comparison studies of repeated reading versus *wide* reading — equivalent time spread over varied texts — show mixed results, with some finding wide reading matches repeated reading's gains [contested — see pantry flag]. Repeated reading is one strong fluency tool, not the only one.

## Why It Works

The mechanism is **automaticity**. While decoding is effortful, it consumes the working memory that comprehension needs; a child laboring over each word has nothing left for meaning. As word recognition becomes automatic, capacity is released for understanding — the standard account since LaBerge and Samuels' automaticity theory [verify — classic source, cited from field knowledge]. Repeated reading attacks automaticity directly: rereading the same short passage with error feedback until a fluency criterion is met, then moving on.

Two clarifications keep the mechanism honest. First, **fluency is not speed.** The construct is accuracy plus appropriate rate plus prosody — phrasing, expression — in the service of comprehension. A words-per-minute race trains the wrong target and produces robotic readers. Second, the gain that matters is the *transfer* gain: a second grader who climbs from 62 to 94 words correct per minute on the rehearsed passage has demonstrated rehearsal; the same child reading next week's *cold* passage more fluently than last month's has demonstrated learning. Programs — and dashboards — must be judged on cold reads.

Why is the listener so important? Because unmonitored repeated reading consolidates errors. The child who misreads "through" as "thorough" four times has practiced the mistake. The feedback loop — error caught, word corrected, line reread — is what separates practice from rehearsal of failure. That loop is exactly what one adult cannot run for twenty-six children, and exactly what speech recognition can.

## What AI Can Safely Do

This row's safe list is the longest in the book's high-stakes chapters, because the substitution ledger mostly comes back "legitimate":

- **Listen to every rehearsal.** Real-time word-level error detection across a whole classroom simultaneously — the bottleneck dissolved. The dataset's notes call real-time oral reading evaluation a legitimate AI-native implementation, and the book's classification hypothesizes meaningful supporting value here (a hypothesis, not a measured result).
- **Catch and log errors**; track accuracy, rate, and prosody proxies over time, producing growth curves per child.
- **Serve passages at calibrated decodability**, matched to the phonics scope and sequence (the Chapter 30 connection runs both directions: phonics supplies the decoding knowledge; repeated reading automatizes it).
- **Surface the flattened curves** — telling the teacher which children's growth has stalled, so scarce human listening time lands where it is needed.
- **Enable the home-practice loop.** Repeated reading is homework-friendly but historically unsupervisable; an AI listener changes the economics, raising practice volume where it was zero. Notably, this is one place the book's general homework-with-AI warning does not transfer: because the mechanism is performance practice, AI assistance cannot "do the homework" — there is no way to fake your own oral reading to a microphone.

Build the ledger explicitly: the **reader** (the child — never substitutable, not even in principle); the **text** (AI-generatable at controlled decodability — legitimate, with QC); the **listener/error-catcher** (AI-substitutable, with caveats below); the **prosody model** (human-preferred — children should regularly hear skilled expressive reading); the **motivation and relationship** (human — children read aloud to adults partly because the adult cares). Most rows in this book need a gate. This one needs a roster.

## The Substitution Trap

Three boundaries hold the "yes" in place.

**The inversion: the machine reads to the child.** The most dangerous failure is also the quietest. Text-to-speech — the app reading aloud while the child follows the highlighting — is repeated *listening*, not repeated reading. The child practices exactly nothing the d = 0.75 measures; the intervention has been inverted while the engagement dashboard glows. TTS has fully legitimate uses — access to grade-level content for students with disabilities is a different influence with its own logic — but deploying an access tool inside a fluency-practice slot deletes the practice. The audit question is five words: *who is doing the decoding?*

**The whole-ecosystem substitution.** AI listening should expand the listening economy, not abolish the human share of it. If machine listening replaces human listening entirely, the school loses the channels ASR cannot carry: modeled prosody, comprehension breakdowns a human ear catches, and the relational reasons a six-year-old reads aloud to an adult at all.

**The recognition gap — an equity failure wearing a personalization badge.** Speech recognition accuracy varies by speaker: young children, second-language speakers, and speakers of non-mainstream dialects face higher misrecognition rates, which convert directly into false error feedback and wrong difficulty placement [verify — documented as a concern class in the ASR literature; current commercial-system figures not confirmed]. An ASR tutor that hears a dialect as disfluency is not measuring the child's reading; it is measuring its own training data. The score is the tool's *recognition* of the reading — and for some children, the gap between the two is the finding.

And one evidence caution belongs in the trap section because vendors put it there: the published evidence base for Amira-class tools is heavily vendor-funded. Evidence for ESSA rates the flagship product "Moderate," not "Strong"; the "twice as effective as tutoring" line is marketing copy, not a study result. Cite ratings, not ratios.

## Case Study

Lena Fitzgerald's school ran the pilot as a fluency station, designed by the grade-level team.

**The tool.** The Amira-class ASR reading tutor — adopted with the vendor-funding caveat recorded in the pilot charter, and the evaluation designed so the school would generate its own evidence rather than borrow the vendor's. **The influence.** Repeated reading programs, d = 0.75, with Therrien's practiced-versus-transfer distinction written into the metrics from day one.

**The useful moment.** Each child read aloud to the tool three times a week, ten minutes a session — every minute of decoding the child's own. The tool caught the consolidation errors human scarcity used to miss: one boy had been misreading "what" as "want" for weeks; the system flagged it on day two. And the hours mattered as much as the errors: with drill supervision offloaded, Lena's actual human listening time — the scarcest resource in the room — was reallocated to her eight lowest readers and to weekly whole-class prosody modeling, the parts of the roster the team had marked human. Practice volume for the whole class went from "whenever an adult was free" to scheduled and certain.

**The dangerous moment.** Two gate-crossings surfaced mid-pilot. First, a well-intentioned aide began steering the most frustrated readers to the app's "listen along" mode — the TTS inversion, engagement up, decoding practice silently zeroed. The team caught it in the usage logs: the children logging the most minutes included two doing the least reading. Second, the dashboard's headline metric was rehearsed-passage growth, which flattered everyone; the team's own cold-read checks told a different story for three students whose curves were flat. One of them, a Vietnamese-American girl whose English was excellent but accented, turned out to be receiving steady false-error feedback — the system was marking correctly read words wrong. Her "errors" were the machine's.

**The decision.** Adopt for the fluency station, with conditions: (1) listen-along/TTS mode disabled inside the fluency block — access uses live elsewhere in the day, clearly labeled as access, not practice; (2) the deciding metric is cold-read fluency and comprehension on novel passages, checked every two weeks by humans, and reported beside (never inside) the platform's rehearsed-passage numbers; (3) every child keeps a weekly human-listening slot — the machine expands listening, it does not replace it; (4) any child whose error pattern looks anomalous moves to human-listening verification, with dialect and L2 mismatch named in the protocol as the first suspect; (5) renewal next spring depends on the school's own cold-read data, not the vendor's studies — which the charter notes are mostly vendor-funded, with an Evidence for ESSA rating of Moderate.

## The Phase Gate

**AI may** listen to every rehearsal, catch and log word-level errors, track accuracy, rate, and prosody proxies over time, serve passages calibrated to the phonics sequence, and tell the teacher whose growth curve has flattened.

**The learner must** do every minute of the actual reading aloud — the decoding is the intervention, and it cannot be delegated, accelerated, or simulated. **The teacher must** set the fluency criteria, model expressive reading, keep a standing rotation of human listening for every child, personally review flagged and anomalous cases, and own the decision of when a child's practice text steps up.

**Evidence that learning improved is** cold-read fluency and comprehension on *novel* passages, trending upward — Therrien's transfer measure, checked by humans on texts the platform never rehearsed with the child. Not rehearsed-passage gains, which partly measure rehearsal; and never minutes of use, which measure only the schedule.

## The Evidence Check

For any AI fluency product, demand:

1. **Cold-read growth.** Unrehearsed passages, read aloud to a human, scored for accuracy, rate, and expression — fall to spring. This is the transfer line, and it is the only line that counts as learning.
2. **Comprehension alongside fluency.** Automaticity is the on-ramp to meaning, not the destination; a check that the freed capacity is arriving at comprehension (retell quality, questions on the cold passage) keeps the program honest about its purpose.
3. **Recognition-accuracy audit.** Sample the platform's error flags against human judgment, deliberately including dialect and L2 speakers. A tool that cannot pass this audit is generating false data precisely for the children with the least margin.
4. **The decoding ledger.** Usage logs confirming the child, not the synthesized voice, is doing the reading in every minute counted as practice.

What does not count: minutes on platform, rehearsed-passage gains presented as growth, engagement streaks, or vendor-funded studies quoted without their funding line.

## Reader Exercises

1. **The reader audit.** Choose one practice-supervision tool or routine in your setting — a reading app, a math-facts app, instrument practice software. Write one sentence each: the mechanism (the learner's own repeated performance with feedback), the safe AI support, the forbidden substitution, and the proof that learning happened.
2. **Build the substitution ledger** for a different practice routine — say, multiplication-fact drills or beginning band practice. List every role in the routine (performer, error-catcher, model, motivator, material-supplier) and mark each: never substitutable / substitutable with caveats / freely substitutable. Notice how the ledger, not the brand of the tool, determines the verdict.
3. **Audit a reading app in twenty minutes.** Three questions on a real product: Who does the decoding in each mode (find the TTS switch and see where it defaults)? What does the dashboard headline — minutes, rehearsed gains, or cold-read growth? What happens to a non-mainstream voice (test it: read to the app in an accent, or have an L2 colleague try)? Write the three answers down and you have a procurement memo.

## What Would Change My Mind

Two findings would restructure this chapter. First, a credible independent evaluation showing that children receiving *only* machine listening — no human listening rotation at all — match the mixed-roster children on cold-read growth, comprehension, and reading motivation over a full year; that would demote the human-listening condition from gate requirement to preference. Second, and in the other direction, a well-designed audit showing that current commercial ASR misrecognition rates for dialect and L2 speakers are high enough to produce systematic placement errors at scale; that would push this chapter's conditional "yes" toward "not yet, for these populations" — and the fact that I cannot currently locate such an audit, in either direction, is itself the gap.

## Still Puzzling

- Repeated versus wide reading remains unsettled: if equivalent time on varied texts produces equivalent gains, the optimal AI fluency station might look quite different — more passage variety, less rerunning. The comparison literature deserves the trial the vendors haven't funded.
- LLM-enhanced versions of these tools now add comprehension questioning and adaptive passage generation on top of fluency scoring. That quietly moves them out of this row's no-conflict zone and into questioning and summarization territory (Chapters 26 and 28), where the gates are stricter. How should a school evaluate a single product that straddles three rows of the framework?
- What is the motivational half-life of reading aloud to a machine? Second graders find the headset novel in October. Nobody has published what April looks like.

## Further Reading

- **Therrien, W. J. (2004). Fluency and comprehension gains as a result of repeated reading: A meta-analysis. *Remedial and Special Education*, 25(4), 252–261.** The evidence anchor — and the practiced-versus-transfer distinction that should be written into every fluency product's evaluation plan.
- **National Reading Panel (2000). *Teaching Children to Read*, Fluency chapter.** The convergent finding on guided repeated oral reading, and the wider five-pillar frame that keeps fluency in proportion.
- **Evidence for ESSA (evidenceforessa.org), entry for Amira Learning.** Worth reading less for the rating ("Moderate") than as a model of the question to ask about any vendor study: who funded it, against what comparison, on which outcome?
- **Kraft, M. A. (2020). Interpreting effect sizes of education interventions. *Educational Researcher*, 49, 241–253.** The benchmark discipline for claims like "twice as effective as tutoring" — what the comparison would actually have to show.
- **The ASR-fairness literature on dialect bias in speech recognition.** Start with a recent review of speech-recognition error-rate disparities across dialects and language backgrounds; the transfer to children's reading assessment is direct, and this chapter's audit exercise is its classroom application. [verify — select and confirm a specific current review before print]
