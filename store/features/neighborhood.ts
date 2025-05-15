import { DeliveryCost } from '@/interfaces/DeliveryCost';
import { createSlice } from '@reduxjs/toolkit';

type NeighborhoodState = {
  neighborhood: DeliveryCost | null;
};

const initialState: NeighborhoodState = {
  neighborhood: null,
};

const neighborhoodSlice = createSlice({
  name: 'neighborhood',
  initialState,
  reducers: {
    setNeighborhood: (state, action) => {
      state.neighborhood = action.payload;
    },
  },
});

export const { setNeighborhood } = neighborhoodSlice.actions;

export const neighborhoodSliceReducer = neighborhoodSlice.reducer;
