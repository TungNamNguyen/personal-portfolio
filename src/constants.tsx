import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Zap, Brain, BarChart3, Wrench, Cloud, Radio } from "lucide-react";
import type { TimelineEntry } from "./components/TimelineSection";

/**
 * Contact and profile links used across the site.
 * Leave a value as an empty string to hide the corresponding link/button.
 */
export const SITE = {
  name: "Tung Nguyen",
  email: "nguyennamtung123@gmail.com",
  github: "https://github.com/TungNamNguyen",
  linkedin: "https://www.linkedin.com/in/nguyennamtung2003/",
  /** Drop a PDF at public/cv.pdf and set this to "/cv.pdf" to show the download button. */
  cvUrl: ""
};

/** Order must match the section order rendered in App.tsx. */
export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" }
];

export const SKILL_CATEGORIES: { name: string; icon: ReactNode; skills: string[] }[] = [
  {
    name: "Languages",
    icon: <Terminal size={20} />,
    skills: ["SQL", "Python", "Bash"]
  },
  {
    name: "Data Engineering",
    icon: <GitBranch size={20} />,
    skills: ["dbt", "dlt", "Spark", "Airflow"]
  },
  {
    name: "BI & Analytic",
    icon: <LineChart size={20} />,
    skills: ["Power BI", "Tableau", "Superset", "Metabase"]
  },
  {
    name: "Data Platforms & Storage",
    icon: <Database size={20} />,
    skills: ["Postgres", "MySQL", "SQL Server", "Snowflake", "Databricks", "Fabric"]
  },
  {
    name: "Devops & Cloud",
    icon: <Cloud size={20} />,
    skills: ["Git", "Docker", "AWS", "Azure", "Terraform"]
  },
  {
    name: "Tools & Collaboration",
    icon: <Wrench size={20} />,
    skills: ["DBeaver", "Jira", "Confluence", "Trello", "Teams", "Slack"]
  }
];

/** `link` may be an empty string — the card then renders without an external-link affordance. */
export const PROJECTS: { title: string; description: string; tech: string[]; link: string; icon: ReactNode }[] = [
  {
    title: "E-commerce Data Pipeline",
    description: "Architected an end-to-end ELT pipeline moving 50GB+ of daily transaction data from Postgres to Snowflake using Fivetran and dbt. Reduced data latency from 24 hours to 15 minutes.",
    tech: ["Snowflake", "dbt", "Fivetran", "Airflow"],
    link: "",
    icon: <Zap size={24} />
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn with 85% accuracy. Deployed via a FastAPI microservice and integrated predictions into the CRM for the retention team.",
    tech: ["Python", "scikit-learn", "FastAPI", "Docker"],
    link: "",
    icon: <Brain size={24} />
  },
  {
    title: "Marketing Analytics Dashboard",
    description: "Built a comprehensive Looker dashboard consolidating marketing spend across 5 channels. Created underlying BigQuery data marts, reducing reporting time by 15 hours/week.",
    tech: ["Looker", "BigQuery", "SQL"],
    link: "",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Real-time Event Streaming",
    description: "Implemented a Kafka-based streaming architecture to process clickstream data in real-time, enabling live personalization on the e-commerce storefront.",
    tech: ["Kafka", "Spark Streaming", "AWS", "Python"],
    link: "",
    icon: <Radio size={24} />
  }
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Analytics Engineer",
    subtitle: "Tech Growth Co",
    location: "San Francisco, CA",
    period: "Mar 2022 - Present",
    points: [
      "Migrated legacy stored procedures to dbt, improving model run times by 40% and enabling version control.",
      "Established data quality tests using dbt expectations, reducing downstream reporting errors by 90%.",
      "Collaborated with product teams to define tracking plans and event schemas for new feature launches."
    ]
  },
  {
    title: "Data Analyst",
    subtitle: "Retail Insights",
    location: "New York, NY",
    period: "Jun 2020 - Feb 2022",
    points: [
      "Created automated Tableau reports for the executive team, providing daily visibility into core KPIs.",
      "Analyzed A/B test results to optimize the checkout funnel, identifying bottlenecks and increasing conversion by 5%.",
      "Wrote complex SQL queries to extract ad-hoc insights for marketing campaigns, driving a 15% increase in ROI."
    ]
  },
  {
    title: "Data Engineering Intern",
    subtitle: "DataFlow Inc",
    location: "Austin, TX",
    period: "May 2019 - Aug 2020",
    points: [
      "Assisted in building Python scripts to scrape and clean public datasets for market research.",
      "Maintained and monitored daily cron jobs for data extraction.",
      "Documented data dictionaries and pipeline architectures."
    ]
  }
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: "Master of Science in Data Science",
    subtitle: "University of Technology",
    location: "Seattle, WA",
    period: "Sep 2018 - Jun 2020",
    points: [
      "Specialized in Machine Learning and Big Data Analytics.",
      "Thesis: Predictive Modeling for High-Frequency Trading."
    ]
  },
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "State University",
    location: "Chicago, IL",
    period: "Sep 2014 - May 2018",
    points: [
      "Minor in Mathematics.",
      "Graduated with Honors (Cum Laude)."
    ]
  },
  {
    title: "High School Diploma",
    subtitle: "Hanoi Amsterdam High School for the Gifted",
    location: "Hanoi, Vietnam",
    period: "Sep 2011 - May 2014",
    points: [
      "Major in Mathematics.",
      "Top 1% of the national entrance exam."
    ]
  }
];
