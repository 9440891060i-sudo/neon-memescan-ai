import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import PerformancePreview from "@/components/PerformancePreview";
import MemeCoinDisplay from "@/components/MemeCoinDisplay";
import DownloadExtension from "@/components/DownloadExtension";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
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
