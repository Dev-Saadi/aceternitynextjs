// app/page.tsx (Homepage)
import HeroSection from "@/components/HeroSection";
import FeatureBanner from "@/components/FeatureBanner";
import GalleryCard from "@/components/GalleryCard";
import PricingRange from "@/components/PricingRange";
import FAQSection from "@/components/FaqSection";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <HeroSection /> */}
      <GalleryCard />
      <FeatureBanner />
      <PricingRange />
      <Blog />
      <FAQSection />
      <Footer />
    </>
  );
}
