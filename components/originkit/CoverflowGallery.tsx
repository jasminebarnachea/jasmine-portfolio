"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type CoverflowSlide = {
  image: { src: string; alt?: string };
  title?: string;
};

type CoverflowGalleryProps = {
  slides: CoverflowSlide[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  opacity?: number;
  autoplay?: boolean;
  showTitle?: boolean;
  style?: CSSProperties;
  renderSlide?: (slide: CoverflowSlide, index: number, active: boolean) => ReactNode;
};

// OriginKit "coverflowgallery", adapted to the dimensions of the project cards.
export default function CoverflowGallery({
  slides,
  cardWidth = 150,
  cardHeight = 210,
  radius = 12,
  tilt = 12,
  sideTilt = 7,
  gap = 4,
  opacity = 68,
  autoplay = false,
  showTitle = false,
  style,
  renderSlide,
}: CoverflowGalleryProps) {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);
  const lockRef = useRef(false);
  const dragStartRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);
  const count = slides.length;

  const step = useCallback((direction: number) => {
    if (count < 2 || lockRef.current) return;
    lockRef.current = true;
    setActive((current) => (current + direction + count) % count);
    window.setTimeout(() => { lockRef.current = false; }, 620);
  }, [count]);

  useEffect(() => {
    if (!autoplay || count < 2) return;
    const timer = window.setInterval(() => step(1), 2800);
    return () => window.clearInterval(timer);
  }, [autoplay, count, step]);

  if (!count) return null;

  return <div
    className="originkit-coverflow"
    style={style}
    tabIndex={0}
    role="group"
    aria-roledescription="carousel"
    aria-label="Project screenshots"
    onPointerDown={(event) => {
      if (event.pointerType === "mouse") return;
      dragStartRef.current = event.clientX;
      suppressClickRef.current = false;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }}
    onPointerMove={(event) => {
      if (dragStartRef.current === null) return;
      const distance = event.clientX - dragStartRef.current;
      if (Math.abs(distance) > 5) suppressClickRef.current = true;
      setDragOffset(Math.max(-110, Math.min(110, distance)));
    }}
    onPointerUp={(event) => {
      if (dragStartRef.current === null) return;
      const distance = event.clientX - dragStartRef.current;
      dragStartRef.current = null;
      setDragging(false);
      setDragOffset(0);
      if (Math.abs(distance) >= 42) {
        event.preventDefault();
        setHasSwiped(true);
        step(distance < 0 ? 1 : -1);
      }
    }}
    onPointerCancel={() => {
      dragStartRef.current = null;
      setDragging(false);
      setDragOffset(0);
    }}
    onClickCapture={(event) => {
      if (suppressClickRef.current) {
        event.preventDefault();
        event.stopPropagation();
        suppressClickRef.current = false;
      }
    }}
    onKeyDown={(event) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }}
  >
    <div className="originkit-coverflow-stage" style={{ width: cardWidth, height: cardHeight }}>
      {slides.map((slide, index) => {
        let relative = index - active;
        if (relative > count / 2) relative -= count;
        if (relative < -count / 2) relative += count;
        const distance = Math.abs(relative);
        const scale = Math.max(.55, 1 - distance * .16);
        const translateX = relative * (gap * 26);
        const translateZ = -distance * 200;
        const transform = `translate(-50%, -50%) translateX(${translateX + dragOffset}px) translateZ(${translateZ}px) rotateY(${-relative * tilt}deg) rotateZ(${relative * sideTilt}deg) scale(${scale})`;

        return <div
          className={`originkit-coverflow-card ${dragging ? "is-dragging" : ""}`}
          key={`${slide.image.src}-${index}`}
          onClick={() => {
            if (!suppressClickRef.current && !lockRef.current && index !== active) {
              lockRef.current = true;
              setActive(index);
              window.setTimeout(() => { lockRef.current = false; }, 620);
            }
          }}
          aria-label={`Show ${slide.image.alt || slide.title || `image ${index + 1}`}`}
          aria-current={index === active}
          role={index === active ? undefined : "button"}
          tabIndex={index === active ? -1 : 0}
          style={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: radius,
            transform,
            opacity: distance <= 2 ? 1 : 0,
            pointerEvents: distance <= 2 ? "auto" : "none",
            zIndex: index === active ? 10 : Math.max(1, 8 - distance),
          }}
        >
          {renderSlide
            ? renderSlide(slide, index, index === active)
            : <img src={slide.image.src} alt={slide.image.alt || ""} draggable={false} />}
          {!renderSlide && showTitle && slide.title && <span>{slide.title}</span>}
          <i style={{ opacity: index === active ? 0 : 1 - opacity / 100 }} />
        </div>;
      })}
    </div>
    <div className="originkit-coverflow-dots" aria-label="Choose project">
      {slides.map((slide, index) => <button
        type="button"
        key={`dot-${slide.title || index}`}
        className={index === active ? "is-active" : ""}
        aria-label={`Show project ${index + 1}: ${slide.title || ""}`}
        aria-current={index === active ? "true" : undefined}
        onClick={(event) => {
          event.stopPropagation();
          event.currentTarget.blur();
          if (!lockRef.current && index !== active) setActive(index);
        }}
      />)}
    </div>
    {!hasSwiped && <div className="originkit-swipe-hint" aria-hidden="true">
      <span>Swipe to see more</span><i>↔</i>
    </div>}
  </div>;
}
