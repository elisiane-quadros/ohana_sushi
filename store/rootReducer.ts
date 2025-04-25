import { combineReducers, Reducer } from 'redux';

import { cartSliceReducer } from './features/cart';
import { orderSliceReducer } from './features/order';

const rootReducer: Reducer = combineReducers({
  cart: cartSliceReducer,
  order: orderSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
