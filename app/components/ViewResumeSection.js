import ViewResumeButton from "./ViewResumeButton";
import ViewResumeStyles from "../../styles/ViewResumeSection.module.css";

export default function ViewResumeSection() {
  return (
    <div className={ViewResumeStyles["container"]} id="view-resume-section">
      <ViewResumeButton />
    </div>
  );
}
