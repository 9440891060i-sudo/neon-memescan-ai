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
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-green/10 via-background to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-green/30" />
                <HelpCircle className="w-6 h-6 text-neon-green" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-green/30" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-white via-neon-green to-white bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="text-neon-green">Questions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about Klux AI-powered trading platform
              </p>
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
        <section className="py-16 border-t border-neon-green/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Still have questions?</h3>
              <p className="text-muted-foreground mb-8">
                Our support team is here to help you get the most out of our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-neon text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-glow-green">
                  Contact Support
                </button>
                <button className="px-6 py-3 border border-neon-green/20 text-neon-green rounded-lg hover:bg-neon-green/10 transition-all duration-300">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}