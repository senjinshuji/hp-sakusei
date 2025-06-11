import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BusinessSection from '@/components/BusinessSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BusinessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
