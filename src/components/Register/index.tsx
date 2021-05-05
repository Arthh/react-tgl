import React from 'react';

import { Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import { useHistory } from 'react-router-dom';

import { IUserProps } from '../../@types/User';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IRegisterProps {
  clickHandler: (event: any) => (IUserProps);
}

const Register: React.FC<IRegisterProps> = ({ clickHandler }) => {
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (event.currentTarget.password.value !== event.currentTarget.passwordConfirmation.value) {
      return alert('Senhas diferentes!')
    }

    clickHandler({
      name: event.currentTarget.name.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    })
  }

  return (
    <>
      <TitleOfForm>Registration</TitleOfForm>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" type="text" required />
        <Input name="email" placeholder="Email" type="email" required />
        <Input name="password" placeholder="Password" type="password" required />
        <Input name="passwordConfirmation" placeholder="Confirm Password" type="password" required />
        <LogInButton>
          <Button inputColor="#B5C401">
            Register
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

export default Register;