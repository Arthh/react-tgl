import React from 'react';

import Form from '../../components/ResetPassword';

import { resetPassword } from '../../store/user-actions';
import { IResetProps } from '../../@types/ResetPass';

import InitialContainer from '../../components/InitialContainer';
import { useDispatch } from 'react-redux';

const ResetPage: React.FC = () => {
  const dispatch = useDispatch();


  const handleProps = (data: IResetProps ):any => {
   dispatch(resetPassword(data));
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default ResetPage;