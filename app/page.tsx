import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import DesktopProjects from "../components/DesktopProjects";
import DesktopContact from "../components/DesktopContact";
import Focus from "../components/Focus";
import Hero from "../components/Hero";
import JasChat from "../components/JasChat";
import Navigation from "../components/Navigation";
import ProfessionalSummary from "../components/ProfessionalSummary";
import ScrollReveal from "../components/ScrollReveal";
import Stack from "../components/Stack";
import ClickEffects from "../components/originkit/ClickEffects";

export default function Home() {
  return <div className="site">
    <ClickEffects />
    <Navigation />
    <ScrollReveal />
    <main id="top" className="shell"><Hero /><div className="resume-split"><div className="resume-primary"><ProfessionalSummary /><Stack /><DesktopProjects /></div><div className="resume-details"><Credentials /><About /><Certifications /><DesktopContact /></div></div><Focus /></main>
    <Contact />
    <JasChat />
  </div>;
}
