import React from 'react';

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import { IUserProps } from '../../@types/User';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IResetProps {
  clickHandler: (event: any) => (IUserProps);
}

const ResetPassword: React.FC<IResetProps> = ({ clickHandler }) => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    clickHandler({
      email: event.currentTarget.email.value,
    })
  }

  return (
    <>
    <TitleOfForm>Reset Password</TitleOfForm>
    <Form onSubmit={handleSubmit} >
      <Input name="email" placeholder="Email" type="email" />
      <LogInButton>
        <Button inputColor="#B5C401">
          Send Link
          <img src={arrowRight} alt="" />
        </Button>
      </LogInButton>
    </Form>
    <Button inputColor="#707070">
      <img src={arrowLeft} alt="" />
      Back
    </Button>
    </>
  );
};

export default ResetPassword;