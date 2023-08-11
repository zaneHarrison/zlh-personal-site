import LandingPageGreeting from "./components/LandingPageGreeting";
import AboutMeSection from "./components/AboutMeSection";
import DownloadResumeSection from "./components/DownloadResumeSection";

export default function Home() {
  return (
    <main>
      <LandingPageGreeting />
      <AboutMeSection />
      <DownloadResumeSection />
    </main>
  );
}
