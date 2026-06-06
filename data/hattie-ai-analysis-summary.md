# Visible Learning x AI Analysis Summary

- Source rows: 252
- Data correction: `substitution_risk=Moderate` was normalized to `Medium`.
- Categorical profiles after normalization: 78
- Profile grouping dimensions: band, ai_feasibility, human_irreducibility, substitution_risk, mechanism_conflict, vendor_activity

## AI feasibility

| Category | n | % |
|---|---:|---:|
| AI-RESISTANT | 38 | 15.1% |
| AI-AUGMENTED | 88 | 34.9% |
| AI-ADJACENT | 97 | 38.5% |
| AI-NATIVE | 29 | 11.5% |

## Human irreducibility

| Category | n | % |
|---|---:|---:|
| High | 57 | 22.6% |
| Medium | 78 | 31.0% |
| Low | 117 | 46.4% |

## Substitution risk

| Category | n | % |
|---|---:|---:|
| High | 53 | 21.0% |
| Low | 170 | 67.5% |
| Medium | 29 | 11.5% |

## Mechanism conflict

| Category | n | % |
|---|---:|---:|
| No conflict | 169 | 67.1% |
| Partial conflict | 48 | 19.0% |
| Conflict present | 35 | 13.9% |

## Vendor activity

| Category | n | % |
|---|---:|---:|
| Low | 229 | 90.9% |
| High | 12 | 4.8% |
| Moderate | 11 | 4.4% |

## Effect-size band

| Category | n | % |
|---|---:|---:|
| High | 32 | 12.7% |
| Above hinge | 90 | 35.7% |
| Below hinge | 81 | 32.1% |
| Negligible | 32 | 12.7% |
| Harmful | 17 | 6.7% |

## At or above hinge point (d >= 0.40)

- Count: 122
- ai_feasibility: AI-RESISTANT=18, AI-AUGMENTED=81, AI-ADJACENT=9, AI-NATIVE=14
- mechanism_conflict: No conflict=63, Partial conflict=38, Conflict present=21
- human_irreducibility: High=27, Medium=72, Low=23
- substitution_risk: High=36, Low=68, Medium=18
- vendor_activity: Low=100, High=11, Moderate=11

## High effect-size band

- Count: 32
- ai_feasibility: AI-RESISTANT=3, AI-AUGMENTED=24, AI-ADJACENT=1, AI-NATIVE=4
- mechanism_conflict: No conflict=17, Partial conflict=11, Conflict present=4
- human_irreducibility: High=8, Medium=19, Low=5
- substitution_risk: High=8, Low=17, Medium=7
- vendor_activity: Low=23, High=6, Moderate=3

## Largest Normalized Categorical Profiles

| Profile | n | Mean d | Signature |
|---|---:|---:|---|
| P01 | 38 | 0.27 | Below hinge / AI-ADJACENT / Low / Low / No conflict / Low |
| P02 | 22 | 0.08 | Negligible / AI-ADJACENT / Low / Low / No conflict / Low |
| P03 | 21 | 0.50 | Above hinge / AI-AUGMENTED / Medium / Low / No conflict / Low |
| P04 | 11 | 0.50 | Above hinge / AI-AUGMENTED / Medium / Low / Partial conflict / Low |
| P05 | 9 | 0.25 | Below hinge / AI-NATIVE / Low / High / No conflict / Low |
| P06 | 6 | 0.89 | High / AI-AUGMENTED / Medium / Low / Partial conflict / Low |
| P07 | 6 | 0.52 | Above hinge / AI-ADJACENT / Low / Low / No conflict / Low |
| P08 | 6 | -0.21 | Harmful / AI-ADJACENT / Low / Low / No conflict / Low |
| P09 | 5 | 0.54 | Above hinge / AI-RESISTANT / High / High / Conflict present / Low |
| P10 | 5 | 0.48 | Above hinge / AI-AUGMENTED / Medium / Medium / No conflict / Low |

## High Vendor-Activity Influences

| Rank | Influence | d | Band | AI feasibility | Human irreducibility | Substitution risk | Mechanism conflict |
|---:|---|---:|---|---|---|---|---|
| 5 | Response to intervention | 1.29 | High | AI-AUGMENTED | Medium | Medium | No conflict |
| 10 | Strategy to integrate with prior knowledge | 0.93 | High | AI-AUGMENTED | Medium | Low | Partial conflict |
| 13 | Micro-teaching/video review of lessons | 0.88 | High | AI-AUGMENTED | Medium | Medium | No conflict |
| 16 | Scaffolding | 0.82 | High | AI-AUGMENTED | Medium | Medium | Partial conflict |
| 22 | Planning and prediction | 0.76 | High | AI-AUGMENTED | Medium | Low | Partial conflict |
| 32 | Feedback | 0.70 | High | AI-AUGMENTED | Medium | High | Partial conflict |
| 46 | Meta-cognitive strategies | 0.60 | Above hinge | AI-AUGMENTED | Medium | Low | Partial conflict |
| 57 | Mastery learning | 0.57 | Above hinge | AI-AUGMENTED | Medium | High | Partial conflict |
| 89 | Intelligent tutoring systems | 0.48 | Above hinge | AI-NATIVE | Low | High | Partial conflict |
| 97 | Writing programs | 0.45 | Above hinge | AI-AUGMENTED | Medium | High | Partial conflict |
| 114 | Technology in writing | 0.42 | Above hinge | AI-NATIVE | Low | High | Conflict present |
| 159 | Homework | 0.29 | Below hinge | AI-RESISTANT | High | High | Conflict present |
