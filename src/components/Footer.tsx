export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 space-y-3">
            <h3 className="text-2xl font-bold text-foreground">
              Klux
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI-powered meme coin intelligence for early opportunity detection.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">Leaderboard</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Klux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
