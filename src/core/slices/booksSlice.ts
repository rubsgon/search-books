import {createSlice} from '@reduxjs/toolkit';

import {Volume, Volumes} from '../types';
import {
  getMyFavorites,
  searchVolume,
  searchVolumes,
} from '../thunks/booksThunk';

type VolumesEmptyState = {
  isLoading: boolean;
};

type VolumeEmptyState = {
  isLoading: boolean;
};

export type BooksState = {
  volumes: Volumes | VolumesEmptyState;
  volume: Volume | VolumeEmptyState;
  myFavorites: Volumes | VolumesEmptyState;
};

const initialState: BooksState = {
  volumes: {
    isLoading: false,
  },
  volume: {
    isLoading: false,
  },
  myFavorites: {
    isLoading: false,
  },
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchVolumes.fulfilled, (state, {payload}) => {
      state.volumes = payload.data;
      state.volumes.search = payload.text;
      state.volumes.isLoading = false;
    });
    builder.addCase(searchVolumes.pending, state => {
      state.volumes.isLoading = true;
    });
    builder.addCase(searchVolume.fulfilled, (state, {payload}) => {
      state.volume = payload;
      state.volumes.isLoading = false;
    });
    builder.addCase(searchVolume.pending, state => {
      state.volumes.isLoading = true;
    });
    builder.addCase(getMyFavorites.fulfilled, (state, {payload}) => {
      state.myFavorites = payload;
      state.myFavorites.isLoading = false;
    });
    builder.addCase(getMyFavorites.pending, state => {
      state.myFavorites.isLoading = true;
    });
  },
});

export const {} = booksSlice.actions;

export default booksSlice.reducer;
