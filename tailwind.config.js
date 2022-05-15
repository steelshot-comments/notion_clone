module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        'flex-0': '0 0 auto',
      },
      colors: {
        'hover': 'rgba(55, 53, 47, 0.08)',
        'hover-light': 'rgba(247, 249, 249, 0.1)',
        'nav': '#202120',
      },
      boxShadow: {
        'ctxmenuDark': 'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 3px 6px, rgb(15 15 15 / 40%) 0px 9px 24px;',
        'ctxmenuLight': 'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;',
      }
    },
  },
  plugins: [],
}
