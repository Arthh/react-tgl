import React from 'react';
import { Switch } from 'react-router-dom';
// import {Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';


import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import AccountPage from '../pages/AccountPage';

import PrivateRoutes from './PrivateRoutes';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Layout> 
      {/* <PrivateRoutes path="/" exact component={() => <Redirect to="/home" />} /> */}
      <PrivateRoutes exact path="/" component={HomePage} />
      <PrivateRoutes exact path="/games" component={GamePage} />
      <PrivateRoutes exact path="/account" component={AccountPage} />
    </Layout>
  </Switch>
);

export default AuthRoutes;