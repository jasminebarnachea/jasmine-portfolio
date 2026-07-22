import { stackGroups } from "../data/portfolio";

export default function Stack() {
  return <section className="section stack-section">
    <div className="section-head"><span className="section-title">Stack</span></div>
    <div className="stack-groups">{stackGroups.map((group) => <div className="stack-group" key={group.name}><h3>{group.name}</h3><div className="chips-large">{group.tools.map((tool) => <span className="stack-chip" key={tool}>{tool}</span>)}</div></div>)}</div>
  </section>;
}
