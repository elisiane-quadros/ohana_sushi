import { CartInterface } from '@/interfaces/CartInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index';
import { Order } from '@/interfaces/Order';

type OrderState = {
  orderList: Order[];
};

const initialState: OrderState = {
  orderList: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderList: (state: OrderState, action: PayloadAction<Order[]>) => {
      state.orderList = action.payload;
    },
  },
});

export const { setOrderList } = orderSlice.actions;

export const selectOrder = (state: RootState) => state.order;

export const orderSliceReducer = orderSlice.reducer;
