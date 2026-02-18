export interface Persona {
  id: string;
  name: string;
  title: string;
  description: string;
  emoji: string;
  style: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  persona: string;
}

export interface QuizResult {
  primaryPersona: Persona;
  secondaryPersona: Persona;
}

export interface WalkingStats {
  steps: number;
  streak: number;
  date: string;
}

export interface Notification {
  id: string;
  persona: Persona;
  message: string;
  timestamp: string;
}
