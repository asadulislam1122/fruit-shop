import Banner from "@/Home/Banner";
import BestFood from "@/Home/BestFood";
import Card3 from "@/Home/Card3";
import FeaturesSection from "@/Home/Feture";
import HeroSection from "@/Home/HeroSection";
import MarqueeSection from "@/Home/MarqueeSection";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Card3></Card3>
      <FeaturesSection></FeaturesSection>
      <BestFood></BestFood>
      <HeroSection></HeroSection>
      <MarqueeSection></MarqueeSection>
    </main>
  );
}
