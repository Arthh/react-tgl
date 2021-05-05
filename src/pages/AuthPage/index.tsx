import React from 'react';

import { useDispatch } from 'react-redux';

import Form from '../../components/Authentication';
import InitialContainer from '../../components/InitialContainer';

import { Container } from './styles';

import { IUserProps } from '../../@types/User';
import { sendLoginUser } from '../../store/user-actions';
import { useHistory } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProps = (userLogin: IUserProps):any => {
      try {
        dispatch(sendLoginUser(userLogin))
        history.push('/')
      }catch{}
  };

  return (
    <Container>
      <InitialContainer>
        <Form clickHandler={handleProps} />
      </InitialContainer>    
    </Container>
  );

};

export default AuthPage;