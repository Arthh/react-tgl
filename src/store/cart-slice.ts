import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    games: [],
    totalPrice: 0
  },
  reducers: {

  }
})

export const CartActions = cartSlice.actions;
export default cartSlice;