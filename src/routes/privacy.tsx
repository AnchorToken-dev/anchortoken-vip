import { createFileRoute } from "@tanstack/react-router";
import {
  ExternalLink,
  LegalArticle,
  LegalCrossLink,
  LegalSection,
  LegalStack,
  MailLink,
} from "@/components/legal";
import { brand, operator, tools } from "@/data/content";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy · Anchor Token" }],
  }),
});

function PrivacyPage() {
  return (
    <LegalArticle
      kicker="Legal"
      title="Privacy Policy"
      lede={
        <>
          <p>
            This policy describes what {brand.domain} itself does with
            information. The operator is {operator.name}, who also operates{" "}
            {operator.org} (
            <ExternalLink href={operator.site}>
              {operator.site.replace("https://", "")}
            </ExternalLink>
            ), in {operator.location}.
          </p>
          <p>
            It does not describe Pump.fun, Solscan, Discord, X, your wallet
            app, or the separate {operator.org} sites linked below. Those
            services have their own policies.
          </p>
        </>
      }
    >
      <LegalStack>
        <LegalSection id="hosting" title="Hosting">
          <p>
            The site is hosted on{" "}
            <ExternalLink href="https://vercel.com">Vercel</ExternalLink>. To
            deliver a page and protect the service, the host processes ordinary
            connection data: your IP address, the date and time, the page you
            requested, and basic browser details such as the user agent.
          </p>
          <p>
            This site's code does not add its own analytics on top of hosting,
            and we do not use hosting logs to build an advertising profile of
            you. How Vercel handles that connection data is described in{" "}
            <ExternalLink href="https://vercel.com/legal/privacy">
              Vercel's privacy policy
            </ExternalLink>
            .
          </p>
        </LegalSection>

        <LegalSection id="cookies" title="Cookies and analytics">
          <p>
            This site does not set cookies. It does not include analytics,
            advertising, or tracking scripts. It does not store information in
            your browser with localStorage or sessionStorage.
          </p>
          <p>
            Your browser may still keep its own cache of pages and font files.
            We do not use that cache to recognize you.
          </p>
        </LegalSection>

        <LegalSection id="fonts" title="Fonts">
          <p>
            Pages load the Oswald and Source Sans 3 typefaces from Google Fonts
            (fonts.googleapis.com and fonts.gstatic.com). Your browser contacts
            Google to download those files. Google receives the technical data
            that comes with that request, including your IP address.
          </p>
          <p>
            How Google handles that data is covered by{" "}
            <ExternalLink href="https://policies.google.com/privacy">
              Google's privacy policy
            </ExternalLink>
            . We do not use the font request to identify you on this site.
          </p>
        </LegalSection>

        <LegalSection id="email" title="Email">
          <p>
            The site does not have a contact form or an account system. If you
            choose to email <MailLink />, the message goes through your email
            provider to our inbox. The website itself does not store it.
          </p>
          <p>
            We use what you send (your email address and the message) only to
            reply and to handle the issue you raised. Do not send a seed
            phrase, private key, or password. We will not ask for them.
          </p>
          <p>
            If you want us to delete an email you sent, write to that same
            address and say so.
          </p>
        </LegalSection>

        <LegalSection id="wallets" title="Wallets">
          <p>
            This site does not connect to a wallet. It does not ask for a
            signature, and it does not receive your wallet address, token
            balance, or seed phrase. Contract addresses and project wallet
            addresses shown here are public project information we publish.
            They are not your wallet.
          </p>
          <p>
            The Copy buttons use your browser's clipboard to copy a public
            address onto your device. That copy stays on your device. It is not
            sent to our server.
          </p>
          <p>
            Links to holder tools leave this site. Signing in with a Solana
            wallet, if you do it, happens in your browser on those other sites:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {tools.map((tool) => (
              <li key={tool.key}>
                <ExternalLink href={tool.url}>
                  {tool.title} ({tool.host})
                </ExternalLink>
              </li>
            ))}
          </ul>
          <p>
            We do not receive that signature on {brand.domain}. Read the policy
            on the site you open before you connect a wallet.
          </p>
        </LegalSection>

        <LegalSection id="no-sale" title="We do not sell personal information">
          <p>
            We do not sell personal information, and we do not share it for
            advertising. The only third parties that receive technical data
            just because you load a page are our host, Vercel, and Google
            Fonts, as described above. If you email us, your email provider and
            ours handle delivery of that message.
          </p>
        </LegalSection>

        <LegalSection id="children" title="Children's privacy">
          <p>
            This site is not directed at children under 13. It is a crypto
            information site meant for adults. We do not knowingly collect
            personal information from children.
          </p>
          <p>
            If you believe a child has emailed us personal information, contact
            us and we will delete it.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes">
          <p>
            We may update this policy by posting a new version on this page and
            changing the effective date. The date at the top is the version
            that applies.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact">
          <p>
            Privacy questions: email <MailLink />. The operator is{" "}
            {operator.name}, {operator.location}.
          </p>
        </LegalSection>
      </LegalStack>

      <LegalCrossLink to="/terms">Terms of Use</LegalCrossLink>
    </LegalArticle>
  );
}
