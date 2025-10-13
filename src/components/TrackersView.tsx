import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, Newspaper, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrackersView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Twitter Tracking */}
      <Card className="bg-card border-border h-[600px] flex flex-col">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Twitter className="w-5 h-5" />
              Twitter Tracking
            </CardTitle>
          </div>
          <Button className="w-full mt-4" variant="default">
            Track
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Active Monitors</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Tracked Accounts</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Recent Alerts</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LC Tracking */}
      <Card className="bg-card border-border h-[600px] flex flex-col">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5" />
              LC Tracking
            </CardTitle>
          </div>
          <Button className="w-full mt-4" variant="default">
            Track
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Community Signals</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Active Channels</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Recent Updates</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News Tracking */}
      <Card className="bg-card border-border h-[600px] flex flex-col">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Newspaper className="w-5 h-5" />
              News Tracking
            </CardTitle>
          </div>
          <Button className="w-full mt-4" variant="default">
            Track
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">News Sources</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Breaking News</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Daily Articles</p>
              <p className="text-2xl font-semibold text-foreground">0</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
