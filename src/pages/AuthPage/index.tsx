import React from 'react';

import Form from '../../components/Authentication';
import InitialContainer from '../../components/InitialContainer';

import { IUserProps } from '../../@types/User';

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