import pepeIcon from "@/assets/coins/pepe.png";
import dogeIcon from "@/assets/coins/doge.png";
import shibaIcon from "@/assets/coins/shiba.png";
import flokiIcon from "@/assets/coins/floki.png";
import bonkIcon from "@/assets/coins/bonk.png";

const memeCoins = [
  { name: "PEPE", price: "$0.00001234", change: "+15.4%", sentiment: "bullish", icon: pepeIcon },
  { name: "DOGE", price: "$0.074", change: "+8.2%", sentiment: "bullish", icon: dogeIcon },
  { name: "SHIBA", price: "$0.00000845", change: "-2.1%", sentiment: "bearish", icon: shibaIcon },
  { name: "FLOKI", price: "$0.000234", change: "+22.8%", sentiment: "bullish", icon: flokiIcon },
  { name: "BONK", price: "$0.00003421", change: "+12.5%", sentiment: "bullish", icon: bonkIcon },
];

export default function MemeCoinTicker() {
  return (
    <div className="w-full bg-black/90 backdrop-blur-sm border-b border-neon-green/20 h-10 sm:h-12">
      <div className="overflow-hidden py-1 sm:py-2">
        <div className="animate-ticker flex items-center gap-4 sm:gap-8 whitespace-nowrap">
          {/* Repeat the coins multiple times for seamless scrolling */}
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-4 sm:gap-8">
              {memeCoins.map((coin) => (
                <div key={`${groupIndex}-${coin.name}`} className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4">
                  <img 
                    src={coin.icon} 
                    alt={`${coin.name} logo`} 
                    className="w-4 h-4 sm:w-6 sm:h-6 rounded-full object-cover"
                  />
                  <span className="font-bold text-foreground text-sm sm:text-base">{coin.name}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm">{coin.price}</span>
                  <span 
                    className={`font-semibold text-xs sm:text-sm ${
                      coin.sentiment === 'bullish' ? 'text-neon-green' : 'text-red-500'
                    }`}
                  >
                    {coin.change}
                  </span>
                  <div 
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                      coin.sentiment === 'bullish' ? 'bg-neon-green shadow-neon-green' : 'bg-red-500'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}