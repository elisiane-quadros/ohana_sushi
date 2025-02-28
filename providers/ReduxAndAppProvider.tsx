'use client';

import AppBar from '@/components/AppBar';
import { persistor, store } from '@/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface ReduxAndAppProviderProps {
  children: ReactNode;
}

const ReduxAndAppProvider = ({ children }: ReduxAndAppProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppBar />
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxAndAppProvider;
