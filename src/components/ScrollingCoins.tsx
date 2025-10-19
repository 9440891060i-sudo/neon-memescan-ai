import bonk from "@/assets/coins/bonk.png";
import doge from "@/assets/coins/doge.png";
import floki from "@/assets/coins/floki.png";
import pepe from "@/assets/coins/pepe.png";
import shiba from "@/assets/coins/shiba.png";

const coins = [
  { name: "BONK", image: bonk },
  { name: "DOGE", image: doge },
  { name: "FLOKI", image: floki },
  { name: "PEPE", image: pepe },
  { name: "SHIBA", image: shiba },
];

export default function ScrollingCoins() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {/* First set */}
        {coins.map((coin, index) => (
          <div
            key={`coin-1-${index}`}
            className="flex-shrink-0 mx-6 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-background/50 backdrop-blur-sm border border-border/30 p-1.5">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs text-foreground/50 font-medium">{coin.name}</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {coins.map((coin, index) => (
          <div
            key={`coin-2-${index}`}
            className="flex-shrink-0 mx-6 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-background/50 backdrop-blur-sm border border-border/30 p-1.5">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs text-foreground/50 font-medium">{coin.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
