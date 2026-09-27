import { createFileRoute, Link } from "@tanstack/react-router";
import { faqs, rules, socials, solana, wallets } from "@/data/content";
import {
  CopyButton,
  Kicker,
  OutLink,
  SectionTitle,
  StatusBadge,
  TelegramCallout,
  WalletList,
} from "@/components/shell";

export const Route = createFileRoute("/solana")({
  component: SolanaPage,
  head: () => ({
    meta: [
      {
        title: "Anchor Token · Solana / Pump.fun · Official",
      },
    ],
  }),
});

function SolanaPage() {
  const solWallets = wallets.filter(
    (g) =>
      g.name.toLowerCase().includes("phantom") ||
      g.name.toLowerCase().includes("pump"),
  );

  return (
    <div className="flex flex-col gap-14">
      <section>
        <div className="flex flex-wrap items-center gap-3">
          <Kicker>Secondary track · Solana</Kicker>
          <StatusBadge live label={solana.statusLabel} />
        </div>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl">
          Fair launch via Pump.fun
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-fg">{solana.statusDetail}</p>
        <p className="mt-3 max-w-2xl text-muted">
          Zero dev allocations. Zero insider snipes. Deployed via standard
          Pump.fun protocol tools. Still advertising while the Robinhood-chain
          primary launch is prepared.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <OutLink href={solana.pumpUrl}>Open on Pump.fun</OutLink>
          <OutLink href={solana.solscanUrl} variant="ghost">
            View on Solscan
          </OutLink>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center border border-line bg-surface px-4 text-sm font-semibold text-muted hover:border-neon hover:text-fg"
          >
            ← Robinhood primary
          </Link>
        </div>
      </section>

      <TelegramCallout />

      <section>
        <SectionTitle kicker="Contract" title="Solana contract address">
          Copy only from this site. Launched {solana.launched}.
        </SectionTitle>
        <div className="mt-6 border border-neon/30 bg-surface p-5">
          <p className="text-xs font-semibold tracking-widest text-neon uppercase">
            {solana.venue} · {solana.chain}
          </p>
          <p className="mt-3 font-mono text-sm break-all text-fg sm:text-base">
            {solana.contract}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CopyButton value={solana.contract} label="Copy CA" />
            <OutLink href={solana.pumpUrl} variant="ghost">
              Pump.fun
            </OutLink>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle kicker="Supply" title="Fair launch supply split">
          1,000,000,000 total tokens. 100% public bonding curve. 0% dev / team.
        </SectionTitle>
        <div className="mt-6 border border-line bg-surface p-5">
          <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-neon to-emerald" />
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
            <li className="flex items-center gap-2 text-fg">
              <span className="size-2.5 rounded-full bg-neon shadow-[0_0_8px_var(--color-neon)]" />
              100% Public Bonding Curve (Pump.fun)
            </li>
            <li className="flex items-center gap-2 text-muted">
              <span className="size-2.5 rounded-full bg-warn" />
              0% Dev / Team Allocation
            </li>
          </ul>
        </div>
      </section>

      <section>
        <SectionTitle kicker="On-chain" title="Verify everything">
          Transparent from day one. Here is exactly what you are holding.
        </SectionTitle>
        <dl className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
          {solana.facts.map((fact) => (
            <div key={fact.label} className="bg-surface px-5 py-4">
              <dt className="text-xs font-semibold tracking-widest text-neon uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-fg">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 font-semibold text-neon">
          No hidden allocations. No games. Verify everything on-chain. Stay
          anchored. ⚓
        </p>
      </section>

      <section>
        <SectionTitle kicker="Promises" title="What the creator commits to">
          Personal, simple, and strict — same anti-rug tone as MemecoinDev.
        </SectionTitle>
        <ol className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
          {rules.map((rule, index) => (
            <li key={rule.title} className="bg-surface p-5">
              <p className="font-display text-xl tracking-wide text-neon">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide">
                {rule.title}
              </h3>
              <p className="mt-2 text-muted">{rule.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionTitle kicker="Wallets" title="Solana wallets to watch">
          Deployer and related wallets for the Pump.fun track.
        </SectionTitle>
        <div className="mt-6">
          <WalletList groups={solWallets} />
        </div>
      </section>

      <section>
        <SectionTitle kicker="Community" title="Join the community">
          Discord and X only. Telegram is not official.
        </SectionTitle>
        <div className="mt-6 flex flex-wrap gap-2">
          <OutLink href={socials.discord}>Join Discord</OutLink>
          {socials.x.map((account) => (
            <OutLink key={account.handle} href={account.url} variant="ghost">
              Follow {account.handle}
            </OutLink>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle kicker="FAQ" title="Straight answers" />
        <dl className="mt-6 divide-y divide-line border border-line bg-surface">
          {faqs.map((item) => (
            <div key={item.q} className="px-5 py-5">
              <dt className="font-display text-xl tracking-wide text-fg">
                {item.q}
              </dt>
              <dd className="mt-2 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
