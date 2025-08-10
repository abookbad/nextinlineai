import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Industries from "@/components/sections/Industries";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <a href="#home" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Industries />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
