import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AuthPage from './pages/AuthPage';
import ResetPassPage from './pages/ResetPassword';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path ="/" component={AuthPage} />
        <Route exact path ="/reset-pass" component={ResetPassPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
