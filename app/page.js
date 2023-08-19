import LandingPageGreeting from "./components/LandingPageGreeting";
import AboutMeSection from "./components/AboutMeSection";
import ViewResumeSection from "./components/ViewResumeSection";
import LinksBar from "./components/LinksBar";
import InterestsSection from "./components/InterestsSection";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main>
      <LandingPageGreeting />
      <AboutMeSection />
      <InterestsSection />
      <LinksBar />
      <ViewResumeSection />
    </main>
  );
}
