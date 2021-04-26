import React from 'react';

import Number from '../Number';

import { Container } from './styles';

interface ICreateNumbersProps {
  quantity: number;
}

const CreateNumbers: React.FC<ICreateNumbersProps> = ({quantity}) => {
  
  function formateNumber(number: number){
    var formated = number < 10 ? `0${number}` : number;
    return formated;
  }

  function createNumbers() {
    var aux = [];
    for(var i=0 ; i<quantity; i++){
       aux.push(<Number value={i+1}>{formateNumber(i+1)}</Number>)
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