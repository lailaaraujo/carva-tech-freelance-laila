/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      boxShadow: {
        "custom-blur": "0 0 85px rgba(255, 1, 129, 0.22)",
      },
      backgroundColor: {
        orange: "orange",
      },
      fontFamily: {
        avenirBlack: ["AvenirLTProBlack", "Helvetica", "Arial", "sans-serif"],
        avenirLight: ["AvenirLTProLight", "Helvetica", "Arial", "sans-serif"],
        avenirMedium: ["AvenirLTProMedium", "Helvetica", "Arial", "sans-serif"],
        avenirMediumOblique: [
          "AvenirLTProMediumOblique",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        syne: ["Syne", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        biomobGreen: "hsl(var(--biomob-green))",
        font: "hsl(var(--font))",
        footer: "hsl(var(--footer))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        testecolor: "hsl(var(--testecolor))",
        //   foreground: "hsl(var(--foreground))",
        //   primary: {
        //     DEFAULT: "hsl(var(--primary))",
        //     foreground: "hsl(var(--primary-foreground))",
        //   },
        //   secondary: {
        //     DEFAULT: "hsl(var(--secondary))",
        //     foreground: "hsl(var(--secondary-foreground))",
        //   },
        //   destructive: {
        //     DEFAULT: "hsl(var(--destructive))",
        //     foreground: "hsl(var(--destructive-foreground))",
        //   },
        //   muted: {
        //     DEFAULT: "hsl(var(--muted))",
        //     foreground: "hsl(var(--muted-foreground))",
        //   },
        //   accent: {
        //     DEFAULT: "hsl(var(--accent))",
        //     foreground: "hsl(var(--accent-foreground))",
        //   },
        //   popover: {
        //     DEFAULT: "hsl(var(--popover))",
        //     foreground: "hsl(var(--popover-foreground))",
        //   },
        //   card: {
        //     DEFAULT: "hsl(var(--card))",
        //     foreground: "hsl(var(--card-foreground))",
        //   },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
      border: {
        elementor:
          "var(--divider-border-style) var(--divider-border-width) var(--divider-color)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      const newComponents = {
        ".custom-ball": {
          position: "relative",
          height: "45vh",
          width: "100%",
          borderRadius: "50%",
          background: "rgba(255, 1, 129, 0.22)",
          filter: "blur(85px)",
        },
        ".left-ball": {
          position: "absolute",
          top: 0,
          left: 0,
          height: "45vh",
          width: "20vw",
          borderRadius: "50%",
          background: "rgba(255, 1, 129, 0.22)",
          filter: "blur(85px)",
        },
        ".right-ball": {
          position: "absolute",
          top: 0,
          right: 0,
          height: "45vh",
          width: "20vw",
          borderRadius: "50%",
          background: "rgba(255, 1, 129, 0.22)",
          filter: "blur(85px)",
        },
      };

      addComponents(newComponents);
    },
  ],

  // plugins: [require("tailwindcss-animate")],
};
