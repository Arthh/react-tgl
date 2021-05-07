import React from 'react';
import { useLocation } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { UserActions } from '../../store/user.slice';
import { useAuth } from '../../hooks/AuthContext';

import { HeaderContainer, Navbar, DivInfo, DivOptions, LinkNav } from './styles';

const Header: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  // const dispatch = useDispatch();
  
  // const logoutHandler = () => {
  //   dispatch(UserActions.logOut());
  // }

  return (
    <HeaderContainer>
      <Navbar>
        <DivInfo>
          <LinkNav to="/" className="tittle" >TGL</LinkNav>
          {location.pathname === '/' ? '' : <LinkNav to="/">Home</LinkNav>}
        </DivInfo>

        <DivOptions>
          <LinkNav to="/account" className="account-option">Account</LinkNav>
          <LinkNav to="/" onClick={signOut}>Logout</LinkNav>
        </DivOptions>
      </Navbar>
    </HeaderContainer>
  );
};


export default Header;