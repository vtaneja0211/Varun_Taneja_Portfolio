export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  category: string;
  eyebrow: { category: string; detail: string };
  proof: { label: string; value: string };
  tags: string[];
  githubLink?: string;
  websiteLink?: string;
  websiteLinkLabel?: string;
  hero?: boolean;
  heroMetrics?: { value: string; label: string }[];
  heroNote?: string;
  heroWellCaption?: string;
};

export type WorkExperienceItem = {
  id: number;
  company: string;
  role: string;
  link: string;
  tasks: string[];
  date: string;
  current?: boolean;
};

export type NavItem = { name: string };

export type FilterCat = { id: string; label: string };
