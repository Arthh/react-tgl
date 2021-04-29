import React from 'react';

import history from './history';

import {BrowserRouter, Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </BrowserRouter>
  );
}

export default App;
