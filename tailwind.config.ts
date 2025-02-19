import flowbite from "flowbite-react/tailwind";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        colorPrimary: "#BF2604",
        colorSecondary: "#1FBF57",
        assets: "#F25A38",
      },

      screens: {
        'max-md': { max: '834px' },
        'max-mobile': {max: '480px'}
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/line-clamp"), // Adiciona o plugin de line-clamp
  ],
};
