import React from 'react';

import Form from '../../components/ForgotPassword';

import { forgotPassword } from '../../store/user-actions';

import InitialContainer from '../../components/InitialContainer';
import { useDispatch } from 'react-redux';

const ForgotPage: React.FC = () => {
  const dispatch = useDispatch();


  const handleProps = (email: string):any => {
   dispatch(forgotPassword(email));
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default ForgotPage;