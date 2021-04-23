import React from 'react';

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

const ResetPassword: React.FC = () => {

  return (
    <>
    <TitleOfForm>Registration</TitleOfForm>
    <Form >
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
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

export default ResetPassword;