import { combineReducers, Reducer } from 'redux';

import { cartSliceReducer } from './features/cart';
import { controlsSliceReducer } from './features/controls';
import { orderSliceReducer } from './features/order';
import { neighborhoodSliceReducer } from './features/neighborhood';

const rootReducer: Reducer = combineReducers({
  cart: cartSliceReducer,
  controls: controlsSliceReducer,
  order: orderSliceReducer,
  neighborhood: neighborhoodSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
