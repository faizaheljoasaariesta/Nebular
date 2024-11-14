export interface Progress {
  title: string;
  percentage: number;
}

export interface RecommendedCourse {
  title: string;
  deadline: string;
}

export interface Achievement {
  title: string;
  date: string;
}

export interface DashboardDTO {
  progress: Progress[];
  recommendedCourses: RecommendedCourse[];
  achievements: Achievement[];
  portfolioUrl: string;
}
