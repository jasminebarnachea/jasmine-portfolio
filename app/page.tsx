import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Focus from "../components/Focus";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Stack from "../components/Stack";

export default function Home() {
  return <div className="site">
    <Navigation />
    <main id="top" className="shell"><Hero /><div className="about-education"><About /><Credentials /></div><Focus /><Stack /><Certifications /></main>
    <Contact />
  </div>;
}
