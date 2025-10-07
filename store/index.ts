import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // only cart will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const makeStore = () => {
//   const persister = persistStore(store);

//   return { store, persister };
// };

// export type AppStore = ReturnType<typeof makeStore>;
// Use o tipo do rootReducer diretamente, não do store persistido
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
// export type { RootState };
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;
