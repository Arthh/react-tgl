import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import api from '../services/api'

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {

  const isLogged =  () => {
    const token = localStorage.getItem('#@tgltoken@#');
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return true;
    } else {
      return false;
    }
  }
  
  return <BrowserRouter>{isLogged() ? <Auth /> : <App />}</BrowserRouter>;
};

export default Routes;