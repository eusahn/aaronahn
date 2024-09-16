import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
