import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Alert {
  id: number;
  type: string;
  wallet: string;
  condition: string;
  status: "active" | "paused";
  triggered: number;
}

interface ViewAlertsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  alerts: Alert[];
}

export function ViewAlertsDialog({ open, onOpenChange, alerts: initialAlerts }: ViewAlertsDialogProps) {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
    toast({
      title: "Alert Deleted",
      description: "The alert has been removed",
      variant: "destructive",
    });
  };

  const toggleStatus = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id 
        ? { ...alert, status: alert.status === "active" ? "paused" : "active" }
        : alert
    ));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white text-2xl">
            <Bell className="w-6 h-6 text-yellow-400" />
            All Alerts
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Manage your wallet alerts
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {alerts.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No alerts configured yet</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <Card key={alert.id} className="bg-gray-950 border-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{alert.type}</h3>
                          <Badge 
                            variant="outline"
                            className={alert.status === "active"
                              ? "bg-green-500/10 text-green-400 border-green-500/20 text-xs"
                              : "bg-gray-700/10 text-gray-400 border-gray-700/20 text-xs"
                            }
                          >
                            {alert.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400">{alert.wallet}</p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleStatus(alert.id)}
                          className="border-gray-700 text-white hover:bg-gray-900"
                        >
                          {alert.status === "active" ? "Pause" : "Activate"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(alert.id)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Condition */}
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Condition</label>
                      <p className="text-sm text-white bg-black px-3 py-2 rounded border border-gray-800">
                        {alert.condition}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                      <span className="text-xs text-gray-500">
                        Triggered {alert.triggered} times
                      </span>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                        Alert #{alert.id}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-800">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-700 text-white hover:bg-gray-900"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
