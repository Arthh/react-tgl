import React from 'react';

import { Button, LogInButton, TitleOfForm } from './styles';
import arrowRightYellow from '../../assets/icons/arrow-right(yellow).svg';
import arrowRightBlack from '../../assets/icons/arrow-right(black).svg';

import { IUserProps } from '../../@types/User';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

interface IAuthProps {
  clickHandler: (event: any) => (IUserProps);
}

const Authentication: React.FC<IAuthProps> = ({ clickHandler }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    clickHandler({
      email: event.currentTarget.email.value,
      numbers: event.currentTarget.password.value, 
    })
  }

  return (
    <>
    <TitleOfForm>Authentication</TitleOfForm>
    <Form onSubmit={handleSubmit}>
      <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Password" type="password" />
      <a href="/">I forget my password</a>
      <LogInButton>
        <Button inputColor="#B5C401">
          Log In 
          <img src={arrowRightYellow} alt="" />
        </Button>
      </LogInButton>
    </Form>
    <Button inputColor="#707070">
      Sign Up
      <img src={arrowRightBlack} alt="" />
    </Button>
    </>
  );
};

export default Authentication;