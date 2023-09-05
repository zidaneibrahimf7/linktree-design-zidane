/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "10px 10px 0px -1px rgba(0,0,0,1)"
      },
      backgroundImage: {
        'banana-yellow': "url(https://images.unsplash.com/photo-1579762593217-46655e4e7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1517&q=80)",
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto Mono', 'monospace'],
      oldStandart: ['Old Standard TT', 'serif']
    },
  },
  plugins: [],
}