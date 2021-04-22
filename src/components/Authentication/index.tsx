import React from 'react';

import { Form, LogInButton, TitleOfForm } from './styles';

const Authentication: React.FC = () => {

  return (
    <>
    <TitleOfForm>Authentication</TitleOfForm>
    <Form>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <a href="/">I forget my password</a>
      <LogInButton>
        <button>Log In </button>
      </LogInButton>
    </Form>
    </>
  );
};

export default Authentication;