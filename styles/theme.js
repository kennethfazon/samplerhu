// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue (main color)
      light: '#63a4ff', // Lighter Blue
      dark: '#1565c0', // Darker Blue
      contrastText: '#ffffff', // White text for primary buttons
    },
    secondary: {
      main: '#ff9800', // Orange (contrast color for buttons)
      light: '#ffb74d', // Light Orange
      dark: '#f57c00', // Darker Orange
      contrastText: '#ffffff', // White text for secondary buttons
    },
    background: {
      default: '#f5f5f5', // Light background for overall UI
      paper: '#ffffff', // White for paper/card components
    },
    text: {
      primary: '#212121', // Dark text for general content
      secondary: '#757575', // Grey text for secondary content
    },
    action: {
      hover: '#f1f1f1', // Light grey hover effect for buttons and links
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
    button: {
      textTransform: 'none', // Disable capitalization for buttons
    },
    h6: {
      fontSize: '1rem', // Adjust title font size
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          fontWeight: '400', // Slightly bolder text in buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Remove default shadow for AppBar
        },
      },
    },
  },
});

export default theme;
