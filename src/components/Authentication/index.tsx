import React from 'react';

import { Link, useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    clickHandler({
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value, 
    })
  }

  return (
    <>
    <TitleOfForm>Authentication</TitleOfForm>
    <Form onSubmit={handleSubmit}>
      <Input name="email" placeholder="Email" required />
      <Input name="password" placeholder="Password" type="password" required/>
      <Link to="/reset-pass">I forget my password</Link>
      <LogInButton>
        <Button inputColor="#B5C401">
          Log In 
          <img src={arrowRightYellow} alt="" />
        </Button>
      </LogInButton>
    </Form>
    <Button inputColor="#707070" onClick={() => history.push('/register')} >
      Sign Up
      <img src={arrowRightBlack} alt=""/>
    </Button>
    </>
  );
};

export default Authentication;