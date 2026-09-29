import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import appCss from "../styles.css?url";

const APP_NAME = "Anchor Token";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Official Anchor Token site. Robinhood-chain primary launch coming soon. Solana / Pump.fun track live with zero dev allocation.",
      },
      { name: "theme-color", content: "#05070a" },
      { property: "og:title", content: "Anchor Token · Official" },
      {
        property: "og:description",
        content:
          "Zero-dev allocation. Robinhood-chain primary (coming soon) + Solana Pump.fun track.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://anchortoken.vip" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/anchor-coin.png" },
      { rel: "apple-touch-icon", href: "/anchor-coin.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Shell>
          <Outlet />
        </Shell>
        <Scripts />
      </body>
    </html>
  ),
});
