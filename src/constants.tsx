import { Terminal, Database, GitBranch, LineChart, Target, Zap, Users, Brain, Layers, BarChart3, Wrench, Cloud } from "lucide-react";

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    icon: <Terminal size={20} />,
    skills: ["SQL", "Python", "Bash"]
  },
  {
    name: "Data Platforms & Storage",
    icon: <Database size={20} />,
    skills: ["Postgres", "MySQL", "Microsoft SQL Server", "Snowflake", "Databricks", "Microsoft Fabric"]
  },
  {
    name: "BI & Analytic",
    icon: <LineChart size={20} />,
    skills: ["Power BI", "Tableau", "Apache Superset", "Metabase"]
  },
  {
    name: "Data Engineering",
    icon: <GitBranch size={20} />,
    skills: ["dbt", "Spark", "Airflow"]
  },
  {
    name: "Devops & Cloud",
    icon: <Cloud size={20} />,
    skills: ["Git", "Docker", "AWS", "Azure", "Terraform"]
  },
  {
    name: "Tools & Collaboration",
    icon: <Wrench size={20} />,
    skills: ["Jira", "Confluence", "Trello", "Teams", "Slack"]
  }
];

export const COMPETENCIES = [
  {
    title: "Data Architecture",
    description: "Designing scalable, resilient, and cost-effective data warehouses and data lakes.",
    icon: <Layers size={24} />
  },
  {
    title: "ETL/ELT Pipelines",
    description: "Building automated, reliable data pipelines to extract, transform, and load massive datasets.",
    icon: <Zap size={24} />
  },
  {
    title: "Business Intelligence",
    description: "Translating complex data into intuitive dashboards and actionable business metrics.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Machine Learning",
    description: "Developing predictive models and deploying them into production environments.",
    icon: <Brain size={24} />
  },
  {
    title: "Stakeholder Management",
    description: "Bridging the gap between technical teams and business leaders to align data strategy.",
    icon: <Users size={24} />
  },
  {
    title: "Problem Solving",
    description: "Tackling ambiguous data challenges and finding optimized, innovative solutions.",
    icon: <Target size={24} />
  }
];

export const PROJECTS = [
  {
    title: "E-commerce Data Pipeline",
    description: "Architected an end-to-end ELT pipeline moving 50GB+ of daily transaction data from Postgres to Snowflake using Fivetran and dbt. Reduced data latency from 24 hours to 15 minutes.",
    tech: ["Snowflake", "dbt", "Fivetran", "Airflow"],
    link: "#"
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn with 85% accuracy. Deployed via a FastAPI microservice and integrated predictions into the CRM for the retention team.",
    tech: ["Python", "scikit-learn", "FastAPI", "Docker"],
    link: "#"
  },
  {
    title: "Marketing Analytics Dashboard",
    description: "Built a comprehensive Looker dashboard consolidating marketing spend across 5 channels. Created underlying BigQuery data marts, reducing reporting time by 15 hours/week.",
    tech: ["Looker", "BigQuery", "SQL"],
    link: "#"
  },
  {
    title: "Real-time Event Streaming",
    description: "Implemented a Kafka-based streaming architecture to process clickstream data in real-time, enabling live personalization on the e-commerce storefront.",
    tech: ["Kafka", "Spark Streaming", "AWS", "Python"],
    link: "#"
  }
];

export const EXPERIENCE = [
  {
    role: "Analytics Engineer",
    company: "Tech Growth Co",
    location: "San Francisco, CA",
    period: "Mar 2022 - Present",
    achievements: [
      "Migrated legacy stored procedures to dbt, improving model run times by 40% and enabling version control.",
      "Established data quality tests using dbt expectations, reducing downstream reporting errors by 90%.",
      "Collaborated with product teams to define tracking plans and event schemas for new feature launches."
    ]
  },
  {
    role: "Data Analyst",
    company: "Retail Insights",
    location: "New York, NY",
    period: "Jun 2020 - Feb 2022",
    achievements: [
      "Created automated Tableau reports for the executive team, providing daily visibility into core KPIs.",
      "Analyzed A/B test results to optimize the checkout funnel, identifying bottlenecks and increasing conversion by 5%.",
      "Wrote complex SQL queries to extract ad-hoc insights for marketing campaigns, driving a 15% increase in ROI."
    ]
  },
  {
    role: "Data Engineering Intern",
    company: "DataFlow Inc",
    location: "Austin, TX",
    period: "May 2019 - Aug 2020",
    achievements: [
      "Assisted in building Python scripts to scrape and clean public datasets for market research.",
      "Maintained and monitored daily cron jobs for data extraction.",
      "Documented data dictionaries and pipeline architectures."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Technology",
    location: "Seattle, WA",
    period: "Sep 2018 - Jun 2020",
    details: [
      "Specialized in Machine Learning and Big Data Analytics.",
      "Thesis: Predictive Modeling for High-Frequency Trading."
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    location: "Chicago, IL",
    period: "Sep 2014 - May 2018",
    details: [
      "Minor in Mathematics.",
      "Graduated with Honors (Cum Laude)."
    ]
  },
  {
    degree: "High School Diploma",
    school: "Hanoi Amsterdam High School for the Gifted",
    location: "Hanoi, Vietnam",
    period: "Sep 2011 - May 2014",
    details: [
      "Major in Mathematics.",
      "Top 1% of the national entrance exam."
    ]
  }
];
