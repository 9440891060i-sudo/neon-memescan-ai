import MemeCoinTicker from "@/components/MemeCoinTicker";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import MemeCoinDisplay from "@/components/MemeCoinDisplay";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MemeCoinTicker />
      <Header />
      <main className="pt-28">
        <HeroSection />
        <DashboardPreview />
        <HowItWorks />
        <MemeCoinDisplay />
        <div id="pricing">
          <PricingSection />
        </div>
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
