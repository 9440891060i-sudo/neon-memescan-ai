import { Button } from "@/components/ui/button";
import { MessageCircle, Send, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-neon-green/15 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-purple/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-neon-purple/20 rotate-45"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-neon-green/20 rounded-full"></div>
      <div className="absolute top-1/3 left-20 w-24 h-24 bg-neon-cyan/5 rotate-12"></div>
      
      {/* Light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/20 to-neon-cyan/0"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-neon-purple/0 via-neon-purple/20 to-neon-purple/0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join the <span className="text-neon-green">Klux</span> Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get early insights, vote on features, and ride the next meme coin wave together.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-12">
            {/* Discord */}
            <a 
              href="#" 
              className="group"
              aria-label="Join our Discord"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all duration-200">
                <MessageCircle className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="#" 
              className="group"
              aria-label="Join our Telegram"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all duration-200">
                <Send className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
              </div>
            </a>

            {/* X */}
            <a 
              href="#" 
              className="group"
              aria-label="Follow us on X"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all duration-200">
                <svg className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}