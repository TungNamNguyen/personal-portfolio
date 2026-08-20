import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Wrench, Cloud, Layers } from "lucide-react";
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
   * Two sentences for the hero. Deliberately free of project specifics — the
   * Projects section carries those — and it never repeats the role or location
   * printed directly above it.
   */
  bio: {
    en: "Pipelines that land the data, models that make it trustworthy, dashboards that get it used. I work the full span of data engineering, analytics engineering and BI, not one slice.",
    vi: "Mình theo dữ liệu suốt chặng đường: từ lúc nó còn nằm trong hệ thống nguồn, qua pipeline và model, tới khi thành cái dashboard sáng nào cũng có người mở. Data engineering, analytics engineering hay BI — với mình vẫn là một việc, không phải ba."
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
  { id: "skills", label: UI.skills },
  { id: "experience", label: UI.experience },
  { id: "education", label: UI.education },
  { id: "projects", label: UI.projects },
  { id: "recommendations", label: UI.recommendations }
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
 * Storage used to be one card of eight. On a three-column grid that made it two
 * pill-rows taller than the two cards beside it, which stretch to match, so both
 * of those ended in a band of empty white. Splitting it along the line a data
 * engineer would draw anyway — the databases you serve from, the warehouses you
 * analyse in — balances the row and says more than the merged card did.
 *
 * `wide` runs a card across all three columns. The seventh would otherwise sit
 * alone at a third of the width with six pills wrapping inside it.
 */
export const SKILL_CATEGORIES: { name: Text; icon: ReactNode; skills: string[]; wide?: boolean }[] = [
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
    skills: ["Postgres", "MySQL", "SQL Server"]
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
    skills: ["DBeaver", "Jira", "Confluence", "Trello", "Teams", "Slack"],
    wide: true
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
export const PROJECTS: { title: string; description: Text; image?: string; featured?: boolean; tags: ProjectTag[]; tech: string[]; link: string; cover: CoverName }[] = [
  {
    title: "AeroStream Flight Analytics",
    description: {
      en: "38.3M US flights through a Medallion warehouse — dlt, ClickHouse, dbt, Superset, 12 Airflow DAGs, one docker compose. Departure time shifts delay odds ~5x, more than the airline you pick.",
      vi: "38,3 triệu chuyến bay nội địa Mỹ, chạy qua một kho dữ liệu Medallion dựng bằng dlt, ClickHouse, dbt và Superset — 12 DAG Airflow, gói gọn trong một docker compose. Và hoá ra, muốn đỡ trễ thì chọn giờ bay quan trọng gấp khoảng 5 lần chọn hãng."
    },
    image: "/projects/aerostream.webp",
    featured: true,
    tags: ["de", "bi"],
    tech: ["dlt", "ClickHouse", "dbt", "Airflow", "Superset"],
    link: "https://github.com/TungNamNguyen/aerostream-flight-analytics",
    cover: "flights"
  },
  {
    title: "Data Engineering Templates",
    description: {
      en: "Docker Compose templates for a dozen data tools — Airflow, ClickHouse, dbt, Superset, MinIO and more — each version-pinned so a stack comes up in one command.",
      vi: "Hơn chục công cụ dữ liệu — Airflow, ClickHouse, dbt, Superset, MinIO — mỗi thứ một file Docker Compose, phiên bản ghim sẵn. Gõ một lệnh là cả stack chạy, khỏi mất nguyên buổi chiều dựng lại từ đầu."
    },
    image: "/projects/templates.webp",
    featured: true,
    tags: ["de"],
    tech: ["Docker Compose", "Airflow", "ClickHouse", "dbt", "MinIO"],
    link: "https://github.com/TungNamNguyen/data-engineering-templates",
    cover: "stack"
  },
  {
    title: "Local \u2194 Google Drive Sync",
    description: {
      en: "Self-hosted Streamlit app that compares a mounted disk against Google Drive and syncs either way. From the second scan on it only asks Drive what changed, so a rescan takes seconds rather than minutes.",
      vi: "Ứng dụng Streamlit tự host, đối chiếu ổ đĩa gắn ngoài với Google Drive rồi đồng bộ theo cả hai chiều. Từ lần quét thứ hai, nó chỉ hỏi Drive những gì đã đổi, nên quét lại mất vài giây thay vì vài phút."
    },
    featured: true,
    tags: ["de"],
    tech: ["Python", "Streamlit", "Docker Compose", "Google Drive"],
    link: "https://github.com/TungNamNguyen/gdrive-local-sync",
    cover: "sync"
  },
  {
    title: "GitLab API Data Pipeline",
    description: {
      en: "CLI that pulls GitLab project data into a SQLAlchemy-backed store, with OpenAPI-generated clients, full CRUD and credentials kept out of source.",
      vi: "Công cụ dòng lệnh kéo dữ liệu project từ GitLab về một kho SQLAlchemy. Client sinh thẳng từ OpenAPI nên khỏi viết tay, CRUD có đủ, còn credential thì không bao giờ lọt vào source."
    },
    image: "/projects/gitlab.webp",
    tags: ["de"],
    tech: ["Python", "SQLAlchemy", "OpenAPI", "SQLite"],
    link: "https://github.com/TungNamNguyen/gitlab-api-data-pipeline",
    cover: "graph"
  },
  {
    title: "SparkEV Case Study",
    description: {
      en: "Five linked Tableau dashboards for an EV maker — performance, finance, operations, forecast — fed by a Tableau Prep cleaning flow. University case study.",
      vi: "Năm dashboard Tableau liên kết cho một hãng xe điện — hiệu suất, tài chính, vận hành, dự báo — lấy dữ liệu từ luồng làm sạch bằng Tableau Prep. Case study ở trường."
    },
    image: "/projects/sparkev.webp",
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
      en: "Why customers leave a fictional telecom — 6,687 accounts, 26.9% of them churned — split by reason, contract type and state. Published to Tableau Public. University case study.",
      vi: "Vì sao khách hàng rời bỏ một nhà mạng giả định — 6.687 tài khoản, 26,9% đã rời đi — bóc tách theo lý do, loại hợp đồng và bang. Đã publish lên Tableau Public. Case study ở trường."
    },
    image: "/projects/databel.webp",
    tags: ["bi"],
    tech: ["Tableau"],
    link: "https://public.tableau.com/app/profile/tung.nguyen.nam/viz/DatabelCaseStudyAnalysis-CustomerChurning/ChurnAnalysis",
    cover: "graph"
  },
  {
    title: "Fall Detection System",
    description: {
      en: "Real-time fall detection from an RGB camera. Benchmarks YOLOv8, MediaPipe and MoveNet behind a Tkinter GUI with keypoint logging and audible alerts. University industry project.",
      vi: "Phát hiện té ngã theo thời gian thực, chỉ cần một camera RGB thường. YOLOv8, MediaPipe và MoveNet đặt cạnh nhau đo thử trong cùng một giao diện Tkinter, có ghi log keypoint và phát hiện ngã là báo động ngay. Đồ án hợp tác doanh nghiệp ở trường."
    },
    image: "/projects/fall-detection.webp",
    tags: ["ml"],
    tech: ["Python", "YOLOv8", "MediaPipe", "MoveNet"],
    link: "https://github.com/TungNamNguyen/fall-detection-system",
    cover: "pose"
  },
  {
    title: "Refugee Migration Flows",
    description: {
      en: "Global refugee movement in 2021 — a choropleth of where people left, a Sankey of where they went, and heatmaps by year. D3 and plain JavaScript, no charting library. University project, built with Bill Pham.",
      vi: "Dòng người tị nạn trên thế giới năm 2021 — bản đồ nơi họ rời đi, Sankey nơi họ đến, và heatmap theo từng năm. Viết bằng D3 và JavaScript thuần, không dùng thư viện biểu đồ. Đồ án ở trường, làm cùng Bill Pham."
    },
    image: "/projects/refugees.webp",
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
    logo: "/icons/vpbank.svg",
    url: "https://www.vpbank.com.vn",
    location: { en: "Hanoi Capital Region, Vietnam", vi: "Hà Nội, Việt Nam" },
    companyNote: {
      en: "One of Vietnam's largest private joint-stock commercial banks",
      vi: "Một trong những ngân hàng thương mại cổ phần tư nhân lớn nhất Việt Nam"
    },
    period: { en: "Dec 2025 — Present", vi: "12/2025 — Hiện tại" },
    current: true,
    summary: {
      en: "Builds and runs the data pipelines and Power BI reports behind SME lending, from debt classification and credit quality to how long an application takes to clear.",
      vi: "Xây dựng và vận hành các pipeline dữ liệu cùng báo cáo Power BI cho mảng tín dụng SME, từ phân loại nợ, chất lượng tín dụng cho tới thời gian một hồ sơ vay đi hết quy trình."
    },
    tech: ["SQL", "SQL Server", "NiFi", "Redshift", "Power BI"]
  },
  {
    title: { en: "Data Engineer", vi: "Kỹ sư Dữ liệu" },
    subtitle: "CMC Global",
    logo: "/icons/cmcglobal.svg",
    url: "https://cmcglobal.com.vn",
    location: { en: "Hanoi Capital Region, Vietnam", vi: "Hà Nội, Việt Nam" },
    companyNote: {
      en: "Leading Vietnamese IT services and digital transformation provider",
      vi: "Nhà cung cấp dịch vụ CNTT và chuyển đổi số hàng đầu Việt Nam"
    },
    period: { en: "Jul 2025 — Dec 2025", vi: "07/2025 — 12/2025" },
    summary: {
      en: "Mapped how each source system lands in the warehouse, built the Spark jobs that shape those tables into reporting data, and wrote the SQL checks that verify every step.",
      vi: "Làm mapping dữ liệu từ từng hệ thống nguồn về warehouse, viết các Spark job biến những bảng đó thành dữ liệu phục vụ báo cáo, và viết các check bằng SQL soát lại từng bước."
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
      en: "Moved HubSpot data into Postgres with Python and Airflow, then put Superset dashboards on top so the operations team could follow it day to day.",
      vi: "Đưa dữ liệu HubSpot về Postgres bằng Python và Airflow, rồi dựng dashboard Superset bên trên để bộ phận vận hành theo dõi hằng ngày."
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
      en: "Set up the ELT that loaded Dynamics 365 Business Central into Microsoft Fabric, then built the Power BI dashboards stakeholders used to track performance.",
      vi: "Dựng luồng ELT nạp dữ liệu Dynamics 365 Business Central vào Microsoft Fabric, rồi làm các dashboard Power BI để các bên liên quan theo dõi tình hình kinh doanh."
    },
    tech: ["Fabric", "SQL", "Power BI"]
  }
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: { en: "Bachelor of Data Science", vi: "Cử nhân Khoa học Dữ liệu" },
    subtitle: "Swinburne University of Technology",
    logo: "/icons/swinburne.svg",
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
