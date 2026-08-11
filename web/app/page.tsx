import CallToAction from "./components/CallToAction";
import FeaturedEvents from "./components/FeaturedEvents";
import FounderPreview from "./components/FounderPreview";
import Hero from "./components/Hero";
import ShortIntro from "./components/ShortIntro";
import VisionMission from "./components/VisionMission";
import WelcomeMessage from "./components/WelcomeMessage";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WelcomeMessage />
      <VisionMission/>
      <ShortIntro/>
      <WhatWeDo/>
      <FeaturedEvents/>
      <FounderPreview/>
      <CallToAction/>
    </main>
  );
}