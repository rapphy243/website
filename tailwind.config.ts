import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sen: ['var(--font-sen)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
