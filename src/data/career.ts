import { SyllabusTopic } from '../types';

export const careerTopics: SyllabusTopic[] = [
  {
    id: 'portfolio_and_career',
    name: 'Career Prep, Portfolio & Interviewing',
    category: 'Portfolio & Career',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Creating a professional GitHub account', 'Resume formatting basics', 'LeetCode Easy sorting & searching', 'Basic behavioral examples']
      },
      {
        level: 'Intermediate',
        concepts: ['Polishing project READMEs', 'LeetCode Medium graphs and trees', 'Formatting resume using STAR method', 'Open Source contributions basics']
      },
      {
        level: 'Advanced',
        concepts: ['Building custom portfolios', 'LeetCode Hard dynamic programming', 'Behavioral mock interviews', 'Writing custom Open Source packages']
      },
      {
        level: 'Expert',
        concepts: ['Design system contributions', 'Speaking at tech conferences', 'Negotiating high-value senior compensation packages']
      }
    ],
    prerequisites: {
      topics: ['Programming', 'DSA', 'System Design'],
      dependencyGraph: ['Coding Skills -> LeetCode Prep -> Project Portfolio -> Resume Building -> Interview Execution']
    },
    breakdown: [
      {
        groupName: 'Resume & LinkedIn Checklist',
        items: [
          'Resume Formatting: single page, clean fonts, chronological order, PDF layout exports',
          'STAR Method: Situation, Task, Action, Result for describing impact',
          'Focus on quantitative metrics: "Optimized database queries, reducing API latency by 45%"',
          'LinkedIn: professional headshot, clear headline containing target roles, detailed project links, active summaries'
        ]
      },
      {
        groupName: 'GitHub & Portfolio Checklist',
        items: [
          'GitHub Profile: clear profile readme, pinned projects, consistent contributions grid',
          'Project Repositories: highly detailed READMEs (architecture diagrams, setup commands, tech stack, screenshots)',
          'Portfolio Website: responsive, fast loading, custom domain, links to live demos, resumes, contact forms'
        ]
      },
      {
        groupName: 'LeetCode & Problem Solving Tracker',
        items: [
          'LeetCode Tracker: solve at least 150-200 curated questions (Blind 75, NeetCode 150)',
          'Track topics distribution: Arrays, Two-Pointers, Sliding Window, Graphs, Trees, DP, Backtracking',
          'Log optimal time & space complexities for each solved problem'
        ]
      },
      {
        groupName: 'Behavioral Interviews (STAR)',
        items: [
          'STAR Stories: Prepare at least 5-6 stories covering conflict resolution, leading projects, failing, and adapting to changes',
          'Tone: Humble, collaborative, focus on growth, learning outcomes, team-first mentalities',
          'Follow-up questions: Ask insightful questions about the company\'s engineering culture'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "How do you explain a project using the STAR method?",
        answer: "1. **Situation**: Set the scene (e.g., 'Our e-commerce portal was failing under heavy search traffic load'). 2. **Task**: Define your target (e.g., 'I was tasked with reducing database query latency'). 3. **Action**: Explain what YOU did (e.g., 'I profiled queries using EXPLAIN, added composite B-Tree indexes, and integrated a Redis cache layer'). 4. **Result**: Detail the measurable outcome (e.g., 'This reduced page load times by 65% and supported 3x concurrent sessions')."
      },
      {
        question: "How do you handle a situation where you disagree with a teammate's architectural decision?",
        answer: "Approach the situation objectively and constructively: 1. Listen first to understand their reasoning. 2. Present data/benchmarks rather than opinions (e.g. running mock loads or comparing design trade-offs). 3. Seek common ground and align on the project's core goals. 4. If a decision is made, disagree but commit to make the project succeed."
      }
    ],
    miniProjects: [
      { title: "Personal Readme Customizer", description: "Design a markdown customizer tool that creates beautiful, high-quality GitHub profile readmes with tags and stats." },
      { title: "LeetCode Progress Tracker Dashboard", description: "Build a client dashboard that logs solved questions, topics, difficulty ratings, and next review dates." }
    ],
    majorProject: {
      title: "Comprehensive Responsive Portfolio & Resume Builder",
      description: "Develop a complete interactive portfolio console containing structured projects catalogs, PDF resume download modules, live LeetCode progress meters, and form dispatch setups."
    },
    revisionChecklist: [
      'Format resume bullet points using the Action-Impact model',
      'Pin top 3 polished GitHub repositories with detailed READMEs',
      'Solve and document optimal solutions for the Blind 75 questions list',
      'Formulate 5 STAR behavioral narratives on conflict, failures, and leadership',
      'Review high-level system design topics for scalability interviews'
    ]
  }
];
