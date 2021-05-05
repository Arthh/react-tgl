import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Form from '../../components/Register';
import { IUserProps } from '../../@types/User';

import { sendCreateUser } from '../../store/user-actions';
import InitialContainer from '../../components/InitialContainer';

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleProps = (user: IUserProps):any => {
    try {
      dispatch(sendCreateUser(user));
      history.push('/')
    }catch{}
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default RegisterPage;