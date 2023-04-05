/* eslint-disable import/no-unresolved */
import { createSlice } from '@reduxjs/toolkit';
import { storefindManyType } from '../@types/store.findMany';

const initialState: storefindManyType = {
  STORE_KEY: 0,
  STORE_NAME: '',
  STORE_ID: '',
  STORE_ADDRESS: '',
  STORE_NEIG: '',
  STORE_CITY: '',
  STORE_STATE: '',
  STORE_ZIP: '',
  STORE_PHONE: '',
  STORE_REGION: 0,
  STORE_SUPPORT: 0,
  STORE_LEADER: 0,
  STORE_TYPE: 0,
  STORE_CHANNEL: 0,
  STORE_FLAG: 0,
  CHANNEL: {
    CHANNEL_NUMBER: '',
    ID: 0,
    NAME: '',
  },
  FLAG: {
    ID: 0,
    NAME: '',
  },
  REGION: {
    ID: 0,
    NAME: '',
  },
  SUPPORT: {
    ID: 0,
    NAME: '',
  },
  SUPPORT_LEADER: {
    ID: 0,
    NAME: '',
  },
  TYPE: {
    ID: 0,
    NAME: '',
  },
};

export const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    set(_state, { payload }: { payload: storefindManyType }) {
      return { ...payload };
    },
  },
});

export const { set } = slice.actions;
export const store = (state: { store: storefindManyType }) => state.store;
export default slice.reducer;
