import React, { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';

import { Container } from './styles';
import AccountForm from '../../components/Account'
import { useAuth } from '../../hooks/AuthContext';


const AccountPage: React.FC = () => {
  const [user, setUser] = useState({})
  const { updateUser } = useAuth()

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

  const handleProps = useCallback(async (userData:any) => {
   await updateUser(userData)
  },[updateUser]);

  return (
    <Container>
      {user &&  <AccountForm userInfo={user} clickHandler={handleProps}/> }
    </Container>
  );
};

export default AccountPage;