import { createSlice } from '@reduxjs/toolkit';

import api from '../services/api'

const initialState = {
  name: '',
  email: '',
  games: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      const {name, email } = action.payload
      state.name = name
      state.email = email
    },
    logOut(state) {
      localStorage.removeItem('#@tgltoken@#')
    }
  }
});

export const UserActions = userSlice.actions;
export default userSlice;
