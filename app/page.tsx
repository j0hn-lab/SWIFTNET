// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import Blog from "@/components/Blog";
import GetConnected from "@/components/GetConnected";
import AboutUs from "@/components/AboutUs";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDashboard from "@/components/SectionDashboard";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Packages />
      <Features />
      <Coverage />
      <Blog />
      <AboutUs />
      <Support />
      <GetConnected />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <SectionDashboard />
    </main>
  );
}