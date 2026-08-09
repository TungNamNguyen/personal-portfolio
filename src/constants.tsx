import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Wrench, Cloud, Plane, Boxes, Workflow, Camera } from "lucide-react";
import type { TimelineEntry } from "./components/TimelineSection";

/**
 * Contact and profile links used across the site.
 * Leave a value as an empty string to hide the corresponding link/button.
 */
export const SITE = {
  name: "Tung Nguyen",
  role: "Business Intelligence Engineer",
  company: "VPBank",
  location: "Hanoi Capital Region, Vietnam",
  email: "nguyennamtung123@gmail.com",
  github: "https://github.com/TungNamNguyen",
  linkedin: "https://www.linkedin.com/in/nguyennamtung2003/",
  /** Drop a PDF at public/cv.pdf and set this to "/cv.pdf" to show the download button. */
  cvUrl: ""
};

/**
 * About copy, one string per paragraph. Deliberately free of project specifics
 * — the Projects section already carries those, and repeating them here would
 * date this copy every time the project list changes.
 */
export const ABOUT = [
  "I'm a Business Intelligence Engineer at VPBank, based in Hanoi. My work sits where raw data turns into something a business can act on — modelling it, testing it, and making sure the number on a dashboard means what people think it means.",
  "That middle layer is what I care about most, and it pulls in both directions: upstream into ingestion and orchestration, downstream into how a metric actually gets read. It is why I am as comfortable in a transformation layer as I am in a reporting one.",
  "Outside work I build data platforms end to end, mostly to stay honest about what the layers underneath a dashboard really cost to run. I'm open to Business Intelligence, Analytics Engineering and Data Engineering roles."
];

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
    description: "38.3M US flights through a Medallion warehouse — dlt, ClickHouse, dbt, Superset, 12 Airflow DAGs, one docker compose. Departure time shifts delay odds ~5x, more than the airline you pick.",
    tech: ["dlt", "ClickHouse", "dbt", "Airflow", "Superset"],
    link: "https://github.com/TungNamNguyen/aerostream-flight-analytics",
    icon: <Plane size={24} />
  },
  {
    title: "Data Engineering Templates",
    description: "Docker Compose templates for a dozen data tools — Airflow, ClickHouse, dbt, Superset, MinIO and more — each version-pinned so a stack comes up in one command.",
    tech: ["Docker Compose", "Airflow", "ClickHouse", "dbt", "MinIO"],
    link: "https://github.com/TungNamNguyen/data-engineering-templates",
    icon: <Boxes size={24} />
  },
  {
    title: "GitLab API Data Pipeline",
    description: "CLI that pulls GitLab project data into a SQLAlchemy-backed store, with OpenAPI-generated clients, full CRUD and credentials kept out of source.",
    tech: ["Python", "SQLAlchemy", "OpenAPI", "SQLite"],
    link: "https://github.com/TungNamNguyen/gitlab-api-data-pipeline",
    icon: <Workflow size={24} />
  },
  {
    title: "Fall Detection System",
    description: "Real-time fall detection from an RGB camera. Benchmarks YOLOv8, MediaPipe and MoveNet behind a Tkinter GUI with keypoint logging and audible alerts. University industry project.",
    tech: ["Python", "YOLOv8", "MediaPipe", "MoveNet"],
    link: "https://github.com/TungNamNguyen/fall-detection-system",
    icon: <Camera size={24} />
  }
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Business Intelligence Engineer",
    subtitle: "VPBank",
    url: "https://www.vpbank.com.vn",
    meta: "Full-time \u00b7 On-site",
    location: "Hanoi Capital Region, Vietnam",
    period: "Dec 2025 \u2014 Present",
    current: true
  },
  {
    title: "Data Engineer",
    subtitle: "CMC Global",
    url: "https://cmcglobal.com.vn",
    meta: "Full-time \u00b7 On-site",
    location: "Hanoi Capital Region, Vietnam",
    period: "Jul 2025 \u2014 Dec 2025"
  },
  {
    title: "Data Engineer",
    subtitle: "Prompcorp",
    url: "https://www.prompcorp.com.au",
    meta: "Internship \u00b7 On-site",
    location: "North Melbourne, VIC, Australia",
    period: "Mar 2024 \u2014 May 2024",
    description: "Built ETL pipelines in Python, SQL, Spark and Airflow over the HubSpot API, cutting data processing time by 20%."
  },
  {
    title: "Data Engineer",
    subtitle: "NaviWorld Australia",
    url: "https://naviworld.com.au",
    meta: "Internship \u00b7 Hybrid",
    location: "Melbourne, VIC, Australia",
    period: "Jan 2024 \u2014 Mar 2024",
    description: "Designed ELT pipelines integrating 10,000+ records from Microsoft Business Central into a Microsoft Fabric warehouse."
  }
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: "Bachelor of Data Science",
    subtitle: "Swinburne University of Technology",
    url: "https://www.swinburne.edu.au",
    location: "Melbourne, VIC, Australia",
    period: "Feb 2022 \u2014 Dec 2024",
    points: [
      "Graduated with High Distinction \u2014 GPA 3.542 / 4.0.",
      "Swinburne International Excellence Scholarship: 75% tuition, awarded to the top 5% of students."
    ]
  },
  {
    title: "High School Diploma",
    subtitle: "Hanoi-Amsterdam High School for the Gifted",
    url: "https://hn-ams.edu.vn/",
    location: "Hanoi, Vietnam",
    period: "Sep 2018 \u2014 May 2021",
    points: [
      "Graduated in the top 5% of the cohort \u2014 GPA 9.6 / 10.",
      "A Levels: Mathematics (A*), Chemistry (A*), Business (B)."
    ]
  }
];
