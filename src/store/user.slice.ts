import { createSlice } from '@reduxjs/toolkit';

import { IBdUsersProps } from '../@types/BdUsers';

const initialState: IBdUsersProps = {
  users: [],
  isLogged: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    logIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.isLogged = false;
    }
  }
});

export const UserActions = userSlice.actions;
export default userSlice;
