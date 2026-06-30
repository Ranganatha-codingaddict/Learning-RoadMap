import { SyllabusTopic } from '../types';

export const genaiTopics: SyllabusTopic[] = [
  {
    id: 'genai_llms_prompt_vector',
    name: 'LLMs, Prompting & Vector Databases',
    category: 'Generative AI',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Generative AI Overview', 'What is an LLM', 'Basic Prompting', 'Text Embeddings definition']
      },
      {
        level: 'Intermediate',
        concepts: ['Few-Shot & Chain-of-Thought Prompting', 'Vector Spaces & Cosine Similarity', 'Storing embeddings in Vector Databases', 'Querying nearest neighbors (KNN)']
      },
      {
        level: 'Advanced',
        concepts: ['System Prompts & Guardrails', 'Tokenizers (BPE, WordPiece)', 'Hierarchical Vector Indexes (HNSW, IVF)', 'Metadata filtering inside VectorDBs']
      },
      {
        level: 'Expert',
        concepts: ['Custom Vector Search Index acceleration', 'Tokenizer vocabulary design', 'Prompt injection mitigations', 'High-performance embedding pipelines']
      }
    ],
    prerequisites: {
      topics: ['Deep Learning', 'PyTorch basics'],
      dependencyGraph: ['Neural Networks -> Transformers -> Large Language Models -> Text Embeddings -> Vector Databases']
    },
    breakdown: [
      {
        groupName: 'Large Language Models (LLMs)',
        items: [
          'Pre-training, Supervised Fine-Tuning (SFT), Reinforcement Learning from Human Feedback (RLHF, DPO)',
          'Autoregressive decoding, generation parameters: Temperature, Top-K, Top-P (nucleus sampling), Presence/Frequency penalties',
          'Context Window limits, scaling laws, sliding window attention',
          'Tokenization: Byte-Pair Encoding (BPE), SentencePiece, handling Out-of-Vocabulary (OOV) tokens'
        ]
      },
      {
        groupName: 'Prompt Engineering & Control',
        items: [
          'Zero-shot vs Few-shot prompts, providing clear context guidelines',
          'Chain-of-Thought (CoT) prompting, ReAct framework prompt structures',
          'System prompts role in constraining behaviors, output styling prompts (JSON schemas)',
          'Prompt injection vulnerabilities, defenses (XML tag separators, sandbox parsing)'
        ]
      },
      {
        groupName: 'Embeddings & Vector Databases',
        items: [
          'Dense vector representations, mapping words/sentences to coordinates',
          'Distance metrics: Cosine Similarity, Euclidean Distance (L2), Dot Product',
          'Vector Index types: Flat, Inverted File Index (IVF), Hierarchical Navigable Small World (HNSW)',
          'Vector Databases: Pinecone, Milvus, Chroma, pgvector',
          'Metadata filtering, hybrid search (combining dense vector with keyword BM25 search)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is HNSW (Hierarchical Navigable Small World) in Vector Databases?",
        answer: "HNSW is an approximate nearest neighbors (ANN) search algorithm. It builds a multi-layer graph index where the top layers have sparse connections (allowing fast long-distance jumps across the coordinate space) and the bottom layers have dense connections (allowing local, precise searches). It reduces vector search complexity from O(N) to O(log N)."
      },
      {
        question: "How do temperature, top-p, and top-k parameters control LLM generation?",
        answer: "`Temperature` scales logit values before Softmax; lower values make output deterministic (greedy), higher values make it diverse. `Top-K` limits candidates to the K most likely tokens. `Top-P` (nucleus sampling) limits candidates to a dynamic subset of tokens whose cumulative probability exceeds the value P, balancing creativity and relevance."
      }
    ],
    miniProjects: [
      { title: "Dynamic PDF Vector Indexer", description: "Write a TS tool that parses PDF chapters, generates embeddings, and inserts them with metadata tags into ChromaDB." },
      { title: "Strict Prompt-to-JSON Parser", description: "Build an API router that queries LLMs and enforces structured JSON returns matching strict zod schemas." }
    ],
    majorProject: {
      title: "Semantic Enterprise Document Search Console",
      description: "Build an enterprise semantic search console utilizing multi-file ingestion, pgvector storage, HNSW indexing, hybrid BM25 and vector search, and a beautiful web layout."
    },
    revisionChecklist: [
      'Compare Cosine Similarity vs Dot Product distance rules',
      'Explain difference between Tokenization strategies (BPE, SentencePiece)',
      'Explain why chain-of-thought prompting reduces LLM reasoning errors',
      'Describe how metadata filtering is executed in Vector Databases',
      'Write a Python prompt using few-shot formatting'
    ]
  },
  {
    id: 'genai_rag_agents_eval',
    name: 'RAG, Agents, Tool Calling & LangGraph',
    category: 'Generative AI',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is RAG (Retrieval-Augmented Generation)', 'Basic Function Calling / Tool Calling', 'Agent loop basics']
      },
      {
        level: 'Intermediate',
        concepts: ['RAG Chuncking Strategies (Fixed, Semantic)', 'Designing schemas for Tool Calling', 'Sequential Agents (LangChain)', 'Model Context Protocol (MCP)']
      },
      {
        level: 'Advanced',
        concepts: ['Advanced RAG: Query Rewriting, Parent-Child chunking, Re-ranking (Cohere)', 'Cyclic Agent Networks (LangGraph)', 'Agent State Management', 'AI Evaluation frameworks (Ragas)']
      },
      {
        level: 'Expert',
        concepts: ['Designing production-grade multi-agent swarms', 'Custom MCP server deployment', 'Optimizing RAG retrieval latency for billion-vector scales', 'LLM fine-tuning for specialized tool calling']
      }
    ],
    prerequisites: {
      topics: ['LLMs', 'Vector Databases', 'REST APIs'],
      dependencyGraph: ['VectorDBs -> Retrieval (RAG) -> Tool schemas -> Single-step Tool Calling -> Multi-step Agent Loop -> Cyclic graphs (LangGraph)']
    },
    breakdown: [
      {
        groupName: 'Retrieval-Augmented Generation (RAG)',
        items: [
          'Standard RAG: document -> chunk -> embed -> index -> query -> retrieve -> augment -> generate',
          'Document Chunking: Fixed-size chunking, overlap sizes, document-aware parsing (markdown/table parsers), semantic chunking',
          'Advanced Retrieval: Query Expansion, Query Rewriting, HyDE (Hypothetical Document Embeddings)',
          'Re-ranking: Cross-Encoder models (Cohere Rerank) to score top retrieved chunks',
          'Context Compression and parent-child document chunk relationships'
        ]
      },
      {
        groupName: 'Tool Calling & Function Calling',
        items: [
          'Function Calling protocol: LLM returns function name and JSON arguments instead of prose',
          'Writing JSON schemas for tools descriptions',
          'Handling model loops: Execute tool local code -> return tool output as chat history -> LLM completes task',
          'Model Context Protocol (MCP) standards for sharing tools, templates, resources across hosts'
        ]
      },
      {
        groupName: 'AI Agents & LangGraph',
        items: [
          'ReAct Agent loop (Reason -> Act -> Observe)',
          'Agent Architectures: Single Agent, Router-Supervisor, Multi-Agent Swarms',
          'Cyclic agent workflows using LangGraph: Nodes (agents/tools) and Edges (transitions/conditionals)',
          'Agent State: managing short-term chat context vs long-term memory databases',
          'Human-in-the-loop (Interrupts) implementation in graph flows'
        ]
      },
      {
        groupName: 'Fine-Tuning & AI Evaluation',
        items: [
          'Fine-Tuning: Supervised Fine-Tuning (SFT), Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)',
          'RAG Evaluation metrics: Faithfulness, Answer Relevance, Context Recall, Context Precision (using Ragas framework)',
          'LLM-as-a-judge evaluation frameworks'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the difference between SFT (Supervised Fine-Tuning) and RAG.",
        answer: "SFT updates model weights, teaching it new styles, domain tones, formats, or specific response behaviors based on labeled inputs. RAG does not change model weights; instead, it retrieves relevant external documents dynamically at query time and inserts them into the prompt, giving the model temporary access to factual, up-to-date information."
      },
      {
        question: "How does LoRA (Low-Rank Adaptation) optimize model fine-tuning?",
        answer: "LoRA freezes the original pre-trained LLM weights and injects trainable rank decomposition matrices into the attention layers. This drastically reduces the number of trainable parameters (e.g., from 7B to 10M parameters), lowering GPU memory requirements and training times while maintaining near-identical performance."
      },
      {
        question: "What is the DataLoader / DataLoader pattern in RAG?",
        answer: "In RAG pipelines, data loading involves parsing heterogeneous document types (PDFs, Word, Web Scraping) and resolving structural boundaries (headers, lists, tables). Document-specific loaders extract textual content cleanly, ensuring formatting elements aren't lost before token slicing."
      }
    ],
    miniProjects: [
      { title: "Command-Line Agent with Local Tools", description: "Build a Node/TS command-line agent using Gemini SDK that can fetch local weather or search files via tool calling." },
      { title: "RAG Evaluation Test Suite", description: "Create an automated evaluator script that queries RAG endpoints and ranks faithfulness scores using an LLM-as-a-judge paradigm." }
    ],
    majorProject: {
      title: "Cyclic Multi-Agent Enterprise Research Swarm",
      description: "Develop a robust cyclic multi-agent research platform using LangGraph, incorporating custom tools, human-in-the-loop validation checkpoints, parent-child document indexers, and auto-evaluated summaries."
    },
    revisionChecklist: [
      'Compare standard RAG vs Parent-Document RAG systems',
      'Explain the mathematical trick in LoRA fine-tuning',
      'Write an OpenAPI tool schema definition block',
      'Define LangGraph nodes and conditional edges',
      'Explain how Faithfulness is measured in RAG evaluations'
    ]
  }
];
