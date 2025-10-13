import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Newspaper, Users, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TrackersView() {
  const [expandedBoxes, setExpandedBoxes] = useState({
    twitter: true,
    lc: true,
    news: true
  });

  const toggleBox = (box: 'twitter' | 'lc' | 'news') => {
    setExpandedBoxes(prev => ({ ...prev, [box]: !prev[box] }));
  };

  const expandedCount = Object.values(expandedBoxes).filter(Boolean).length;
  const gridCols = expandedCount === 3 ? 'md:grid-cols-3' : expandedCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1';

  return (
    <div className="p-8 space-y-8">
      {/* Expanded Boxes */}
      <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
        {/* Twitter Tracking */}
        {expandedBoxes.twitter && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('twitter')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <X className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
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
          </Card>
        )}

        {/* LC Tracking */}
        {expandedBoxes.lc && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('lc')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <X className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
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
          </Card>
        )}

        {/* News Tracking */}
        {expandedBoxes.news && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('news')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <X className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
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
          </Card>
        )}
      </div>

      {/* Collapsed Boxes */}
      {expandedCount < 3 && (
        <div className="flex gap-4 flex-wrap">
          {!expandedBoxes.twitter && (
            <Card 
              onClick={() => toggleBox('twitter')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <Twitter className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">Twitter Tracking</span>
            </Card>
          )}

          {!expandedBoxes.lc && (
            <Card 
              onClick={() => toggleBox('lc')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <Users className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">LC Tracking</span>
            </Card>
          )}

          {!expandedBoxes.news && (
            <Card 
              onClick={() => toggleBox('news')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <Newspaper className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">News Tracking</span>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
