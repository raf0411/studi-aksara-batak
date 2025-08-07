/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Custom Font Families
      fontFamily: {
        'heading': ['Architects Daughter', 'cursive'],
        'main': ['Andada Pro', 'serif'],
        'sans': ['Andada Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Override default sans
      },
      
      colors: {
        // ShadCN UI Colors (keeping existing)
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

        // Custom Batak Color Palette
        batak: {
          // Primary browns - main brand colors
          'brown-light': '#D6C0B3',
          'brown-dark': '#493628',
          'brown-medium': '#AB886D',
          'brown-darker': '#5B3C24',
          'brown-muted': '#956C4EBF', // 75% alpha
          
          // Secondary browns
          'brown-deep': '#311F12',
          'brown-deep-alt': '#331F11',
          'brown-warm': '#372416',
          'brown-rich': '#402B1B',
          'brown-soft': '#AE8769',
          
          // Light tones
          'cream': '#E0B59C',
          'gray-light': '#D9D9D9',
          'gray-warm': '#E4E0E1',
          
          // Neutral tones
          'white': '#FFFFFF',
          'black': '#000000',
          'black-muted': '#00000080', // 50% alpha
          
          // Alpha variants
          'brown-light-50': '#D6C0B380', // 50% alpha
          'brown-light-75': '#D6C0B3BF', // 75% alpha
        },
        
        // Gradient colors (for use with CSS gradients)
        gradient: {
          'start': '#3C2616',
          'end': '#241205',
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'batak-gradient': 'linear-gradient(to bottom, #3C2616 10%, #241205 100%)',
        'batak-gradient-horizontal': 'linear-gradient(to left, #3C2616 10%, #241205 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

