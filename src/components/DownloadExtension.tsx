import { Button } from "@/components/ui/button";
import { Download, Chrome } from "lucide-react";

export default function DownloadExtension() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-terminal-dark/30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm">
            <Chrome className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">Browser Extension</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
              Extension
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
              <span>Customisable</span>
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
