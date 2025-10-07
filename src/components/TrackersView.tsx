import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Twitter, Bell, TrendingUp, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const twitterAlerts = [
  {
    id: 1,
    source: "Twitter",
    account: "@CryptoWhale",
    followers: "250K",
    message: "Just spotted massive accumulation in $PEPE. Watching closely 👀",
    timestamp: "2m ago",
    sentiment: "bullish",
    engagement: "5.2K"
  },
  {
    id: 2,
    source: "Twitter",
    account: "@DeFiAlerts",
    followers: "180K",
    message: "🚨 Large wallet movement detected: 50M tokens transferred to exchange",
    timestamp: "8m ago",
    sentiment: "bearish",
    engagement: "3.8K"
  },
  {
    id: 3,
    source: "Twitter",
    account: "@MemeCoinKing",
    followers: "320K",
    message: "New gem found! Contract: 0x... CA is clean, liquidity locked ✅",
    timestamp: "15m ago",
    sentiment: "bullish",
    engagement: "7.1K"
  }
];

const communityAlerts = [
  {
    id: 1,
    type: "Large Community Alert",
    title: "Whale Activity Detected",
    description: "3 major wallets accumulated 15M tokens in the last hour",
    severity: "high",
    coin: "BONK",
    timestamp: "5m ago",
    impact: "+12% price movement"
  },
  {
    id: 2,
    type: "Large Community Alert",
    title: "Exchange Listing Rumors",
    description: "Community discussing potential Binance listing for $FLOKI",
    severity: "medium",
    coin: "FLOKI",
    timestamp: "12m ago",
    impact: "Speculation phase"
  },
  {
    id: 3,
    type: "Large Community Alert",
    title: "Dev Team Active",
    description: "Multiple GitHub commits detected in the last 24h",
    severity: "low",
    coin: "SHIB",
    timestamp: "22m ago",
    impact: "Development active"
  },
  {
    id: 4,
    type: "Large Community Alert",
    title: "Social Buzz Spike",
    description: "420% increase in social mentions across platforms",
    severity: "high",
    coin: "PEPE",
    timestamp: "30m ago",
    impact: "+8% price movement"
  }
];

const trendingTopics = [
  { tag: "#MemeSeason", mentions: "45K", change: "+180%" },
  { tag: "#DogeCoin", mentions: "38K", change: "+92%" },
  { tag: "#PepeArmy", mentions: "32K", change: "+156%" },
  { tag: "#ShibaInu", mentions: "28K", change: "+73%" }
];

export function TrackersView() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Community Trackers
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Real-time monitoring of social signals, whale movements, and community sentiment
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Alerts</p>
                <p className="text-3xl font-bold text-white mt-1">24</p>
              </div>
              <Bell className="w-8 h-8 text-neon-green" />
            </div>
            <p className="text-xs text-gray-500 mt-2">+6 in last hour</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Twitter Signals</p>
                <p className="text-3xl font-bold text-white mt-1">142</p>
              </div>
              <Twitter className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">+38 today</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Whale Moves</p>
                <p className="text-3xl font-bold text-white mt-1">18</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">+5 last 24h</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">High Priority</p>
                <p className="text-3xl font-bold text-white mt-1">8</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Twitter Feed */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  Twitter Signals
                </CardTitle>
                <Badge variant="outline" className="bg-blue-400/10 text-blue-400 border-blue-400/20">
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {twitterAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-4 bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-700 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {alert.account[1]}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{alert.account}</p>
                        <p className="text-xs text-gray-500">{alert.followers} followers</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={alert.sentiment === "bullish" 
                        ? "bg-green-500/10 text-green-400 border-green-500/20" 
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                      }
                    >
                      {alert.sentiment}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{alert.message}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{alert.timestamp}</span>
                    <div className="flex items-center gap-4">
                      <span>{alert.engagement} engagement</span>
                      <Button variant="ghost" size="sm" className="h-7 text-gray-400 hover:text-white">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Large Community Alerts */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertCircle className="w-5 h-5 text-orange-400" />
                Large Community Alerts (LCA)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {communityAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-4 bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline"
                        className={
                          alert.severity === "high" 
                            ? "bg-red-500/10 text-red-400 border-red-500/20" 
                            : alert.severity === "medium"
                            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                            : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        }
                      >
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="bg-gray-900 text-gray-300 border-gray-700">
                        ${alert.coin}
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">{alert.timestamp}</span>
                  </div>
                  
                  <h4 className="font-semibold text-white mb-1">{alert.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{alert.description}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Impact: <span className="text-neon-green">{alert.impact}</span></span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-neon-green" />
                Trending Now
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {trendingTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                >
                  <div>
                    <p className="font-semibold text-white">{topic.tag}</p>
                    <p className="text-xs text-gray-500">{topic.mentions} mentions</p>
                  </div>
                  <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green/20">
                    {topic.change}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-black border-gray-800">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-black font-semibold">
                <Bell className="w-4 h-4 mr-2" />
                Configure Alerts
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900">
                <Twitter className="w-4 h-4 mr-2" />
                Connect Twitter
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
