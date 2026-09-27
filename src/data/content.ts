/** Central copy + placeholders for Anchor Token dual-chain site. */

export const brand = {
  name: "Anchor",
  ticker: "$ANCHOR",
  domain: "anchortoken.vip",
  tagline: "Zero-dev allocation. Stay anchored.",
} as const;

export const socials = {
  discord: "https://discord.gg/8U9UycsDH",
  x: "https://x.com/Draco4226",
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

/** Robinhood-chain primary launch — coming soon, not launching for a while. */
export const robinhood = {
  status: "coming_soon" as const,
  statusLabel: "Coming soon",
  statusDetail:
    "Primary launch track on Robinhood chain. Not launching for a while — watch this page and official socials for the contract.",
  chain: "Robinhood chain",
  venue: "TBD",
  /** PLACEHOLDER — Mark fills when ready */
  contract: null as string | null,
  contractExplorer: null as string | null,
  tradeUrl: null as string | null,
  totalSupply: "TBD",
  decimals: "TBD",
  launchNote:
    "When live, the contract address will appear here and on Solana we will keep advertising the Pump.fun track separately.",
};

/** Solana / Pump.fun secondary track — live, still advertising. */
export const solana = {
  status: "live" as const,
  statusLabel: "LIVE",
  statusDetail:
    "Launched Sept 6 via Pump.fun · 100% fair bonding curve · still advertising",
  chain: "Solana",
  venue: "Pump.fun",
  contract: "3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  pumpUrl:
    "https://pump.fun/coin/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  solscanUrl:
    "https://solscan.io/token/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
  totalSupply: "1,000,000,000",
  decimals: "6",
  launched: "Sept 6, 2025",
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
    q: "When does the Robinhood-chain Anchor launch?",
    a: "Not for a while. This site will show the contract the moment it is live. Do not trust any CA posted elsewhere.",
  },
  {
    q: "Is the Solana Pump.fun Anchor still real?",
    a: "Yes. It launched Sept 6 via Pump.fun with 0% dev allocation. Contract is listed on the Solana page. We keep advertising that track while the Robinhood primary launch is prepared.",
  },
  {
    q: "What are the token transaction taxes?",
    a: "0% tax on the Solana Pump.fun track (standard Solana DEX / Pump.fun rules). Robinhood-chain tax posture will be stated at launch.",
  },
  {
    q: "How do I know a Telegram / Discord DM is not the dev?",
    a: "Official talk is X (@Draco4226) and the Discord linked on this site. Telegram is not an official Anchor channel — anyone claiming to be the creator there is a scammer.",
  },
] as const;
