import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import {
  SiGnubash, SiMysql, SiSnowflake, SiDbt, SiApachespark,
  SiMetabase, SiDatabricks, SiApachesuperset, SiDocker,
  SiTerraform, SiGit, SiJira, SiConfluence, SiTrello
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { Database, BarChart3 } from "lucide-react";

/**
 * Icons are sized by the wrapper's font-size (see ICON_SIZE below), so every
 * glyph here must scale off `1em` rather than a hard-coded pixel size.
 */
const ICON_SIZE = "text-[16px]";

const AirflowIcon = () => (
  <svg viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    <path d="M4.18587 172.44L86.3959 88.1685C86.9109 87.6406 87.0096 86.8244 86.5801 86.2249C81.5792 79.2442 72.3564 78.0343 68.9375 73.3445C58.8101 59.4522 56.2405 51.5891 51.8887 52.0768C51.5847 52.1109 51.3137 52.2745 51.1001 52.4934L21.4015 82.9367C4.31645 100.45 1.86636 139.01 1.41703 171.298C1.39673 172.757 3.1669 173.484 4.18587 172.44Z" fill="#017CEE"/>
    <path d="M172.44 170.357L88.1685 88.1466C87.6406 87.6316 86.8244 87.5328 86.2249 87.9623C79.2443 92.9633 78.0344 102.186 73.3445 105.605C59.4522 115.732 51.5891 118.302 52.0768 122.654C52.1109 122.958 52.2745 123.229 52.4935 123.442L82.9367 153.141C100.45 170.226 139.01 172.676 171.298 173.125C172.757 173.146 173.484 171.376 172.44 170.357Z" fill="#00AD46"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M82.9363 153.141C73.3696 143.809 68.9312 125.346 87.2715 87.2725C57.4647 100.593 47.0194 118.103 52.1578 123.116L82.9363 153.141Z" fill="#04D659"/>
    <path d="M170.355 2.10462L88.1451 86.376C87.6301 86.9039 87.5314 87.72 87.9609 88.3195C92.9618 95.3002 102.185 96.5101 105.603 101.2C115.731 115.092 118.301 122.955 122.652 122.468C122.956 122.434 123.227 122.27 123.441 122.051L153.139 91.6077C170.225 74.0942 172.675 35.5346 173.124 3.24627C173.144 1.78719 171.374 1.0601 170.355 2.10462Z" fill="#00C7D4"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M153.14 91.6077C143.807 101.174 125.344 105.613 87.2705 87.2725C100.591 117.079 118.101 127.525 123.114 122.386L153.14 91.6077Z" fill="#11E1EE"/>
    <path d="M2.10315 4.18733L86.3745 86.3973C86.9024 86.9123 87.7185 87.0111 88.3181 86.5816C95.2987 81.5807 96.5086 72.3579 101.198 68.939C115.091 58.8116 122.954 56.242 122.466 51.8902C122.432 51.5862 122.268 51.3152 122.05 51.1016L91.6063 21.403C74.0928 4.31792 35.5331 1.86783 3.2448 1.4185C1.78572 1.39819 1.05863 3.16836 2.10315 4.18733Z" fill="#E43921"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M91.6057 21.4025C101.172 30.7352 105.611 49.1977 87.2705 87.2714C117.077 73.9511 127.523 56.4408 122.384 51.4281L91.6057 21.4025Z" fill="#FF7557"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M21.4025 82.9368C30.7352 73.3701 49.1977 68.9317 87.2714 87.272C73.951 57.4652 56.4408 47.0199 51.4281 52.1583L21.4025 82.9368Z" fill="#0CB6FF"/>
    <circle cx="87.2838" cy="87.2606" r="3.67606" transform="rotate(-0.709386 87.2838 87.2606)" fill="#4A4848"/>
  </svg>
);

const TableauIcon = () => (
  <svg viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    <path fill="#7099a6" d="M26.19 2.45L26.19 4.91L21.79 4.91L21.79 6.51L26.19 6.51L26.19 11.41L27.91 11.41L27.91 6.51L32.42 6.51L32.42 4.91L27.91 4.91L27.91 0L26.19 0L26.19 2.45Z" />
    <path fill="#eb912c" d="M11.81 8.69L11.81 12.26L5.15 12.26L5.15 14.5L11.81 14.5L11.81 21.75L14.28 21.75L14.28 14.5L21.04 14.5L21.04 12.26L14.28 12.26L14.28 5.12L11.81 5.12L11.81 8.69Z" />
    <path fill="#59879b" d="M39.72 8.69L39.72 12.26L33.06 12.26L33.06 14.61L39.72 14.61L39.72 21.75L42.29 21.75L42.29 14.61L48.95 14.61L48.95 12.26L42.29 12.26L42.29 5.12L39.72 5.12L39.72 8.69Z" />
    <path fill="#e8762c" d="M25.55 20.85L25.55 24.85L18.14 24.85L18.14 27.83L25.55 27.83L25.55 35.83L28.55 35.83L28.55 27.83L35.96 27.83L35.96 24.85L28.55 24.85L28.55 16.85L25.55 16.85L25.55 20.85Z" />
    <path fill="#5b6591" d="M47.34 22.87L47.34 25.38L42.83 25.38L42.83 27.41L47.34 27.41L47.34 32.42L49.59 32.42L49.59 27.41L54.1 27.41L54.1 25.38L49.59 25.38L49.59 20.37L47.34 20.37L47.34 22.87Z" />
    <path fill="#7099a6" d="M4.4 23.09L4.4 25.49L0 25.49L0 27.19L4.4 27.19L4.4 31.99L6.12 31.99L6.12 27.19L10.63 27.03L10.63 25.49L6.12 25.49L6.12 20.69L4.4 20.69L4.4 23.09Z" />
    <path fill="#c72035" d="M11.81 34.39L11.81 37.96L5.15 37.96L5.15 40.31L11.81 40.31L11.81 47.45L14.38 47.45L14.38 40.31L21.04 40.31L21.04 37.96L14.38 37.96L14.38 30.82L11.81 30.82L11.81 34.39Z" />
    <path fill="#1f447e" d="M39.72 34.39L39.72 37.96L33.06 37.96L33.06 40.2L39.72 40.2L39.72 47.45L42.29 47.45L42.29 40.2L48.95 40.2L48.95 37.96L42.29 37.96L42.29 30.82L39.72 30.82L39.72 34.39Z" />
    <path fill="#5b6591" d="M25.98 43.46L25.98 45.96L21.47 45.96L21.47 47.99L25.98 47.99L25.98 53L28.23 53L28.23 47.99L32.74 47.99L32.74 45.96L28.23 45.96L28.23 40.95L25.98 40.95L25.98 43.46Z" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
  </svg>
);

/** Bitmap/vector logos served from public/icons — no third-party hotlinking. */
const LocalIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={16} height={16} className="w-[1em] h-[1em] object-contain" />
);

const SKILL_ICON_MAP: Record<string, ReactNode> = {
  "SQL": <span className="text-[#4479A1] dark:text-[#5DA5DA]"><Database size="1em" /></span>,
  "Python": <LocalIcon src="/icons/python.svg" alt="" />,
  "Bash": <span className="text-slate-900 dark:text-white"><SiGnubash /></span>,
  "Postgres": <LocalIcon src="/icons/postgresql.svg" alt="" />,
  "MySQL": <span className="text-[#4479A1] dark:text-[#5DA5DA]"><SiMysql /></span>,
  "Microsoft SQL Server": <span className="text-[#CC292B] dark:text-[#E84D4A]"><DiMsqlServer /></span>,
  "Snowflake": <span className="text-[#29B5E8] dark:text-[#4BC4F0]"><SiSnowflake /></span>,
  "Databricks": <span className="text-[#FF3621] dark:text-[#FF5C4A]"><SiDatabricks /></span>,
  "Microsoft Fabric": <LocalIcon src="/icons/microsoft-fabric.svg" alt="" />,
  "Power BI": <span className="text-[#F2C811] dark:text-[#FAD839]"><BarChart3 size="1em" /></span>,
  "Tableau": <TableauIcon />,
  "Apache Superset": <span className="text-[#20A7C9] dark:text-[#4BC4F0]"><SiApachesuperset /></span>,
  "Metabase": <span className="text-[#509EE3] dark:text-[#73B4F0]"><SiMetabase /></span>,
  "dbt": <span className="text-[#FF694B] dark:text-[#FF846B]"><SiDbt /></span>,
  "Spark": <span className="text-[#E25A1C] dark:text-[#F97B45]"><SiApachespark /></span>,
  "Airflow": <AirflowIcon />,
  "Git": <span className="text-[#F05032] dark:text-[#F36B53]"><SiGit /></span>,
  "Docker": <span className="text-[#2496ED] dark:text-[#4EABF2]"><SiDocker /></span>,
  "AWS": <span className="text-[#FF9900] dark:text-[#FFB340]"><FaAws /></span>,
  "Azure": <span className="text-[#0089D6] dark:text-[#33A1FD]"><VscAzure /></span>,
  "Terraform": <span className="text-[#844FBA] dark:text-[#9D68D3]"><SiTerraform /></span>,
  "Jira": <span className="text-[#0052CC] dark:text-[#4C9AFF]"><SiJira /></span>,
  "Confluence": <span className="text-[#0052CC] dark:text-[#4C9AFF]"><SiConfluence /></span>,
  "Trello": <span className="text-[#0079BF] dark:text-[#61BDFA]"><SiTrello /></span>,
  "Teams": <span className="text-[#6264A7] dark:text-[#7A7CBF]"><BsMicrosoftTeams /></span>,
  "Slack": <SlackIcon />
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SKILL_CATEGORIES.map((category, i) => (
        <motion.div
          key={i}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : i * 0.1, duration: 0.3 }}
          className="space-y-4 bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-none transition-all duration-200"
        >
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">{category.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill, j) => (
              <span
                key={j}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
              >
                {SKILL_ICON_MAP[skill] && (
                  <span className={`${ICON_SIZE} flex items-center shrink-0`} aria-hidden="true">
                    {SKILL_ICON_MAP[skill]}
                  </span>
                )}
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
