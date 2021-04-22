import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';

import InitialContainer from './components/InitialContainer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <InitialContainer />
    </BrowserRouter>
  );
}

export default App;
