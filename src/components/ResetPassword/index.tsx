import React from 'react';

import {Button, LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import arrowLeft from '../../assets/icons/arrow-left(gray).svg';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

const ResetPassword: React.FC = () => {

  return (
    <>
    <TitleOfForm>Reset Password</TitleOfForm>
    <Form >
      <Input placeholder="Email" />
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