/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        softPink: '#FFCACA',
        darkPlum: '#251B37',
        ivory: '#FAF6F0',
        cream: '#F5EDE0',
        silver: '#D4D0D0',
        lightPink: '#FFE8E8',
        softGray: '#E8E4E0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        threadLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        sway: 'sway 3s ease-in-out infinite',
        swing: 'swing 4s ease-in-out infinite',
        thread: 'threadLine 2s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}