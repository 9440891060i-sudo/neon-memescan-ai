import memeCoinsImage from "@/assets/meme-coins-collection.png";

const memeCoins = [
  { name: "PEPE", price: "$0.00001234", change: "+15.4%", sentiment: "bullish" },
  { name: "DOGE", price: "$0.074", change: "+8.2%", sentiment: "bullish" },
  { name: "SHIBA", price: "$0.00000845", change: "-2.1%", sentiment: "bearish" },
  { name: "FLOKI", price: "$0.000234", change: "+22.8%", sentiment: "bullish" },
  { name: "BONK", price: "$0.00003421", change: "+12.5%", sentiment: "bullish" },
];

export default function MemeCoinTicker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neon-green/20">
      <div className="overflow-hidden py-2">
        <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
          {/* Repeat the coins multiple times for seamless scrolling */}
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8">
              {memeCoins.map((coin) => (
                <div key={`${groupIndex}-${coin.name}`} className="flex items-center gap-3 px-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-neon"></div>
                  <span className="font-bold text-foreground">{coin.name}</span>
                  <span className="text-muted-foreground">{coin.price}</span>
                  <span 
                    className={`font-semibold ${
                      coin.sentiment === 'bullish' ? 'text-neon-green' : 'text-red-500'
                    }`}
                  >
                    {coin.change}
                  </span>
                  <div 
                    className={`w-2 h-2 rounded-full ${
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