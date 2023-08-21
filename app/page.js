import LandingPageGreeting from "./components/LandingPageGreeting";
import AboutMeSection from "./components/AboutMeSection";
import LinksBar from "./components/LinksBar";
import InterestsSection from "./components/InterestsSection";

export default function Home() {
  return (
    <main>
      <LandingPageGreeting />
      <AboutMeSection />
      <InterestsSection />
      <LinksBar />
    </main>
  );
}
