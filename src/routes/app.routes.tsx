import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';


const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/reset-pass" component={ResetPasswordPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route path="*"  component={() => <Redirect to="/" /> } />

  </Switch>
);

export default AppRoutes;