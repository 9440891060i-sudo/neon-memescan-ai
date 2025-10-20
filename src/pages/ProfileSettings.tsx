import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Lock, CreditCard, Monitor, Sun, Moon } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";

export default function ProfileSettings() {
  const { user } = useAuthStore();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  
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
    <div className="p-6 space-y-6 max-w-4xl mx-auto bg-background min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Information */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-muted-foreground" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="border-border hover:bg-accent"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-muted text-foreground text-xl font-bold">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" size="sm" className="border-border hover:bg-accent">
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <Button onClick={handleUpdateProfile} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Update Profile
          </Button>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lock className="w-5 h-5 text-muted-foreground" />
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
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button onClick={handleUpdatePassword} variant="secondary">
              Update Password
            </Button>
            <Button 
              variant="link" 
              onClick={handleForgotPassword}
              className="text-muted-foreground hover:text-foreground"
            >
              Forgot Password?
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            Payment Method
          </CardTitle>
          <CardDescription>Update your payment information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardholder-name">Cardholder Name</Label>
            <Input
              id="cardholder-name"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input
                id="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>
          <Button onClick={handleUpdatePayment} variant="secondary">
            Update Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Active Sessions Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Monitor className="w-5 h-5 text-muted-foreground" />
            Active Sessions
          </CardTitle>
          <CardDescription>Manage where you're logged in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 bg-muted/50 border border-border rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{session.device}</h4>
                  {session.isCurrent && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{session.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{session.lastActive}</p>
              </div>
              {!session.isCurrent && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRevokeSession(session.id)}
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
