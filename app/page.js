import LandingPageGreeting from "./components/LandingPageGreeting";
import AboutMeSection from "./components/AboutMeSection";
import ViewResumeSection from "./components/ViewResumeSection";
import LinksBar from "./components/LinksBar";
import MobileMessage from "./components/MobileMessage";

export default function Home() {
  return (
    <main>
      <MobileMessage />
      <LandingPageGreeting />
      <AboutMeSection />
      <LinksBar />
      <ViewResumeSection />
    </main>
  );
}
