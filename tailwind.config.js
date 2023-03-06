module.exports = {
    content: ["./public/**/*.{html,js}"],
    
    theme: {
      fontFamily: {
        'genos': ['"Genos"', 'cursive']
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
