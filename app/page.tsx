import About from "../components/About";
import Certifications from "../components/Certifications";
import Credentials from "../components/Credentials";
import DesktopProjects from "../components/DesktopProjects";
import Focus from "../components/Focus";
import Gear from "../components/Gear";
import Hero from "../components/Hero";
import JasChat from "../components/JasChat";
import Navigation from "../components/Navigation";
import ScrollReveal from "../components/ScrollReveal";
import Stack from "../components/Stack";
import SocialCard from "../components/ui/social-card";
import ClickEffects from "../components/originkit/ClickEffects";

export default function Home() {
  return <div className="site">
    <ClickEffects />
    <Navigation />
    <ScrollReveal />
    <main id="top" className="shell"><Hero /><DesktopProjects /><Focus /><Stack /><div className="certificates-education-summary"><div className="education-summary"><Credentials /><Certifications /></div><div className="certificates-contact"><About /><SocialCard /></div></div><div className="post-project-grid"><Gear /></div></main>
    <JasChat />
  </div>;
}
