/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#344e41",
        button: "#dad7cd",
        input: "#a3b18a",
        task: "#588157",
      },
    },
  },
  plugins: [],
};
