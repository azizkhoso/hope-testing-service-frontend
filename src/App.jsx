import React from 'react';

import './index.css';

import { StyledEngineProvider } from '@mui/material/styles';

import Routes from './components/routes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  );
}

export default App;
