module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        wiggle: 'wiggle 1s ease-in-out ',
        wiggle_reverse:'wiggle_reverse 0.3s ease-in'
      },
      keyframes: {
        flip: {
          'from': { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ', },
          'to': { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ', }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-60deg)' },
          '50%': { transform: 'rotate(60deg)' },
        },
        wiggle_reverse:{
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
    fontFamily: {
      'redhat': ['Red Hat Text', 'sans-serif'],
    },
  },
  darkMode:"class",
  plugins: [],
}
