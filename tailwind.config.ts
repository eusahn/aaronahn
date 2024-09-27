import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        "sans-serif": ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
