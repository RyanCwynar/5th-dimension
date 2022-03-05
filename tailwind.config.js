module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          'xln': '9rem',
        },
      },
      spacing: {
        21: '84px'
      },
      screens: {
        xln: '1440px',
        'xxl': '1650px',
        '3xl': '1800px',
      },
      maxHeight: {
        'video': '686px'
      },
      minHeight: {
        'video': '686px'
      },
      minWidth: {
        'video': '1480px'
      },
      fontFamily: {
        'RedHat': 'Red_Hat_Text',
        'RedRose': 'Red_Rose',
      },
      backgroundImage: {
        bannerGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 40%, #000000 100% )',
        contentGradient: 'linear-gradient(160.26deg, #000000 10.79%, #200F30 25.52%, #000000 38.69%, #200F30 53.92%, #000000 73.03%, #200F30 100%)',
        buttonGradient: 'linear-gradient(142.72deg, #8001FF -3.71%, #FFB950 147.71%)',
        buttonGradientHover: 'linear-gradient(137.62deg, #FFB950 -44.68%, #8001FF 104.21%)',
        textGradient: 'linear-gradient(184.7deg, #E394FF 3.76%, #FFB950 154.81%)',
        textGradientOpacity: 'linear-gradient(184.7deg, rgba(227, 148, 255, 0.8) 3.76%, rgba(255, 185, 80, 0.8) 154.81%)',
        featureWrapperGradient: 'linear-gradient(142.72deg, rgba(128, 1, 255, 1) -3.71%, rgba(255, 185, 80, 1) 147.71%)',
        featureWrapperGradient2: 'linear-gradient(135.74deg, #FFB950 -27.25%, #8001FF 114.35%)',
        featureGradient: 'linear-gradient(142.72deg, rgba(128, 1, 255, 0.25) -3.71%, rgba(255, 185, 80, 0.25) 147.71%)',
        featureGradientHover: 'linear-gradient(142.72deg, rgba(128, 1, 255, 0.5) -3.71%, rgba(255, 185, 80, 0.5) 147.71%)',
        featureGradientHover2: 'linear-gradient(144.78deg, rgba(255, 185, 80, 0.25) -39.65%, rgba(128, 1, 255, 0.25) 151.38%);',
        // featureGradientHover: 'linear-gradient(144.78deg, rgba(255, 185, 80, 0.25) -39.65%, rgba(128, 1, 255, 0.25) 151.38%)'
      },
      colors: {
        primary: '#D4D4D4',
        backColor: '#200F30'
      },
      fontSize: {
        content: ['30px', '39.69px'],
        contentSmall: ['24px', '31.75px'],
        heading: ['50px', '62.45px'],
        buttonPrimary: ['25px', '33.07px'],
        buttonSmall: ['15px', '19.85px']
      }
    },
  },
  plugins: [],
}
