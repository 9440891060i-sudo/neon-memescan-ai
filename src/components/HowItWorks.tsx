import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            How <span className="text-neon-green">Klux</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Watch the quick explanation where you&apos;ll understand how klux helps you
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center">
                {/* Video Preview/Thumbnail Placeholder */}
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center group-hover:bg-neon-green/30 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground px-2">Click here to watch</p>
                </div>
                
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}