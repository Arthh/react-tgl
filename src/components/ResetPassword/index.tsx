import React from 'react';

import { useHistory } from 'react-router-dom';

import { IResetProps } from '../../@types/ResetPass'

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IResetPageProps {
  clickHandler: (event: any) => (IResetProps);
}

const ResetPassword: React.FC<IResetPageProps> = ({ clickHandler }) => {
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const token = event.currentTarget.token.value
    const password = event.currentTarget.password.value
    clickHandler({token, password})
  }

  return (
    <>
    <TitleOfForm>Reset Password</TitleOfForm>
    <Form onSubmit={handleSubmit} >
      <Input name="token" placeholder="Token" type="text" required />
      <Input name="password" placeholder="New Password" type="password" required />
      <LogInButton>
        <Button inputColor="#B5C401">
          Reset
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

export default ResetPassword;