# Grace Period — pilot operating kit

**Version 0.1 — working draft for partner review.** Not ratified. Not legal advice. Not the
agreement with the charity (that is §6, a term sheet only).

**Who this is for:** the volunteer caseworker who runs the queue, and the partner charity that
holds the fund, issues the receipts and pays the utility. If either of you has to ask us a
question to get through a case, this document has failed — tell us where.

**What it covers:** the 90-day pilot. One city, Utilities only, one referral partner. Everything
runs on off-the-shelf parts: a hosted intake form on the referral partner's side, one locked
spreadsheet, the charity's existing payables process, an email digest for donor notes. There is no
software to install and no account to create.

**What it does not do:** it sets no money figure, no income figure and no city. Every such number
is a parameter below, to be filled in with the partner before day 1. It does not decide anything
only a lawyer can decide; those items are marked **[COUNSEL]**.

**Built from:** the published rules v0 as they now read on the page
(`/home/team/shared/page-copy.md`), the receipt constraint in
`/home/team/shared/research/day1-gate-research.md` §1.7, and the platform constraints in
`/home/team/shared/research/name-and-platform-clearance.md` Part A.

**Files that go with this kit:**

- `/home/team/shared/ops/decision-log.csv` — one row per decision. §3.
- `/home/team/shared/ops/queue.csv` — one row per approved case. §4.
- Both ship with a header row and two rows marked `FAKE ROW FOR SHAPE ONLY`. Delete those two
  rows before the pilot starts. The two files join on `case_id`.

---

## Parameters to fill in before day 1

Nothing in this kit invents a number. These are the blanks. Every one of them is either set with
the partner or it is not set at all — there is no default.

| Parameter | What it is | Who sets it | Used in |
|---|---|---|---|
| `<CITY>` | the pilot city | owner | §3.1, §5.0, §6 |
| `<PARTNER CHARITY>` | the fiscal host | owner | throughout |
| `<PILOT START DATE>` / `<PILOT END DATE>` | the 90 days | partner + us | §2.1, §5 |
| `<GRANT_CAP>` | the most one notice may owe and still be approved | partner | §2.4, §6 |
| `<INCOME_THRESHOLD>` | the income line, stated as the partner's existing threshold | partner | §2.4, §6 |
| `<HOLIDAY CALENDAR>` | the days that are not business days | partner | §2.1 |
| `<MIR RESPONSE DEADLINE>` | how long a household has to answer an information request | partner | §2.6 |
| `<SECOND REVIEWER>` | the named person who hears appeals | partner | §2.8, §6 |
| `<CASEWORKER(S)>` | the named volunteer(s) | partner + us | §2, §3 |
| `<PAYMENT AUTHORISER>` / `<SECOND SIGNATURE THRESHOLD>` | who authorises a utility payment, and above what amount a second signature is needed | partner | §4, §6 |
| `<REVIEWER TURNAROUND>` | how long the second reviewer has to decide an appeal (the household's window to *ask* is 48 hours and is already published; the reviewer's is not) | partner | §2.8 |

---

# 1. INTAKE FORM SPEC

## 1.1 Where the form sits

The form lives on **the referral partner's side**. It is not on the public page and it is not
reachable from the public page.

- Hosted on the partner's own account with the form tool it already uses, so the responses sit
  with the party that is already handling the household's information.
- **Not indexed, no public link, no "responses" page.** Turn off any setting that publishes
  responses, shows a summary, or lets a respondent see other responses.
- The link is given to the referral partner's staff and to `<CASEWORKER(S)>` only. It is never
  posted, never emailed to a household, and never printed on the public page.
- The public page keeps its "Submit a shutoff notice" control inactive, as it is today. The page
  says "Intake opens at pilot launch, through our referral partner" and that stays true.
- Notifications go to `<CASEWORKER(S)>` only — one shared inbox, not individual staff mailboxes.
- No third-party analytics, no tracking pixels, no embedded fonts on the form page.

Why the partner's side and not ours: the household is already the partner's client, the partner
already holds their information, and putting the form on our side would create a second copy of a
household's crisis in a system nobody at the charity controls.

## 1.2 The eight fields

Exactly eight. Nothing else on the form.

| # | Field name (and CSV column) | Type | Mandatory | Help text, verbatim | Validation rule |
|---|---|---|---|---|---|
| 1 | `notice_file` | File upload, one file | **Yes** | "Upload a photo or PDF of your shutoff notice. It must show the date, the account holder's name, the amount owed and the cutoff date." | Exactly one file. PDF, JPG or PNG only. Size limit = the form tool's own default; do not raise it. Must accept a phone photo. A second upload field is not added. |
| 2 | `amount_owed` | Number, currency | **Yes** | "How much does the notice say you owe? Copy the amount exactly as it appears on the notice." | Greater than zero. At most two decimal places. Digits only — no currency symbol, no words. Not range-checked against `<GRANT_CAP>` on the form: the cap is a published rule and is applied at review, not hidden inside the form. |
| 3 | `cutoff_date` | Date picker | **Yes** | "What is the last date on the notice before the utility can shut off the service? Copy it from the notice." | A real calendar date, chosen from the picker, not typed. The form may refuse dates before today as a courtesy; that is not the rule check — the 2-to-30-day rule is applied at review (§2.3). |
| 4 | `account_holder_name` | Short text | **Yes** | "Whose name is on the utility account? Copy it exactly as it appears on the notice." | Not empty. Free text, no format check. This is the only name the program collects, and it is the only name that reaches the spreadsheet. |
| 5 | `household_size` | Number, whole | **Yes** | "How many people live in the household right now?" | Whole number, 1 or more. Digits only. No ages, no names, no relationships, no "who". |
| 6 | `income_attestation` | Single checkbox | **Yes** | "I confirm that this household's income is at or below the income limit for this program." | Must be checked to submit. The statement is displayed in full above the checkbox. No income figure is collected, and no proof is uploaded. |
| 7 | `contact_method` | Short text + a 3-option channel select (Email / Phone / Text) | **Yes** | "How should we reach you about this notice? We will use it only about this notice." | Exactly one channel. Email must contain an "@"; phone and text accept digits with spaces, dashes and a leading "+". The tool's built-in email/phone validation is used; nothing stricter is invented. |
| 8 | `referral_source` | Dropdown, fixed | **Yes** | not shown to the household | On the partner's form this is pre-set to `<PARTNER CHARITY>` and hidden. It exists so the log can be reconciled back to a referrer. There is one referral partner in the pilot, so it has one value. |

**Not a field: the optional donor note.** The one-line note for donors in the page's privacy block
is **not** on this form. It is offered after payment, once, opt-in, through the confirmation
message in §1.5. Putting it on the intake form would turn a crisis application into a pitch, and
it would put a donor-facing story into the same record as the household's name and amount.

## 1.3 What the form must NOT ask

The form must not contain a field, a free-text box, an optional question, a "anything else you'd
like us to know", or a file upload for any of the following:

- **Anything about other household members** — no names, ages, dates of birth, relationships,
  schools, custody, or "number of children". `household_size` is a count and nothing more.
- **Immigration status** — not asked, not inferred, not recorded. No field for citizenship,
  residency, a status document, or a national ID number.
- **Health** — no medical condition, disability, diagnosis, medication, hospital, or carer
  question. A shutoff notice does not need one and the program cannot use one.
- **A donor-facing story** — no "tell donors your story", no photo of the household, no quote, no
  testimonial, no consent-to-publish on the intake form.
- **Anything that identifies a person to a donor** — no address, no phone of a third party, no
  employer, no case reference from another agency.
- **Income documents** — no payslips, no benefit letters, no bank statements, no tax return. The
  published rule says "income attestation" and the form collects an attestation.
- **Financial identifiers** — no bank account, no card, no credit score, no Social Security or
  Social Insurance number.

If the referral partner's own intake form already asks some of this, that is its form and its
business — but **the copy that reaches the Grace Period queue must be the eight fields only.**
The partner should map its own intake onto these eight fields rather than forwarding its full
intake record.

## 1.4 The consent and privacy line, before submit

This text sits directly above the submit button, in the same size as the rest of the form, not in
a collapsed "terms" link. The submit button is labelled "Submit the notice".

> **Before you submit**
>
> We will collect only what is on this form: your shutoff notice, the amount owed, the cutoff
> date, the account holder's name, your household size, your income confirmation, and one way to
> contact you.
>
> Your notice is deleted as soon as a caseworker has checked it. Your contact details are deleted
> 90 days after the utility is paid. Your name, your address and anything you write to us are
> never published.
>
> What is published is totals only, and only where at least five cases are behind a number, so
> that nobody can be identified from the figures.
>
> By submitting you confirm the information is accurate and you agree to it being used this way.

That wording is deliberately the same set of facts as the page's privacy block: what is collected,
notice deleted at verification, contact deleted 90 days after payment, aggregates only, minimum
five cases, names and addresses never public. If one of them changes, both change — the form and
the page must not drift apart.

Note the one gap this text does not cover, because v0 does not: a household that is **declined**
never reaches "90 days after payment", so that clock never starts. The working rule is in §7.4 and
it needs the partner's sign-off (Q9).

## 1.5 The confirmation screen

One screen, no figures, no donation ask, no request for a story:

> "Thank you — your notice has been received. A caseworker will look at it within one business day
> and will contact you using the method you gave us. If we need anything else from you, we will
> ask for it once, with a deadline.
>
> This page is only a receipt of your submission. It does not say whether you will be approved."

The confirmation must not say "you may be eligible", must not show the pool balance, and must not
carry a link to the donation page. A household applying for help is not a donor prospect.

---

# 2. DECISION CHECKLIST

A volunteer applies this to every notice, in this order, within one business day. Five tests, in
the order they are published, because the order decides which reason code attaches.

## 2.1 The one-business-day clock

- **Starts** at `received_at` — the timestamp the form records when the household or the referral
  partner submits.
- **Ends** at the same clock time on the next business day. Business days are Monday to Friday
  excluding `<HOLIDAY CALENDAR>`.
- A notice that arrives on a Friday afternoon is decided by the same time on Monday.
- The decision is only "recorded" when the row is in the spreadsheet (§3). A decision held in
  someone's head or in an email is not recorded and does not count.
- If `<CASEWORKER(S)>` is away, a named deputy decides. The clock does not pause for a holiday
  unless the day is on `<HOLIDAY CALENDAR>`.

## 2.2 Step 1 — rule 1: is the notice complete and legible?

Open the file. All four of these must be visible and readable:

1. a date on the notice,
2. the account holder's name,
3. the amount owed,
4. the cutoff date.

| Result | What you do |
|---|---|
| All four are there and legible, and the name matches `account_holder_name` | Go to step 2 |
| Anything is missing, cropped, blurred, or is a different document (a bill, a reminder, a final bill after disconnection) | **Decline — `missing document`** |
| It is a notice but the amount or cutoff on the form disagrees with the notice | Go to §2.6 (more information requested) — do not guess which is right |

## 2.3 Step 2 — rule 2: is the cutoff date 2 to 30 days out?

Count whole days from the **date you are reviewing** to `cutoff_date`. Call that `d`.

| `d` | Rule 2 | What you do |
|---|---|---|
| 2 to 30 | **passes** | Go to step 3 |
| 0 or negative (cutoff today, or already passed) | **fails** | **Decline — `past cutoff`** |
| 1 | fails the published floor, and **v0 publishes no code for it** | Do not decline. §2.6, and tell the partner the same business day. See Q1. |
| 31 or more | fails the published ceiling, and **v0 publishes no code for it** | Do not decline. §2.6, with the deadline set to the date the notice enters the window. See Q1. |

**This is the most important ambiguity in v0** and it is not ours to invent past. The published
rules say a cutoff must be between 2 and 30 days out, and the published code list has one code —
`past cutoff` — which describes only the late side. A notice that arrives with a cutoff tomorrow
is the most urgent case the program will ever see, and declining it for being early would be
absurd. A notice 45 days out is simply not yet due. So until the partner rules (Q1), **neither is
declined**, and neither is approved.

## 2.4 Steps 3 to 5 — the money tests

| Step | Rule | The yes/no question you answer | If NO |
|---|---|---|---|
| 3 | Rule 3: at or below the cap | Is `amount_owed` at or below `<GRANT_CAP>`? | **Decline — `over cap`** |
| 4 | Rule 4: income | Has the household confirmed income at or below `<INCOME_THRESHOLD>` — and does the referral partner's own screening, if it did one, agree? | **Decline — `over income`** |
| 5 | Rule 5: one grant per household per 12 months | Has this household been **paid** a grant in the last 12 months? Search the log for the same `account_holder_key` with a paid case in `queue.csv` inside 12 months of today. | **Decline — `repeat within 12 months`** |

Three things about these three steps that a volunteer will otherwise get wrong:

- **The cap is per notice, and v0 does not allow part-payment.** If a notice is above the cap it is
  declined; the fund does not pay the cap and leave the rest owed. Part-payment is not in the
  published rules, so it cannot be offered (Q3).
- **Rule 4 is an attestation, not an audit.** The form collects a confirmation, not proof. The
  caseworker's job is to check that the confirmation is present and that nothing in the referral
  contradicts it — not to demand documents the form deliberately does not collect. Whether
  attestation alone satisfies the rule is the partner's call, because the threshold is "the
  threshold the partner already uses" (Q4).
- **Rule 5 counts payments, not decisions.** A declined case is not a grant. A case that was
  approved and then **expired unfunded** is not a grant either — no money moved. Only a case that
  reaches `paid` in `queue.csv` consumes the 12-month limit.

## 2.5 One code per decline

If more than one test fails, **the code is the first failed test in published order** — steps 1 to
5 above. One row, one code. Do not list several codes in one cell, and do not choose the code that
"feels" most important. The order is what makes the published "declined, by reason" figure mean
something stable.

The five codes are a closed list. Nothing else may go in `reason_code`:

`missing document` · `past cutoff` · `over cap` · `over income` · `repeat within 12 months`

## 2.6 "More information requested" — what it means

It is a **recorded outcome**, not a delay. It means: a decision has been made within one business
day, and the decision is "this cannot be decided yet, and here is exactly what would decide it".

**What the caseworker may ask for.** One of these four, named in `info_requested`. Nothing else:

1. a legible or complete copy of the notice showing all four required items;
2. confirmation of the amount owed or the cutoff date, where the form and the notice disagree;
3. a contact method that actually works, where the one given fails;
4. **nothing from the household** — the case is waiting on the partner, not on the household. This
   is the outcome for the two cutoff-window cases in §2.3, and it is the only case in which
   `info_requested` says "partner decision required".

**The deadline.** `info_deadline` is the **earlier** of:

- `<MIR RESPONSE DEADLINE>`, and
- **one business day before `cutoff_date`** — because an answer that arrives after the cutoff is
  useless, and the household must not be asked for something there is no longer time to use.

For the "cutoff 31+ days out" case the deadline is the date the notice enters the window
(`cutoff_date` minus 30 days). Nothing is asked of the household; the caseworker re-reviews it on
that date as a new attempt.

**How the request is sent.** Once, through the contact method the household gave, in plain
language, with the deadline written out as a date. The caseworker does not chase it, does not
phone twice, and does not ask for two different things in two messages.

**If it never arrives.** On the first business day after `info_deadline`, close the case:

| What was missing | Code on closure |
|---|---|
| The notice, or one of its four required items | `missing document` |
| A corrected amount or cutoff, where the correction was needed to settle rule 3 | `over cap` if the corrected figure is over the cap; otherwise `missing document` |
| A corrected cutoff, where the correction was needed to settle rule 2 | `past cutoff` if the cutoff has passed by the closure date; otherwise `missing document` |
| A working contact method | `missing document` |
| Nothing (partner decision) | the code the partner names, written into `notes` |

The case is closed as a **new attempt row** (`attempt` + 1) with its own `decided_by` and
`decided_at`. The information-request row is never edited.

An open information request **holds no queue slot** and is **not counted as an open notice** in
the dashboard.

## 2.7 Recording the decision

Every decision is one row in `decision-log.csv` (§3), written the same day it is made. If you have
not written the row, you have not decided the case.

## 2.8 Appeals — the second reviewer

- A declined household may ask for a second reviewer **within 48 hours** (published). The 48 hours
  is measured from **when the decline was sent to the household**, not from when it was decided —
  because that is the only clock the household can see. See Q10.
- The request comes through the referral partner or the contact method on the form. The caseworker
  does not argue it, does not re-decide it, and does not discourage it. It goes to
  `<SECOND REVIEWER>` untouched.
- `<SECOND REVIEWER>` is a **different named person from `<CASEWORKER(S)>`**, decides within
  `<REVIEWER TURNAROUND>`, and can reverse or uphold. Their outcome goes in the appeal columns of
  the **same row** — the first decision is never overwritten (§3.4).
- A reversal puts the case in the queue with `entered_queue_at` = the time of the reversal, and it
  is ordered by its cutoff date like every other case. A reversal does not jump the queue.
- If the cutoff has already passed by the time the appeal is decided, the reversal is recorded but
  the case cannot be paid — it is recorded as `expired_unfunded` with reason
  `reversed after cutoff`, and it still counts in the published expired figure.
- A request made after 48 hours: `<SECOND REVIEWER>` decides whether to hear it and records
  `appeal_heard` = yes or no. A request that is not heard is recorded and counted in no published
  figure.

## 2.9 What the caseworker must never do

- Never tell a household they are approved, or that money is "reserved", before the decision row
  exists. Never promise a date.
- Never name a donor, a donation, or an amount raised to a household. There is no link between a
  gift and a case, and saying otherwise would be untrue.
- Never contact the utility. The charity pays the utility; the caseworker has no standing with it
  (§6, item 12).
- Never tell a household that being declined was because of the fund's balance. A decline has one
  of five reasons and the balance is not one of them.
- Never keep a copy of a notice file anywhere — not in email, not on a phone, not in a downloads
  folder — after the decision row is written.
- Never ask a household for a story, a photo, or permission to publish anything.

---

# 3. DECISION LOG

`decision-log.csv` holds **one row per decision**. It is the record the published decline and
appeal figures are counted from, and the only place a decision exists.

## 3.1 The columns

| Column | Holds | Written |
|---|---|---|
| `case_id` | assigned once at first contact, never reused, never changed. Format `<YY>-<sequence>` (the example rows use `EXAMPLE-` ids so they cannot be mistaken for real cases) | locked |
| `attempt` | 1 for the first decision on a case, 2 for the next, and so on | locked |
| `received_at` | the form's submission timestamp for that attempt, ISO 8601 with offset, local time of `<CITY>` | locked |
| `referral_source` | `<PARTNER CHARITY>` | locked |
| `account_holder_key` | the household key: the account holder name, lower-cased, trimmed, punctuation and accents normalised. Used only for the 12-month repeat check | locked |
| `household_size` | the number on the form, as an integer | locked |
| `income_attested` | `yes` or `no` — whether the income confirmation was given | locked |
| `amount_owed` | the amount as **verified against the notice**, two decimals, no currency symbol | locked |
| `cutoff_date` | the cutoff as **verified against the notice**, `YYYY-MM-DD` | locked |
| `decision` | exactly one of `approved`, `declined`, `more information requested` | locked |
| `reason_code` | one of the five published codes, or blank for anything that is not a decline | locked |
| `decided_by` | the full name of the caseworker who decided, and their role | locked |
| `decided_at` | ISO 8601 timestamp of the decision | locked |
| `info_requested` | for a `more information requested` row: which of the four requests in §2.6, in one short sentence | appended once |
| `info_deadline` | the date the answer is due (§2.6) | appended once |
| `notice_deleted_at` | when the notice file was deleted. A timestamp only — the file is never in the log | appended once |
| `appeal_requested_at` | when the household asked for a second reviewer | appended once, by the second reviewer |
| `appeal_heard` | `yes` / `no` — whether a late request was heard | appended once, by the second reviewer |
| `appeal_reviewer` | the full name of `<SECOND REVIEWER>` | appended once, by the second reviewer |
| `appeal_outcome` | `upheld` / `reversed - approved` | appended once, by the second reviewer |
| `appeal_decided_at` | ISO 8601 timestamp | appended once, by the second reviewer |
| `contact_deleted_at` | when the contact method was deleted (§7) | appended once |
| `notes` | dated one-line facts only. No names, no addresses, no circumstances, no opinions | appended, never deleted |

## 3.2 Locked vs appended

- **Locked** = written once, when the row is created, and never edited. If a locked value is
  wrong, the row is **not** corrected: a new row is appended with `attempt` + 1 carrying the
  right value, and the original stays as the record of what was decided at the time.
- **Appended** = empty at creation, written once later, and never rewritten. A correction is a
  new dated sentence in `notes`, not a replacement of the earlier one.
- The spreadsheet has **sheet protection on** and `<CASEWORKER(S)>` holds the only edit password.
  A dated snapshot of the whole sheet is filed at every weekly cut (§5.11), so any edit that
  slipped through would be visible against the previous week's copy.
- **Rows are never deleted, and never reordered.** Not a decline, not an expiry, not a mistake.

## 3.3 How the decision, code, caseworker and timestamp are recorded

1. Write the row when the decision is made — same business day (§2.1).
2. `decision` and `reason_code` must be consistent: `declined` needs one of the five codes;
   `approved` and `more information requested` need a blank `reason_code`.
3. `decided_by` is a person's name, not initials and not a role alone. If the lead caseworker
   decides on someone else's behalf, the person who actually decided is named.
4. `decided_at` is the time the row is written, not the time the review started.
5. For an `approved` row, add the case to `queue.csv` in the same sitting (§4).
6. For a `declined` row, the decline message to the household goes out the same business day and
   names the code in plain words — "your notice was past its cutoff date", not `past cutoff`.

## 3.4 The appeal, without overwriting the first decision

The appeal lives in the **appeal columns of the original row**. Nothing in the original decision
is touched.

- `<SECOND REVIEWER>` opens the same row and fills `appeal_requested_at`, `appeal_heard`,
  `appeal_reviewer`, `appeal_outcome`, `appeal_decided_at`.
- They do **not** change `decision`, `reason_code`, `decided_by` or `decided_at`. Those stay as the
  first decision, which is what the published "declined, by reason" figure counts.
- They may append one dated sentence to `notes`, prefixed `APPEAL:`.
- If the outcome is a reversal, the queue row is created from the **appeal outcome**, not by
  editing the decision row. `queue.csv` gets the case with `entered_queue_at` = the reversal time.
- Consequence, stated plainly so nobody is surprised by it: **a reversed decline still appears in
  "declined, by reason" for the week it was declined.** That is deliberate. The decline happened;
  the appeal is published separately (§5.8). It also means approved-plus-declined can exceed the
  number of cases for a week with reversals, which is why "notices open" is not built by
  subtraction.
- If a case was declined, appealed and reversed, and then its cutoff passed unfunded, it appears in
  the decline figure **and** in the expired figure. Both are true.

## 3.5 What is deliberately not stored

- **The notice file.** Deleted at verification (§7). Only `notice_deleted_at` remains. The
  spreadsheet never contains a link, a path or an attachment to it.
- **The household's address.** Never collected, so never stored. If an address appears on a notice,
  it dies with the notice.
- **The utility account number**, unless the charity's own payables record carries it (Q2). If the
  repeat check needs it, it has to be recorded deliberately, and that decision belongs to the
  partner.
- **Donor notes.** They arrive by email digest and stay in that mailbox. They are never copied
  into either CSV, and they are never joined to a case.
- **Anything about a person's circumstances** — no narrative, no diagnosis, no history, no reason
  for the debt.
- **The information request itself as free text.** `info_requested` records *which* of the four
  requests was made, not a transcript of the conversation.

---

# 4. QUEUE RULES

`queue.csv` holds **one row per approved case**. It is where money is tracked. It is not where
decisions live — a case reaches it only after an `approved` row (or a reversal) exists in the log.

## 4.1 The columns

| Column | Holds | Written |
|---|---|---|
| `case_id` | matches the log | locked at entry |
| `entered_queue_at` | when the case joined the queue (the approval, or the reversal) | locked |
| `cutoff_date` | copied from the verified log row | locked |
| `amount_owed` | copied from the verified log row | locked |
| `state` | `queued` · `funded_pending_payment` · `paid` · `expired_unfunded` · `withdrawn` | changes, with a timestamp for each change |
| `funded_at` | when the pool covered the amount (the reservation) | once |
| `paid_at` | when the charity's payables record shows the payment **settled** — not scheduled | once |
| `payment_reference` | the reference the charity's payables system issues | once |
| `expired_at` | when the operator observed the cutoff had passed unpaid | once |
| `expiry_reason` | `pool empty at cutoff` · `funded but not paid by cutoff` · `payment refused by utility` · `reversed after cutoff` | once |
| `notes` | dated one-line facts | appended |

`withdrawn` exists for one situation: the household tells the referral partner the bill was paid
or the notice was cancelled. The caseworker sets `state = withdrawn` and says so in `notes`. A
withdrawn case is in no published figure (it is not a payment, not an expiry, and not a grant),
and it is visible to the partner in the file. See Q6.

## 4.2 The ordering rule

**Sort by `cutoff_date` ascending, then by `amount_owed` ascending.** That is the published rule
and it is the whole rule.

Two cases can tie on both. For the order to be reproducible — so that two people reading the sheet
see the same next case — a documented tiebreak is applied after the two published keys:
`entered_queue_at` ascending, then `case_id` ascending. This changes nothing about who is paid
before whom except where the published keys are identical. Confirm it with the partner (Q7).

The queue is **not** re-sorted by anything else, ever. Not by household size, not by who referred
it, not by how long it has waited, not by whether it is a second attempt.

## 4.3 What "the pool covers it" means

The fund total on the charity's donation platform is not the available balance: it lags the
payables process and it includes money already committed to cases that are approved but not yet
paid. So the operator works from a **committed balance**:

> available = (Utilities fund total, from the charity's funds export at the last reconciliation)
> − (sum of `amount_owed` for every case in `funded_pending_payment`)
> − (sum of `amount_owed` for every case marked `paid` whose payment is not yet reflected in that
> export)
> − (any processing fee the charity expects to be deducted before the money lands)

The third and fourth lines are why the weekly reconciliation with the charity exists (§6, item 7).
Until the reconciliation for a week is signed off, the operator does not fund a new case against
that week's export.

A case is funded when `state` moves to `funded_pending_payment` and `funded_at` is stamped. That
is the reservation. It is the only thing that stops the next case being funded against the same
money.

## 4.4 When the pool cannot cover the next notice in line

**Stop.** The queue is paid strictly from the top. If the next case in order cannot be covered:

- **Nothing behind it is paid**, even if the pool would cover a smaller notice further down.
  Skipping is not in the published rules, and skipping to whatever happens to fit the balance
  turns the fund's order into case-picking — which is the thing the design exists to prevent, and
  which is the same instinct the receipt rule forbids us to encourage in a donor (§1.7a of the gate
  research: no donor indicates a gift is for a specific person, and no one here picks either).
- Tell the partner the same day: the shortfall **as a total**, the number of cases waiting, and
  the days to the nearest cutoff. Never a case, never a name, never a household's circumstances.
- The partner decides whether to add money to the fund. That is the charity's discretion, not ours
  (§6, item 10). We do not approach a donor about a specific case, ever, and the page does not say
  "urgent" or "only N left".
- The queue stays exactly as it is and is re-checked at the daily routine (§4.6). The moment the
  balance covers the next case, it is funded.

## 4.5 An approved notice whose cutoff passes unfunded

This is the failure the pilot is measuring. It is **counted, never quietly dropped**.

- At the daily check, any case still in `queued` or `funded_pending_payment` whose `cutoff_date`
  has passed is set to `expired_unfunded`, with `expired_at` = the date and time observed, and one
  of the four `expiry_reason` values.
- **`funded but not paid by cutoff` is the worst outcome in the pilot** — the money was there and
  the household still lost the service — and it is why `funded_at` is recorded separately from
  `paid_at`. If this ever happens, it is an incident: the partner is told the same day and the
  reason goes in `notes`.
- The row is never deleted, never re-stated, and never moved out of the file.
- The case is reviewed at the weekly cut: one dated line in `notes` saying what happened.
- An expired case is **not** a grant, so it does not consume the household's one-grant-per-12-months
  (§2.4). The household may be referred again.
- A case that expires and is later paid anyway is **not permitted**: once expired, it stays
  expired, and any later payment is a new case with a new `case_id`.

## 4.6 The paid case leaves the queue

When the charity's payables record shows the payment settled:

1. `state` = `paid`.
2. `paid_at` = the settlement date and time from that record, not the date it was requested.
3. `payment_reference` = the reference the charity's system issued. If the charity cannot supply
   one, the case is **not** marked paid — a payment with no reference cannot be reconciled.
4. The case leaves the **active** queue (anything not `queued` or `funded_pending_payment`) and
   stays in the file permanently.
5. The household is told, and offered the optional one-line note for donors (§1.5 and §7).

## 4.7 The daily routine — five steps, five minutes

1. Open the log. Any row with no decision and `received_at` older than one business day? Decide it.
2. Any `more information requested` row whose `info_deadline` has passed? Close it (§2.6).
3. Sort the queue by §4.2. Any case whose `cutoff_date` has passed? Expire it (§4.5).
4. Any `funded_pending_payment` case with no `paid_at` and a cutoff within two business days? Chase
   the charity's payables, today.
5. Is the committed balance (§4.3) enough for the next case in order? If yes, fund it. If no, tell
   the partner (§4.4).

---

# 5. DASHBOARD DEFINITIONS

Nine published figures. Each one has to be computable by hand from `decision-log.csv` and
`queue.csv`, by someone who has not read this document's reasoning — so each is given as a
numerator, a denominator, a window and the one edge case that would otherwise be ambiguous.

## 5.0 The rules that apply to all nine

- **The snapshot** is taken at the end of the reporting week, in `<CITY>` local time. Every figure
  below is "as at the snapshot" unless it names a window.
- **The unit of count is the case**, identified by `case_id` — except for the minimum-five test,
  which counts **households** (§5.10).
- **`attempt` matters.** A case that was asked for information and then decided has two rows. The
  *first decision* on a case means: the first row for that `case_id` where `decision` is
  `approved` or `declined` (information-request rows are skipped, they are not decisions). The
  *current state* of a case means: its latest row.
- **Windows.** "The window" means the seven days ending at the snapshot, unless the metric says
  cumulative. Four of the nine are cumulative from `<PILOT START DATE>` (M4, M5, M9, and the
  reversals half of M8), because a weekly cohort in a 90-day pilot with one referral partner is
  too small to survive the five-case rule. That is a deliberate reading of a page that does not
  specify a window; it is listed for confirmation as Q8.
- **No figure is ever computed from donor records.** The pool side comes from the charity's funds
  export — totals and supporter counts, no names, no cards.
- **Nothing is estimated.** If a figure cannot be computed from the two files, it is suppressed,
  not filled in.

## 5.1 Notices open

- **Numerator:** the number of cases whose current `state` is `queued` or `funded_pending_payment`.
- **Denominator:** none — this is a count.
- **Window:** as at the snapshot.
- **Edge:** a case that is `funded_pending_payment` **is** open — the household has not been helped
  until the utility is paid. A case in `expired_unfunded`, `paid` or `withdrawn` is not open. An
  information-request row is not open and never was.

## 5.2 Days to nearest cutoff

- **Numerator:** the smallest value of (`cutoff_date` − snapshot date), in whole days, across the
  cases counted in M1. Zero if the nearest cutoff is today.
- **Denominator:** none.
- **Window:** as at the snapshot.
- **Edge:** if M1 is zero, publish "no open notices" — **not** `0`, which would read as a cutoff
  today. And see §5.10: this figure comes from a single case, so it can never satisfy the five-case
  minimum as v0 is written. **It is therefore suppressed every week until the partner rules on
  Q11.** The suggested replacement, for the partner to approve rather than for us to adopt: a count
  of open notices in each cutoff band (inside 7 days / 8 to 14 / 15 to 30), suppressed per band.

## 5.3 Total owed

- **Numerator:** the sum of `amount_owed` over the cases counted in M1.
- **Denominator:** none.
- **Window:** as at the snapshot.
- **Edge:** uses the **verified** amount (the log's figure), not the form's, where the two ever
  disagreed. Excludes `expired_unfunded` cases — those are counted in M6 and their money is no
  longer owed by the fund. Never published with a case count under five (§5.10).

## 5.4 Share paid before cutoff

- **Numerator:** cases in `queue.csv` with `state = paid` **and** `paid_at` on or before
  `cutoff_date` (date comparison, not time).
- **Denominator:** every case that has reached a terminal queue state — `paid` or
  `expired_unfunded` — since `<PILOT START DATE>`.
- **Window:** cumulative to the snapshot, as a percentage to one decimal.
- **Edge:** a **late payment** (`paid_at` after `cutoff_date`) sits in the denominator only. That is
  the point of the figure: paying after the cutoff does not count as paying before it. A case still
  `queued` or `funded_pending_payment` is in neither side. A `withdrawn` case is in neither side.

## 5.5 Median hours from submission to payment

- **Set:** every case with `state = paid`, value per case = `paid_at` − `received_at` **of attempt
  1**, in hours to one decimal.
- **Denominator:** the number of cases in that set (it is the `n` of the median).
- **Window:** cumulative to the snapshot.
- **Edge — and this is the one that matters:** the clock runs from **submission**, not from
  approval. The household's wait starts when it submits, and it includes the time the caseworker
  spent asking for information and the time the charity's payables took. Measuring from approval
  would hide both of those, which are the two delays the pilot exists to find. An even-sized set
  takes the mean of the two middle values. A resubmitted case uses attempt 1's `received_at`, not
  the resubmission's.

## 5.6 Notices expired unfunded

- **Numerator:** cases whose `state` became `expired_unfunded` with `expired_at` inside the window.
- **Denominator (for the rate):** every case whose `cutoff_date` fell inside the window, whether it
  ended `paid` or `expired_unfunded`.
- **Window:** the seven days ending at the snapshot; published as a count, and as a rate to one
  decimal.
- **Edge:** a case funded but not paid by its cutoff is **still expired** — the household lost the
  service, which is what the figure measures. It is flagged in `expiry_reason` so the partner can
  see the difference. A case expired and later paid is counted as expired (and, per §4.5, should
  not exist at all).

## 5.7 Declined, by reason

- **Numerator:** for each of the five codes, the number of cases whose **first decision** in the
  window is `declined` with that code.
- **Denominator:** all cases whose first decision in the window is `approved` or `declined`.
- **Window:** the seven days ending at the snapshot.
- **Edge:** a decline that was later **reversed on appeal stays counted here**, for the week it was
  declined — the decline happened. Reversals appear in M8 instead. A case first answered with
  "more information requested" and declined on the next attempt counts as a decline in the week of
  that later decision, because that is its first *decision*. See §5.10 for the suppression trap in
  this table.

## 5.8 Appeals and reversals

Published as three numbers, not one.

- **Appeals received:** appeals with `appeal_heard = yes` and `appeal_requested_at` in the window.
- **Reversals:** appeals with `appeal_outcome = reversed - approved` and `appeal_decided_at` in the
  window.
- **Reversal rate:** reversals **decided in the window** ÷ appeals **decided in the window**
  (`appeal_heard = yes`, `appeal_decided_at` in the window), as a percentage to one decimal.
- **Window:** received and reversals use the seven days; the rate uses the decided-in-window set.
- **Edge:** the rate's numerator and denominator always come from the same set, so an appeal
  received in one week and decided in the next cannot distort it — it appears in "received" in week
  N and in the rate in week N+1. An appeal can only be against a decline. An out-of-time request
  that the reviewer declined to hear (`appeal_heard = no`) is recorded in the log and appears in
  **no** published figure; the partner sees it in the file.

## 5.9 Cost per case

- **Numerator:** processing and platform fees charged on gifts to the Utilities fund, taken from
  the charity's own statements, **plus** any direct cash cost the charity records against the
  program (printing, translation, postage).
- **Denominator:** cases with `state = paid` since `<PILOT START DATE>`.
- **Window:** cumulative to the snapshot.
- **Edge:** the grant itself is **not** a cost — it is the program's output, and mixing it in would
  make the figure meaningless. Volunteer time is not costed, because no dollar value for it exists
  and inventing one would be a fiction. If the charity cannot supply the fee figure for a period,
  the metric is **suppressed**, not estimated. If the charity charges nothing on the fund, that is
  published as a statement, not as a zero.

## 5.10 The minimum-five-cases rule, applied

The rule, from the page: every published figure is an aggregate with a minimum of five cases per
figure.

**Which count is tested.** Not rows — **distinct households**, counted by distinct
`account_holder_key` behind the figure. A resubmission does not add a household, and an appeal does
not add one either.

**Applied per figure, not per table.** Each of the nine is tested on its own, and each suppressed
figure gets its own replacement text. A table with one suppressed cell still publishes the others.

| Figure | The count that must reach five |
|---|---|
| M1 Notices open | the count itself |
| M2 Days to nearest cutoff | **can never pass** — one case (see §5.2) |
| M3 Total owed | the count in M1 |
| M4 Share paid before cutoff | the denominator |
| M5 Median hours to payment | the `n` of the median |
| M6 Notices expired unfunded | the denominator |
| M7 Declined, by reason | **each reason code's cell** |
| M8 Appeals and reversals | appeals decided in the window |
| M9 Cost per case | cases paid (the denominator) |

**The suppression trap in M7.** If one reason code has fewer than five households but the total is
published, anyone can subtract the published cells from the total and recover the suppressed one.
So: **publish the total for declined-by-reason only when no cell is suppressed, or when at least
two cells are published** — and never publish a total next to a single suppressed cell.

**What the page shows instead.** Exactly this line, in the same place the figure would be:

> Not published — fewer than five cases.

No dash, no blank, no range, no "approximately", no "0", no footnote explaining what the number
would have been. A suppressed figure must not be inferable from its neighbours.

**Once suppressed, always suppressed.** A figure suppressed for week N is never published later
for week N. Publishing it retroactively would let someone subtract it from the earlier totals and
recover the count that was too small to publish. The week stays suppressed permanently.

**Who applies it.** The operator applies suppression before the page is touched, and
`<SECOND REVIEWER>` checks it against the two files at the weekly cut. The working figures — the
unsuppressed ones — are never pasted into the page, never put in a document, and never published.
The two CSVs are never published at all.

## 5.11 The weekly routine

1. Take the snapshot at the end of the week.
2. Reconcile the fund with the charity (§4.3, §6 item 7) and get the signed-off balance.
3. Compute the nine figures by hand from the two files.
4. Apply suppression per figure (§5.10).
5. `<SECOND REVIEWER>` checks the figures and the suppressions against the files.
6. Publish on the page, with the snapshot date and the words "updated weekly".
7. File a dated copy of both CSVs as the week's snapshot. This is the audit trail for §3.2 and the
   evidence for §7.
8. Run the retention sweep (§7.5) in the same sitting.

---

# 6. PARTNER AGREEMENT TERM SHEET

A checklist of what the agreement has to settle — not a legal document, and not legal advice. Items
marked **[COUNSEL]** are for the charity's counsel, not for us and not for the caseworker. Nothing
here is a draft clause.

| # | Item | What the agreement has to settle | Who decides |
|---|---|---|---|
| 1 | Scope and term | `<CITY>`, Utilities only, one referral partner, `<PILOT START DATE>` to `<PILOT END DATE>`, and that the day-90 decision is made against the three published tests. | charity + us |
| 2 | Grant cap | `<GRANT_CAP>`, that it applies per notice, whether it can change mid-pilot, and how a change is published if it does. | charity |
| 3 | Income threshold | Which of the partner's **existing** thresholds this is, whether the form's attestation alone satisfies it or the partner's own screening must come first, and whether the figure is published as a number or a band. | charity **[COUNSEL if published]** |
| 4 | Referral volume | Who may refer, roughly how many notices a week, what the partner does above that, and that `referral_source` is set by the partner's form. | charity |
| 5 | Second reviewer | The named person, that they are independent of `<CASEWORKER(S)>`, their turnaround (`<REVIEWER TURNAROUND>`), their power to reverse, and that their outcome is recorded in the appeal columns and never overwrites the first decision. | charity |
| 6 | Caseworkers and cover | Named volunteers, who supervises them, and who decides when they are away — the one-business-day rule has to survive a holiday. | charity + us |
| 7 | Fund reconciliation | Who runs it, from which export (the funds export — totals and supporter counts only), how often (weekly, before the dashboard), against which payables record, who signs it off, the committed-balance definition (§4.3), and what happens on a mismatch. | charity |
| 8 | Receipts | Who issues them, who customises the tax language, whether the platform's automated email satisfies the written-acknowledgment requirement for gifts of $250 or more, whether it states that no goods or services were provided, and how a donor gets a corrected receipt. | **[COUNSEL]** |
| 9 | Pooled-gift receiptability | Written confirmation that a gift to a designated fund, where the donor does not indicate it is for a specific person, is receiptable — and that an opt-in donor note does not change that. This is the day-1 gate and it is theirs to give, not ours to produce. | **[COUNSEL]** |
| 10 | Gift-acceptance policy and discretion | That the charity's own policy gives it discretion and control over a fund whose payouts are queued by cutoff date; whether it may top up a shortfall and who authorises that; and that we never solicit a donor about a specific case. | **[COUNSEL]** |
| 11 | Payment authorisation path | Who approves a utility payment, who executes it, whether a second signature is needed above `<SECOND SIGNATURE THRESHOLD>`, the format of `payment_reference`, and how the settlement confirmation reaches the operator (so `paid_at` is a fact, not a guess). | charity |
| 12 | Utility liaison | Who talks to the utility, whether it accepts third-party payment on an account, what it needs (account number, name on the account, amount), whether it will confirm an account is still connected, and **the utility's shutoff and moratorium rules for the pilot window** — including any period in which shutoff is not permitted at all. | charity + the utility **[COUNSEL on the moratorium rules]** |
| 13 | Data duties | Who deletes what, from which system, when, and who evidences it (§7). Who is the controller of the household information and who is a processor. | charity + us **[COUNSEL on the legal basis]** |
| 14 | The public page | Who owns it, whose name appears, who approves a change to the published rules, who answers a complaint, and the position on the name — a bare "Grace Period" launch waits for clearance. | **[COUNSEL on the name]** |
| 15 | Rule changes mid-pilot | v0 is published before the pilot starts. Can it change inside the 90 days, who approves, and how a change is announced so that a donor or a household is not held to a rule they never saw. | charity + us |
| 16 | Withdrawal and wind-down | What happens to unspent fund money if the charity withdraws or the pilot ends early, what happens to open cases on the last day, and who tells the households. | charity **[COUNSEL on the money]** |
| 17 | Contact and complaints | The published program contact before launch, the complaint route, who owns it, and the response time. | charity + us |
| 18 | Platform terms | That the charity's own admin has read the donation platform's terms and acceptable-use policy for our pattern, and that the Cover button's destination is a Form campaign with the Utilities fund pre-selected — with the knowledge that the donor can change the fund and the platform does not ring-fence it. | charity |

---

# 7. RETENTION

Every row below matches the page's privacy block: notice file deleted at verification, contact
method deleted 90 days after payment, aggregates only published. Where the page is silent, the gap
is named rather than filled in.

## 7.1 What is deleted, when, by whom, evidenced how

| Data | Where it lives | Deleted when | By whom | Evidence |
|---|---|---|---|---|
| The notice file | the intake platform's file store | **at verification** — when the decision row is written, same business day | `<CASEWORKER(S)>` | `notice_deleted_at` in the log, plus the platform's own deleted state |
| The full account holder name | the form response | at verification — reduced to `account_holder_key` | `<CASEWORKER(S)>` | the key in the log; the full name is gone from the form |
| The contact method | the form response and the shared inbox | **90 days after payment** | operator | `contact_deleted_at` in the log |
| `account_holder_key` | the log | 12 months after the last decision on that household | operator | a dated line in `notes`; partner spot-check |
| Amount, cutoff date, household size, income confirmation, decision, code, timestamps | the log | kept for the pilot plus the charity's audit period `<set by charity>` | operator | the log itself |
| Donor notes | the email digest mailbox | end of the pilot, unless the household agrees in writing to keep it | operator | mailbox deletion record |
| The intake platform's own copy of responses | the platform | on the same schedule as above; if the platform retains its own copy, it is deleted there too | `<CASEWORKER(S)>` | platform export and deletion |
| The two CSVs | the locked spreadsheet | never deleted during the pilot; archived at the end | operator | the weekly snapshots (§5.11) |
| The weekly dashboard figures | the public page | never — aggregates only, nothing to delete | operator | the page |

## 7.2 What is never deleted

Nothing that is needed for an open appeal, an open incident, or the charity's audit may be deleted
on schedule. Deletion waits until the matter closes, and then happens — it is not cancelled. The
reason for the delay is written in `notes`.

## 7.3 The retention sweep

Runs at the weekly cut, in the same sitting as the dashboard (§5.11):

1. List everything whose deletion date fell in the week: notice files, contact methods, household
   keys past 12 months.
2. Delete each one, and record the timestamp in the matching column.
3. `<SECOND REVIEWER>` spot-checks one item from the week's list against the file.
4. A missed deletion is an **incident**: recorded in the log, told to the partner the same week,
   and not quietly made up later.

Evidence is the timestamp in the log plus the dated weekly snapshot. Nothing is evidenced by
anyone's memory, and "I deleted it" without a timestamp is not evidence.

## 7.4 The gap the privacy block leaves

The page says the contact method is deleted **90 days after payment**. A case that is **declined**,
or that expires unfunded, never has a payment — so that clock never starts and the contact details
would be kept forever.

The working rule until the partner confirms (Q9): for any case that is not paid, the contact method
is deleted **90 days after the final decision on that case** — that is, 90 days after the decision,
or 90 days after the appeal outcome where there was one, whichever is later. The same 90 days is
used so that the page's published wording is not contradicted for the cases where it does apply.

## 7.5 What the household is told

The confirmation screen (§1.5) and the consent block (§1.4) carry the deletion facts in plain
words. A household should never learn about a deletion from this document.

---

# Open questions for the partner

Each of these is a real gap in rules v0, not a question we can answer ourselves. The first is the
one that will bite on day 1.

**Q1 — the cutoff window's two edges.** v0 says a cutoff must be 2 to 30 days out and publishes
only one code, `past cutoff`. It has no code for a cutoff 1 day out (the most urgent case there is)
or 31+ days out. The kit's default is in §2.3: neither is declined, both go to the partner, and
nothing is approved on an unpublished ground. **The partner should decide whether v0 gains a code
and what it says, before day 1.** ← the highest-priority item here.

**Q2 — what identifies a household for the 12-month rule.** Rule 5 needs a household key. v0 does
not name one, and the form does not collect the utility account number. The kit uses a normalised
account holder name, which will fail for two households sharing a common name and for one household
whose name is spelled differently on two notices. The partner should decide whether the account
number from the notice is recorded (it is on the notice, and the charity's payables record will
carry it anyway) and who may keep it.

**Q3 — part-payment.** If a notice is above `<GRANT_CAP>`, may the fund pay the cap and leave the
rest owed? v0 declines the notice, and the kit follows v0. If the partner wants part-payment, that
is a published rule change, not an operational choice.

**Q4 — attestation or evidence for income.** Rule 4 says income is "at or below the threshold the
partner already uses", and the form collects only a confirmation. The partner should say whether
its own screening already covers rule 4, and whether a confirmation alone is enough.

**Q5 — is there a code for "no response"?** The kit closes a case whose information request is
never answered with the code for the test the answer was needed to settle, falling back to
`missing document`. The partner may prefer a sixth code; that is a rules v0 change.

**Q6 — withdrawal.** The kit has a `withdrawn` state for a household that pays the bill itself or
whose notice is cancelled. It appears in no published figure. The partner should confirm that is
the right treatment, since a high withdrawal rate would be worth seeing.

**Q7 — the ordering tiebreak.** Cutoff date then amount is the published rule. Two cases can tie on
both, so the kit adds `entered_queue_at` then `case_id` as a documented tiebreak. Confirm it, or
name a different one.

**Q8 — the reporting window.** The page names the nine figures but not their windows. The kit makes
M4, M5 and M9 cumulative from the start of the pilot, and M1 to M3, M6 and M7 weekly. The partner
should confirm, because cumulative figures move slowly and weekly ones suppress constantly at this
volume.

**Q9 — deletion clock for cases that are never paid.** See §7.4. The page says "90 days after
payment"; a declined case never has a payment.

**Q10 — when the 48-hour appeal window starts.** v0 says a household can ask for a second reviewer
within 48 hours. The kit measures from when the decline was **sent**, because that is the only clock
the household can see. The partner should confirm, and also set `<REVIEWER TURNAROUND>`, which v0
does not mention at all.

**Q11 — "days to nearest cutoff" cannot meet the five-case rule.** It is derived from exactly one
case's cutoff date, so as v0 is written it can never be published. The kit suppresses it every
week. The suggested replacement — a count of open notices in each cutoff band, suppressed per band
— is a published-rule change and needs the partner's approval, not ours.

**Q12 — does the pilot pay the whole notice or the arrears only?** v0 says "the amount owed", and
the form asks for the amount on the notice. Some notices show arrears plus a reconnection fee plus
a current charge. Which figure the cap is applied to should be settled before the first notice
arrives, because it decides both the cap test and what the charity instructs the utility to apply.
