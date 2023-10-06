/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-image':
                "url('https://res.cloudinary.com/dcb4ilgmr/image/upload/v1693025124/utilities/black-background-with-gold-black-ornate-frames-black-background_901003-2957_vqykxi.avif')",
             
      },
    },
    colors: {
      'primary': '#b0afdc',
      'colorBold' : '#b0afdc',
      'colorNormal': '#000000',
      'milky': 'rgba(244, 107, 91, 0.05)',
      'gray': '#C4C4C4',
      'white': '#FFFFFF',
      'black': '#0000000',
      'red': '#FF1919',
      'green': '#14B918',
      "yellow":"#D5AB09",
      
    },
  },
  plugins: [],
}
