
import About from "./components/About";
import FounderMessage from "./components/FounderMessage";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import Values from "./components/Values";
import VisionMission from "./components/VisionMission";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
       <FounderMessage /> 
      <Pillars />
      <Services />
      <VisionMission />
      <Values />
      <Leadership />
    </>
  );
}