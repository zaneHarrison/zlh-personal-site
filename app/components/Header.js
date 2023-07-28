import headerStyles from "../../styles/Header.module.css";
import buttonStyles from "../../styles/Button.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={headerStyles["flex-container"]}>
      <div className={headerStyles["flex-child"]}>
        <Link href="/">
          <button className={buttonStyles["nav-button"]}>Home</button>
        </Link>
      </div>
      <div className={headerStyles["flex-child"]}>
        <Link href="/about">
          <button className={buttonStyles["nav-button"]}>About</button>
        </Link>
      </div>
      <div className={headerStyles["flex-child"]}>
        <Link href="/about">
          <button className={buttonStyles["nav-button"]}>Something</button>
        </Link>
      </div>
      <div className={headerStyles["flex-child"]}>
        <Link href="/about">
          <button className={buttonStyles["nav-button"]}>Something</button>
        </Link>
      </div>
    </div>
  );
}
