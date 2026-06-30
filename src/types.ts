export interface SubTopicItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface RoadmapLevel {
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  concepts: string[];
}

export interface ProjectInfo {
  title: string;
  description: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface TopicBreakdownGroup {
  groupName: string; // e.g. "Core", "REST APIs", "Security"
  items: string[];
}

export interface SyllabusTopic {
  id: string; // e.g., "spring_boot"
  name: string; // e.g., "Spring Boot"
  category: string; // e.g., "Backend"
  roadmap: RoadmapLevel[];
  prerequisites: {
    topics: string[];
    dependencyGraph: string[]; // describe relationships visually or in text
  };
  breakdown: TopicBreakdownGroup[];
  interviewQuestions: InterviewQuestion[];
  miniProjects: ProjectInfo[];
  majorProject: ProjectInfo;
  revisionChecklist: string[];
}

export interface CategoryGroup {
  id: string; // e.g., "programming"
  name: string; // e.g., "Programming"
  icon: string; // Lucide icon name
  topics: SyllabusTopic[];
}
