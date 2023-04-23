/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: '16px',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': ['60px', '63px'],
			'4xl': ['80px', '80px'],
		},
		// colors: {
		// 	transparent: 'transparent',
		// 	current: 'currentColor',
		// 	'white': '#ffffff',
		// 	'purple': '#3f3cbb',
		// 	'midnight': '#121063',
		// 	'metal': '#565584',
		// 	'tahiti': '#3ab7bf',
		// 	'silver': '#ecebff',
		// 	'bubble-gum': '#ff77e9',
		// 	'bermuda': '#78dcca',
		//   },
		extend: {},
	},
	plugins: [],
}
