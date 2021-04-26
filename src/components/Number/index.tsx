import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';


type INumberProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Number: React.FC<INumberProps> = ({children, ...rest}) => {

  return (
    <Container {...rest} onClick={(e:any) => console.log(e.target.value)} > {children} </Container>
  );
};

export default Number;