export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface CertificationItem {
  name: string;
  shortName: string;
  issuer: string;
  issued: string;
  verifyUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export const PROFILE = {
  name: "Edwan Zainur Amin",
  role: "DevOps & Cloud Engineer",
  tagline: "DevOps engineer building reliable infrastructure for production systems.",
  location: "Indonesia (Remote · UTC+7)",
  email: "edwanzainur1@gmail.com",
  github: "https://github.com/edwanannnn",
  githubHandle: "github.com/edwanannnn",
  linkedin: "https://linkedin.com/in/edwan-z-834b97397",
  linkedinHandle: "linkedin.com/in/edwan-z-834b97397",
  resumePath: "/Edwan_Zainur_Amin_DevOps_Resume.pdf",
  summary:
    "DevOps & Cloud Engineer managing production containerized environments, CI/CD automation, and multi-node Linux infrastructure across AWS, DigitalOcean, and Hetzner. Focused on zero-downtime deployments, fleet-wide observability, and practical security hardening. Bilingual in English and Indonesian.",
  education: {
    institution: "Universitas Bahaudin Mudhary",
    degree: "B.Sc. in Informatics Engineering",
    meta: "GPA 4.00 / 4.00 · Expected 2026",
  },
} as const;

export const STATS: StatItem[] = [
  { value: "2+ yrs", label: "Hands-on cloud & Linux ops" },
  { value: "30+", label: "Production & bare-metal servers audited" },
  { value: "99.9%", label: "Target uptime & telemetry coverage" },
  { value: "5", label: "Verified security & AI certifications" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Shoppias",
    role: "DevOps Engineer",
    period: "Jun 2026 – Present",
    location: "Remote",
    bullets: [
      "Design and maintain CI/CD deployment routines across production microservices, eliminating deployment downtime.",
      "Orchestrate Docker containers and Ubuntu Linux hosts, keeping environment parity across staging and production.",
      "Implemented real-time observability with Prometheus and Grafana for node health monitoring and automated alerting.",
      "Conducted fleet-wide audits across 30+ bare-metal and cloud servers (Hetzner, AWS) to optimize resource allocation and cost.",
    ],
  },
  {
    company: "PT Busanid Techno Asia",
    role: "DevOps Engineer",
    period: "Aug 2026 – Present",
    location: "Part-time · Remote",
    bullets: [
      "Manage and maintain cloud infrastructure and Linux server environments for high availability and steady performance.",
      "Implement automated health checks, monitoring, and alerting across production services.",
      "Collaborate with engineering teams on Docker containerization, deployment pipelines, and system reliability.",
    ],
  },
  {
    company: "Mercor",
    role: "DevOps & Infrastructure AI Trainer (Contract)",
    period: "Oct 2026 – Nov 2026",
    location: "Remote",
    bullets: [
      "Authored and evaluated high-tier production DevOps, cloud infrastructure, and incident debugging tasks for frontier AI models.",
      "Designed complex Linux, container orchestration, and CI/CD architecture benchmarks to improve model technical accuracy.",
    ],
  },
  {
    company: "Outlier AI",
    role: "AI Model Trainer & Technical Evaluator (Contract)",
    period: "Apr 2026 – May 2026",
    location: "Remote",
    bullets: [
      "Evaluated and benchmarked frontier LLM outputs for code generation, architectural logic, and factual accuracy.",
      "Authored rigorous programming test prompts in English and Indonesian for multi-turn technical workflows.",
    ],
  },
  {
    company: "Freelance Consulting",
    role: "Full-Stack & Cloud Infrastructure Developer",
    period: "Feb 2025 – Feb 2026",
    location: "Remote",
    bullets: [
      "Deployed containerized web applications on Linux VPS instances behind Nginx reverse proxies with Let's Encrypt SSL.",
      "Built automation scripts and integrated AI reasoning APIs to reduce manual operational overhead for international clients.",
    ],
  },
];

export const TECH_GROUPS: TechGroup[] = [
  {
    category: "Cloud & Infra",
    items: ["AWS (EC2, S3, VPC, IAM)", "DigitalOcean", "Hetzner", "Ubuntu / Debian", "Terraform", "Ansible"],
  },
  {
    category: "Containers & CI/CD",
    items: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "Trivy"],
  },
  {
    category: "Observability & Web",
    items: ["Grafana", "Prometheus", "Node Exporter", "Nginx", "Let's Encrypt SSL", "PostgreSQL"],
  },
  {
    category: "Security & Languages",
    items: ["UFW & Fail2ban", "SSH Hardening", "OWASP LLM Top 10", "Python", "Bash", "C / C++"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "AWS Production Infra (Terraform + Ansible)",
    description:
      "Provisions AWS VPC, EC2 (IMDSv2), encrypted S3, and least-privilege IAM via Terraform; automates SSH/UFW/Fail2ban hardening, Nginx Let's Encrypt SSL, and verified PostgreSQL backups via Ansible.",
    tags: ["Terraform", "Ansible", "AWS", "Nginx", "PostgreSQL"],
    githubUrl: "https://github.com/edwanannnn/terraform-ansible-prod-infra",
  },
  {
    title: "Automated CI/CD Pipeline & DevSecOps",
    description:
      "4-stage GitHub Actions pipeline with Flake8 linting, Pytest, Trivy container vulnerability scanning, and zero-downtime SSH rolling deploys (-65% build time via GHCR caching).",
    tags: ["GitHub Actions", "Docker", "Trivy", "Linux"],
    githubUrl: "https://github.com/edwanannnn/automated-cicd-pipeline",
  },
  {
    title: "Enterprise Monitoring & Telemetry",
    description:
      "Full-stack observability setup using Prometheus, Grafana, and Node Exporter with automated metric scraping, alert thresholds, and 34.9+ weeks tracked uptime.",
    tags: ["Prometheus", "Grafana", "Node Exporter", "Docker"],
    githubUrl: "https://github.com/edwanannnn/grafana-monitoring",
  },
  {
    title: "Linux Health & GPU Telemetry Bot",
    description:
      "Asynchronous Python daemon tracking CPU, RAM, disk, and NVIDIA RTX A6000 GPU metrics with instant Slack and Telegram webhook alerts for production nodes.",
    tags: ["Python", "Docker", "Webhooks", "Telemetry"],
    githubUrl: "https://github.com/edwanannnn/health-bot",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Certified LLM Security Professional",
    shortName: "CLLMSP",
    issuer: "Red Team Leaders",
    issued: "Nov 2026",
    verifyUrl: "https://courses.redteamleaders.com/exam-completion/91a2aac9aacdd48f",
  },
  {
    name: "Certified Network Security Fundamentals",
    shortName: "CNSF",
    issuer: "Red Team Leaders",
    issued: "Nov 2026",
    verifyUrl: "https://courses.redteamleaders.com/exam-completion/9078b6aade8d614c",
  },
  {
    name: "Certified Security Code Review Beginners",
    shortName: "CSCRB",
    issuer: "Red Team Leaders",
    issued: "Nov 2026",
    verifyUrl: "https://courses.redteamleaders.com/exam-completion/0e6e6d5fcf07350d",
  },
  {
    name: "Claude Code 101",
    shortName: "CC101",
    issuer: "Anthropic Academy",
    issued: "Sep 2026",
    verifyUrl: "https://academy.claude.com/verify/6dff46d3a36c1f0f6f7b4102d80c0441",
  },
  {
    name: "AI Fluency Certified",
    shortName: "AIFC",
    issuer: "Anthropic Academy",
    issued: "Sep 2026",
    verifyUrl: "https://academy.claude.com/verify/8fb82b79a6bf01f4968be7b7da364faa",
  },
];
