import React from 'react';

import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../../components/Authentication';
import InitialContainer from '../../components/InitialContainer';

import { Container } from './styles';

import { IUserProps } from '../../@types/User';
import { useSelector } from 'react-redux';
import { UserActions } from '../../store/user.slice';

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state:any) => state.user)

  const handleProps = (userLogin: IUserProps):any => {
    const userExist = listUsers.users.find((user:IUserProps) => user.email === userLogin.email )
    if(!userExist){
      return alert('Usuario não existe');
    }
    if(userExist.password !== userLogin.password){
      return alert('Senha errada')
    }else{
      dispatch(UserActions.logIn());
      <Redirect to="/" />
    }
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