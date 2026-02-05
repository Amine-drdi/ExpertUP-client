import ServicesSection from "@/components/ServicesSection";
import Hero from "../components/Hero";
import InsightSection from "@/components/InsightSection";
import AccompagnementProcess from "@/components/AccompagnementProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";


export default function HomePage() {
  return (
    <>
      <Hero />
       <ServicesSection />
      <InsightSection/>
      <AccompagnementProcess/>
      <TestimonialsSection/>
      <FaqSection/>
      
    </>
  );
}
