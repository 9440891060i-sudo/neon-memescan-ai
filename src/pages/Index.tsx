import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import PerformancePreview from "@/components/PerformancePreview";
import MemeCoinDisplay from "@/components/MemeCoinDisplay";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <HeroSection />
        <HowItWorks />
        <DashboardPreview />
        <MemeCoinDisplay />
        <PerformancePreview />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
