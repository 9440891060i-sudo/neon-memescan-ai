import { useState } from "react";
import { MessageCircle, HelpCircle, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can we help you today?", sender: "support" },
  ]);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const { toast } = useToast();

  const faqItems = [
    { question: "How do I analyze a wallet?", answer: "Go to the Terminal page and enter the wallet address." },
    { question: "What are KLUX tokens?", answer: "KLUX tokens are rewards you earn for platform activity." },
    { question: "How do I upgrade to Premium?", answer: "Click on Pricing in the navigation menu." },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: message, sender: "user" }]);
    setMessage("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Thank you for your message. Our support team will respond shortly.",
        sender: "support"
      }]);
    }, 1000);
  };

  const handleSubmitTicket = () => {
    if (!ticketSubject.trim() || !ticketMessage.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ticket Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    
    setTicketSubject("");
    setTicketMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="group relative h-12 w-12 p-0 bg-background/95 backdrop-blur-sm border-border hover:bg-muted/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="absolute right-14 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/95 border border-border px-3 py-1.5 rounded-md">
              Klux Support
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          side="top"
          className="w-80 h-96 p-0 bg-background/95 backdrop-blur-sm border-border"
        >
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-border">
              <TabsList className="h-8 bg-muted/30">
                <TabsTrigger value="chat" className="text-xs h-7">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="faq" className="text-xs h-7">
                  <HelpCircle className="h-3 w-3 mr-1" />
                  FAQ
                </TabsTrigger>
                <TabsTrigger value="ticket" className="text-xs h-7">
                  <Send className="h-3 w-3 mr-1" />
                  Ticket
                </TabsTrigger>
              </TabsList>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <TabsContent value="chat" className="flex-1 flex flex-col m-0 p-3 space-y-3">
              <ScrollArea className="flex-1 pr-3">
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`text-xs p-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-primary/10 ml-8"
                          : "bg-muted/50 mr-8"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="text-xs h-8"
                />
                <Button size="sm" onClick={handleSendMessage} className="h-8 px-3">
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="flex-1 m-0 p-3">
              <ScrollArea className="h-full pr-3">
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="text-xs font-semibold">{item.question}</h4>
                      <p className="text-xs text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                  <Link to="/faq" onClick={() => setIsOpen(false)}>
                    <Button variant="link" className="text-xs h-auto p-0 text-primary">
                      View all FAQs →
                    </Button>
                  </Link>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="ticket" className="flex-1 m-0 p-3">
              <div className="space-y-3 h-full flex flex-col">
                <Input
                  placeholder="Subject"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="text-xs h-8"
                />
                <Textarea
                  placeholder="Describe your issue..."
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="flex-1 text-xs resize-none"
                />
                <Button size="sm" onClick={handleSubmitTicket} className="h-8">
                  Submit Ticket
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SupportWidget;
