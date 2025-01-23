import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'serif'],
      },
      colors: {
        colorPrimary: "#BF2604",
        colorSecondary: "#1FBF57",
        assets: "#F25A38",
      },
    },
  },
  plugins: [],
} satisfies Config;
