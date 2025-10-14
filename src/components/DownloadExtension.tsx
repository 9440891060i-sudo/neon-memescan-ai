import { Button } from "@/components/ui/button";
import { Download, Chrome } from "lucide-react";

export default function DownloadExtension() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-terminal-dark/30"></div>
      
      {/* Abstract design elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-neon-cyan/20 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[150px]"></div>
      
      {/* Animated circles */}
      <div className="absolute top-40 right-1/4 w-32 h-32 border-2 border-neon-purple/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-neon-cyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm">
            <Chrome className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">Browser Extension</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
              Klux Extension
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time meme coin alerts and instant analysis directly in your browser. 
            Track opportunities without missing a beat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-foreground/90 backdrop-blur-xl text-background hover:bg-foreground border border-white/20 h-14 px-8 text-base font-semibold group shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Chrome
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base font-semibold bg-background/40 backdrop-blur-xl border-border/50 hover:bg-background/60 shadow-lg"
            >
              View on Chrome Store
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green"></div>
              <span>Free forever</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
              <span>Real-time alerts</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
              <span>One-click analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
