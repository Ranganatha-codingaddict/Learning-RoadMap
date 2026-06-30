import { CategoryGroup } from '../types';
import { programmingTopics } from './programming';
import { dsaTopics } from './dsa';
import { csTopics } from './cs';
import { backendTopics } from './backend';
import { frontendTopics } from './frontend';
import { databasesTopics } from './databases';
import { devopsTopics } from './devops';
import { aiTopics } from './ai';
import { genaiTopics } from './genai';
import { mlopsTopics } from './mlops';
import { seTopics } from './se';
import { careerTopics } from './career';

export const masterSyllabusData: CategoryGroup[] = [
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code2',
    topics: programmingTopics
  },
  {
    id: 'dsa',
    name: 'DSA',
    icon: 'Binary',
    topics: dsaTopics
  },
  {
    id: 'computer_science',
    name: 'Computer Science',
    icon: 'Cpu',
    topics: csTopics
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    topics: backendTopics
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    topics: frontendTopics
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    topics: databasesTopics
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    topics: devopsTopics
  },
  {
    id: 'ai_ml',
    name: 'AI & Machine Learning',
    icon: 'Brain',
    topics: aiTopics
  },
  {
    id: 'gen_ai',
    name: 'Generative AI',
    icon: 'Sparkles',
    topics: genaiTopics
  },
  {
    id: 'mlops',
    name: 'MLOps',
    icon: 'Workflow',
    topics: mlopsTopics
  },
  {
    id: 'software_eng',
    name: 'Software Engineering',
    icon: 'CheckSquare',
    topics: seTopics
  },
  {
    id: 'career',
    name: 'Portfolio & Career',
    icon: 'Briefcase',
    topics: careerTopics
  }
];
