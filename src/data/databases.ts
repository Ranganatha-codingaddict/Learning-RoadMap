import { SyllabusTopic } from '../types';

export const databasesTopics: SyllabusTopic[] = [
  {
    id: 'relational_dbs',
    name: 'PostgreSQL & MySQL',
    category: 'Databases',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Relational Model', 'Primary & Foreign Keys', 'SQL Queries (SELECT, INSERT, UPDATE, DELETE)', 'Tables Creation']
      },
      {
        level: 'Intermediate',
        concepts: ['JOINS & Subqueries', 'Indexes creation', 'Database Constraints (Unique, Not Null)', 'Views & Stored Procedures', 'ACID Transactions']
      },
      {
        level: 'Advanced',
        concepts: ['B-Tree Indexing mechanism', 'JSONB data types in PostgreSQL', 'Execution Plans (EXPLAIN)', 'Transaction Isolation Levels details', 'Database Partitioning']
      },
      {
        level: 'Expert',
        concepts: ['Custom Postgres Extensions', 'Configuring logical replication systems', 'Vacuuming & Storage engine tuning', 'Designing globally sharded multi-master relational layers']
      }
    ],
    prerequisites: {
      topics: ['Basic SQL querying', 'OS memory layouts'],
      dependencyGraph: ['SQL Basics -> Relational schemas -> Table Indexing -> PostgreSQL/MySQL engine differences -> Performance tuning']
    },
    breakdown: [
      {
        groupName: 'PostgreSQL Features',
        items: [
          'Postgres Architecture: Client backend process, Shared memory buffers, WAL sender',
          'JSON and JSONB data types: indexing document types using GIN (Generalized Inverted Index)',
          'PostgreSQL MVCC: Vacuuming process, Auto-vacuum, bloat estimation',
          'Postgres Window functions, CTEs, and recursive CTEs support',
          'Extensions framework: PostGIS, pg_trgm, pg_stat_statements'
        ]
      },
      {
        groupName: 'MySQL Features',
        items: [
          'MySQL Architecture: Connection thread manager, Pluggable storage engines',
          'InnoDB Storage Engine: Buffer pool, Doublewrite buffer, Log buffer, Redo/Undo logs',
          'Clustered Indexing vs Non-clustered indexing structures',
          'MySQL replication: Row-based, Statement-based, Mixed replication modes',
          'MySQL Group Replication & High Availability setups'
        ]
      },
      {
        groupName: 'Indexing & Tuning',
        items: [
          'B-Tree index structure details: root, internal, leaf nodes',
          'Covering indexes, Composite indexes, prefix indexes',
          'Query optimization: EXPLAIN and EXPLAIN ANALYZE commands',
          'Connection pooling (PgBouncer, HikariCP) advantages'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between JSON and JSONB in PostgreSQL?",
        answer: "`JSON` stores data as exact plain text representation, preserving spacing and keys order. It has faster write speeds but slow read speeds because it must re-parse the JSON on every query. `JSONB` decomposes and stores the JSON in a binary format. It has slightly slower writes due to parsing overhead but extremely fast reads because it supports index attachments (like GIN indexes)."
      },
      {
        question: "Why does PostgreSQL require 'Vacuuming'?",
        answer: "PostgreSQL uses MVCC. When a row is updated or deleted, Postgres does not immediately remove it physically; instead, it marks it as dead (tuple versioning). Over time, dead tuples accumulate, causing database bloat. The `VACUUM` process scans the tables, reclaims the storage occupied by dead tuples, and makes it available for new writes."
      }
    ],
    miniProjects: [
      { title: "PostgreSQL GIN Indexed Document Search", description: "Design a Postgres database containing semi-structured JSON products and use GIN indexes to query attributes under 10ms." },
      { title: "Query Speed Profiler App", description: "Write a tool that runs comparative EXPLAIN logs on MySQL tables with and without composite indexes." }
    ],
    majorProject: {
      title: "Optimized Multi-Tenant Postgres Schema & Partitioning System",
      description: "Build an enterprise-grade database partition structure in PostgreSQL dividing active transaction logs dynamically by month and tenant, with automated partition creation and PgBouncer pool scaling."
    },
    revisionChecklist: [
      'Contrast Postgres vs MySQL storage engine models',
      'Explain how a composite index (A, B) affects a WHERE B = X query',
      'Describe why VACUUM is essential in PostgreSQL',
      'Identify slow queries using EXPLAIN output trees',
      'Define connection pooling limits'
    ]
  },
  {
    id: 'nosql_caches_messaging',
    name: 'MongoDB, Redis & Kafka',
    category: 'Databases',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is NoSQL', 'Document model basics', 'Redis Key-Value strings', 'Messaging Queue basics']
      },
      {
        level: 'Intermediate',
        concepts: ['MongoDB collections & CRUD', 'Redis Data types (Hashes, Lists, Sets)', 'Kafka Topics & Partitions', 'Kafka Producers & Consumers']
      },
      {
        level: 'Advanced',
        concepts: ['MongoDB Aggregation pipelines', 'Redis Caching patterns (Cache Aside, Eviction)', 'Redis Pub/Sub', 'Kafka Consumer Groups & Offsets', 'Kafka durability & replication parameters']
      },
      {
        level: 'Expert',
        concepts: ['MongoDB sharded cluster setup', 'Redis cluster re-sharding', 'Kafka internal log layouts', 'Designing global reactive pub-sub pipelines with zero-data-loss parameters']
      }
    ],
    prerequisites: {
      topics: ['Relational databases', 'Data structures (Queues, HashMaps)'],
      dependencyGraph: ['Relational DBs -> Document databases (MongoDB) -> Fast RAM caches (Redis) -> Event streaming architectures (Kafka)']
    },
    breakdown: [
      {
        groupName: 'MongoDB (Document Database)',
        items: [
          'Document stores model, JSON/BSON structures',
          'MongoDB CRUD operations, indexing fields, compound indexes',
          'MongoDB Aggregation Pipeline: $match, $group, $project, $lookup, $unwind',
          'MongoDB Replication: Replica Sets, primary election, read/write concerns',
          'MongoDB Sharding: Shard keys, config servers, mongos routing'
        ]
      },
      {
        groupName: 'Redis (In-Memory Cache & Store)',
        items: [
          'In-memory storage paradigm, single-threaded event loop execution',
          'Redis Data structures: Strings, Hashes, Lists, Sets, Sorted Sets (ZSETs), HyperLogLogs, Bitmaps',
          'Redis Persistence: RDB (Redis Database snapshots) vs AOF (Append-Only Files)',
          'Redis Caching: Eviction policies (LRU, LFU, TTL, volatile/allkeys)',
          'Redis Cluster, Sentinel (High Availability), Replication mechanics'
        ]
      },
      {
        groupName: 'Apache Kafka (Event Streaming)',
        items: [
          'Publish-Subscribe model, log-centric storage design',
          'Core concepts: Topics, Partitions, Brokers, Clusters',
          'Kafka Producers: partitioning strategies, ACKS parameter (0, 1, all), retries',
          'Kafka Consumers: Consumer Groups, offset tracking, commit strategies (auto vs manual)',
          'Zookeeper vs Kraft metadata coordination modes',
          'Kafka message delivery guarantees: At-most-once, At-least-once, Exactly-once (Idempotency)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Why is Redis single-threaded and how is it still so fast?",
        answer: "Redis is in-memory, meaning operations are limited by CPU speed but rather by memory bandwidth. Being single-threaded, it avoids context-switching overheads, locking contentions, and complex concurrency logic. It achieves high throughput using non-blocking I/O multiplexing (epoll/kqueue) to handle thousands of concurrent socket connections."
      },
      {
        question: "How does Apache Kafka achieve its extremely high throughput?",
        answer: "Kafka achieves massive throughput through several design choices: 1. Sequential I/O: It appends messages to an append-only commit log, which is extremely fast on disks. 2. Zero-Copy: It bypasses application-space memory buffers, copying data directly from the OS page cache to the network socket using the `sendfile` system call. 3. Batching: It batches messages together for compression and transfer."
      },
      {
        question: "Explain the difference between $lookup and standard SQL JOIN in MongoDB.",
        answer: "In MongoDB, `$lookup` performs a left outer join to an unsharded collection in the same database. It fetches documents from the target collection that match the specified local and foreign fields, appending them as an array inside the parent document. It is computationally expensive and shouldn't be overused compared to standard relational JOINs."
      }
    ],
    miniProjects: [
      { title: "Redis Sliding Window Rate Limiter", description: "Build a highly scalable API rate limiter in Node/TS using Redis Sorted Sets (ZSET) and pipeline executions." },
      { title: "Kafka Event-driven Order Pipeline", description: "Set up a producer and consumer group that processes payment and inventory adjustments sequentially using Kafka partitions." }
    ],
    majorProject: {
      title: "Resilient Real-time Streaming Analytics Engine",
      description: "Build an enterprise analytics hub that ingests raw telemetry logs through Kafka Topics, aggregates them using custom MongoDB pipelines, and caches real-time metrics in Redis for dashboard delivery."
    },
    revisionChecklist: [
      'Write a MongoDB aggregation pipeline querying data with group metrics',
      'Explain Redis AOF vs RDB advantages',
      'Describe why partition count in Kafka defines parallel consumer scales',
      'Explain exactly-once delivery guarantees in Kafka',
      'List Redis cache-aside caching steps'
    ]
  }
];
