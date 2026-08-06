import { Building } from "lucide-react";
import TimelineSection from "./TimelineSection";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <TimelineSection
      id="experience"
      heading="Experience"
      subtitleIcon={<Building size={16} />}
      entries={EXPERIENCE}
    />
  );
}
