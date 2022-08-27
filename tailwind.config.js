module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            main: '#404C55',
            dark: '#364047',
            '4p': 'rgba(64, 76, 85, 0.04)',
            '8p': 'rgba(144, 202, 249, 0.08)',
            50: 'rgba(144, 202, 249, 0.5)',
          },
          secondary: {
            main: '#45D2E3',
            dark: '#41C0CF',
            '4p': 'rgba(0, 148, 202, 0.04)',
            '8p': 'rgba(0, 148, 202, 0.08)',
            '50p': 'rgba(0, 148, 202, 0.5)',
          },
          error: {
            main: '#D32F2F',
            dark: '#C62828',
            '4p': 'rgba(211, 47, 47, 0.04)',
            '8p': 'rgba(211, 47, 47, 0.08)',
            '50p': 'rgba(211, 47, 47, 0.5)',
          },
          warning: {
            main: '#ED6C02',
            dark: '#E65100',
            '4p': 'rgba(237, 108, 2, 0.04)',
            '8p': 'rgba(237, 108, 2, 0.08)',
            '50p': 'rgba(237, 108, 2, 0.5)',
          },
          info: {
            main: '#0094CA',
            dark: '#0280AE',
            '4p': 'rgba(2, 136, 209, 0.04)',
            '8p': 'rgba(2, 136, 209, 0.08)',
            '50p': 'rgba(2, 136, 209, 0.5)',
          },
          success: {
            main: '#2E7D32',
            dark: '#1B5E20',
            '4p': 'rgba(46, 125, 50, 0.04)',
            '8p': 'rgba(46, 125, 50, 0.08)',
            '50p': 'rgba(46, 125, 50, 0.5)',
          },
          grey: {
            100: '#F5F5F5',
            300: '#E0E0E0',
          },
          text: {
            main: '#404C55',
            dark: '#ffffff',
            secondary: 'rgba(64, 76, 85, 0.6)',
            '4p': 'rgba(64, 76, 85, 0.04)',
            '8p': 'rgba(64, 76, 85, 0.08)',
            '50p': 'rgba(64, 76, 85, 0.5)',
          },
          other: {
            input: 'rgba(0, 0, 0, 0.42)',
            'filled-input': 'rgba(0, 0, 0, 0.06)',
          },
        },
        dark: {
          primary: {
            main: '#FFFFFF',
            dark: 'rgba(255,255,255,0.75)',
          },
          secondary: {
            main: '#0094CA',
            dark: '#0280AE',
          },
          error: {
            main: '#F44336',
            dark: '#D32F2F',
          },
          warning: {
            main: '#FFA726',
            dark: '#FFA726',
          },
          info: {
            main: '#0094CA',
            dark: '#0280AE',
          },
          success: {
            main: '#66BB6A',
            dark: '#388E3C',
          },
          grey: {
            100: '#E0E0E0',
            300: '#F5F5F5',
          },
          text: {
            main: 'rgba(0, 0, 0, 0.87)',
            dark: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
          },
          other: {
            'standard-input-line': 'rgba(255, 255, 255, 0.42)',
            'filled-input': 'rgba(255, 255, 255, 0.13)',
          },
        },
      },
      borderRadius: {
        '4xl': '10px',
      },
      padding: {
        5.5: '22px',
      },
      fontFamily: {
        workSans: ['WorkSans', 'sans-serif'],
      },
      fontSize: {
        small: '13px',
        medium: '14px',
        large: '15px',
      },
      lineHeight: {
        small: '22px',
        medium: '24px',
        large: '26px',
      },
      boxShadow: {
        'button-light':
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
        'button-dark':
          '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
        nav: '0px 4px 20px rgba(166, 194, 215, 0.3)',
        modal: '0px 4px 20px rgba(166, 194, 215, 0.25)',
        dropdown: '0px 4px 20px rgba(166, 194, 215, 0.3)',
        card: '0px 4px 20px rgba(166, 194, 215, 0.25)',
      },
      animation: {
        modal: 'fadeIn 0.4s forwards',
      },
    },
  },
  plugins: [],
};
