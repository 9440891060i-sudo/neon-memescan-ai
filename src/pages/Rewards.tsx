import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Trophy, 
  Users, 
  DollarSign, 
  Copy, 
  Wallet, 
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
    { username: "user#4721", points: 15420, referrals: 127, earnings: "$2,890", rank: 1 },
    { username: "user#8392", points: 12890, referrals: 98, earnings: "$2,340", rank: 2 },
    { username: "user#1256", points: 11340, referrals: 85, earnings: "$2,120", rank: 3 },
    { username: "user#7653", points: 9875, referrals: 72, earnings: "$1,850", rank: 4 },
    { username: "user#2489", points: 8650, referrals: 63, earnings: "$1,620", rank: 5 },
    { username: "user#9127", points: 7420, referrals: 51, earnings: "$1,380", rank: 6 },
    { username: "user#3564", points: 6890, referrals: 47, earnings: "$1,250", rank: 7 },
    { username: "user#5832", points: 6234, referrals: 42, earnings: "$1,120", rank: 8 },
    { username: "user#7419", points: 5675, referrals: 38, earnings: "$980", rank: 9 },
    { username: "user#8901", points: 4987, referrals: 34, earnings: "$850", rank: 10 },
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'expired': return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return null;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'pending': return 'secondary';
      case 'expired': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="w-full space-y-8">
        

        {/* Tabs */}
        <Tabs defaultValue="my-rewards" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="my-rewards">My Rewards</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          {/* My Rewards Tab */}
          <TabsContent value="my-rewards" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Your Stats */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-white">
                        Klux AI Performance
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          Today
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          7d
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          30d
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          Max
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">2,450</p>
                        <p className="text-sm text-gray-400">Points</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">12</p>
                        <p className="text-sm text-gray-400">Referrals</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-neon-green">$186</p>
                        <p className="text-sm text-gray-400">Earned</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">$24</p>
                        <p className="text-sm text-gray-400">Pending</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to next tier</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <p className="text-xs text-muted-foreground">550 more points needed for Premium Tier</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Current Referrals */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Users className="w-5 h-5 text-gray-400" />
                      Current Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {userReferrals.map((referral, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-950 border border-gray-900"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(referral.status)}
                              <span className="font-mono text-sm">{referral.username}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {referral.plan}
                            </Badge>
                          </div>
                          <Badge 
                            variant={getStatusBadgeVariant(referral.status)}
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

              {/* Side Panel */}
              <div className="space-y-6">
                
                {/* Referral Code Section */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                      <Share className="w-5 h-5 text-gray-400" />
                      Referral Code
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-950 border border-gray-900">
                      <p className="font-mono text-center font-bold text-neon-green">
                        {referralCode}
                      </p>
                    </div>
                    <Button 
                      onClick={copyReferralLink}
                      className="w-full"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Referral Link
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Share your link. Earn <span className="font-semibold">30% commission</span> on every subscription.
                    </p>
                  </CardContent>
                </Card>

                {/* Payouts */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                      <Wallet className="w-5 h-5 text-gray-400" />
                      Payouts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="text-center p-4 rounded-lg bg-gray-950 border border-gray-900">
                        <p className="text-xl font-bold text-neon-green">$186.00</p>
                        <p className="text-sm text-gray-400">Total Earned</p>
                      </div>
                      
                      <div className="text-center p-4 rounded-lg bg-gray-950 border border-gray-900">
                        <p className="font-semibold text-white">Jan 15, 2025</p>
                        <p className="text-sm text-gray-400">Next Payout Date</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
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
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-gray-400" />
                  <div>
                    <CardTitle className="text-xl text-white">Top Performers</CardTitle>
                    <CardDescription>Leading users by referrals and earnings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead className="text-right">Referrals</TableHead>
                      <TableHead className="text-right">Earnings</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboard.map((user) => (
                      <TableRow key={user.username}>
                        <TableCell className="font-medium">#{user.rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.rank <= 3 && <Trophy className="w-4 h-4 text-neon-green" />}
                            <span className="font-mono text-white">{user.username}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium text-gray-300">{user.referrals}</TableCell>
                        <TableCell className="text-right font-medium text-neon-green">{user.earnings}</TableCell>
                        <TableCell className="text-right">
                          <span className="font-bold text-white">
                            {user.points.toLocaleString()}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Rewards;