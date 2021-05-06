import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';


import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import AccountPage from '../pages/AccountPage';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Layout> 
      <Route exact path="/" component={HomePage} />
      <Route exact path="/games" component={GamePage} />
      <Route exact path="/account" component={AccountPage} />
    </Layout>
  </Switch>
);

export default AuthRoutes;