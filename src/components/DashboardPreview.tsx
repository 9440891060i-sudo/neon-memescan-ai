import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Flame, Activity } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-cyan">AI Dashboard</span> Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time social sentiment meets technical analysis for precise meme coin insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard mockup */}
          <div className="bg-gradient-card rounded-3xl p-8 border border-border neon-glow-cyan shadow-card">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">PEPE Analysis</h3>
                <p className="text-muted-foreground">Contract: 0x6982508145454ce325ddbe47a25d4ec3d2311933</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-neon-green">BULLISH</div>
                <div className="text-sm text-muted-foreground">Confidence: 94.2%</div>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-gradient-card border-neon-green/30">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-muted-foreground">Holders</span>
                </div>
                <div className="text-2xl font-bold text-neon-green">142.3K</div>
                <div className="text-xs text-green-400">+12.4%</div>
              </Card>

              <Card className="p-6 bg-gradient-card border-neon-cyan/30">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm text-muted-foreground">Burned</span>
                </div>
                <div className="text-2xl font-bold text-neon-cyan">41.04%</div>
                <div className="text-xs text-cyan-400">Supply</div>
              </Card>

              <Card className="p-6 bg-gradient-card border-neon-purple/30">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-5 h-5 text-neon-purple" />
                  <span className="text-sm text-muted-foreground">Engagement</span>
                </div>
                <div className="text-2xl font-bold text-neon-purple">8.7/10</div>
                <div className="text-xs text-purple-400">24h Score</div>
              </Card>

              <Card className="p-6 bg-gradient-card border-neon-green/30">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-muted-foreground">Momentum</span>
                </div>
                <div className="text-2xl font-bold text-neon-green">Strong</div>
                <div className="text-xs text-green-400">+89.2%</div>
              </Card>
            </div>

            {/* Chart areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-xl p-6 border border-neon-green/20">
                <h4 className="text-lg font-semibold text-neon-green mb-4">Social Sentiment</h4>
                <div className="h-32 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-lg flex items-end justify-center">
                  <div className="text-center">
                    <div className="w-16 h-12 bg-neon-green/40 rounded-t mb-2"></div>
                    <div className="text-xs text-muted-foreground">Trending Up</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-xl p-6 border border-neon-cyan/20">
                <h4 className="text-lg font-semibold text-neon-cyan mb-4">Technical Indicators</h4>
                <div className="h-32 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-end justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-cyan/40 rounded-t mb-2"></div>
                    <div className="text-xs text-muted-foreground">Strong Buy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="text-center mt-8">
              <Button variant="analyze" size="lg" className="px-12">
                Analyze Your Coin (30 Credits)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}