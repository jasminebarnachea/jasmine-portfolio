export type Project = {
  title: string;
  description: string;
  languages: string[];
  website?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Recipe Finder",
    description: "A mobile app focused on Filipino dishes that helps users discover recipes easily. Enter available ingredients or upload an image to get meal ideas, then save favorite recipes for later.",
    languages: ["JavaScript"],
  },
  {
    title: "PetSit Connect",
    description: "A mobile application that connects pet owners with trusted pet sitters. Users can find care services, manage bookings, communicate with sitters, and keep pets cared for when owners are unavailable.",
    languages: ["TypeScript", "PHP"],
    video: "/PetSit-Konek.mp4",
  },
  {
    title: "AiDeaMo",
    description: "An AI-powered capstone title generator for IT and Computer Science students that creates five tailored project-title ideas at a time.",
    languages: ["Gemini", "TypeScript"],
    website: "https://ai-capstone-title-generator.vercel.app",
  },
  {
    title: "Cafe Pulse",
    description: "A modern point-of-sale and business analytics system built for cafés and coffee shops. Cashiers can manage orders, payments, receipts, and customer preferences, while administrators can track sales, staff activity, product performance, and AI-powered business insights from one connected dashboard.",
    languages: ["TypeScript", "Groq AI"],
    website: "https://cafe-pulse-advertise.vercel.app",
  },
  {
    title: "LGU-DigiVault",
    description: "A modern digital records and AI-powered archiving system built for local government units. Administrators can scan, upload, classify, secure, track, and share official documents, while constituents can access authorized public or privately shared records, receive release notifications, download files, and communicate directly with LGU offices—all from one centralized platform.",
    languages: ["JavaScript", "Grok AI"],
    website: "https://lgu-digi-vault.vercel.app",
  },
  {
    title: "CareerBridge AI",
    description: "An AI-powered career platform that helps users explore opportunities and receive personalized guidance for their career journey.",
    languages: ["TypeScript", "Grok AI"],
    website: "https://career-bridge-ai-mauve.vercel.app",
  },
];

export type FocusArea = {
  title: string;
  text: string;
  tags: string[];
};

// Kept as a separate export so the Focus section can render focus areas
// independently from the project showcase cards.
export const focusAreas: FocusArea[] = [
  { title: "Web development", text: "Building responsive pages with HTML, CSS, JavaScript, and TypeScript.", tags: ["HTML / CSS", "JavaScript", "TypeScript"] },
  { title: "Mobile development", text: "Exploring modern mobile application workflows with React and Expo Go.", tags: ["React", "Expo Go", "UI basics"] },
  { title: "Data & backend", text: "Working with databases, Laravel, RESTful APIs, and structured application logic.", tags: ["MySQL", "MongoDB", "Laravel"] },
  { title: "Networks", text: "Certified in networking foundations, switching, routing, wireless, security, and automation.", tags: ["CCNA", "Routing", "Security"] },
];

export type Certification = {
  title: string;
  image: string;
};

export const certifications: Certification[] = [
  { title: "CCNA: Enterprise Networking, Security, and Automation", image: "ccna-enterprise" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", image: "ccna-switch" },
  { title: "CCNAv7: Introduction to Networks", image: "ccnav7" },
  { title: "Introduction to Cybersecurity", image: "intro" },
  { title: "Oracle Database Programming with SQL — English", image: "oracle" },
  { title: "Salesforce VIP Program", image: "smartbridge" },
];

export const tools = ["C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Expo Go", "MySQL", "MongoDB", "Laravel", "REST APIs", "Networking"];

export const stackGroups = [
  { name: "Frontend", tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Expo Go"] },
  { name: "Backend & Data", tools: ["PHP", "Java", "C++", "MySQL", "MongoDB", "Laravel", "REST APIs"] },
  { name: "Networking", tools: ["Networking", "CCNA", "Routing", "Switching"] },
];
