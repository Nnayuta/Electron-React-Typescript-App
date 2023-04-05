import { configureStore } from '@reduxjs/toolkit';

import STORE_SLICE from './store.redux';
import PDV_SLICE from './pdv.redux';

export const store = configureStore({
  reducer: {
    store: STORE_SLICE,
    pdv: PDV_SLICE,
  },
});
