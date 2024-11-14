export interface Question {
  id: string;
  questionText: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Recommendation {
  id: string;
  to: string;
  text: string;
  message: string;
}

export interface AssessmentDTO {
  questions: Question[];
  recommendations: Recommendation[];
}
