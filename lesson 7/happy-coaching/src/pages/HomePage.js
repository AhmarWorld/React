import BlogSection from "../components/HomeComponents/BlogSection/BlogSection";
import ClientRateSection from "../components/HomeComponents/ClientRateSection/ClientRateSection";
import IntroSection from "../components/IntroSection/IntroSection";
import TitleSection from "../components/HomeComponents/TitleSection/TitleSection";
import TransformSection from "../components/HomeComponents/TransformSection/TransformSection";
import OnlineSection from "../components/HomeComponents/OnlineSection/OnlineSection";

export default function HomePage() {
  return (
    <>
      <TitleSection />
      <IntroSection />
      <ClientRateSection />
      <BlogSection />
      <TransformSection />
      <OnlineSection style={{ fontSize: "16px" }} />
    </>
  );
}
