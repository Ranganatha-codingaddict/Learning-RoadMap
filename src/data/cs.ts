import { SyllabusTopic } from '../types';

export const csTopics: SyllabusTopic[] = [
  {
    id: 'dbms',
    name: 'Database Management Systems (DBMS)',
    category: 'Computer Science',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is a Database', 'SQL vs NoSQL', 'Tables, Rows, Columns', 'Primary & Foreign Keys', 'Basic Queries']
      },
      {
        level: 'Intermediate',
        concepts: ['Database Normalization (1NF to BCNF)', 'Indexing Basics (B-Trees)', 'ACID Properties & Transactions', 'Entity-Relationship (ER) Modeling']
      },
      {
        level: 'Advanced',
        concepts: ['Transaction Isolation Levels', 'Concurrency Control (Two-Phase Locking, MVCC)', 'Index Tuning & Execution Plans', 'Replication & Sharding models']
      },
      {
        level: 'Expert',
        concepts: ['LSM Trees vs B+ Trees Internals', 'Write-Ahead Logging (WAL) engines', 'Custom Query Optimizer Design', 'Distributed Consensus in Databases (Raft, Paxos)']
      }
    ],
    prerequisites: {
      topics: ['Basic SQL', 'Data Structures (Trees, Hashing)'],
      dependencyGraph: ['SQL Queries -> Relational Algebra -> Normalization -> Indexing Structures -> Distributed Engines']
    },
    breakdown: [
      {
        groupName: 'Relational Database Principles',
        items: [
          'Relational Algebra & Relational Calculus foundations',
          'Data Definition Language (DDL) vs Data Manipulation Language (DML) vs Data Control Language (DCL)',
          'Schema Constraints: Referential Integrity, Cascadings',
          'Database Normalization (1NF, 2NF, 3NF, BCNF) and dependency preservation',
          'Denormalization criteria and trade-offs'
        ]
      },
      {
        groupName: 'Transactions & Concurrency',
        items: [
          'ACID properties detailed (Atomicity, Consistency, Isolation, Durability)',
          'Concurrency anomalies: Dirty Read, Non-repeatable Read, Phantom Read, Write Skew',
          'Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)',
          'Locks: Shared, Exclusive, Intent Locks, Deadlock detection schemes',
          'Two-Phase Locking (2PL) and Multi-Version Concurrency Control (MVCC) in engines'
        ]
      },
      {
        groupName: 'Storage & Indexing Internals',
        items: [
          'Row-oriented vs Column-oriented storage engines (OLTP vs OLAP)',
          'B-Tree and B+ Tree index structures, leaf nodes linkings',
          'Hash Indexes and GIN/GiST indexes (full-text and spatial)',
          'Log-Structured Merge Trees (LSM Trees) for write-heavy loads',
          'Write-Ahead Logging (WAL) and recovery mechanisms (ARIES)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is MVCC (Multi-Version Concurrency Control)?",
        answer: "MVCC is a concurrency control method where the database engine keeps multiple physical versions of a data row. When a transaction reads data, it reads a snapshot of the data from a specific point in time, allowing reads to never block writes and writes to never block reads, improving transaction performance."
      },
      {
        question: "Explain the difference between B-Trees and B+ Trees.",
        answer: "In a B-Tree, keys and data can be stored in both internal and leaf nodes. In a B+ Tree, data records/pointers are stored exclusively in the leaf nodes, while internal nodes only store key values for routing. Additionally, leaf nodes in a B+ Tree are linked together sequentially in a doubly-linked list, allowing fast range scans and linear traversals."
      }
    ],
    miniProjects: [
      { title: "Toy DB Engine with CSV Storage", description: "Write a mini database engine in TS that parses SQL-like command strings, performs table indexing using an in-memory B-Tree, and persists tables to CSV files." },
      { title: "Transaction Locks Simulator", description: "Implement a visual lock manager simulation demonstrating Shared/Exclusive locks, showing how deadlocks are formed and detected." }
    ],
    majorProject: {
      title: "Embedded Log-Structured Merge (LSM) Key-Value Store",
      description: "Build an embedded high-performance key-value storage engine in TS/JS utilizing a MemTable (in-memory red-black tree), Write-Ahead Log (WAL), SSTables (Sorted String Tables on disk), and background compaction threads."
    },
    revisionChecklist: [
      'Write down normalization definitions for 1NF, 2NF, 3NF, BCNF',
      'Explain isolation anomalies (phantom read vs write skew)',
      'Explain MVCC record visibility rules',
      'Compare B+ Tree vs LSM Tree performance characteristics',
      'Identify query bottleneck using execution plan indicators'
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems (OS)',
    category: 'Computer Science',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is an OS', 'Kernel vs User Space', 'Processes vs Threads', 'Basic Shell Commands']
      },
      {
        level: 'Intermediate',
        concepts: ['CPU Scheduling (FIFO, Round Robin, SJF)', 'Memory Management (Paging, Segmentation)', 'Process Synchronization (Semaphores, Mutexes)', 'File Systems structure']
      },
      {
        level: 'Advanced',
        concepts: ['Virtual Memory & Page Replacement Algorithms', 'Deadlock Detection & Prevention (Banker\'s)', 'Inter-Process Communication (IPC)', 'I/O Hardware & Drivers']
      },
      {
        level: 'Expert',
        concepts: ['Custom OS Kernel Development', 'Writing device drivers', 'Real-time OS (RTOS) task scheduling', 'Memory architecture optimization (NUMA)']
      }
    ],
    prerequisites: {
      topics: ['Computer Architecture Basics', 'C/C++ basics'],
      dependencyGraph: ['Hardware -> Kernel Space -> Process Management -> Virtual Memory -> Systems Programming']
    },
    breakdown: [
      {
        groupName: 'Process & Thread Management',
        items: [
          'Process definition, PCB (Process Control Block), process states and transitions',
          'Context Switching mechanics, registers saving',
          'Threads: User-level vs Kernel-level threads, thread local storage',
          'CPU Scheduling: FCFS, SJF, Shortest Remaining Time First, Round Robin, Multilevel Feedback Queues',
          'System Calls: fork(), exec(), wait(), exit(), pipe()'
        ]
      },
      {
        groupName: 'Process Synchronization',
        items: [
          'Critical Section problem, race conditions',
          'Locks, Mutexes, Semaphores (Binary and Counting)',
          'Classical synchronization problems: Producer-Consumer, Readers-Writers, Dining Philosophers',
          'Deadlocks: Four conditions (Mutual exclusion, Hold & Wait, No preemption, Circular wait)',
          'Deadlock handling: Banker\'s Algorithm (Safety states), Deadlock detection and recovery'
        ]
      },
      {
        groupName: 'Memory Management',
        items: [
          'Physical vs Virtual address spaces, MMU (Memory Management Unit)',
          'Paging: Page tables, TLB (Translation Lookaside Buffer) hits and misses',
          'Multi-level paging, inverted page tables',
          'Segmentation vs Paging',
          'Virtual Memory: Page faults, Page Replacement Algorithms (FIFO, LRU, Optimal, Clock/Second Chance)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between a process and a thread?",
        answer: "A process is an executing instance of an application that has its own independent memory space, file descriptors, and security context. A thread is a lightweight unit of execution within a process that shares the parent process\'s address space, heap, and static variables, but maintains its own program counter, registers, and stack."
      },
      {
        question: "How does Virtual Memory work?",
        answer: "Virtual Memory is a technique that gives programs the illusion of having a very large, contiguous block of memory, even if the physical RAM is fragmented or smaller. The OS maps virtual addresses to physical RAM page frames using page tables and the MMU. If data is not in physical RAM, a 'Page Fault' interrupt is triggered, prompting the OS to load the required page from disk (swap space) into RAM."
      }
    ],
    miniProjects: [
      { title: "CPU Scheduling Simulator", description: "Develop an interactive visualizer for scheduling algorithms showing timelines, average waiting times, and turnaround stats." },
      { title: "IPC Shared Memory Program", description: "Write client/server programs in Node.js/C that communicate via OS-level Pipes and Shared Memory buffers." }
    ],
    majorProject: {
      title: "Interactive Simulated Operating System Kernel",
      description: "Build a modular simulation of an OS kernel in TypeScript, supporting virtual processes, custom CPU queues, Page Table conversions with virtual paging, a simulated FAT file system, and deadlock checks."
    },
    revisionChecklist: [
      'Draw process state transition diagrams',
      'Explain Banker\'s algorithm safety proof',
      'Describe why TLB is crucial for paging performance',
      'Contrast Mutexes vs Semaphores',
      'Identify thrashing in virtual memory and its remedy'
    ]
  },
  {
    id: 'computer_networks',
    name: 'Computer Networks',
    category: 'Computer Science',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['OSI Model vs TCP/IP Model', 'IP Addresses (IPv4 vs IPv6)', 'Cables & Networking Devices', 'Ping & Traceroute']
      },
      {
        level: 'Intermediate',
        concepts: ['TCP vs UDP protocols', 'HTTP/HTTPS Protocols', 'DNS (Domain Name System) Lookup', 'Routing vs Switching']
      },
      {
        level: 'Advanced',
        concepts: ['TCP Congestion Control', 'TLS/SSL Handshake', 'BGP & OSPF Routing Protocols', 'Subnetting & CIDR calculations']
      },
      {
        level: 'Expert',
        concepts: ['Writing high-performance network sockets', 'Custom TCP stack configuration', 'Designing zero-latency global CDN networks', 'Network vulnerability mitigation']
      }
    ],
    prerequisites: {
      topics: ['Operating Systems (I/O, Sockets)'],
      dependencyGraph: ['OS Sockets -> OSI Physical -> Network Routing -> Transport Reliability -> Application Protocols']
    },
    breakdown: [
      {
        groupName: 'Network Architecture Models',
        items: [
          'OSI 7-Layer Model: Physical, Data Link, Network, Transport, Session, Presentation, Application',
          'TCP/IP 4-Layer Model: Network Interface, Internet, Transport, Application',
          'Data Encapsulation and Decapsulation across layers',
          'Physical devices: Hubs, Switches (MAC tables), Routers (Routing tables)'
        ]
      },
      {
        groupName: 'IP & Subnetting (Network Layer)',
        items: [
          'IP Addressing: Classful vs Classless addressing (CIDR)',
          'Subnetting calculations (Subnet masks, broadcast addresses, host counts)',
          'ARP (Address Resolution Protocol) and ICMP (Internet Control Message Protocol)',
          'DHCP (Dynamic Host Configuration Protocol) allocation states'
        ]
      },
      {
        groupName: 'Transport Layer (TCP/UDP)',
        items: [
          'TCP Features: Connection-oriented, reliable, byte-stream, flow control',
          'TCP 3-Way Handshake and 4-Way Connection Termination',
          'TCP Flow Control: Sliding Window protocol',
          'TCP Congestion Control: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery',
          'UDP Features: Connectionless, unreliable, datagram-oriented'
        ]
      },
      {
        groupName: 'Application Layer (HTTP, DNS, TLS)',
        items: [
          'DNS Lookup: Recursive vs Iterative resolution, DNS Records (A, AAAA, CNAME, MX, TXT)',
          'HTTP/1.1 vs HTTP/2 (Multiplexing, header compression) vs HTTP/3 (QUIC/UDP)',
          'HTTPS & TLS: TLS 1.2 vs 1.3 Handshake, asymmetric/symmetric encryption, certificates'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the TCP 3-Way Handshake process.",
        answer: "1. Client sends a SYN packet with a random sequence number (Seq = X). 2. Server responds with a SYN-ACK packet, acknowledging the client's sequence (Ack = X+1) and sending its own sequence number (Seq = Y). 3. Client responds with an ACK packet, acknowledging the server's sequence (Ack = Y+1) and ending the handshake. The connection is now established."
      },
      {
        question: "What happens when you type a URL into a browser?",
        answer: "1. Browser checks cache for DNS. If missing, it requests IP from local/root/TLD/authoritative DNS servers. 2. Browser establishes a TCP connection with the server (3-Way Handshake, followed by TLS Handshake for HTTPS). 3. Browser sends an HTTP request. 4. Server processes request and sends back an HTTP response. 5. Browser parses response (HTML, CSS, JS) and renders the page."
      }
    ],
    miniProjects: [
      { title: "Subnet Calculator", description: "Build a CIDR calculator tool that takes an IP address and range prefix, returning network address, broadcast, and total usable hosts." },
      { title: "Custom DNS Server Mock", description: "Write a simple DNS server mock in Node.js/TS that listens on UDP Port 53 and resolves names from a local JSON file." }
    ],
    majorProject: {
      title: "Optimized Custom TCP Socket Server Framework",
      description: "Build an event-driven networking server in Node/TS from scratch that implements custom connection multiplexing, byte-buffer packet parsers, heartbeat protocols, and flow control throttling."
    },
    revisionChecklist: [
      'Subnet 192.168.1.0/24 into 4 subnets with host counts',
      'Draw TLS 1.3 Handshake sequence diagram',
      'Explain why HTTP/2 Head-of-Line blocking occurs at the TCP level',
      'Contrast symmetric encryption vs asymmetric encryption in TLS',
      'List TCP state transitions from LISTEN to CLOSED'
    ]
  },
  {
    id: 'system_design',
    name: 'System Design & Design Patterns',
    category: 'Computer Science',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is Scalability', 'Vertical vs Horizontal Scaling', 'Monoliths vs Microservices', 'OOP Principles']
      },
      {
        level: 'Intermediate',
        concepts: ['Load Balancers', 'Caching Strategies', 'Creational Patterns (Singleton, Factory)', 'SOLID Principles']
      },
      {
        level: 'Advanced',
        concepts: ['CAP Theorem', 'Consistent Hashing', 'Database Partitioning', 'Structural & Behavioral Patterns (Adapter, Observer, Strategy)']
      },
      {
        level: 'Expert',
        concepts: ['Designing global multi-region architectures', 'Disaster Recovery and active-active setups', 'Event-sourcing and CQRS', 'Custom enterprise architectural frameworks']
      }
    ],
    prerequisites: {
      topics: ['Databases', 'Operating Systems', 'Computer Networks'],
      dependencyGraph: ['Databases & Networking -> Object-Oriented Design -> Design Patterns -> High-Level System Scalability']
    },
    breakdown: [
      {
        groupName: 'High-Level System Design (HLD)',
        items: [
          'Scalability parameters: Latency, Throughput, Availability, Reliability',
          'Load Balancing algorithms (Round robin, least connections, IP hash) and reverse proxies',
          'Caching: Write-through, Write-around, Write-back, Cache eviction (LRU, LFU)',
          'CAP Theorem: Consistency, Availability, Partition Tolerance',
          'Data replication (Leader-follower, multi-leader, leaderless) and consensus (Paxos, Raft)',
          'Database Sharding, vertical/horizontal partitioning, rebalancing nodes'
        ]
      },
      {
        groupName: 'Low-Level Design & SOLID',
        items: [
          'SOLID Principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
          'Object-Oriented Design (OOD): Class diagrams, use-case diagrams, sequence diagrams',
          'Dependency Injection (DI) and inversion of control (IoC)'
        ]
      },
      {
        groupName: 'Design Patterns',
        items: [
          'Creational Patterns: Singleton, Factory Method, Abstract Factory, Builder, Prototype',
          'Structural Patterns: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy',
          'Behavioral Patterns: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the CAP Theorem and how it affects database choices.",
        answer: "The CAP Theorem states that a distributed system can guarantee at most two out of three characteristics: Consistency, Availability, and Partition Tolerance. Since network partitions are inevitable in distributed systems, databases must trade off between Consistency (CP - e.g., Spanner, MongoDB) or Availability (AP - e.g., Cassandra, DynamoDB)."
      },
      {
        question: "How would you design a rate limiter?",
        answer: "A rate limiter can be designed using several algorithms: 1. Token Bucket (allows bursts of traffic, space efficient). 2. Leaking Bucket (smooths out requests, steady rate). 3. Fixed Window Counter (simple, has edge peaks). 4. Sliding Window Log (precise, high memory usage). 5. Sliding Window Counter (balanced memory/precision). It can be implemented distributedly using Redis to track client request thresholds."
      }
    ],
    miniProjects: [
      { title: "Low-Level Parking Lot Design", description: "Design an object-oriented Parking Lot system in TS with class diagrams, code interfaces, and polymorphic ticket calculations." },
      { title: "Distributed ID Generator", description: "Implement a localized distributed unique ID generator (similar to Twitter Snowflake) using time coordinates and node IDs." }
    ],
    majorProject: {
      title: "Highly Scalable Distributed URL Shortener Design & Prototype",
      description: "Develop a complete URL Shortener architecture including load balancing, Redis cache buffers, a partitioned relational schema, consistent hashing, custom base-62 encoding, and traffic analytics."
    },
    revisionChecklist: [
      'Contrast Liskov Substitution Principle vs simple inheritance',
      'Explain why Singleton pattern can be an anti-pattern',
      'Design a notification system using the Observer pattern',
      'Calculate queries-per-second (QPS) and storage for 1M active daily users',
      'Describe how to handle hot keys in distributed caches'
    ]
  }
];
