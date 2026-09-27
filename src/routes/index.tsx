import { createFileRoute, Link } from "@tanstack/react-router";
import {
  faqs,
  robinhood,
  rules,
  socials,
  wallets,
} from "@/data/content";
import {
  ComingSoonBanner,
  Kicker,
  OutLink,
  PlaceholderBox,
  SectionTitle,
  StatusBadge,
  TelegramCallout,
  WalletList,
} from "@/components/shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "Anchor Token · Robinhood-chain launch (coming soon) · Official",
      },
    ],
  }),
});

function Home() {
  const robinhoodWallets = wallets.filter((g) =>
    g.name.toLowerCase().includes("robinhood"),
  );

  return (
    <div className="flex flex-col gap-14">
      <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>Primary launch · Robinhood chain</Kicker>
            <StatusBadge live={false} label={robinhood.statusLabel} />
          </div>
          <h1 className="mt-3 font-display text-6xl tracking-wide text-fg">
            <span className="bg-gradient-to-b from-fg to-neon bg-clip-text text-transparent">
              ANCHOR
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fg">
            Official anti-rug launch on Robinhood chain. Zero dev allocation.
            Same rules as the Solana track — just not live yet.
          </p>
          <p className="mt-3 max-w-xl text-muted">{robinhood.statusDetail}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <OutLink href={socials.discord}>Join Discord</OutLink>
            <OutLink href={socials.x} variant="ghost">
              Follow on X
            </OutLink>
            <Link
              to="/solana"
              className="inline-flex min-h-11 items-center border border-line bg-surface px-4 text-sm font-semibold text-muted hover:border-neon hover:text-fg"
            >
              Solana / Pump.fun track →
            </Link>
          </div>
        </div>
        <figure className="justify-self-center lg:justify-self-end">
          <img
            src="/logo.svg"
            alt="Anchor Token logo"
            width={192}
            height={192}
            className="size-48 drop-shadow-[0_0_24px_rgba(0,255,102,0.4)]"
          />
        </figure>
      </section>

      <ComingSoonBanner>
        The Robinhood-chain contract is not published yet. Do not buy any token
        claiming to be Anchor on Robinhood until the address appears on this
        page. Meanwhile the Solana Pump.fun Anchor remains live and advertised.
      </ComingSoonBanner>

      <TelegramCallout />

      <section>
        <SectionTitle kicker="Contract" title="Robinhood contract address">
          Empty until launch. Mark will paste the CA here the moment it is live.
        </SectionTitle>
        <div className="mt-6">
          <PlaceholderBox title="Robinhood CA — TBD">
            <p>
              Venue: {robinhood.venue}. Supply / decimals:{" "}
              {robinhood.totalSupply} / {robinhood.decimals}.
            </p>
            <p className="mt-2">{robinhood.launchNote}</p>
          </PlaceholderBox>
        </div>
      </section>

      <section>
        <SectionTitle kicker="The rules" title="How Anchor launches">
          Official anti-rug posture — same commitments as MemecoinDev launches.
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
        <SectionTitle kicker="Wallets" title="Robinhood / EVM wallets">
          Confirm before launch. Placeholder addresses are marked.
        </SectionTitle>
        <div className="mt-6">
          <WalletList groups={robinhoodWallets} />
        </div>
      </section>

      <section>
        <SectionTitle kicker="FAQ" title="Straight answers">
          More detail lives on the Solana page for the live Pump.fun track.
        </SectionTitle>
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
