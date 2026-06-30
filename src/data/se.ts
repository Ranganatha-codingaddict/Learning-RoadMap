import { SyllabusTopic } from '../types';

export const seTopics: SyllabusTopic[] = [
  {
    id: 'software_engineering_core',
    name: 'Software Engineering Best Practices',
    category: 'Software Engineering',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Naming Conventions', 'Commenting best practices', 'What is DRY (Don\'t Repeat Yourself)', 'Basic Unit Testing']
      },
      {
        level: 'Intermediate',
        concepts: ['SOLID Principles details', 'Layered & Clean Architecture', 'Code Refactoring techniques', 'Code Review checklist', 'Basic Logging']
      },
      {
        level: 'Advanced',
        concepts: ['Domain-Driven Design (DDD)', 'Performance Profiling & Bottlenecks', 'API documentation standards (OpenAPI)', 'Security checks (OWASP Top 10)']
      },
      {
        level: 'Expert',
        concepts: ['Designing enterprise architectural standards', 'Analyzing zero-day security vulnerabilities', 'Automating custom static code analysis checks']
      }
    ],
    prerequisites: {
      topics: ['Programming', 'Basic System design'],
      dependencyGraph: ['Coding syntax -> Naming conventions -> SOLID principles -> Architectural design -> Security & Profiling']
    },
    breakdown: [
      {
        groupName: 'Clean Code & SOLID',
        items: [
          'Meaningful Names: intent-revealing, pronounceable, searchable variables and classes',
          'Functions: small, single responsibility, few arguments, side-effect free',
          'DRY (Don\'t Repeat Yourself) vs WET (Write Everything Twice) trade-offs',
          'SOLID: Single Responsibility (SRP), Open-Closed (OCP), Liskov Substitution (LSP), Interface Segregation (ISP), Dependency Inversion (DIP)'
        ]
      },
      {
        groupName: 'Architecture & DDD',
        items: [
          'Architectural patterns: Layered Architecture, Clean Architecture, Hexagonal / Ports & Adapters Architecture',
          'Domain-Driven Design (DDD): Ubiquitous Language, Bounded Contexts, Entities, Value Objects, Aggregates, Repositories',
          'Refactoring techniques: Code smells, Extract Method, Rename Variable, Replace loops with pipelines'
        ]
      },
      {
        groupName: 'Testing & Logging',
        items: [
          'Testing types: Unit, Integration, System, Acceptance, Performance, Regression tests',
          'TDD (Test-Driven Development) cycle: Red, Green, Refactor',
          'Logging best practices: Log levels (DEBUG, INFO, WARN, ERROR, FATAL)',
          'Structured Logging (JSON formatting) and log aggregation (ELK, Splunk)',
          'Avoid logging sensitive data (PII, passwords, keys)'
        ]
      },
      {
        groupName: 'Security & Documentation',
        items: [
          'OWASP Top 10 vulnerabilities (SQL Injection, XSS, Broken Auth, CSRF, etc.)',
          'Secure coding: Input validation, prepared statements, secure communications',
          'API Documentation: Writing high-quality OpenAPI/Swagger definitions, self-documenting code',
          'Code Reviews: constructive feedback, checklists, automated linters (ESLint, SonarQube)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the Liskov Substitution Principle (LSP).",
        answer: "LSP states that objects of a superclass should be replaceable with objects of a subclass without breaking the application or altering its correctness. It means subclasses must respect the interface contracts, pre-conditions, and post-conditions defined by the parent class, avoiding throwing unexpected exceptions or ignoring inherited states."
      },
      {
        question: "What is Hexagonal Architecture (Ports & Adapters)?",
        answer: "Hexagonal Architecture decouples the core business logic from external systems (like databases, UI, third-party APIs). Business logic defines 'Ports' (interfaces) for communication. External services implement 'Adapters' to connect to those ports. This isolates business rules, making the system highly testable and independent of framework changes."
      }
    ],
    miniProjects: [
      { title: "Refactored Legacy Codebase", description: "Take a poorly structured legacy file, identify code smells, and refactor it into clean, SOLID-compliant code." },
      { title: "Secure API Handler with Logging", description: "Write an API route handler that filters SQL injections, logs transaction metadata in JSON, and hides sensitive user attributes." }
    ],
    majorProject: {
      title: "Clean Architecture Core Enterprise Service",
      description: "Build a complete backend microservice following Hexagonal/Clean Architecture, incorporating domain models, input ports, JPA adapters, Mockito test boundaries, and structured JSON logs."
    },
    revisionChecklist: [
      'Contrast DRY vs WET principles',
      'Explain SOLID Dependency Inversion vs dependency injection',
      'Select correct log level for database query timeouts',
      'Identify cross-site scripting (XSS) prevention techniques',
      'Write constructive comments on code reviews'
    ]
  }
];
