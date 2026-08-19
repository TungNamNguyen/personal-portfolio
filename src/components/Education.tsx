import { GraduationCap } from "lucide-react";
import TimelineSection from "./TimelineSection";
import { EDUCATION } from "../constants";
import { UI } from "../i18n";

export default function Education() {
  return (
    <TimelineSection
      id="education"
      heading={UI.education}
      subtitleIcon={<GraduationCap size={16} />}
      entries={EDUCATION}
    />
  );
}
