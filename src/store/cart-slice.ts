/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice } from '@reduxjs/toolkit';

import { ICartProps } from '../@types/Cart';

const initialState: ICartProps = {
  games: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newGame = action.payload;
      state.games.push(newGame);
      state.totalPrice = state.totalPrice + newGame.price;
    }
  }
})

export const CartActions = cartSlice.actions;
export default cartSlice;