export interface Job {
  title: string;
  slug: string;
  location: string;
  experience: string;
  type: string;
  department: string;
  skills: string[];
  description: string;
}

export const jobs: Job[] = [
  {
    title: "Senior Full-Stack Engineer",
    slug: "senior-full-stack-engineer",
    location: "Remote / India",
    experience: "5-8 years",
    type: "Full-time",
    department: "Engineering",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    description:
      "Build and maintain enterprise web applications using modern JavaScript frameworks. Work across the full stack to deliver reliable, scalable software systems.",
  },
  {
    title: "AI/ML Engineer",
    slug: "ai-ml-engineer",
    location: "Remote / India",
    experience: "3-6 years",
    type: "Full-time",
    department: "AI & Automation",
    skills: ["Python", "Machine Learning", "NLP", "LLM Integration", "API Design"],
    description:
      "Design and implement AI-powered solutions including intelligent automation, document processing systems and AI assistants for enterprise clients.",
  },
  {
    title: "Cloud Infrastructure Engineer",
    slug: "cloud-infrastructure-engineer",
    location: "Remote / India",
    experience: "4-7 years",
    type: "Full-time",
    department: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code", "Monitoring"],
    description:
      "Design, deploy and manage cloud infrastructure and deployment pipelines. Ensure reliability, security and scalability of production environments.",
  },
  {
    title: "UI/UX Designer",
    slug: "uiux-designer",
    location: "Remote / India",
    experience: "3-5 years",
    type: "Full-time",
    department: "Design",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Accessibility"],
    description:
      "Design intuitive, accessible and visually refined digital experiences for enterprise applications and customer-facing products.",
  },
  {
    title: "Backend Engineer",
    slug: "backend-engineer",
    location: "Remote / India",
    experience: "3-6 years",
    type: "Full-time",
    department: "Engineering",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "System Design"],
    description:
      "Engineer robust backend systems, APIs and data architectures that power enterprise applications and platform services.",
  },
  {
    title: "Technical Project Manager",
    slug: "technical-project-manager",
    location: "Remote / India",
    experience: "4-8 years",
    type: "Full-time",
    department: "Operations",
    skills: ["Project Management", "Agile", "Client Communication", "Technical Understanding", "Planning"],
    description:
      "Lead technology projects from discovery through delivery. Coordinate engineering teams, manage client relationships and ensure successful outcomes.",
  },
  {
    title: "Software Engineering Intern",
    slug: "software-engineering-intern",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Internship",
    department: "Engineering",
    skills: ["JavaScript", "React", "Node.js", "Git", "Learning Agility"],
    description:
      "Gain hands-on experience in enterprise software development. Work alongside experienced engineers on real client projects and build foundational engineering skills.",
  },
  {
    title: "AI Research Intern",
    slug: "ai-research-intern",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Internship",
    department: "AI & Automation",
    skills: ["Python", "Machine Learning", "Research", "Data Analysis", "Curiosity"],
    description:
      "Explore AI research and practical applications. Work on experiments, data analysis and prototyping of AI-powered solutions under experienced guidance.",
  },
];
