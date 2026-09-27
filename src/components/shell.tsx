import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Anchor,
  ArrowUpRight,
  Check,
  Copy,
  ShieldAlert,
  Clock,
} from "lucide-react";
import { brand, socials } from "@/data/content";
import type { WalletGroup } from "@/data/content";

const nav = [
  { to: "/", label: "Robinhood", primary: true },
  { to: "/solana", label: "Solana", primary: false },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src="/logo.svg"
                alt=""
                width={40}
                height={40}
                className="size-10 drop-shadow-[0_0_8px_rgba(0,255,102,0.55)]"
              />
              <span className="font-display text-2xl tracking-wide text-neon [text-shadow:0_0_12px_rgba(0,255,102,0.45)]">
                {brand.name.toUpperCase()}
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <ChainPill to="/" label="Robinhood" tone="primary" />
              <ChainPill to="/solana" label="Solana" tone="muted" />
            </div>
          </div>
          <nav className="flex gap-2" aria-label="Pages">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "inline-flex min-h-11 items-center border border-neon bg-neon px-4 text-sm font-semibold text-neon-ink",
                }}
                inactiveProps={{
                  className:
                    "inline-flex min-h-11 items-center border border-line bg-surface px-4 text-sm font-semibold text-fg hover:border-neon",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Official site · {brand.domain}. If it is not linked here, it is not
            us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={socials.discord}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fg hover:text-neon"
            >
              Discord
            </a>
            <a
              href={socials.x}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fg hover:text-neon"
            >
              X / @Draco4226
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChainPill({
  to,
  label,
  tone,
}: {
  to: "/" | "/solana";
  label: string;
  tone: "primary" | "muted";
}) {
  const base =
    tone === "primary"
      ? "border-neon/50 bg-neon/10 text-neon"
      : "border-line bg-surface-2 text-muted";
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${base}`}
    >
      <Anchor className="size-3" aria-hidden="true" />
      {label}
    </Link>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-neon uppercase">
      {children}
    </p>
  );
}

export function SectionTitle({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-2 font-display text-4xl tracking-wide text-fg">{title}</h2>
      {children ? <p className="mt-3 text-muted">{children}</p> : null}
    </div>
  );
}

export function StatusBadge({
  live,
  label,
}: {
  live: boolean;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-bold tracking-wide uppercase ${
        live
          ? "border-neon/40 bg-neon/10 text-neon"
          : "border-amber/40 bg-amber/10 text-amber"
      }`}
    >
      <span
        className={`size-2 rounded-full ${
          live
            ? "bg-neon shadow-[0_0_8px_var(--color-neon)] animate-pulse"
            : "bg-amber"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export function TelegramCallout() {
  return (
    <aside className="border border-warn/40 bg-surface px-5 py-5 sm:px-6">
      <div className="flex items-start gap-3">
        <ShieldAlert
          className="mt-0.5 size-5 shrink-0 text-warn"
          aria-hidden="true"
        />
        <div>
          <h2 className="font-display text-2xl tracking-wide text-fg">
            Telegram is not us
          </h2>
          <p className="mt-2 text-muted">
            Official talk is X (@Draco4226) and the Discord linked on this site.
            Anyone claiming to be the Anchor creator on Telegram is a scammer.
            Check this site before you trust a message or a contract address.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function ComingSoonBanner({ children }: { children: ReactNode }) {
  return (
    <aside className="border border-amber/40 bg-surface px-5 py-5 sm:px-6">
      <div className="flex items-start gap-3">
        <Clock className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden="true" />
        <div>
          <h2 className="font-display text-2xl tracking-wide text-fg">
            Coming soon — not launching for a while
          </h2>
          <p className="mt-2 text-muted">{children}</p>
        </div>
      </div>
    </aside>
  );
}

export function CopyButton({
  value,
  label = "Copy",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex min-h-11 items-center gap-2 border border-line bg-surface-2 px-4 text-sm font-semibold text-fg hover:border-neon"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? (
        <Check className="size-4 text-neon" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {copied ? "Copied" : label}
    </button>
  );
}

export function OutLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "bg-neon text-neon-ink hover:bg-emerald shadow-[0_0_20px_rgba(0,255,102,0.35)]"
      : "border border-line bg-surface text-fg hover:border-neon";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold ${cls}`}
    >
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function PlaceholderBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-dashed border-amber/50 bg-surface p-5">
      <p className="text-xs font-semibold tracking-widest text-amber uppercase">
        Placeholder — Mark to fill
      </p>
      <h3 className="mt-2 font-display text-2xl tracking-wide text-fg">{title}</h3>
      <div className="mt-2 text-muted">{children}</div>
    </div>
  );
}

export function WalletList({ groups }: { groups: WalletGroup[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <section key={group.name} className="border border-line bg-surface">
          <header className="border-b border-line px-5 py-4">
            <h3 className="font-display text-2xl tracking-wide">{group.name}</h3>
            {group.detail ? (
              <p className="mt-1 text-sm text-muted">{group.detail}</p>
            ) : null}
          </header>
          <ul>
            {group.lines.map((line) => (
              <li
                key={`${group.name}-${line.chain}-${line.address}`}
                className="flex flex-col gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-widest text-neon uppercase">
                    {line.chain}
                    {line.placeholder ? " · placeholder" : ""}
                  </p>
                  <p className="mt-1 font-mono text-sm break-all text-fg">
                    {line.address}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <CopyButton value={line.address} />
                  {line.explorer ? (
                    <a
                      href={line.explorer}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 border border-line px-4 text-sm font-semibold text-fg hover:border-neon"
                    >
                      Explorer
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
