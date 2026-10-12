/** Central copy + placeholders for Anchor Token dual-chain site. */

export const brand = {
  name: "Anchor",
  ticker: "$ANCHOR",
  domain: "anchortoken.vip",
  tagline: "Zero-dev allocation. Stay anchored.",
} as const;

/** Contact for holders who are stuck (sign-in, desk, Rug Check). */
export const contactEmail = "memecoindev@mail.grokbot.com";

/** Holder tools on memecoindev.vip. */
export const MEMBERS_MIN = "500,000 $ANCHOR";
export const tools = [
  {
    key: "members",
    kicker: "Holders only",
    title: "Members area",
    url: "https://memecoindev.vip/members",
    host: "memecoindev.vip/members",
    body: "Sign in with your Solana wallet (one free signed message, no transaction). Hold at least 500,000 $ANCHOR to get in: early tools and notes before they go public.",
  },
  {
    key: "desk",
    kicker: "Holders only",
    title: "Anchor Desk",
    url: "https://desk.memecoindev.vip",
    host: "desk.memecoindev.vip",
    body: "A clean trading desk: live scanner with risk grades, Quick Buy/Sell via Jupiter (you sign every trade), limit orders, wallet watch alerts for dev dumps and pulled liquidity, and a trade journal with P&L.",
  },
  {
    key: "rugcheck",
    kicker: "Free for everyone",
    title: "Rug Check",
    url: "https://rugcheck.memecoindev.vip",
    host: "rugcheck.memecoindev.vip",
    body: "Paste a contract address and get an A–F risk grade from automated contract checks before you trust a coin.",
  },
] as const;

export const socials = {
  discord: "https://discord.gg/UdJPfnHQ",
  x: [
    { handle: "@Draco4226", url: "https://x.com/Draco4226" },
    { handle: "@Memecoindev46", url: "https://x.com/Memecoindev46" },
  ],
  /** Telegram is not an official channel — scammers impersonate there. */
  telegram: null as string | null,
} as const;

export const rules = [
  {
    title: "No dev allocation",
    body: "Zero team tokens at creation. The bonding curve is 100% public.",
  },
  {
    title: "No front-running",
    body: "Dev does not take the first or second buy slot. Public enters first.",
  },
  {
    title: "Buys are on-chain",
    body: "If the creator buys, that buy is live on chain where anyone can verify it.",
  },
  {
    title: "No privileged keys",
    body: "No mint backdoors, no freeze authority, no hidden LP control.",
  },
] as const;

/** Robinhood Chain is live, but $ANCHOR is not on it yet. */
export const robinhood = {
  status: "not_on_chain" as const,
  statusLabel: "Not on Robinhood Chain yet",
  statusDetail:
    "Robinhood Chain is live. $ANCHOR is not on it yet. If that changes, the contract will appear on this page first.",
  chain: "Robinhood Chain",
  venue: "TBD",
  /** PLACEHOLDER: Mark fills if/when $ANCHOR launches there */
  contract: null as string | null,
  contractExplorer: null as string | null,
  tradeUrl: null as string | null,
  totalSupply: "TBD",
  decimals: "TBD",
  launchNote:
    "Until an address is posted here, any token calling itself Anchor on Robinhood Chain is not us.",
};

/** Solana / Pump.fun: the live, official $ANCHOR. */
export const solana = {
  status: "live" as const,
  statusLabel: "LIVE",
  statusDetail:
    "Launched Sept 6, 2026 via Pump.fun · 100% fair bonding curve",
  chain: "Solana",
  venue: "Pump.fun",
  contract: "3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  pumpUrl:
    "https://pump.fun/coin/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  solscanUrl:
    "https://solscan.io/token/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  totalSupply: "1,000,000,000",
  decimals: "6",
  launched: "Sept 6, 2026",
  facts: [
    { label: "Token Name", value: "Anchor" },
    { label: "Blockchain", value: "Solana" },
    { label: "Launch", value: "Pump.fun — 100% fair launch" },
    { label: "Decimals", value: "6" },
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Presale / Private Sale", value: "None" },
    { label: "Team Allocation", value: "None — team buys on the open market" },
    { label: "Liquidity", value: "Pump.fun bonding curve until graduation" },
    { label: "Mint Authority", value: "Pump.fun protocol (standard)" },
    { label: "Freeze Authority", value: "Disabled" },
  ] as const,
};

export type WalletLine = {
  chain: string;
  address: string;
  explorer?: string;
  /** true when Mark still needs to confirm / replace */
  placeholder?: boolean;
};

export type WalletGroup = {
  name: string;
  detail?: string;
  lines: WalletLine[];
};

const solscan = (address: string) => `https://solscan.io/account/${address}`;

/**
 * Wallets pulled from Memecoindev where shared; Robinhood entries marked
 * placeholder until Mark confirms they apply to Anchor Token specifically.
 */
export const wallets: WalletGroup[] = [
  {
    name: "Phantom (Solana)",
    lines: [
      {
        chain: "SOL",
        address: "5LMbeHMUNGtpoy8cduZQ8rLNVuDWLj7iGXUsYQgdaztr",
        explorer: solscan("5LMbeHMUNGtpoy8cduZQ8rLNVuDWLj7iGXUsYQgdaztr"),
      },
    ],
  },
  {
    name: "Pump.fun deployer · Draco4226",
    detail: "Solana Pump.fun track deployer / related wallet.",
    lines: [
      {
        chain: "SOL",
        address: "CzV52d371a6VRCkfV7jdPNtT5Tdkpty4Yn1pskCdk4Ki",
        explorer: solscan("CzV52d371a6VRCkfV7jdPNtT5Tdkpty4Yn1pskCdk4Ki"),
      },
    ],
  },
  {
    name: "Robinhood / Gekko (EVM)",
    detail:
      "PLACEHOLDER — confirm this is the Anchor Robinhood-chain wallet before launch.",
    lines: [
      {
        chain: "EVM",
        address: "0x4743Ff4b528A1861e26f4d6016b3EFB72e8C6Df3",
        placeholder: true,
      },
    ],
  },
];

export const faqs = [
  {
    q: "What is the official $ANCHOR contract?",
    a: "Solana: 3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump, launched Sept 6 via Pump.fun with 0% dev allocation. That is the only official $ANCHOR. Copy it from this site.",
  },
  {
    q: "Is $ANCHOR on Robinhood Chain?",
    a: "Not yet. Robinhood Chain is live, but $ANCHOR has not launched there. If it does, the contract will appear on this site first. Do not trust any Robinhood CA posted elsewhere.",
  },
  {
    q: "How do I get into the members area and Anchor Desk?",
    a: "Hold at least 500,000 $ANCHOR in a Solana wallet, open memecoindev.vip/members or desk.memecoindev.vip and sign in with your wallet. Signing in is one free message: no transaction, and we never ask for your seed phrase.",
  },
  {
    q: "What are the token transaction taxes?",
    a: "0% tax (standard Solana DEX / Pump.fun rules).",
  },
  {
    q: "How do I know a Telegram / Discord DM is not the dev?",
    a: "Official talk is X (@Draco4226 and @Memecoindev46) and the Discord linked on this site. Telegram is not an official Anchor channel — anyone claiming to be the creator there is a scammer.",
  },
  {
    q: "Something isn't working. Who do I contact?",
    a: "Email memecoindev@mail.grokbot.com.",
  },
] as const;
