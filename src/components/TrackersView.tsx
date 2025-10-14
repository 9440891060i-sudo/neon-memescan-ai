import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Users, X as XIcon, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const LC_OPTIONS = [
  "LC 1", "LC 2", "LC 3", "LC 4", "LC 5", "LC 6",
  "LC 7", "LC 8", "LC 9", "LC 10", "LC 11", "LC 12"
];

export function TrackersView() {
  const [expandedBoxes, setExpandedBoxes] = useState({
    twitter: true,
    lc: true,
    news: true
  });

  const [openModal, setOpenModal] = useState<'twitter' | 'lc' | 'news' | null>(null);
  
  // Twitter state
  const [twitterAccounts, setTwitterAccounts] = useState<string[]>([]);
  const [twitterInput, setTwitterInput] = useState("");

  // LC state
  const [selectedLCs, setSelectedLCs] = useState<string[]>([]);

  // News state
  const [newsChannels, setNewsChannels] = useState<string[]>([]);
  const [newsInput, setNewsInput] = useState("");

  const toggleBox = (box: 'twitter' | 'lc' | 'news') => {
    setExpandedBoxes(prev => ({ ...prev, [box]: !prev[box] }));
  };

  const addTwitterAccount = () => {
    if (twitterInput.trim()) {
      setTwitterAccounts(prev => [...prev, twitterInput.trim()]);
      setTwitterInput("");
    }
  };

  const removeTwitterAccount = (account: string) => {
    setTwitterAccounts(prev => prev.filter(a => a !== account));
  };

  const clearTwitterAccounts = () => {
    setTwitterAccounts([]);
  };

  const toggleLC = (lc: string) => {
    setSelectedLCs(prev => 
      prev.includes(lc) ? prev.filter(l => l !== lc) : [...prev, lc]
    );
  };

  const addNewsChannel = () => {
    if (newsInput.trim()) {
      setNewsChannels(prev => [...prev, newsInput.trim()]);
      setNewsInput("");
    }
  };

  const removeNewsChannel = (channel: string) => {
    setNewsChannels(prev => prev.filter(c => c !== channel));
  };

  const expandedCount = Object.values(expandedBoxes).filter(Boolean).length;
  const gridCols = expandedCount === 3 ? 'md:grid-cols-3' : expandedCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1';

  return (
    <div className="p-8 space-y-8">
      {/* Expanded Boxes */}
      <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
        {/* X Tracking */}
        {expandedBoxes.twitter && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('twitter')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <XIcon className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setOpenModal('twitter')}
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 p-8 pt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-muted/30">
                  <XIcon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">X Tracking</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Active Monitors</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Tracked Accounts</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Recent Alerts</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* LC Tracking */}
        {expandedBoxes.lc && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('lc')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <XIcon className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setOpenModal('lc')}
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 p-8 pt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-muted/30">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">LC Tracking</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Community Signals</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Active Channels</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Recent Updates</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* News Tracking */}
        {expandedBoxes.news && (
          <Card className="bg-card border-border min-h-[700px] flex flex-col relative group hover:border-foreground/20 transition-all animate-scale-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toggleBox('news')}
              className="absolute top-4 left-4 w-8 h-8 text-muted-foreground hover:text-destructive hover:bg-muted z-10"
            >
              <XIcon className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setOpenModal('news')}
              className="absolute top-4 right-4 w-8 h-8 text-neon-green hover:bg-neon-green/10 z-10"
            >
              <Plus className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 p-8 pt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-muted/30">
                  <Newspaper className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">News Tracking</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">News Sources</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Breaking News</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <div className="p-6 bg-muted/20 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">Daily Articles</p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Collapsed Boxes */}
      {expandedCount < 3 && (
        <div className="flex gap-4 flex-wrap">
          {!expandedBoxes.twitter && (
            <Card 
              onClick={() => toggleBox('twitter')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <XIcon className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">X Tracking</span>
            </Card>
          )}

          {!expandedBoxes.lc && (
            <Card 
              onClick={() => toggleBox('lc')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <Users className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">LC Tracking</span>
            </Card>
          )}

          {!expandedBoxes.news && (
            <Card 
              onClick={() => toggleBox('news')}
              className="bg-card border-border h-20 px-6 flex items-center gap-3 cursor-pointer hover:border-neon-green transition-all animate-scale-in"
            >
              <Newspaper className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">News Tracking</span>
            </Card>
          )}
        </div>
      )}

      {/* X Modal */}
      <Dialog open={openModal === 'twitter'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-[500px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <XIcon className="w-5 h-5" />
              X Accounts
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter X account..."
                value={twitterInput}
                onChange={(e) => setTwitterInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTwitterAccount()}
                className="flex-1"
              />
              <Button onClick={addTwitterAccount} className="bg-neon-green text-background hover:bg-neon-green/90">
                Add
              </Button>
            </div>
            
            {twitterAccounts.length > 0 && (
              <>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Saved Accounts ({twitterAccounts.length})</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearTwitterAccounts}
                    className="text-destructive hover:text-destructive"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {twitterAccounts.map((account, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border">
                      <span className="text-foreground">@{account}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeTwitterAccount(account)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* LC Modal */}
      <Dialog open={openModal === 'lc'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-[500px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Users className="w-5 h-5" />
              Select LC Channels
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select which LCs you want to receive alerts from
            </p>
            <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto">
              {LC_OPTIONS.map((lc) => (
                <div key={lc} className="flex items-center space-x-2 p-3 bg-muted/20 rounded-lg border border-border">
                  <Checkbox
                    id={lc}
                    checked={selectedLCs.includes(lc)}
                    onCheckedChange={() => toggleLC(lc)}
                  />
                  <label
                    htmlFor={lc}
                    className="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {lc}
                  </label>
                </div>
              ))}
            </div>
            {selectedLCs.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                Selected: {selectedLCs.length} LC{selectedLCs.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* News Modal */}
      <Dialog open={openModal === 'news'} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="sm:max-w-[500px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Newspaper className="w-5 h-5" />
              News Channels
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex gap-2">
              <Input
                placeholder="Paste news channel link..."
                value={newsInput}
                onChange={(e) => setNewsInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addNewsChannel()}
                className="flex-1"
              />
              <Button onClick={addNewsChannel} className="bg-neon-green text-background hover:bg-neon-green/90">
                Add
              </Button>
            </div>
            
            {newsChannels.length > 0 && (
              <>
                <p className="text-sm text-muted-foreground">Saved Channels ({newsChannels.length})</p>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {newsChannels.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border">
                      <span className="text-foreground text-sm truncate flex-1">{channel}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeNewsChannel(channel)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
