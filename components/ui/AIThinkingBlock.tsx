"use client";

import { useEffect, useState } from "react";

const thinkingSteps = [
  "Reading your question…",
  "Checking Jasmine’s portfolio…",
  "Finding the most relevant details…",
  "Preparing a concise answer…",
];

export default function AIThinkingBlock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((current) => current + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="jas-thinking" role="status" aria-live="polite">
    <div className="jas-thinking-status">
      <span className="jas-thinking-loader" aria-hidden="true"><i /><i /><i /></span>
      <span className="jas-thinking-label">Jas Chat Lang is thinking</span>
      <time>{seconds}s</time>
    </div>
    <div className="jas-thinking-card" aria-hidden="true">
      <div className="jas-thinking-scroll">
        {[...thinkingSteps, ...thinkingSteps].map((step, index) => <p key={`${step}-${index}`}>{step}</p>)}
      </div>
    </div>
  </div>;
}
