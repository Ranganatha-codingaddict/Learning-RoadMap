import { SyllabusTopic } from '../types';

export const mlopsTopics: SyllabusTopic[] = [
  {
    id: 'mlops_all',
    name: 'FastAPI, MLflow & Production MLOps',
    category: 'MLOps',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is MLOps', 'FastAPI basics (Endpoints, Pydantic)', 'Saving model artifacts (Pickle, Joblib)', 'MLflow Tracking basics']
      },
      {
        level: 'Intermediate',
        concepts: ['FastAPI Async endpoints', 'MLflow Model Registry', 'Containerizing models with Docker', 'Data & Model Versioning (DVC)']
      },
      {
        level: 'Advanced',
        concepts: ['Model Deployment modes (Batch, Real-time, Streaming)', 'Model Monitoring (Concept Drift, Covariate Shift)', 'ML Pipelines (Airflow, Kubeflow)', 'CI/CD for Machine Learning (CML)']
      },
      {
        level: 'Expert',
        concepts: ['Designing global millisecond model serving systems', 'Automated model retraining loops based on drift metrics', 'Optimizing GPU allocation inside Kubernetes clusters']
      }
    ],
    prerequisites: {
      topics: ['Python Libraries', 'Machine Learning', 'Docker'],
      dependencyGraph: ['Python ML models -> FastAPI endpoints -> MLflow experiment tracking -> Model Registry -> Kubernetes serving & Drift logs']
    },
    breakdown: [
      {
        groupName: 'FastAPI Model Serving',
        items: [
          'FastAPI features: Type hints, automatic OpenAPI/Swagger docs',
          'Request validation using Pydantic schemas (BaseModel)',
          'Asynchronous endpoints (`async def`), lifespan startup/shutdown events for loading models into memory',
          'Handling CORS, middleware, dependency injection (`Depends`)',
          'Deploying FastAPI: Uvicorn/Gunicorn servers, scaling workers'
        ]
      },
      {
        groupName: 'MLflow & Experiment Tracking',
        items: [
          'MLflow Tracking: logging parameters, metrics, tags, and artifacts (model binaries, plots)',
          'MLflow Projects: packing code in reusable, reproducible templates',
          'MLflow Models: standard packaging formats (flavor definitions)',
          'MLflow Model Registry: centralized store, stage transitions (Staging, Production, Archived)'
        ]
      },
      {
        groupName: 'Model Deployment & Pipelines',
        items: [
          'Deployment strategies: Batch inference (cron schedules) vs Real-time REST APIs vs Event-driven (Kafka integrations)',
          'Containerizing models: Writing production-ready Docker containers for ML inference',
          'Orchestrating model pipelines: Apache Airflow DAGs, Kubeflow pipelines',
          'Data Versioning: DVC (Data Version Control) tracking large dataset changes via Git hashes'
        ]
      },
      {
        groupName: 'Monitoring & Drift Detection',
        items: [
          'Concept Drift (change in P(Y|X)) vs Data/Covariate Drift (change in P(X))',
          'Drift detection algorithms: Kolmogorov-Smirnov (KS) test, Population Stability Index (PSI)',
          'Monitoring tools: Prometheus, Grafana, Evidently AI dashboards',
          'Alerting and feedback loops for automatic retraining trigger parameters'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the difference between Covariate Shift and Concept Drift.",
        answer: "`Covariate Shift` happens when the input data distribution changes over time, but the relationship between input and output stays the same (e.g., your model was trained on middle-aged customers but now receives requests from young customers). `Concept Drift` happens when the underlying relationship between inputs and outputs changes, making the target definition itself shift (e.g., what was classified as normal spending behavior becomes fraud due to a change in payment trends)."
      },
      {
        question: "Why is FastAPI preferred over Flask for machine learning model serving?",
        answer: "FastAPI is natively asynchronous (built on ASGI), making it extremely fast and capable of handling thousands of concurrent requests. It uses Python type hints for automatic Pydantic request validation (preventing malformed inputs from crashing models) and automatically generates interactive OpenAPI/Swagger documentation out-of-the-box."
      }
    ],
    miniProjects: [
      { title: "FastAPI Logistic Regression Server", description: "Build an async FastAPI server that loads a pre-trained regression model and validates inputs using Pydantic." },
      { title: "MLflow Run Logger", description: "Write a training script that sweeps hyperparameters for an SVM model and logs metrics, parameters, and models to MLflow." }
    ],
    majorProject: {
      title: "End-to-End MLOps Training & Serving Pipeline",
      description: "Develop a complete machine learning lifecycle project incorporating DVC data tracking, MLflow model tracking and registry, containerized FastAPI endpoints, Prometheus log tracking, and Evidently AI drift reports."
    },
    revisionChecklist: [
      'Write a simple FastAPI POST endpoint with Pydantic body validation',
      'Describe how MLflow Model Registry stages control promotion rules',
      'Explain difference between data drift and model bias',
      'Configure Gunicorn with Uvicorn worker nodes',
      'Explain how DVC tracks large datasets without pushing them to GitHub'
    ]
  }
];
