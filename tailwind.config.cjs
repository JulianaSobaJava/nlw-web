/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './index.html'],
    theme: {
          fontFamily:{
              sans:['Inter', 'sans-serif'],  
            },
        extend: {
            backgroundImage: {
                background: "url('/fundo.png')",
                'nlw-gradient':
                    'linear-gradient(89.86deg, #9572FC 20.08%, #43E7AD 30.94%, #E1D55D 45.57%)',
                    'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)',
            },
        },
    },
    plugins: [],
};
