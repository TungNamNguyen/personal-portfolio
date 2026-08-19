import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";
import { useLang } from "../i18n";
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
// Superset is handled by SupersetIcon below rather than an icon-set import.
import IconMetabase from "~icons/logos/metabase";
import IconPostgres from "~icons/logos/postgresql";
import IconMysql from "~icons/simple-icons/mysql";
import IconSnowflake from "~icons/logos/snowflake-icon";
import IconGit from "~icons/logos/git-icon";
import IconDocker from "~icons/logos/docker-icon";
import IconAws from "~icons/simple-icons/amazonwebservices";
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
 * Apache Superset's mark is 2:1, so the icon-set version renders twice as wide
 * as everything else. Same artwork, re-centred in a square viewBox: full width,
 * letterboxed vertically. The loop uses currentColor because the official
 * #484848 grey sits at 1.13:1 on the dark pill background; the cyan is fixed.
 */
const SupersetIcon = () => (
  // 1.2em matches the footprint unplugin-icons gives every other icon.
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1.2em" height="1.2em">
    <g transform="translate(0 64)">
      <path fill="currentColor" d="M190.219 0c-21.95 0-42.17 12.349-61.71 33.925C109.307 12.01 88.749 0 65.78 0C27.751 0 0 27.14 0 63.678s27.75 63.338 65.781 63.338c23.375 0 41.49-10.958 61.71-32.806c19.541 21.916 39.421 32.874 62.728 32.874c38.03-.068 65.781-26.767 65.781-63.406C256 27.038 228.25 0 190.219 0M66.052 88.68c-16.114 0-25.715-10.618-25.715-24.663s9.601-24.969 25.715-24.969c13.57 0 24.664 10.924 36.674 25.647c-11.331 13.706-23.307 23.986-36.674 23.986m123.013 0c-13.366 0-24.663-10.618-36.673-24.663c12.35-14.724 22.968-24.969 36.673-24.969c16.115 0 25.614 11.06 25.614 24.969s-9.499 24.664-25.614 24.664" />
      <path fill="#20a7c9" d="m156.124 117.958l25.58-30.533c-10.178-3.053-19.575-12.213-29.312-23.578l-24.9 30.363a111.9 111.9 0 0 0 28.632 23.748m-27.615-84.067a115.1 115.1 0 0 0-28.463-24.29L74.432 40.473c9.737 3.392 18.354 12.145 27.513 23.306l1.018.713z" />
    </g>
  </svg>
);

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
  "Superset": <span className="text-[#484848] dark:text-slate-300"><SupersetIcon /></span>,
  "Metabase": <IconMetabase />,
  "Postgres": <IconPostgres />,
  // Full-colour MySQL and AWS are dark-ink marks drawn for light backgrounds:
  // on the dark pill the dolphin and the "aws" wordmark both fall under 3:1 and
  // effectively vanish. Monochrome versions instead, carrying a brand colour per
  // theme — the same trick "SQL" and "Superset" already use below.
  "MySQL": <span className="text-[#00758F] dark:text-[#4DB6D6]"><IconMysql /></span>,
  "SQL Server": <IconSqlServer />,
  "Snowflake": <IconSnowflake />,
  "Databricks": <span className="text-[#FF3621]"><IconDatabricks /></span>,
  "Fabric": <LocalIcon src="/icons/microsoft-fabric.svg" />,
  "Git": <IconGit />,
  "Docker": <IconDocker />,
  "AWS": <span className="text-[#232F3E] dark:text-[#FF9900]"><IconAws /></span>,
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
  const { t } = useLang();

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
          className="space-y-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-none transition-all duration-200"
        >
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">{t(category.name)}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill, j) => (
              <span
                key={j}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-600 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
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
