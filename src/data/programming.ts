import { SyllabusTopic } from '../types';

export const programmingTopics: SyllabusTopic[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Variables & Data Types', 'Operators & Expressions', 'Control Flow (If/Else, Loops)', 'Methods & Parameters', 'Basic Array Operations', 'Introduction to Classes & Objects']
      },
      {
        level: 'Intermediate',
        concepts: ['OOP Principles (Inheritance, Polymorphism, Encapsulation, Abstraction)', 'Abstract Classes & Interfaces', 'Exception Handling (Try-Catch, Custom Exceptions)', 'Java Collections Framework (List, Set, Map)', 'File I/O (Reader, Writer, Streams)', 'Generics']
      },
      {
        level: 'Advanced',
        concepts: ['Multithreading & Concurrency (Thread, Runnable, Executors, Locks)', 'Java Stream API & Lambda Expressions', 'Functional Interfaces', 'Reflection API', 'Java Memory Management (JVM, Garbage Collection, Heap vs Stack)', 'Design Patterns in Java']
      },
      {
        level: 'Expert',
        concepts: ['JVM Performance Tuning', 'Java Agent & Bytecode Manipulation', 'Advanced Concurrency (ForkJoin, CompletableFuture, Memory Barriers)', 'Reactive Programming in Java', 'Custom ClassLoaders', 'GraalVM & Native Compilation']
      }
    ],
    prerequisites: {
      topics: ['Basic Algorithmic Logic', 'Flowcharts & Pseudocode'],
      dependencyGraph: ['Algorithmic Logic -> Basic Syntax -> Object-Oriented Programming -> Advanced Concurrency & JVM Internals']
    },
    breakdown: [
      {
        groupName: 'Syntax & Language Basics',
        items: ['Primitive Data Types vs Reference Types', 'Operators, Precedence & Bitwise Shift Operations', 'String vs StringBuilder vs StringBuffer', 'Control Structures (if-else, switch, loops)', 'Arrays (Single and Multi-dimensional)', 'Varargs and Method Overloading']
      },
      {
        groupName: 'Object-Oriented Programming',
        items: ['Classes, Objects, Constructors', 'Inheritance (super keyword, method overriding)', 'Polymorphism (Runtime vs Compile-time)', 'Encapsulation & Access Modifiers (private, default, protected, public)', 'Abstraction (Abstract Classes vs Interfaces)', 'Static and Final Keywords', 'Composition vs Inheritance']
      },
      {
        groupName: 'Exception Handling',
        items: ['Checked vs Unchecked Exceptions', 'Try-Catch-Finally Blocks & Try-with-resources', 'Throw and Throws Keywords', 'Exception Hierarchy (Throwable, Exception, RuntimeException)', 'Creating Custom Exceptions', 'Best Practices in Exception Handling']
      },
      {
        groupName: 'Collections & Generics',
        items: ['List Interface (ArrayList, LinkedList, Vector)', 'Set Interface (HashSet, LinkedHashSet, TreeSet)', 'Map Interface (HashMap, LinkedHashMap, TreeMap, Hashtable)', 'Queue and Deque (ArrayDeque, PriorityQueue)', 'Iterator and ListIterator', 'Generics (Classes, Methods, Wildcards <?>)']
      },
      {
        groupName: 'Concurrency & Multithreading',
        items: ['Creating Threads (Thread class, Runnable interface)', 'Thread Lifecycle and States', 'Synchronization & Locks (synchronized block, ReentrantLock)', 'Inter-thread Communication (wait, notify, notifyAll)', 'Executor Framework (ThreadPoolExecutor, ScheduledExecutor)', 'Thread-Safe Collections (ConcurrentHashMap, CopyOnWriteArrayList)', 'Volatile and Atomic Variables', 'Deadlock, Livelock, Thread Starvation']
      },
      {
        groupName: 'Java Stream API & Lambdas',
        items: ['Lambda Expressions syntax', 'Functional Interfaces (@FunctionalInterface, Consumer, Supplier, Predicate, Function)', 'Stream Creation and Pipeline', 'Intermediate Operations (filter, map, flatMap, sorted, distinct)', 'Terminal Operations (collect, forEach, reduce, findFirst, match)', 'Parallel Streams & Performance implications', 'Optional Class API']
      },
      {
        groupName: 'JVM Architecture & Memory Management',
        items: ['JVM Subsystems (Classloader, JVM Memory, Execution Engine)', 'Heap vs Stack Memory Allocation', 'Garbage Collection Algorithms (G1GC, ZGC, CMS)', 'Strong, Weak, Soft, and Phantom References', 'Memory Leaks detection in Java', 'JIT Compiler and Bytecode basics']
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between String, StringBuilder, and StringBuffer?",
        answer: "String is immutable and any modification creates a new object. StringBuilder is mutable but not thread-safe, making it faster for single-threaded environments. StringBuffer is mutable and thread-safe because its methods are synchronized, making it slower than StringBuilder but safe for multi-threaded operations."
      },
      {
        question: "How does HashMap work internally in Java?",
        answer: "HashMap works on the principle of Hashing. It uses hashCode() to determine the bucket location and equals() to find the correct element in case of collisions. In Java 8, if a bucket's collision threshold exceeds 8, the linked list is converted into a self-balancing Red-Black tree to improve search time from O(n) to O(log n)."
      },
      {
        question: "What is the difference between custom Thread and Runnable interface?",
        answer: "Implementing Runnable is preferred because Java only supports single class inheritance. Extending Thread limits your class from extending any other class, whereas implementing Runnable allows you to keep the inheritance chain open and promotes better decoupling of task execution and thread spawning."
      }
    ],
    miniProjects: [
      { title: "Student Management System", description: "Build a console-based application using Java Collections, File I/O, and OOP principles to manage student records with sorting, filtering, and persistence." },
      { title: "Multi-threaded Web Downloader", description: "Create a Java tool using ExecutorService and HTTP Clients that downloads multiple files in parallel with status logging and speed calculations." }
    ],
    majorProject: {
      title: "Real-time High-throughput Message Broker",
      description: "Develop a custom local message broker from scratch in Java utilizing non-blocking Socket Channels (NIO), custom binary serialization, concurrent ring buffers, and a custom JVM Garbage Collection configuration."
    },
    revisionChecklist: [
      'Understand Equals vs Hashcode contract',
      'Explain difference between interface default methods and abstract classes',
      'Describe Java 8 Stream lazy evaluation and terminal triggers',
      'Explain thread states and transition diagrams',
      'Identify heap out-of-memory vs stack-overflow causes'
    ]
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Syntax & Indentation', 'Variables & Basic Types', 'Conditional Logic', 'Loops (For, While)', 'Functions & Scopes', 'Lists, Tuples, Dictionaries, Sets']
      },
      {
        level: 'Intermediate',
        concepts: ['List Comprehensions', 'File Handling & Context Managers (with)', 'Exception Handling', 'OOP in Python (Classes, Self, Inheritance)', 'Modules & Packages', 'Iterators & Generators']
      },
      {
        level: 'Advanced',
        concepts: ['Decorators', 'Metaclasses', 'Asynchronous Programming (asyncio)', 'Multiprocessing vs Multithreading (GIL)', 'Memory Management & Garbage Collection', 'C Extensions & Cython']
      },
      {
        level: 'Expert',
        concepts: ['Writing Python Compilers/Parsers', 'Advanced Memory Profiling & Optimization', 'Dynamic Bytecode Modification', 'Building Custom C-based Python modules', 'Framework Architecture Design']
      }
    ],
    prerequisites: {
      topics: ['Basic Computing Logic'],
      dependencyGraph: ['Logic -> Basic Syntax -> Data Structures -> OOP -> Meta-Programming & Asynchronous Engines']
    },
    breakdown: [
      {
        groupName: 'Python Basics & Built-ins',
        items: ['Dynamic Typing and Basic Numeric Types', 'Mutable vs Immutable Types (Lists vs Tuples)', 'String Formatting (f-strings, format, %)', 'Slicing & Indexing protocols', 'Dictionary and Set implementation (Hash collision)', 'Control Flow and loop constructs (else with loops)']
      },
      {
        groupName: 'Functional Features & Idioms',
        items: ['List, Dict, and Set Comprehensions', 'Lambda Functions & Map, Filter, Reduce', 'Generators & Yield statements (Memory efficiency)', 'Iterators and the __iter__ and __next__ protocols', 'Built-in functions (zip, enumerate, sorted, any, all)', 'Scope rules (LEGB rule: Local, Enclosing, Global, Built-in)']
      },
      {
        groupName: 'Object-Oriented Programming',
        items: ['Classes, Objects, and the `self` parameter', 'Constructors (__init__, __new__)', 'Inheritance, Multiple Inheritance, and MRO (C3 Linearization)', 'Polymorphism and Duck Typing', 'Dunder / Magic Methods (__str__, __repr__, __call__, __getitem__)', 'Property Decorators (@property, @setter, @deleter)', 'Class methods vs Static methods']
      },
      {
        groupName: 'Advanced Meta-Programming',
        items: ['Decorators (Function & Class decorators, stateful decorators)', 'Context Managers (__enter__, __exit__, @contextmanager)', 'Descriptors protocol (__get__, __set__, __delete__)', 'Metaclasses (__metaclass__, type creation override)', 'Dynamic attribute access (__getattr__, __getattribute__, __setattr__)']
      },
      {
        groupName: 'Concurrency & Internals',
        items: ['The Global Interpreter Lock (GIL) and its implications', 'Threading vs Multiprocessing modules', 'Asynchronous programming with `asyncio` (coroutines, event loop, tasks)', 'Queue and synchronization primitives', 'Python Memory Management (reference counting, cyclic GC)']
      }
    ],
    interviewQuestions: [
      {
        question: "What is Python's GIL and why is it important?",
        answer: "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. This makes Python multi-threading CPU-bound tasks ineffective, requiring the `multiprocessing` library instead to achieve true parallelism."
      },
      {
        question: "Explain the difference between __new__ and __init__.",
        answer: "__new__ is the actual creator of the class instance (it is a static method that returns a new instance of the class), whereas __init__ is the initializer of the created instance (it receives the instance as `self` and initializes its attributes)."
      },
      {
        question: "How do Python generators save memory?",
        answer: "Generators use the `yield` statement to return one element at a time on-demand (lazy evaluation), instead of loading the entire sequence into memory. The execution state of the function is paused and resumed, using constant O(1) memory space."
      }
    ],
    miniProjects: [
      { title: "Task Scheduler", description: "Build an asynchronous tasks daemon using `asyncio` that runs periodic background jobs and logs completion statistics to a file." },
      { title: "Custom OOP ORM", description: "Create a simple Python Object-Relational Mapper using Metaclasses and Descriptors that dynamically maps Python class fields to SQL statements." }
    ],
    majorProject: {
      title: "Distributed Async Job Queue System",
      description: "Build a highly scalable, fault-tolerant distributed job queue in Python using `asyncio`, customized TCP protocol handlers, process pools for CPU work, and heartbeats for worker node tracking."
    },
    revisionChecklist: [
      'Master list comprehension & dict comprehension syntax',
      'Explain MRO (Method Resolution Order) and multiple inheritance',
      'Explain reference counting vs generational garbage collection',
      'Write a function decorator that caches function results (memoization)',
      'Explain when to use async, threading, or multiprocessing'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Variables (let, const, var)', 'Basic Operators', 'Conditionals & Loops', 'Functions (Arrow and Regular)', 'Arrays and Objects', 'DOM Manipulation Basics']
      },
      {
        level: 'Intermediate',
        concepts: ['Scope & Closures', 'This Keyword Binding', 'Prototypes & Prototypal Inheritance', 'ES6+ Features (Destructuring, Spread/Rest, Modules)', 'Asynchronous JS (Callbacks, Promises, Async/Await)', 'Fetch API & Ajax']
      },
      {
        level: 'Advanced',
        concepts: ['Event Loop & Microtask Queue', 'Memory Management & Garbage Collection', 'Metaprogramming (Proxies, Reflect)', 'Web Workers & Shared Workers', 'JS Engines (V8, JIT compilation, hidden classes)']
      },
      {
        level: 'Expert',
        concepts: ['V8 Performance Tuning', 'Custom JS Engines/Runtimes', 'Assembly/WASMBindings', 'Memory Leak Profiling in Chrome DevTools', 'Advanced Polyfills Implementation']
      }
    ],
    prerequisites: {
      topics: ['HTML Basics', 'Logical thinking'],
      dependencyGraph: ['Web Elements -> Basic JS Syntax -> Asynchronous JS -> Browser APIs & Engine Execution']
    },
    breakdown: [
      {
        groupName: 'Language Fundementals & ES6+',
        items: ['Variables & Scopes (Block scope, Function scope, hoisting)', 'Data Types (Primitives vs Object, Symbol, BigInt)', 'Type Coercion (Implicit vs Explicit, double vs triple equals)', 'Rest/Spread Operators & Destructuring', 'Arrow Functions vs Normal Functions (Arguments object, lexical this)', 'Modules (CommonJS vs ES Modules)']
      },
      {
        groupName: 'Scopes, Closures & Context',
        items: ['Execution Context & Lexical Environment', 'Closures & Scope Chain (Private state pattern)', 'This keyword (Default binding, implicit, explicit, new binding)', 'Function binding (call, apply, bind)', 'Currying and Partial Application']
      },
      {
        groupName: 'Object-Oriented & Prototypes',
        items: ['Prototype Chain & Prototypal Inheritance', 'Object.create(), Object.setPrototypeOf(), Object.getPrototypeOf()', 'Constructor Functions & ES6 Classes syntax', 'Private Fields (#) & static attributes in ES6 Classes', 'Mixins and Object composition patterns']
      },
      {
        groupName: 'Asynchronous JavaScript',
        items: ['The Event Loop (Call Stack, Task Queue, Microtask Queue, Web APIs)', 'Promises states and chaining mechanics', 'Promise APIs (all, race, allSettled, any)', 'Async/Await error handling and parallel execution', 'Generators & Async Iterators']
      },
      {
        groupName: 'Metaprogramming & Advanced Features',
        items: ['JavaScript Proxy and Reflect API', 'WeakMap and WeakSet for garbage collectable caching', 'Symbols (Well-known symbols like Symbol.iterator)', 'Internationalization API (Intl)', 'Typed Arrays & ArrayBuffers']
      }
    ],
    interviewQuestions: [
      {
        question: "What is a closure and why would you use it?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It allows an inner function to access variables from an outer function even after the outer function has finished executing. It is commonly used for data privacy (emulating private variables) and state persistence."
      },
      {
        question: "Explain the Event Loop in detail.",
        answer: "The Event Loop coordinates the execution of JavaScript code. It continuously checks if the Call Stack is empty. If it is, it first processes all microtasks (Promises, queueMicrotask) in the Microtask Queue until empty. Then, it picks the first task from the Macrotask Queue (setTimeout, event listeners, I/O) and pushes it to the Call Stack for execution. This process loops indefinitely."
      },
      {
        question: "What is the difference between call, apply, and bind?",
        answer: "Both `call` and `apply` immediately invoke a function with a specified `this` context. The difference is `call` accepts arguments individually (comma-separated), while `apply` accepts them as an array. `bind` does not execute the function immediately; instead, it returns a new function with the `this` context permanently bound to it."
      }
    ],
    miniProjects: [
      { title: "Custom Promise Library", description: "Implement a fully specification-compliant `MyPromise` class from scratch, including then(), catch(), resolve(), and all()." },
      { title: "Reactive State Binder", description: "Build a mini frontend reactivity library using JS Proxies that automatically updates DOM elements when a state object changes." }
    ],
    majorProject: {
      title: "Highly Interactive Web-Based Terminal Emulator",
      description: "Design and implement a complete terminal emulator in vanilla JS that parses commands, runs mock shells, manages an virtual filesystem in LocalStorage, supports nested piping, and manages tab completion."
    },
    revisionChecklist: [
      'Master Event Loop execution sequence (Macrotasks vs Microtasks)',
      'Explain prototype inheritance chain and Object.__proto__ vs Prototype',
      'Explain hoisting of let, const, var, and functions',
      'Define "this" context in normal functions, arrow functions, and event handlers',
      'Know when memory leaks happen (forgotten timers, dangling event listeners)'
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['TS Setup & Configuration (tsconfig.json)', 'Basic Types (string, number, boolean)', 'Type Inference', 'Functions & Parameter Typing', 'Interfaces & Type Aliases']
      },
      {
        level: 'Intermediate',
        concepts: ['Union & Intersection Types', 'Enums & Tuples', 'Literal Types & Type Assertions', 'Generics Basics', 'Classes & Access Modifiers', 'Type Guards & Narrowing']
      },
      {
        level: 'Advanced',
        concepts: ['Conditional Types & infer keyword', 'Mapped Types & Template Literal Types', 'Utility Types (Partial, Record, Omit, Pick)', 'Generic Constraints & Advanced Mapped Types', 'Decorators in TypeScript', 'Declaration Merging & d.ts files']
      },
      {
        level: 'Expert',
        concepts: ['Creating Type-Safe DSLs', 'Turing-complete Type System Programming', 'Compiler Plugins & TS-Patch', 'Custom AST Transformations', 'Writing custom ESLint plugins']
      }
    ],
    prerequisites: {
      topics: ['Advanced JavaScript'],
      dependencyGraph: ['JS Core -> TS Compilations -> Generics -> Advanced Type-Level Programming']
    },
    breakdown: [
      {
        groupName: 'TypeScript Configuration & Basics',
        items: ['tsconfig.json essential compiler flags (strict, target, module)', 'Type vs Interface (Extending, Declaration merging)', 'Function signatures and overloading', 'Optional, Readonly, and Index signatures', 'Type assertions (as Type vs <Type>, non-null assertion !)']
      },
      {
        groupName: 'Type Narrowing & Guards',
        items: ['typeof, instanceof, and "in" operators', 'User-defined Type Guards (parameter is Type)', 'Discriminated Unions (tagged union pattern)', 'Assertion Functions (asserts condition)', 'The `never` type and exhaustive checks']
      },
      {
        groupName: 'Generics & Advanced Constraints',
        items: ['Generic Functions, Interfaces, and Classes', 'Constraints with the `extends` keyword', 'The keyof operator and lookup types', 'Default generic arguments', 'Mapped Types syntax and key remapping']
      },
      {
        groupName: 'Type-Level Programming',
        items: ['Conditional Types (T extends U ? X : Y)', 'The `infer` keyword in conditional types', 'Template Literal Types (combining string literals)', 'Distributive Conditional Types', 'Recursive Type Aliases']
      },
      {
        groupName: 'TypeScript Integration',
        items: ['Declaration Files (.d.ts) and definitely-typed', 'Module resolution strategies', 'Triple-slash directives', 'Integrating with build tools (Webpack, Vite, Rollup)', 'TS Decorators (Experimental and stage-3 metadata)']
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between `any` and `unknown`?",
        answer: "Both represent any value. However, `any` turns off all type-checking, allowing you to perform any action on it (e.g. calling methods, property accesses). `unknown` is type-safe; the compiler restricts you from doing any operations on an `unknown` variable until you narrow or assert its type first."
      },
      {
        question: "How do you achieve exhaustiveness checking in TypeScript?",
        answer: "Exhaustiveness checking ensures all cases of a union are handled. This is achieved by mapping the remaining unhandled cases to a variable typed as `never`. If a case is missed, TypeScript throws a compilation error because a type cannot be assigned to `never`."
      },
      {
        question: "What are mapped types and conditional types?",
        answer: "Mapped types allow you to create new types by transforming properties of an existing type (e.g., setting all fields to readonly). Conditional types act as an 'if/else' expression at the type level, selecting one of two types based on a relation test represented as `T extends U ? X : Y`."
      }
    ],
    miniProjects: [
      { title: "Zod-like Validation Library", description: "Create a fully type-safe schema validator that infers TypeScript schemas from runtime validators using generics." },
      { title: "Generic State Store", description: "Build a generic pub-sub store with strict actions typing, ensuring action payloads are type-safe based on action types." }
    ],
    majorProject: {
      title: "Type-Safe SQL Query Builder",
      description: "Implement a complete, production-ready TS query builder similar to Prisma/Kysely that parses database schema interfaces and statically type-checks SELECT, JOIN, and WHERE clauses, generating compile-time errors for invalid columns or tables."
    },
    revisionChecklist: [
      'Describe why "strict" flag in tsconfig is essential',
      'Implement custom type guards to safely narrow properties',
      'Explain infer keyword inside a custom ReturnType utility',
      'Create a mapped type that removes optional flags from an object',
      'Use "never" to perform exhaustive checking in switch-case statement'
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Programming',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Relational Concepts (Tables, Primary Keys)', 'Basic SELECT Queries', 'Filtering (WHERE, LIKE, IN)', 'Sorting & Limiting', 'Aggregate Functions (COUNT, SUM, AVG)', 'Group By & Having']
      },
      {
        level: 'Intermediate',
        concepts: ['JOINS (Inner, Left, Right, Full, Cross)', 'Subqueries (Correlated vs Non-correlated)', 'Foreign Keys & Constraints', 'Transactions (Commit, Rollback)', 'Views & Indexes', 'Data Definition (CREATE, ALTER, DROP)']
      },
      {
        level: 'Advanced',
        concepts: ['Window Functions (ROW_NUMBER, RANK, LEAD, LAG)', 'Common Table Expressions (CTEs & Recursive CTEs)', 'Query Optimization & Execution Plans (EXPLAIN)', 'Database Normalization (1NF, 2NF, 3NF, BCNF)', 'Stored Procedures, Triggers, & Custom Functions']
      },
      {
        level: 'Expert',
        concepts: ['Designing Custom DB Storage Engines', 'Advanced Query Analyzer Internals', 'Multi-tenant database sharding strategies', 'Fine-tuning B-Tree & LSM indexes', 'Designing distributed consensus-based SQL layers']
      }
    ],
    prerequisites: {
      topics: ['Basic Data Structuring', 'Mathematical Set Theory'],
      dependencyGraph: ['Set Theory -> DDL/DML -> JOINS -> Window Functions -> Index Tuning']
    },
    breakdown: [
      {
        groupName: 'Querying and Filtering Basics',
        items: ['Select columns, expressions, and column aliases', 'Filtering criteria (WHERE, operators, NULL handling)', 'Logical operators and order of precedence (AND, OR, NOT)', 'String matching (LIKE, regular expressions, ILIKE)', 'Sorting results (ORDER BY, NULLS FIRST/LAST)', 'Limiting output rows (LIMIT, OFFSET, FETCH)']
      },
      {
        groupName: 'Joins and Set Operators',
        items: ['Inner Joins vs Outer Joins (Left, Right, Full)', 'Cross Joins, Self Joins, and Natural Joins', 'Joining multiple tables with composite conditions', 'Set operations (UNION, UNION ALL, INTERSECT, EXCEPT)', 'Combining Joins and Set Operations']
      },
      {
        groupName: 'Aggregations & Grouping',
        items: ['Aggregate functions (SUM, AVG, COUNT, MIN, MAX)', 'Grouping rows (GROUP BY, multi-column grouping)', 'Filtering grouped records (HAVING vs WHERE)', 'Handling NULLs in aggregations', 'Grouping sets, CUBE, and ROLLUP']
      },
      {
        groupName: 'Advanced Window Functions',
        items: ['Introduction to windowing (OVER clause)', 'Partitioning and ordering within windows', 'Ranking functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE)', 'Value functions (LAG, LEAD, FIRST_VALUE, LAST_VALUE)', 'Aggregate functions as window functions', 'Defining sliding frames (ROWS/RANGE boundaries)']
      },
      {
        groupName: 'CTEs & Advanced Querying',
        items: ['Non-recursive Common Table Expressions (CTEs)', 'Recursive CTEs (hierarchical data, graphs)', 'Correlated vs Non-correlated subqueries', 'EXISTS and IN predicates performance comparison', 'Lateral Joins / Cross Apply']
      },
      {
        groupName: 'Database Schema Design & Normalization',
        items: ['Normalization rules (1NF, 2NF, 3NF, BCNF)', 'Denormalization use-cases and performance trade-offs', 'Indexes (B-Tree, Hash, GIN, GiST, covering indexes)', 'Constraints (Primary Key, Foreign Key, Unique, Check, Not Null)', 'Transactions & ACID properties (Concurrency anomalies: dirty reads, non-repeatable reads, phantom reads)']
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between WHERE and HAVING?",
        answer: "`WHERE` is used to filter individual rows before any grouping or aggregations are calculated. `HAVING` is used to filter grouped records/aggregate results after the `GROUP BY` clause has been processed."
      },
      {
        question: "Explain the difference between RANK, DENSE_RANK, and ROW_NUMBER.",
        answer: "For duplicate values: `ROW_NUMBER` assigns unique sequential numbers. `RANK` assigns the same rank but leaves gaps in the sequence for subsequent ranks. `DENSE_RANK` assigns the same rank and does not leave any gaps in the sequence."
      },
      {
        question: "What is Database Normalization and why is it used?",
        answer: "Normalization is the systematic process of organizing a database schema to reduce data redundancy, eliminate update/delete/insert anomalies, and ensure dependency preservation. It usually divides large tables into smaller tables and defines relationships using foreign keys."
      }
    ],
    miniProjects: [
      { title: "Hierarchical Org Structure Query", description: "Write complex recursive CTEs that reconstruct deep hierarchical organization charts, calculating direct reports count and salary rollups." },
      { title: "E-Commerce Reporting Dashboard", description: "Formulate SQL analytics queries calculating rolling 30-day average sales, customer lifetime value, and top-selling items per category using Window Functions." }
    ],
    majorProject: {
      title: "Comprehensive Multi-Tenant Sales Analytics System",
      description: "Build an optimized analytical database schema containing materialized views, composite indexing strategies, custom partitioning schemas, and high-performance queries that analyze 10M+ transaction logs under extreme latency constraints."
    },
    revisionChecklist: [
      'Execute EXPLAIN ANALYZE on a query to find table scans',
      'Implement recursive CTE to traverse nested data',
      'Explain ACID properties and transaction isolation levels',
      'Explain when to use B-Tree indexing vs GIN indexing',
      'Write a query demonstrating LEAD or LAG to find period-over-period variance'
    ]
  }
];
