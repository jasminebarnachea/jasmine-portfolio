export default function About() {
  return <section id="about" className="section">
    <div className="section-head"><span className="section-title"><span className="section-number-desktop">03 — Professional Experience</span><span className="section-number-mobile">04 — Professional Experience</span></span></div>
    <div className="experience-list">
      <article className="experience-item">
        <span className="experience-dot" aria-hidden="true" />
        <div className="experience-heading">
          <div><h3>Intern – HR Department</h3></div>
          <div className="experience-meta"><span>LGU – Agoo | La Union</span><time>February 2026 – May 2026</time></div>
        </div>
        <p>Gained experience in managing HR records by encoding and organizing employee documents, maintaining spreadsheet data, creating materials using Canva, and providing basic technical support for office operations.</p>
      </article>
      <article className="experience-item">
        <span className="experience-dot" aria-hidden="true" />
        <div className="experience-heading">
          <div><h3>Lead Developer – Capstone Project</h3></div>
          <div className="experience-meta"><span>Universidad de Dagupan | Pangasinan</span><time>May 2025 – December 2025</time></div>
        </div>
        <p>Led the development of a mobile booking application for pet owners and pet sitters by creating system features using TypeScript and PHP, while conducting testing, debugging, and improvements to ensure functionality and usability.</p>
      </article>
    </div>
  </section>;
}
