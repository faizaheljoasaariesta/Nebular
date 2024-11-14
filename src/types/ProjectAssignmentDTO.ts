export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface ProjectAssignmentDTO {
  projectId: string;
  title: string;
  goals: string[];
  instructions: string[];
  milestones: ProjectMilestone[];
  aiTutorLink: string;
}
