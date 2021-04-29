import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
  const user = useSelector((state:any) => state.user)
  
  return <BrowserRouter>{user.isLogged ? <Auth /> : <App />}</BrowserRouter>;
};

export default Routes;