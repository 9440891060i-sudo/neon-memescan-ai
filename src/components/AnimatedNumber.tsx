import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  isVisible: boolean;
  formatter?: (value: number) => string;
  className?: string;
}

export const AnimatedNumber = ({ 
  value, 
  duration = 2000, 
  isVisible, 
  formatter = (val) => val.toString(),
  className = ""
}: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.floor(value * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isVisible]);

  return (
    <span className={className}>
      {formatter(currentValue)}
    </span>
  );
};