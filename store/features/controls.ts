import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index';

type ControlsState = {
  openCart: boolean;
};

const initialState: ControlsState = {
  openCart: false,
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setOpenCart: (state: ControlsState, action: PayloadAction<boolean>) => {
      state.openCart = action.payload;
    },
  },
});

export const { setOpenCart } = controlsSlice.actions;

export const selectControls = (state: RootState) => state.controls;

export const controlsSliceReducer = controlsSlice.reducer;
