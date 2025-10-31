import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, TrendingDown, Zap, Target, Award, Calendar, Users, CreditCard, Activity, DollarSign, User, Lock, Monitor } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { user } = useAuthStore();
  const { toast } = useToast();
  
  // Profile settings state
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  
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

  // Profile settings handlers
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

  const handleForgotPassword = () => {
    toast({
      title: "Password Reset",
      description: "A password reset link has been sent to your email.",
    });
  };

  const handleUpdatePayment = () => {
    toast({
      title: "Payment Updated",
      description: "Your payment information has been successfully updated.",
    });
    
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardholderName("");
  };

  const handleRevokeSession = (sessionId: string) => {
    toast({
      title: "Session Revoked",
      description: "The selected session has been logged out.",
    });
  };

  // Mock session data
  const sessions = [
    {
      id: "1",
      device: "Chrome on Windows",
      location: "New York, USA",
      lastActive: "Active now",
      isCurrent: true,
    },
    {
      id: "2",
      device: "Safari on iPhone",
      location: "Los Angeles, USA",
      lastActive: "2 hours ago",
      isCurrent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="w-full space-y-8">
        {/* User Profile Section */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg text-white">Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
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
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-semibold">{statsData.creditsRemaining} credits</span>
                  </div>
                  <Badge className="bg-gray-900 text-white font-medium border border-gray-800">
                    Pro Trader
                  </Badge>
                </div>
              </div>
            </div>

            {/* Total Analyses This Month */}
            <div className="p-4 bg-gray-950 rounded-lg border border-gray-800 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400">Total Analyses This Month</span>
                </div>
                <span className="text-2xl font-bold text-white">{statsData.totalAnalyses}</span>
              </div>
            </div>

            {/* Credit Usage History */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Recent Credit Activity</span>
              </div>
              {statsData.creditHistory.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-950 rounded-lg border border-gray-800">
                  <div>
                    <p className="text-sm text-white">{transaction.type}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <span className="text-sm text-gray-400">-{transaction.used} credits</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        {/* Profile Settings Section */}
        <div className="space-y-6 mt-8">
          <div className="border-t border-gray-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
            <p className="text-gray-400">Manage your profile and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Information */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <User className="w-5 h-5 text-gray-400" />
                  Profile Information
                </CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gray-900 text-white text-xl font-bold">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-900">
                      Change Avatar
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Upload a new profile picture
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-400">Username</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-gray-950 border-gray-800 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-950 border-gray-800 text-white"
                    />
                  </div>
                </div>

                <Button onClick={handleUpdateProfile} className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800 w-full">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Password Section */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Lock className="w-5 h-5 text-gray-400" />
                  Change Password
                </CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-400">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="bg-gray-950 border-gray-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-400">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="bg-gray-950 border-gray-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-400">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-950 border-gray-800 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Button onClick={handleUpdatePassword} className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800 w-full">
                    Update Password
                  </Button>
                  <Button 
                    variant="link" 
                    onClick={handleForgotPassword}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Forgot Password?
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Section */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  Payment Method
                </CardTitle>
                <CardDescription>Update your payment information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardholder-name" className="text-gray-400">Cardholder Name</Label>
                  <Input
                    id="cardholder-name"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-gray-950 border-gray-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-number" className="text-gray-400">Card Number</Label>
                  <Input
                    id="card-number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="bg-gray-950 border-gray-800 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date" className="text-gray-400">Expiry Date</Label>
                    <Input
                      id="expiry-date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="bg-gray-950 border-gray-800 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-gray-400">CVV</Label>
                    <Input
                      id="cvv"
                      type="password"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength={4}
                      className="bg-gray-950 border-gray-800 text-white"
                    />
                  </div>
                </div>
                <Button onClick={handleUpdatePayment} className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800 w-full">
                  Update Payment Method
                </Button>
              </CardContent>
            </Card>

            {/* Active Sessions Section */}
            <Card className="bg-black border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Monitor className="w-5 h-5 text-gray-400" />
                  Active Sessions
                </CardTitle>
                <CardDescription>Manage where you're logged in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 bg-gray-950 border border-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-medium">{session.device}</h4>
                        {session.isCurrent && (
                          <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{session.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{session.lastActive}</p>
                    </div>
                    {!session.isCurrent && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRevokeSession(session.id)}
                        className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white"
                      >
                        Revoke
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}