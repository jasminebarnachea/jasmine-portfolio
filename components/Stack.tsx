import { stackGroups } from "../data/portfolio";

const iconLabels: Record<string, string> = {
  HTML: "5", CSS: "#", JavaScript: "JS", TypeScript: "TS", React: "⚛", "Expo Go": "EX",
  PHP: "PHP", Java: "J", "C++": "C++", MySQL: "MY", MongoDB: "M", Laravel: "L",
  "REST APIs": "↔", Networking: "◌", CCNA: "CC", Routing: "↗", Switching: "⇄",
};

const iconClass = (tool: string) => `stack-icon stack-icon--${tool.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export default function Stack() {
  return <section className="section stack-section">
    <div className="section-head"><span className="section-title">Stack</span></div>
    <div className="stack-groups">{stackGroups.map((group) => <div className="stack-group" key={group.name}><h3>{group.name}</h3><div className="chips-large">{group.tools.map((tool) => <span className="stack-chip" key={tool}><span className={iconClass(tool)} aria-hidden="true">{iconLabels[tool] || tool.slice(0, 2)}</span>{tool}</span>)}</div></div>)}</div>
  </section>;
}
