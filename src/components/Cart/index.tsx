import React from 'react';
import CartItem from '../CartItem';

import formatCurrency from '../../utils/currencyFormater';

import { INewGameProps } from '../../@types/NewGame';


import saveImg from '../../assets/icons/arrow-right(green).svg';
import { CartContainer, Container, CartInfo, CartList,
        CartTotalPriceInfos, CartButtons, CartTitle,
        CartTitleContainer, CartTotalPrice} from './styles';

interface ICartProps {
  games: INewGameProps[],
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  removeHandler: (event: React.MouseEvent<HTMLButtonElement>) => (any);
}

const Cart: React.FC<ICartProps> = ({games, clickHandler, removeHandler}) => {

  const getTotalCart = () => {
    if(games.length === 0){
      return Number(0)
    } 
    var totalPrice = 0;
    games.forEach(game => totalPrice += game.price);
    return Number(totalPrice);
  }

  const getFormatedTotalPrice = () => {
    return formatCurrency(getTotalCart());
  }

  return (
    <Container>
      <CartContainer>
      <CartInfo>
        <CartTitle >cart</CartTitle>
      </CartInfo>

      <CartList>
       {games.length ? games.map((item:any) => (
         <CartItem game={item} removeHandler={removeHandler}/>
       )) : 'Carrinho vazio!'}
      </CartList>

      <CartTotalPriceInfos>
        <CartTitleContainer >
          Cart
        </CartTitleContainer>
        <CartTotalPrice>TOTAL: {getFormatedTotalPrice()}</CartTotalPrice>
      </CartTotalPriceInfos>

      </CartContainer>

      <CartButtons>
        <button onClick={clickHandler} disabled={games.length > 0 ? false : true} >
          Save 
          <img src={saveImg} alt="save" />
        </button>
      </CartButtons>
    </Container>
  );
};

export default Cart;