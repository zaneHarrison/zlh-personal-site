import interestsStyles from "../../styles/InterestsSection.module.css";
import InterestItem from "./InterestItem";

export default function InterestsSection() {
  return (
    <div className={interestsStyles.container}>
      <h1 className={interestsStyles.title}>Some Things I Find Interesting</h1>
      <div className={interestsStyles["interest-item-list"]}>
        <InterestItem text="YouTube Videos" path="/" />
        <InterestItem text="Reading" path="/" />
        <InterestItem text="Music" path="/" />
      </div>
    </div>
  );
}
