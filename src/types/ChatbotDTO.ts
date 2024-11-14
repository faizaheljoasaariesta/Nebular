export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  message: string;
  timestamp: string;
}

export interface ChatDTO {
  messages: ChatMessage[];
}
