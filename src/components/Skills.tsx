import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import { Database } from "lucide-react";

// Full-colour brand marks. `~icons/*` is resolved by unplugin-icons at build
// time (see vite.config.ts) and inlined as SVG — no runtime icon library.
import IconPython from "~icons/logos/python";
import IconBash from "~icons/logos/bash-icon";
import IconDbt from "~icons/logos/dbt-icon";
import IconSpark from "~icons/devicon/apachespark";
import IconAirflow from "~icons/logos/airflow-icon";
import IconPowerBi from "~icons/logos/microsoft-power-bi";
import IconTableau from "~icons/logos/tableau-icon";
import IconSuperset from "~icons/logos/apache-superset-icon";
import IconMetabase from "~icons/logos/metabase";
import IconPostgres from "~icons/logos/postgresql";
import IconMysql from "~icons/logos/mysql-icon";
import IconSnowflake from "~icons/logos/snowflake-icon";
import IconGit from "~icons/logos/git-icon";
import IconDocker from "~icons/logos/docker-icon";
import IconAws from "~icons/logos/aws";
import IconAzure from "~icons/logos/microsoft-azure";
import IconTerraform from "~icons/logos/terraform-icon";
import IconJira from "~icons/logos/jira";
import IconConfluence from "~icons/logos/confluence";
import IconTrello from "~icons/logos/trello";
import IconTeams from "~icons/logos/microsoft-teams";
import IconSlack from "~icons/logos/slack-icon";
import IconSqlServer from "~icons/devicon/microsoftsqlserver";
import IconDbeaver from "~icons/devicon/dbeaver";

// Monochrome mark: inherits colour from the wrapper, tinted to the brand hue.
import IconDatabricks from "~icons/simple-icons/databricks";

/**
 * Icons are sized by the wrapper's font-size, so every glyph scales off `1em`.
 */
const ICON_SIZE = "text-[16px]";

/**
 * Brand marks drawn in near-black. They read fine on the light theme but vanish
 * against slate-950, so in dark mode only they sit on a light chip — which is
 * how these logos are meant to be placed on dark backgrounds anyway.
 */
const NEEDS_LIGHT_CHIP = new Set([
  "Bash", "dlt", "Superset", "Postgres", "MySQL", "SQL Server", "AWS", "DBeaver"
]);

/**
 * Marks that no icon set carries, taken from the vendor's own brand assets and
 * served from public/icons.
 */
const LocalIcon = ({ src }: { src: string }) => (
  <img src={src} alt="" width={16} height={16} className="w-[1em] h-[1em] object-contain" />
);

const SKILL_ICON_MAP: Record<string, ReactNode> = {
  // SQL is a language standard, not a product — there is no official mark.
  "SQL": <span className="text-[#4479A1] dark:text-[#5DA5DA]"><Database size="1em" /></span>,
  "Python": <IconPython />,
  "Bash": <IconBash />,
  "dbt": <IconDbt />,
  "dlt": <LocalIcon src="/icons/dlt.svg" />,
  "Spark": <IconSpark />,
  "Airflow": <IconAirflow />,
  "Power BI": <IconPowerBi />,
  "Tableau": <IconTableau />,
  "Superset": <IconSuperset />,
  "Metabase": <IconMetabase />,
  "Postgres": <IconPostgres />,
  "MySQL": <IconMysql />,
  "SQL Server": <IconSqlServer />,
  "Snowflake": <IconSnowflake />,
  "Databricks": <span className="text-[#FF3621]"><IconDatabricks /></span>,
  "Fabric": <LocalIcon src="/icons/microsoft-fabric.svg" />,
  "Git": <IconGit />,
  "Docker": <IconDocker />,
  "AWS": <IconAws />,
  "Azure": <IconAzure />,
  "Terraform": <IconTerraform />,
  "DBeaver": <IconDbeaver />,
  "Jira": <IconJira />,
  "Confluence": <IconConfluence />,
  "Trello": <IconTrello />,
  "Teams": <IconTeams />,
  "Slack": <IconSlack />
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    // Cards stretch to a uniform height per row. SKILL_CATEGORIES is ordered so
    // that same-height cards share a row, which keeps the stretch from showing.
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
                  <span
                    aria-hidden="true"
                    className={`${ICON_SIZE} flex items-center shrink-0 ${
                      NEEDS_LIGHT_CHIP.has(skill)
                        ? "dark:bg-white dark:rounded-[4px] dark:p-0.5 dark:box-content"
                        : ""
                    }`}
                  >
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
