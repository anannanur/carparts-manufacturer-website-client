module.exports = {
  content: ["./src/**/*.{html,js}"],
  extend: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16a085",
          secondary: "#1abc9c",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
