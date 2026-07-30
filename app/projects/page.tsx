import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../../components/Contact";
import DesktopProjects from "../../components/DesktopProjects";
import JasChat from "../../components/JasChat";
import Navigation from "../../components/Navigation";

export const metadata: Metadata = {
  title: "Projects — Jasmine Barnachea",
  description: "More web and mobile development projects by Jasmine Barnachea.",
};

export default function ProjectsPage() {
  return <div className="site projects-page">
    <Navigation />
    <main id="top" className="shell">
      <div className="projects-page-intro">
        <Link href="/">← Back to portfolio</Link>
        <h1>other projects</h1>
        <p>More applications I&apos;ve designed and developed across mobile, AI, and the web.</p>
      </div>
      <DesktopProjects variant="archive" />
    </main>
    <Contact />
    <JasChat />
  </div>;
}
