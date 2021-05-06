import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGameProps } from '../../@types/Games';
import { INewGameProps } from '../../@types/NewGame';
import { CartList } from '../Cart/styles';
import ListOneGame from '../ListOneGame';

import { getGamesOfUser } from '../../store/user-actions'

import { Container } from './styles';
 
interface IListGamesProps {
  filter: IGameProps | undefined;
}

const ListAllGames: React.FC<IListGamesProps> = ({ filter }) => {
  const [filterGames, setFilterGames] = useState([]);
  const cart = useSelector((state:any) => state.user);
  const cartItems = cart.games;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesOfUser())
  },[dispatch])


  useEffect(() => {
     const filterAllGames = () => {
       if(filter){
         setFilterGames(cartItems.filter((game:any) => game.game.type === filter.type));
       }else{
         setFilterGames(cartItems);
       }
       return;
    }
    filterAllGames();
  },[cartItems, filter]);
 


  return (
    <Container>
      <CartList height="500px">
      {cart.games.length > 0 
        ? filterGames.map((item:INewGameProps) => (
        <ListOneGame game={item}/>
       ))
       : 
       <h3>Lista está vazia!!</h3>}
      </CartList>
    </Container>
  );
};

export default ListAllGames;