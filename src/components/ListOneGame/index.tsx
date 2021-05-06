import React from 'react';

import formatCurrency from '../../utils/currencyFormater';
import { dateFormater } from '../../utils/dateFormater'

import { Container, InfoGameArea } from './styles';


const ListOneGame: React.FC<any> = ({game}) => {
  return (
    <Container color={game.game.color}>
      <InfoGameArea color={game.game.color}>
        <p>{game.game.type}</p>
        <p>{game.numbers}</p>
        <span>
          {dateFormater(new Date(game.day))} - 
          <span>{formatCurrency(game.price)}</span>
        </span>
      </InfoGameArea>
    </Container>
  );
};
  
export default ListOneGame;