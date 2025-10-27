import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Gift, 
  Instagram, 
  Twitter, 
  Users, 
  TrendingUp,
  Percent,
  Crown,
  CheckCircle,
  Copy,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Earn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [igClaimed, setIgClaimed] = useState(false);
  const [twitterClaimed, setTwitterClaimed] = useState(false);
  const [customReferralCode, setCustomReferralCode] = useState("");

  const copyReferralCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "Share it to start earning rewards.",
    });
  };

  const handleClaimIg = () => {
    setIgClaimed(true);
    toast({
      title: "Reward claimed!",
      description: "+1L Klud added to your account.",
    });
  };

  const handleClaimTwitter = () => {
    setTwitterClaimed(true);
    toast({
      title: "Reward claimed!",
      description: "+1L Klud added to your account.",
    });
  };

  const handleApplyPartnership = (type: string) => {
    toast({
      title: "Application submitted!",
      description: `Your ${type} partnership application is being reviewed.`,
    });
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl font-semibold text-white">Earn Rewards</h1>
                <p className="text-gray-400 text-sm mt-1">Complete tasks and partnerships to earn Klud and commissions</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/rewards-dashboard")}
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Rewards Dashboard
            </Button>
          </div>
        </div>

        {/* Free Klud Section */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <Gift className="w-5 h-5 text-primary" />
              Earn Free Klud Daily
            </CardTitle>
            <CardDescription>Complete social tasks to earn 1L Klud each (once per day)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Instagram Story */}
            <div className="p-6 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">Instagram Story</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Post a story showing Klux extension or dashboard with your trade setup
                    </p>
                    <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">
                      +1L Klud
                    </Badge>
                  </div>
                </div>
                <Button 
                  onClick={handleClaimIg}
                  disabled={igClaimed}
                  className="flex-shrink-0"
                  variant={igClaimed ? "outline" : "default"}
                >
                  {igClaimed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Claimed
                    </>
                  ) : (
                    "Claim Reward"
                  )}
                </Button>
              </div>
            </div>

            {/* Twitter Post */}
            <div className="p-6 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">Twitter Post</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Tweet mentioning Klux with a review, comment, suggestion, or trade
                    </p>
                    <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">
                      +1L Klud
                    </Badge>
                  </div>
                </div>
                <Button 
                  onClick={handleClaimTwitter}
                  disabled={twitterClaimed}
                  className="flex-shrink-0"
                  variant={twitterClaimed ? "outline" : "default"}
                >
                  {twitterClaimed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Claimed
                    </>
                  ) : (
                    "Claim Reward"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partnership Programs */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <TrendingUp className="w-5 h-5 text-primary" />
              Become an Early Partner
            </CardTitle>
            <CardDescription>Choose the partnership program that suits you best</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Standard Partner (Normal Users) */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 hover:border-neon-green/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Standard Partner</h3>
                  <p className="text-sm text-gray-400 mt-1">Perfect for referring friends and family</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Percent className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">10% Discount</p>
                    <p className="text-xs text-gray-400">For your referred friends</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">25% Commission</p>
                    <p className="text-xs text-gray-400">First month only</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">10% Commission</p>
                    <p className="text-xs text-gray-400">All subsequent months</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <Label htmlFor="referralCode" className="text-white text-sm">
                    Your Custom Referral Code
                  </Label>
                  <Input
                    id="referralCode"
                    type="text"
                    placeholder="Enter your custom code"
                    value={customReferralCode}
                    onChange={(e) => setCustomReferralCode(e.target.value.toUpperCase())}
                    className="mt-1 bg-gray-900 border-gray-800 text-white"
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Your referral code</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyReferralCode(customReferralCode || "KLUX-STANDARD-X7K9")}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="font-mono text-white font-medium mt-1">{customReferralCode || "KLUX-STANDARD-X7K9"}</p>
              </div>

              <Button 
                onClick={() => handleApplyPartnership("Standard Partner")}
                className="w-full"
              >
                Start Referring
              </Button>
            </div>

            {/* KOL Partner */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/50 to-gray-900 border-2 border-purple-500/50 hover:border-purple-500 transition-all relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-500 text-white border-0">
                  <Crown className="w-3 h-3 mr-1" />
                  VIP
                </Badge>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">KOL Partner</h3>
                  <p className="text-sm text-gray-400 mt-1">Exclusive for content creators & KOLs</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Percent className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Custom Discount</p>
                    <p className="text-xs text-gray-400">Up to 20% for your audience</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Tailored Commissions</p>
                    <p className="text-xs text-gray-400">Customized rates for your audience</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Priority Support</p>
                    <p className="text-xs text-gray-400">Dedicated account manager</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleApplyPartnership("KOL Partner")}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Apply for Partnership
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Earn;
