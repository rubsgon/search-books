import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../core/slices/authSlice';
import booksReducer from '../core/slices/booksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
