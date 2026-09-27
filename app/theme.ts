import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#26E05A', contrastText: '#ffffff' },
        secondary: { main: '#02ADF7', contrastText: '#ffffff' },
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
        },
        contained: {
          backgroundImage:
            'linear-gradient(90deg, var(--mui-palette-primary-main), var(--mui-palette-secondary-main))',
          boxShadow: '0 8px 20px -8px rgb(var(--mui-palette-primary-mainChannel) / 0.55)',
          '&:hover': {
            filter: 'brightness(1.07)',
          },
        },
      },
    },
  },
});

export default theme;
