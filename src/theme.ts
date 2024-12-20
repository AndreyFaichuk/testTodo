import { createTheme, darken, lighten } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      dark: darken('#7aa362', 0.2),
      main: '#7aa362',
      light: lighten('#7aa362', 0.2),
    },
    secondary: {
      dark: darken('#acc2b2', 0.1),
      main: '#acc2b2',
      light: lighten('#acc2b2', 0.4),
    },
    warning: {
      dark: darken('#fa695f', 0.2),
      main: '#fa695f',
      light: lighten('#fa695f', 0.2),
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontSize: '1.125rem',
      lineHeight: '1.2',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
  },
});
