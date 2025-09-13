import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Zap, Target, Award, Calendar } from "lucide-react";

const MyStats = () => {
  const statsData = {
    totalAnalyses: 127,
    creditsRemaining: 850,
    accuracyRate: 87.5,
    successfulPredictions: 98,
    avgReturnRate: 24.7,
    memberSince: "March 2024",
    rank: 12,
    totalUsers: 2847
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neon-green mb-2">My Statistics</h1>
        <p className="text-muted-foreground">Track your analysis performance and account details</p>
      </div>

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
            <CardTitle className="text-sm font-medium">Credits Remaining</CardTitle>
            <Target className="h-4 w-4 text-neon-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-cyan">{statsData.creditsRemaining}</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-purple/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-neon-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-purple">{statsData.accuracyRate}%</div>
            <p className="text-xs text-muted-foreground">
              Above average (74%)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-neon-green/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
            <Award className="h-4 w-4 text-neon-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neon-green">#{statsData.rank}</div>
            <p className="text-xs text-muted-foreground">
              of {statsData.totalUsers.toLocaleString()} users
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Stats */}
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
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Account Information</CardTitle>
            <CardDescription>Your account details and membership</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Member Since</span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{statsData.memberSince}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Subscription Tier</span>
              <Badge className="bg-gradient-neon text-black font-medium">
                Pro Trader
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm">Next Credit Refill</span>
              <span className="text-sm text-muted-foreground">7 days</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyStats;