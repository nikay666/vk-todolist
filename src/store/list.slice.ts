import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  addListItem,
  createTaskId,
  editListItem,
  getList,
  removeListItem,
} from '~/api';

import { ToDoListItem } from './types';

export const fetchList = createAsyncThunk(
  'user/tasks',
  async (userId: string) => await getList(userId),
);

const initialState: ToDoListItem[] = [];

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      removeListItem(action.payload.userId, action.payload.id);
      return state.filter(el => el.id !== action.payload.id);
    },
    addItem: (state, action) => {
      const id = createTaskId();
      state.push({
        userId: action.payload.userId,
        id,
        checked: false,
        value: action.payload.value,
      });
      addListItem({...action.payload, id});
    },
    editItem: (state, { payload }) => {
      editListItem(payload);
      state.map(el => {
        if (el.id === payload.id) {
          return {
            id: payload.id,
            checked: payload.checked,
            value: payload.value,
          };
        }
        return el;
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchList.fulfilled, (state, { payload }) => {
      state = payload;
      return state;
    });

    builder.addCase(fetchList.rejected, (state, action) => {
      if (action.payload) {
        console.log(action.error);
      }
      return state;
    });
  },
});

export const listActions = listSlice.actions;
export const listReducer = listSlice.reducer;
