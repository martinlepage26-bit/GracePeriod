# Grace Period — published page copy (as it reads on the live site)

Status: **live preview published**. Source of truth for wording is
`/home/team/shared/site/src/routes/index.tsx`. This file is a review copy for the
lead / researcher / owner's lawyer and rules reviewer only — it is not ratified.

Published URL: https://d81cf691d9a594585091cb3cb25972c7.cto.site/

---

## Header
- Wordmark: **Grace Period**
- Right: "Pilot program page · Utilities"

## Hero
- Badge: **PRE-LAUNCH — THE PILOT HAS NOT STARTED**
- H1: **A pooled utility-bill fund for one city.**
- Lede: "Donors give to a program, never to a named person. The fund pays the
  utility directly, for a household's shutoff notice that has been verified
  against published rules before its cutoff date."
- Supporting: "One city, one program (Utilities), one referral partner, a 90-day
  pilot. The partner charity is the fiscal host: it issues the receipts, owns the
  donation page and makes the utility payment. This page publishes the rules we
  will run under."
- In-page nav: How it works · Published rules · Cover · Pilot dashboard · Privacy

## How it works (six steps)
1. **A donor gives to Utilities — once, or monthly.** The gift carries the program
   and the city only. It is never attached to a named household, and no donor
   chooses who is helped.
2. **A shutoff notice is submitted.** A referral partner, or the household itself,
   submits the shutoff notice, the amount owed, the cutoff date, the account holder
   name, the household size and an income attestation.
3. **A caseworker checks it against the published rules.** Within one business day
   the caseworker records one of three outcomes: approved, declined with a reason
   code, or more information requested.
4. **Approved notices join a queue.** The queue is ordered by cutoff date first,
   then by amount. The next notice is paid when the pool covers it.
5. **The partner charity pays the utility directly.** The charity logs the payment
   reference. The uploaded notice is then deleted; only the verified fields and the
   payment reference remain.
6. **The household is told, and may leave a note.** The household gets a
   confirmation. It can also leave an optional one-line note for donors.

## Published rules (Version 0)
Intro: "A shutoff notice is approved only if all five of these are true. The rules
are published before the pilot starts so that donors and households can hold the
program to them."
1. The notice is dated, names the account holder, and states the amount owed and
   the cutoff date.
2. The cutoff date is between 2 and 30 days out.
3. The amount is at or below the grant cap.
4. Household income is at or below the threshold the partner already uses.
5. One grant per household per 12 months.

- **Grant cap** — "Set with the partner charity before launch — to be published here."
- **Income threshold** — "Set with the partner charity before launch — to be published here."

**Decline reason codes:** missing document · past cutoff · over cap · over income ·
repeat within 12 months

**Appeal:** "A declined household can ask for a second reviewer within 48 hours.
Appeal outcomes are counted and published."

## Cover
- "Give to Utilities. Your gift joins the pool that pays verified shutoff notices
  in the pilot city. It is never attached to a named household."
- Gift type toggle: One-time / Monthly — visual only, with the line "This toggle is
  a preview of the choice only. It does not submit anything and takes no payment."
- Primary button: **Cover (not available yet)** — `aria-disabled="true"`, no link,
  no handler.
- Under it: "Donations open when the partner charity and the published rules are
  confirmed."

## Intake
- H2: "Need help with a shutoff notice?"
- "Households do not apply on this page. At launch, notices are submitted through
  the referral partner, so that a caseworker can check them against the published
  rules."
- Inactive control: **Submit a shutoff notice** (aria-disabled, no form)
- "Intake opens at pilot launch, through our referral partner."

## Pilot dashboard — updated weekly
- "The pilot has not started, so there are no figures yet."
- "Once the pilot runs, these are the measures published here each week:"
  Notices open · Days to nearest cutoff · Total owed · Share paid before cutoff ·
  Median hours from submission to payment · Notices expired unfunded ·
  Declined, by reason · Appeals and reversals · Cost per case
- "Every published figure is an aggregate with a minimum of five cases per figure.
  Nothing smaller is published, so that no single household can be identified from
  the numbers."

## Privacy
- **What is collected** — the shutoff notice file; amount owed; cutoff date; account
  holder name; household size; income attestation; one contact method; optional
  one-line note for donors.
- **What is deleted, and when** — notice file deleted at verification; contact
  method deleted 90 days after payment.
- **What is published** — aggregates only, minimum five cases per figure.
- **What is never public** — names, addresses, and donor notes tied to amounts.

## Footer
- "Pilot not yet launched — day-1 legal and rules checks in progress."
- Location: **Pilot city: to be confirmed**
- Program: Utilities — one city, 90-day pilot
- Fiscal host: "Partner charity — to be confirmed. It issues receipts and makes the
  utility payment."
- Contact: "To be confirmed — a program contact will be published here before launch."
- "This page publishes the program rules and status only. It takes no donations,
  collects no information, and runs no analytics."

---

## Placeholders on the page (nothing invented)
| Where | Wording |
|---|---|
| Grant cap | Set with the partner charity before launch — to be published here. |
| Income threshold | Set with the partner charity before launch — to be published here. |
| City (footer) | Pilot city: to be confirmed |
| Fiscal host / partner charity | Partner charity — to be confirmed |
| Contact | To be confirmed — a program contact will be published here before launch. |
| All dashboard figures | "The pilot has not started, so there are no figures yet." |

## Not on the page, deliberately
- No live checkout, no donation amount picker, no form, no email capture, no accounts,
  no database, no analytics, no third-party scripts or fonts.
- No household data, real or illustrative; no sample or preview figures; no charts.
- No urgency, countdown, deadline or scarcity language anywhere.
