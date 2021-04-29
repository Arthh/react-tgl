import React from 'react';

import { useDispatch } from 'react-redux';
import { UserActions } from '../../store/user.slice';

import Form from '../../components/Register';
import { IUserProps } from '../../@types/User';

import InitialContainer from '../../components/InitialContainer';

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleProps = (user: IUserProps):any => {
    dispatch(UserActions.addUser(user));
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default RegisterPage;