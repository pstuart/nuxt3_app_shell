// import konstaConfig config
const konstaConfig = require("konsta/config");

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "media", // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
