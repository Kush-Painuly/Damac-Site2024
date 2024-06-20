/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'xs': '4px',
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '96px',
      },
      backgroundImage:{
        'damac-bg': "url('../src/assets/damac-bg.jpg')"
      },
      backgroundPosition:{
        '18':'0% 16%',
      },
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif']
      },
      fontSize: {
        'custom-48': '48px', 
      },
      lineHeight:{
        'lh-62':'62.4px'
      },
      colors:{
        'lightshade':'rgba(0, 0, 0, 0.26)',
        'extralightshade':'rgba(0, 0, 0, 0.3)',
        'textShade':'rgba(152, 197, 232, 1)',
        'foot-bg': 'rgba(9, 29, 65, 1)',
      },
      animation:{
        'slideIn': 'slideLeft 2s 2s linear'
      }
    }
  },
  plugins: [],
}
