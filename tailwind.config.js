/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ["var(--font-verdana)"],
        nunito: ["var(--font-nunito)"],
      },
      textColor: {
        vibrant: "#F97B22",
        bg: "#1E1E1E",
      },
      backgroundColor: {
        vibrant: "#F97B22",
        bg: "#1E1E1E",
      },
    },
  },
  plugins: [require("tailwindcss-intersect")],
};
