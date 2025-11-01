import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import pepeImg from "@/assets/coins/pepe.png";
import dogeImg from "@/assets/coins/doge.png";
import shibaImg from "@/assets/coins/shiba.png";
import callIndicator from "@/assets/call-indicator.png";

const topMemeCoins = [
  {
    name: "PEPE",
    symbol: "PEPE",
    image: pepeImg,
    callDate: "Oct 25, 2024",
    entryMarketCap: "$3.2B",
    exitMarketCap: "$12.2B",
    gain: "280%",
    change: "+15.4%",
    trend: "up"
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    image: dogeImg,
    callDate: "Oct 28, 2024",
    entryMarketCap: "$10.8B", 
    exitMarketCap: "$47.5B",
    gain: "340%",
    change: "+8.2%",
    trend: "up"
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    image: shibaImg,
    callDate: "Oct 30, 2024",
    entryMarketCap: "$4.9B",
    exitMarketCap: "$29.4B",
    gain: "500%",
    change: "-2.1%",
    trend: "up"
  }
];

export default function MemeCoinDisplay() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Top AI Picks This Week
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Yes, This model uses the same data you can see, and still makes more money than you
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topMemeCoins.slice(0, 3).map((coin, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-6 bg-gradient-card border-gray-800 hover:border-gray-700 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        <img src={coin.image} alt={coin.name} className="w-full h-full object-cover" />
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

                  {/* Call Date */}
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Call Date</div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">
                      {coin.callDate}
                    </div>
                  </div>

                  {/* Entry and Exit Market Cap */}
                  <div className="mb-3 sm:mb-4 grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Entry Market Cap</div>
                      <div className="text-sm font-semibold text-foreground">{coin.entryMarketCap}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Exit Market Cap</div>
                      <div className="text-sm font-semibold text-foreground">{coin.exitMarketCap}</div>
                    </div>
                  </div>

                  {/* Call Indicator Logo */}
                  <div className="flex items-center justify-center">
                    <img src={callIndicator} alt="Call indicator" className="w-8 h-8" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Update indicator */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-card rounded-full border border-gray-800">
              <span className="text-xs sm:text-sm text-muted-foreground">
                Updated every <span className="text-white font-semibold">Friday</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}