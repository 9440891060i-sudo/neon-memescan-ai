import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import PerformancePreview from "@/components/PerformancePreview";
import MemeCoinDisplay from "@/components/MemeCoinDisplay";
import DownloadExtension from "@/components/DownloadExtension";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <DashboardPreview />
        <MemeCoinDisplay />
        <PerformancePreview />
        <DownloadExtension />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
