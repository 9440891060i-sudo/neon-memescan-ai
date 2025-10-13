import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Newspaper, Users, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrackersView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {/* Twitter Tracking */}
      <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-colors">
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-muted z-10"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="flex-1 p-8 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-muted/30">
              <Twitter className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Twitter Tracking</h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Active Monitors</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Tracked Accounts</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Recent Alerts</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-full h-12 border-2 border-dashed border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 text-neon-green transition-all"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </Card>

      {/* LC Tracking */}
      <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-colors">
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-muted z-10"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="flex-1 p-8 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-muted/30">
              <Users className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">LC Tracking</h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Community Signals</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Active Channels</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Recent Updates</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-full h-12 border-2 border-dashed border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 text-neon-green transition-all"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </Card>

      {/* News Tracking */}
      <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-colors">
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-muted z-10"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="flex-1 p-8 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-muted/30">
              <Newspaper className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">News Tracking</h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">News Sources</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Breaking News</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-6 bg-muted/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">Daily Articles</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-full h-12 border-2 border-dashed border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 text-neon-green transition-all"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
