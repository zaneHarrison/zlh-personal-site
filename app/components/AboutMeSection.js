import aboutMeStyles from "../../styles/AboutMeSection.module.css";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className={aboutMeStyles.container} id="about-me-container">
      <div className={aboutMeStyles["about-me-text"]} id="about-me-text">
        <h1>About Me</h1>
        <p className={aboutMeStyles["about-me-p-text"]}>
          This is where I'll put some about me text. Talk about my education,
          interests, and whatever else I feel like putting here!
        </p>
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
