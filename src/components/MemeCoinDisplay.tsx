import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";

const topMemeCoins = [
  {
    name: "PEPE",
    symbol: "PEPE",
    marketCap: "$3.2B",
    sentiment: 8.7,
    change: "+15.4%",
    trend: "up",
    color: "neon-green"
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    marketCap: "$10.8B", 
    sentiment: 7.2,
    change: "+8.2%",
    trend: "up",
    color: "neon-cyan"
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    marketCap: "$4.9B",
    sentiment: 5.8,
    change: "-2.1%",
    trend: "down",
    color: "red-500"
  },
  {
    name: "Floki",
    symbol: "FLOKI",
    marketCap: "$1.1B",
    sentiment: 9.1,
    change: "+22.8%",
    trend: "up", 
    color: "neon-purple"
  },
  {
    name: "Bonk",
    symbol: "BONK",
    marketCap: "$890M",
    sentiment: 8.3,
    change: "+12.5%",
    trend: "up",
    color: "neon-green"
  }
];

export default function MemeCoinDisplay() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-b from-terminal-dark/20 via-background to-background"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-purple/5 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 blur-[120px]"></div>
      
      {/* Scattered dots */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Geometric accents */}
      <div className="absolute top-1/3 right-10 w-32 h-32 border border-neon-cyan/10 rotate-45"></div>
      <div className="absolute bottom-1/4 left-20 w-24 h-24 border-2 border-neon-purple/10 rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Top <span className="text-neon-cyan">AI Picks</span> Today
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Real-time sentiment analysis for the most popular meme coins
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topMemeCoins.slice(0, 3).map((coin, index) => (
              <Card 
                key={index}
                className={`p-4 sm:p-6 bg-gradient-card border-${coin.color === 'red-500' ? 'red-500' : coin.color}/30 hover:border-${coin.color === 'red-500' ? 'red-500' : coin.color} transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-${coin.color === 'red-500' ? 'red-500' : coin.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-${coin.color === 'red-500' ? 'red-500' : coin.color}/20 flex items-center justify-center`}>
                        <span className="font-bold text-xs sm:text-sm">{coin.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-foreground">{coin.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{coin.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`flex items-center gap-1 ${
                        coin.trend === 'up' ? 'text-neon-green' : 'text-red-500'
                      }`}>
                        {coin.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        ) : (
                          <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        <span className="font-semibold text-sm sm:text-base">{coin.change}</span>
                      </div>
                    </div>
                  </div>

                  {/* Market cap */}
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Market Cap</div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">
                      <AnimatedNumber 
                        value={parseFloat(coin.marketCap.replace(/[$BM]/g, ''))} 
                        isVisible={isIntersecting}
                        formatter={(val) => coin.marketCap.includes('B') ? `$${val.toFixed(1)}B` : `$${val}M`}
                      />
                    </div>
                  </div>

                  {/* Sentiment score */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground">AI Sentiment</span>
                      <span className={`text-xs sm:text-sm font-bold ${
                        coin.sentiment >= 8 ? 'text-neon-green' :
                        coin.sentiment >= 6 ? 'text-neon-cyan' :
                        'text-red-500'
                      }`}>
                        <AnimatedNumber 
                          value={coin.sentiment} 
                          isVisible={isIntersecting}
                          formatter={(val) => `${val.toFixed(1)}/10`}
                        />
                      </span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          coin.sentiment >= 8 ? 'bg-neon-green' :
                          coin.sentiment >= 6 ? 'bg-neon-cyan' :
                          'bg-red-500'
                        }`}
                        style={{ 
                          width: isIntersecting ? `${coin.sentiment * 10}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Sentiment indicator */}
                  <div className="flex items-center justify-center">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      coin.sentiment >= 8 
                        ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' :
                      coin.sentiment >= 6 
                        ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {coin.sentiment >= 8 ? 'VERY BULLISH' :
                       coin.sentiment >= 6 ? 'BULLISH' : 'BEARISH'}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Live indicator */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-card rounded-full border border-neon-green/30">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Live data • Updated every <span className="text-neon-green font-semibold">30 seconds</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}