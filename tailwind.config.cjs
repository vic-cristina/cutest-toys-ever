/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F5DF50",

          secondary: "#40f9a6",

          accent: "#F568D8",

          neutral: "#4439A8",

          "base-100": "#F2EAD6",

          info: "#1684A8",

          success: "#59F55E",

          warning: "#F55547",

          error: "#F55547",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
