import buttonStyles from "../../styles/ResumeButton.module.css";

export default function ResumeDownloadButton() {
  return (
    <a
      className={buttonStyles["download-resume"]}
      href="/ZaneHarrisonResume.pdf"
      download
    >
      Download My Resume
    </a>
  );
}
