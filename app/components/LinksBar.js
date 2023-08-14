import linksBarStyles from "../../styles/LinksBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LinksBar() {
  return (
    <div className={linksBarStyles["links-bar-container"]}>
      <h2 className={linksBarStyles.chevron}>&lt;</h2>
      <Link href="https://www.linkedin.com/in/zane-harrison/" target="_blank">
        <Image
          className={linksBarStyles["link-bar-image"]}
          src="/linkedin-logo.png"
          width={100}
          height={100}
          alt="LinkedIn logo"
        ></Image>
      </Link>
      <Link href="https://github.com/zaneHarrison" target="_blank">
        <Image
          className={linksBarStyles["link-bar-image"]}
          src="/github-logo.png"
          width={125}
          height={125}
          alt="GitHub logo"
        ></Image>
      </Link>
      <Link href="https://www.instagram.com/_zane.harrison_/" target="_blank">
        <Image
          className={linksBarStyles["link-bar-image"]}
          src="/instagram-logo.png"
          width={80}
          height={80}
          alt="Instagram logo"
        ></Image>
      </Link>

      <h2 className={linksBarStyles.chevron}>/&gt;</h2>
    </div>
  );
}
