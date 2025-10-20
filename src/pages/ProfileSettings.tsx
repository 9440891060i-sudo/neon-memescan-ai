import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Lock, CreditCard, Monitor } from "lucide-react";
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
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");

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
    <div className="p-6 space-y-6 max-w-4xl mx-auto bg-black min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <Button onClick={handleUpdateProfile} className="bg-neon-green text-black hover:bg-neon-green/90">
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
          <div className="flex items-center justify-between">
            <Button onClick={handleUpdatePassword} className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800">
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
          <Button onClick={handleUpdatePayment} className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800">
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
                    <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-0.5 rounded-full">
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
  );
}
