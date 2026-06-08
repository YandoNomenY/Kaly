/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["*/*.tsx","../*.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F7F0F0",
        grey: {
          DEFAULT: "#F7F0F0",
          100: "#cfcdcd",
          200: "#7c7b7b"
        },
        green: {
          DEFAULT: "#cfcdcd",
          100: "#cfcdcd",
          200: "#25671E"
        },
        yellow: {
          200: "#F2B50B"
        }
      }
    },
  },
  plugins: [],
}