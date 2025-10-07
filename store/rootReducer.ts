import { combineReducers } from '@reduxjs/toolkit';

import { cartSliceReducer } from './features/cart';
import { controlsSliceReducer } from './features/controls';
import { orderSliceReducer } from './features/order';
import { neighborhoodSliceReducer } from './features/neighborhood';

const rootReducer = combineReducers({
  cart: cartSliceReducer,
  controls: controlsSliceReducer,
  order: orderSliceReducer,
  neighborhood: neighborhoodSliceReducer,
});

export default rootReducer;
