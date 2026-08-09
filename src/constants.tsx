import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Wrench, Cloud, Plane, Boxes, Workflow, Camera } from "lucide-react";
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
    title: "AeroStream Flight Analytics",
    description: "End-to-end data platform analysing 38.3M US flights across 72 months of Bureau of Transportation Statistics data. A Medallion warehouse runs dlt to MinIO to ClickHouse to dbt to Superset, orchestrated by 12 Airflow DAGs and catalogued with OpenMetadata. Runs entirely on docker compose.",
    tech: ["dlt", "ClickHouse", "dbt", "Airflow", "Superset"],
    link: "https://github.com/TungNamNguyen/aerostream-flight-analytics",
    icon: <Plane size={24} />
  },
  {
    title: "Data Engineering Templates",
    description: "Ready-to-run Docker Compose templates for a dozen data tools — Airflow, ClickHouse, dbt, Superset, MinIO, Metabase, Doris, NiFi and more — each pinned to a known-good version so a new stack can be stood up in one command.",
    tech: ["Docker Compose", "Airflow", "ClickHouse", "dbt", "MinIO"],
    link: "https://github.com/TungNamNguyen/data-engineering-templates",
    icon: <Boxes size={24} />
  },
  {
    title: "GitLab API Data Pipeline",
    description: "Command-line extractor that pulls project data from the GitLab REST API into a relational store via SQLAlchemy, with OpenAPI-generated clients, full CRUD over the local dataset, structured logging and credentials kept out of source.",
    tech: ["Python", "SQLAlchemy", "OpenAPI", "SQLite"],
    link: "https://github.com/TungNamNguyen/gitlab-api-data-pipeline",
    icon: <Workflow size={24} />
  },
  {
    title: "Fall Detection System",
    description: "Real-time fall detection from a standard RGB camera, built as a university industry project. Compares three pose-estimation backends — YOLOv8, MediaPipe and MoveNet — behind a Tkinter interface with configurable confidence thresholds, keypoint logging and audible alerts.",
    tech: ["Python", "YOLOv8", "MediaPipe", "MoveNet"],
    link: "https://github.com/TungNamNguyen/fall-detection-system",
    icon: <Camera size={24} />
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
