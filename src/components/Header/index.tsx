import React from 'react';

import { HeaderContainer, Navbar, DivInfo, DivOptions, LinkNav } from './styles';

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Navbar>
        <DivInfo>
          <LinkNav to="/home" className="tittle" >TGL</LinkNav>
          <LinkNav to="/home">Home</LinkNav>
        </DivInfo>

        <DivOptions>
          <LinkNav to="/" className="account-option">Account</LinkNav>
          <LinkNav to="/">Logout</LinkNav>
        </DivOptions>
      </Navbar>
    </HeaderContainer>
  );
};


export default Header;