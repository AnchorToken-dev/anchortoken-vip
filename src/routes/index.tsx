import { createFileRoute, Link } from "@tanstack/react-router";
import {
  contactEmail,
  faqs,
  MEMBERS_MIN,
  robinhood,
  rules,
  socials,
  solana,
  tools,
} from "@/data/content";
import {
  ComingSoonBanner,
  CopyButton,
  Kicker,
  OutLink,
  SectionTitle,
  StatusBadge,
  TelegramCallout,
} from "@/components/shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Anchor Token ($ANCHOR) · Official · Live on Solana",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>Official $ANCHOR · Solana</Kicker>
            <StatusBadge live label={solana.statusLabel} />
          </div>
          <h1 className="mt-3 font-display text-6xl tracking-wide text-fg">
            <span className="bg-gradient-to-b from-fg to-neon bg-clip-text text-transparent">
              ANCHOR
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fg">
            Official anti-rug token, live on Solana via Pump.fun. Zero dev
            allocation. Holders get the members area and Anchor Desk.
          </p>
          <p className="mt-3 max-w-xl text-muted">{solana.statusDetail}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <OutLink href={solana.pumpUrl}>Buy on Pump.fun</OutLink>
            <OutLink href={socials.discord} variant="ghost">
              Join Discord
            </OutLink>
            {socials.x.map((account) => (
              <OutLink key={account.handle} href={account.url} variant="ghost">
                Follow {account.handle}
              </OutLink>
            ))}
            <Link
              to="/solana"
              className="inline-flex min-h-11 items-center border border-line bg-surface px-4 text-sm font-semibold text-muted hover:border-neon hover:text-fg"
            >
              Token details →
            </Link>
          </div>
        </div>
        <figure className="w-fit justify-self-center lg:justify-self-end">
          <img
            src="/anchor-coin.png"
            alt="Anchor Token logo"
            width={256}
            height={256}
            className="size-52 sm:size-64 shrink-0 aspect-square object-contain max-w-full drop-shadow-[0_0_24px_rgba(0,255,102,0.4)]"
          />
        </figure>
      </section>

      <section>
        <SectionTitle kicker="Contract" title="Official contract address">
          The only official $ANCHOR. Copy it from this site, nowhere else.
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
            <OutLink href={solana.solscanUrl} variant="ghost">
              Solscan
            </OutLink>
          </div>
        </div>
      </section>

      <TelegramCallout />

      <section>
        <SectionTitle kicker="Holder tools" title="What holding gets you">
          Hold at least {MEMBERS_MIN} and sign in with your Solana wallet. One
          free signed message, no transaction, never your seed phrase.
        </SectionTitle>
        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col bg-surface p-5 hover:bg-surface-2"
            >
              <p className="text-xs font-semibold tracking-widest text-neon uppercase">
                {tool.kicker}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide text-fg">
                {tool.title}
              </h3>
              <p className="mt-2 flex-1 text-muted">{tool.body}</p>
              <p className="mt-4 text-sm font-semibold break-all text-neon group-hover:underline">
                {tool.host} →
              </p>
            </a>
          ))}
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

      <ComingSoonBanner>
        {robinhood.statusDetail} {robinhood.launchNote}
      </ComingSoonBanner>

      <section>
        <SectionTitle kicker="FAQ" title="Straight answers">
          More token detail lives on the Solana page.
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
        <p className="mt-4 text-sm text-muted">
          Having issues? Email{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold break-all text-fg hover:text-neon"
          >
            {contactEmail}
          </a>
        </p>
      </section>
    </div>
  );
}
