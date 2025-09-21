import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Bright neon colors
        'neon-green': 'hsl(var(--neon-green))',
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'neon-purple': 'hsl(var(--neon-purple))',
        'neon-pink': 'hsl(var(--neon-pink))',
        'neon-blue': 'hsl(var(--neon-blue))',
        'neon-orange': 'hsl(var(--neon-orange))',
        
        // Vibrant chart colors
        'chart-1': 'hsl(var(--chart-1))',
        'chart-2': 'hsl(var(--chart-2))',
        'chart-3': 'hsl(var(--chart-3))',
        'chart-4': 'hsl(var(--chart-4))',
        'chart-5': 'hsl(var(--chart-5))',
        'chart-teal': 'hsl(var(--chart-teal))',
        'chart-orange': 'hsl(var(--chart-orange))',
        'chart-purple': 'hsl(var(--chart-purple))',
        'chart-cyan': 'hsl(var(--chart-cyan))',
        'chart-yellow': 'hsl(var(--chart-yellow))',
        
        // Gain/loss indicators
        'gain': 'hsl(var(--gain-green))',
        'loss': 'hsl(var(--loss-red))',
      },
        backgroundImage: {
          'gradient-dark': 'var(--gradient-dark)',
          'gradient-card': 'var(--gradient-card)',
          'gradient-terminal': 'var(--gradient-terminal)',
          'gradient-neon': 'var(--gradient-neon)',
        },
        boxShadow: {
          'card': 'var(--shadow-card)',
          'terminal': 'var(--shadow-terminal)', 
          'neon-subtle': 'var(--shadow-neon-subtle)',
          'neon-strong': 'var(--shadow-neon-strong)',
          'glow-green': '0 0 20px hsl(var(--neon-green) / 0.5)',
          'glow-cyan': '0 0 20px hsl(var(--neon-cyan) / 0.5)',
          'glow-purple': '0 0 20px hsl(var(--neon-purple) / 0.5)',
        },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
