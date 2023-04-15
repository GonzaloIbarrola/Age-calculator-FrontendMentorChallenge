/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    colors: {
      'black' : '#151515',
      'purple' : '#854DFF',
      'white' : '#FFFFFF',
      'light-grey' : '#F0F0F0',
      'grey' : '#716F6F',
      'line' : '#DCDCDC',
      'red' : '#FF5959',
    },
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif']
    },
    fontSize: {
      'large' : ['104px', {
        fontWeight: '800',
        fontStyle: 'italic',
        lineHeight: '110%',
        letterSpacing: '-3px'
      }],
      'medium' : ['32px', {
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: '100px',
        letterSpacing: '1%'
      }],
      'small' : ['14px', {
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: '100%',
        letterSpacing: '25%'
      }],
      'body' : ['14px', {
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: '100%',
      }],
    },
    extend: {},
  },
  plugins: [],
}

