import styled from "styled-components";

export const CartContainer = styled.div`
  margin-left: 20px;
  color: #707070;
`;

export const Container = styled.div`
  width: 317px;
  background: #FFFFFF;
  font-style: italic; 
  font-family: Helvetica;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid #E2E2E2;
  border-radius: 10px;
  opacity: 1;
`;

export const CartInfo = styled.div`
  opacity: 1;
  
  
  .cart-title {
    font: italic normal bold 24px/85px Helvetica;
    text-transform: uppercase;
    opacity: 1;
  }
`;

export const CartList = styled.div`
  flex-direction: column;
  height: 250px;
  overflow-x: scroll;

  /* CONFIG PRO SCROLL */
   ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 10px;
  } 
    /* END CONFIG PRO SCROLL */
`;

export const CartTotalPriceInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  height: 50px;
  
  .cart-title {
    font: italic normal bold 24px/85px Helvetica;
    letter-spacing: 0px;
    text-transform: uppercase;
    opacity: 1;
  }

  .cart-total-price {
    font: normal normal 300 24px/85px Helvetica;
    letter-spacing: 0px;
    text-transform: uppercase;
    margin-left: 10px;
  }
`;

export const CartButtons = styled.div`
  a {
    color: #27C383;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 96px;
    background: #F4F4F4 0% 0% no-repeat padding-box;
    border: 1px solid #E2E2E2;
    opacity: 1;
  }
  img {
    width: 24px;
    height: 20px;
    margin-left: 5px
  }
`;
