import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IGameTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IGameProps extends IGameTypeButtonProps {
  color: string;
  itsactive: boolean;
}

const GameTypeButton: React.FC<IGameProps> = (
  {children,color,itsactive, ...rest} ) => {

  return (
    <Container color={color}
    itsactive={itsactive} {...rest} > { children} </Container>
  );
};

export default GameTypeButton;