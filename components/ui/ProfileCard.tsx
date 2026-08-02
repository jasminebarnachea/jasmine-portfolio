"use client";

import { useCallback, useRef, type CSSProperties, type PointerEvent } from "react";

type ProfileCardProps = {
  avatarUrl: string;
  darkAvatarUrl?: string;
  name: string;
  title: string;
  className?: string;
  enableTilt?: boolean;
};

type ProfileCardStyle = CSSProperties & Record<`--${string}`, string | number>;

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

export default function ProfileCard({ avatarUrl, darkAvatarUrl, name, title, className = "", enableTilt = true }: ProfileCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updatePointer = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!enableTilt || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const percentX = clamp(((event.clientX - rect.left) / rect.width) * 100);
    const percentY = clamp(((event.clientY - rect.top) / rect.height) * 100);
    const style = wrapperRef.current.style;
    style.setProperty("--pointer-x", `${percentX}%`);
    style.setProperty("--pointer-y", `${percentY}%`);
    style.setProperty("--background-x", `${35 + percentX * 0.3}%`);
    style.setProperty("--background-y", `${35 + percentY * 0.3}%`);
    style.setProperty("--rotate-x", `${-(percentY - 50) / 5}deg`);
    style.setProperty("--rotate-y", `${(percentX - 50) / 5}deg`);
  }, [enableTilt]);

  const resetPointer = useCallback(() => {
    const style = wrapperRef.current?.style;
    if (!style) return;
    style.setProperty("--pointer-x", "50%");
    style.setProperty("--pointer-y", "50%");
    style.setProperty("--background-x", "50%");
    style.setProperty("--background-y", "50%");
    style.setProperty("--rotate-x", "0deg");
    style.setProperty("--rotate-y", "0deg");
  }, []);

  const cardStyle: ProfileCardStyle = {
    "--pointer-x": "50%",
    "--pointer-y": "50%",
    "--background-x": "50%",
    "--background-y": "50%",
    "--rotate-x": "0deg",
    "--rotate-y": "0deg",
  };

  return <div
    ref={wrapperRef}
    className={`profile-effect-card ${className}`.trim()}
    style={cardStyle}
    onPointerMove={updatePointer}
    onPointerLeave={resetPointer}
  >
    <div className="profile-effect-glow" aria-hidden="true" />
    <article className="profile-effect-shell">
      <div className="profile-effect-gradient" aria-hidden="true" />
      <div className="profile-effect-shine" aria-hidden="true" />
      <div className="profile-effect-glare" aria-hidden="true" />
      <img className="profile-effect-avatar profile-effect-avatar--light" src={avatarUrl} alt={name} />
      {darkAvatarUrl && <img className="profile-effect-avatar profile-effect-avatar--dark" src={darkAvatarUrl} alt="" aria-hidden="true" />}
      <div className="profile-effect-details">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </article>
  </div>;
}
