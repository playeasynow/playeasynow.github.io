/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hind: ['"Hind Madurai"', 'sans-serif'],
      },
      maxWidth: {
        content: '960px',
      },
      colors: {
        'bg-white':   '#ffffff',
        'bg-gray':    '#f0f0f0',
        'bg-body':    '#f9f9f9',
        'text-dark':  '#1a1a1a',
        'text-mid':   '#555555',
        'text-soft':  '#888888',
        'text-light': '#aaaaaa',
        'text-xlight':'#bbbbbb',
        border:       '#e5e5e5',
        cyan:  'rgb(30, 242, 241)',
        red:   'rgb(246, 5, 10)',
      },
    },
  },
  plugins: [],
};
