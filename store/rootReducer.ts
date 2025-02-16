import { combineReducers, Reducer } from 'redux';

import { cartSliceReducer } from './features/cart';

const rootReducer: Reducer = combineReducers({
  cart: cartSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
