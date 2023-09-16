import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark01": "#0d0b20",
        "dark-alt": "#15132B",
        "accent-blue": "#5ECFFF",
        "accent-pink": "#E328AF",
        "accent-purple": "#6418C3",
        "main-text": "#7879F1",
        "off-white": "#c7c7c7",
      },
    },
  },
  plugins: [],
}
export default config
