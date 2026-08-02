"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import TiltedCard from "./ui/TiltedCard";

const devices = [
  {
    name: "MacBook Air (M1, 2020)",
    slug: "macbook-air",
    image: "/gear/macbook-air-m1-2020.png",
    href: "https://support.apple.com/en-us/111883",
    specs: "Apple M1 · 13.3-inch Retina display · 8GB unified memory · up to 18-hour battery",
  },
  {
    name: "iPhone 13",
    slug: "iphone-13",
    image: "/gear/iphone-13-front-transparent.png",
    href: "https://support.apple.com/en-us/111872",
    specs: "A15 Bionic · 6.1-inch Super Retina XDR · dual 12MP cameras · IP68",
  },
  {
    name: "iPhone XR",
    slug: "iphone-xr",
    image: "/gear/iphone-xr-front-transparent.png",
    href: "https://support.apple.com/en-us/111868",
    specs: "A12 Bionic · 6.1-inch Liquid Retina HD · 12MP Wide camera · IP67",
  },
];

export default function Gear() {
  return <section id="gear" className="section gear-section">
    <div className="section-head"><span className="section-title">07 — Gear · Devices</span></div>
    <motion.div
      className="gear-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
    >{devices.map((device) => <motion.div
      className="gear-tilt-item"
      key={device.name}
      variants={{
        hidden: { y: 24, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 14 } },
      }}
    >
      <TiltedCard captionText={device.name} rotateAmplitude={9} scaleOnHover={1.035} showTooltip>
        <a className={`gear-card gear-card--${device.slug}`} href={device.href} target="_blank" rel="noreferrer">
          <span className="gear-image"><Image src={device.image} width={942} height={598} alt={device.name} /></span>
          <span className="gear-copy"><span><strong>{device.name}</strong><i aria-hidden="true"><HugeiconsIcon icon={ExternalLinkIcon} size={16} strokeWidth={1.8} /></i></span><small>{device.specs}</small></span>
        </a>
      </TiltedCard>
    </motion.div>)}</motion.div>
  </section>;
}
