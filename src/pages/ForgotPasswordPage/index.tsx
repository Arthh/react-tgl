import React from 'react';

import Form from '../../components/ForgotPassword';

import { forgotPassword } from '../../store/user-actions';

import InitialContainer from '../../components/InitialContainer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const ForgotPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProps = (email: string):any => {
   dispatch(forgotPassword(email));
   history.push('/');
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default ForgotPage;