import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StoryIntro from "@/components/StoryIntro";
import ProcessSection from "@/components/ProcessSection";
import CellarSection from "@/components/CellarSection";
import VideoSection from "@/components/VideoSection";
import HeritageSection from "@/components/HeritageSection";
import CommunitySection from "@/components/CommunitySection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StoryIntro />
        <ProcessSection />
        <CellarSection />
        <VideoSection />
        <HeritageSection />
        <CommunitySection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
