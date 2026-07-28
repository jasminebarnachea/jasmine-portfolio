import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Focus from "../components/Focus";
import Hero from "../components/Hero";
import JasChat from "../components/JasChat";
import Navigation from "../components/Navigation";
import ScrollReveal from "../components/ScrollReveal";
import Stack from "../components/Stack";
import ClickEffects from "../components/originkit/ClickEffects";

export default function Home() {
  return <div className="site">
    <ClickEffects />
    <Navigation />
    <ScrollReveal />
    <main id="top" className="shell"><Hero /><div className="about-education"><Credentials /><About /></div><Focus /><Stack /><Certifications /></main>
    <Contact />
    <JasChat />
  </div>;
}
