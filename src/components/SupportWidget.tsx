import { useState } from "react";
import { MessageCircle, HelpCircle, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="group relative h-10 px-4 bg-background/95 backdrop-blur-sm border-border hover:bg-muted/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Klux Support
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          side="top"
          className="w-64 p-3 bg-background/95 backdrop-blur-sm border-border"
        >
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <Link to="/support" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-10 hover:bg-muted/50"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Live Chat</span>
              </Button>
            </Link>
            
            <Link to="/faq" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-10 hover:bg-muted/50"
              >
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm">FAQ</span>
              </Button>
            </Link>
            
            <Link to="/support" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-10 hover:bg-muted/50"
              >
                <Send className="h-4 w-4" />
                <span className="text-sm">Submit Ticket</span>
              </Button>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SupportWidget;
