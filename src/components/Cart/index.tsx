import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';

import formatCurrency from '../../utils/currencyFormater';

import { INewGameProps } from '../../@types/NewGame';


import saveImg from '../../assets/icons/arrow-right(green).svg';
import { CartContainer, Container, CartInfo, CartList, CartTotalPriceInfos, CartButtons } from './styles';
import { Link } from 'react-router-dom';


const Cart: React.FC = () => {
  const cart = useSelector((state:any) => state.cart);
  const cartItems = cart.games;
  
  return (
    <Container>
      <CartContainer>
      <CartInfo>
        <h2 className="cart-title">cart</h2>
      </CartInfo>

      <CartList>
       {cartItems.length ? cartItems.map((item:INewGameProps) => (
         <CartItem game={item}/>
       )) : 'Carrinho vazio!'}
      </CartList>

      <CartTotalPriceInfos>
        <h2 className="cart-title">
          Cart
        </h2>
        <h3 className="cart-total-price">TOTAL: {formatCurrency(cart.totalPrice)}</h3>
      </CartTotalPriceInfos>

      </CartContainer>

      <CartButtons>
        <Link to="/">
          Save 
          <img src={saveImg} alt="save" />
        </Link>
      </CartButtons>
    </Container>
  );
};

export default Cart;