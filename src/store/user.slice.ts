import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

const EMPTY_USER = { id: '', avatar: '', name: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: EMPTY_USER,
  reducers: {
    addUser: (state, action: PayloadAction<User | undefined | null>) => {
      state.id = action?.payload?.uid || '';
      state.name = action?.payload?.displayName || '';
      state.avatar = action?.payload?.photoURL || '';
    },
    removeUser: state => {
      state = EMPTY_USER;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
