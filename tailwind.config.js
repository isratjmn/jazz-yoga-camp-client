/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  /* daisyui: {
		themes: [
			{
				light: {
					// primary: "#374151",
					secondary: "#FFC000",
					accent: "#ffffff", 
					neutral: "#000000", 
					"base-100": "#ffffff",
					info: "#1B1821",
					success: "#000000", 
					warning: "#1B1821", 
					error: "#ffffff",
				},
			},
			{
				dark: {
					primary: "#f3f4f6",
					secondary: "#FDE68A",
					accent: "#000000",
					neutral: "#ffffff",
					"base-100": "#1F2937",
					info: "#fde047",
					success: "#1BBB70",
					warning: "#fcfafa",
					error: "#ffffff",
				},
			},
		],
	}, */
  plugins: [require('daisyui')]
}
