import React, { FormHTMLAttributes } from 'react';

import { Container } from './styles';

type IFormProps = FormHTMLAttributes<HTMLFormElement>;

const Form : React.FC<IFormProps> = ({children, ...rest}) => (
  <Container {...rest}> {children} </Container>
);

export default Form;