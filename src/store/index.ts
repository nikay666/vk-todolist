import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { listReducer } from './list.slice';
import { userReducer } from './user.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type TypeRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch