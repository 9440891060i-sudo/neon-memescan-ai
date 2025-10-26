import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  AlertCircle,
  Coins,
  Sparkles,
  Gift
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Rewards = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [referralCode] = useState("KLUX-REF-X7K9M2");
  const [selectedKludPack, setSelectedKludPack] = useState("500");
  const [redeemDialog, setRedeemDialog] = useState<"usdt" | "klud" | "klux" | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  
  const userPoints = 2450;
  
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

  const handleRedeemConfirm = () => {
    if (redeemDialog === "usdt" && !walletAddress.trim()) {
      toast({
        title: "Wallet address required",
        description: "Please enter your USDT wallet address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Redemption successful!",
      description: `Your ${redeemDialog?.toUpperCase()} redemption has been processed.`,
    });
    
    setRedeemDialog(null);
    setWalletAddress("");
  };

  const kludPacks = {
    "500": { points: 500, liters: "2.5L" },
    "1000": { points: 1000, liters: "5.5L" },
    "2000": { points: 2000, liters: "13L" },
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="w-full space-y-8">
        

        {/* Tabs */}
        <Tabs defaultValue="my-rewards" className="space-y-6">
          <div className="flex items-center gap-3">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="my-rewards">My Rewards</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>
            <button
              onClick={() => navigate("/earn")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-green/20 to-blue-500/20 border border-neon-green/30 hover:border-neon-green/50 transition-all text-white"
            >
              <Gift className="w-5 h-5 text-neon-green" />
              <span className="font-semibold">Earn</span>
            </button>
          </div>

          {/* My Rewards Tab */}
          <TabsContent value="my-rewards" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Your Stats */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <CardTitle className="flex items-center gap-2 text-white">
                        Klux AI Performance
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                          Today
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                          7d
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                          30d
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
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

                {/* Redeem Points */}
                <Card className="bg-black border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-white">
                      <Sparkles className="w-5 h-5 text-gray-400" />
                      Redeem Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* USDT Redemption */}
                    <button
                      onClick={() => setRedeemDialog("usdt")}
                      className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 transition-colors text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="font-semibold text-white text-sm">Redeem for USDT</p>
                            <p className="text-xs text-gray-400">Current value: ${(userPoints * 0.1).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Klud Redemption */}
                    <button
                      onClick={() => setRedeemDialog("klud")}
                      className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 transition-colors text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Coins className="w-5 h-5 text-blue-400" />
                          <div>
                            <p className="font-semibold text-white text-sm">Redeem for Klud</p>
                            <p className="text-xs text-gray-400">Starting from 500 points</p>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Klux AI Redemption */}
                    <button
                      onClick={() => setRedeemDialog("klux")}
                      disabled={userPoints < 4000}
                      className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-purple-400" />
                          <div>
                            <p className="font-semibold text-white text-sm">Redeem for Klux AI</p>
                            <p className="text-xs text-gray-400">4000 points required</p>
                          </div>
                        </div>
                      </div>
                    </button>
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

      {/* USDT Redemption Dialog */}
      <Dialog open={redeemDialog === "usdt"} onOpenChange={(open) => !open && setRedeemDialog(null)}>
        <DialogContent className="bg-black border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-white">Redeem Points for USDT</DialogTitle>
            <DialogDescription>
              Convert your {userPoints} points to ${(userPoints * 0.1).toFixed(2)} USDT
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="wallet" className="text-white">Wallet Address</Label>
              <Input
                id="wallet"
                placeholder="Enter your USDT wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-gray-950 border-gray-800"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRedeemDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleRedeemConfirm}>
              Confirm Redemption
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Klud Redemption Dialog */}
      <Dialog open={redeemDialog === "klud"} onOpenChange={(open) => !open && setRedeemDialog(null)}>
        <DialogContent className="bg-black border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-white">Redeem Points for Klud</DialogTitle>
            <DialogDescription>
              Choose your Klud package
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="klud-pack" className="text-white">Select Package</Label>
              <Select value={selectedKludPack} onValueChange={setSelectedKludPack}>
                <SelectTrigger className="bg-gray-950 border-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-950 border-gray-800">
                  <SelectItem value="500">500 points → 2.5L Klud</SelectItem>
                  <SelectItem value="1000">1000 points → 5.5L Klud</SelectItem>
                  <SelectItem value="2000">2000 points → 13L Klud</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {userPoints < parseInt(selectedKludPack) && (
              <p className="text-sm text-red-400">Insufficient points for this package</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRedeemDialog(null)}>
              Cancel
            </Button>
            <Button 
              onClick={handleRedeemConfirm}
              disabled={userPoints < parseInt(selectedKludPack)}
            >
              Confirm Redemption
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Klux AI Redemption Dialog */}
      <Dialog open={redeemDialog === "klux"} onOpenChange={(open) => !open && setRedeemDialog(null)}>
        <DialogContent className="bg-black border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-white">Redeem Points for Klux AI</DialogTitle>
            <DialogDescription>
              Unlock Klux AI subscription with 4000 points
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-4 rounded-lg bg-gray-950 border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Your Points:</span>
                <span className="text-white font-semibold">{userPoints}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Required:</span>
                <span className="text-white font-semibold">4000</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRedeemDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleRedeemConfirm}>
              Confirm Redemption
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rewards;