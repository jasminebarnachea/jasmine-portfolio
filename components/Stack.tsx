import { stackGroups } from "../data/portfolio";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ApiIcon, CloudServerIcon, CodeCircleIcon, ComputerEthernetIcon, CssThreeIcon, Database02Icon,
  HtmlFiveIcon, JavaIcon, JavaScriptIcon, PhpIcon, ReactIcon, Router02Icon, ServerStack03Icon,
  SmartPhone02Icon, SourceCodeSquareIcon, Typescript01Icon,
} from "@hugeicons/core-free-icons";

const toolIcons: Record<string, typeof SourceCodeSquareIcon> = {
  HTML: HtmlFiveIcon, CSS: CssThreeIcon, JavaScript: JavaScriptIcon, TypeScript: Typescript01Icon,
  React: ReactIcon, "Expo Go": SmartPhone02Icon, PHP: PhpIcon, Java: JavaIcon, "C++": CodeCircleIcon,
  MySQL: Database02Icon, MongoDB: Database02Icon, Laravel: ServerStack03Icon, "REST APIs": ApiIcon,
  Networking: ComputerEthernetIcon, CCNA: CloudServerIcon, Routing: Router02Icon, Switching: ComputerEthernetIcon,
};

const iconClass = (tool: string) => `stack-icon stack-icon--${tool.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export default function Stack() {
  return <section className="section stack-section">
    <div className="section-head"><span className="section-title">04 — stack</span></div>
    <div className="stack-groups">{stackGroups.map((group) => <div className="stack-group" key={group.name}><h3>{group.name}</h3><div className="chips-large">{group.tools.map((tool) => {
      return <span className="stack-chip" key={tool}><span className={iconClass(tool)} aria-hidden="true"><HugeiconsIcon icon={toolIcons[tool] || SourceCodeSquareIcon} size={14} strokeWidth={1.8} /></span>{tool}</span>;
    })}</div></div>)}</div>
  </section>;
}
