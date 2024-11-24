export function generateKeywords(): string[] {
  const keywords = new Set<string>();

  // Basic keywords related to a portfolio
  keywords.add("portfolio");
  keywords.add("personal portfolio");
  keywords.add("web developer portfolio");
  keywords.add("frontend developer portfolio");
  keywords.add("React developer");
  keywords.add("Next.js developer");
  keywords.add("UI/UX designer");
  keywords.add("web design");
  keywords.add("JavaScript developer");
  keywords.add("software engineer");
  keywords.add("");

  // Additional keywords based on common portfolio sections
  keywords.add("about me");
  keywords.add("projects");
  keywords.add("experience");
  keywords.add("skills");
  keywords.add("contact");

  // Optional: Add keywords based on specific skills or tools you mention in the portfolio
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "CSS",
    "HTML",
  ];
  skills.forEach((skill) => keywords.add(`${skill} developer`));

  return Array.from(keywords);
}
