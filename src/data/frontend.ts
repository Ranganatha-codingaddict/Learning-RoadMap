import { SyllabusTopic } from '../types';

export const frontendTopics: SyllabusTopic[] = [
  {
    id: 'html_css_tailwind',
    name: 'HTML, CSS & Tailwind CSS',
    category: 'Frontend',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['HTML Document Structure', 'Semantic Elements (header, article, footer)', 'CSS Selectors & Basic Box Model', 'Colors & Fonts in CSS']
      },
      {
        level: 'Intermediate',
        concepts: ['Flexbox Layouts', 'CSS Grid Layouts', 'Responsive Web Design (Media Queries)', 'Tailwind CSS Utility Philosophy', 'Tailwind Responsive Prefixes']
      },
      {
        level: 'Advanced',
        concepts: ['CSS Transitions, Keyframe Animations', 'Tailwind custom theme configurations', 'Tailwind plugins', 'CSS Variables & Dark Mode setups', 'Web Accessibility (ARIA, Screen readers)']
      },
      {
        level: 'Expert',
        concepts: ['Subgrid layouts', 'Advanced CSS Houdini APIs', 'Designing customized headless design systems', 'Complex cross-browser layout polyfills']
      }
    ],
    prerequisites: {
      topics: ['Basic Web concepts'],
      dependencyGraph: ['Web browser -> HTML Markup -> CSS Styles -> Flexbox/Grid -> Tailwind Utility Classes']
    },
    breakdown: [
      {
        groupName: 'Semantic HTML & Accessibility',
        items: [
          'Document structure, head elements, metadata tags',
          'Semantic tags (nav, main, section, article, aside, footer, header)',
          'HTML5 Form elements, inputs, validations, attributes',
          'SEO-friendly elements and OpenGraph tags',
          'Web Accessibility (A11Y): ARIA roles, attributes (aria-label, aria-live), keyboard navigation, semantic contrast'
        ]
      },
      {
        groupName: 'CSS Core & Modern Layouts',
        items: [
          'The Box Model: content, padding, border, margin, box-sizing (border-box vs content-box)',
          'CSS Selectors, Combinators, Specificity calculation rules',
          'Flexbox Layout: flex-container properties (justify, align, wrap) vs flex-items (grow, shrink, basis)',
          'CSS Grid Layout: columns, rows, template areas, gaps, autofill/autofit',
          'Positioning (static, relative, absolute, fixed, sticky) and z-index contexts'
        ]
      },
      {
        groupName: 'Tailwind CSS & Utility-First Styling',
        items: [
          'Utility-first styling approach advantages',
          'Tailwind configurations: tailwind.config.js, extending themes, custom fonts, colors',
          'Responsive design in Tailwind using breakpoints prefixes (sm:, md:, lg:, xl:)',
          'State modifiers in Tailwind (hover:, focus:, active:, dark:, group-hover:)',
          'Custom arbitrary classes, JIT compiler optimizations',
          'Purging unused CSS and bundling configurations'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is CSS Specificity and how is it calculated?",
        answer: "Specificity determines which CSS rule is applied when multiple rules match an element. It is calculated as a 3-part score: (1) ID selectors, (2) Class, attribute, and pseudo-class selectors, and (3) Element and pseudo-element selectors. Inline styles have higher specificity, and `!important` overrides everything regardless of specificity scores."
      },
      {
        question: "Explain the difference between `flex-grow`, `flex-shrink`, and `flex-basis`.",
        answer: "`flex-basis` defines the default size of an item before remaining space is distributed. `flex-grow` defines the item's ability to grow if there is extra space, representing a proportional weight. `flex-shrink` defines the item's ability to shrink if there is insufficient space."
      }
    ],
    miniProjects: [
      { title: "Fully Responsive Bento Grid Portolio", description: "Build a responsive grid portfolio layout using CSS Grid, Flexbox, and Tailwind breakpoints with dynamic hover states." },
      { title: "Accessible Registration Form", description: "Create a registration form with strict custom focus outlines, keyboard traps prevention, and screen-reader ARIA states." }
    ],
    majorProject: {
      title: "Interactive Web Design System & Theme Engine",
      description: "Develop a custom headless design system using Tailwind, featuring custom themes, typography classes, variables, dark mode triggers, and a component playground."
    },
    revisionChecklist: [
      'Compare inline vs block-level HTML elements',
      'Describe CSS specificity hierarchy',
      'Explain difference between position absolute and position fixed',
      'Demonstrate how to write responsive layouts in Tailwind',
      'Understand the role of viewport meta tag in mobile views'
    ]
  },
  {
    id: 'react_nextjs',
    name: 'React & Next.js',
    category: 'Frontend',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['React JSX syntax', 'Components, Props & State', 'React Hooks (useState, useEffect)', 'Event Handling']
      },
      {
        level: 'Intermediate',
        concepts: ['Custom Hooks creation', 'React Context API', 'Form Handling & Inputs', 'React Router routing', 'Next.js App Router basics', 'Static Site Generation (SSG) vs SSR']
      },
      {
        level: 'Advanced',
        concepts: ['React Performance (useMemo, useCallback, React.memo)', 'Error Boundaries', 'Next.js Server Components vs Client Components', 'Next.js API Routes, Server Actions', 'Next.js Middleware, Dynamic Routes']
      },
      {
        level: 'Expert',
        concepts: ['Custom React Renderers', 'React Server Components (RSC) hydration stream architecture', 'Designing advanced micro-frontends setups', 'Next.js advanced edge caching and incremental regeneration']
      }
    ],
    prerequisites: {
      topics: ['Advanced JavaScript', 'Tailwind CSS'],
      dependencyGraph: ['JS Core -> ES6 Modules -> React Hooks -> React Context -> Next.js SSR / Server Components']
    },
    breakdown: [
      {
        groupName: 'React Core & Hooks',
        items: [
          'Declarative UI, Virtual DOM reconciliation, Fiber architecture',
          'Component lifecycle and hooks: useState, useEffect (rules, cleanups, dependencies)',
          'Referential stability: useMemo, useCallback, useRef',
          'Component composition, props, lifting state up',
          'Managing forms: Controlled vs Uncontrolled components',
          'State management: Context API, Redux/Zustand foundations'
        ]
      },
      {
        groupName: 'React Performance & Lifecycle',
        items: [
          'Preventing unnecessary renders with React.memo',
          'Code splitting & lazy loading (React.lazy, Suspense)',
          'Error Boundaries implementation (@catchException analogs)',
          'Concurrent React features (useTransition, useDeferredValue)'
        ]
      },
      {
        groupName: 'Next.js & Server Architectures',
        items: [
          'Vite SPA routing vs Next.js File-system routing (App Router)',
          'Next.js Server Components (RSC) vs Client Components ("use client")',
          'Data Fetching: SSR (Server-Side Rendering) vs SSG (Static Site Generation) vs ISR (Incremental Static Regeneration)',
          'Next.js Server Actions for forms, updates, database actions without explicit API routes',
          'Next.js Metadata API, SEO optimization, Route Handlers',
          'Next.js Middleware, routing rules, redirects'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "How does React's reconciliation/Virtual DOM work?",
        answer: "When state changes, React builds a new Virtual DOM tree. It then compares this tree with the previous Virtual DOM tree using a diffing algorithm (Reconciliation). React identifies the exact nodes that changed and updates only those specific nodes in the real DOM (Commit phase), reducing expensive DOM manipulation operations."
      },
      {
        question: "What are Next.js Server Components (RSC) and how do they differ from Client Components?",
        answer: "React Server Components are executed and rendered exclusively on the server, sending pre-rendered HTML/JSON to the browser with zero client-side JavaScript overhead. Client Components are annotated with 'use client' and are hydrated in the browser, allowing interactive state, event listeners, and browser-only APIs."
      },
      {
        question: "What is the dependency array in useEffect and how do you avoid stale closures?",
        answer: "The dependency array tells React when to re-run the effect. If empty, it runs once. If it has items, it runs whenever those items change. If a variable is used inside the effect but omitted from the dependencies, a stale closure occurs, meaning the effect references outdated values of that variable. Avoid this by adding all referenced values to the dependencies or using updater functions."
      }
    ],
    miniProjects: [
      { title: "Dynamic Task Board with Drag/Drop", description: "Build a Trello-like board in React using hooks and context to manage columns, cards, and reordering state." },
      { title: "Next.js Static Blog with Markdown", description: "Create a Next.js App Router blog that parses static Markdown files into static paths using Incremental Static Regeneration." }
    ],
    majorProject: {
      title: "Feature-Rich Interactive Engineering Learning Workspace",
      description: "Develop an advanced Next.js web application incorporating server components, client playgrounds, responsive state dashboards, API mock routes, middleware protection rules, and SEO configurations."
    },
    revisionChecklist: [
      'Describe why you cannot call hooks inside loops or conditions',
      'Explain when to use useMemo vs useCallback',
      'Contrast SSR vs ISR in Next.js',
      'Explain how hydration works in React',
      'Use Suspense to manage loading states of async client components'
    ]
  }
];
