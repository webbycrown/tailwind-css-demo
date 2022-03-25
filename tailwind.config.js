
module.exports = {
  mode: 'jit',
  content: [
  './*.{html,js,php}'
  ],
  theme: {
    container: {
          center: true,
          padding: '1rem',
        },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1170px',
          // => @media (min-width: 1170px) { ... }
          '2xl': '1600px',
          // => @media (min-width: 1600px) { ... }
        },
        colors: {
            'black': '#151117',
            'white': '#ffffff',
            'gray': '#818181',
            'transparent': 'transparent',
            'theme': '#03d07d',
            'blue': '#0d152b',
        },
    extend: {
        fontFamily: {
            'lato': ['Lato', ' sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        },
    },
  },
  plugins: [],
}
