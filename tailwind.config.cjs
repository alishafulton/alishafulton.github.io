module.exports = {
  purge: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{html,js,jsx,ts,tsx}', 
  './src/pages/**/*.{html,js,jsx,ts,tsx}', 
'./src/components/**/*.{html,js,jsx,ts,tsx}'],

safelist: [
  '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
],

safelist: [
  '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '500': '500px'
      },
      width: {
        '500': '500px'
      },
      letterSpacing: {
        tightest: '-0.1em',
      },
      fontSize: {
        '2xs': '0.5rem',
        'xs': '0.625rem',
        'sm': '0.75rem'
      },
      fontFamily: {
        serif: ["Garamond", "serif"],
        sans: ["SFDisplay", "sans"],
        mono: ["Andale", "mono"],
        fancy: ["Inter", "fancy"],
        coast: ["Futura", "coast"],
        channel: ["Outfit", "channel"],
        },
      colors: {
        transparent: 'transparent',
        black: '#131514',
        tan: '#FAFAFA',
        pink: '#FF5666',
        orange: '#FF785A',
        green: '#41A039',
        blue: '#335FCF',
        purple: '#BEA7E5',
        white: '#FAFAFA',
        navy: '#162A3C',
        channelbg: '#EBF0F5',
        eggshell: '#FCFAF1',
      },
      backgroundImage: {
        'coast-logo': "url('/src/assets/s_logo.png')",
      },
    },
  corePlugins: []
}
}                     