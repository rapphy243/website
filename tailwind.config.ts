import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class", // Enable dark mode based on class
  theme: {
    extend: {
      fontFamily: {
        sen: ['var(--font-sen)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
