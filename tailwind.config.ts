import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4D00",
          neon: "rgba(255,77,0,0.15)",
        },
        secondary: "#00F3FF",
        cyber: {
          black: "#0A0A0A",
          slate: "#1A1A1A",
        }
      },
      boxShadow: {
        "cyber-glow": "0 0 25px rgba(255,77,0,0.7)",
        "neon-pulse": "0 0 15px rgba(0,243,255,0.5)"
      },
      keyframes: {
        "hologram": {
          "0%": { opacity: "0.8", transform: "rotateX(5deg)" },
          "100%": { opacity: "1", transform: "rotateX(-5deg)" }
        }
      },
      animation: {
        'hologram': 'hologram 2s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;