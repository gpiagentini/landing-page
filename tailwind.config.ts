import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight-color)"
      },
      fontFamily: {
        rubik: ['Rubik'],
        mono: ['Roboto Mono', 'monospace'],
        matrix: ['Matrix Code NFI', 'monospace']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: '1' },
          "100%": { transform: "translateY(100vh)", opacity: '0' },
        },
        glitch: {
          "0%, 100%": { clipPath: "inset(5% 0% 90% 0%)" },
          "10%": { clipPath: "inset(10% 0% 90% 0%)" },
          "20%": { clipPath: "inset(15% 0% 75% 0%)" },
          "30%": { clipPath: "inset(30% 0% 65% 0%)" },
          "40%": { clipPath: "inset(50% 0% 40% 0%)" },
          "50%": { clipPath: "inset(75% 0% 20% 0%)" },
          "60%, 90%": { clipPath: "inset(90% 0% 5% 0%)" },
        },
        glitchHorizontal: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-4px)" },
          "40%": { transform: "translate(4px)" },
          "60%": { transform: "translate(-1px)" },
          "80%": { transform: "translate(1px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        spinSlow: 'spin 1.5s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fall: "fall 5s linear infinite",
        glitch: "glitch 1.5s infinite",
        glitchHorizontal: "glitchHorizontal .8s infinite",
        spin: "spin 1s linear infinite"
      },
    },
  },
  plugins: [],
} satisfies Config;
