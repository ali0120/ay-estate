import Hero from "./ui/(components)/home/Hero";
import Discover from "./ui/(components)/home/Discover";
import Simplify from "./ui/(components)/home/Simplify";
import Innovative from "./ui/(components)/home/Innovative";
import Properties from "./ui/(components)/home/Properties";
import Testimonials from "./ui/(components)/home/Testimonials";
import FAQ from "./ui/(components)/home/Faq";
import CTASection from "./ui/(components)/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <Simplify />
      <Innovative />
      <Properties />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
