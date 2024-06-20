/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'stromboli': {
        '50': '#f3faf7',
        '100': '#d8efe7',
        '200': '#b1ded0',
        '300': '#83c5b3',
        '400': '#59a895',
        '500': '#3f8d7c',
        '600': '#307164',
        '700': '#28574e',
        '800': '#254a44',
        '900': '#223f3a',
        '950': '#0f2421',
    },
      },
      fontFamily: {
        display: ['var(--font-abhaya-libre)', 'serif'],
      }
    },
  },
  plugins: [],
};
