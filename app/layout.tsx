import type { Metadata } from "next";
import "./globals.css";
import siteIcon from "../assets/picture/iconn.jpg";

export const metadata: Metadata = {
  title: "Jasmine Barnachea",
  description: "Portfolio of Jasmine P. Barnachea, Information Technology graduate based in La Union, Philippines.",
  icons: {
    icon: [{ url: `${siteIcon.src}?v=2`, type: "image/jpeg" }],
    shortcut: `${siteIcon.src}?v=2`,
    apple: `${siteIcon.src}?v=2`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
