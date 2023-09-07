import BlogSection from "../components/HomeComponents/BlogSection/BlogSection";
import ClientRateSection from "../components/HomeComponents/ClientRateSection/ClientRateSection";
import IntroSection from "../components/HomeComponents/IntroSection/IntroSection";
import TitleSection from "../components/HomeComponents/TitleSection/TitleSection";

export default function HomePage() {
  return (
    <>
      <TitleSection />
      <IntroSection />
      <ClientRateSection />
      <BlogSection />
    </>
  );
}
