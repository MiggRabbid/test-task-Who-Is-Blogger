import { Box } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from './store';
import { MuiThemeProvider } from './providers';

import Weather from '../features/Weather/Weather';

function App() {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Box>
          <Weather />
        </Box>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
