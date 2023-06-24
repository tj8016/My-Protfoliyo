/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        firstColor: "#2b2353",
        secondColor: "#3d3568",
        thirdColor: "#fa4e02",
        subColor: "#eaeafc",
        subColor2: "#fcddc3",
        bgColor: "#f0f3f8",
        bgColor2: "#fcfdf9",
        subText: "#5e5f63",
      },
    },
  },
  plugins: [],
}

