import React from 'react';

// import saveImg from '../../assets/icons/arrow-right(green).svg';

import { CartContainer, Container, CartInfo, CartList, CartTotalPriceInfos, CartButtons } from './styles';

const Cart: React.FC = () => {

  return (
    <Container>
      <CartContainer>
      <CartInfo>
        <h2 className="cart-title">cart</h2>
      </CartInfo>

      <CartList>

      </CartList>

      <CartTotalPriceInfos>
        <h2 className="cart-title">
          Cart
        </h2>
        <h3 className="cart-total-price">TOTAL: R$0,00</h3>
      </CartTotalPriceInfos>

      </CartContainer>

      <CartButtons>
        <a href="/">
          Save 
        </a>
      </CartButtons>
    </Container>
  );
};

export default Cart;