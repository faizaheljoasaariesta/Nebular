export interface Mentor {
  id: string;
  name: string;
  expertise: string;
  rating: number;
  availableSlots: string[];
}

export interface Question {
  id: string;
  question: string;
  answer?: string;
  askedBy: string;
}

export interface MentorshipHubDTO {
  mentors: Mentor[];
  questions: Question[];
}
