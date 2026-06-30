import { SyllabusTopic } from '../types';

export const devopsTopics: SyllabusTopic[] = [
  {
    id: 'git_linux_containers',
    name: 'Git, Linux & Docker',
    category: 'Cloud & DevOps',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['Git Basics (init, add, commit, push)', 'Linux File System structure', 'Basic Commands (ls, cd, mkdir, cat)', 'Docker run and containers']
      },
      {
        level: 'Intermediate',
        concepts: ['Git Branching, Merging & Rebase', 'Linux Permission schemes (chmod, chown)', 'Dockerfiles creation', 'Docker Images & Layers', 'Docker Compose']
      },
      {
        level: 'Advanced',
        concepts: ['Git interactive rebase, Cherry-pick', 'Linux Process monitoring (top, ps, htop)', 'Docker Multi-stage builds', 'Docker Networking & Volumes', 'Custom Linux Bash Scripting']
      },
      {
        level: 'Expert',
        concepts: ['Resolving complex git reflog states', 'Custom Linux Kernel compile parameters', 'Writing custom Docker storage drivers', 'Securing container namespaces']
      }
    ],
    prerequisites: {
      topics: ['Basic programming', 'OS fundamentals'],
      dependencyGraph: ['OS Basics -> Linux terminal -> Git control -> Docker containers -> Multi-stage deployment']
    },
    breakdown: [
      {
        groupName: 'Git Version Control',
        items: [
          'Git internal model: blobs, trees, commits, refs',
          'Basic operations: init, add, commit, push, pull, clone',
          'Branching strategies: Git Flow vs GitHub Flow vs Trunk-Based Development',
          'Merging: Merge commits vs Fast-forward vs Rebase',
          'Advanced Git commands: cherry-pick, stash, revert, reset (soft vs mixed vs hard)',
          'Git Reflog (retrieving lost commits), Git Bisect (binary search bug finder)'
        ]
      },
      {
        groupName: 'Linux Systems & Shell',
        items: [
          'Linux Directory Structure (/etc, /bin, /var, /usr)',
          'User/Group accounts and File Permissions (chmod, chown, absolute vs symbolic)',
          'Text utilities: grep, awk, sed, cut, find, lsof, netstat',
          'Process states, signals, jobs, monitoring (top, htop, ps, kill, nohup)',
          'Variables, control logic, arrays, exit codes, pipelines, redirections (>, >>, 2>&1)',
          'SSH, SCP, SSH keys, configuration, agent forwarding'
        ]
      },
      {
        groupName: 'Docker Containers',
        items: [
          'Containers vs Virtual Machines (Hypervisors vs Kernel namespaces)',
          'Docker architecture: Daemon, Engine, REST API, Client, Registries',
          'Dockerfile directives: FROM, RUN, COPY, ADD, CMD, ENTRYPOINT, EXPOSE, ENV, ARG',
          'Docker image layers cache optimization and multi-stage builds',
          'Docker Volumes: Bind mounts, Anonymous vs Named volumes',
          'Docker Networking: Bridge, Host, None, Overlay networks',
          'Docker Compose: multi-container orchestration configs'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between Git Merge and Git Rebase?",
        answer: "`git merge` takes all changes from one branch and merges them into another branch in a single merge commit, preserving the actual historical order of commits but cluttering the graph. `git rebase` rewrites the commit history by applying all local commits on top of the target branch, resulting in a clean, linear commit history."
      },
      {
        question: "Explain the difference between CMD and ENTRYPOINT in a Dockerfile.",
        answer: "`ENTRYPOINT` defines the executable command that will always run when the container starts. `CMD` defines default arguments passed to the ENTRYPOINT, which can be easily overridden when executing `docker run <image> <new_arguments>`."
      },
      {
        question: "How do namespaces and cgroups differ in Linux containers?",
        answer: "`Namespaces` provide isolation boundaries (making a container see only its own processes, network interfaces, mount points, and users). `Control Groups (cgroups)` provide resource limitations (throttling how much CPU, memory, I/O, or network bandwidth a container is allowed to consume)."
      }
    ],
    miniProjects: [
      { title: "Static Web Host container", description: "Write a multi-stage Dockerfile that builds a React application and bundles it in an optimized Nginx server container." },
      { title: "Bash System Monitor Script", description: "Develop a Bash script that checks CPU/Memory use, finds large logs, and sends alert prompts when levels exceed thresholds." }
    ],
    majorProject: {
      title: "Secure Enterprise Web Deployment Bundle",
      description: "Build a deployment package featuring complex multi-stage Dockerfiles, a secure Docker-compose schema containing API and DB, persistent mount schemes, and container health-checks."
    },
    revisionChecklist: [
      'Compare Git hard vs soft reset',
      'Optimize Dockerfile layer ordering to use build cache',
      'Configure Docker volumes for persistent SQL databases',
      'Identify file systems bottlenecks in Linux',
      'Explain how Git stores file history (content hash hashes)'
    ]
  },
  {
    id: 'k8s_terraform_actions_aws',
    name: 'Kubernetes, CI/CD, Terraform & AWS',
    category: 'Cloud & DevOps',
    roadmap: [
      {
        level: 'Beginner',
        concepts: ['What is Kubernetes', 'CI/CD pipeline basics', 'Cloud Computing definition', 'Terraform syntax (HCL)']
      },
      {
        level: 'Intermediate',
        concepts: ['K8s Pods, Deployments & Services', 'GitHub Actions workflows', 'Terraform State & Providers', 'AWS core services (IAM, EC2, S3, RDS)']
      },
      {
        level: 'Advanced',
        concepts: ['K8s ConfigMaps, Secrets & Ingress', 'Terraform Variables, Outputs & Modules', 'AWS VPC configurations, Subnets, Route Tables', 'AWS Serverless (Lambda, API Gateway)']
      },
      {
        level: 'Expert',
        concepts: ['K8s Custom Resource Definitions (CRDs)', 'Terraform state locking & backend configs', 'Designing global multi-region cloud networks', 'Zero-downtime deployment pipelines']
      }
    ],
    prerequisites: {
      topics: ['Linux systems', 'Docker containers'],
      dependencyGraph: ['Docker Images -> Kubernetes Orchestration -> Terraform Infrastructure -> AWS Hosting -> GitHub Actions CI/CD']
    },
    breakdown: [
      {
        groupName: 'Kubernetes (K8s)',
        items: [
          'Kubernetes Architecture: Control Plane (ApiServer, Scheduler, ControllerManager, Etcd) vs Worker Nodes (Kubelet, Kube-Proxy)',
          'Core Resources: Pods, ReplicaSets, Deployments, StateSets, DaemonSets',
          'K8s Networking: Services (ClusterIP, NodePort, LoadBalancer), Ingress Controllers',
          'Configuration Management: ConfigMaps, Secrets, Env injection',
          'Storage: Volumes, PersistentVolumes (PV), PersistentVolumeClaims (PVC), StorageClasses',
          'Probes: Liveness, Readiness, and Startup probes'
        ]
      },
      {
        groupName: 'CI/CD with GitHub Actions',
        items: [
          'CI/CD concepts: continuous integration, testing, packaging, deployment, feedback',
          'GitHub Actions components: Workflows, Jobs, Steps, Runners, Actions',
          'Syntax: trigger events (on: push, pull_request), environments, variables, secrets',
          'Parallel jobs execution, conditional steps, matrices configurations',
          'Artifacts storage and container registry deployments (GHCR, ECR)'
        ]
      },
      {
        groupName: 'Infrastructure as Code (Terraform)',
        items: [
          'Infrastructure as Code (IaC) declarative vs imperative approaches',
          'Terraform core concepts: Providers, Resources, Variables, Outputs, Locals, Data Sources',
          'Terraform State file purpose, state locking, remote backends (S3, GCS)',
          'Terraform Lifecycle: init, plan, apply, destroy',
          'Reusable infrastructure architectures with Terraform Modules'
        ]
      },
      {
        groupName: 'Amazon Web Services (AWS)',
        items: [
          'IAM: Users, Groups, Roles, Policies, MFA, Principle of Least Privilege',
          'EC2: Instances, AMIs, Key Pairs, Security Groups, Instance Types',
          'S3: Buckets, Objects, Versioning, Lifecycle policies, Storage Classes',
          'RDS: Managed databases, Multi-AZ, Read Replicas, backups',
          'VPC: Subnets (Public vs Private), Internet Gateways, NAT Gateways, Route Tables',
          'CloudFront: Global CDN, Edge Locations, Cache policies',
          'Route 53: DNS management, Routing Policies (latency, failover, geolocation)',
          'ECS & ECR: Elastic Container Service, Fargate, Elastic Container Registry',
          'Lambda & API Gateway: Serverless compute, API mapping, throttles',
          'CloudWatch: Metrics, Logs, Alarms, Dashboards',
          'SQS & SNS: Simple Queue Service (decoupling), Simple Notification Service (pub/sub)',
          'Secrets Manager: secure rotation and API key injection'
        ]
      }
    ],
    interviewQuestions: [
      {
        question: "Explain the difference between a Deployment and a StatefulSet in Kubernetes.",
        answer: "`Deployments` are designed for stateless applications. Pods are interchangeable, have random generated names, and use shared disks. `StatefulSets` are designed for stateful applications (like databases). Pods have unique, persistent network identifiers (e.g., pod-0, pod-1), start/stop in sequential order, and have dedicated Persistent Volumes attached."
      },
      {
        question: "What is the purpose of the Terraform State file and how do you secure it?",
        answer: "The state file (`terraform.tfstate`) maps real-world infrastructure resources to your configuration variables, keeping track of metadata. It must be secured because it can contain sensitive values (like database passwords in plain text). Secure it by storing it in a remote backend (such as encrypted S3 buckets) and enabling state locking using DynamoDB to prevent concurrent writes."
      },
      {
        question: "Explain AWS VPC Subnets and the difference between Public and Private subnets.",
        answer: "A VPC (Virtual Private Cloud) is logically isolated network space in AWS. Subnets partition the IP range. A `Public Subnet` has a route in its Route Table directed to an Internet Gateway (IGW), allowing resources inside to be accessed directly from the web. A `Private Subnet` does not have a route to an IGW. Resources in private subnets use a NAT Gateway located in a public subnet to fetch web assets securely."
      }
    ],
    miniProjects: [
      { title: "GitHub Actions Build Pipeline", description: "Write a GitHub Actions yaml workflow that triggers on main push, builds a container, runs linter rules, and pushes to a container registry." },
      { title: "Terraform AWS S3 Bucket Host", description: "Create Terraform files that provision an S3 bucket configured for static web hosting, setting access policy files." }
    ],
    majorProject: {
      title: "Highly Available AWS Infrastructure Deployment",
      description: "Design and implement a complete AWS cloud architecture using Terraform, incorporating a VPC, public/private subnets, Auto-Scaling EC2 instances, RDS databases, SQS decouplers, Secrets Manager, and Route 53 DNS routing parameters."
    },
    revisionChecklist: [
      'Compare Kubernetes ClusterIP vs NodePort vs LoadBalancer service types',
      'Explain when to use SQS (queuing) vs SNS (broadcast)',
      'Explain the significance of AWS IAM Roles vs Users',
      'Write a simple Terraform file configuring an EC2 resource',
      'Design a basic GitHub Actions workflow file with a test step'
    ]
  }
];
