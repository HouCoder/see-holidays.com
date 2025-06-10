'use client';

import React, { useContext } from 'react';
import { createStore } from 'zustand/vanilla'
import { useStore, type StoreApi } from 'zustand'

type GlobalStore = {
  holidays: string[];
}

const GlobalStoreContext = React.createContext<StoreApi<GlobalStore> | null>(null);

const GlobalStoreProvider = ({ children, initialHolidays }: {
  children: React.ReactNode;
  initialHolidays: string[];
}) => {
  const [store] = React.useState(() =>
    createStore<GlobalStore>()((set) => ({
      holidays: initialHolidays,
    }))
  );

  return (
    <GlobalStoreContext.Provider value={store}>
      {children}
    </GlobalStoreContext.Provider>
  );
};


export const useGlobalStore = <T,>(
  selector: (store: GlobalStore) => T,
): T => {
  const globalStoreContext = useContext(GlobalStoreContext);

  if (!globalStoreContext) {
    throw new Error(`GlobalStoreContext must be used within CounterStoreProvider`)
  }

  return useStore(globalStoreContext, selector)
}


export default GlobalStoreProvider;
