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
          "Official Anchor Token ($ANCHOR) site. Live on Solana via Pump.fun with zero dev allocation. Holder members area, Anchor Desk and Rug Check.",
      },
      { name: "theme-color", content: "#05070a" },
      { property: "og:title", content: "Anchor Token · Official" },
      {
        property: "og:description",
        content:
          "Zero-dev allocation. Official $ANCHOR on Solana (Pump.fun), plus holder tools: members area, Anchor Desk, Rug Check.",
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
