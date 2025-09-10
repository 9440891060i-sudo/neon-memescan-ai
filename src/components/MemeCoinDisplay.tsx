import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

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
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top <span className="text-neon-cyan">Meme Coins</span> Live
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time sentiment analysis for the most popular meme coins
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topMemeCoins.map((coin, index) => (
              <Card 
                key={index}
                className={`p-6 bg-gradient-card border-${coin.color === 'red-500' ? 'red-500' : coin.color}/30 hover:border-${coin.color === 'red-500' ? 'red-500' : coin.color} transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-${coin.color === 'red-500' ? 'red-500' : coin.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${coin.color === 'red-500' ? 'red-500' : coin.color}/20 flex items-center justify-center`}>
                        <span className="font-bold text-sm">{coin.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{coin.name}</h3>
                        <p className="text-sm text-muted-foreground">{coin.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`flex items-center gap-1 ${
                        coin.trend === 'up' ? 'text-neon-green' : 'text-red-500'
                      }`}>
                        {coin.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">{coin.change}</span>
                      </div>
                    </div>
                  </div>

                  {/* Market cap */}
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Market Cap</div>
                    <div className="text-xl font-bold text-foreground">{coin.marketCap}</div>
                  </div>

                  {/* Sentiment score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">AI Sentiment</span>
                      <span className={`text-sm font-bold ${
                        coin.sentiment >= 8 ? 'text-neon-green' :
                        coin.sentiment >= 6 ? 'text-neon-cyan' :
                        'text-red-500'
                      }`}>
                        {coin.sentiment}/10
                      </span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          coin.sentiment >= 8 ? 'bg-neon-green' :
                          coin.sentiment >= 6 ? 'bg-neon-cyan' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${coin.sentiment * 10}%` }}
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
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-card rounded-full border border-neon-green/30">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Live data • Updated every <span className="text-neon-green font-semibold">30 seconds</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}