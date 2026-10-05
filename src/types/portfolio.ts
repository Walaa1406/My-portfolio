export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  role: string[];
  type: string;
  image?: string;
};

export type TrainingItem = {
  title: string;
  org: string;
  year: string;
  status: "Ongoing" | "Completed";
  description: string;
  focus: string[];
};