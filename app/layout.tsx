import type { Metadata } from "next";
import "./globals.css";
import "./mobile-overrides.css";

export const metadata: Metadata = {
  title: "Jasmine Barnachea",
  description: "Portfolio of Jasmine P. Barnachea, Information Technology graduate based in La Union, Philippines.",
  icons: {
    icon: [{ url: "/icon.png?v=5", type: "image/png" }],
    shortcut: "/icon.png?v=5",
    apple: "/icon.png?v=5",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      <script dangerouslySetInnerHTML={{ __html: `
        (() => {
          if ("scrollRestoration" in history) history.scrollRestoration = "manual";
          const reset = () => {
            const root = document.documentElement;
            const previous = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            window.scrollTo(0, 0);
            requestAnimationFrame(() => { root.style.scrollBehavior = previous; });
          };
          reset();
          window.addEventListener("load", reset);
          window.addEventListener("pageshow", reset);
          window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
        })();
      ` }} />
    </head>
    <body>{children}</body>
  </html>;
}
