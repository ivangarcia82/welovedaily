/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: '16px',
			base: ['18px', '26px'],
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': ['60px', '63px'],
			'4xl': ['80px', '80px'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#120E0E',

			'webdesign_1': '#FBAB7E',
			'webdesign_2': '#F7CE68',
			'branding_1': '#0093E9',
			'branding_2': '#80D0C7',
			'illustration_1': '#CB2D3E',
			'illustration_2': '#EF473A',
			'animations_1': '#654EA3',
			'animations_2': '#EAAFC8',
		  },
		extend: {},
	},
	safelist: [
		'from-webdesign_1',
		'to-webdesign_2',
		'from-branding_1',
		'to-branding_2',
		'from-illustration_1',
		'to-illustration_2',
		'from-animations_1',
		'to-animations_2',
  	],
	plugins: [],
}
