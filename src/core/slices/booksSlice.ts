import {createSlice} from '@reduxjs/toolkit';

import {Volume, Volumes} from '../components/Home/domain';
import {searchVolume, searchVolumes} from '../thunks/booksThunk';

type VolumesEmptyState = {
  isLoading: boolean;
};

type VolumeEmptyState = {
  isLoading: boolean;
};

export type BooksState = {
  volumes: Volumes | VolumesEmptyState;
  volume: Volume | VolumeEmptyState;
};

const initialState: BooksState = {
  volumes: {
    isLoading: false,
  },
  volume: {
    isLoading: false,
  },
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchVolumes.fulfilled, (state, {payload}) => {
      state.volumes = payload;
      state.volumes.isLoading = false;
    });
    builder.addCase(searchVolumes.pending, state => {
      state.volumes.isLoading = true;
    });
    builder.addCase(searchVolume.fulfilled, (state, {payload}) => {
      state.volume = payload;
    });
  },
});

export const {} = booksSlice.actions;

export default booksSlice.reducer;
