export interface CareerPathDTO {
  id: string;
  title: string;
  description: string;
  skills: string[];
  averageSalary: string;
  trending: boolean;
  suggestedProjects: string[];
}

export interface MarketInsightsDTO {
  careers: CareerPathDTO[];
}
