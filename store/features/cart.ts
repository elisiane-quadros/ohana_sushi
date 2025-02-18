import { CartInterface } from '@/interfaces/CartInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index';

type CartState = {
  cart: CartInterface | null;
  showCart: boolean;
};

const initialState: CartState = {
  cart: null,
  showCart: false,
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
    setShowCart: (state: CartState, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});

export const { setCart, setShowCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const cartSliceReducer = cartSlice.reducer;
