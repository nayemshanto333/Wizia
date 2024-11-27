/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0FF1F6',
        secondary:'#14BCB2',
      },
       fontFamily: { 
        worksans: '"Work Sans", sans-serif',
        Montserrat: `"Montserrat", sans-serif`,

       },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

