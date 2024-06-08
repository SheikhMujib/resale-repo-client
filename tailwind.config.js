/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui:{
    themes:[
      {
        resalerepotheme:{
          primary: '#FF5F1F',
          secondary: '#1F51FF',
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

