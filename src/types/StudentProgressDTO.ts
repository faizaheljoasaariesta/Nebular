export interface ProjectProgress {
  id: string;
  title: string;
  completionDate: string;
  skillsDeveloped: string[];
  achievements: string;
}

export interface SkillProgress {
  skillName: string;
  progressPercentage: number;
  lastUpdated: string;
}

export interface StudentProgressDTO {
  userId: string;
  projects: ProjectProgress[];
  skills: SkillProgress[];
  overallProgress: number;
}
