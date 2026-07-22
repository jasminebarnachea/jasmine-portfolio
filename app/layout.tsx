import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasmine Barnachea — IT Graduate",
  description: "Portfolio of Jasmine P. Barnachea, Information Technology graduate based in La Union, Philippines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
