import { SyllabusTopic } from '../types';

export const backendTopics: SyllabusTopic[] = [
  {
    id: 'spring_boot',
    name: 'Spring Boot & Enterprise Java',
    category: 'Backend',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Spring Architecture', 'IoC (Inversion of Control)', 'Dependency Injection', 'Beans & Bean Lifecycle', 'Auto-Configuration']
      },
      {
        level: 'Intermediate',
        concepts: ['Spring Data JPA', 'Hibernate ORM', 'Database Relationships (@OneToMany, @ManyToOne)', 'Transactions (@Transactional)', 'Query Methods & JPQL']
      },
      {
        level: 'Advanced',
        concepts: ['Spring Security Architecture', 'JWT Authentication', 'OAuth2 Integrations', 'Role-Based Access Control', 'Distributed Tracing (Sleuth/Zipkin)']
      },
      {
        level: 'Expert',
        concepts: ['Spring Native with GraalVM', 'Reactive Spring (WebFlux, Project Reactor)', 'Performance Tuning of Hibernate 2nd Level Cache', 'Custom Spring Starters development']
      }
    ],
    prerequisites: {
      topics: ['Java Programming', 'SQL & Relational DBs'],
      dependencyGraph: ['Java -> Spring Core (DI) -> Spring Boot Auto-config -> JPA/Hibernate -> Security & Microservices']
    },
    breakdown: [
      {
        groupName: 'Spring Core & Boot Basics',
        items: [
          'Spring Framework Architecture modules',
          'Inversion of Control (IoC) and Dependency Injection (DI)',
          'Spring Beans definition, scopes (Singleton, Prototype, Request, Session)',
          'Spring Bean Lifecycle hooks (init, destroy, PostConstruct, PreDestroy)',
          'Spring Boot Auto-Configuration mechanism (@EnableAutoConfiguration, spring.factories)',
          'Spring Boot Starters, POM structure, and properties configuration'
        ]
      },
      {
        groupName: 'REST APIs & Web MVC',
        items: [
          'Spring MVC pattern, DispatcherServlet routing',
          '@RestController, @Controller, @RequestMapping, @GetMapping, @PostMapping',
          'DTO (Data Transfer Object) Pattern and Object Mapping (MapStruct, ModelMapper)',
          'Request Validation (@Valid, @NotNull, @Size, @Email)',
          'Global Exception Handling (@ControllerAdvice, @ExceptionHandler)',
          'Pagination and Sorting (Pageable, Sort, Page response wrappers)',
          'File Upload and Download handling'
        ]
      },
      {
        groupName: 'Spring Data JPA & Hibernate',
        items: [
          'JPA specification vs Hibernate ORM implementation',
          'Entity mapping (@Entity, @Table, @Id, @GeneratedValue)',
          'Relationships mapping (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany, FetchType.LAZY/EAGER)',
          'Spring Data JPA Repositories: JpaRepository, CrudRepository',
          'Query creation methods: Query creation by method names',
          'JPQL (Java Persistence Query Language) and Native SQL queries',
          'Transaction Management (@Transactional propagation, isolation, rollback policies)',
          'N+1 Select Query problem and fetch join optimizations'
        ]
      },
      {
        groupName: 'Microservices & Enterprise Features',
        items: [
          'Microservices patterns and Eureka Service Discovery',
          'API Gateway routing and filtering (Spring Cloud Gateway)',
          'Distributed Configuration (Spring Cloud Config Server)',
          'Declarative REST Clients with Spring Cloud OpenFeign',
          'Resilience and Fault Tolerance (Resilience4j Circuit Breaker, Rate Limiter)',
          'Distributed Tracing (Spring Cloud Sleuth, Zipkin, Micrometer)',
          'Messaging integrations (Spring Kafka, Spring AMQP/RabbitMQ)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the N+1 Select Query problem in Hibernate and how to solve it.",
        answer: "The N+1 problem occurs when Hibernate executes 1 query to fetch a parent entity, and then executes N separate queries to fetch the associated child entities for each parent (especially with Lazy fetching). It can be resolved by using `JOIN FETCH` in JPQL/HQL queries, using EntityGraphs (`@EntityGraph`), or setting the fetch size property."
      },
      {
        question: "How does @Transactional work internally in Spring?",
        answer: "Spring uses dynamic AOP (Aspect-Oriented Programming) proxies to implement `@Transactional`. When a method annotated with it is called, the proxy intercepts the call, opens a database connection, starts a transaction, executes the actual method, and commits the transaction if successful (or rolls back if a RuntimeException occurs), managing the connection lifecycle seamlessly."
      }
    ],
    miniProjects: [
      { title: "Personal Budgeting API", description: "Build a Spring Boot REST API that manages expenses, performing validation, pagination, and sorting with a PostgreSQL database." },
      { title: "Task Manager Service Client", description: "Create a pair of Spring microservices that communicate using OpenFeign and Eureka discovery, sharing configuration parameters." }
    ],
    majorProject: {
      title: "Enterprise Multi-Service E-Commerce Engine",
      description: "Develop a robust microservices-based e-commerce platform in Spring Boot incorporating Eureka discovery, API Gateway, Spring Cloud Config, resilience patterns, Kafka-driven order events, and JPA query optimization."
    },
    revisionChecklist: [
      'Compare Spring Boot constructor injection vs field injection',
      'Explain difference between bean scopes Singleton and Prototype',
      'Demonstrate how to write a global exception handler using @ControllerAdvice',
      'Optimize lazy relationship querying using a FETCH JOIN',
      'Define the role of Spring Cloud Gateway'
    ]
  },
  {
    id: 'backend_apis_security',
    name: 'APIs, Security, WebSockets & Testing',
    category: 'Backend',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['HTTP Request/Response cycle', 'REST Principles & Status Codes', 'Basic Authentication', 'Unit Testing basics']
      },
      {
        level: 'Intermediate',
        concepts: ['GraphQL schema & queries', 'JWT token components', 'OAuth2 Authorization Code flow', 'WebSockets protocol', 'Mockito mocks and spies']
      },
      {
        level: 'Advanced',
        concepts: ['CORS & CSRF protections', 'GraphQL resolvers, mutations, and dataloaders', 'WebSocket message brokers (STOMP)', 'Integration testing with Testcontainers']
      },
      {
        level: 'Expert',
        concepts: ['Designing federated GraphQL gateways', 'Securing high-availability real-time APIs', 'Advanced mock structures and behavior injections']
      }
    ],
    prerequisites: {
      topics: ['Programming basics', 'Networking basics'],
      dependencyGraph: ['HTTP -> REST APIs -> Token Security (JWT) -> Real-time Protocols (WebSockets) -> API Testing']
    },
    breakdown: [
      {
        groupName: 'REST & GraphQL APIs',
        items: [
          'RESTful architecture constraints (Statelessness, Uniform interface, Cacheability)',
          'HTTP Methods (GET, POST, PUT, DELETE, PATCH) and HTTP status codes meanings',
          'Idempotency in REST APIs',
          'GraphQL Foundations: Schema Definition Language (SDL), Queries, Mutations, Subscriptions',
          'GraphQL execution: Resolvers, Schema types, fields',
          'The N+1 problem in GraphQL and solutions (DataLoader pattern)'
        ]
      },
      {
        groupName: 'API Security & Authentication',
        items: [
          'Authentication vs Authorization',
          'JWT (JSON Web Token): Header, Payload, Signature encoding and validation',
          'OAuth2 Roles (Resource Owner, Resource Server, Client, Authorization Server)',
          'OAuth2 Flows: Authorization Code, Client Credentials, Resource Owner Password, Implicit',
          'CORS (Cross-Origin Resource Sharing) headers and preflight requests',
          'CSRF (Cross-Site Request Forgery) mechanisms and token defenses'
        ]
      },
      {
        groupName: 'Real-time & WebSockets',
        items: [
          'HTTP polling vs Long-polling vs Server-Sent Events (SSE) vs WebSockets',
          'WebSocket Handshake and framing protocol',
          'Sub-protocols over WebSockets: STOMP, WAMP',
          'Scaling WebSockets using Redis Pub/Sub backends'
        ]
      },
      {
        groupName: 'Testing (JUnit & Mockito)',
        items: [
          'Testing Pyramid: Unit tests, Integration tests, End-to-end tests',
          'JUnit: Assertions, Annotations (@Test, @BeforeEach, @AfterEach, @ParameterizedTest)',
          'Mockito: Creating mocks vs spies, stubbing method calls (when-thenReturn)',
          'Verifying invocations, argument matchers, capturing arguments',
          'Integration testing using databases, using Testcontainers'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between OAuth2 and JWT?",
        answer: "OAuth2 is an authorization framework that defines protocols and flows for granting access to third-party applications without sharing passwords. JWT is a self-contained token format used to securely transmit information (claims) between parties. JWT can be used as the actual 'Access Token' format within an OAuth2 implementation, but they are different concepts."
      },
      {
        question: "How do WebSockets differ from standard HTTP?",
        answer: "HTTP is a request-response, half-duplex protocol where the client must initiate every request. WebSockets provide a full-duplex, persistent connection over a single TCP socket, allowing both client and server to push messages at any time without the overhead of HTTP headers after the initial handshake."
      }
    ],
    miniProjects: [
      { title: "Collaborative Real-time Whiteboard API", description: "Build a raw WebSocket endpoint in Node/TS that broadcasts pen coordinate events to all connected clients." },
      { title: "Strict JWT Token Gatekeeper", description: "Write a security filter in Node/TS that parses incoming Bearer JWT tokens, validates signatures, and maps claims to route roles." }
    ],
    majorProject: {
      title: "High-Availability Trading & Analytics Service",
      description: "Design a high-frequency telemetry API supporting REST analytics, a real-time GraphQL subscription feed, JWT role controls, and a complete suite of JUnit and Testcontainers integration tests."
    },
    revisionChecklist: [
      'Describe components of a JWT structure',
      'Explain Authorization Code Flow with PKCE steps',
      'Explain when to use GraphQL over REST APIs',
      'Stub void methods using Mockito doNothing/doThrow',
      'Write a parametrized test to check inputs'
    ]
  }
];
