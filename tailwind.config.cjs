/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
  
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "spot-black": "#1E1E1E",
        "spot-white": "#F9F9F9",
        "spot-dark-gray": "#4F4F4F",
        "spot-gray": "#747474",
        "spot-light-gray": "#999999",
        "spot-accent-1": "#D5ABFF",
        "spot-accent-2": "#4EB364",
      },
      fontFamily: {
        "spot-display": ["dimensions, sans-serif"],
        "spot-aktiv-grotesk": ["aktiv-grotesk, sans-serif"],
        "spot-aktiv-grotesk-thin": ["aktiv-grotesk-thin, sans-serif"],
        "spot-aktiv-grotesk-condensed": ["aktiv-grotesk-condensed, sans-serif"],
        "spot-aktiv-grotesk-ex": ["aktiv-grotesk-extended, sans-serif"],
      },
  
      fontSize: {
        "spot-display": "186.3px",
        "spot-mega": "61px",
        "spot-xxxl": "48.83px",
        "spot-xxl": "39.06px",
        "spot-xl": "31.25px",
        "spot-lg": "25px",
        "spot-md": "20px",
        "spot-base": "16px",
        "spot-sm": "12.8px",
        "spot-xs": "10.24px",
        "spot-xxs": "8.19px",
        "spot-xxxs": "6.55px",
      },
  
      fontWeight: {
        "spot-regular": "400",
        "spot-bold": "700",
        "spot-xbold": "800",
        "spot-black": "900",
      },
  
      spacing: {
        "spot-gap-65": "65px",
        "spot-gap-55": "55px",
        "spot-gap-45": "45px",
        "spot-gap-25": "25px",
        "spot-gap-15": "15px",
        "spot-gap-10": "10px",
        "spot-gap-5": "5px",
        "spot-gap-0": "0px",
        "spot-margin-120": "120px",
        "spot-margin-110": "110px",
        "spot-margin-100": "100px",
        "spot-margin-60": "60px",
        "spot-margin-55": "55px",
        "spot-margin-50": "50px",
        "spot-margin-45": "45px",
        "spot-margin-40": "40px",
        "spot-margin-35": "35px",
        "spot-margin-30": "30px",
        "spot-margin-25": "25px",
        "spot-margin-20": "20px",
        "spot-margin-15": "15px",
        "spot-margin-10": "10px",
        "spot-margin-8": "8px",
        "spot-margin-5": "5px",
        "spot-margin-0": "0px",
        "spot-padding-120": "120px",
        "spot-padding-110": "110px",
        "spot-padding-100": "100px",
        "spot-padding-60": "60px",
        "spot-padding-55": "55px",
        "spot-padding-50": "50px",
        "spot-padding-45": "45px",
        "spot-padding-40": "40px",
        "spot-padding-35": "35px",
        "spot-padding-30": "30px",
        "spot-padding-25": "25px",
        "spot-padding-20": "20px",
        "spot-padding-15": "15px",
        "spot-padding-10": "10px",
        "spot-padding-8": "8px",
        "spot-padding-0": "0px",
      },
  
      borderWidth: {
        "spot-1": "1px",
        "spot-2": "2px",
        "spot-3": "3px",
        "spot-5": "5px",
      },
  
      zIndex: {
        "--spot-index-level-4": "15",
        "--spot-index-level-3": "10",
        "--spot-index-level-2": "5",
        "--spot-index-level-1": "0",
        "--spot-index-level-negative": "-5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
