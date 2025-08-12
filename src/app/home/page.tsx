import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Industries from "@/components/sections/Industries";
import VerticalStepper from "@/components/sections/VerticalStepper";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <div className="font-sans">
      <a href="#home" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Industries />
        <VerticalStepper />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


