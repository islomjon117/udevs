/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav_contact': '#1b5bf7',
        'header_title': '#464359',
        'our_services': '#1c1d23',
        'delever': '#ff5722'
      },
      animation: {
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink .75s step-end infinite',
      },
    },
  },
  plugins: [],
}
