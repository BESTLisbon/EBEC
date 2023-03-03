module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        fontFamily: {
          'bnmachine': ['BNMachine', 'sans-serif'],
          'typemachine': ['Type Machine', 'sans-serif']
        },
      }
    },
    plugins: [],
    darkMode: 'class',
    
};
