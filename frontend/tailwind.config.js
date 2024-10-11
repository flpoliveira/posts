/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#1A2E05",
      primaryForeground: "#E3E3E3",
      surface: "#FFFFFF",
      foreground: "#252525",
      foregroundSecondary: "#78716C",
      accent: "#E5E7EB",
    },
    borderRadius: {
      sm: "4px",
      full: "9999px",
    },
    fontSize: {
      md: 14,
      sm: 12,
    },
    extend: {},
  },
  plugins: [],
};
