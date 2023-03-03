module.exports = {
    content: ["./public/**/*.{html,js}"],
    
    theme: {
      fontFamily: {
        'gajraj': ['"Gajraj One"', 'cursive']
      },
      
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
        
      },
    },

    plugins: [],

    darkMode: 'class',
    
};
