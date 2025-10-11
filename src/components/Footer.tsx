import { MessageCircle, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
              Klux
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered meme coin intelligence platform for early opportunity detection.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="/leaderboard" className="hover:text-foreground transition-colors">Leaderboard</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/support" className="hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Klux. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors group"
              aria-label="Discord"
            >
              <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors group"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors group"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
