import React from 'react';

import removeButton from '../../assets/icons/trash.svg'
import formatCurrency from '../../utils/currencyFormater';

import {  Container,
          RemoveButtonArea,
          InfoGameArea } from './styles';

interface ICartItemProps {
  game: {
    id: string,
    type: string,
    color: string,
    numbers: number[],
    price: number,
  };
  removeHandler: (event: any) => (any);
}

const CartItem: React.FC<ICartItemProps> = ({game, removeHandler}) => {
  const formateNumbers = (numbers: number[]) => {
    return numbers.join(', ');
  }; 

  return (
    <Container color={game.color}>
      <RemoveButtonArea>
        <button value={game.id} onClick={(e) => removeHandler(e.currentTarget.value)} >
          <img src={removeButton} alt="trash" />
        </button>
      </RemoveButtonArea>
      <InfoGameArea >
        <p>{formateNumbers(game.numbers)}</p>
        <h2>{game.type}
          <span>{formatCurrency(game.price)}</span>
        </h2>
      </InfoGameArea>
    </Container>
  );
};
  
export default CartItem;