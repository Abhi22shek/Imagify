/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f0f0f',
        'primary': '#1a1a1a',
        'secondary': '#2a2a2a',
        'accent': '#00aaff',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
      },
    },
  },
  plugins: [],
}