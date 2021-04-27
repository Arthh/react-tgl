import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';


type INumberProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface iNumber extends INumberProps {
  itsactive: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Number: React.FC<iNumber> = ({children, clickHandler,itsactive, ...rest}) => {

  return (
    <Container {...rest} itsactive={itsactive} onClick={clickHandler} > {children} </Container>
    );
};

export default Number;