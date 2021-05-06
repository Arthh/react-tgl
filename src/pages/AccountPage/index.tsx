import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container } from './styles';
import AccountForm from '../../components/Account'


const AccountPage: React.FC = () => {
  const [user, setUser] = useState({})

  const loadAllGames = async() =>{
    try {
      const response = await api.get('/users/myinfo');
      setUser(response.data);
    }catch (err){
      console.log(err.message)
    }
  }
  
    useEffect(() => {
      loadAllGames();
    },[]);

  const handleProps = ():any => {
   console.log('oi');
  };

  return (
    <Container>
      {user &&  <AccountForm userInfo={user} clickHandler={handleProps}/> }
    </Container>
  );
};

export default AccountPage;