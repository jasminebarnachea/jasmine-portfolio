"use client";

import Link from "next/link";
import { stackGroups } from "../data/portfolio";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ApiIcon, CloudServerIcon, CodeCircleIcon, ComputerEthernetIcon, CssThreeIcon, Database02Icon,
  HtmlFiveIcon, JavaIcon, JavaScriptIcon, PhpIcon, ReactIcon, Router02Icon, ServerStack03Icon,
  SmartPhone02Icon, SourceCodeSquareIcon, TailwindcssIcon, Typescript01Icon, WebDesign01Icon,
} from "@hugeicons/core-free-icons";

const toolIcons: Record<string, typeof SourceCodeSquareIcon> = {
  HTML: HtmlFiveIcon, CSS: CssThreeIcon, JavaScript: JavaScriptIcon, TypeScript: Typescript01Icon,
  React: ReactIcon, "Next.js": WebDesign01Icon, "Vue.js": SourceCodeSquareIcon, Flutter: SmartPhone02Icon,
  "Tailwind CSS": TailwindcssIcon, "Expo Go": SmartPhone02Icon, PHP: PhpIcon, Java: JavaIcon, "C++": CodeCircleIcon,
  MySQL: Database02Icon, MongoDB: Database02Icon, Laravel: ServerStack03Icon, "REST APIs": ApiIcon,
  Networking: ComputerEthernetIcon, CCNA: CloudServerIcon, Routing: Router02Icon, Switching: ComputerEthernetIcon,
};

const iconClass = (tool: string) => `stack-icon stack-icon--${tool.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

type StackProps = {
  variant?: "featured" | "archive";
};

export default function Stack({ variant = "featured" }: StackProps) {
  const visibleGroups = variant === "archive"
    ? stackGroups
    : stackGroups.filter((group) => group.name !== "Developer Tools");

  return <section id="stack" className={`section stack-section ${variant === "archive" ? "stack-archive" : ""}`}>
    <div className="section-head">
      <span className="section-title">02 — Tech Stack</span>
      {variant === "featured" && <Link href="/stack" prefetch>See all stacks →</Link>}
    </div>
    <div className="stack-groups">{visibleGroups.map((group) => {
      const visibleTools = variant === "archive"
        ? group.tools
        : group.tools.slice(0, group.name === "Frontend" ? 7 : 4);
      return <div className="stack-group" key={group.name}><h3>{group.name}</h3><div className="chips-large">{visibleTools.map((tool) => {
        return <span className="stack-chip" key={tool}><span className={iconClass(tool)} aria-hidden="true"><HugeiconsIcon icon={toolIcons[tool] || SourceCodeSquareIcon} size={14} strokeWidth={1.8} /></span>{tool}</span>;
      })}</div></div>;
    })}</div>
  </section>;
}
