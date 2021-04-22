import React from 'react';

import { HeaderContainer, Navbar, DivInfo, DivOptions } from './styles';

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Navbar>
        <DivInfo>
          <a href="/" className="tittle" >TGL</a>
          <a href="/">Home</a>
        </DivInfo>

        <DivOptions>
          <a href="/" className="account-option">Account</a>
          <a href="/">Logout</a>
        </DivOptions>
      </Navbar>
    </HeaderContainer>
  );
};


export default Header;