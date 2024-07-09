/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-100": "#F87070",
        "c-200": "#70F3F8",
        "c-300": "#D881F8",
        "c-400": "#D7E0FF",
        "c-500": "#1E213F",
        "c-600": "#FFFFFF",
        "c-700": "#EFF1FA",
        "c-800": "#161932",
      },
      fontFamily: {
        kumbh: '"Kumbh Sans", sans-serif',
        roboto: '"Roboto Slab", serif',
        space: '"Space Mono", monospace',
      },
    },
  },
  plugins: [],
};
