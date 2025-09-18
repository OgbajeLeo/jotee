import { Footer, Navbar } from "../../components";
import HeroSection from "../../components/sections/HeroSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import ProductsShowcase from "../../components/sections/ProductsShowcase";
import BrandsSection from "../../components/sections/BrandsSection";
import StatsSection from "../../components/sections/StatsSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import CTASection from "../../components/sections/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsShowcase />
      <BrandsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
