import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary'  : '#002E62',
        'secondary': '#4A4B1F',
        'warning'  : '#F69E09',
        'error'    : '#540101',
        'light'    : '#BDBEBF',
        'orange'   : '#E32D12'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
