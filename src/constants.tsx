import type { ReactNode } from "react";
import { Terminal, Database, GitBranch, LineChart, Wrench, Cloud, Plane, Boxes, Workflow, Camera } from "lucide-react";
import type { TimelineEntry } from "./components/TimelineSection";
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

/** Skill names themselves are product names — they key SKILL_ICON_MAP and never translate. */
export const SKILL_CATEGORIES: { name: Text; icon: ReactNode; skills: string[] }[] = [
  {
    name: { en: "Languages", vi: "Ngôn ngữ" },
    icon: <Terminal size={20} />,
    skills: ["SQL", "Python", "Bash"]
  },
  {
    name: { en: "Data Engineering", vi: "Kỹ thuật dữ liệu" },
    icon: <GitBranch size={20} />,
    skills: ["dbt", "dlt", "Spark", "Airflow"]
  },
  {
    name: { en: "BI & Analytic", vi: "BI & Phân tích" },
    icon: <LineChart size={20} />,
    skills: ["Power BI", "Tableau", "Superset", "Metabase"]
  },
  {
    name: { en: "Data Platforms & Storage", vi: "Nền tảng & Lưu trữ dữ liệu" },
    icon: <Database size={20} />,
    skills: ["Postgres", "MySQL", "SQL Server", "ClickHouse", "Snowflake", "Redshift", "Databricks", "Fabric"]
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
 * the labels are. Insertion order is the order the filter chips appear in.
 */
export const PROJECT_TAGS = {
  pipeline: { en: "Data Pipeline", vi: "Data Pipeline" },
  bi: { en: "BI & Dashboards", vi: "BI & Dashboard" },
  infra: { en: "Cloud & Infra", vi: "Hạ tầng & Cloud" },
  ml: { en: "ML & Vision", vi: "ML & Thị giác máy" }
} satisfies Record<string, Localized>;

export type ProjectTag = keyof typeof PROJECT_TAGS;

/**
 * Titles are repository names, so they read the same either way. A project may
 * carry more than one tag — the flight warehouse is as much a dashboard as it
 * is a pipeline, and pretending otherwise would hide it from one of the two
 * filters a reader might try.
 *
 * `link` may be an empty string — the card then renders without an
 * external-link affordance.
 */
export const PROJECTS: { title: string; description: Text; tags: ProjectTag[]; tech: string[]; link: string; icon: ReactNode }[] = [
  {
    title: "AeroStream Flight Analytics",
    description: {
      en: "38.3M US flights through a Medallion warehouse — dlt, ClickHouse, dbt, Superset, 12 Airflow DAGs, one docker compose. Departure time shifts delay odds ~5x, more than the airline you pick.",
      vi: "38,3 triệu chuyến bay nội địa Mỹ, chạy qua một kho dữ liệu Medallion dựng bằng dlt, ClickHouse, dbt và Superset — 12 DAG Airflow, gói gọn trong một docker compose. Và hoá ra, muốn đỡ trễ thì chọn giờ bay quan trọng gấp khoảng 5 lần chọn hãng."
    },
    tags: ["pipeline", "bi"],
    tech: ["dlt", "ClickHouse", "dbt", "Airflow", "Superset"],
    link: "https://github.com/TungNamNguyen/aerostream-flight-analytics",
    icon: <Plane size={24} />
  },
  {
    title: "Data Engineering Templates",
    description: {
      en: "Docker Compose templates for a dozen data tools — Airflow, ClickHouse, dbt, Superset, MinIO and more — each version-pinned so a stack comes up in one command.",
      vi: "Hơn chục công cụ dữ liệu — Airflow, ClickHouse, dbt, Superset, MinIO — mỗi thứ một file Docker Compose, phiên bản ghim sẵn. Gõ một lệnh là cả stack chạy, khỏi mất nguyên buổi chiều dựng lại từ đầu."
    },
    tags: ["infra"],
    tech: ["Docker Compose", "Airflow", "ClickHouse", "dbt", "MinIO"],
    link: "https://github.com/TungNamNguyen/data-engineering-templates",
    icon: <Boxes size={24} />
  },
  {
    title: "GitLab API Data Pipeline",
    description: {
      en: "CLI that pulls GitLab project data into a SQLAlchemy-backed store, with OpenAPI-generated clients, full CRUD and credentials kept out of source.",
      vi: "Công cụ dòng lệnh kéo dữ liệu project từ GitLab về một kho SQLAlchemy. Client sinh thẳng từ OpenAPI nên khỏi viết tay, CRUD có đủ, còn credential thì không bao giờ lọt vào source."
    },
    tags: ["pipeline"],
    tech: ["Python", "SQLAlchemy", "OpenAPI", "SQLite"],
    link: "https://github.com/TungNamNguyen/gitlab-api-data-pipeline",
    icon: <Workflow size={24} />
  },
  {
    title: "Fall Detection System",
    description: {
      en: "Real-time fall detection from an RGB camera. Benchmarks YOLOv8, MediaPipe and MoveNet behind a Tkinter GUI with keypoint logging and audible alerts. University industry project.",
      vi: "Phát hiện té ngã theo thời gian thực, chỉ cần một camera RGB thường. YOLOv8, MediaPipe và MoveNet đặt cạnh nhau đo thử trong cùng một giao diện Tkinter, có ghi log keypoint và phát hiện ngã là báo động ngay. Đồ án hợp tác doanh nghiệp ở trường."
    },
    tags: ["ml"],
    tech: ["Python", "YOLOv8", "MediaPipe", "MoveNet"],
    link: "https://github.com/TungNamNguyen/fall-detection-system",
    icon: <Camera size={24} />
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
    points: [
      {
        en: "Managed and optimized end-to-end data pipelines for 10+ Power BI lending reports, migrating SQL stored procedures from on-premises SQL Server to Amazon Redshift, reducing processing time by 25%.",
        vi: "Vận hành và tối ưu toàn bộ đường dữ liệu cho hơn 10 báo cáo Power BI mảng tín dụng; chuyển stored procedure từ SQL Server on-premises sang Amazon Redshift, cắt 25% thời gian xử lý."
      },
      {
        en: "Owned end-to-end development of the SME Debt Management module, translating stakeholder requirements into Redshift data models and Power BI dashboards for monitoring NPL, debt classification, and credit quality.",
        vi: "Chủ trì module Quản lý Nợ SME từ đầu đến cuối: biến yêu cầu nghiệp vụ thành mô hình dữ liệu trên Redshift và dashboard Power BI theo dõi nợ xấu (NPL), phân loại nợ và chất lượng tín dụng."
      },
      {
        en: "Analyzed SME loan-processing turnaround time (TAT) across 15+ workflow stages, identifying process bottlenecks and delivering actionable insights to business leadership to prioritize workflow improvements.",
        vi: "Phân tích thời gian xử lý hồ sơ vay SME (TAT) qua hơn 15 bước quy trình, chỉ ra chỗ nào đang tắc và đề xuất với ban lãnh đạo nên cải tiến khâu nào trước."
      }
    ]
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
    points: [
      {
        en: "Designed source-to-target data mappings for 20+ tables across multiple source systems, defining standardized schemas and transformation logic to improve data consistency and support downstream analytical models.",
        vi: "Thiết kế mapping source-to-target cho hơn 20 bảng từ nhiều hệ thống nguồn, chuẩn hoá schema và logic biến đổi để dữ liệu khớp nhau và các mô hình phân tích phía sau dùng được ngay."
      },
      {
        en: "Developed 8 Spark jobs for Silver-to-Gold transformations, implementing business rules and aggregations to create curated Gold-layer datasets for BI reporting and dashboard consumption.",
        vi: "Viết 8 Spark job cho bước Silver sang Gold, cài business rule và các phép tổng hợp để dựng bộ dữ liệu tầng Gold phục vụ báo cáo BI và dashboard."
      },
      {
        en: "Implemented 60+ SQL-based data validation checks across Bronze, Silver, and Gold tables, validating transformation logic, record consistency, and key business metrics across layers.",
        vi: "Dựng hơn 60 phép kiểm tra dữ liệu bằng SQL trên cả ba tầng Bronze, Silver và Gold, soát lại logic biến đổi, độ khớp bản ghi và các chỉ số nghiệp vụ quan trọng giữa các tầng."
      }
    ]
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
    points: [
      {
        en: "Developed and optimized ETL pipelines with Python and Airflow to ingest HubSpot API data into 8 PostgreSQL tables, establishing a centralized single source of truth and improving data retrieval speed by 40%.",
        vi: "Dựng và tối ưu pipeline ETL bằng Python và Airflow để đưa dữ liệu HubSpot API vào 8 bảng PostgreSQL, gom tất cả về một nguồn dữ liệu duy nhất và tăng 40% tốc độ truy xuất."
      },
      {
        en: "Built 4 Superset dashboards, improving access to operational insights and reducing decision-making time by 25%.",
        vi: "Dựng 4 dashboard Superset, giúp bộ phận vận hành nắm số liệu nhanh hơn và rút 25% thời gian ra quyết định."
      }
    ]
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
    points: [
      {
        en: "Built and orchestrated ELT pipelines with Fabric Data Factory, Dataflow Gen2, and T-SQL to backfill 500K+ historical Dynamics 365 Business Central records into Microsoft Fabric Data Warehouse and enable daily incremental loads.",
        vi: "Dựng và điều phối pipeline ELT bằng Fabric Data Factory, Dataflow Gen2 và T-SQL: nạp bù hơn 500 nghìn bản ghi lịch sử từ Dynamics 365 Business Central vào Microsoft Fabric Data Warehouse, rồi cho chạy incremental load hằng ngày."
      },
      {
        en: "Delivered 3 Power BI dashboards with 50+ DAX measures for 4 stakeholders, reducing report preparation time from 3 days to 1 day and enabling faster performance tracking.",
        vi: "Bàn giao 3 dashboard Power BI với hơn 50 measure DAX cho 4 bên liên quan, rút thời gian làm báo cáo từ 3 ngày xuống còn 1 ngày."
      }
    ]
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
