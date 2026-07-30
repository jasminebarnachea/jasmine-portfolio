import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../../components/Contact";
import JasChat from "../../components/JasChat";
import Navigation from "../../components/Navigation";
import Stack from "../../components/Stack";

export const metadata: Metadata = {
  title: "Tech Stack — Jasmine Barnachea",
  description: "Technologies and development tools used by Jasmine Barnachea.",
};

export default function StackPage() {
  return <div className="site stack-page">
    <Navigation />
    <main id="top" className="shell">
      <div className="projects-page-intro">
        <Link href="/">← Back to portfolio</Link>
        <h1>tech stack</h1>
        <p>Technologies and tools I use across frontend, backend, data, mobile development, and networking.</p>
      </div>
      <Stack variant="archive" />
    </main>
    <Contact />
    <JasChat />
  </div>;
}
