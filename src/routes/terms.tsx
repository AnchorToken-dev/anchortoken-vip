import { createFileRoute } from "@tanstack/react-router";
import {
  ExternalLink,
  LegalArticle,
  LegalCrossLink,
  LegalSection,
  LegalStack,
  MailLink,
} from "@/components/legal";
import { brand, operator, socials, solana } from "@/data/content";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms of Use · Anchor Token" }],
  }),
});

function TermsPage() {
  return (
    <LegalArticle
      kicker="Legal"
      title="Terms of Use"
      lede={
        <>
          <p>
            These terms are the rules for using the official {brand.name} Token
            website at {brand.domain}. The operator is {operator.name}, who also
            operates {operator.org} (
            <ExternalLink href={operator.site}>
              {operator.site.replace("https://", "")}
            </ExternalLink>
            ), in {operator.location}.
          </p>
          <p>
            Questions about these terms: <MailLink />.
          </p>
        </>
      }
    >
      <LegalStack>
        <LegalSection id="acceptance" title="Acceptance">
          <p>
            By visiting or using {brand.domain}, you agree to these Terms of
            Use. If you do not agree, do not use the site.
          </p>
        </LegalSection>

        <LegalSection id="not-advice" title="Information only, not advice">
          <p>
            The site publishes general information about {brand.ticker}: the
            official contract address, links, project notes, and pointers to
            holder tools. That is all it is.
          </p>
          <p>
            <strong className="font-semibold text-fg">
              Nothing on this site is financial advice, investment advice, tax
              advice, or legal advice.
            </strong>{" "}
            Nothing here is an offer to sell a token, security, or other asset,
            or a solicitation to buy one. You are responsible for your own
            decisions. If you need advice, talk to a qualified professional.
          </p>
        </LegalSection>

        <LegalSection id="risk" title="Token and crypto risk">
          <p>
            Tokens and other crypto assets are risky. Prices can move fast and
            can go to zero. You can lose all of the money you use to buy them.
          </p>
          <p>
            This site does not guarantee any price, profit, or return. Nothing
            said here about the project is a promise of future results.
          </p>
        </LegalSection>

        <LegalSection id="official-addresses" title="Official addresses and links">
          <p>
            The only official contract addresses, project wallet addresses, and
            links for {brand.ticker} are the ones published on {brand.domain}.
            A message on Telegram, Discord, X, or anywhere else does not make a
            different address official.
          </p>
          <p>
            Ignore contract addresses, "support" accounts, and giveaways that
            do not match this site. Impersonators do this. We will never ask
            for your seed phrase or private keys.
          </p>
          <p>
            The official Solana contract, launched via {solana.venue}, is:
          </p>
          <p className="border border-line bg-surface-2 px-4 py-3 font-mono text-sm break-all text-fg">
            {solana.contract}
          </p>
          <p>
            {brand.ticker} is not on Robinhood Chain. Until an address is
            posted on this site, any token calling itself Anchor on Robinhood
            Chain is not us. Official community links are the Discord and X
            accounts in the footer (
            <ExternalLink href={socials.discord}>Discord</ExternalLink>
            {socials.x.map((account) => (
              <span key={account.handle}>
                {", "}
                <ExternalLink href={account.url}>{account.handle}</ExternalLink>
              </span>
            ))}
            ). Telegram is not an official channel.
          </p>
        </LegalSection>

        <LegalSection id="no-guarantees" title="No listing, liquidity, or outcome guarantee">
          <p>
            We do not promise that {brand.ticker} will be listed on any
            exchange, that liquidity will exist or continue, that the token
            will launch on Robinhood Chain or any other chain, or that any
            project goal will happen.
          </p>
          <p>
            Status wording on this site, including "not yet" or similar notes,
            is a status update. It is not a commitment.
          </p>
        </LegalSection>

        <LegalSection id="third-parties" title="Third-party services">
          <p>
            Pump.fun, Solscan, wallet apps, exchanges, Discord, and X are
            third-party services. The operator does not control them. Your use
            of those services is between you and them, under their terms.
          </p>
          <p>
            The members area, Anchor Desk, and Rug Check are separate sites on
            memecoindev.vip. Buying, selling, connecting a wallet, or signing a
            message happens there or in a wallet app, not on this site. This
            site does not connect to your wallet.
          </p>
        </LegalSection>

        <LegalSection id="conduct" title="Your conduct">
          <p>Use the site only for lawful purposes. Do not:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>disrupt the site, probe it for weaknesses, or overload it</li>
            <li>
              use the {brand.name} name, logo, or this site's content to
              impersonate the project, phish, or spread a contract address that
              is not published here
            </li>
            <li>use the site in a way that breaks the law where you are</li>
          </ul>
        </LegalSection>

        <LegalSection id="ip" title="Intellectual property">
          <p>
            The site's text, design, and {brand.name} logo are owned by the
            operator or used with permission. You may link to the site and
            quote short excerpts with credit. You may not copy the site or the
            logo to pretend you are the project.
          </p>
        </LegalSection>

        <LegalSection id="warranties" title="Disclaimer of warranties">
          <p>
            The site is provided as is and as available. We do not promise that
            it will be accurate, complete, current, secure, or always online.
            Pages we link to, including blockchain explorers, can be wrong or
            down. You use the site at your own risk.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="Limitation of liability">
          <p>
            To the fullest extent the law allows, the operator is not liable
            for lost tokens, lost money, lost data, or other damages that come
            from using the site, relying on it, or using a third-party service
            linked from it. This includes indirect and consequential damages
            and lost profits.
          </p>
          <p>
            If a law does not allow that limit, the operator's liability is
            limited to the smallest amount that law allows.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes">
          <p>
            We may update these terms by posting a new version on this page and
            changing the effective date. If you keep using the site after that
            date, you accept the update.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="Governing law">
          <p>
            These terms are governed by the laws of the State of Georgia, USA,
            without regard to conflict-of-law rules. Disputes are handled in
            the state or federal courts located in Georgia, except where a law
            that applies to you says you cannot waive a different forum.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact">
          <p>
            Email <MailLink />. The operator is {operator.name},{" "}
            {operator.location}.
          </p>
        </LegalSection>
      </LegalStack>

      <LegalCrossLink to="/privacy">Privacy Policy</LegalCrossLink>
    </LegalArticle>
  );
}
