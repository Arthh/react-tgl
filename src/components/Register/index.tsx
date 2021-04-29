import React from 'react';

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import { IUserProps } from '../../@types/User';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IRegisterProps {
  clickHandler: (event: any) => (IUserProps);
}

const Register: React.FC<IRegisterProps> = ({ clickHandler }) => {
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    clickHandler({
      name: event.currentTarget.name.value,
      email: event.currentTarget.email.value,
      numbers: event.currentTarget.password.value, 
    })
  }

  return (
    <>
    <TitleOfForm>Registration</TitleOfForm>
    <Form onSubmit={handleSubmit}>
      <Input name="name" placeholder="Name" type="text" />
      <Input name="email" placeholder="Email" type="email" />
      <Input name="password" placeholder="Password" type="password" />
      <LogInButton>
        <Button inputColor="#B5C401">
          Register
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

export default Register;