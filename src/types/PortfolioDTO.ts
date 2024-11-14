export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Endorsement {
  id: string;
  mentorName: string;
  message: string;
}

export interface PortfolioDTO {
  projects: Project[];
  certifications: Certification[];
  endorsements: Endorsement[];
}
