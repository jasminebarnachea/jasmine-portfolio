"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import "./TiltedCard.css";

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export type TiltedCardProps = {
  children: ReactNode;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  cardHeight?: string;
  cardWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  className?: string;
};

export default function TiltedCard({
  children,
  captionText = "",
  containerHeight = "100%",
  containerWidth = "100%",
  cardHeight = "100%",
  cardWidth = "100%",
  scaleOnHover = 1.035,
  rotateAmplitude = 10,
  showTooltip = true,
  className = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateCaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
  const [lastY, setLastY] = useState(0);

  function handleMouse(event: MouseEvent<HTMLElement>) {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    rotateCaption.set(-(offsetY - lastY) * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (prefersReducedMotion) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateCaption.set(0);
  }

  return <figure
    ref={ref}
    className={`tilted-card-figure ${className}`}
    style={{ height: containerHeight, width: containerWidth }}
    onMouseMove={handleMouse}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <motion.div className="tilted-card-inner" style={{ width: cardWidth, height: cardHeight, rotateX, rotateY, scale }}>
      {children}
    </motion.div>
    {showTooltip && captionText && <motion.figcaption className="tilted-card-caption" style={{ x, y, opacity, rotate: rotateCaption }}>
      {captionText}
    </motion.figcaption>}
  </figure>;
}
