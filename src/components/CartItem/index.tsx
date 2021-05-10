import React from 'react';
// import { INewGameProps } from '../../@types/NewGame';

import removeButton from '../../assets/icons/trash.svg'
import formatCurrency from '../../utils/currencyFormater';

import {  Container,
          RemoveButtonArea,
          InfoGameArea } from './styles';

// interface ICartItemProps extends INewGameProps {
//   removeHandler: (event: any) => (any);
// }


const CartItem: React.FC<any> = ({game, removeHandler}) => {

  const formateNumbers = (numbers: number[]) => {
    return numbers.join(', ');
  }; 

  return (
    <Container color={game.color}>
      <RemoveButtonArea color={game.color}>
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