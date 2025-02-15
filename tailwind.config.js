const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "custom":"#068C52"
      },
    },
    fontSize:{
      h1:"2rem",
      h2:"1.5rem",
      h3:"1.17rem",
      h4:"1rem",
      h5:"0.83rem",
      h6:"0.67rem",
      base:"1rem",
      lg:"1.125rem",
      xl:"1.25rem",
      "2xl":"1.5rem",
      "3xl":"1.875rem",
      "4xl":"2.25rem",
      "5xl":"3rem",
      "6xl":"4rem",
      "7xl":"4.5rem",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", 
    addCommonColors: false, 
    defaultTheme: "light", 
    defaultExtendTheme: "light", 
    layout: {}, 
    themes: {
      light: {
        layout: {},
        colors: {}, 
      },
      dark: {
        layout: {}, 
        colors: {}, 
      },
    }
  })],
};
