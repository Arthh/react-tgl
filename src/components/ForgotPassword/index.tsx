import React from 'react';

import { useHistory } from 'react-router-dom';

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IResetProps {
  clickHandler: (event: any) => (string);
}

const ForgotPassword: React.FC<IResetProps> = ({ clickHandler }) => {
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    clickHandler(event.currentTarget.email.value)
  }

  return (
    <>
    <TitleOfForm>Forgot Password</TitleOfForm>
    <Form onSubmit={handleSubmit} >
      <Input name="email" placeholder="Email" type="email" required />
      <LogInButton>
        <Button inputColor="#B5C401">
          Send Link
          <img src={arrowRight} alt="" />
        </Button>
      </LogInButton>
    </Form>
    <Button inputColor="#707070" onClick={() => history.push('/')}>
      <img src={arrowLeft} alt="" />
      Back
    </Button>
    </>
  );
};

export default ForgotPassword;