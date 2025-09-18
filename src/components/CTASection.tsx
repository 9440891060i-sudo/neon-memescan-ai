import { Button } from "@/components/ui/button";
import { MessageCircle, Send, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

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
              className="group relative"
              aria-label="Join our Discord"
            >
              <div className="w-12 h-12 bg-gradient-card rounded-xl border border-neon-purple/20 flex items-center justify-center group-hover:border-neon-purple/40 transition-all duration-300 group-hover:scale-105">
                <MessageCircle className="w-5 h-5 text-neon-purple/60 group-hover:text-neon-purple group-hover:scale-105 transition-all duration-300" />
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="#" 
              className="group relative"
              aria-label="Join our Telegram"
            >
              <div className="w-12 h-12 bg-gradient-card rounded-xl border border-neon-cyan/20 flex items-center justify-center group-hover:border-neon-cyan/40 transition-all duration-300 group-hover:scale-105">
                <Send className="w-5 h-5 text-neon-cyan/60 group-hover:text-neon-cyan group-hover:scale-105 transition-all duration-300" />
              </div>
            </a>

            {/* X */}
            <a 
              href="#" 
              className="group relative"
              aria-label="Follow us on X"
            >
              <div className="w-12 h-12 bg-gradient-card rounded-xl border border-neon-green/20 flex items-center justify-center group-hover:border-neon-green/40 transition-all duration-300 group-hover:scale-105">
                <svg className="w-5 h-5 text-neon-green/60 group-hover:text-neon-green group-hover:scale-105 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
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