import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  DollarSign, 
  Copy, 
  Wallet, 
  Crown,
  Medal,
  Share,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Rewards = () => {
  const { toast } = useToast();
  const [referralCode] = useState("KLUX-REF-X7K9M2");
  
  const leaderboard = [
    { username: "user#4721", points: 15420, referrals: 127, rank: 1 },
    { username: "user#8392", points: 12890, referrals: 98, rank: 2 },
    { username: "user#1256", points: 11340, referrals: 85, rank: 3 },
    { username: "user#7653", points: 9875, referrals: 72, rank: 4 },
    { username: "user#2489", points: 8650, referrals: 63, rank: 5 },
    { username: "user#9127", points: 7420, referrals: 51, rank: 6 },
    { username: "user#3564", points: 6890, referrals: 47, rank: 7 },
    { username: "user#5832", points: 6234, referrals: 42, rank: 8 },
    { username: "user#7419", points: 5675, referrals: 38, rank: 9 },
    { username: "user#8901", points: 4987, referrals: 34, rank: 10 },
  ];

  const userReferrals = [
    { username: "user#8392", plan: "$29", status: "active" },
    { username: "user#5647", plan: "$49", status: "active" },
    { username: "user#1293", plan: "$29", status: "expired" },
    { username: "user#7845", plan: "$49", status: "pending" },
  ];

  const copyReferralLink = () => {
    const referralLink = `https://klux.ai/ref/${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Referral link copied!",
      description: "Share it with friends to earn rewards.",
    });
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-300" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Trophy className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'expired': return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-neon-green/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
            Rewards Hub
          </h1>
          <p className="text-lg text-muted-foreground">
            Earn with KLUX. Refer, grow, and climb the leaderboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Leaderboard & Your Stats */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Leaderboard */}
            <Card className="bg-gradient-card border-neon-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-neon-green" />
                  <div>
                    <CardTitle className="text-2xl">Top Klux Earners</CardTitle>
                    <CardDescription>Leaderboard champions earning the most rewards</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.username}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(user.rank)}
                          <span className="font-mono text-sm text-muted-foreground">#{user.rank}</span>
                        </div>
                        <div>
                          <p className="font-medium">{user.username}</p>
                          <p className="text-sm text-muted-foreground">{user.referrals} referrals</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                          {user.points.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">KLUX points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Stats */}
            <Card className="bg-gradient-card border-neon-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neon-green" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                      2,450
                    </p>
                    <p className="text-sm text-muted-foreground">Your Points</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">Referrals</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-neon-green">$186</p>
                    <p className="text-sm text-muted-foreground">Earned</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-neon-cyan">$24</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to next tier</span>
                    <span className="text-neon-green">68%</span>
                  </div>
                  <Progress value={68} className="h-3" />
                  <p className="text-xs text-muted-foreground">550 more points needed for Premium Tier</p>
                </div>
              </CardContent>
            </Card>

            {/* Current Referrals */}
            <Card className="bg-gradient-card border-neon-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-neon-green" />
                  Current Referrals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userReferrals.map((referral, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-neon-green/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(referral.status)}
                          <span className="font-mono text-sm">{referral.username}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {referral.plan}
                        </Badge>
                      </div>
                      <Badge 
                        variant={referral.status === 'active' ? 'default' : 
                                referral.status === 'pending' ? 'secondary' : 'destructive'}
                        className="capitalize"
                      >
                        {referral.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel - Referral & Payouts */}
          <div className="space-y-6">
            
            {/* Referral Code Section */}
            <Card className="bg-gradient-card border-neon-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share className="w-5 h-5 text-neon-green" />
                  Referral Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-neon-green/20">
                  <p className="font-mono text-center text-lg font-bold text-neon-green">
                    {referralCode}
                  </p>
                </div>
                <Button 
                  onClick={copyReferralLink}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-cyan hover:from-neon-green/80 hover:to-neon-cyan/80 text-black font-semibold"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Referral Link
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Share your link. Earn <span className="text-neon-green font-semibold">30% commission</span> on every subscription.
                </p>
              </CardContent>
            </Card>

            {/* Payouts */}
            <Card className="bg-gradient-card border-neon-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-neon-green" />
                  Payouts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="text-center p-4 rounded-lg bg-background/30 border border-neon-green/10">
                    <p className="text-2xl font-bold text-neon-green">$186.00</p>
                    <p className="text-sm text-muted-foreground">Total Earned</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-background/30 border border-neon-cyan/10">
                    <p className="text-lg font-semibold text-neon-cyan">Jan 15, 2025</p>
                    <p className="text-sm text-muted-foreground">Next Payout Date</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:border-neon-green"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Request Payout
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Minimum payout: $50. Next payout in 12 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;