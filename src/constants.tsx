import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Wrench, Cloud, Layers } from "lucide-react";
/*
  Company, school and issuer marks. The SVG ones are imported through `?react`
  so they ride inside the bundle as markup instead of being fetched as
  `image/svg+xml` files — see the note in vite.config.ts. The remaining marks
  are only available as raster and stay in public/icons as plain paths.
*/
import CmcGlobalLogo from "./assets/icons/cmcglobal.svg?react";
import DataCampLogo from "./assets/icons/datacamp.svg?react";
import HackerRankLogo from "./assets/icons/hackerrank.svg?react";
import SwinburneLogo from "./assets/icons/swinburne.svg?react";
import VpbankLogo from "./assets/icons/vpbank.svg?react";
import type { LogoSource } from "./components/Logo";
import type { TimelineEntry } from "./components/TimelineSection";
import type { CoverName } from "./projectCovers";
import type { Localized, Text } from "./i18n";
import { UI } from "./i18n";

/**
 * Contact and profile links used across the site.
 * Leave a value as an empty string to hide the corresponding link/button.
 *
 * Anything a reader sees is a `Text`: a plain string where both languages say
 * the same thing, an `{ en, vi }` pair where they do not. The Vietnamese side
 * is written as Vietnamese rather than mapped word for word off the English —
 * technical vocabulary the field actually uses in English stays in English.
 */
export const SITE = {
  name: "Tung Nguyen",
  role: { en: "Business Intelligence Engineer", vi: "Kỹ sư Business Intelligence" },
  company: "VPBank",
  // "Hanoi Capital Region" is how LinkedIn names the metro area; in Vietnamese
  // nobody says that, they say Hà Nội.
  location: { en: "Hanoi Capital Region, Vietnam", vi: "Hà Nội, Việt Nam" },
  email: "nguyennamtung123@gmail.com",
  github: "https://github.com/TungNamNguyen",
  linkedin: "https://www.linkedin.com/in/nguyennamtung2003/",
  tableau: "https://public.tableau.com/app/profile/tung.nguyen.nam/vizzes",
  /**
   * The About section, which is the hero. One sentence: where the work sits —
   * between the source systems and the decisions — then the span it covers.
   * Written as a tagline rather than a paragraph, and deliberately short on
   * adjectives, so every slot carries a noun a reader could check.
   */
  bio: {
    en: "Building the data layer between source systems and business decisions — from data pipelines and analytics models to BI.",
    vi: "Dựng tầng dữ liệu nằm giữa hệ thống nguồn và quyết định kinh doanh — từ data pipeline, model phân tích cho tới BI."
  },
  /** Short availability line. Set both languages to "" to hide the badge. */
  openTo: { en: "", vi: "" },
  /**
   * Drop a PDF at public/resume.pdf and set this to "/resume.pdf" to reveal the
   * hero button and the header link. Both stay hidden while it is empty, so the
   * site never ships a dead download.
   */
  resumeUrl: "/TungNguyen_Resume.pdf"
};

/**
 * Order must match the section order rendered in App.tsx. Labels come from the
 * shared UI dictionary, which is also what the section headings read from.
 */
export const NAV_ITEMS: { id: string; label: Localized }[] = [
  { id: "about", label: UI.about },
  { id: "experience", label: UI.experience },
  { id: "projects", label: UI.projects },
  { id: "skills", label: UI.skills },
  { id: "education", label: UI.education },
  { id: "recommendations", label: UI.recommendations },
  { id: "certifications", label: UI.certifications }
];

/**
 * The English side is quoted verbatim from LinkedIn and is never edited — it is
 * someone else's words. The Vietnamese side is a translation of it, labelled as
 * one in the UI so a reader knows they are not reading what was literally
 * written. `paragraphs` preserves the original breaks.
 */
export const RECOMMENDATIONS: {
  paragraphs: Text[];
  name: string;
  title: Text;
  company: string;
  url?: string;
  /** Portrait under public/icons. Falls back to initials when absent. */
  photo?: string;
}[] = [
  {
    paragraphs: [
      {
        en: "I had the pleasure of working with Tung on a Data Analysis internal project last year, and I can confidently say that he is a highly capable and dedicated team player. Throughout the project, Tung demonstrated strong analytical skills.",
        vi: "Năm ngoái tôi có dịp làm việc cùng Tung trong một dự án phân tích dữ liệu nội bộ, và tôi có thể khẳng định đây là một người vừa giỏi chuyên môn vừa hết mình với việc chung. Suốt dự án, Tung luôn cho thấy năng lực phân tích rất vững."
      },
      {
        en: "He worked effectively with the team, collaborating seamlessly across different functions and ensuring that data insights were both accurate and actionable. His ability to communicate findings in a clear and concise manner made a significant impact on our data governance framework.",
        vi: "Tung phối hợp ăn ý với cả nhóm, làm việc trơn tru với nhiều bộ phận khác nhau, và luôn đảm bảo những gì rút ra từ dữ liệu vừa chính xác vừa dùng được ngay. Cách Tung trình bày kết quả — gọn và rõ — đã tạo ra khác biệt đáng kể cho khung quản trị dữ liệu của chúng tôi."
      },
      {
        en: "Beyond his analytic skills, Tung is reliable, adaptable, and always willing to support his colleagues. His positive attitude and commitment to excellence made him a valuable asset to the team.",
        vi: "Ngoài chuyên môn phân tích, Tung là người đáng tin cậy, thích nghi nhanh và luôn sẵn sàng đỡ việc cho đồng nghiệp. Thái độ tích cực cùng tinh thần làm gì cũng làm tới nơi khiến Tung trở thành một thành viên quý của nhóm."
      },
      {
        en: "I highly recommend Tung for any role that requires strong data analysis, teamwork, and commitment. He would be an excellent addition to any team.",
        vi: "Tôi thực sự tin tưởng giới thiệu Tung cho bất kỳ vị trí nào cần năng lực phân tích dữ liệu, khả năng làm việc nhóm và sự cam kết. Đội ngũ nào có Tung cũng sẽ mạnh lên."
      }
    ],
    name: "Fan Zhang",
    title: "General Manager, Digital Centre of Excellence",
    company: "Prompcorp",
    url: "https://www.linkedin.com/in/fzhan/",
    photo: "/icons/fan-zhang.jpeg"
  }
];

/**
 * Skill names themselves are product names — they key TECH_ICONS and never
 * translate.
 *
 * Storage is split rather than kept as one bucket of eight, along the line a
 * data engineer would draw anyway: the databases you serve from, the warehouses
 * you analyse in. Two named categories say more than one merged one.
 *
 * Order is read top to bottom now that Skills renders as a list, so it runs
 * most central to least — what he writes in, what he builds with, what he
 * presents in, then the stores, the platform and the everyday tools.
 */
export const SKILL_CATEGORIES: { name: Text; icon: ReactNode; skills: string[] }[] = [
  {
    name: { en: "Languages", vi: "Ngôn ngữ" },
    icon: <Terminal size={20} />,
    skills: ["SQL", "Python", "Bash"]
  },
  {
    name: { en: "Data Engineering", vi: "Kỹ thuật dữ liệu" },
    icon: <GitBranch size={20} />,
    skills: ["dbt", "dlt", "Spark", "Airflow", "NiFi"]
  },
  {
    name: { en: "BI & Analytics", vi: "BI & Phân tích" },
    icon: <LineChart size={20} />,
    skills: ["Power BI", "Tableau", "Superset", "Metabase"]
  },
  {
    name: { en: "Databases", vi: "Cơ sở dữ liệu" },
    icon: <Database size={20} />,
    skills: ["Postgres", "MySQL", "SQL Server", "SQLite"]
  },
  {
    // Both halves stay in English: nobody in the field says "kho dữ liệu" for
    // these products, they say warehouse and lakehouse.
    name: "Warehouse & Lakehouse",
    icon: <Layers size={20} />,
    skills: ["ClickHouse", "Snowflake", "Redshift", "Databricks", "Fabric"]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud size={20} />,
    skills: ["Git", "Docker", "AWS", "Azure", "Terraform"]
  },
  {
    name: { en: "Tools & Collaboration", vi: "Công cụ & Làm việc nhóm" },
    icon: <Wrench size={20} />,
    skills: ["DBeaver", "Jira", "Confluence", "Trello", "Teams", "Slack"]
  }
];

/**
 * The kinds of work the projects fall under. Keys are stable and never shown;
 * the labels are. Insertion order is the order the filter chips appear in,
 * after Featured.
 *
 * Every project carries at least one of these. Featured is a curated subset
 * rather than a category, so without a tag as well a project would be reachable
 * from no chip at all.
 */
export const PROJECT_TAGS = {
  de: { en: "Data Engineering", vi: "Data Engineering" },
  bi: { en: "BI & Data Visualization", vi: "BI & Trực quan hoá" },
  ml: { en: "ML & Computer Vision", vi: "ML & Thị giác máy" }
} satisfies Record<string, Localized>;

export type ProjectTag = keyof typeof PROJECT_TAGS;

/**
 * Titles are repository names, so they read the same either way. `image` is the
 * card's cover photo; `cover` names the drawn band that stands in when a project
 * has none, so a new entry can ship before its picture exists. Photos live in
 * public/projects — see the CREDITS file there for where each one came from.
 *
 * A project may
 * carry more than one tag — the flight warehouse is as much a dashboard as it
 * is a pipeline, and pretending otherwise would hide it from one of the two
 * filters a reader might try.
 *
 * `link` may be an empty string — the card then renders without an
 * external-link affordance.
 */
/**
 * `imageSize` is the file's own [width, height] in pixels, and must be the real
 * figures — the card crops every cover to the same band with `object-cover`, so
 * these ratios differ from each other and from what ends up on screen. Check a
 * new cover with `identify` or the file inspector rather than copying a
 * neighbour's numbers.
 */
export const PROJECTS: { title: string; description: Text; image?: string; imageSize?: [number, number]; featured?: boolean; tags: ProjectTag[]; tech: string[]; link: string; cover: CoverName }[] = [
  {
    title: "AeroStream Flight Analytics",
    description: {
      en: "Medallion warehouse over 38.3M US flights, built with dlt, ClickHouse and dbt, orchestrated by 12 Airflow DAGs and visualised in Superset.",
      vi: "Kho dữ liệu Medallion cho 38,3 triệu chuyến bay nội địa Mỹ, dựng bằng dlt, ClickHouse và dbt, điều phối bởi 12 DAG Airflow và trực quan hóa trên Superset."
    },
    image: "/projects/aerostream.webp",
    imageSize: [1376, 768],
    featured: true,
    tags: ["de", "bi"],
    tech: ["dlt", "ClickHouse", "dbt", "Airflow", "Superset"],
    link: "https://github.com/TungNamNguyen/aerostream-flight-analytics",
    cover: "flights"
  },
  {
    title: "Data Engineering Templates",
    description: {
      en: "Version-pinned Docker Compose templates for a dozen data tools including Airflow, ClickHouse, dbt, Superset and MinIO.",
      vi: "Bộ template Docker Compose ghim sẵn phiên bản cho hơn chục công cụ dữ liệu như Airflow, ClickHouse, dbt, Superset và MinIO."
    },
    image: "/projects/templates.webp",
    imageSize: [1000, 440],
    featured: true,
    tags: ["de"],
    tech: ["Docker Compose", "Airflow", "ClickHouse", "dbt", "MinIO"],
    link: "https://github.com/TungNamNguyen/data-engineering-templates",
    cover: "stack"
  },
  {
    title: "Local \u2194 Google Drive Sync",
    description: {
      en: "Self-hosted Streamlit app that compares a mounted disk against Google Drive and syncs either way, with incremental rescans.",
      vi: "Ứng dụng Streamlit tự host, đối chiếu ổ đĩa gắn ngoài với Google Drive và đồng bộ hai chiều, quét lại theo kiểu tăng dần."
    },
    image: "/projects/gdrive-sync.webp",
    imageSize: [1376, 768],
    featured: true,
    tags: ["de"],
    tech: ["Python", "Streamlit", "Docker Compose", "Google Drive"],
    link: "https://github.com/TungNamNguyen/gdrive-local-sync",
    cover: "sync"
  },
  {
    title: "GitLab API Data Pipeline",
    description: {
      en: "Python CLI that pulls GitLab project data into a SQLAlchemy store, with OpenAPI-generated clients and full CRUD.",
      vi: "CLI Python kéo dữ liệu project từ GitLab về kho SQLAlchemy, với client sinh từ OpenAPI và CRUD đầy đủ."
    },
    image: "/projects/gitlab.webp",
    imageSize: [1000, 440],
    tags: ["de"],
    tech: ["Python", "SQLAlchemy", "OpenAPI", "SQLite"],
    link: "https://github.com/TungNamNguyen/gitlab-api-data-pipeline",
    cover: "graph"
  },
  {
    title: "SparkEV Case Study",
    description: {
      en: "Five linked Tableau dashboards for an EV maker covering performance, finance, operations and forecasting.",
      vi: "Năm dashboard Tableau liên kết cho một hãng xe điện, bao quát hiệu suất, tài chính, vận hành và dự báo."
    },
    image: "/projects/sparkev.webp",
    imageSize: [1000, 440],
    featured: true,
    tags: ["bi"],
    tech: ["Tableau", "Tableau Prep", "Excel"],
    // Points at the published workbook rather than the repo: a reader can look
    // at that, where the repo would only offer a .twb file to download.
    link: "https://public.tableau.com/app/profile/tung.nguyen.nam/viz/SparkEVCaseStudyAnalysis/Performance",
    cover: "graph"
  },
  {
    title: "Databel Churn Analysis",
    description: {
      en: "Tableau dashboard analysing customer churn for a telecom, broken down by reason, contract type and state.",
      vi: "Dashboard Tableau phân tích tỷ lệ rời mạng của một nhà mạng, bóc tách theo lý do, loại hợp đồng và bang."
    },
    image: "/projects/databel.webp",
    imageSize: [1000, 440],
    tags: ["bi"],
    tech: ["Tableau", "Tableau Prep"],
    link: "https://public.tableau.com/app/profile/tung.nguyen.nam/viz/DatabelCaseStudyAnalysis-CustomerChurning/ChurnAnalysis",
    cover: "graph"
  },
  {
    title: "Fall Detection System",
    description: {
      en: "Real-time fall detection from an RGB camera, benchmarking YOLOv8, MediaPipe and MoveNet behind a Tkinter GUI.",
      vi: "Phát hiện té ngã theo thời gian thực từ camera RGB, so sánh YOLOv8, MediaPipe và MoveNet sau giao diện Tkinter."
    },
    image: "/projects/fall-detection.webp",
    imageSize: [1376, 768],
    tags: ["ml"],
    tech: ["Python", "YOLOv8", "MediaPipe", "MoveNet"],
    link: "https://github.com/TungNamNguyen/fall-detection-system",
    cover: "pose"
  },
  {
    title: "Refugee Migration Flows",
    description: {
      en: "Interactive D3 visualisation of global refugee movement, with a choropleth map, Sankey diagram and yearly heatmaps.",
      vi: "Trực quan hoá tương tác bằng D3 về dòng người tị nạn toàn cầu, gồm bản đồ choropleth, biểu đồ Sankey và heatmap theo năm."
    },
    image: "/projects/refugees.webp",
    imageSize: [1024, 612],
    tags: ["bi"],
    tech: ["JavaScript", "D3", "Tailwind"],
    link: "https://github.com/TungNamNguyen/refugees-migration-data-visualization",
    cover: "graph"
  }
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: { en: "Business Intelligence Engineer", vi: "Kỹ sư Business Intelligence" },
    subtitle: "VPBank",
    logo: VpbankLogo,
    url: "https://www.vpbank.com.vn",
    location: { en: "Hanoi Capital Region, Vietnam", vi: "Hà Nội, Việt Nam" },
    companyNote: {
      en: "One of Vietnam's largest private joint-stock commercial banks",
      vi: "Một trong những ngân hàng thương mại cổ phần tư nhân lớn nhất Việt Nam"
    },
    period: { en: "Dec 2025 — Present", vi: "12/2025 — Hiện tại" },
    current: true,
    summary: {
      en: "Owns the data and reporting behind SME lending — from credit quality and debt classification to loan portfolio performance and where in the approval process applications bottleneck.",
      vi: "Phụ trách dữ liệu và báo cáo cho mảng cho vay SME — từ chất lượng tín dụng, phân loại nợ, hiệu quả danh mục cho vay, tới việc hồ sơ đang tắc ở khâu nào trong quy trình phê duyệt."
    },
    tech: ["SQL", "SQL Server", "NiFi", "Redshift", "Power BI"]
  },
  {
    title: { en: "Data Engineer", vi: "Kỹ sư Dữ liệu" },
    subtitle: "CMC Global",
    logo: CmcGlobalLogo,
    url: "https://cmcglobal.com.vn",
    location: { en: "Hanoi Capital Region, Vietnam", vi: "Hà Nội, Việt Nam" },
    companyNote: {
      en: "Leading Vietnamese IT services and digital transformation provider",
      vi: "Nhà cung cấp dịch vụ CNTT và chuyển đổi số hàng đầu Việt Nam"
    },
    period: { en: "Jul 2025 — Dec 2025", vi: "07/2025 — 12/2025" },
    summary: {
      en: "Built the transformation layer of a lakehouse, standardising data from multiple source systems into validated models for downstream analytics.",
      vi: "Dựng tầng transformation cho lakehouse, chuẩn hoá dữ liệu từ nhiều hệ thống nguồn thành các model đã được kiểm định để phục vụ phân tích ở downstream."
    },
    tech: ["SQL", "Spark", "Python"]
  },
  {
    title: { en: "Data Engineer Intern", vi: "Thực tập sinh Kỹ sư Dữ liệu" },
    subtitle: "Prompcorp",
    // Prompcorp has no symbol, only a 2.69:1 wordmark on their brand dark. Kept
    // at that ratio because squaring it drops the lettering to 3.5px tall.
    logo: "/icons/prompcorp.png",
    logoWide: true,
    url: "https://www.prompcorp.com.au",
    location: { en: "North Melbourne, VIC, Australia", vi: "North Melbourne, VIC, Úc" },
    companyNote: {
      en: "One of Australia's largest privately owned facility management groups",
      vi: "Một trong những tập đoàn quản lý cơ sở vật chất tư nhân lớn nhất nước Úc"
    },
    period: { en: "Mar 2024 — May 2024", vi: "03/2024 — 05/2024" },
    summary: {
      en: "Centralised HubSpot data and built dashboards for the operations team, replacing scattered exports with one reliable source of truth.",
      vi: "Gom dữ liệu HubSpot về một mối rồi dựng dashboard cho bộ phận vận hành, thay những file export rời rạc bằng một nguồn dữ liệu đáng tin duy nhất."
    },
    tech: ["Python", "Airflow", "Postgres", "Superset"]
  },
  {
    title: { en: "Data Engineer Intern", vi: "Thực tập sinh Kỹ sư Dữ liệu" },
    subtitle: "NaviWorld Australia",
    logo: "/icons/naviworld.png",
    url: "https://naviworld.com.au",
    location: { en: "Melbourne, VIC, Australia", vi: "Melbourne, VIC, Úc" },
    companyNote: {
      en: "Microsoft Dynamics partner for ERP and digital transformation",
      vi: "Đối tác Microsoft Dynamics về ERP và chuyển đổi số"
    },
    period: { en: "Jan 2024 — Mar 2024", vi: "01/2024 — 03/2024" },
    summary: {
      en: "Backfilled years of Dynamics 365 Business Central data into a Fabric warehouse, automated the daily refresh, and replaced manually maintained reports with dashboards.",
      vi: "Nạp bù nhiều năm dữ liệu Dynamics 365 Business Central vào warehouse trên Fabric, tự động hoá refresh hằng ngày, rồi thay những báo cáo làm tay bằng dashboard."
    },
    tech: ["Fabric", "SQL", "Power BI"]
  }
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: { en: "Bachelor of Data Science", vi: "Cử nhân Khoa học Dữ liệu" },
    subtitle: "Swinburne University of Technology",
    logo: SwinburneLogo,
    logoFill: true,
    url: "https://www.swinburne.edu.au",
    location: { en: "Melbourne, VIC, Australia", vi: "Melbourne, VIC, Úc" },
    period: { en: "Feb 2022 — Dec 2024", vi: "02/2022 — 12/2024" },
    stats: [
      { label: "GPA", value: "3.542 / 4.0" },
      // "High Distinction" is the formal grade name on the transcript, so it is
      // left standing rather than paraphrased into a Vietnamese equivalent.
      { label: { en: "Result", vi: "Xếp loại" }, value: "High Distinction" }
    ],
    awards: [
      {
        title: "Swinburne International Excellence Scholarship",
        value: { en: "75% of tuition for the full degree", vi: "75% học phí toàn khoá" }
      }
    ]
  },
  {
    title: { en: "High School Diploma", vi: "Bằng tốt nghiệp THPT" },
    subtitle: {
      en: "Hanoi-Amsterdam High School for the Gifted",
      vi: "THPT Chuyên Hà Nội – Amsterdam"
    },
    logo: "/icons/hnams.png",
    logoFill: true,
    url: "https://hn-ams.edu.vn/",
    location: { en: "Hanoi, Vietnam", vi: "Hà Nội, Việt Nam" },
    period: { en: "Sep 2018 — May 2021", vi: "09/2018 — 05/2021" },
    stats: [
      { label: "GPA", value: "9.6 / 10" },
      { label: { en: "Cohort rank", vi: "Xếp hạng khoá" }, value: "Top 5%" }
    ],
    grades: {
      heading: "A Levels",
      items: [
        { subject: { en: "Mathematics", vi: "Toán" }, grade: "A*" },
        { subject: { en: "Chemistry", vi: "Hoá học" }, grade: "A*" },
        { subject: { en: "Business", vi: "Kinh doanh" }, grade: "B" }
      ]
    }
  }
];

export type CertificationEntry = {
  name: string;
  issuer: string;
  logo: LogoSource;
  url?: string;
  /**
   * Optional because a credential does not always state one — DataCamp prints
   * the ID on the certificate but not the issue date. Note that nothing renders
   * this yet, nor `level` or `credentialId`; the card shows the logo, issuer,
   * name, a Verify link and the skill pills.
   */
  date?: Text;
  level?: Text;
  credentialId?: string;
  skills?: string[];
};

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    logo: HackerRankLogo,
    url: "https://www.hackerrank.com/certificates/90d9344785a0",
    date: { en: "2024", vi: "2024" },
    level: { en: "Advanced", vi: "Nâng cao" },
    skills: ["SQL"]
  },
  {
    name: "SQL Associate",
    issuer: "DataCamp",
    logo: DataCampLogo,
    url: "https://www.datacamp.com/certificate/SQA0016435583306",
    level: { en: "Associate", vi: "Associate" },
    credentialId: "SQA0016435583306",
    skills: ["SQL"]
  }
];
