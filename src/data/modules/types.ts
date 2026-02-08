import { BookOpen } from "lucide-react";

export interface CaseStudy {
  title: string;
  scenario: string;
  result: string;
  keyTakeaway: string;
}

export interface RealData {
  title: string;
  points: string[];
  source: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  examplePrompt: string;
  exampleOutput: string;
  practiceTask: string;
  duration: string;
  caseStudy?: CaseStudy;
  realData?: RealData;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  color: string;
  image: string;
  level: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}
