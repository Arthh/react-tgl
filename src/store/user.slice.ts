import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  games: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      const {id , name, email } = action.payload.user
      state.id = id
      state.name = name
      state.email = email

      const { token } = action.payload.token
      localStorage.setItem('#@tgltoken@#', token);
    },
    logOut(state) {
      localStorage.removeItem('#@tgltoken@#')
    },
    setGames(state, action){
      state.games = action.payload
    } 
  }
});

export const UserActions = userSlice.actions;
export default userSlice;
