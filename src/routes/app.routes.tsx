import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';



const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/forgot-pass" component={ForgotPasswordPage} />
    <Route exact path="/reset-pass" component={ResetPasswordPage} />
    <Route path="*"  component={() => <Redirect to="/" /> } />
  </Switch>
);


export default AppRoutes;