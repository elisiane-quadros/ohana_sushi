import { CartInterface } from '@/interfaces/CartInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index';

type CartState = {
  cart: CartInterface | null;
};

const initialState: CartState = {
  cart: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (
      state: CartState,
      action: PayloadAction<CartInterface | null>,
    ) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const cartSliceReducer = cartSlice.reducer;
