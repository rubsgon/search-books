import {createAsyncThunk} from '@reduxjs/toolkit';
import {TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../../redux/store';

import {googleapis} from '../../services/instances';
import {Volume, Volumes} from '../components/Home/domain';

export const searchVolumes = createAsyncThunk(
  'books/searchVolumes',
  async (volume: string) => {
    const {data} = await googleapis.books.get<Volumes>('/volumes?q=' + volume);
    return data;
  },
);

export const searchVolume = createAsyncThunk(
  'books/searchVolume',
  async (id: string) => {
    const {data} = await googleapis.books.get<Volume>('/volumes/' + id);
    return data;
  },
);

export const getMyFavorites = createAsyncThunk(
  'books/getMyFavorites',
  async (args, {getState}) => {
    const state = getState();
    const {data} = await googleapis.books.get<Volumes>(
      '/mylibrary/bookshelves/0/volumes',
      {
        headers: {
          Authorization: 'Bearer ' + state.auth.accessToken,
        },
      },
    );

    return data;
  },
);
