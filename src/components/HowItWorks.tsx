import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-neon-green">Klux</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Watch our quick explanation video to understand how Klux analyzes meme coins
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center">
                {/* Video Preview/Thumbnail Placeholder */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center group-hover:bg-neon-green/30 transition-all duration-300">
                    <Play className="w-8 h-8 text-neon-green ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How Klux Predicts Moon Shots</h3>
                  <p className="text-muted-foreground">Click to watch the explanation video</p>
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