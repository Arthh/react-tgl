import { createSlice } from '@reduxjs/toolkit';

import { IBdUsersProps } from '../@types/BdUsers';

const initialState: IBdUsersProps = {
  users: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser);
    }
  }
});

export const UserActions = userSlice.actions;
export default userSlice;
