import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' },
        },
        fadeOut: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
