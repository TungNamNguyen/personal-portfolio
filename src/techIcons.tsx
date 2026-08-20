import type { ReactNode } from "react";
import { Database } from "lucide-react";

/*
  Every technology mark the site shows, in one place. Skills and Projects both
  read from it, so a tool named in a project card is drawn the same way as the
  same tool listed under Skills.

  `~icons/*` is resolved by unplugin-icons at build time (see vite.config.ts) and
  inlined as SVG — no runtime icon library, and only imported icons are bundled.
*/

// Full-colour brand marks.
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
import IconMysqlFull from "~icons/logos/mysql";
import IconSnowflake from "~icons/logos/snowflake-icon";
import IconRedshift from "~icons/logos/aws-redshift";
import IconGit from "~icons/logos/git-icon";
import IconDocker from "~icons/logos/docker-icon";
import IconAzure from "~icons/logos/microsoft-azure";
import IconTerraform from "~icons/logos/terraform-icon";
import IconJira from "~icons/logos/jira";
import IconConfluence from "~icons/logos/confluence";
import IconTrello from "~icons/logos/trello";
import IconTeams from "~icons/logos/microsoft-teams";
import IconSlack from "~icons/logos/slack-icon";
import IconSqlServer from "~icons/devicon/microsoftsqlserver";
import IconDbeaver from "~icons/devicon/dbeaver";
import IconSqlite from "~icons/devicon/sqlite";
import IconOpenApi from "~icons/logos/openapi-icon";

// Monochrome marks: these inherit colour from the wrapper, tinted per theme.
import IconDatabricks from "~icons/simple-icons/databricks";
import IconAws from "~icons/simple-icons/amazonwebservices";
import IconClickHouse from "~icons/simple-icons/clickhouse";
import IconMinio from "~icons/simple-icons/minio";
import IconSqlAlchemy from "~icons/simple-icons/sqlalchemy";

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

export const TECH_ICONS: Record<string, ReactNode> = {
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
  /*
    The orange in MySQL's brand lives only in the wordmark half of the logo —
    the dolphin on its own is teal. The square dolphin-only marks therefore have
    no orange at all, which is why this uses the full 1.47:1 lockup and gives it
    a width to match, rather than letting it letterbox into a square box at two
    thirds the height of every icon beside it.
  */
  "MySQL": <IconMysqlFull className="h-[1em] w-auto" />,
  "SQL Server": <IconSqlServer />,
  // ClickHouse's yellow is drawn for dark grounds and disappears on the light
  // pill, so the light theme takes the black half of the same brand pair.
  "ClickHouse": <span className="text-slate-900 dark:text-[#FAFF69]"><IconClickHouse /></span>,
  "Snowflake": <IconSnowflake />,
  "Redshift": <IconRedshift />,
  "Databricks": <span className="text-[#FF3621]"><IconDatabricks /></span>,
  "Fabric": <LocalIcon src="/icons/microsoft-fabric.svg" />,
  "Git": <IconGit />,
  "Docker": <IconDocker />,
  // Compose ships with Docker and has no mark of its own.
  "Docker Compose": <IconDocker />,
  "MinIO": <span className="text-[#C72E49] dark:text-[#E8798D]"><IconMinio /></span>,
  "SQLite": <IconSqlite />,
  "SQLAlchemy": <span className="text-[#B4372E] dark:text-[#E08C82]"><IconSqlAlchemy /></span>,
  "OpenAPI": <IconOpenApi />,
  // Full-colour MySQL and AWS are dark-ink marks drawn for light backgrounds:
  // on the dark pill the "aws" wordmark falls under 3:1 and effectively
  // vanishes. Monochrome version instead, carrying a brand colour per theme.
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

/**
 * Renders the mark for a technology, or nothing when the set has none — model
 * names like YOLOv8 and MoveNet have no logo, and a placeholder would say less
 * than the gap does. Icons are sized by the wrapper's font-size, so every glyph
 * scales off `1em`.
 */
export function TechIcon({ name, className = "text-[16px]" }: { name: string; className?: string }) {
  const icon = TECH_ICONS[name];
  if (!icon) return null;
  return (
    <span className={`${className} flex items-center shrink-0`} aria-hidden="true">
      {icon}
    </span>
  );
}
