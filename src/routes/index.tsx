import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import api from '../services/api'

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
  const token = localStorage.getItem('#@tgltoken@#');
  var logged = false
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    logged = true
  }
  
  return <BrowserRouter>{logged ? <Auth /> : <App />}</BrowserRouter>;
};

export default Routes;