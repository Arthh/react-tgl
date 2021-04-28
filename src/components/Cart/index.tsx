import React from 'react';
import CartItem from '../CartItem';

import formatCurrency from '../../utils/currencyFormater';

import { INewGameProps } from '../../@types/NewGame';


import saveImg from '../../assets/icons/arrow-right(green).svg';
import { CartContainer, Container, CartInfo, CartList, CartTotalPriceInfos, CartButtons } from './styles';

interface ICartProps {
  games: INewGameProps[],
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  removeHandler: (event: React.MouseEvent<HTMLButtonElement>) => (any);
}

const Cart: React.FC<ICartProps> = ({games, clickHandler, removeHandler}) => {

  const getTotalCart = () => {
    var totalPrice = 0;
    games.forEach(game => totalPrice += game.price);
    return formatCurrency(totalPrice);
  }

  return (
    <Container>
      <CartContainer>
      <CartInfo>
        <h2 className="cart-title">cart</h2>
      </CartInfo>

      <CartList>
       {games.length ? games.map((item:INewGameProps) => (
         <CartItem game={item} removeHandler={removeHandler}/>
       )) : 'Carrinho vazio!'}
      </CartList>

      <CartTotalPriceInfos>
        <h2 className="cart-title">
          Cart
        </h2>
        <h3 className="cart-total-price">TOTAL: {getTotalCart()}</h3>
      </CartTotalPriceInfos>

      </CartContainer>

      <CartButtons>
        <button onClick={clickHandler}>
          Save 
          <img src={saveImg} alt="save" />
        </button>
      </CartButtons>
    </Container>
  );
};

export default Cart;