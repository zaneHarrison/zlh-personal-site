import LandingPageGreeting from "./components/LandingPageGreeting";
import AboutMeSection from "./components/AboutMeSection";
import ViewResumeSection from "./components/ViewResumeSection";
import LinksBar from "./components/LinksBar";

export default function Home() {
  return (
    <main>
      <LandingPageGreeting />
      <AboutMeSection />
      <LinksBar />
      <ViewResumeSection />
    </main>
  );
}
