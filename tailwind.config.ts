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
        slideDown: {
          '0%': { transform: 'scaleY(0)'},
          '100%': { transform: 'scaleY(1)'}
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out'
      },
    },
  },
  plugins: [],
} satisfies Config;
