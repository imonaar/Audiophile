import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // surface and text
      'surface-1': "#FFFFFF",
      'text-1': "#FFFFFF",

      'surface-2': "#F1F1F1",
      'text-2':"#000000",

      // button
      'bg-button':"#D87D4A",
      'bg-button-hover':"#fbaf85",
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
