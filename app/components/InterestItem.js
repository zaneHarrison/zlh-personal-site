import Link from "next/link";
import styles from "../../styles/InterestItem.module.css";

export default function InterestItem({ text, path }) {
  return (
    <div className={styles["interest-item"]}>
      <Link className={styles.link} href={path}>
        {text}
      </Link>
    </div>
  );
}
