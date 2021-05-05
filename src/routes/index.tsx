import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
  const logged = () => {
    const token = localStorage.getItem('#@tgltoken@#');
    if (token) return true;

    return false
  }

  
  
  return <BrowserRouter>{logged() ? <Auth /> : <App />}</BrowserRouter>;
};

export default Routes;