/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
	important: false,
  content: [
    "./index.html",
    "./src/**/*.{jsx,html}", 
  ],
  theme: {
    extend: {
      colors: {
				primary: '#7e22ce',
				secondary: "#080808",
				outlineColor: "#1F2123"
			}
    },
  },
  plugins: [],
}

