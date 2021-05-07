import React from 'react';

import {BrowserRouter, Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import { AuthProvider } from './hooks/AuthContext';

import history from './history'


const App: React.FC = () => {
  return (
    <BrowserRouter >
      <AuthProvider>
        <Router history={history}>
          <GlobalStyles />
        <Routes />
      </Router>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
