import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustLogos from "@/components/landing/TrustLogos";
import Benefits from "@/components/landing/Benefits";
import Process from "@/components/landing/Process";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <TrustLogos />
        <Benefits />
        <Process />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
