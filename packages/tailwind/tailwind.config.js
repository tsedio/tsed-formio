const { theme: defaultTheme, variants, corePlugins } = require('tailwindcss/defaultConfig')

const primary = 'hsla(208, 100%, 43%, 1)'
const secondary = 'hsla(190, 81%, 42%, 1)'

// eslint-disable-next-line import/no-commonjs,node/exports-style
Object.assign(exports, {
  plugins: [
    require('tailwindcss-transforms')({
      '3d': false // defaults to false
    })
  ],
  theme: {
    ...defaultTheme,

    colors: {
      ...Object.entries(defaultTheme.colors).reduce((colors, [key, obj]) => {
        if (typeof obj === 'object') {
          obj = {
            ...obj,
            DEFAULT: obj[600]
          }
        }
        return {
          ...colors,
          [key]: obj
        }
      }, {}),
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',

      // brand
      primary: {
        DEFAULT: primary,
        50: 'hsla(208, 100%, 91%, 1)',
        100: 'hsla(208, 100%, 83%, 1)',
        200: 'hsla(208, 100%, 75%, 1)',
        300: 'hsla(208, 100%, 67%, 1)',
        400: 'hsla(208, 100%, 59%, 1)',
        500: 'hsla(208, 100%, 51%, 1)',
        600: primary,
        700: 'hsla(208, 100%, 35%, 1)',
        800: 'hsla(208, 100%, 27%, 1)',
        900: 'hsla(208, 100%, 19%, 1)'
      },

      'primary-active': secondary,

      secondary: {
        DEFAULT: secondary,
        50: 'hsla(190, 81%, 90%, 1)',
        100: 'hsla(190, 81%, 82%, 1)',
        200: 'hsla(190, 81%, 74%, 1)',
        300: 'hsla(190, 81%, 66%, 1)',
        400: 'hsla(190, 81%, 58%, 1)',
        500: 'hsla(190, 81%, 50%, 1)',
        600: secondary,
        700: 'hsla(190, 81%, 34%, 1)',
        800: 'hsla(190, 81%, 28%, 1)',
        900: 'hsla(190, 81%, 20%, 1)'
      },

      white: 'hsla(0, 100%, 100%, 1)', // #ffffff
      black: '#000',

      /* Gray colors */
      'gray-lighter': '#f7f7f7',
      'gray-lighter-active': 'hsla(0, 0%, 92%, 1)',
      'gray-light': '#d4d1d1',
      'gray-medium': '#a8a0a0',
      'gray-dark': '#998e8e',
      'gray-darker': '#504747'
    },

    spacing: {
      ...defaultTheme.spacing,
      0: '0',
      1: '.25rem', // 4px
      '1.5': '.375rem', // 6px
      2: '.5rem', // 8px
      '2.5': '.625rem', // 10px
      3: '.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 24px
      '7.5': '1.875rem', // 30px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      11: '2.75rem', // 44px
      12: '3rem', // 48px
      15: '3.75rem', // 60px
      16: '4rem', // 64px
      20: '5rem', // 80px
      22: '5.5rem', // 88px
      24: '6rem', // 96px
      25: '6.25rem', // 100px
      26: '6.5rem', // 104px
      28: '8rem', // 128px
      30: '8.5rem', // 136px
      32: '9rem', // 144px
      48: '12rem', // 192px
      52: '13rem', // 208px
      56: '14rem', // 224px
      60: '15rem', // 240px
      68: '17rem' // 272px
    },

    screens: {
      // xs: '22.51em', /* 360px */
      sm: '40.01em' /* 640px --r-minS (phablet) */,
      md: '50.01em' /* 800px --r-minM (tablet) */,
      lg: '64.01em' /* 1024px --r-minL (desktop) */,
      xl: '76.26em' /* 1220px */
    },

    translate: {
      ...defaultTheme.translate,
      down: '-100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px']
    },

    fontFamily: {
      brand: [
        'Source Sans Pro',
        'sans-serif'
      ],
      sans: [
        'Source Sans Pro',
        'sans-serif'
      ],
      serif: [
        'Source Sans Pro',
        'sans-serif'
      ],
      inconsolata: ['Inconsolata'],
      source: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New',
        'monospace'
      ]
    },

    fontSize: {
      micro: '.5rem', // 8px
      xxs: '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '2.75rem', // 44px
      '7xl': '3.75rem', // 60px
      '11xl': '4.75rem' // 76px
    },

    fontWeight: {
      ...defaultTheme.fontWeight,
      hairline: 100
    },

    backgroundSize: {
      ...defaultTheme.backgroundSize
    },

    borderWidth: {
      ...defaultTheme.borderWidth,
      1: '1px',
      5: '5px'
    },

    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray-light', 'current')
    }),

    borderRadius: {
      ...defaultTheme.borderRadius,
      half: '50%',
      full: '100%'
    },

    width: (theme) => ({
      ...defaultTheme.width(theme),
      auto: 'auto',
      px: '1px',
      '1/5': '20%',
      '3/10': '30%',
      '7/10': '70%',
      '9/10': '90%',
      '12/25': '48%',
      arrow: '.8rem'
    }),

    height: (theme) => ({
      ...defaultTheme.height(theme),
      auto: 'auto',
      px: '1px',
      0: '0',
      4: '1rem',
      5: '1.25rem',
      8: '1.8rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      16: '4rem',
      24: '6rem',
      32: '8rem',
      arrow: '.4rem'
    }),

    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      site: '18.75rem',
      'input-mini': '17.5rem',
      'input-small': '31.25rem',
      'input-medium': '36.3125rem',
      'input-large': '61.45rem',
      'button-mini': '5.5rem',
      'button-small': '7rem',
      'button-medium': '9.875rem',
      'button-large': '10rem'
    },

    maxWidth: (theme, { breakpoints }) => ({
      ...defaultTheme.maxWidth(theme, { breakpoints }),
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      'site-mini': '17.5rem',
      'site-small': '31.25rem',
      'site-medium': '43.75rem',
      'site-large': '56.25rem',
      site: '73.75rem',
      full: '100%',
      screen: '100vw'
    }),

    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),

    padding: (theme) => ({
      ...theme('spacing'),
      px: '1px'
    }),

    margin: (theme, { negative }) => ({
      px: '1px',
      '-px': '-1px',
      '-2px': '-2px',
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),

    zIndex: {
      auto: 'auto',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50
    },

    fill: {
      current: 'currentColor',
      transparent: 'transparent'
    },

    stroke: {
      current: 'currentColor'
    },

    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%'
    }
  },

  variants: {
    ...variants
  },
  corePlugins: {
    backgroundAttachment: false,
    borderCollapse: true,
    letterSpacing: false,
    userSelect: false
  },
  purge: {
    enabled: false
  }
})
