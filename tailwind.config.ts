import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "1rem", // Adjust the padding as needed
    },
    extend: {
      transform: ["hover", "focus"], // Add this line
      fontSize: {
        xs16: "16px", // Extra Small
        sm18: "18px", // Small
        base20: "20px", // Base
        lg24: "24px", // Large
        xl30: "30px", // Extra Large
        xxl40: "40px", // Extra Large
        xxxl50: "50px",
        xxxl60: "60px", // Extra Large
        xlx100: "100px", // Extra Large
      },
      colors: {
        darkbg: "#3B3B3B",
        darkdeepbg: "#202020",
        red: "#CA0F10",
        white: "#ffffff",
        white70: "#ffffffb3",
        white80: "#FFFFFFCC",
        white90: "#ffffffe6",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xll: "1300px",
        xlll: "1500px",
        xllll: "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
