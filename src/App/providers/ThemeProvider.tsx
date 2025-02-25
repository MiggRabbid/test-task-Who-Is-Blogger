import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MuiThemeProvider = ({ children }: { children: any }) => {
  const theme = createTheme({}, ruRU);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { MuiThemeProvider };
