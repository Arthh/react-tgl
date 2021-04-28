import React from 'react';
import { useSelector } from 'react-redux';
import { INewGameProps } from '../../@types/NewGame';
import { CartList } from '../Cart/styles';
import CartItem from '../CartItem';

import { Container } from './styles';
 
const ListAllGames: React.FC = () => {

  const cart = useSelector((state:any) => state.cart);
  const cartItems = cart.games;

  return (
    <Container>
      <CartList>
      {cartItems.length ? cartItems.map((item:INewGameProps) => (
        <CartItem game={item}/>
       )) : 'Carrinho vazio!'}
      </CartList>
    </Container>
  );
};

export default ListAllGames;