import React from 'react';

import formatCurrency from '../../utils/currencyFormater';
import { dateFormater } from '../../utils/dateFormater';

import { Container, InfoGameArea } from './styles';

interface IGameListProps {
  game: {
    id: string,
    type: string,
    color: string,
    numbers: number[],
    price: number,
    // day: string
  };
}

const ListOneGame: React.FC<IGameListProps> = ({game}) => {

  return (
    <Container color='white'>
      <InfoGameArea color='white'>
        <p>{game.numbers}</p>
        <span>
          {/* {dateFormater(game.day)} -  */}
          <span>{formatCurrency(game.price)}</span>
        </span>
      </InfoGameArea>
    </Container>
  );
};
  
export default ListOneGame;