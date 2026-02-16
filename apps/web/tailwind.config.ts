import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfbff",
          100: "#d6f6ff",
          200: "#adeeff",
          300: "#7be5ff",
          400: "#48dbfb",
          500: "#1cc9ef",
          600: "#10a8cb",
          700: "#1185a0"
        },
        surface: "#ffffff",
        muted: "#f8fafc",
        subtle: "#e2e8f0",
        ink: "#0f172a"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "24px"
      },
      boxShadow: {
        card: "0 6px 20px rgba(15,23,42,0.06)",
        elevated: "0 10px 30px rgba(15,23,42,0.10)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.25s ease-out",
        shimmer: "shimmer 1.4s infinite"
      }
    }
  },
  plugins: []
};

export default config;
