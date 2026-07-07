import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQs from "@/components/sections/FAQs";
import FinalCTA from "@/components/sections/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <BeforeAfter />
      <Stats />
      <Testimonials />
      <Team />
      <FAQs />
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
}
