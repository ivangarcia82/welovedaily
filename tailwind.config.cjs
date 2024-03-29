/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontSize: {

			'xs': ['14px'],
			'sm': ['16px'],
			'base': ['20px', '28px'],
			'md': ['30px', '30px'],
			'lg': ['40px', '40px'],
			'xl': ['50px', '50px'],
			'2xl': ['60px', '60px'],
			'3xl': ['80px', '80px']


		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'offwhite': '#D9D9D9',
			'black': '#120E0E',
			'darkgrey': '#1E1A1A',

			'webdesign_1': '#CB2D3E',
			'webdesign_2': '#EF473A',
			'branding_1': '#0093E9',
			'branding_2': '#80D0C7',
			'illustration_1': '#FBAB7E',
			'illustration_2': '#F7CE68',
			'animations_1': '#654EA3',
			'animations_2': '#EAAFC8',
			'aidesign_1': '#27EF2F',
			'aidesign_2': '#01B086',
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
