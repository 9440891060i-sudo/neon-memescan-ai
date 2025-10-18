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
      <DialogContent className="sm:max-w-[600px] bg-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white text-xl">
            <Bell className="w-5 h-5 text-gray-400" />
            Create Wallet Alert
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Wallet Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-white">Select Wallets</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={selectAllWallets}
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                {selectedWallets.length === wallets.length ? "Deselect All" : "Select All"}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto p-2 bg-gray-950 rounded-lg border border-gray-800">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => toggleWallet(wallet.id)}
                  className={`p-3 rounded-lg border transition-all text-left ${
                    selectedWallets.includes(wallet.id)
                      ? 'border-gray-400 bg-gray-900'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Wallet className={`w-4 h-4 ${selectedWallets.includes(wallet.id) ? 'text-white' : 'text-gray-400'}`} />
                    <span className={`text-sm font-medium ${selectedWallets.includes(wallet.id) ? 'text-white' : 'text-gray-500'}`}>
                      {wallet.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {selectedWallets.length > 0 && (
              <Badge variant="outline" className="mt-2 bg-gray-900 text-gray-400 border-gray-700">
                {selectedWallets.length} wallet{selectedWallets.length > 1 ? 's' : ''} selected
              </Badge>
            )}
          </div>

          {/* Alert Type */}
          <div className="space-y-3">
            <Label className="text-white">Alert Condition</Label>
            <div className="space-y-2">
              <button
                onClick={() => setAlertType("large-trade")}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  alertType === "large-trade"
                    ? 'border-gray-400 bg-gray-900'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-semibold ${alertType === "large-trade" ? 'text-white' : 'text-gray-400'}`}>
                      Large Trade Alert
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Get notified when trades exceed a specific amount
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    alertType === "large-trade" ? 'border-gray-400' : 'border-gray-700'
                  }`}>
                    {alertType === "large-trade" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                    )}
                  </div>
                </div>
                {alertType === "large-trade" && (
                  <div className="mt-3">
                    <Label className="text-xs text-gray-400">Trade Amount ($)</Label>
                    <Input
                      type="number"
                      value={tradeAmount}
                      onChange={(e) => setTradeAmount(e.target.value)}
                      className="mt-1 bg-black border-gray-800 text-white"
                      placeholder="1000"
                    />
                  </div>
                )}
              </button>

              <button
                onClick={() => setAlertType("any-trade")}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  alertType === "any-trade"
                    ? 'border-gray-400 bg-gray-900'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`font-semibold ${alertType === "any-trade" ? 'text-white' : 'text-gray-400'}`}>
                      Any Trade Alert
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Get notified on any trade activity
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    alertType === "any-trade" ? 'border-gray-400' : 'border-gray-700'
                  }`}>
                    {alertType === "any-trade" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
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
            className="flex-1 border-gray-700 hover:bg-gray-900"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateAlert}
            className="flex-1 bg-white hover:bg-gray-200 text-black font-semibold"
          >
            <Bell className="w-4 h-4 mr-2" />
            Create Alert
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
