/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Cleric Sans Text', 'Inter', 'sans-serif'],
  			serif: ['GT Alpina', 'Lora', 'serif'],
  			heading: ['GT Alpina', 'Lora', 'serif'],
  			body: ['Cleric Sans Text', 'Inter', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			// Cleric AI Primary Colors
  			'cleric-white': 'hsl(var(--primary-white))',
  			'cleric-black': 'hsl(var(--primary-black))',
  			'cleric-gray-a': 'hsl(var(--primary-gray-a))',

  			// Text Colors
  			'text-a': 'hsl(var(--text-a))',
  			'text-b': 'hsl(var(--text-b))',
  			'text-d': 'hsl(var(--text-d))',

  			// Secondary Colors
  			'purple-40': 'hsl(var(--purple-40))',
  			'blue-10': 'hsl(var(--blue-10))',
  			'gray-light': 'hsl(0, 0%, 97.3%)',
  			'gray-lighter': 'hsl(200, 20%, 97.5%)',
  			'gray-medium': 'hsl(0, 0%, 91.8%)', // rgba(234, 234, 234, 1)
  			'gray-card': '#f8f8f8',
  			'gray-card-border': '#ebebeb',

  			// Base tokens
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}