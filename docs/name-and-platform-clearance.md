# Platform terms review and name sweep — closing §1.6 and §2.4

**Prepared:** 2026-11-04. **Supersedes the open items in** `/home/team/shared/research/day1-gate-research.md`
§1.6 ("no platform rule forbidding pooled giving — a not found, not a clearance") and §2.4
("trademark search never ran").

**Status of this document:** research, not legal advice. Where a lawyer or the partner charity's
counsel must decide, I say so and stop.

**Method note.** Part A was done by fetching each platform's *actual legal document* and reading it
end to end, not by reading help-centre articles. Raw copies of every document I relied on are saved
in `/home/team/shared/research/raw/` so anyone can re-check a quote. Where a document said "policies
referenced by Donorbox", I followed the reference and read the referenced policy too.

---

# PART A — Do any of the three platforms' binding terms forbid our pattern?

**The pattern under test:** a registered charity holds a designated fund; donors give to the fund,
not to a named person; the charity later pays a specific household's utility bill out of it.

## A.0 Verdict table

| Platform | Document(s) read | Verdict |
|---|---|---|
| **Givebutter** | Terms of Service (incl. the embedded **Community Guidelines**, which is its acceptable-use document) | **No prohibition found — full document read.** No clause restricts fundraising for unidentified recipients, and no clause restricts pass-through/agency fundraising *by the charity*. Two clauses impose **duties that our design must satisfy** (see A.1.3, A.1.4). |
| **Give Lively** | Terms of Use (24 sections, read in full) | **No prohibition found — full document read.** But Give Lively's own funding model makes it a poor fit for our pattern for a *structural* reason, not a rule (see A.2.3). |
| **Donorbox** | Terms of Service **and** the Acceptable Usage Policy it incorporates (both read in full) | **No prohibition found — both documents read in full.** Closest clause is the "payments on behalf of merchants" restriction, which I read as not reaching our pattern (see A.3.3), but that reading is mine, not a lawyer's. |

**Plain statement of what this table does and does not say.** For each platform I read the whole
binding document and found no clause forbidding our pattern. That is stronger than the "not found"
in §1.6 of the earlier brief, because in §1.6 I had not read these documents at all. It is still
**not a legal clearance**: it is my reading of the text, and the charity's counsel decides whether
the pattern is permitted. No platform's terms were reviewed by a lawyer here.

---

## A.1 Givebutter — Terms of Service

**Source:** https://givebutter.com/terms (accessed 2026-11-04). Saved as
`raw/gb_givebutter.com_terms.html`.

### A.1.1 Is there a separate acceptable-use document, and is it incorporated?

Givebutter has **no separate acceptable-use or prohibited-activities page**. Its sitemap
(`https://givebutter.com/sitemap.xml`, accessed 2026-11-04) lists only `/terms` plus addenda
(`/terms/ai-addendum`, `/terms/data-processing-addendum`, and promotional offer pages). The
acceptable-use content lives *inside* the Terms of Service as a closing section headed
**"COMMUNITY GUIDELINES"**.

The Terms state which other documents bind the user:

> "Our Data Processing Addendum and AI Addendum are incorporated into these Terms by reference and
> are available at the links provided on the Site."
> — Givebutter Terms of Service, §1 (accessed 2026-11-04)

So the incorporated set is **Privacy Policy + Data Processing Addendum + AI Addendum** — none of
which is an acceptable-use policy. **The Community Guidelines are the acceptable-use document, and I
read them in full.** They are also independently binding on the fundraiser:

> "They will abide by the Community Guidelines set forth below"
> — Givebutter Terms of Service, §6 "Fundraiser Responsibility" (accessed 2026-11-04)

### A.1.2 Restrictions on raising funds for identified individuals — NOT FOUND

I read the whole Community Guidelines prohibited-activities list. It runs: breaking the law; fraud;
illegal drugs; violence; financial schemes; gambling; hate/discrimination/harassment; legal defense
for serious crimes; international sanctions; exploitation; pornography; graphic content; pre-sales;
payment manipulation; credit; misuse of funds; slander and personal attacks; no-value-added services;
money laundering; piracy; IP violations; unauthorized sale or resale; trade violations; credit card
fraud; financial crimes; and a catch-all. **Nothing in it restricts fundraising for an identified
individual, a specific person's benefit, or a named beneficiary.**

The document points the other way. The first line of the Community Guidelines contemplates a
fundraiser that is *not* the beneficiary:

> "If you are not the beneficiary of the campaign you organize, you agree to deliver funds to the
> ultimate beneficiary directly and as soon as possible."
> — Givebutter Terms of Service, "COMMUNITY GUIDELINES" (accessed 2026-11-04)

**Inference (mine, not stated by Givebutter):** this is the nearest thing in the document to a rule
about our fact pattern, and it is a *duty to deliver*, not a prohibition. Our pattern satisfies the
literal words — the charity is not the beneficiary, and it pays the household's bill (delivering
funds to the ultimate beneficiary). Whether "the ultimate beneficiary" must be a single identified
person, and whether paying the utility rather than the household counts as delivering to the
beneficiary, is a question of interpretation for counsel. **Flag for counsel.**

### A.1.3 Restrictions on pass-through / agency / conduit fundraising — NOT FOUND for the charity

Every "agent"/"intermediary" reference in the document is about **Givebutter's own role**, not the
fundraiser's:

> "We are a platform and not an agent, consultant, professional fundraiser, broker, financial
> institution, charity or fiduciary for any Fundraiser, Supporter or User for any purpose."
> — Givebutter Terms of Service, §3 "The Role of Company" (accessed 2026-11-04)

> "Company does not engage in any solicitation activities on behalf of any individual, entity,
> organization, or charity."
> — ibid., §3 (accessed 2026-11-04)

> "Company may, but is not obligated to provide intermediary services to assist Fundraisers and
> Supporters in resolving disputes between them…"
> — ibid., §3 (accessed 2026-11-04)

> "You agree that no joint venture, partnership, employment, or agency relationship exists between
> Company and you as a result of these Terms or your use of the Site or Services."
> — ibid., §36 (accessed 2026-11-04)

**There is no clause forbidding the *fundraiser* from acting as a conduit.** The two clauses that
could be stretched to cover it are the "Payment manipulation" and "Misuse of funds" entries — dealt
with at A.1.4 and A.1.5.

### A.1.4 Designated funds, earmarking, donor intent — NO PLATFORM RULE, but a use-of-funds duty

Givebutter's Terms say nothing about designated funds or earmarking. The Community Guidelines
instead impose an **accuracy-of-purpose duty** on the fundraiser:

> "Misuse of funds: the receipt or grant of cash advances or lines of credit to yourself or to
> another person for purposes other than those purposes clearly stated in the campaign or collecting
> or providing funds for any purpose other than as described in a campaign description"
> — Givebutter Terms of Service, "COMMUNITY GUIDELINES" (accessed 2026-11-04)

and, in the warranties:

> "All payments received through the use of the Services will be used only as described in the
> content posted on the Site or otherwise provided to each Supporter"
> — Givebutter Terms of Service, §6 "Fundraiser Responsibility" (accessed 2026-11-04)

**What this means for us (inference).** The rule is not "you may not earmark"; it is "the campaign
description must truthfully describe what the money does, and you must spend it that way." Our
published rules (v0) are therefore not just good practice — they are the thing that keeps the
campaign inside this clause. **A program page that says "your gift pays utility bills for households
that meet the published criteria" is compliant on its face; a page that implies a specific household
will receive a specific gift is the risk.** This lines up exactly with the IRS §1.7(a) finding in the
earlier brief, from a completely different direction — which is reassuring.

**The "discretion and control" language I was asked to look for is not in Givebutter's terms.** It
does not appear in any of the three platforms' documents. It remains, as the earlier brief guessed, a
clause that lives in the **charity's own gift-acceptance policy**, not the platform's. Still open.

### A.1.5 Freeze / refund clause — YES, Givebutter has one

> "We further reserve the right, without limitation, to ban or disable your use of the Site and/or
> Services, remove the offending User-Generated Content, suspend or terminate your account, **stop
> payments to any such campaign, freeze or place a hold on donations**, and report you to law
> enforcement authorities or otherwise take appropriate legal action including seeking restitution
> on behalf of ourselves and/or our Users."
> — Givebutter Terms of Service, "COMMUNITY GUIDELINES" (accessed 2026-11-04); emphasis added

This power is triggered by a User's violation of the Terms or the Guidelines — it is not a
free-standing power to freeze a campaign whose purpose is merely unclear. But the catch-all entry
means "unclear purpose" is effectively whatever Givebutter deems it:

> "Generally unacceptable activity: any other activity that Company may deem in its sole discretion
> to be unacceptable."
> — ibid., "COMMUNITY GUIDELINES" (accessed 2026-11-04)

Refunds are handled separately and are permissive, not punitive:

> "Donations and/or any other form of payment made on the Site may be refunded to Supporters by
> Fundraisers or the Company. To be eligible for a refund, transactions must be less than 12 months
> old (6 months for PayPal transactions), and the campaign that collected the donation and/or payment
> has enough of a balance to cover the refund amount at the time of refund request."
> — Givebutter Terms of Service, §15 "Refunds" (accessed 2026-11-04)

**Operational consequence (inference):** because the refund eligibility test is "the campaign has
enough of a balance to cover it," money that has already left the campaign account to pay a utility
bill cannot be refunded. For a fund that pays bills promptly, that is a mild protection — but it also
means a donor refund requested after we have paid a bill may be refused. Worth one line in the
published rules.

### A.1.6 Two further Givebutter findings that matter to the plan

**(a) Receipts are the charity's job, stated plainly.** This resolves an open question from the
earlier brief (§5 item 7) as far as the *contract* is concerned:

> "Fundraisers, and not Company, are solely responsible for providing Supporters with receipts
> acknowledging receipt of funds from the Supporter."
> — Givebutter Terms of Service, §8 (accessed 2026-11-04)

This does **not** answer whether Givebutter's *automated email* satisfies the IRS written-acknowledgment
rule for gifts of $250+ — that is still counsel's question. It does establish that the platform
places the receipting obligation on the charity, which is consistent with the plan's "charity of
record" design.

**(b) Givebutter disclaims all knowledge of how funds are used.**

> "We are not responsible for and do not endorse any Fundraiser, Supporter or other User and do not
> guarantee or warrant, expressly or impliedly, that any information provided through the Services is
> accurate or how the funds raised by any Fundraiser will be used."
> — Givebutter Terms of Service, §3 "The Role of Company" (accessed 2026-11-04)

**Inference:** the platform takes no position on downstream use of funds. That means it will not
police our allocation — good — and also that it will not defend it. The published rules are our only
protection.

---

## A.2 Give Lively — Terms of Use

**Source:** https://www.givelively.org/terms-of-use (accessed 2026-11-04; `givelively.org/terms`
redirects here). Saved as `raw/x_www.givelively.org_terms-of-use.html`. 24 numbered sections, all
read.

### A.2.1 Prohibited Uses — NOTHING about individuals, pooled funds or conduit fundraising

§13 "Prohibited Uses" is entirely about the software: no modifying or reverse-engineering the
platform, no time-sharing or service-bureau use, no malware, no vulnerability testing, no removing
proprietary notices, no use detrimental to Give Lively or competitive with it, no breach of law.

§14 "Value Statements" is a non-discrimination / no-hate-speech list (race, religion, gender, sex,
disability, environmental advocacy, assault weapons, hate speech). **No clause in either section
restricts fundraising for identified individuals, or pooled or pass-through giving.** I read the
whole document and there is no such clause.

### A.2.2 Refund / block power — YES, but narrow

> "You acknowledge and agree that if Give Lively believes (in its discretion) that any donation has
> been made to an organization that engages in or in any way promotes such activities, or other
> activities that Give Lively in its discretion deems objectionable, we may block the transaction and
> refund the respective amounts."
> — Give Lively Terms of Use, §14 (accessed 2026-11-04)

This is keyed to the organisation's *conduct*, not to the clarity of a campaign's purpose. There is
no general "unclear purpose" freeze clause. §8.1 refunds are limited to error and unauthorized
payment.

### A.2.3 The real problem with Give Lively is structural, not a prohibition

Give Lively runs **two different money flows**, and only one of them keeps the partner charity as
charity of record.

**Route 1 — direct to the nonprofit (§7.1).** The nonprofit connects its own Stripe/PayPal/Shift4
account and receives donations directly:

> "All nonprofits that use the Give Lively Platform on their own websites, or to power their own
> fundraising campaigns, have created a Stripe, PayPal, and/or Shift4/The Giving Block account of
> their own, and link that account with ours ('Connected Account') and receive donations directly.
> When a donation is made through the Platform, it is directed to the nonprofit's account. Therefore,
> the donation tax receipt Give Lively sends a donor will represent a direct donation to the selected
> nonprofit."
> — Give Lively Terms of Use, §7.1 (accessed 2026-11-04)

**Route 2 — through the Give Lively Foundation (§7.2–7.3).** Used for nonprofits reached via the
Charity Navigator site. Here **Give Lively's own 501(c)(3) is the legal recipient**, not our partner:

> "To comply with federal tax laws and Internal Revenue Service regulations, the Give Lively
> Foundation retains legal control over any charitable contributions it receives. Please note that
> your donation is first collected and processed by the Give Lively Foundation, which is the legal
> recipient of your donation, and your credit card or bank statement will list 'Giving Basket
> Donation' as the 'merchant of record' and not the nonprofit that you have designated to benefit
> from the donation."
> — Give Lively Terms of Use, §7.2 (accessed 2026-11-04)

> "All donations are gifts made voluntarily to the Give Lively Foundation, a 501(c)(3) charity, with
> no conditions."
> — ibid., §8.1 (accessed 2026-11-04)

**And the clause that matters most for a designated fund — §12 "Use of Funds":**

> "Please note that all donations made to nonprofits either directly or through the Give Lively
> Foundation through the Platform or Services are transferred or otherwise granted to nonprofits as
> **unrestricted grants**. Neither Give Lively nor the Give Lively Foundation, and none of their
> officers, directors, members, affiliates, licensees, and service providers monitors or controls any
> of the nonprofits' activities, and none shall be responsible, in any manner or form, for the use or
> non-use of any funds granted through the Platform or Services to such nonprofits."
> — Give Lively Terms of Use, §12 (accessed 2026-11-04); emphasis added

**Inference (this is the important one for the lead):** on Give Lively's own words, money reaches the
nonprofit as an **unrestricted grant**. That does not forbid our pattern, but it means a donor's
"Utilities" designation is **not** carried to the charity as a legal restriction by the platform — the
charity's own fund accounting has to do that work. And on Route 2 the receipting party would be the
Give Lively Foundation, not the partner charity, which breaks the plan's "charity of record issues
the receipts" design.

**Bottom line on Give Lively:** no prohibition, but the *fiscal-host* assumption in our plan
("the partner charity is the fiscal host and issues the receipts") holds only on Route 1, and even
there the platform treats the gift as unrestricted. If the lead wants Give Lively, the charity needs
its own Connected Account and its own internal restriction on the fund.

### A.2.4 Disbursement discretion on Route 2 — worth noting, not blocking

> "If the Give Lively Foundation determines, in its discretion, that funds designated for a given
> nonprofit cannot be disbursed because the nonprofit is ineligible to receive funds, the Give Lively
> Foundation will (whenever possible) ask you to recommend another nonprofit. If you do not respond to
> that request, or your alternate nonprofit is also ineligible, the Give Lively Foundation will grant
> the funds to an alternate nonprofit selected by the Give Lively Foundation in its sole discretion."
> — Give Lively Terms of Use, §7.3 (accessed 2026-11-04)

**Inference:** this is the "discretion and control over donated funds" language the lead asked about —
but it sits with the *Give Lively Foundation over its own grants*, not with the charity over its fund,
and it only bites on Route 2. It is not a restriction on our pattern.

---

## A.3 Donorbox — Terms of Service **and** Acceptable Usage Policy

**Sources:**
- Terms of Service: https://donorbox.org/explore/terms (accessed 2026-11-04; `donorbox.org/terms`
  redirects here). Saved as `raw/x_donorbox.org_terms.html`. Sections 1–22 read.
- Acceptable Usage Policy: https://donorbox.org/acceptable-usage-policy (accessed 2026-11-04; the
  page itself is headed "Acceptable Use Policy", "Last Updated Sep 03, 2026"). Saved as
  `raw/db_aup.html`. Read in full.

**How I found the AUP.** It is *not* linked from the Terms page and the obvious slugs 404
(`/acceptable-use`, `/explore/acceptable-use`, `/aup`, `/explore/legal` all return 404). The Terms
incorporate it by reference —

> "Customer is responsible for all use of the Services under its account and for ensuring Authorized
> Users comply with this Agreement and any Donorbox acceptable use policies referenced by Donorbox."
> — Donorbox Terms of Service, §2 "Acceptable Use; Account Responsibility" (accessed 2026-11-04)

— so I located it through `https://donorbox.org/sitemap.xml`. **Note for anyone re-checking: the
live URL is `/acceptable-usage-policy`, not `/acceptable-use-policy`.**

### A.3.1 Terms of Service §2 and §4 — nothing about pooled or pass-through giving

> "Customer must not use the Services to: (a) violate law; (b) facilitate fraud or deception;
> (c) infringe intellectual property; (d) transmit malware; (e) interfere with the Services; or
> (f) engage in abusive fundraising or prohibited content."
> — Donorbox Terms of Service, §2 (accessed 2026-11-04)

The whole fundraising-specific part of the Terms pushes compliance onto the charity and disclaims
Donorbox's role:

> "Customer is solely responsible for: (a) campaign content and representations; (b) compliance with
> all fundraising, charitable solicitation, consumer protection, disclosure, and tax laws in all
> applicable jurisdictions; (c) donor communications and preferences; and (d) determining whether any
> donation is tax-deductible."
> — Donorbox Terms of Service, §4.1 "Customer Fundraising Responsibility" (accessed 2026-11-04)

> "Donorbox does not verify Customer's nonprofit, charitable, or tax-exempt status; does not validate
> campaigns; and does not act as a fiduciary, escrow agent, or trustee of donated funds. Donor
> disputes are between Donor and Customer."
> — Donorbox Terms of Service, §4.2 "No Verification; No Fiduciary Role" (accessed 2026-11-04)

**No clause in the Terms restricts raising funds for identified individuals, or restricts
pass-through/agency fundraising by the charity.**

### A.3.2 Acceptable Usage Policy — full prohibited list read; nothing on individuals

The AUP's prohibited list covers: law violations and sanctions; facilitating anything else prohibited
by the AUP; fraudulent/deceptive/misleading/impossible campaigns or falsely claiming tax-deductible
status; illegal drugs; ransom/trafficking/weapons; gambling; sexual content; investment and
money-service schemes; undisclosed incentives; pre-sales; payment collection on behalf of merchants,
card testing, cash advances, self-donations for credit arbitrage; credit repair or debt settlement;
violence and hate; IP infringement; spam/malware/scraping; circumventing enforcement; and an
open-ended risk clause.

**Nothing in it restricts fundraising for an identified individual or a named beneficiary, and nothing
restricts pooled funds or designated funds.**

The two nearest clauses, quoted so counsel can judge them rather than take my word:

> "Collection of payments on behalf of merchants by payment processors or otherwise, card testing,
> unauthorized cash advances, or self-donations intended for personal credit arbitrage."
> — Donorbox Acceptable Use Policy, "Prohibited Fundraisers" (accessed 2026-11-04)

> "Any activity that presents an unreasonable legal, regulatory, reputational, financial, or
> operational risk to Donorbox, its payment processors, or its users."
> — ibid. (accessed 2026-11-04)

**Inference (mine):** the "on behalf of merchants" clause is aimed at payment-facilitation abuse —
collecting a merchant's takings through a donation form. The charity is collecting for its own
charitable program and then paying a bill; it is not collecting a utility's receivables on the
utility's behalf. I read the clause as not reaching our pattern. **This is an interpretation, not a
statement by Donorbox, and it is the one place in Part A where a reasonable lawyer could disagree.**
Flag for counsel.

The AUP also has an accuracy clause that mirrors Givebutter's use-of-funds duty:

> "Campaigns that are fraudulent, deceptive, misleading, dishonest, or materially inaccurate,
> impossible or imitating any other person or fundraising campaign without permission (whether on the
> Platform or not), or falsely claiming tax-deductible status or non-profit authorization."
> — Donorbox Acceptable Use Policy, "Prohibited Fundraisers" (accessed 2026-11-04)

### A.3.3 Freeze / refund clause — NOT FOUND in Donorbox

The AUP's enforcement section ("Non-Compliance") lists only account-level remedies: a written
warning, a request to remove content, immediate suspension, and permanent ban. **There is no clause
permitting Donorbox to freeze, hold or refund donations on a live campaign.** Refunds are the
customer's responsibility:

> "Customer is solely responsible for donor refunds and for all chargebacks, reversals, disputes,
> fines, penalties, and related fees arising from donations processed through the Services."
> — Donorbox Terms of Service, §6.4 "Donor Refunds; Chargebacks; Disputes" (accessed 2026-11-04)

**Inference:** on this point Donorbox is the *least* intrusive of the three for our pattern — but the
absence of a freeze clause also means an account suspension mid-pilot would strand in-flight gifts
with no platform remedy. That is an operational risk to note, not a legal one.

---

## A.4 What Part A changes for the plan

1. **The "no prohibition" finding is now a real reading, not a gap.** For all three platforms I read
   the full binding document(s) and the acceptable-use document, including following Donorbox's
   incorporation-by-reference. §1.6 of the earlier brief can be closed as **"no prohibition located
   in the full text"**.
2. **The binding constraint is a truthfulness duty, not a permission.** Givebutter and Donorbox both
   require the campaign description to accurately describe what the money does, and Givebutter
   requires funds to be used "only as described." The published rules (v0) are what keeps us inside
   this. This independently reinforces the IRS §1.7(a) design rule already in the plan.
3. **The "discretion and control" clause is not in any platform's terms.** It is still owed by the
   charity's own gift-acceptance policy. **Unchanged open item for counsel.**
4. **Give Lively is a worse fit than the earlier brief implied**, for structural reasons: §12 makes
   grants to nonprofits "unrestricted," and the Foundation route (§7.2) makes Give Lively's own
   charity the legal recipient and receipting party. Givebutter remains the best-sourced rail.
5. **Receipting is contractually the charity's job on Givebutter** (§8), which is consistent with the
   plan. Whether the platform's automated email satisfies IRS written-acknowledgment for $250+ gifts
   is still open and still counsel's question.

---

# PART B — Trademark and name sweep

**Read this section's status line before quoting anything from it.**

| Sub-task | Status |
|---|---|
| B.1 USPTO register search, driven through the browser UI, with control test | **DONE** — mechanism proven, results below |
| B.2 Common-law / program-name sweep (utilities, municipal, church, nonprofit program names) | **STILL NOT COMPLETED — but the failure is now proven, not merely reported.** Bing loaded and served a **canned fallback page**; a control query returned an empty page, so no Bing answer is admissible. ~25 further independent search paths refused this machine's IP. **No program-name finding in either direction.** One useful by-product: the phrase is shown to be dominated by the ordinary billing meaning (B.2.5 Q2). **Still the category the lead said matters most, and still the one I could not deliver.** |
| B.3 CIPO (Canada) | **NOT SEARCHED — but the register IS reachable from this machine (HTTP 200), which corrects the earlier "canada.ca is blocked" assumption.** The UI is JS-driven like USPTO and needs form-driving with a control query. See B.3. |

## B.1 USPTO — the search mechanism now works

**This closes the §2.4 failure in the earlier brief.** The earlier attempt failed because the query
was passed as a URL parameter and never reached the index. This time I drove the actual search form
in a browser.

### B.1.1 Control test — PASSED

Before trusting any result, I ran the control the lead asked for.

- Opened `https://tmsearch.uspto.gov/search/search-information` (accessed 2026-11-04).
- Typed `nike` into the "Search trademarks" combobox and clicked the "search" button (no URL
  parameters — real keystrokes into the real form).
- Result: the results page returned **actual NIKE records with real goods-and-services text**, e.g.
  "IC 042: Retail Footwear and Apparel Store Services." and "IC 016: [ [ binders, student planners,
  notebooks, portfolio covers ]…".

**The control passed.** The query reaches the index. Any "no results" answer from this session's
searches is therefore a real negative, not a broken query — which is exactly what could not be said
last time.

### B.1.2 The GRACE PERIOD search

- Same form, query `grace period`, refinement left at **Wordmark**.
- Result banner: **"4,749 results for grace period"** (status split shown on the page: Live 1,918,
  Dead 2,831).

**Important caveat on what that number means (this is my inference from the result list, and it
matters):** the search engine **OR-matches the words**. The results are relevance-sorted, so exact
`GRACE PERIOD` marks come first and the tail contains marks for *GRACE* alone and *PERIOD* alone
(e.g. serial 74004056, mark `PERIOD`, class 042; serial 76277761, `PERIOD`, class 042). So **4,749 is
not "4,749 GRACE PERIOD marks"** — it is the size of the fuzzy set. Quoting the phrase (`"grace
period"`) did **not** change the count in this UI, so the UI does not appear to support phrase
restriction from the search box.

### B.1.3 Exact GRACE PERIOD marks found

Six marks with the exact wordmark `GRACE PERIOD` were returned across the result pages I read
(unsorted page 1, plus the class-filtered set). Every row below was read off the results list; the
first one was then confirmed against its full USPTO record.

| Serial | Mark | Status | Class | Owner |
|---|---|---|---|---|
| **99793897** | **GRACE PERIOD** | **LIVE — PENDING (under examination)** | **041** | **Grace Period** (charitable, non-profit corporation, District of Columbia) |
| 85258969 | GRACE PERIOD | DEAD — CANCELLED | 035 | ARZO ENT. (LLC) |
| 97042996 | GRACE PERIOD | DEAD — ABANDONED | 005 | Standard Homeopathic Company (Nevada) |
| 97097066 | GRACE PERIOD | LIVE — REGISTERED | 005 | (supplements) |
| 98422789 | GRACE PERIOD | see record | 005 | not read |
| 98480746 | GRACE PERIOD | see record | 005 | not read |

Source: `https://tmsearch.uspto.gov/search/search-results`, query `grace period`, accessed
2026-11-04.

Near-but-not-identical marks also present, and not close enough to be a conflict on their face:
`GRACE GRACE` (serial 97828070, class 025) and `GRACE&GRACE` (serial 99284697, class 020).

### B.1.4 Class 36 and Class 45 — no GRACE PERIOD mark found, with a stated limitation

**I found no `GRACE PERIOD` mark in Class 036 or Class 045.** Every exact `GRACE PERIOD` mark I
surfaced sits in classes 005, 035 or 041.

**The limitation you need to know about.** I tried to prove this with the class filter, and the
filter did not behave the way I expected. When I checked "Insurance and financial(036)", the UI
**auto-checked "Personal and legal(045)" and greyed it out** — the two are "coordinated" classes and
a "Coordinated" toggle was on by default. Checking 036 took the set from 4,749 to 2,097, but the rows
returned under that filter still displayed classes 035 and 041, not 36 or 45. Pressing "Reset" did
not clear the class filter. **So I never obtained a clean class-36-only or class-45-only list.**

What I can say honestly: across the unfiltered relevance-sorted results and the 036+045-coordinated
set, the only exact `GRACE PERIOD` marks present were the six above, none in 36 or 45. What I cannot
say is that I exhaustively enumerated all 4,749 fuzzy results — I did not page through them all.

### B.1.5 The live application in detail — this is the finding that matters

USPTO TSDR record for serial **99793897**, retrieved at
`https://tsdr.uspto.gov/statusview/sn99793897` (accessed 2026-11-04; page generated 2026-11-04
13:32 EST):

| Field | Value |
|---|---|
| Mark | GRACE PERIOD (standard character, no font/size/colour claim) |
| Serial | 99793897 |
| Filing date | Apr. 29, 2026 |
| Register / type | Principal; Service Mark |
| **Status** | **LIVE / APPLICATION / Under Examination** |
| **Status detail** | **"A non-final Office action has been sent (issued) to the applicant… The applicant must respond to this Office action."** Status date Aug. 03, 2026 |
| Class | **041** — Primary Class; US classes 100, 101, 107 |
| Goods/services | "Business mentoring services; Academic mentoring services for charitable purposes; **Charitable services, namely, mentoring of children, youth, adults, and families** in the field of leadership development, life skills, personal growth, and wellness; Education services… mentoring, tutoring, classes, seminars and workshops…" |
| First use / use in commerce | Jun. 01, 2010 (both) |
| **Owner** | **Grace Period**, PO Box 90537, Washington, DC 20090, United States |
| Legal entity | **CHARITABLE, NON-PROFIT CORPORATION**, organised in the **District of Columbia** |
| Attorney of record | None — correspondent is the applicant itself (`graceperiodnp@gmail.com`) |
| Prosecution history | Apr 29 2026 filed; Jul 23 2026 assigned to examiner (83694); Aug 03 2026 non-final action written/e-mailed |

**Why this is the single most important line in Part B.** This is almost certainly the same
organisation as **EIN 45-2948478, "Grace Period", Washington DC, NTEE P60**, which the earlier brief
found in the IRS/ProPublica data (§2.1). *That inference is mine* — I am matching name, city and
entity type, not a verified identity, and I did not confirm the EIN from the trademark record because
TSDR does not carry it.

If that inference is right, then a **same-name 501(c)(3) in the same sector has a live federal
application on the Principal Register with a first-use date of 2010** — sixteen years of claimed
common-law use, in class 41, covering *charitable services*. It is **not registered**: it is under
examination with an outstanding non-final Office action, which means the examiner has raised at least
one issue the applicant must answer. Whether that action is a refusal, and on what ground, is in the
office action itself, which I did not retrieve.

**Inference, clearly labelled:** a pending application is not a registered right, and class 41
(education/mentoring) is not class 36 (charitable fundraising/financial assistance) or class 45. But
the goods/services wording expressly includes "**Charitable services**", the owner is a charity, and
the claimed first use is 2010. For a utility-assistance fund that would also describe itself as a
charitable service, this is a real-world confusion risk and a potential objection to *our* future
application — not because the marks are in the same class, but because the same words are used for
charitable services by a charity that has been using them since 2010.

**Do not read this as "the name is taken" or "the name is free."** Both would be wrong. What it shows
is that the name is in active use by a charity and has a live, unregistered federal application
against it.

## B.2 Common-law and program-name sweep — STILL NOT COMPLETED, and now I can prove why

**Status: no program-name finding, in either direction.** This is the category the lead flagged as
mattering more than the register, and I did not close it. What is new in this revision is that the
failure is now **diagnosed and demonstrated** rather than merely reported: the Bing path did load
this time, and I proved with a control query that it was serving a canned page, not answering. That
distinction matters, because it means no "not found" from this session may be read as a negative.

**What I was trying to find:** programs, funds or services actually called "Grace Period" (or "Grace
Period Fund" / "Grace Period Program") in utility assistance or adjacent to it — utility-run
customer assistance funds, municipal and county programs, church and community funds, hospital and
housing programs. Organisations that never registered a mark, which is exactly what the registers
miss.

### B.2.1 The recorded resume point: Bing loaded, and Bing was not answering

The Bing browser UI did render the right page — title confirmed as `"grace period" utility assistance
fund - Search`. It just was not a search result. Three independent tests show it:

| Test | Result | What it proves |
|---|---|---|
| Query `"grace period" utility assistance fund` | Body = **2,470 bytes**, "181,000 results", results = Merriam-Webster / christianity.com / Cambridge / GotQuestions / Wikipedia *Grace in Christianity* / *Grace (TV series)* / IMDb / Britannica | Phrase stripped, other terms ignored, answered as the bare word *grace* |
| Query `"grace period fund" utility bill` — a **different** query | Body = **byte-identical 2,470 bytes**, same "181,000 results", same eight results | The engine is returning a **cached fallback page**, not a result set. Two different queries cannot legitimately return identical bytes |
| **Control**: `givebutter terms of service` | Body = **97 bytes** — nav chrome only, `Skip to content / Accessibility Feedback / Rewards / … / Privacy / Terms`, **no results whatsoever** | Bing is not answering *any* query from this machine. **The control failed**, so every Bing answer this session is void |

I also tried to get past it the way a human would: loaded `https://www.bing.com/`, filled the real
search box (`input[name=q]`) with `grace period fund utility assistance program`, and pressed Enter.
The submission genuinely happened — the resulting URL was
`https://www.bing.com/search?q=grace+period+fund+utility+assistance+program&search=Submit&form=QBLH&rdr=1&rdrig=…`
— and the body came back as the same canned 181,000-result dictionary page. Bing RSS
(`&format=rss`) was re-tested and returned the same eight dictionary/entertainment items, confirming
the failure recorded in the team skill.

**So the honest statement is: the Bing path failed again, and this time I can show it failed rather
than quietly returning nothing.** I have not substituted anything for it.

### B.2.2 Every search path tried this session (all accessed 2026-11-04)

I widened the attempt well beyond Bing, because the whole point of this sweep is to know what is out
there. Nothing below produced a usable result list.

| Path | Result |
|---|---|
| Bing browser UI (URL) | 200, correct title, **canned fallback body** — see B.2.1 |
| Bing browser UI (real keystrokes into homepage search box) | Submission confirmed by URL; **same canned body** |
| Bing RSS `&format=rss` | 200, 5,934 bytes, eight dictionary/entertainment items; phrase and qualifiers stripped |
| Bing **control** query | **97-byte page, zero results — control FAILED** |
| `www.mojeek.com/search` (curl) | **403** — "your network appears to be sending automated queries" |
| `www.mojeek.com/search` (browser) | **403** — same block page |
| `www.mojeek.com/search?fmt=rss` | **403** — same block page |
| `www.qwant.com` (curl) | 200, 160 KB, but a JS shell — only Qwant's own footer links in the HTML |
| `www.qwant.com` (browser, JS rendered) | Rendered, then: **"Qwant is temporarily unavailable (FDN 22 / HTTP 403)"** |
| `search.brave.com` | **429** rate-limited |
| `www.ecosia.org` | **403** |
| `yandex.com/search` | **302** redirect (captcha gate) |
| `search.yahoo.com` | **500** |
| `search.aol.com` | **404** |
| `www.lycos.com` | **404** |
| `www.webcrawler.com` | **403** |
| `www.metacrawler.com` | **403** |
| `www.dogpile.com` (curl) | 200, 88 KB — Next.js shell, results load client-side, none in HTML |
| `www.dogpile.com` (browser, JS rendered) | Page renders and echoes the query correctly, but the results panel reads **"Search results are temporarily unavailable"** — on the quoted-phrase query *and* on a plain query. Its own error text blames a content blocker and says a reload usually clears it; a reload did not |
| `searx.tiekoetter.com`, `search.rhscz.eu`, `paulgo.io`, `priv.au`, `search.sapti.me` | **429** |
| `opnxng.com`, `searxng.world` | **000** (no connection) |
| `search.inetol.net`, `baresearch.org`, `search.hbubli.cc` | 200 but **no organic results** in the response |
| `r.jina.ai` reader proxy → Google **and** DuckDuckGo | **401** — "blocked from performing anonymous queries due to **bad IP reputation**" |
| `api.yep.com` (Ahrefs index) | **403** Cloudflare |
| `search.marginalia.nu` | 302 → `marginalia-search.com`, no organic result links (reproduces the earlier finding) |

**The pattern.** This machine's egress IP is being refused by essentially every independent web
index, and Bing — the one that still returns 200 — returns a cached page instead of answering. The
`r.jina.ai` response is the clearest single diagnostic: the block is keyed to **IP reputation**, not
to any one engine's policy. Retrying the same paths from this machine is unlikely to help; the
search has to be run from a different network, or through a paid SERP API with a key.

### B.2.3 The one index that did answer, and what it is not

The **Wikipedia search API** (`en.wikipedia.org/w/api.php`, HTTP 200) answered every query. I used it
because it was the only working index, **but it is an encyclopaedia, not a web index.** It does not
crawl charity program pages, utility tariff schedules, or county assistance funds. **Its silence is
not evidence that no program exists, and I am not presenting it as a substitute for the sweep.** It
is useful for exactly one thing here: showing how the phrase is used in the language.

| Query (exact phrase in quotes) | Total hits | What came back |
|---|---|---|
| `"Grace Period Fund"` | **0** | Nothing. No encyclopaedia article uses that as a name |
| `"grace period" utility assistance` | 21 | Every hit is the ordinary billing/legal term — loan repayment, credit cards, insurance grace periods, SIM registration, transit debt |
| `"grace period" charity fund assistance` | 15 | Same: credit cards, student loans, homeless-shelter intake, a Russian fund's loan terms, Hong Kong CSSA |
| `"grace period" shutoff assistance` | **1** | Only *Turn-off notice* |

**The single most telling result.** In the one article that connects the phrase to utility
disconnection, "grace period" is not a program — it is a **sibling term of art**, listed in the
article's *See also* alongside late fee, collection agency and eviction notice:

> "== See also ==
> Grace period
> Late fee
> Collection agency
> Eviction notice"
> — Wikipedia, *Turn-off notice*, retrieved via `action=query&prop=extracts` (accessed 2026-11-04)

That is the near-miss category in one line: in the vocabulary of disconnection policy, "grace period"
is a **period**, a thing a utility grants, not a thing a charity runs.

The only exact-phrase use **as a title** in the whole result set was an *NCIS* episode ("Grace
Period", via *List of NCIS characters*) — entertainment, not a name collision in our field.

### B.2.4 Hits recorded

The lead asked for each hit's organisation, exact program name, location, what it does, and URL.

**Clear hits — a program genuinely called Grace Period doing assistance work: NONE FOUND.**

I have to be precise about what that sentence is worth. It is a **not-found from a method that did
not run**, not a clearance. The correct reading is "unknown", not "clear". It must not be quoted as
"no one is using the name".

**Near misses — the ordinary billing term "grace period" in disconnection, credit and loan policy: DOMINANT.**
These are not name collisions. I list them because the lead asked for the category's weight to be
recorded, and because it is the answer to question 2 below.

| Organisation / source | Term as written | Context | URL |
|---|---|---|---|
| Wikipedia (encyclopaedia entry) | "Grace period" | Listed in *See also* of **Turn-off notice**, i.e. a disconnection-policy term of art | https://en.wikipedia.org/wiki/Turn-off_notice |
| Wikipedia, *Repayment plan* | "student loan 'grace period'" | Student-loan repayment | https://en.wikipedia.org/wiki/Repayment_plan |
| Wikipedia, *Credit card* | "grace period" | Card interest-free period | https://en.wikipedia.org/wiki/Credit_card |
| Wikipedia, *American Express* | "Grace card … a grace period on all purchases" | Historical card product named **Grace** | https://en.wikipedia.org/wiki/American_Express |
| Wikipedia, *Bayanihan to Heal as One Act* | "a grace period of 30 days … for the payment of all loans" | Philippine COVID statute | https://en.wikipedia.org/wiki/Bayanihan_to_Heal_as_One_Act |
| Wikipedia, *Electricity sector in Peru* / *in Armenia* | "a 23-year term and a 7.5-year grace period" | Concession-loan terms | https://en.wikipedia.org/wiki/Electricity_sector_in_Peru |
| Wikipedia, *Human rights in Hong Kong* | "subject to a grace period of 56 days" | Comprehensive Social Security Assistance residence rule | https://en.wikipedia.org/wiki/Human_rights_in_Hong_Kong |
| Wikipedia, *Homeless shelter* | "gives each family a grace period of six months to a year" | Shelter-program intake window | https://en.wikipedia.org/wiki/Homeless_shelter |
| Bing fallback page (void — see B.2.1) | — | Returned dictionary and TV-series results for *grace*; recorded only to show what the engine did | — |

Note the *Homeless shelter* and *Human rights in Hong Kong* rows: even in social-assistance writing,
"grace period" names a **time window inside someone else's program**, never the program itself. That
is the consistent pattern across all 37 encyclopaedia hits.

### B.2.5 The two questions, answered plainly

**These are my inferences, not findings of any source. Neither is a legal conclusion, and neither is
an availability conclusion.**

**1. Would a donor or a referring caseworker searching "Grace Period" plus a city plausibly land on
someone else's program before ours?**

**I cannot answer this, and I will not guess.** The question is exactly the one the sweep existed to
answer, and the sweep did not run: no engine from this machine returned a single organic result for
any place-qualified query, so I have no observation of how such a search resolves. Two things bear on
it and both point the same way, but neither settles it:

- **What is established (B.1, register work).** A District of Columbia charity named **Grace Period**
  holds a live federal application, serial **99793897**, class 041, expressly covering "**Charitable
  services**", with a claimed first use of **2010**. If our inference that this is EIN 45-2948478 is
  right, a same-name charity has sixteen years of use in charitable services. That is a real
  confusion risk whatever the open web shows.
- **What is not established.** Whether that charity, or any utility, county or church fund, actually
  uses "Grace Period" as a **program** name in utility assistance. Nobody has looked, because nobody
  could.

My practical inference, clearly labelled as inference: the risk is **plausible and unresolved**, and
it is the kind of risk that shows up on launch day in a caseworker's search bar rather than in a
register. Treat it as open, not as cleared.

**2. Is the phrase so dominated by the ordinary billing meaning that using it as a program name would
be hard to search for, independent of any conflict?**

**Yes. This one I can answer from evidence, and it is the firmer of the two findings.**

Across every index that returned anything at all, the phrase resolved to the billing/credit/loan
sense and to unrelated entertainment, never to a charitable program:

- Of 21 encyclopaedia hits for `"grace period" utility assistance`, **zero** were an assistance
  program. All were loan terms, card terms, insurance windows or statutory deferrals.
- In the one utility-disconnection article, "grace period" is a **See also** sibling of *late fee*
  and *collection agency* — a period the utility grants, not a fund anyone runs.
- The exact program-shaped phrase `"Grace Period Fund"` returned **0** hits anywhere I could look.
- Bing — when it was returning its cached page rather than nothing — answered "grace period utility
  assistance fund" with **dictionary definitions of *grace*** and a **TV series**. That is what a
  degraded but real index does with the phrase: it stops seeing the phrase at all and falls back to
  the commonest single word.

The operational consequence, in my inference: **a bare "Grace Period" is close to unsearchable in
this field.** A person typing it will be served billing definitions and an ITV crime drama. Any
program name we use will need to carry a qualifier that does the disambiguating work — the city, the
fund, or a coined element — and the page will need to be findable on *"utility bill help <city>"*
rather than on the brand. That is a naming and SEO conclusion, not a legal one, and it holds
regardless of how the collision question resolves.

**No availability conclusion is offered in either direction, and none should be inferred from this
section.**

### B.2.6 Where to pick this up

Do not re-run this from this machine; the IP is refused (B.2.2). Either run it from a normal network,
or use a paid SERP API. The query set, ready to paste:

```
"grace period" utility assistance fund
"grace period fund"
"grace period" utility bill assistance
"grace period" shutoff assistance
"grace period" "utility" assistance program
"grace period" assistance fund <mid-size US city>      ← to see how a place name resolves
site:.gov "grace period" utility assistance
site:.org "grace period" utility assistance fund
"grace period fund" church utility
```

For each hit, open the page — a program page is the evidence, not a snippet. Record organisation,
exact program name as written, location, what it does, URL.

## B.3 CIPO (Canada) — not searched, but it IS reachable (correcting the earlier assumption)

**Not searched.** Out of scope for this delegation (it was the §B.2 sweep) and out of budget. But I
spent two attempts checking reachability, because the earlier brief assumed the whole `canada.ca`
estate was unreachable and therefore treated CIPO as blocked. **That assumption is wrong, and the
correction is worth having:**

- `https://ised-isde.canada.ca/cipo/trademark-search/` → **HTTP 200**, 73,583 bytes, title *"Search -
  Canadian Trademarks Database … Canadian Intellectual Property Office"* (accessed 2026-11-04).
  **The Canadian register can be reached from this machine.**
- `https://www.ic.gc.ca/app/opic-cipo/trdmrks/srch/home?lang=eng` → **308** redirect to the page above.
- The search UI is **JavaScript-driven**, exactly like USPTO: the form is `<form id="tm-search-form">`
  and its only non-checkbox input is a hidden `lang`; the visible search field is built by JS. A plain
  `GET /cipo/trademark-search/bil-search?lang=eng&searchText=grace+period` returns a **10,540-byte
  language-selection page with no results**, so the query does not travel in the URL.

**How to actually run it:** the same way B.1.1 cracked USPTO — open the page in `agent-browser`,
`snapshot -i -c`, fill the search box, submit, then read the results list. Run a **control query
first** (a mark you know exists). Note the endpoint posts to
`/cipo/trademark-search/bil-search;jsessionid=…`, so a session cookie is required.

**Why it still matters:** if the pilot city turns out to be Canadian, this is a required follow-up,
not an optional one — the Canadian register is a separate clearance with its own
confusingly-similar-mark test, and none of Part B.1 transfers to it.

---

# What a counsel-run clearance search would still have to cover

Things I did not do, or did only partially. This is the hand-off list.

1. **The outstanding Office action on serial 99793897.** I know a non-final action issued
   2026-08-03; I did not retrieve it. Its grounds (descriptiveness? §2(e)? a cited mark?) are the
   single most informative document available about how the USPTO reads "GRACE PERIOD" for charitable
   services, and it is public. **Read it first.**
2. **A complete, class-restricted register search.** My class filter never produced a clean
   class-36-only or class-45-only list (B.1.4). Counsel should run it properly, and should also search
   **design marks, and marks containing GRACE PERIOD as an element** rather than only exact wordmarks.
3. **§2(e) descriptiveness / §2(f) analysis.** "Grace period" is an ordinary term of art in billing
   and utilities. The live application's own prosecution history is the best available evidence of how
   the Office treats it, and distinctiveness will be argued about for any utility-assistance use.
4. **Common-law and program-name use — still not run, and it needs a different network.** Utilities,
   municipal programs, church funds, nonprofit program names. B.2 now records ~25 refused paths, the
   proof that Bing serves a canned page from here, and a ready-to-paste query set at B.2.6.
   **Do not re-run this from this machine** — the block is keyed to IP reputation.
5. **State charity registrations and assumed-name / DBA filings** in the pilot state. Not attempted.
   A charity may be registered to solicit under a program name that appears in no federal register.
6. **CIPO**, if the city is Canadian. **Not searched, but reachable** —
   `ised-isde.canada.ca/cipo/trademark-search/` returns HTTP 200; the UI is JS-driven and needs
   `agent-browser` form-driving with a control query first. See B.3.
7. **Domain and social handle sweep** — only partly done in the earlier brief (§2.2, §2.3);
   `graceperiod.ca` was inconclusive and handles were never verified.
8. **A proper similarity search on close variants** — GRACE PERIOD FUND, THE GRACE PERIOD, GRACE
   PERIOD PROJECT, and phonetic equivalents. I searched only `grace period` and whatever the fuzzy
   OR-match surfaced.

**No conclusion on availability is offered here, and none should be inferred.** What the registers
show is a live, unregistered federal application for GRACE PERIOD by a District of Columbia charity,
in class 41, first use 2010, under an outstanding Office action; and no GRACE PERIOD mark in classes
36 or 45 in the results I could see. What the open web shows is: **nothing** — because the sweep did
not run. What the language shows is: **the phrase belongs to billing, not to charity.** Across every
index that answered at all, "grace period" named a period a creditor or utility grants, never a fund
anyone runs; `"Grace Period Fund"` as an exact phrase returned zero hits anywhere; and in the one
utility-disconnection article that uses it, it sits in *See also* beside *late fee* and *collection
agency*. That is a distinctiveness problem, and it is now the best-evidenced thing in Part B — but it
is **not** a clearance, and it does not answer whether some utility, county or church fund already
runs a program under the name.

