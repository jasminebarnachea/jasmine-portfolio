"use client";

import { motion } from "framer-motion";

type Service = {
  id: string;
  iconSrc: string;
  title: string;
  items: string[];
};

const services: Service[] = [
  {
    id: "web-development",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/743-web-code.svg",
    title: "Web Development",
    items: [
      "Responsive websites and web applications",
      "Admin dashboards and management systems",
      "Full-stack application development",
    ],
  },
  {
    id: "mobile-development",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/2807-smartphone-4.svg",
    title: "Mobile Development",
    items: [
      "Android and cross-platform mobile applications",
      "Mobile UI development and feature integration",
      "API-connected mobile applications",
    ],
  },
  {
    id: "ai-integration",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/2353-horizontal-brain.svg",
    title: "AI Integration",
    items: [
      "AI-powered applications and smart systems",
      "Resume analysis and recommendation systems",
      "AI automation and intelligent features",
    ],
  },
  {
    id: "database-backend",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/57-server.svg",
    title: "Database & Backend Development",
    items: [
      "Database design and management",
      "Backend API development and integration",
      "Data processing and system optimization",
    ],
  },
  {
    id: "ui-ux-design",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/117-vector-design.svg",
    title: "UI/UX & System Design",
    items: [
      "User-friendly interface design",
      "Application prototypes and wireframes",
      "Modern and responsive layouts",
    ],
  },
  {
    id: "maintenance-support",
    iconSrc: "https://media.lordicon.com/icons/wired/outline/409-tool.svg",
    title: "Maintenance & Support",
    items: [
      "Bug fixing and troubleshooting",
      "System improvements and updates",
      "Technical support for applications",
    ],
  },
];

export default function ServicesPreview() {
  return <section id="services" className="section services-section">
    <div className="section-head services-heading">
      <span className="section-title">03 — What Can I Do</span>
    </div>
    <ul className="services-grid">
      {services.map((service, index) => <motion.li
        className="service-card-wrap"
        key={service.id}
        whileHover={{ y: -5 }}
      >
        <article className="service-card">
          <span className="service-card-number">0{index + 1}</span>
          <span className="service-card-icon" aria-hidden="true">
            <img src={service.iconSrc} alt="" loading="lazy" />
          </span>
          <strong>{service.title}</strong>
          <ul className="service-card-details">
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </motion.li>)}
    </ul>
  </section>;
}
