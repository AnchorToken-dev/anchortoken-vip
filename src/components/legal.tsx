import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Kicker } from "@/components/shell";
import { contactEmail, legalEffectiveDate } from "@/data/content";

export const legalLinkClass =
  "font-semibold text-fg underline underline-offset-2 hover:text-neon";

export function LegalArticle({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 break-words">
      <header>
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-semibold tracking-wide text-muted uppercase">
          Effective {legalEffectiveDate}
        </p>
        <div className="mt-4 flex flex-col gap-3 text-muted">{lede}</div>
      </header>
      {children}
    </article>
  );
}

export function LegalStack({ children }: { children: ReactNode }) {
  return (
    <div className="divide-y divide-line border border-line bg-surface">
      {children}
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="px-5 py-5 sm:px-6">
      <h2 id={id} className="font-display text-2xl tracking-wide text-fg">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-muted">{children}</div>
    </section>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={legalLinkClass}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function MailLink() {
  return (
    <a
      href={`mailto:${contactEmail}`}
      className={`${legalLinkClass} break-all`}
    >
      {contactEmail}
    </a>
  );
}

export function LegalCrossLink({
  to,
  children,
}: {
  to: "/terms" | "/privacy";
  children: ReactNode;
}) {
  return (
    <p className="text-sm text-muted">
      <Link to={to} className={legalLinkClass}>
        {children}
      </Link>
    </p>
  );
}
