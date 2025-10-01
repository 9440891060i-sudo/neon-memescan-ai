import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, TrendingDown, Zap, Target, Award, Calendar, Users, CreditCard, Activity, DollarSign } from "lucide-react";
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

  // Mock financial performance data
  const financialData = [
    { month: 'Jan', spent: 450, lost: 200, saved: 680 },
    { month: 'Feb', spent: 380, lost: 150, saved: 920 },
    { month: 'Mar', spent: 520, lost: 180, saved: 1200 },
    { month: 'Apr', spent: 400, lost: 120, saved: 980 },
    { month: 'May', spent: 610, lost: 250, saved: 1400 },
    { month: 'Jun', spent: 480, lost: 160, saved: 1100 },
  ];

  const totalSpent = financialData.reduce((acc, curr) => acc + curr.spent, 0);
  const totalLost = financialData.reduce((acc, curr) => acc + curr.lost, 0);
  const totalSaved = financialData.reduce((acc, curr) => acc + curr.saved, 0);
  const netProfit = totalSaved - totalSpent - totalLost;

  const getUserInitials = () => {
    if (!user?.username) return "U";
    return user.username.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="w-full space-y-8">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Your performance overview and account details</p>
        </div>

        {/* User Profile Section */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gray-900 text-white text-lg font-semibold">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{user?.username}</h3>
                <p className="text-sm text-gray-400">{user?.email}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-neon-green" />
                    <span className="text-sm text-neon-green font-semibold">{statsData.creditsRemaining} credits</span>
                  </div>
                  <Badge className="bg-gray-900 text-white font-medium border border-gray-800">
                    Pro Trader
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-black border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Analyses</CardTitle>
            <Zap className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{statsData.totalAnalyses}</div>
            <p className="text-xs text-gray-500">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{statsData.accuracyRate}%</div>
            <p className="text-xs text-gray-500">
              Above average (74%)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Global Rank</CardTitle>
            <Award className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">#{statsData.rank}</div>
            <p className="text-xs text-gray-500">
              of {statsData.totalUsers.toLocaleString()} users
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Credits Used</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{statsData.totalAnalyses * 5}</div>
            <p className="text-xs text-gray-500">
              This month
            </p>
          </CardContent>
        </Card>
        </div>

        {/* Financial Performance & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              Financial Performance
            </CardTitle>
            <CardDescription>Your money spent vs lost vs saved</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-950 rounded-lg border border-gray-900">
                <div className="text-sm text-gray-400">Net Profit</div>
                <div className={`text-lg font-bold ${netProfit >= 0 ? 'text-neon-green' : 'text-red-400'}`}>
                  {netProfit >= 0 ? '+' : ''}${netProfit.toLocaleString()}
                </div>
              </div>
              <div className="p-3 bg-gray-950 rounded-lg border border-gray-900">
                <div className="text-sm text-gray-400">ROI</div>
                <div className="text-lg font-bold text-white">
                  +{((netProfit / totalSpent) * 100).toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-48 w-full bg-gray-950 rounded-lg border border-gray-900 p-4 flex items-end justify-between">
              {financialData.map((month, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="flex flex-col justify-end h-32 gap-1">
                    <div 
                      className="w-8 bg-gray-600 rounded-t" 
                      style={{ height: `${(month.saved / 1500) * 100}%` }}
                    />
                    <div 
                      className="w-8 bg-gray-700 rounded" 
                      style={{ height: `${(month.spent / 1500) * 80}%` }}
                    />
                    <div 
                      className="w-8 bg-gray-800 rounded-b" 
                      style={{ height: `${(month.lost / 1500) * 60}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{month.month}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <span>Saved: ${totalSaved.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-700 rounded-full" />
                <span>Spent: ${totalSpent.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <span>Lost: ${totalLost.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Performance Breakdown</CardTitle>
            <CardDescription>Your analysis success metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Successful Predictions</span>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-gray-900 text-white border-gray-800">
                  {statsData.successfulPredictions}
                </Badge>
                <TrendingUp className="w-4 h-4 text-neon-green" />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Failed Predictions</span>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  {statsData.totalAnalyses - statsData.successfulPredictions}
                </Badge>
                <TrendingDown className="w-4 h-4 text-red-400" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Avg. Return Rate</span>
              <Badge className="bg-gray-900 text-white border-gray-800">
                +{statsData.avgReturnRate}%
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">AI vs Manual Picks</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-white">AI Picks: {statsData.aiPicks}%</span>
                  <span className="text-gray-400">Manual: {statsData.manualPicks}%</span>
                </div>
                <Progress value={statsData.aiPicks} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Credit Usage History</CardTitle>
            <CardDescription>Recent credit transactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {statsData.creditHistory.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-950 rounded-lg border border-gray-900">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-white">{transaction.type}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-gray-400 border-gray-700">
                  -{transaction.used} credits
                </Badge>
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Member Since</span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">{statsData.memberSince}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-400">Next Credit Refill</span>
                <span className="text-sm text-gray-500">7 days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}