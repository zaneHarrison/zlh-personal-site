import styles from "../../styles/InterestItem.module.css";

export default function InterestItem({ text }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}
