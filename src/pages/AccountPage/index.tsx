import React from 'react';

import { Container } from './styles';
import AccountForm from '../../components/Account'


const AccountPage: React.FC = () => {
  const handleProps = ():any => {
   console.log('oi');
  };
  return (
    <Container>
      <AccountForm clickHandler={handleProps}/>
    </Container>
  );
};

export default AccountPage;