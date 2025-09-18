import { useState, useEffect, useRef } from "react";
import roboDogMascot from "@/assets/robo-dog-mascot.png";

interface DogPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export default function RoboDogMascot() {
  const [dogPosition, setDogPosition] = useState<DogPosition>({
    x: 50, // Start at center horizontally
    y: 20, // Start near the KLUX logo
    rotation: 0,
    scale: 1
  });
  const [isHovered, setIsHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const dogRef = useRef<HTMLDivElement>(null);

  // Define anchor points for each section
  const anchorPoints = [
    { x: 50, y: 20, rotation: 0 }, // Hero section - hanging from KLUX
    { x: 15, y: 35, rotation: -10 }, // HowItWorks - left side
    { x: 85, y: 50, rotation: 15 }, // DashboardPreview - right side
    { x: 25, y: 65, rotation: -5 }, // MemeCoinDisplay - left side
    { x: 75, y: 80, rotation: 10 }, // PricingSection - right side
    { x: 50, y: 95, rotation: 0 }  // CTASection - center bottom
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate which section we're in based on scroll progress
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      const sectionIndex = Math.min(
        Math.floor(scrollProgress * anchorPoints.length),
        anchorPoints.length - 1
      );

      if (sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
        
        // Animate to new position
        const targetAnchor = anchorPoints[sectionIndex];
        
        setDogPosition(prev => ({
          x: targetAnchor.x,
          y: targetAnchor.y,
          rotation: targetAnchor.rotation,
          scale: scrollProgress < 0.1 ? 1 : 0.8 // Slightly smaller when scrolling
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  // Hover effects
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={dogRef}
      className="fixed pointer-events-auto z-50 transition-all duration-1000 ease-out"
      style={{
        left: `${dogPosition.x}%`,
        top: `${dogPosition.y}%`,
        transform: `translate(-50%, -50%) rotate(${dogPosition.rotation}deg) scale(${dogPosition.scale}) ${isHovered ? 'scale(1.1)' : ''}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tether line when hanging from logo */}
      {currentSection === 0 && (
        <div 
          className="absolute -top-8 left-1/2 w-0.5 bg-gradient-to-b from-neon-cyan/60 to-transparent"
          style={{ height: '32px', transform: 'translateX(-50%)' }}
        />
      )}
      
      {/* Main dog image */}
      <img
        src={roboDogMascot}
        alt="Robo Dog Mascot"
        className="w-20 h-20 object-contain drop-shadow-lg transition-all duration-300"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.6)) brightness(1.1)' 
            : 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.3))'
        }}
      />
      
      {/* Hover spark effect */}
      {isHovered && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-neon-green" />
      )}
      
      {/* Robotic tail wag on hover */}
      {isHovered && (
        <div 
          className="absolute -bottom-1 -right-2 w-3 h-0.5 bg-gradient-to-r from-neon-cyan to-transparent rounded-full animate-pulse robo-tail-wag"
        />
      )}
    </div>
  );
}