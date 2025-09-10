import MemeCoinTicker from "@/components/MemeCoinTicker";
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
      <main className="pt-16">
        <HeroSection />
        <DashboardPreview />
        <HowItWorks />
        <MemeCoinDisplay />
        <PricingSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
