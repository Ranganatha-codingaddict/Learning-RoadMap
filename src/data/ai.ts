import { SyllabusTopic } from '../types';

export const aiTopics: SyllabusTopic[] = [
  {
    id: 'maths_and_python_libs',
    name: 'Mathematics & Data Science Libraries',
    category: 'AI & Machine Learning',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['NumPy Arrays & indexing', 'Pandas DataFrames basics', 'Matplotlib plotting', 'Linear Algebra basics (Vectors, Matrices)']
      },
      {
        level: 'Intermediate',
        concepts: ['Pandas GroupBy & Merges', 'Seaborn statistical plots', 'Matrix Multiplication & Transpose', 'Calculus (Derivatives, Partial Derivatives)']
      },
      {
        level: 'Advanced',
        concepts: ['Probability distributions (Gaussian, Bernoulli)', 'Eigenvalues & Eigenvectors', 'Gradient Descent mathematics', 'Covariance & Correlation matrices']
      },
      {
        level: 'Expert',
        concepts: ['Stochastic Calculus', 'Optimization theory (KKT conditions)', 'High-dimensional space properties', 'Advanced statistical inference']
      }
    ],
    prerequisites: {
      topics: ['Python Basics', 'High School Algebra'],
      dependencyGraph: ['Python syntax -> NumPy matrices -> Calculus/Probability -> Data plotting -> Data Wrangling with Pandas']
    },
    breakdown: [
      {
        groupName: 'Python Libraries (NumPy, Pandas, Visualization)',
        items: [
          'NumPy: ndarray creation, vectorization, broadcasting rules, indexing and slicing, linear algebra methods',
          'Pandas: Series and DataFrames, reading CSV/Excel/JSON files, handling missing data (dropna, fillna), filtering and sorting',
          'Pandas Aggregations: groupby, merge, join, concat, pivot tables, apply() custom functions',
          'Matplotlib: figure and axes creation, line/scatter/bar plots, subplots layout custom configs',
          'Seaborn: statistical plots (displot, jointplot, pairplot, heatmap, violin plots)'
        ]
      },
      {
        groupName: 'Mathematics (Linear Algebra & Calculus)',
        items: [
          'Vectors, Matrices, Matrix Multiplication rules, Identity and Inverse matrices',
          'Systems of Linear Equations, Gaussian Elimination',
          'Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA) math',
          'Derivatives, Partial Derivatives, Chain Rule for nested functions',
          'Gradient vector, Jacobian and Hessian matrices',
          'Optimization: local/global minima, convex optimization'
        ]
      },
      {
        groupName: 'Mathematics (Probability & Statistics)',
        items: [
          'Probability basics: Sample spaces, events, conditional probability, Bayes\' Theorem',
          'Random Variables: discrete vs continuous, Probability Density Functions (PDF)',
          'Common Distributions: Uniform, Normal/Gaussian, Binomial, Poisson, Bernoulli',
          'Descriptive Statistics: Mean, Median, Mode, Variance, Standard Deviation, Percentiles',
          'Inferential Statistics: Central Limit Theorem, Hypothesis Testing (t-tests, p-values), Confidence Intervals'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is NumPy Broadcasting?",
        answer: "Broadcasting is NumPy's mechanism to perform arithmetic operations on arrays of different shapes. It duplicates the smaller array along trailing dimensions to match the shape of the larger array without making unnecessary physical copies in memory, making calculations extremely fast."
      },
      {
        question: "Explain Bayes' Theorem and its relevance in Machine Learning.",
        answer: "Bayes' Theorem calculates conditional probability: P(A|B) = [P(B|A) * P(A)] / P(B). In Machine Learning, it serves as the foundation for Naive Bayes classifiers, where we predict the probability of a class (A) given observed features (B), updating our prior beliefs based on training data."
      },
      {
        question: "What is the difference between covariance and correlation?",
        answer: "Covariance measures the directional relationship between two variables (whether they increase or decrease together). However, its value is scale-dependent. Correlation normalizes covariance by dividing it by the product of the variables' standard deviations, constraining the score to a scale of -1 to +1, showing both direction and strength of relationship."
      }
    ],
    miniProjects: [
      { title: "E-Commerce Dataset Analysis", description: "Build a Pandas program that cleans raw purchase logs, aggregates sales stats, and plots seasonal patterns using Seaborn heatmaps." },
      { title: "Linear Regression from Scratch (Math)", description: "Write the mathematical gradient update loop for single-variable linear regression in raw Python without any ML libraries." }
    ],
    majorProject: {
      title: "Comprehensive Statistical Financial Analytics Toolkit",
      description: "Develop a complete data analytics package in Python that cleans financial stock feeds, performs matrix-based portfolio optimization calculations, tracks asset correlations, and plots risk distributions."
    },
    revisionChecklist: [
      'Write down Bayes\' Theorem formula',
      'Explain difference between Pandas merge and concat',
      'Describe why broadcasting saves memory in NumPy',
      'Calculate partial derivative of simple cost function',
      'Explain p-value interpretation rules'
    ]
  },
  {
    id: 'ml_dl_pytorch_transformers',
    name: 'Machine Learning, Deep Learning & Transformers',
    category: 'AI & Machine Learning',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Supervised vs Unsupervised learning', 'Linear & Logistic Regression', 'Neural Network basics', 'Tensors in PyTorch']
      },
      {
        level: 'Intermediate',
        concepts: ['Decision Trees & Random Forests', 'Backpropagation math', 'CNNs & RNNs', 'PyTorch Dataset & DataLoader', 'Activation functions (ReLU, Sigmoid)']
      },
      {
        level: 'Advanced',
        concepts: ['SVMs & Clustering (K-Means)', 'PyTorch Custom Neural Networks', 'Attention Mechanism details', 'Self-Attention vs Cross-Attention', 'Transformer Encoder-Decoder architecture']
      },
      {
        level: 'Expert',
        concepts: ['Custom PyTorch Autograd functions', 'Distributed training (DDP, ZeRO)', 'Transformer optimization (FlashAttention)', 'Writing custom transformer layers']
      }
    ],
    prerequisites: {
      topics: ['Python Data Science Libraries', 'Linear Algebra & Calculus'],
      dependencyGraph: ['NumPy Matrices -> Regression Models -> PyTorch Tensors -> Neural Network layers -> Self-Attention & Transformers']
    },
    breakdown: [
      {
        groupName: 'Traditional Machine Learning',
        items: [
          'Supervised Learning: Linear Regression, Logistic Regression, Support Vector Machines (SVM)',
          'Unsupervised Learning: K-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA)',
          'Ensemble Methods: Random Forests, Gradient Boosting (XGBoost, LightGBM)',
          'Model Evaluation: Train/test split, Cross-Validation, Bias-Variance trade-off, Overfitting/Underfitting, Regularization (L1/L2 Lasso/Ridge)',
          'Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC curves'
        ]
      },
      {
        groupName: 'Deep Learning & PyTorch',
        items: [
          'Artificial Neural Networks (ANN): neurons, weights, biases, feedforward passes',
          'Activation Functions: Sigmoid, Tanh, ReLU, LeakyReLU, Softmax',
          'Loss Functions: Mean Squared Error (MSE), Cross-Entropy loss',
          'Optimization: Stochastic Gradient Descent (SGD), Adam, RMSprop',
          'Backpropagation algorithm and the mathematical computation graph',
          'PyTorch Core: Tensors, autograd, nn.Module, Optimizer, Dataset, DataLoader'
        ]
      },
      {
        groupName: 'Transformers & Self-Attention',
        items: [
          'Limitation of RNNs/LSTMs (sequential bottlenecks)',
          'The Self-Attention Mechanism: Queries, Keys, Values (Q, K, V matrices)',
          'Scaled Dot-Product Attention formula and Multi-Head Attention layers',
          'Positional Encodings (sinusoidal, Rotary embeddings RoPE)',
          'Transformer Blocks: Layer Normalization (Pre-LN vs Post-LN), Residual Connections, Feed-Forward Networks',
          'Encoder-Decoder architectures (T5) vs Encoder-only (BERT) vs Decoder-only (GPT)'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the self-attention formula in Transformers.",
        answer: "Attention(Q, K, V) = Softmax( (Q * K^T) / sqrt(d_k) ) * V. The Query (Q) is multiplied by the Key (K^T) to get alignment weights, which are scaled by `sqrt(d_k)` to prevent vanishing gradients during Softmax. Softmax normalizes weights to a probability distribution, which is multiplied by Value (V) to get the weighted representations of tokens."
      },
      {
        question: "What is Backpropagation and how does it update weights?",
        answer: "Backpropagation is the algorithm used to calculate gradients of a loss function with respect to neural network weights. It traverses the neural network backwards, starting from output nodes, using the mathematical Chain Rule to recursively calculate partial derivatives, which are subtracted from weights using an optimizer."
      },
      {
        question: "What is the difference between L1 (Lasso) and L2 (Ridge) regularization?",
        answer: "L1 regularization adds the sum of absolute values of weights to the loss function, encouraging weights to become exactly zero (promoting sparse models, useful for feature selection). L2 regularization adds the sum of squared weights, penalizing large weights and keeping them small but non-zero, promoting smooth generalization."
      }
    ],
    miniProjects: [
      { title: "Iris Flowers Classifier", description: "Use Scikit-Learn to build and evaluate a Random Forest classifier that identifies flower types with confusion matrix visualizations." },
      { title: "PyTorch MNIST Digit Classifier", description: "Build a custom Convolutional Neural Network in PyTorch from scratch to classify handwritten digits with 98%+ accuracy." }
    ],
    majorProject: {
      title: "Custom Transformer Encoder-Decoder model from Scratch",
      description: "Build a complete Transformer encoder-decoder machine translation model from scratch in PyTorch using custom self-attention layers, rotary embeddings, training loops, and loss evaluators."
    },
    revisionChecklist: [
      'Draw the Transformer block architecture diagram',
      'Explain scaling factor sqrt(d_k) in self-attention',
      'Implement simple linear regression forward pass in PyTorch',
      'Explain overfitting remedies (Dropout, Regularization, Early stopping)',
      'Describe backpropagation computational graph'
    ]
  }
];
