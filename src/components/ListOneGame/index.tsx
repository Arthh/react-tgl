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
  };
}

const ListOneGame: React.FC<IGameListProps> = ({game}) => {
  console.log(game);
  const formateNumbers = (numbers: number[]) => {
    return numbers.join(', ');
  }; 

  return (
    <Container color={game.color}>
      <InfoGameArea color={game.color}>
        <p>{formateNumbers(game.numbers)}</p>
        <span>
          {dateFormater(new Date(1619631583975))} - 
          <span>{formatCurrency(game.price)}</span>
        </span>
        <h2>{game.type}</h2>
      </InfoGameArea>
    </Container>
  );
};
  
export default ListOneGame;