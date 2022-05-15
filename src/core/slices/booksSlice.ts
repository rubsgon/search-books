import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Volume} from '../components/Home/domain/volume';
import {Volumes} from '../components/Home/domain/volumes';
import {searchVolumes} from '../thunks/booksThunk';

export type BooksState = {
  volumes: Volumes | object;
  volume: Volume | object;
};

const initialState: BooksState = {
  volumes: {},
  volume: {},
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addVolumes: (state, action: PayloadAction<Volumes>) => {
      state.volumes = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchVolumes.fulfilled, (state, {payload}) => {
      state.volumes = payload;
    });
  },
});

export const {addVolumes} = booksSlice.actions;

export default booksSlice.reducer;
