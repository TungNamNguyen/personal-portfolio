import { Building } from "lucide-react";
import TimelineSection from "./TimelineSection";
import { EXPERIENCE } from "../constants";
import { UI } from "../i18n";

export default function Experience() {
  return (
    <TimelineSection
      id="experience"
      heading={UI.experience}
      subtitleIcon={<Building size={16} />}
      entries={EXPERIENCE}
    />
  );
}
