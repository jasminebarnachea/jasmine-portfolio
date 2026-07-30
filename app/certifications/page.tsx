import type { Metadata } from "next";
import Link from "next/link";
import Certifications from "../../components/Certifications";
import Contact from "../../components/Contact";
import JasChat from "../../components/JasChat";
import Navigation from "../../components/Navigation";

export const metadata: Metadata = {
  title: "Certifications — Jasmine Barnachea",
  description: "Networking, cybersecurity, database, and professional certifications earned by Jasmine Barnachea.",
};

export default function CertificationsPage() {
  return <div className="site certifications-page">
    <Navigation />
    <main id="top" className="shell">
      <div className="projects-page-intro">
        <Link href="/">← Back to portfolio</Link>
        <h1>certifications</h1>
        <p>Certificates I&apos;ve earned across networking, cybersecurity, databases, and professional development.</p>
      </div>
      <Certifications variant="archive" />
    </main>
    <Contact />
    <JasChat />
  </div>;
}
