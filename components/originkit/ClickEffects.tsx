"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Particle = {
  id: string;
  x: number;
  y: number;
  angle: number;
  distance: number;
};

type ClickEffectsProps = {
  color?: string;
  duration?: number;
  strokeWidth?: number;
  effectSize?: number;
};

// OriginKit "clickeffects", adapted to mount once over the full portfolio.
export default function ClickEffects({
  color,
  duration = 0.42,
  strokeWidth = 4,
  effectSize = 82,
}: ClickEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleClick = (event: PointerEvent) => {
      const id = `${event.timeStamp}-${event.clientX}-${event.clientY}`;
      const next = Array.from({ length: 8 }, (_, index) => ({
        id: `${id}-${index}`,
        x: event.clientX,
        y: event.clientY,
        angle: index * 45 * (Math.PI / 180),
        distance: effectSize * 0.28 + Math.random() * effectSize * 0.28,
      }));
      setParticles((current) => [...current, ...next]);
    };

    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, [effectSize]);

  return <div ref={containerRef} className="originkit-click-effects" aria-hidden="true">
    {particles.map((particle) => <i
      key={particle.id}
      style={{
        left: particle.x - strokeWidth / 2,
        top: particle.y - strokeWidth / 2,
        width: strokeWidth,
        height: strokeWidth,
        color: color || "var(--click-effect-color)",
      }}
      ref={(element) => {
        if (!element || element.dataset.animated) return;
        element.dataset.animated = "true";
        gsap.set(element, {
          scale: 0,
          opacity: 1,
        });
        gsap.timeline({
          onComplete: () => setParticles((current) => current.filter(({ id }) => id !== particle.id)),
        })
          .to(element, {
            scale: 1,
            duration: Math.min(.1, duration * .25),
            ease: "power2.out",
          })
          .to(element, {
            x: Math.cos(particle.angle) * particle.distance,
            y: Math.sin(particle.angle) * particle.distance,
            scale: 0,
            opacity: 0,
            rotation: 90,
            duration,
            ease: "power2.out",
          });
      }}
    />)}
  </div>;
}
