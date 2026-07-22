import type { Metadata } from "next";
import "./globals.css";
import siteIcon from "../assets/picture/iconn.jpg";

export const metadata: Metadata = {
  title: "Jasmine Barnachea — IT Graduate",
  description: "Portfolio of Jasmine P. Barnachea, Information Technology graduate based in La Union, Philippines.",
  icons: {
    icon: siteIcon.src,
    shortcut: siteIcon.src,
    apple: siteIcon.src,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
