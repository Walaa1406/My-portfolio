import type { Project, SkillGroup, TrainingItem } from "../types/portfolio";

export const EMAIL = "1earth7seas@gmail.com";
export const LINKEDIN_LABEL = "linkedin.com/in/walaa-mahmoud-44b350311";
export const LINKEDIN_URL = "https://www.linkedin.com/in/walaa-mahmoud-44b350311";
export const PORTRAIT_URL = "/photo_2026-10-04_17-58-28.jpg";


export const NAV = [
{ id: "home", label: "Home" },
{ id: "about", label: "About" },
{ id: "skills", label: "Skills" },
{ id: "projects", label: "Projects" },
{ id: "training", label: "Training" },
{ id: "contact", label: "Contact" }];


export const SKILLS: SkillGroup[] = [
{ title: "Front-End Development", icon: "</>", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Responsive Web Design"] },
{ title: "UI/UX Design", icon: "◐", items: ["Figma", "Wireframing", "Prototyping", "User Interface Design", "User Experience Design"] },
{ title: "Programming", icon: "{ }", items: ["C", "C++", "Python", "Java"] },
{ title: "Other", icon: "✦", items: ["Flutter", "Teamwork", "Problem Solving", "Attention to Detail"] }];


export const PROJECTS: Project[] = [
{
  title: "Hardware Components E-Commerce Website",
  description: "A React-based e-commerce website for browsing and selling hardware project components.",
  tech: ["React", "JavaScript", "HTML", "CSS"],
  role: ["Developed Front-End interfaces.", "Built reusable UI components.", "Worked on responsive layouts.", "Focused on creating a clear and easy-to-use shopping experience."],
  type: "Front-End Development",
  image: "/084630e3-cc27-44df-a696-b54223e53e6b.jpg"
},
{
  title: "Global Food App",
  description: "A food discovery and ordering application that helps users discover international dishes, find nearby restaurants, place orders, and share reviews.",
  tech: ["Figma", "UI/UX Design"],
  role: ["Created wireframes.", "Designed the user interface.", "Developed the interactive prototype.", "Focused on navigation and overall user experience."],
  type: "UI/UX Design",
  image: "/14f88731-3f50-44ba-aeb8-89d8f4788224.jpg"
},
{
  title: "Digital Café Menu",
  description: "A digital menu concept designed for a café, providing customers with a simple and visually appealing way to browse menu items.",
  tech: ["Figma", "UI/UX Design"],
  role: ["Designed the interface.", "Organized menu categories and content.", "Created the user flow and visual layout."],
  type: "UI/UX Design",
  image: "/e3361988-40a6-4bfc-945f-81abbddf0fd2.jpg"
},
{
  title: "Books Application",
  description: "A mobile application concept for browsing and reading books.",
  tech: ["Flutter", "Dart"],
  role: ["Worked on the application interface.", "Implemented the front-end using Flutter.", "Focused on creating a simple and user-friendly reading experience."],
  type: "Mobile Development",
  image: "/a7c6a30d-548d-4978-973f-f90f185659f7.jpg"
}];


export const TRAINING: TrainingItem[] = [
{ title: "DEPI — React Front-End Development", org: "Digital Egypt Pioneers Initiative (DEPI)", year: "2026", status: "Ongoing", description: "Six-month technical training focused on Front-End Development using React, with practical work on modern web development concepts and responsive interfaces.", focus: ["React", "JavaScript", "HTML", "CSS", "Responsive Web Design"] },
{ title: "NTI — UI/UX Design", org: "National Telecommunication Institute (NTI)", year: "2026", status: "Completed", description: "Practical training focused on user interface and user experience design, including wireframing, prototyping, and user-centered digital experiences.", focus: ["UI/UX", "Figma", "Wireframing", "Prototyping"] },
{ title: "NTI — Flutter Development", org: "National Telecommunication Institute (NTI)", year: "2026", status: "Completed", description: "Training focused on mobile application development using Flutter and Dart.", focus: ["Flutter", "Dart", "Mobile UI"] },
{ title: "Front-End Development Certificate", org: "University Training", year: "2024", status: "Completed", description: "Practical training covering Front-End Development and web interface fundamentals.", focus: ["HTML", "CSS", "JavaScript"] },
{ title: "Cisco — Python Fundamentals", org: "Cisco Networking Academy", year: "", status: "Completed", description: "Certificate covering the fundamentals of Python programming.", focus: [] },
{ title: "Cisco — C++ Programming", org: "Cisco Networking Academy", year: "", status: "Completed", description: "Certificate covering fundamental C++ programming concepts.", focus: [] }];