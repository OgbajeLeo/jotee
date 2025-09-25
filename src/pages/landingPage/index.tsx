import { Footer, Navbar, Cart } from "../../components";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import ProductsShowcase from "./sections/ProductsShowcase";
import BrandsSection from "./sections/BrandsSection";
import StatsSection from "./sections/StatsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";

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
      <Cart />
    </div>
  );
};

export default LandingPage;
