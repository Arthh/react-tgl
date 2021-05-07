import React from 'react';

import Form from '../../components/ResetPassword';

import { resetPassword } from '../../store/user-actions';
import { IResetProps } from '../../@types/ResetPass';

import InitialContainer from '../../components/InitialContainer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const ResetPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProps = (data: IResetProps ):any => {
    dispatch(resetPassword(data));
    alert('Senha alterada com sucesso!')
    history.push('/')
  };

  return (
    <InitialContainer>
      <Form clickHandler={handleProps} />
    </InitialContainer>
  );

};

export default ResetPage;