import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium backdrop-blur-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border",
  {
    variants: {
      variant: {
        default: "bg-[var(--glass-bg)] text-foreground border-[var(--glass-border)] shadow-[var(--glass-shadow)] hover:bg-[var(--glass-highlight)] hover:border-foreground/20 hover:shadow-lg",
        destructive: "bg-destructive/60 text-destructive-foreground border-destructive/30 backdrop-blur-xl hover:bg-destructive/70 hover:border-destructive/50",
        outline: "bg-background/40 border-input backdrop-blur-xl hover:bg-accent/40 hover:text-accent-foreground hover:border-accent-foreground/30",
        secondary: "bg-secondary/60 text-secondary-foreground border-secondary/30 backdrop-blur-xl hover:bg-secondary/70 hover:border-secondary/50",
        ghost: "border-transparent backdrop-blur-xl hover:bg-accent/40 hover:text-accent-foreground hover:border-accent-foreground/20",
        link: "text-primary underline-offset-4 hover:underline border-transparent backdrop-blur-none",
        neon: "bg-gradient-neon/80 text-background font-semibold backdrop-blur-xl border-neon-green/30 hover:shadow-neon-green hover:bg-gradient-neon transition-all duration-300",
        "neon-outline": "border border-neon-green bg-transparent backdrop-blur-xl text-neon-green hover:bg-neon-green/20 hover:shadow-neon-green transition-all duration-300",
        analyze: "bg-neon-green/90 text-background font-bold backdrop-blur-xl border-neon-green/50 hover:shadow-neon-green hover:scale-105 hover:bg-neon-green transition-all duration-300 animate-pulse-neon",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
