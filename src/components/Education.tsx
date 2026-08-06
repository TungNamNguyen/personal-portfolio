import { GraduationCap } from "lucide-react";
import TimelineSection from "./TimelineSection";
import { EDUCATION } from "../constants";

export default function Education() {
  return (
    <TimelineSection
      id="education"
      heading="Education"
      subtitleIcon={<GraduationCap size={16} />}
      entries={EDUCATION}
    />
  );
}
