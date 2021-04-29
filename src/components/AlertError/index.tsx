import React from 'react';

import { IErrorProps } from '../../@types/Error';
import { Container, ErrorBox } from './styles';


const AlertError: React.FC<IErrorProps> = ({children, text, color }) => {

  return (
    <Container color={color}>
      {children}
      <ErrorBox>{text}</ErrorBox>
    </Container>
  );
};

export default AlertError;