import React from 'react';

import { LogInButton, TitleOfForm } from './styles';
import arrowRight from '../../assets/icons/arrow-right(yellow).svg';

import Form from '../../UI/Form';
import Input from '../../UI/Input';

const Authentication: React.FC = () => {

  return (
    <>
    <TitleOfForm>Authentication</TitleOfForm>
    <Form>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <a href="/">I forget my password</a>
      <LogInButton>
        <button>
          Log In 
          <img src={arrowRight} alt="" />
        </button>
      </LogInButton>
    </Form>
    </>
  );
};

export default Authentication;