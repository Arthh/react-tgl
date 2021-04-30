import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #F7F7F7  ;
  width: 100%;
  border-bottom: 1.5px solid #ebebeb;

`;

export const LinkNav = styled(Link)`
  text-decoration: none;
  font: italic normal bold 20px/70px Helvetica;
  color: #707070;

  @media(max-width: 1590px) {
    font-size: 15px;
    padding: 0px 4px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;

  div {
    display: flex;
  }

`;

export const DivInfo = styled.div`
  padding-left: 141px;

  .tittle {
    font-size: 44px;
    padding-right: 60px;
    margin-top: 5px;
  }

  .tittle::after{
    content: '';
    display: block;
    width: 80px;
    border-bottom: 6px solid #B5C401;
    border-radius: 6px;
    margin-top: -7px;
  }

  @media(max-width: 1590px) {
    width: auto;
    padding: 0px 10px;
    margin: 0;

    .tittle {
      font-size: 30px;
      padding: 0px 20px;
    }

    .tittle::after { 
      width: 50px;
    }
  }
`;

export const DivOptions = styled.div`
  margin-right: 230px;

  .account-option {
    padding-right: 30px;
  }

  @media(max-width: 1590px) {
    width: auto;
  }
`;