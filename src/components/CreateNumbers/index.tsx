import React from 'react';

import Number from '../Number';

import { Container } from './styles';

interface ICreateNumbersProps {
  quantity: number;
  numbers: number[];
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CreateNumbers: React.FC<ICreateNumbersProps> = ({quantity, clickHandler, numbers}) => {
  
  const formateNumber = (number: number) => { 
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  const verifyNumber = (num: number) : boolean => {
    const resp = numbers.find(number => formateNumber(number) === formateNumber(num));
    return resp ? true : false
  };

  const createNumbers = () => {
    var aux = [];
    for(var i=1 ; i<=quantity; i++){
       aux.push(
        <span key={i}>
          <Number clickHandler={clickHandler} 
            value={i}
            itsactive={verifyNumber(i)}
            >
            {formateNumber(i)}
          </Number> 
        </span>
      )
    }
    return aux;
  }  

  return (  
    <Container>
      {createNumbers()}
    </Container>
  );
};

export default CreateNumbers;