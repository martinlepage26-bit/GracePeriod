# Grace Period

A pooled utility-bill fund for one city. Donors give to a program, never to a named person, and the fund pays the utility directly for a household's shutoff notice once it has been verified against the published rules and before its cutoff date. A partner charity is the fiscal host and issues the receipts; we operate the queue under its rules.

This repository holds the pilot's only custom build: **one public program page**.

## Status: pre-launch

The page is live as a pre-launch artifact. It is **not** accepting donations and it is **not** collecting information.

- The Cover button is inactive and links to nothing.
- Intake is not built; it opens at pilot launch through the referral partner.
- The dashboard section publishes no figures because the pilot has not started.
- Grant cap, income threshold, pilot city and partner charity are placeholders reading "to be confirmed" / "set with the partner charity before launch". They are set with the partner and published before launch — never invented.

Do not promote the page as accepting gifts until the day-1 gate is cleared: written confirmation from the partner charity and its counsel that pooled gifts to a designated fund are receiptable, the utility's shutoff and moratorium rules for the pilot window, a signed partner agreement, and a clearance search on the name.

## The rest of the pilot is deliberately not code

| Component | Form |
|---|---|
| Donations and receipts | A donation platform under the partner charity's registration, Utilities as a designated fund |
| Intake | A hosted form with file upload |
| Queue and decisions | A spreadsheet with locked columns and a decision log tab |
| Vendor payment | The charity's existing payables process |
| Donor notes | An email digest to program donors |

No accounts, no database, no matching engine, no payment integration, no app.

## Running the site

Requires [Bun](https://bun.sh).

```bash
bun install
bun run dev       # local dev server
bun run publish   # build and serve on port 3000
```

`bun run go-live` deploys to the connected host when a hosting token is configured.

## Layout

- `src/routes/index.tsx` — the whole page
- `src/styles/app.css` — type, focus ring, skip link
- `src/routes/__root.tsx` — document shell
- `docs/page-copy.md` — plain copy deck of every published line, plus the placeholder table

## Editing before launch

When the city, partner charity, grant cap and income threshold are decided, the only edits needed are the placeholder strings and the footer block in `src/routes/index.tsx`, then a republish.
