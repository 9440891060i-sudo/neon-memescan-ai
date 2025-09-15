import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Lock, 
  CreditCard, 
  Crown, 
  Activity,
  Calendar,
  Shield,
  Zap
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";

export default function ProfileSettings() {
  const { user } = useAuthStore();
  const { toast } = useToast();
  
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mock subscription data
  const subscriptionData = {
    plan: "Pro",
    status: "Active",
    nextBilling: "January 15, 2025",
    creditsRemaining: 1250,
    creditsUsed: 750
  };

  // Mock payment method
  const paymentMethod = {
    type: "Visa",
    last4: "4242",
    expiry: "12/27"
  };

  // Mock activity logs
  const activityLogs = [
    { date: "Dec 15, 2024", action: "Token Analysis", details: "PEPE analyzed - AI Score: 87", type: "analysis" },
    { date: "Dec 14, 2024", action: "Credit Purchase", details: "Purchased 500 credits", type: "purchase" },
    { date: "Dec 13, 2024", action: "Login", details: "Logged in from Chrome", type: "auth" },
    { date: "Dec 12, 2024", action: "Token Analysis", details: "DOGE analyzed - AI Score: 74", type: "analysis" },
    { date: "Dec 11, 2024", action: "Profile Update", details: "Updated username", type: "profile" },
  ];

  const getUserInitials = () => {
    if (!user?.username) return "U";
    return user.username.slice(0, 2).toUpperCase();
  };

  const handleUpdateProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation don't match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Updated", 
      description: "Your password has been successfully changed.",
    });
    
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleUpgradePlan = () => {
    toast({
      title: "Upgrade Plan",
      description: "Redirecting to premium subscription...",
    });
  };

  const handleUpdatePayment = () => {
    toast({
      title: "Payment Method",
      description: "Redirecting to payment settings...",
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'analysis': return <Zap className="w-4 h-4 text-neon-green" />;
      case 'purchase': return <CreditCard className="w-4 h-4 text-neon-cyan" />;
      case 'auth': return <Shield className="w-4 h-4 text-neon-purple" />;
      case 'profile': return <User className="w-4 h-4 text-yellow-400" />;
      default: return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-neon-green mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account, subscription, and preferences</p>
      </div>

      {/* Profile Information */}
      <Card className="bg-gradient-card border-neon-green/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-foreground">
            <User className="w-5 h-5 text-neon-green" />
            Profile Information
          </CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-neon-green/20 text-neon-green text-xl font-bold">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" size="sm" className="border-neon-green/50 text-neon-green hover:bg-neon-green/10">
                Change Avatar
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Upload a new profile picture
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-neon-green/30 focus:border-neon-green"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-neon-green/30 focus:border-neon-green"
              />
            </div>
          </div>

          <Button onClick={handleUpdateProfile} className="bg-neon-green/20 text-neon-green hover:bg-neon-green/30 border border-neon-green/50">
            Update Profile
          </Button>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-foreground">
            <Lock className="w-5 h-5 text-neon-cyan" />
            Change Password
          </CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border-neon-cyan/30 focus:border-neon-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border-neon-cyan/30 focus:border-neon-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-neon-cyan/30 focus:border-neon-cyan"
            />
          </div>
          <Button onClick={handleUpdatePassword} className="bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/30 border border-neon-cyan/50">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Subscription Management */}
      <Card className="bg-gradient-card border-neon-purple/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-foreground">
            <Crown className="w-5 h-5 text-neon-purple" />
            Subscription Plan
          </CardTitle>
          <CardDescription>Manage your subscription and billing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-neon-purple">{subscriptionData.plan} Plan</h3>
                <Badge className="bg-neon-purple/20 text-neon-purple">
                  {subscriptionData.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Next billing: {subscriptionData.nextBilling}
              </p>
            </div>
            <Button onClick={handleUpgradePlan} variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10">
              Manage Plan
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Credits Remaining</span>
                <span className="text-lg font-bold text-neon-green">{subscriptionData.creditsRemaining}</span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-2">
                <div 
                  className="bg-neon-green h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(subscriptionData.creditsRemaining / (subscriptionData.creditsRemaining + subscriptionData.creditsUsed)) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-4 bg-black/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Credits Used</span>
                <span className="text-lg font-bold text-neon-cyan">{subscriptionData.creditsUsed}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10">
                Buy More Credits
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-foreground">
            <CreditCard className="w-5 h-5 text-yellow-400" />
            Payment Method
          </CardTitle>
          <CardDescription>Manage your billing information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• {paymentMethod.last4}</p>
                <p className="text-sm text-muted-foreground">Expires {paymentMethod.expiry}</p>
              </div>
            </div>
            <Button onClick={handleUpdatePayment} variant="outline" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
              Update Payment
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Activity Logs */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-foreground">
            <Activity className="w-5 h-5 text-muted-foreground" />
            Account Activity
          </CardTitle>
          <CardDescription>Recent account activities and logs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activityLogs.map((log, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
                <div className="mt-0.5">
                  {getActivityIcon(log.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{log.action}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {log.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{log.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}