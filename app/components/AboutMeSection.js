import aboutMeStyles from "../../styles/AboutMeSection.module.css";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className={aboutMeStyles.container} id="about-me-container">
      <div id="about-me-text"></div>
      <div id="about-me-image">
        <Image
          src="/../../public/headshot.jpg"
          width={200}
          height={200}
          alt="Photo of Zane Harrison"
        />
      </div>
    </div>
  );
}
