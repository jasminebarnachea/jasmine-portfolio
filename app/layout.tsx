import type { Metadata } from "next";
import "./globals.css";
import "./mobile-overrides.css";
import siteIcon from "../assets/picture/jasmineicon.png";

export const metadata: Metadata = {
  title: "Jasmine Barnachea",
  description: "Portfolio of Jasmine P. Barnachea, Information Technology graduate based in La Union, Philippines.",
  icons: {
    icon: [{ url: `${siteIcon.src}?v=3`, type: "image/png" }],
    shortcut: `${siteIcon.src}?v=3`,
    apple: `${siteIcon.src}?v=3`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
