/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      "center": true,
      "padding": {
        "mobile": "1rem",
        "tablet": "2rem",
        "desktop": "3rem",
      }
    },
    fontFamily: {
      "body": ['Inter']
    },
    extend: {
      "colors": {
        "primary": "hsl(75, 94%, 57%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-grey": "hsl(0, 0%, 20%)",
        "neutral-dark": "hsl(0, 0%, 12%)",
        "neutral-black": "hsl(0, 0%, 8%)"
      },
    },
    "screens": {
      "sm": "576px",
      "md": "768px",
      "lg": "1280px",
      "max": "1550px",
    }
  },
  plugins: [],
}

