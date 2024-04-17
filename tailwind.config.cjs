/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4592BA'
				},
				yellow: {
					DEFAULT: '#FBB45C'
				},
				'cp-1': {
					DEFAULT: '#E2A253'
				},
				'cp-2': {
					DEFAULT: '#98B08B'
				},
				'cp-3': {
					DEFAULT: '#F67E7D'
				},
				'cp-4': {
					DEFAULT: '#17436D'
				},
				'cp-5': {
					DEFAULT: '#C0840F'
				},
				'cp-6': {
					DEFAULT: '#E69B3D'
				},
				'cp-7': {
					DEFAULT: '#638550'
				},
				'cp-8': {
					DEFAULT: '#538DAA'
				},
				'cp-9': {
					DEFAULT: '#4D6341'
				},
				'cp-10': {
					DEFAULT: '#BC4B4A'
				},
				'cp-11': {
					DEFAULT: '#D3811B'
				}
			},
			gap: {
				'xl': "60px",
				'l': '32px',
				'r': '16px',
				"m": "24px",
				's': '8px',
			},
			padding: {
				'section-y': '80px',
				'section-x': '67px',
				'section-y-mb': '30px',
				'section-x-mb': '20px',
				// 'section-t-mb': '20px',
				// 'section-b-mb': '20px',
			},
			margin: {
				'xl': "60px",
				'l': '32px',
				"m": "24px",
				'r': '16px',
				's': '8px',
			},
			
		
			fontSize: {
				'clamp-1': 'clamp(3rem, 1.5vw, 1rem)',
			},

		},
		fontFamily: {
			'display': ['"Playfair Display"', 'sans-serif'],
			sans: ['"Avenir"', "sans-serif"],
		}
	},
	plugins: [],
}
