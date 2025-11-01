import { HelpCircle, MessageCircle, CreditCard, Shield, Database, RefreshCw, TrendingUp, Users, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";

const faqData = [
  {
    id: "pricing",
    icon: CreditCard,
    question: "How does the pricing work?",
    answer: "Our platform uses a credit-based system. Each AI analysis costs a certain number of credits depending on the complexity. We offer various subscription tiers with different credit allocations to suit your trading needs. Credits roll over between months and never expire."
  },
  {
    id: "credits",
    icon: RefreshCw,
    question: "What are credits and how are they consumed?",
    answer: "Credits are our internal currency for AI analysis requests. Basic meme coin analysis costs 1 credit, advanced technical analysis costs 3 credits, and premium KLUXIFY insights cost 5 credits. You can track your credit usage in your dashboard and purchase additional credits anytime."
  },
  {
    id: "reliability",
    icon: Shield,
    question: "How reliable is the AI analysis?",
    answer: "Our AI models are trained on extensive market data and achieve 85%+ accuracy in trend prediction. However, cryptocurrency markets are inherently volatile and unpredictable. Our analysis should be used as one factor in your decision-making process, not as financial advice."
  },
  {
    id: "data-sources",
    icon: Database,
    question: "What data sources do you use?",
    answer: "We aggregate data from multiple reliable sources including CoinGecko, CoinMarketCap, DEX trading data, social sentiment analysis from Twitter/X and Reddit, on-chain analytics, and market indicators. Our AI processes this data in real-time for the most current insights."
  },
  {
    id: "refunds",
    icon: MessageCircle,
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first week, contact our support team for a full refund. Refunds for unused credits are considered on a case-by-case basis."
  },
  {
    id: "upgrades",
    icon: TrendingUp,
    question: "Can I upgrade or downgrade my subscription?",
    answer: "Yes! You can upgrade or downgrade your subscription at any time from your account settings. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle. Your unused credits will carry over to your new plan."
  },
  {
    id: "accuracy",
    icon: Users,
    question: "How do you ensure data accuracy and freshness?",
    answer: "Our system updates market data every 5 minutes and social sentiment data every 15 minutes. We use multiple data validation layers and cross-reference information from various sources to ensure accuracy. Our AI models are continuously retrained with the latest market patterns."
  },
  {
    id: "support",
    icon: HelpCircle,
    question: "How can I get help or technical support?",
    answer: "We provide 24/7 support through multiple channels: in-app chat support, email at support@memecoinai.com, and our comprehensive knowledge base. Premium subscribers get priority support with faster response times and dedicated account managers."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Main Content */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <HelpCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Support Center</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    <span className="text-foreground">Questions?</span>
                    <br />
                    <span className="text-muted-foreground">Answered.</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Everything you need to know about Klux. Can't find the answer you're looking for? Feel free to reach out.
                  </p>
                </div>

                {/* Right Side - Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-foreground mb-2">3min</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-foreground mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Users</div>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-foreground mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-0">
                {faqData.map((faq, index) => {
                  const Icon = faq.icon;
                  return (
                    <div key={faq.id}>
                      <AccordionItem 
                        value={faq.id}
                        className="border-none"
                      >
                        <AccordionTrigger className="py-8 text-left hover:no-underline group [&[data-state=open]>.chevron]:rotate-180">
                          <div className="flex items-center gap-4 w-full">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-neon-green" />
                            </div>
                            <span className="text-lg font-medium text-foreground group-hover:text-neon-green transition-colors duration-300">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pl-14 animate-accordion-down">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      {index < faqData.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
                      )}
                    </div>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-24 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Left - Main CTA */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                      <span className="text-foreground">Need help?</span>
                      <br />
                      <span className="text-muted-foreground">We're here.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                      Our team responds in minutes, not hours. Get the support you deserve.
                    </p>
                  </div>
                </div>

                {/* Right - Action Buttons */}
                <div className="space-y-4">
                  <button className="w-full group relative overflow-hidden px-8 py-6 bg-foreground text-background font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <span>Contact Us</span>
                      <MessageCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                  
                  <button className="w-full group px-8 py-6 border-2 border-border text-foreground font-bold text-lg rounded-xl transition-all duration-300 hover:border-foreground hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <span>Community</span>
                      <Users className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                  
                  <div className="pt-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span>Average response time: 3 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}