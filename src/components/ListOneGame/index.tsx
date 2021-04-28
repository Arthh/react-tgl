import React from 'react';

import formatCurrency from '../../utils/currencyFormater';
import { dateFormater } from '../../utils/dateFormater';

import { Container } from './styles';

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
  const formateNumbers = (numbers: number[]) => {
    return numbers.join(', ');
  }; 

  return (
    <Container color={game.color}>
      <div className="infoGameArea">
        <p>{formateNumbers(game.numbers)}</p>
        <span>
          {dateFormater(new Date(1619631583975))} - 
          <span>{formatCurrency(game.price)}</span>
        </span>
        <h2>{game.type}</h2>
      </div>
    </Container>
  );
};
  
export default ListOneGame;