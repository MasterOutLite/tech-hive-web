import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2C2C',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiStack: {},
    MuiInput: {
      styleOverrides: {}
    }
  }
});

export default theme;
