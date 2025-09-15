import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, TrendingDown, Zap, Target, Award, Calendar, Users, CreditCard, Activity } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function Dashboard() {
  const { user } = useAuthStore();
  
  const statsData = {
    totalAnalyses: 127,
    creditsRemaining: 850,
    accuracyRate: 87.5,
    successfulPredictions: 98,
    avgReturnRate: 24.7,
    memberSince: "March 2024",
    rank: 12,
    totalUsers: 2847,
    aiPicks: 89,
    manualPicks: 38,
    creditHistory: [
      { date: "Dec 15", used: 120, type: "Analysis" },
      { date: "Dec 14", used: 80, type: "Analysis" },
      { date: "Dec 13", used: 200, type: "Premium Analysis" },
    ]
  };

  const getUserInitials = () => {
    if (!user?.username) return "U";
    return user.username.slice(0, 2).toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neon-green mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Your performance overview and account details</p>
      </div>

      {/* User Profile Section */}
      <Card className="bg-gradient-card border-neon-green/20">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Profile Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-neon-green/20 text-neon-green text-lg font-semibold">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">{user?.username}</h3>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-neon-cyan font-semibold">{statsData.creditsRemaining} credits</span>
                </div>
                <Badge className="bg-gradient-neon text-black font-medium">
                  Pro Trader
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-neon-green/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Analyses</CardTitle>
            <Zap className="h-4 w-4 text-neon-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-green">{statsData.totalAnalyses}</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-cyan/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-neon-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-cyan">{statsData.accuracyRate}%</div>
            <p className="text-xs text-muted-foreground">
              Above average (74%)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-purple/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
            <Award className="h-4 w-4 text-neon-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-purple">#{statsData.rank}</div>
            <p className="text-xs text-muted-foreground">
              of {statsData.totalUsers.toLocaleString()} users
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalAnalyses * 5}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Performance Breakdown</CardTitle>
            <CardDescription>Your analysis success metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Successful Predictions</span>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-neon-green/20 text-neon-green">
                  {statsData.successfulPredictions}
                </Badge>
                <TrendingUp className="w-4 h-4 text-neon-green" />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Failed Predictions</span>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-destructive/50 text-destructive">
                  {statsData.totalAnalyses - statsData.successfulPredictions}
                </Badge>
                <TrendingDown className="w-4 h-4 text-destructive" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm">Avg. Return Rate</span>
              <Badge className="bg-neon-purple/20 text-neon-purple">
                +{statsData.avgReturnRate}%
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">AI vs Manual Picks</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-neon-green">AI Picks: {statsData.aiPicks}%</span>
                  <span className="text-neon-cyan">Manual: {statsData.manualPicks}%</span>
                </div>
                <Progress value={statsData.aiPicks} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Credit Usage History</CardTitle>
            <CardDescription>Recent credit transactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {statsData.creditHistory.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-neon-cyan" />
                  <div>
                    <p className="text-sm font-medium">{transaction.type}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-neon-green">
                  -{transaction.used} credits
                </Badge>
              </div>
            ))}
            
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm">Member Since</span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{statsData.memberSince}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Next Credit Refill</span>
                <span className="text-sm text-muted-foreground">7 days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}