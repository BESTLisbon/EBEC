module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      fontFamily: {
        'bnmachine': ['"BN Machine"', 'sans-serif'],
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      }
    },
    plugins: [],
    darkMode: 'class',
    
};
