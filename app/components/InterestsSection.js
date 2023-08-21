import interestsStyles from "../../styles/InterestsSection.module.css";
import InterestItem from "./InterestItem";

export default function InterestsSection() {
  const videosText = "test";

  return (
    <div className={interestsStyles.container}>
      <h1 className={interestsStyles.title}>Some Things I Find Interesting</h1>
      <InterestItem text={videosText} />
    </div>
  );
}
