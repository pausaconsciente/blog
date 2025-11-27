/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./artigos/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista e harmônica - tons terrosos e neutros
        sand: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d9d3ca',
          400: '#c4bbb0',
          500: '#a89d8f',
          600: '#8b7f6f',
          700: '#6e6354',
          800: '#4f4841',
          900: '#38342f',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#b3bcb3',
          400: '#8f9b8f',
          500: '#6d7b6d',
          600: '#566156',
          700: '#444d44',
          800: '#353a35',
          900: '#2a2e2a',
        },
        clay: {
          50: '#f9f7f5',
          100: '#f0ebe6',
          200: '#dfd5cb',
          300: '#c9baac',
          400: '#ae9885',
          500: '#8f7760',
          600: '#735f4c',
          700: '#5c4c3e',
          800: '#4a3f35',
          900: '#3d342d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.75' }],
        'lg': ['1.125rem', { lineHeight: '1.75' }],
        'xl': ['1.25rem', { lineHeight: '1.75' }],
        '2xl': ['1.5rem', { lineHeight: '1.6' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'reading': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#38342f',
            lineHeight: '1.75',
            a: {
              color: '#6d7b6d',
              '&:hover': {
                color: '#566156',
              },
            },
            h1: {
              color: '#2a2e2a',
            },
            h2: {
              color: '#2a2e2a',
            },
            h3: {
              color: '#353a35',
            },
            h4: {
              color: '#353a35',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
