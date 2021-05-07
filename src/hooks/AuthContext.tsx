import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import history from '../history';

export interface UserData {
  name?: string
  email: string;
  password?: string;
}

interface TokenState {
  token: string;
}


interface AuthContextState {
  name: string;
  token: TokenState;
  signIn({ email, password }: UserData): Promise<void>;
  userLogged(): boolean;
  signOut(): void;
  updateUser(userData: UserData): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [token, setToken] = useState<TokenState>(() => {
    const token = localStorage.getItem('#@tgltoken@#');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as TokenState;
  });

  const signIn = async ({ email, password }: UserData) => {
    try{
    const response = await api.post('/sessions ', {
      email,
      password,
    });
    const { token } = response.data.token;
    const { name } = response.data.user;
    setName(name);
    setToken(token);

    localStorage.setItem('#@tgltoken@#', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    }catch(err){
      return alert('Credenciais Incorretas!');
    }
  };

  const userLogged = useCallback(() => {
    const token = localStorage.getItem('#@tgltoken@#');

    if (token) {
      return true;
    }
    return false;
  }, []);

  const signOut = () => {
    localStorage.removeItem('#@tgltoken@#');
    setToken({} as TokenState);
    history.push('');
  };

  const updateUser = async (userData: UserData) => {
    try{
    await api.put('/users ', {
      name: userData.name,
      email: userData.email,
      password: userData.password
    });
    }catch(err){
      return alert('Erro ao atualizar perfil!');
    }
  };


  return (
    <AuthContext.Provider value={{ name, token, signIn, userLogged, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }