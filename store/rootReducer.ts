import { combineReducers, Reducer } from 'redux';

import { cartSliceReducer } from './features/cart';
import { orderSliceReducer } from './features/order';
import { neighborhoodSliceReducer } from './features/neighborhood';

const rootReducer: Reducer = combineReducers({
  cart: cartSliceReducer,
  order: orderSliceReducer,
  neighborhood: neighborhoodSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
