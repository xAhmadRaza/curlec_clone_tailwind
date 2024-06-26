/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        uplifter: "uplifter 17s  linear infinite",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },

      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },

      keyframes: {
        uplifter: {
          "0%": {
            // transform: "translateY(0%)",
          },

          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1120px",
      "2xl": "1300px",
    },
  },
  plugins: [],
};
