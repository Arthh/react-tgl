import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AuthPage from './pages/AuthPage';
import ResetPassPage from './pages/ResetPasswordPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path ="/" component={AuthPage} />
        <Route exact path ="/reset-pass" component={ResetPassPage} />
        <Route exact path ="/register" component={RegisterPage} />
        <Layout>
        <Route exact path ="/home" component={HomePage} />
        <Route exact path ="/games" component={GamePage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
