import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import MemeCoinDisplay from "@/components/MemeCoinDisplay";
import CTASection from "@/components/CTASection";
import RoboDogMascot from "@/components/RoboDogMascot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-10 sm:pt-16">
        <HeroSection />
        <HowItWorks />
        <DashboardPreview />
        <MemeCoinDisplay />
        <div id="pricing">
          <PricingSection />
        </div>
        <CTASection />
      </main>
      <RoboDogMascot />
    </div>
  );
};

export default Index;
