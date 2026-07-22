export type Project = {
  title: string;
  description: string;
  languages: string[];
};

export const projects: Project[] = [
  {
    title: "Recipe Finder",
    description: "A mobile app focused on Filipino dishes that helps users discover recipes easily. Enter available ingredients or upload an image to get meal ideas, then save favorite recipes for later.",
    languages: ["JavaScript"],
  },
  {
    title: "PetSit Connect",
    description: "A capstone mobile application that connects pet owners with trusted pet sitters. Users can find care services, manage bookings, communicate with sitters, and keep pets cared for when owners are unavailable.",
    languages: ["TypeScript", "PHP"],
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
];

export const tools = ["C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Expo Go", "MySQL", "MongoDB", "Laravel", "REST APIs", "Networking"];

export const stackGroups = [
  { name: "Frontend", tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Expo Go"] },
  { name: "Backend & Data", tools: ["PHP", "Java", "C++", "MySQL", "MongoDB", "Laravel", "REST APIs"] },
  { name: "Networking", tools: ["Networking", "CCNA", "Routing", "Switching"] },
];
