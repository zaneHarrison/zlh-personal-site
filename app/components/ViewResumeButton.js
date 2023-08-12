import buttonStyles from "../../styles/ResumeButton.module.css";
import Link from "next/link";

export default function ResumeViewButton() {
  return (
    <div className={buttonStyles.container}>
      <Link
        className={buttonStyles["view-resume"]}
        href="/ZaneHarrisonResume.pdf"
        target="_blank"
        open
      >
        <strong>View My Resume</strong>
      </Link>
    </div>
  );
}
