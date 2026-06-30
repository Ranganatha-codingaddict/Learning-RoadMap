import { SyllabusTopic } from '../types';

export const dsaTopics: SyllabusTopic[] = [
  {
    id: 'dsa_core',
    name: 'Core Structures (Arrays, Strings, LL, Stack, Queue)',
    category: 'DSA',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Static vs Dynamic Arrays', 'String Representation & Basic Operations', 'Singly Linked Lists', 'Stack (LIFO) & Queue (FIFO) Basics']
      },
      {
        level: 'Intermediate',
        concepts: ['Two Pointer Techniques', 'Sliding Window Algorithms', 'Doubly & Circular Linked Lists', 'Monotonic Stack & Queue', 'Deque implementation']
      },
      {
        level: 'Advanced',
        concepts: ['Prefix Sums & Range Queries', 'Suffix Trees & Arrays', 'Sparse Table', 'Skip Lists', 'Optimizing Stack/Queue memory allocations']
      },
      {
        level: 'Expert',
        concepts: ['Lock-Free Concurrent Queues', 'XOR Linked Lists', 'High-Performance String Search Runtimes (Boyer-Moore, KMP customized)']
      }
    ],
    prerequisites: {
      topics: ['Programming basics', 'Memory layout (Pointers)'],
      dependencyGraph: ['Pointers -> Arrays -> Linked Lists -> Stacks/Queues -> Monotonic & Range structures']
    },
    breakdown: [
      {
        groupName: 'Arrays',
        items: [
          'Memory Layout: Contiguous allocation and element indexing',
          'Static vs Dynamic Arrays (amortized O(1) resizing)',
          'Two-Pointer Technique (Opposite, Same-direction, Fast-Slow)',
          'Sliding Window (Fixed-size vs Dynamic-size)',
          'Prefix Sum & Difference Arrays (Range update optimization)',
          'Subarray problems (Kadane\'s algorithm, maximum product)'
        ]
      },
      {
        groupName: 'Strings',
        items: [
          'String representation (ASCII vs UTF, Immutable strings)',
          'String Matching algorithms (Rabin-Karp rolling hash)',
          'Knuth-Morris-Pratt (KMP) prefix-function matching',
          'Z-Algorithm for string searches',
          'Suffix Structures (Suffix Tree, Suffix Array construction)',
          'Anagrams, Palindromes, and Window-based String queries'
        ]
      },
      {
        groupName: 'Linked Lists',
        items: [
          'Singly Linked Lists (Pointer manipulation, traversal)',
          'Doubly Linked Lists (Bidirectional links, node deletion in O(1))',
          'Circular Linked Lists (Josephus problem, loop detection)',
          'Fast and Slow pointers (Floyd\'s Cycle detection, intersection point)',
          'Linked List Reversal (Iterative, Recursive, Group-wise k-reversal)',
          'Flattening a multi-level Doubly Linked List'
        ]
      },
      {
        groupName: 'Stacks & Queues',
        items: [
          'Stack LIFO protocol (Array vs Linked List implementation)',
          'Queue FIFO protocol (Circular queue, Linked list queue)',
          'Double-ended Queue (Deque) operations and use-cases',
          'Monotonic Stack (Next Greater Element, Largest Rectangle in Histogram)',
          'Monotonic Queue (Sliding Window Maximum)',
          'Stack and Queue conversions (Implementing queue using stacks and vice versa)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "How do you detect and find the starting node of a cycle in a Linked List?",
        answer: "Use Floyd's Cycle Detection (Tortoise and Hare). Traverse with a slow pointer (1 step) and fast pointer (2 steps). If they meet, a cycle exists. To find the starting node, reset the slow pointer to the head of the list and keep the fast pointer at the meeting point. Move both at a speed of 1 step; they will meet at the start node of the cycle."
      },
      {
        question: "Explain KMP algorithm's prefix function/LPS array.",
        answer: "The LPS (Longest Proper Prefix which is also Suffix) array stores the length of the longest proper prefix of the subpattern that is also a suffix. It prevents re-evaluating already matched characters during a mismatch by sliding the pattern directly to the next viable alignment in O(1) time, leading to a total O(n + m) time complexity."
      }
    ],
    miniProjects: [
      { title: "Browser History Tracker", description: "Implement a browser history navigation stack (Forward/Backward) using a Doubly Linked List with bounds checking and dynamic memory release." },
      { title: "Real-time Text Autocomplete Engine", description: "Build a string prefix autocomplete engine that loads dictionary words and suggests matches within millisecond parameters." }
    ],
    majorProject: {
      title: "Concurrent Task Processing Engine with Monotonic Priors",
      description: "Build an multi-threaded task management queue from scratch supporting thread-safe operations, dynamic priority sorting, dead-letter deques, and prefix-based logging pipelines."
    },
    revisionChecklist: [
      'Write Linked List reversal from scratch without errors',
      'Understand how Monotonic Stacks find next greater element in O(n)',
      'Explain difference between sliding window fixed vs variable bounds',
      'Explain dynamic array amortized constant time proof',
      'Trace Floyd\'s Cycle Detection math'
    ]
  },
  {
    id: 'dsa_trees',
    name: 'Trees',
    category: 'DSA',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Tree Terminology', 'Binary Trees', 'Preorder, Inorder, Postorder Traversals', 'Binary Search Tree (BST) Basics']
      },
      {
        level: 'Intermediate',
        concepts: ['Level Order Traversal (BFS)', 'Height & Depth calculations', 'Balanced Trees (AVL Trees, Red-Black Trees)', 'Trie (Prefix Tree) construction']
      },
      {
        level: 'Advanced',
        concepts: ['Segment Tree (Point/Range Queries, Lazy Propagation)', 'Fenwick Tree (Binary Indexed Tree)', 'Lowest Common Ancestor (LCA) algorithms', 'Threaded Binary Trees']
      },
      {
        level: 'Expert',
        concepts: ['Splay Trees & Treaps', 'Heavy-Light Decomposition', 'Link-Cut Trees', 'Suffix Trees construction with Ukkonen\'s algorithm']
      }
    ],
    prerequisites: {
      topics: ['Recursion', 'Linked List structures'],
      dependencyGraph: ['Recursion -> Binary Trees -> Balanced Trees -> Segment/Fenwick Range trees']
    },
    breakdown: [
      {
        groupName: 'Binary Trees & Traversals',
        items: [
          'Tree nodes representation, leaf nodes, root, heights, depths',
          'DFS Traversals: Pre-order, In-order, Post-order (Recursive and Iterative)',
          'BFS Traversal: Level-order traversal using queues',
          'Properties of Binary Trees (Full, Complete, Perfect, Degenerate)',
          'Tree Serialization & Deserialization algorithms'
        ]
      },
      {
        groupName: 'Binary Search Trees & AVL',
        items: [
          'BST Property: Left < Root < Right',
          'BST Operations: Search, Insert, Delete (Case-wise node replacement)',
          'Inorder Successor/Predecessor in BST',
          'AVL Trees: Balance factor, Rotations (LL, RR, LR, RL) for self-balancing',
          'Red-Black Trees properties (Root black, no double red, black-height)'
        ]
      },
      {
        groupName: 'Specialized Trees (Trie, Segment, Fenwick)',
        items: [
          'Trie (Prefix Tree): Node structures, insert, search, prefix-search',
          'Segment Tree: Node bounds, range sum/min/max queries in O(log n), updates',
          'Lazy Propagation in Segment Trees: Postponing updates to children to keep range updates O(log n)',
          'Fenwick Tree (Binary Indexed Tree): Prefix sums and point updates in O(log n) using bitwise increments',
          'Disjoint Set Union (DSU / Union-Find) with path compression and rank optimization'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain Lazy Propagation in Segment Trees.",
        answer: "Lazy propagation is an optimization for range updates. Instead of updating all leaf nodes immediately (which takes O(n) time), we store the pending updates in a separate 'lazy' array and apply them only when we access/query that specific range. This maintains both update and query operations at O(log n)."
      },
      {
        question: "What is the difference between AVL and Red-Black Trees?",
        answer: "AVL trees are more strictly balanced than Red-Black trees (maximum height difference of 1 vs balance bounds), resulting in faster lookups. However, Red-Black trees require fewer rotations during insertions and deletions, making them preferred for write-heavy collections (like C++ std::map, Java TreeMap)."
      }
    ],
    miniProjects: [
      { title: "Hierarchical Directory Browser", description: "Design an in-memory file structure explorer supporting directories and files, directory search, and nested size calculations using Trees." },
      { title: "IP Routing Prefix Matcher", description: "Create a fast IP routing prefix matcher using a Trie to store CIDR blocks and match lookup IPs to their destination router gates." }
    ],
    majorProject: {
      title: "Real-time Range-Query Database Engine",
      description: "Build an optimized index database engine that stores spatial and temporal points, supporting rapid range-sum and boundary queries using Segment Trees with Lazy Propagation."
    },
    revisionChecklist: [
      'Write Trie insert and search from scratch in under 10 minutes',
      'Explain Segment Tree construction time and memory footprint (4N proof)',
      'Perform Tree rotations on paper for AVL trees',
      'Explain iterative Inorder Traversal using a Stack',
      'Trace LCA (Lowest Common Ancestor) binary lifting logic'
    ]
  },
  {
    id: 'dsa_graphs',
    name: 'Graphs',
    category: 'DSA',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Graph Definitions (Directed vs Undirected)', 'Adjacency Matrix & List', 'Breadth-First Search (BFS)', 'Depth-First Search (DFS)']
      },
      {
        level: 'Intermediate',
        concepts: ['Topological Sort (Kahn\'s vs DFS)', 'Detecting Cycles in Directed/Undirected Graphs', 'Dijkstra\'s Shortest Path Algorithm', 'Disjoint Set Union (Union Find)']
      },
      {
        level: 'Advanced',
        concepts: ['Bellman-Ford Algorithm', 'Floyd-Warshall (All-Pairs Shortest Path)', 'Minimum Spanning Trees (Kruskal\'s & Prim\'s)', 'Strongly Connected Components (Tarjan\'s, Kosaraju\'s)', 'Eulerian Paths and Hamiltonian Cycles']
      },
      {
        level: 'Expert',
        concepts: ['Network Flow (Ford-Fulkerson, Dinic\'s Algorithm)', 'Hopcroft-Karp for Bipartite Matching', 'Centroid Decomposition', 'Dynamic Graph Connectivity']
      }
    ],
    prerequisites: {
      topics: ['Trees', 'Heaps / Priority Queues'],
      dependencyGraph: ['Trees -> Graph Representation -> BFS/DFS -> Dijkstra & MST -> Strongly Connected Components']
    },
    breakdown: [
      {
        groupName: 'Representations & Traversals',
        items: [
          'Adjacency Matrix vs Adjacency List (memory-time trade-offs)',
          'BFS: Breadth-First search using queues (Shortest path in unweighted graphs)',
          'DFS: Depth-First search (recursion/stack, backtracking, edge classifications)',
          'Connected Components discovery'
        ]
      },
      {
        groupName: 'Topological Sort & Connectivity',
        items: [
          'Topological Sort on DAGs (Kahn\'s BFS-based indegree, DFS-based post-order)',
          'Cycle Detection: Undirected (BFS/DFS parent pointer) vs Directed (DFS recursion stack/colors)',
          'Bipartite Graph verification (Graph coloring)',
          'Disjoint Set Union (Union Find) with Path Compression and Union by Rank'
        ]
      },
      {
        groupName: 'Shortest Paths & MST',
        items: [
          'Dijkstra\'s algorithm (Single-source shortest path, greedy, min-heap priority queue)',
          'Bellman-Ford algorithm (Negative weights, negative cycle detection)',
          'Floyd-Warshall algorithm (All-pairs shortest path, 3-loop dynamic programming)',
          'Kruskal\'s Minimum Spanning Tree (Sort edges, Union Find validation)',
          'Prim\'s Minimum Spanning Tree (Priority queue edge expansion)'
        ]
      },
      {
        groupName: 'Advanced Connectivity & Flow',
        items: [
          'Strongly Connected Components: Kosaraju\'s (Two-pass DFS) and Tarjan\'s (Low-link values)',
          'Articulations Points and Bridges (Tarjan\'s Bridge-finding algorithm)',
          'Network Flow: Ford-Fulkerson (Augmenting paths), Edmonds-Karp (BFS-based path selection), Dinic\'s (Layer graphs, blocking flows)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "How do you detect negative weight cycles in a graph?",
        answer: "Use the Bellman-Ford algorithm. Run the edge-relaxation phase for V-1 iterations. If you run relaxation for one more (V-th) iteration and any shortest-path distance reduces, it means a negative-weight cycle exists in the graph."
      },
      {
        question: "Explain the difference between Dijkstra's and Prim's algorithms.",
        answer: "Dijkstra's is used to find the shortest path from a single source node to all other nodes (minimizing cumulative path weight). Prim's is used to find the Minimum Spanning Tree connecting all nodes (minimizing total edge cost of the tree). Dijkstra's updates distances based on the path length from source, while Prim's updates based on the direct edge cost to the current tree."
      }
    ],
    miniProjects: [
      { title: "Social Network Connection Degree Tracker", description: "Build a program that maps social connections and finds the degree of separation (degrees, paths) between users using BFS." },
      { title: "Network Router Topology Simulator", description: "Simulate a router topology that recalculates data packet routing tables when nodes disconnect, using Dijkstra's algorithm." }
    ],
    majorProject: {
      title: "Real-time Public Transit Route Planner",
      description: "Design and implement a transit route optimization backend that handles multi-modal systems (bus, train, walk) with dynamic weights, schedules, transfer costs, and delays using customized Dijkstra/A* graphs."
    },
    revisionChecklist: [
      'Write Dijkstra\'s algorithm from scratch with custom Priority Queue',
      'Explain Topological Sort constraints and why it only works on DAGs',
      'Determine articulation points and bridges on paper',
      'Explain Kosaraju\'s two-pass logic',
      'Implement Union Find with path compression and rank optimization'
    ]
  },
  {
    id: 'dsa_dp',
    name: 'Dynamic Programming',
    category: 'DSA',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Overlapping Subproblems', 'Optimal Substructure', 'Memoization (Top-down) vs Tabulation (Bottom-up)', '1D DP basics (Fibonacci, Climbing Stairs)']
      },
      {
        level: 'Intermediate',
        concepts: ['2D DP grids (Unique Paths, Min Path Sum)', 'Knapsack Problems (0/1 Knapsack, Unbounded Knapsack)', 'Longest Increasing Subsequence (LIS)', 'Longest Common Subsequence (LCS)']
      },
      {
        level: 'Advanced',
        concepts: ['Matrix Chain Multiplication', 'Digit DP (counting numbers with specific criteria)', 'Bitmask DP (Traveling Salesperson)', 'DP on Trees', 'State Compression techniques']
      },
      {
        level: 'Expert',
        concepts: ['Convex Hull Trick in DP', 'Divide and Conquer Optimization', 'Knuth\'s Optimization', 'Profile DP / Plug DP on grids']
      }
    ],
    prerequisites: {
      topics: ['Recursion', 'Backtracking'],
      dependencyGraph: ['Recursion -> Memoization -> Tabulation -> 1D/2D DP -> Advanced State/Bitmask DP']
    },
    breakdown: [
      {
        groupName: 'Foundations of DP',
        items: [
          'Identifying Overlapping Subproblems and Optimal Substructure',
          'Recursion tree and redundancy analysis',
          'Top-down Memoization (Recursion + Look-up table)',
          'Bottom-up Tabulation (Iterative, state transition tables)',
          'Space Optimization (reducing O(N) space to O(1) in 1D, O(W) in 2D)'
        ]
      },
      {
        groupName: '1D & 2D Grid DP',
        items: [
          'Climbing Stairs, House Robber, Coin Change problems',
          'Grid traversals: Minimum Path Sum, Unique Paths, Triangle',
          'Maximal Square, Dungeon Game grids'
        ]
      },
      {
        groupName: 'Knapsack & Subsequences',
        items: [
          '0/1 Knapsack: Recursive tree, state representation DP[i][w], bottom-up transition',
          'Unbounded Knapsack: Infinite item supplies, Rod Cutting, Coin Change II',
          'Longest Increasing Subsequence (LIS): O(n^2) DP vs O(n log n) Binary Search (Patience Sorting)',
          'Longest Common Subsequence (LCS): String alignment, Edit Distance, Distinct Subsequences'
        ]
      },
      {
        groupName: 'Advanced & Specialized DP',
        items: [
          'Matrix Chain Multiplication (MCM): Interval-based DP partitioning',
          'Digit DP: Solving range math counts without iterating every number',
          'DP on Trees: Tree diameter, Maximum Path Sum, Independent Set on Trees',
          'Bitmask DP: TSP (Traveling Salesperson Problem), assigning jobs, state compression using integers'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "How do you optimize space in dynamic programming?",
        answer: "Space optimization is possible when the state transition only depends on a few previous rows or elements. For instance, in a 2D DP grid where `dp[i][j]` only depends on `dp[i-1][j]` and `dp[i][j-1]`, we can compress the space complexity from O(R * C) to O(C) by keeping only the current and previous rows, or even a single row updated in place."
      },
      {
        question: "Explain the O(N log N) optimization for Longest Increasing Subsequence.",
        answer: "Instead of the O(N^2) comparison loop, we maintain an active list of ends of increasing subsequences. For each element in the input, we use binary search (`std::lower_bound` or equivalent) to find its position in our active list and replace/append it. The length of this list at the end represents the LIS length, achieving O(N log N) complexity."
      }
    ],
    miniProjects: [
      { title: "Text Spell Diff Visualizer", description: "Build a tool that takes two strings and calculates the minimum edit distance operations (insert, delete, replace) and renders the difference visually." },
      { title: "Optimized Cargo Loader Calculator", description: "Design an inventory packaging tool using 0/1 and fractional Knapsack logic to maximize revenue on carrier truck payloads." }
    ],
    majorProject: {
      title: "Intelligent Code Alignment & File Sync Engine",
      description: "Develop a robust code comparison engine (similar to Git diff) using optimized LCS algorithms, interval matching, tree-based AST diffing, and visual HTML difference layouts."
    },
    revisionChecklist: [
      'Write 0/1 Knapsack space-optimized to 1D array',
      'Describe the recurrence relation for Edit Distance',
      'Explain when to use Bitmask DP over standard DFS backtracking',
      'Solve Tree DP (maximum sum path) on paper',
      'Trace recursion state flow for Digit DP'
    ]
  },
  {
    id: 'dsa_hashing_math_recursion',
    name: 'Hashing, Recursion, Bit Manipulation',
    category: 'DSA',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Call Stack in Recursion', 'Base Cases vs Recursive Cases', 'Bitwise Operators (&, |, ^, ~)', 'Hash Table Basics']
      },
      {
        level: 'Intermediate',
        concepts: ['Backtracking (N-Queens, Sudoku)', 'Divide and Conquer (Merge/Quick Sort)', 'Bitmasks', 'Collision Resolution (Chaining, Open Addressing)']
      },
      {
        level: 'Advanced',
        concepts: ['Consistent Hashing', 'Bloom Filters', 'Gray Code & Bitwise Permutations', 'Exponentiation by squaring', 'Fourier Transform basics']
      },
      {
        level: 'Expert',
        concepts: ['Minimal Perfect Hashing', 'Fast Walsh-Hadamard Transform', 'Bitwise Parallelism', 'Analyzing extreme hash collision attacks']
      }
    ],
    prerequisites: {
      topics: ['Basic Math', 'Bitwise syntax'],
      dependencyGraph: ['Math -> Bitwise Operators -> Hashing/Bloom Filters & Recursion / Backtracking']
    },
    breakdown: [
      {
        groupName: 'Recursion & Backtracking',
        items: [
          'Understanding stack frames, stack overflow causes, recursion depth',
          'Divide and Conquer: Merge Sort, Quick Sort (Partitioning schemes)',
          'Backtracking: Permutations, Subsets, N-Queens, Sudoku, Hamiltonian path search',
          'Optimizations: Pruning branches early, state compression'
        ]
      },
      {
        groupName: 'Bit Manipulation',
        items: [
          'Bitwise Operators: AND, OR, XOR, NOT, Left/Right Shift',
          'Setting, clearing, toggling, and querying specific bits',
          'Counting set bits (Brian Kernighan\'s algorithm, lookup tables)',
          'XOR Properties (A ^ A = 0, A ^ 0 = A), Single Number problems',
          'Bitmasks to represent subsets of items'
        ]
      },
      {
        groupName: 'Hashing & Collections',
        items: [
          'Hash functions: Uniform distribution, avalanche effect',
          'Collision Resolution: Separate chaining (Linked lists) vs Open Addressing (Linear, Quadratic, Double Hashing)',
          'Amortized resizing and load factors',
          'Bloom Filters: Bit arrays + multiple hash functions for fast probabilistic membership tests',
          'Consistent Hashing: Hash ring matching for distributed routing'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain Bloom Filters. Can they have false negatives?",
        answer: "A Bloom Filter is a space-efficient probabilistic data structure used to test set membership. It uses a bit array and multiple hash functions. It can return false positives (stating an item is in the set when it isn\'t) but can never return false negatives (if it says an item is not in the set, it is 100% not there)."
      },
      {
        question: "How does Brian Kernighan's algorithm count set bits in an integer?",
        answer: "Brian Kernighan\'s algorithm subtracts 1 from the number (which flips all bits after the rightmost set bit) and performs a bitwise AND between the original and modified number (`n & (n - 1)`). This effectively clears the lowest set bit in O(1) time. We repeat this until the number becomes 0. The number of operations is equal to the number of set bits."
      }
    ],
    miniProjects: [
      { title: "Custom Hash Map", description: "Write a high-performance hash map from scratch in TypeScript using separate chaining, custom hash functions, and automatic resizing thresholds." },
      { title: "Sudoku Solver Dashboard", description: "Build a recursive backtracking solver for Sudoku with visual step-by-step backtracking animations and speed throttles." }
    ],
    majorProject: {
      title: "Distributed Key-Value Store with Consistent Hashing",
      description: "Build a multi-node in-memory key-value store routing system using Consistent Hashing, node addition/removal rebalancing logic, and local Bloom Filters to optimize query parameters."
    },
    revisionChecklist: [
      'Implement binary subset generation using bitwise shifts',
      'Explain difference between Open Addressing and Chaining',
      'Explain when Bloom Filters are preferred over HashSets',
      'Write a function that swaps two numbers using XOR without temporary memory',
      'Explain recursive backtracking time complexity bounds'
    ]
  }
];
