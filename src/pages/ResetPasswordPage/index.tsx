import React from 'react';

import Form from '../../components/ResetPassword';
import { IUserProps } from '../../@types/User';

import InitialContainer from '../../components/InitialContainer';

const AuthPage: React.FC = () => {

  const handleProps = (user: IUserProps):any => {
    console.log(user);
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default AuthPage;