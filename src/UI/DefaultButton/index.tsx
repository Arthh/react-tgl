import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type INumberProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface iNumber extends INumberProps {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButton: React.FC<iNumber> = ({children, clickHandler, ...rest}) => {

  return (
    <Container {...rest} onClick={clickHandler} > {children} </Container>
    );
};

export default DefaultButton;