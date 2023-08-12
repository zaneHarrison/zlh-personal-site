import aboutMeStyles from "../../styles/AboutMeSection.module.css";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className={aboutMeStyles.container} id="about-me-container">
      <div className={aboutMeStyles["about-me-text"]} id="about-me-text">
        <h1>A Bit About Me</h1>
        <hr className={aboutMeStyles["horizontal-line"]}></hr>
        <p className={aboutMeStyles["about-me-p-text"]}>
          I'm from Tyler, TX and am currently in my senior year at Duke
          University. I enjoy biking, reading and writing, learning about web
          development, exploring new music, and playing the piano.
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
