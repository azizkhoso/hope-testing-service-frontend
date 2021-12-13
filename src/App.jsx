import React from 'react';

import './index.css';

import { StyledEngineProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';
import store from './redux/store';

import Routes from './components/routes';

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <Routes />
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
