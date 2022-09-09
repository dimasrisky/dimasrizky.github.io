/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        biru : '#1E40AF',
        merah : '#DC2626',
        abuabu : '#FAFAFA',
      },
    },
    fontFamily : {
      'inter' : ['Inter', 'sans-serif'],
    },
    container: {
      center : 'true',
      screens : {
        lg : '1124px',
        xl : '1124px',
        "2xl" : '1124px',
      },
    },
  },
  plugins: [],
}
