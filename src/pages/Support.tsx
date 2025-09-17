import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle, 
  HelpCircle, 
  Mail, 
  Phone,
  Book,
  Zap,
  Bot
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockMessages = [
  {
    id: 1,
    type: "support" as const,
    message: "Hi! I'm Sarah from KLUX support. How can I help you today?",
    timestamp: "2:34 PM"
  },
  {
    id: 2,
    type: "user" as const,
    message: "Hello! I'm having trouble with my credit balance.",
    timestamp: "2:35 PM"
  },
  {
    id: 3,
    type: "support" as const,
    message: "I'd be happy to help you with that! Can you tell me more about the specific issue you're experiencing?",
    timestamp: "2:36 PM"
  }
];

const faqItems = [
  {
    question: "How do credits work?",
    answer: "Credits are used for AI analysis. Each analysis costs 30 credits. You get 1000 credits monthly with Pro plan."
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee for all subscription plans."
  },
  {
    question: "How accurate is the AI?",
    answer: "Our AI maintains a 65% accuracy rate based on historical data and user feedback."
  },
  {
    question: "Which blockchains are supported?",
    answer: "We currently support Ethereum and Solana, with more chains coming soon."
  }
];

export default function Support() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      message: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        type: "support" as const,
        message: "Thanks for your message! This is a demo version. In the real app, our support team would respond within 5 minutes.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, supportResponse]);
    }, 2000);
  };

  const handleSubmitTicket = () => {
    if (!ticketSubject.trim() || !ticketMessage.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both subject and message fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Ticket Submitted",
      description: "This is a demo. In the real app, your ticket would be submitted to our support team.",
    });
    
    setTicketSubject("");
    setTicketMessage("");
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neon-green mb-2">Support Center</h1>
        <p className="text-muted-foreground">Get help with your KLUX account and AI analysis tools</p>
        <Badge variant="outline" className="mt-2 border-orange-500 text-orange-500">
          Demo Version - Not Connected to Real Support
        </Badge>
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Live Chat</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="ticket">Submit Ticket</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="chat">
          <Card className="bg-gradient-card border-neon-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-neon-green" />
                Live Chat Support
              </CardTitle>
              <CardDescription>
                Chat with our support team in real-time
                <Badge variant="secondary" className="ml-2 bg-neon-green/20 text-neon-green">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse mr-1" />
                  Online
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <div className="h-80 bg-black/20 rounded-lg p-4 overflow-y-auto space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-neon-green/20 text-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      {msg.type === 'support' && (
                        <div className="flex items-center gap-2 mb-1">
                          <Bot className="w-4 h-4 text-neon-cyan" />
                          <span className="text-xs text-neon-cyan font-medium">Support Agent</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-neon-green/20 focus:border-neon-green"
                />
                <Button onClick={handleSendMessage} className="bg-neon-green/20 hover:bg-neon-green/30 text-neon-green border border-neon-green/50">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq">
          <Card className="bg-gradient-card border-neon-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-neon-cyan" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-border/50 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-sm pl-6">{item.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ticket">
          <Card className="bg-gradient-card border-neon-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-neon-purple" />
                Submit Support Ticket
              </CardTitle>
              <CardDescription>
                Can't find what you're looking for? Submit a detailed support request
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="border-neon-purple/20 focus:border-neon-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Please provide as much detail as possible about your issue..."
                  rows={6}
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="border-neon-purple/20 focus:border-neon-purple resize-none"
                />
              </div>
              
              <Button 
                onClick={handleSubmitTicket}
                className="w-full bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple border border-neon-purple/50"
              >
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card className="bg-gradient-card border-neon-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-neon-cyan" />
                Contact Information
              </CardTitle>
              <CardDescription>Multiple ways to reach our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                    <Mail className="w-5 h-5 text-neon-green" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@klux.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                    <Clock className="w-5 h-5 text-neon-cyan" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 2 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                    <Book className="w-5 h-5 text-neon-purple" />
                    <div>
                      <p className="font-medium">Documentation</p>
                      <p className="text-sm text-muted-foreground">Help articles & guides</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                    <Zap className="w-5 h-5 text-neon-green" />
                    <div>
                      <p className="font-medium">Priority Support</p>
                      <p className="text-sm text-muted-foreground">Pro & Enterprise plans</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-foreground">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (UTC)</p>
                <p className="text-sm text-muted-foreground">Weekend: Limited support available</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}