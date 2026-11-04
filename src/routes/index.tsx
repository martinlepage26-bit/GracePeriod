import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Grace Period — a pooled utility-bill fund for one city (pilot, pre-launch)",
      },
      {
        name: "description",
        content:
          "Grace Period is a pooled utility-bill fund for one city. Donors give to a program, never to a named person; the fund pays the utility directly for a household's shutoff notice once it is verified against published rules before its cutoff date. The pilot has not launched.",
      },
    ],
  }),
  component: Home,
});

/* ------------------------------------------------------------------ */
/* Content — kept in one place so wording can be reviewed line by line */
/* ------------------------------------------------------------------ */

const STEPS: { title: string; body: string }[] = [
  {
    title: "A donor gives to Utilities — once, or monthly",
    body: "The gift carries the program and the city only. It is never attached to a named household, and no donor chooses who is helped.",
  },
  {
    title: "A shutoff notice is submitted",
    body: "A referral partner, or the household itself, submits the shutoff notice, the amount owed, the cutoff date, the account holder name, the household size and an income attestation.",
  },
  {
    title: "A caseworker checks it against the published rules",
    body: "Within one business day the caseworker records one of three outcomes: approved, declined with a reason code, or more information requested.",
  },
  {
    title: "Approved notices join a queue",
    body: "The queue is ordered by cutoff date first, then by amount. The next notice is paid when the pool covers it.",
  },
  {
    title: "The partner charity pays the utility directly",
    body: "The charity logs the payment reference. The uploaded notice is then deleted; only the verified fields and the payment reference remain.",
  },
  {
    title: "The household is told, and may leave a note",
    body: "The household gets a confirmation. It can also leave an optional one-line note for donors.",
  },
];

const RULES: string[] = [
  "The notice is dated, names the account holder, and states the amount owed and the cutoff date.",
  "The cutoff date is between 2 and 30 days out.",
  "The amount is at or below the grant cap.",
  "Household income is at or below the threshold the partner already uses.",
  "One grant per household per 12 months.",
];

const REASON_CODES: string[] = [
  "missing document",
  "past cutoff",
  "over cap",
  "over income",
  "repeat within 12 months",
];

const METRICS: { name: string; note: string }[] = [
  { name: "Notices open", note: "approved notices currently waiting in the queue." },
  { name: "Days to nearest cutoff", note: "how close the next deadline in the queue is." },
  { name: "Total owed", note: "the sum the pool is being asked to cover." },
  {
    name: "Share paid before cutoff",
    note: "the proportion of approved notices paid before their cutoff date.",
  },
  {
    name: "Median hours from submission to payment",
    note: "the middle value, not an average.",
  },
  {
    name: "Notices expired unfunded",
    note: "approved notices whose cutoff passed before the pool covered them.",
  },
  { name: "Declined, by reason", note: "counts for each of the reason codes above." },
  {
    name: "Appeals and reversals",
    note: "how many appeals were filed, and how many changed the outcome.",
  },
  { name: "Cost per case", note: "program cost divided by cases paid." },
];

/* ------------------------------------------------------------------ */

function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="min-h-dvh bg-[#faf8f4] text-[#1b1b19]">
        <SiteHeader />

        <main id="main" className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
          <Hero />
          <HowItWorks />
          <PublishedRules />
          <Cover />
          <Intake />
          <Dashboard />
          <Privacy />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

/* ----------------------------- header ----------------------------- */

function SiteHeader() {
  return (
    <header className="border-b border-[#e3ded4]">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 py-5 sm:px-8">
        <a
          href="#main"
          className="font-display text-lg font-semibold tracking-tight text-[#1b1b19] no-underline"
        >
          Grace Period
        </a>
        <p className="text-sm text-[#55524c]">
          Pilot program page &middot; Utilities
        </p>
      </div>
    </header>
  );
}

/* ------------------------------ hero ------------------------------ */

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 sm:pt-16">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfc7b8] bg-white px-3 py-1 text-xs font-semibold tracking-wide text-[#4a463f] uppercase">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-full bg-[#a8862f]"
        />
        Pre-launch — the pilot has not started
      </p>

      <h1
        id="hero-heading"
        className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-[#141412] sm:text-5xl"
      >
        A pooled{" "}
        <span className="whitespace-nowrap">utility-bill</span> fund for one
        city.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#33312d]">
        Donors give to a program, never to a named person. The fund pays the
        utility directly, for a household&rsquo;s shutoff notice that has been
        verified against published rules before its cutoff date.
      </p>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#55524c]">
        One city, one program (Utilities), one referral partner, a 90-day
        pilot. The partner charity is the fiscal host: it issues the receipts,
        owns the donation page and makes the utility payment. This page
        publishes the rules we will run under.
      </p>

      <nav aria-label="On this page" className="mt-8">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {[
            ["#how-it-works", "How it works"],
            ["#rules", "Published rules"],
            ["#cover", "Cover"],
            ["#dashboard", "Pilot dashboard"],
            ["#privacy", "Privacy"],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[#0f5257] underline decoration-[#a9c6c0] decoration-1 underline-offset-4 hover:decoration-[#0f5257]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

/* --------------------------- how it works -------------------------- */

function SectionHeading({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold tracking-[0.12em] text-[#0f5257] uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display mt-2 text-2xl font-semibold tracking-tight text-[#141412] sm:text-3xl"
      >
        {children}
      </h2>
    </div>
  );
}

function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      id="how-it-works"
      className="mt-16 scroll-mt-6 border-t border-[#e3ded4] pt-12 sm:mt-20"
    >
      <SectionHeading id="how-it-works-heading" eyebrow="Six steps">
        How it works
      </SectionHeading>

      <ol className="space-y-6">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4 sm:gap-5">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0f5257] text-sm font-semibold text-[#0f5257]"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#141412]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-[#3b3833]">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------- rules v0 ----------------------------- */

function PublishedRules() {
  return (
    <section
      aria-labelledby="rules-heading"
      id="rules"
      className="mt-16 scroll-mt-6 border-t border-[#e3ded4] pt-12 sm:mt-20"
    >
      <SectionHeading id="rules-heading" eyebrow="Version 0">
        Published rules
      </SectionHeading>

      <p className="mb-5 max-w-2xl text-base leading-relaxed text-[#3b3833]">
        A shutoff notice is approved only if all five of these are true. The
        rules are published before the pilot starts so that donors and
        households can hold the program to them.
      </p>

      <ol className="space-y-3">
        {RULES.map((rule, i) => (
          <li
            key={rule}
            className="flex gap-3 rounded-lg border border-[#e3ded4] bg-white p-4"
          >
            <span
              aria-hidden="true"
              className="text-sm font-semibold text-[#0f5257] tabular-nums"
            >
              {i + 1}.
            </span>
            <span className="text-base leading-relaxed text-[#2b2925]">
              {rule}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <PlaceholderCard label="Grant cap" />
        <PlaceholderCard label="Income threshold" />
      </div>

      <div className="mt-8 rounded-lg border border-[#e3ded4] bg-white p-5">
        <h3 className="text-base font-semibold text-[#141412]">
          Decline reason codes
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#55524c]">
          Every declined notice is recorded with one of these codes.
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {REASON_CODES.map((code) => (
            <li
              key={code}
              className="rounded-full border border-[#d8d2c6] bg-[#faf8f4] px-3 py-1 text-sm text-[#3b3833]"
            >
              {code}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-lg border border-[#e3ded4] bg-white p-5">
        <h3 className="text-base font-semibold text-[#141412]">Appeal</h3>
        <p className="mt-1.5 text-base leading-relaxed text-[#2b2925]">
          A declined household can ask for a second reviewer within 48 hours.
          Appeal outcomes are counted and published.
        </p>
      </div>
    </section>
  );
}

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[#cfc7b8] bg-[#f6f2ea] p-4">
      <h3 className="text-sm font-semibold tracking-wide text-[#4a463f] uppercase">
        {label}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-[#3b3833]">
        Set with the partner charity before launch — to be published here.
      </p>
    </div>
  );
}

/* ------------------------------ cover ------------------------------ */

function Cover() {
  const [cadence, setCadence] = useState<"once" | "monthly">("once");

  return (
    <section
      aria-labelledby="cover-heading"
      id="cover"
      className="mt-16 scroll-mt-6 border-t border-[#e3ded4] pt-12 sm:mt-20"
    >
      <SectionHeading id="cover-heading" eyebrow="Donate">
        Cover
      </SectionHeading>

      <div className="rounded-xl border border-[#d8d2c6] bg-white p-5 sm:p-7">
        <p className="max-w-2xl text-base leading-relaxed text-[#3b3833]">
          Give to Utilities. On the partner charity's donation page the
          Utilities fund is pre-selected, and the charity allocates what it
          receives under the published rules. A gift is never attached to a
          named household.
        </p>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-[#141412]">
            Gift type
          </legend>
          <div
            className="mt-2 inline-flex rounded-lg border border-[#d8d2c6] bg-[#faf8f4] p-1"
            role="group"
            aria-label="Gift type preview"
          >
            <button
              type="button"
              aria-pressed={cadence === "once"}
              onClick={() => setCadence("once")}
              className="rounded-md px-4 py-2 text-sm font-semibold text-[#3b3833] aria-pressed:bg-white aria-pressed:text-[#0f5257] aria-pressed:shadow-sm"
            >
              One-time
            </button>
            <button
              type="button"
              aria-pressed={cadence === "monthly"}
              onClick={() => setCadence("monthly")}
              className="rounded-md px-4 py-2 text-sm font-semibold text-[#3b3833] aria-pressed:bg-white aria-pressed:text-[#0f5257] aria-pressed:shadow-sm"
            >
              Monthly
            </button>
          </div>
          <p className="mt-2 text-sm text-[#55524c]">
            This toggle is a preview of the choice only. It does not submit
            anything and takes no payment.
          </p>
        </fieldset>

        <div className="mt-6">
          <button
            type="button"
            aria-disabled="true"
            aria-describedby="cover-inactive-note"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-[#d8d2c6] bg-[#ece7dc] px-6 py-3 text-base font-semibold text-[#5a554c]"
          >
            Cover
            <span className="text-sm font-normal">
              (not available yet)
            </span>
          </button>

          <p
            id="cover-inactive-note"
            className="mt-3 max-w-2xl text-base leading-relaxed text-[#3b3833]"
          >
            Donations open when the partner charity and the published rules are
            confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ intake ----------------------------- */

function Intake() {
  return (
    <section
      aria-labelledby="intake-heading"
      id="intake"
      className="mt-12 scroll-mt-6"
    >
      <h2
        id="intake-heading"
        className="font-display text-xl font-semibold tracking-tight text-[#141412] sm:text-2xl"
      >
        Need help with a shutoff notice?
      </h2>

      <div className="mt-4 rounded-xl border border-[#d8d2c6] bg-white p-5 sm:p-7">
        <p className="max-w-2xl text-base leading-relaxed text-[#3b3833]">
          Households do not apply on this page. At launch, notices are
          submitted through the referral partner, so that a caseworker can
          check them against the published rules.
        </p>

        <p className="mt-5">
          <span
            role="link"
            tabIndex={0}
            aria-disabled="true"
            aria-describedby="intake-inactive-note"
            className="inline-block cursor-not-allowed rounded-lg border border-[#d8d2c6] bg-[#f6f2ea] px-5 py-3 text-base font-semibold text-[#5a554c]"
          >
            Submit a shutoff notice
          </span>
        </p>

        <p
          id="intake-inactive-note"
          className="mt-3 max-w-2xl text-base leading-relaxed text-[#3b3833]"
        >
          Intake opens at pilot launch, through our referral partner.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- dashboard ---------------------------- */

function Dashboard() {
  return (
    <section
      aria-labelledby="dashboard-heading"
      id="dashboard"
      className="mt-16 scroll-mt-6 border-t border-[#e3ded4] pt-12 sm:mt-20"
    >
      <SectionHeading id="dashboard-heading" eyebrow="Figures">
        Pilot dashboard — updated weekly
      </SectionHeading>

      <div className="rounded-lg border border-[#0f5257]/25 bg-[#eef4f2] p-5">
        <p className="text-base leading-relaxed font-medium text-[#103a3c]">
          The pilot has not started, so there are no figures yet.
        </p>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3b3833]">
        Once the pilot runs, these are the measures published here each week:
      </p>

      <ul className="mt-4 divide-y divide-[#e3ded4] rounded-lg border border-[#e3ded4] bg-white">
        {METRICS.map((metric) => (
          <li
            key={metric.name}
            className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="text-base font-semibold text-[#141412]">
              {metric.name}
            </span>
            <span className="text-sm text-[#55524c] sm:max-w-md sm:text-right">
              {metric.note}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#55524c]">
        Every published figure is an aggregate with a minimum of five cases per
        figure. Nothing smaller is published, so that no single household can be
        identified from the numbers.
      </p>
    </section>
  );
}

/* ----------------------------- privacy ----------------------------- */

function Privacy() {
  return (
    <section
      aria-labelledby="privacy-heading"
      id="privacy"
      className="mt-16 scroll-mt-6 border-t border-[#e3ded4] pt-12 sm:mt-20"
    >
      <SectionHeading id="privacy-heading" eyebrow="Data">
        Privacy
      </SectionHeading>

      <div className="space-y-4">
        <PrivacyItem title="What is collected">
          The shutoff notice file; the amount owed; the cutoff date; the
          account holder name; household size; an income attestation; and one
          contact method so the household can be told the outcome. A household
          may add an optional one-line note for donors.
        </PrivacyItem>

        <PrivacyItem title="What is deleted, and when">
          The uploaded notice file is deleted at verification — once the
          verified fields are recorded, the file itself is not kept. The
          household&rsquo;s contact method is deleted 90 days after payment.
        </PrivacyItem>

        <PrivacyItem title="What is published">
          Aggregates only, with a minimum of five cases per published figure.
          No individual case is ever shown on this page or in the weekly
          dashboard.
        </PrivacyItem>

        <PrivacyItem title="What is never public">
          Names, addresses, and donor notes tied to amounts. Donors never
          receive a household&rsquo;s identity, and households are not named in
          any report.
        </PrivacyItem>
      </div>
    </section>
  );
}

function PrivacyItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e3ded4] bg-white p-5">
      <h3 className="text-base font-semibold text-[#141412]">{title}</h3>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#3b3833]">
        {children}
      </p>
    </div>
  );
}

/* ------------------------------ footer ----------------------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-[#e3ded4] bg-[#f4f0e8]">
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8">
        <p className="text-base font-semibold text-[#141412]">
          Pilot not yet launched — day-1 legal and rules checks in progress.
        </p>

        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-[#4a463f]">Location</dt>
            <dd className="text-[#3b3833]">Pilot city: to be confirmed</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#4a463f]">Program</dt>
            <dd className="text-[#3b3833]">Utilities — one city, 90-day pilot</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#4a463f]">Fiscal host</dt>
            <dd className="text-[#3b3833]">
              Partner charity — to be confirmed. It issues receipts and makes
              the utility payment.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#4a463f]">Contact</dt>
            <dd className="text-[#3b3833]">
              To be confirmed — a program contact will be published here before
              launch.
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-[#6b665c]">
          This page publishes the program rules and status only. It takes no
          donations, collects no information, and runs no analytics.
        </p>
      </div>
    </footer>
  );
}
