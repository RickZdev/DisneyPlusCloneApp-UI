/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // "./node_modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f1014',
        secondary: ['#1f2125', '#191c24'],
      },
      fontFamily: {
        // fonts that are installed on assets/fonts folder
        RobotoBold: 'Roboto-Bold',
        RobotoMedium: 'Roboto-Medium',
        RobotoRegular: 'Roboto-Regular',
        RobotoLight: 'Roboto-Light',
        RobotoThin: 'Roboto-Thin',
      },
    },
  },
  plugins: [],
};
