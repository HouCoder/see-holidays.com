'use client';

import React, { useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';
import type { SelectOption } from '@/db/queries/common';

export type Holiday = {
  title: string;
  description: string | null;
  link: string | null;
  start: string;
  end: string | null;
  workingDay: boolean | null;
  regionId: number;
  regionName: string;
  flag: string | null;
};

type GlobalStore = {
  holidays: Holiday[];
  selectOptions: SelectOption[];
  regionEmojiMap: Record<string, string>;
};

const GlobalStoreContext = React.createContext<StoreApi<GlobalStore> | null>(
  null,
);

const GlobalStoreProvider = ({
  children,
  globalStore,
}: {
  children: React.ReactNode;
  globalStore: GlobalStore;
}) => {
  const [store] = React.useState(() =>
    createStore<GlobalStore>()(() => globalStore),
  );

  return (
    <GlobalStoreContext.Provider value={store}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = <T,>(selector: (store: GlobalStore) => T): T => {
  const globalStoreContext = useContext(GlobalStoreContext);

  if (!globalStoreContext) {
    throw new Error(
      'GlobalStoreContext·must·be·used·within·CounterStoreProvider',
    );
  }

  return useStore(globalStoreContext, selector);
};

export default GlobalStoreProvider;
