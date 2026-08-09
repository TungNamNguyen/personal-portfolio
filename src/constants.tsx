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
  /**
   * Two sentences for the hero. Deliberately free of project specifics — the
   * Projects section carries those — and it never repeats the role or location
   * printed directly above it.
   */
  bio: "Pipelines that land the data, models that make it trustworthy, dashboards that get it used. I work the full span of data engineering, analytics engineering and BI, not one slice.",
  /** Short availability line. Set to "" to hide the badge. */
  openTo: "",
  /** Drop a PDF at public/cv.pdf and set this to "/cv.pdf" to show the download button. */
  cvUrl: ""
};

/** Order must match the section order rendered in App.tsx. */
export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "recommendations", label: "Recommendations" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" }
];

/**
 * Quoted verbatim from LinkedIn — someone else's words, so the text is never
 * edited. `paragraphs` preserves the original breaks.
 */
export const RECOMMENDATIONS: {
  paragraphs: string[];
  name: string;
  title: string;
  company: string;
  url?: string;
  relationship: string;
  date: string;
}[] = [
  {
    paragraphs: [
      "I had the pleasure of working with Tung on a Data Analysis internal project last year, and I can confidently say that he is a highly capable and dedicated team player. Throughout the project, Tung demonstrated strong analytical skills.",
      "He worked effectively with the team, collaborating seamlessly across different functions and ensuring that data insights were both accurate and actionable. His ability to communicate findings in a clear and concise manner made a significant impact on our data governance framework.",
      "Beyond his analytic skills, Tung is reliable, adaptable, and always willing to support his colleagues. His positive attitude and commitment to excellence made him a valuable asset to the team.",
      "I highly recommend Tung for any role that requires strong data analysis, teamwork, and commitment. He would be an excellent addition to any team."
    ],
    name: "Fan Zhang",
    title: "General Manager, Digital Centre of Excellence",
    company: "Prompcorp",
    url: "https://www.linkedin.com/in/fzhan/",
    relationship: "Managed Tung directly",
    date: "February 2025"
  }
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
    logo: "/icons/vpbank.png",
    url: "https://www.vpbank.com.vn",
    meta: "Full-time \u00b7 On-site",
    location: "Hanoi Capital Region, Vietnam",
    period: "Dec 2025 \u2014 Present",
    current: true,
    description: "Loan book and portfolio credit quality reporting in Power BI, backed by SQL stored procedures in Redshift written to be idempotent and safe to rerun."
  },
  {
    title: "Data Engineer",
    subtitle: "CMC Global",
    logo: "/icons/cmcglobal.png",
    url: "https://cmcglobal.com.vn",
    meta: "Full-time \u00b7 On-site",
    location: "Hanoi Capital Region, Vietnam",
    period: "Jul 2025 \u2014 Dec 2025",
    description: "Spark transformation jobs on a MinIO and Delta Lake lakehouse for a global manufacturing client, served through Trino and Power BI."
  },
  {
    title: "Data Engineer",
    subtitle: "Prompcorp",
    // Prompcorp's only mark is a 2.69:1 wordmark with no symbol; brand palette
    // sampled from their own logo.
    monogram: { label: "P", bg: "#231F20", fg: "#F89520" },
    url: "https://www.prompcorp.com.au",
    meta: "Internship \u00b7 On-site",
    location: "North Melbourne, VIC, Australia",
    period: "Mar 2024 \u2014 May 2024",
    description: "Python, Spark and Airflow ETL from the HubSpot API into a MariaDB single source of truth, feeding the Superset dashboards built on top of it."
  },
  {
    title: "Data Engineer",
    subtitle: "NaviWorld Australia",
    logo: "/icons/naviworld.png",
    url: "https://naviworld.com.au",
    meta: "Internship \u00b7 Hybrid",
    location: "Melbourne, VIC, Australia",
    period: "Jan 2024 \u2014 Mar 2024",
    description: "ELT from Microsoft Business Central into Fabric Synapse, with custom DAX measures powering the Power BI reporting layer above it."
  }
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: "Bachelor of Data Science",
    subtitle: "Swinburne University of Technology",
    logo: "/icons/swinburne.svg",
    logoFill: true,
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
    logo: "/icons/hnams.png",
    logoFill: true,
    url: "https://hn-ams.edu.vn/",
    location: "Hanoi, Vietnam",
    period: "Sep 2018 \u2014 May 2021",
    points: [
      "Graduated in the top 5% of the cohort \u2014 GPA 9.6 / 10.",
      "A Levels: Mathematics (A*), Chemistry (A*), Business (B)."
    ]
  }
];
