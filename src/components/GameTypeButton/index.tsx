import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IGameTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IGameProps extends IGameTypeButtonProps {
  color: string;
  itsactive: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameTypeButton: React.FC<IGameProps> = (
  {children,color,itsactive,clickHandler, ...rest} ) => {

  return (
    <Container color={color}
    itsactive={itsactive}
    onClick={clickHandler}
    {...rest} > { children} </Container>
  );
};

export default GameTypeButton;