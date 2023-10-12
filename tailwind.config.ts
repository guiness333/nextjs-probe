import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend: {
    colors: {
      'w-gray-500': '#737994',
      'w-blue-500': '#8caaee',
      'w-blue-900': '#303446',
    },
    width: {
      120: '30rem',
      125: '31.25rem'
    },
    height: {
      125: '31.25rem',
    }
   }
  },
  plugins: [],
};
export default config;
