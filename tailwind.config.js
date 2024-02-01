/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        "green-button-bg-color": "#6EE7B7",
        "green-button-text-color": "#ECFDF5",
        "green-button-border-color": "#34D399",
        "modal-border-color": "#C3CEDE",
        "background-primary-color": "#edf0f5",
        "input-bg-color": "#f0f2f5"
      } 
    },
  },
  plugins: [],
}

