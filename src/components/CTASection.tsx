import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Twitter, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
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
          <div className="flex justify-center gap-8 mb-12">
            {/* Discord */}
            <a 
              href="#" 
              className="group relative"
              aria-label="Join our Discord"
            >
              <div className="w-20 h-20 bg-gradient-card rounded-2xl border border-neon-purple/30 flex items-center justify-center group-hover:border-neon-purple/60 transition-all duration-300 group-hover:scale-110 neon-glow-purple">
                <MessageCircle className="w-10 h-10 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground group-hover:text-neon-purple transition-colors duration-300">
                Discord
              </span>
            </a>

            {/* Telegram */}
            <a 
              href="#" 
              className="group relative"
              aria-label="Join our Telegram"
            >
              <div className="w-20 h-20 bg-gradient-card rounded-2xl border border-neon-cyan/30 flex items-center justify-center group-hover:border-neon-cyan/60 transition-all duration-300 group-hover:scale-110 neon-glow-cyan">
                <Send className="w-10 h-10 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300">
                Telegram
              </span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="#" 
              className="group relative"
              aria-label="Follow us on X"
            >
              <div className="w-20 h-20 bg-gradient-card rounded-2xl border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green/60 transition-all duration-300 group-hover:scale-110 neon-glow-green">
                <Twitter className="w-10 h-10 text-neon-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground group-hover:text-neon-green transition-colors duration-300">
                X (Twitter)
              </span>
            </a>
          </div>

          {/* Main CTA Button */}
          <div className="mt-16">
            <Button 
              variant="neon-outline" 
              size="lg" 
              className="px-12 py-4 text-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                Join the Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">2.4K</div>
              <div className="text-sm text-muted-foreground">Discord Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">5.1K</div>
              <div className="text-sm text-muted-foreground">Telegram Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">8.3K</div>
              <div className="text-sm text-muted-foreground">X Followers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}