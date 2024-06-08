import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2.5rem',
				sm: '1.5rem', // Not working may be because I've changed the approach to desktop first see below
			},
			screens: {
				'2xl': '1400px',
			},
		},
		screens: {
			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			'md-sm': { max: '740px' },

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }

			tiny: { max: '550px' },
		},
		extend: {
			colors: {
				secondary: {
					'50': '#F7F7F7',
					'80': '#F0F0F0',
					'100': '#c8c6c6',
					'200': '#adabab',
					'300': '#878484',
					'400': '#706d6d',
					'500': '#4c4848',
					'600': '#454242',
					'700': '#363333',
					'800': '#2a2828',
					'900': '#201e1e',
				},
				primary: {
					'100': '#ffd9b5',
					'200': '#ffc791',
					'300': '#ffad5e',
					'400': '#ff9d3f',
					'500': '#ff850f',
					'600': '#e8790e',
					'700': '#b55e0b',
					'800': '#8c4908',
					'900': '#6b3806',
				},
			},
			fontFamily: {
				main: ['var(--font-main)'],
				inter: ['var(--font-inter)'],
			},
			keyframes: {
				float: {
					'0%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(10px)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				float: 'float 3s infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
