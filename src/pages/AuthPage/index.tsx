import React, { useCallback } from 'react';


import Form from '../../components/Authentication';
import InitialContainer from '../../components/InitialContainer';

import { Container } from './styles';


import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

// import { sendLoginUser } from '../../store/user-actions';
// import { useDispatch } from 'react-redux';
// import { IUserProps } from '../../@types/User';
// import { UserData } from '../../hooks/AuthContext'

const AuthPage: React.FC = () => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const { signIn } = useAuth();

  const handleProps = useCallback( async(userLogin: any) => {
      // try {
      //   dispatch(sendLoginUser(userLogin))

      //   return history.push('/')
      // }catch(err){
      //   alert(err.message)
      // }

      await signIn(userLogin);

      history.go(0);

  },[history, signIn]);

  return (
    <Container>
      <InitialContainer>
        <Form clickHandler={handleProps} />
      </InitialContainer>    
    </Container>
  );

};

export default AuthPage;