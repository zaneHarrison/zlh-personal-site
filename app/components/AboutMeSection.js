import aboutMeStyles from "../../styles/AboutMeSection.module.css";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className={aboutMeStyles.container} id="about-me-container">
      <div className={aboutMeStyles["about-me-text"]} id="about-me-text">
        <h1>About Me</h1>
        <hr className={aboutMeStyles["horizontal-line"]}></hr>
        <p className={aboutMeStyles["about-me-p-text"]}>
          This is where I'll put some about me text. Talk about my education,
          interests, and whatever else I feel like putting here!
        </p>
        <a
          className={aboutMeStyles["download-resume"]}
          href="/ZaneHarrisonResume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
      <div id="about-me-image">
        <Image
          src="/headshot.jpg"
          width={300}
          height={300}
          alt="Photo of Zane Harrison"
          className={aboutMeStyles.headshot}
        />
      </div>
    </div>
  );
}
