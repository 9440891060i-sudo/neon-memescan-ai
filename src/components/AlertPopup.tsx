import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AlertPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  wallets: Array<{
    id: number;
    label: string;
    address: string;
  }>;
}

export function AlertPopup({ open, onOpenChange, wallets }: AlertPopupProps) {
  const [selectedWallets, setSelectedWallets] = useState<number[]>([]);
  const [tradeAmount, setTradeAmount] = useState("1000");
  const [alertType, setAlertType] = useState<"large-trade" | "any-trade">("large-trade");
  const { toast } = useToast();

  const toggleWallet = (walletId: number) => {
    setSelectedWallets(prev => 
      prev.includes(walletId) 
        ? prev.filter(id => id !== walletId)
        : [...prev, walletId]
    );
  };

  const selectAllWallets = () => {
    if (selectedWallets.length === wallets.length) {
      setSelectedWallets([]);
    } else {
      setSelectedWallets(wallets.map(w => w.id));
    }
  };

  const handleCreateAlert = () => {
    if (selectedWallets.length === 0) {
      toast({
        title: "No Wallets Selected",
        description: "Please select at least one wallet",
        variant: "destructive",
      });
      return;
    }

    const alertMessage = alertType === "large-trade"
      ? `Alert created for trades ≥ $${tradeAmount}`
      : "Alert created for any trade activity";

    toast({
      title: "Alert Created",
      description: `${alertMessage} on ${selectedWallets.length} wallet${selectedWallets.length > 1 ? 's' : ''}`,
    });

    onOpenChange(false);
    setSelectedWallets([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl">
            <Bell className="w-5 h-5 text-muted-foreground" />
            Create Wallet Alert
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Wallet Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-foreground">Select Wallets</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={selectAllWallets}
                className="text-terminal-blue hover:text-terminal-blue/80 hover:bg-terminal-blue/10"
              >
                {selectedWallets.length === wallets.length ? "Deselect All" : "Select All"}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto p-2 bg-muted/30 rounded-lg border border-border">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => toggleWallet(wallet.id)}
                  className={`p-3 rounded-lg border transition-all text-left ${
                    selectedWallets.includes(wallet.id)
                      ? 'border-terminal-blue bg-terminal-blue/10'
                      : 'border-border hover:border-muted-foreground/30'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Wallet className={`w-4 h-4 ${selectedWallets.includes(wallet.id) ? 'text-terminal-blue' : 'text-muted-foreground'}`} />
                    <span className={`text-sm font-medium ${selectedWallets.includes(wallet.id) ? 'text-terminal-blue' : 'text-foreground'}`}>
                      {wallet.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {selectedWallets.length > 0 && (
              <Badge variant="outline" className="mt-2 bg-terminal-blue/10 text-terminal-blue border-terminal-blue/20">
                {selectedWallets.length} wallet{selectedWallets.length > 1 ? 's' : ''} selected
              </Badge>
            )}
          </div>

          {/* Alert Type */}
          <div className="space-y-3">
            <Label className="text-foreground">Alert Condition</Label>
            <div className="space-y-2">
              <button
                onClick={() => setAlertType("large-trade")}
                className={`w-full p-4 rounded-lg border transition-all text-left ${
                  alertType === "large-trade"
                    ? 'border-terminal-green bg-terminal-green/10'
                    : 'border-border hover:border-muted-foreground/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-medium ${alertType === "large-trade" ? 'text-terminal-green' : 'text-foreground'}`}>
                      Large Trade Alert
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get notified when trades exceed a specific amount
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    alertType === "large-trade" ? 'border-terminal-green' : 'border-border'
                  }`}>
                    {alertType === "large-trade" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
                    )}
                  </div>
                </div>
                {alertType === "large-trade" && (
                  <div className="mt-3">
                    <Label className="text-xs text-muted-foreground">Trade Amount ($)</Label>
                    <Input
                      type="number"
                      value={tradeAmount}
                      onChange={(e) => setTradeAmount(e.target.value)}
                      className="mt-1"
                      placeholder="1000"
                    />
                  </div>
                )}
              </button>

              <button
                onClick={() => setAlertType("any-trade")}
                className={`w-full p-4 rounded-lg border transition-all text-left ${
                  alertType === "any-trade"
                    ? 'border-terminal-green bg-terminal-green/10'
                    : 'border-border hover:border-muted-foreground/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-medium ${alertType === "any-trade" ? 'text-terminal-green' : 'text-foreground'}`}>
                      Any Trade Alert
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get notified on any trade activity
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    alertType === "any-trade" ? 'border-terminal-green' : 'border-border'
                  }`}>
                    {alertType === "any-trade" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateAlert}
            className="flex-1 bg-terminal-green hover:bg-terminal-green/90 text-background font-medium"
          >
            <Bell className="w-4 h-4 mr-2" />
            Create Alert
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
