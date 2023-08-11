import ResumeDownloadButton from "./DownloadResumeButton";
import DownloadResumeStyles from "../../styles/DownloadResumeSection.module.css";

export default function DownloadResumeSection() {
  return (
    <div
      className={DownloadResumeStyles["container"]}
      id="download-resume-section"
    >
      <ResumeDownloadButton />
    </div>
  );
}
