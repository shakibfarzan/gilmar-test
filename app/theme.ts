import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#02ADF7', contrastText: '#ffffff' },
        secondary: { main: '#26E05A', contrastText: '#ffffff', light: '#B8F3C4' },
        background: { default: '#f5f7f7', paper: '#ffffff' },
      },
    },
    dark: false,
  },
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--font-abar-mid), var(--font-geist-sans), Tahoma, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 800,
          fontSize: 14,
          padding: '14px 20px',
        },
        contained: {
          backgroundImage:
            'linear-gradient(229.52deg, var(--mui-palette-primary-main) -18.98%, var(--mui-palette-secondary-main) 121.29%),' +
            'radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),' +
            'radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0px 1px 0px 0px #FFFFFF29 inset, 0px 1px 2px -1px #92929266',
          '&:hover': {
            backgroundImage:
              'linear-gradient(229.52deg, var(--mui-palette-primary-main) -18.98%, var(--mui-palette-secondary-main) 121.29%),' +
              'radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),' +
              'radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: '0px 1px 0px 0px #FFFFFF29 inset, 0px 1px 2px -1px #92929266',
            filter: 'brightness(1.07)',
          },
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
        },
      },
    },
  },
});

export default theme;
