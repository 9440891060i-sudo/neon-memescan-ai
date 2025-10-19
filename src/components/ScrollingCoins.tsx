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
    <div className="relative w-full overflow-hidden py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex animate-scroll gap-3">
        {/* First set */}
        {coins.map((coin, index) => (
          <div
            key={`coin-1-${index}`}
            className="flex-shrink-0 px-4 py-2.5 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg flex items-center gap-3 hover:bg-background/80 transition-colors"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted/50 flex items-center justify-center">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground/90">{coin.name}</span>
              <span className={`text-xs font-semibold tabular-nums ${coin.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {coin.change}
              </span>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {coins.map((coin, index) => (
          <div
            key={`coin-2-${index}`}
            className="flex-shrink-0 px-4 py-2.5 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg flex items-center gap-3 hover:bg-background/80 transition-colors"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted/50 flex items-center justify-center">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground/90">{coin.name}</span>
              <span className={`text-xs font-semibold tabular-nums ${coin.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {coin.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
