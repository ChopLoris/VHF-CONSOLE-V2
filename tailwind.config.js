const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue-gray': colors.blueGray,
      'cool-gray': colors.coolGray,
      'true-gray': colors.trueGray,
      'warm-gray': colors.warmGray,
      'orange': colors.orange,
      'amber': colors.amber,
      'gradient' : colors.gradient,
      'lime': colors.lime,
      'emerald': colors.emerald,
      'teal': colors.teal,
      'cyan': colors.cyan,
      'light-blue': colors.lightBlue,
      'indigo': colors.indigo,
      'violet': colors.violet,
      'purple': colors.purple,
      'fuchsia': colors.fuchsia,
      'pink': colors.pink,
      'rose': colors.rose,
      'sidebar': "#222F49",
      'primary': "#00929C",
      "secondary": "#83858A",
      'header': "rgba(82, 85, 91, 0.3)",
      "border": "rgba(26, 29, 40, 0.35)"
    },
    backgroundImage: {
      'panel' : "linear-gradient(0deg, rgba(0, 49, 56, 0.24), rgba(0, 49, 56, 0.24)), linear-gradient(72.3deg, #151520 1.18%, #2F2735 99.15%)",
      'buttonChannel' : "linear-gradient(149.75deg, #044989 3.89%, rgba(24, 38, 51, 0) 82.97%)"
    },
    extend: {},
  },
  plugins: [],
}