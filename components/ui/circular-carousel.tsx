"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  renderItem?: (item: CarouselItem, index: number, isActive: boolean) => ReactNode;
}

const VISIBLE_COUNT = 5;
const RADIUS_X = 280;
const RADIUS_Y = 100;

function getItemPosition(index: number, activeIndex: number, total: number) {
  const offset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2);
  let adjustedOffset = offset;

  if (offset > total / 2) adjustedOffset = offset - total;
  if (offset < -total / 2) adjustedOffset = offset + total;
  if (Math.abs(adjustedOffset) > half) return null;

  const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
  const x = Math.sin(angle) * RADIUS_X;
  // A small downward bias keeps the visual weight of full project cards centered.
  const y = 45 - Math.cos(angle) * RADIUS_Y;
  const distance = Math.abs(adjustedOffset);
  const maxDistance = half + 1;

  return {
    x,
    y,
    scale: Math.max(0, 1 - (distance / maxDistance) * 0.3),
    opacity: 1,
    zIndex: distance === 0 ? 50 : VISIBLE_COUNT - distance,
  };
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
  renderItem,
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = controlledIndex ?? internalIndex;
  const total = items.length;

  const goTo = useCallback((index: number) => {
    if (!total) return;
    const newIndex = ((index % total) + total) % total;
    if (controlledIndex === undefined) setInternalIndex(newIndex);
    onActiveChange?.(newIndex);
  }, [total, controlledIndex, onActiveChange]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused || total < 2) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, next, total]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    const element = containerRef.current;
    element?.addEventListener("keydown", handler);
    return () => element?.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (!total) return null;
  const activeItem = items[activeIndex];

  return <div
    ref={containerRef}
    tabIndex={0}
    role="region"
    aria-label="Projects carousel"
    aria-roledescription="carousel"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    className={cn("circular-carousel relative flex flex-col items-center justify-center gap-8 outline-none", className)}
  >
    <div className="circular-carousel-track relative h-[510px] w-full">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => {
          const position = getItemPosition(index, activeIndex, total);
          if (!position) return null;
          const isActive = index === activeIndex;

          return <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ ...position }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => goTo(index)}
            aria-label={item.title}
            aria-current={isActive ? "true" : undefined}
            role="option"
            className={cn("circular-carousel-item absolute left-1/2 top-1/2 cursor-pointer", isActive && "is-active")}
            style={{ transformOrigin: "center center" }}
          >
            {renderItem ? renderItem(item, index, isActive) : <div className="flex h-32 w-48 flex-col items-start justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 p-4 text-white backdrop-blur-sm">
              {item.tag && <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70">{item.tag}</span>}
              <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 line-clamp-2 text-xs text-white/60">{item.description}</p></div>
            </div>}
          </motion.div>;
        })}
      </AnimatePresence>
      <motion.div key={activeItem.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="circular-carousel-count pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span>{activeIndex + 1} <small>of {total}</small></span>
      </motion.div>
    </div>
    <div className="circular-carousel-controls flex items-center gap-4">
      <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={prev} aria-label="Previous project"><ChevronLeft /></motion.button>
      <div className="circular-carousel-dots flex items-center gap-1.5" role="tablist">
        {items.map((item, index) => <button key={item.id} role="tab" aria-selected={index === activeIndex} onClick={() => goTo(index)} aria-label={`Go to ${item.title}`} className={index === activeIndex ? "is-active" : ""} />)}
      </div>
      <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={next} aria-label="Next project"><ChevronRight /></motion.button>
    </div>
  </div>;
}

export default CircularCarousel;
