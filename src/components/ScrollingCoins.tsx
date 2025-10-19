import bonk from "@/assets/coins/bonk.png";
import doge from "@/assets/coins/doge.png";
import floki from "@/assets/coins/floki.png";
import pepe from "@/assets/coins/pepe.png";
import shiba from "@/assets/coins/shiba.png";

const coins = [
  { name: "BONK", image: bonk, change: "+12.5%" },
  { name: "DOGE", image: doge, change: "+8.3%" },
  { name: "FLOKI", image: floki, change: "-3.2%" },
  { name: "PEPE", image: pepe, change: "+15.7%" },
  { name: "SHIBA", image: shiba, change: "+5.4%" },
];

export default function ScrollingCoins() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex animate-scroll gap-8">
        {/* First set */}
        {coins.map((coin, index) => (
          <div
            key={`coin-1-${index}`}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-border/40 p-1.5 shadow-sm">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground/90">{coin.name}</span>
              <span className={`text-xs font-medium ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change}
              </span>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {coins.map((coin, index) => (
          <div
            key={`coin-2-${index}`}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-border/40 p-1.5 shadow-sm">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground/90">{coin.name}</span>
              <span className={`text-xs font-medium ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
