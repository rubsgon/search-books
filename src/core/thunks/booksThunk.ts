import {createAsyncThunk} from '@reduxjs/toolkit';

import {googleapis} from '../../services/instances';
import {Volume, Volumes} from '../types';

export const searchVolumes = createAsyncThunk(
  'books/searchVolumes',
  async ({text, startIndex, maxResults}) => {
    console.log(startIndex);
    const {data} = await googleapis.books.get<Volumes>(
      `/volumes?q=${text}&startIndex=${startIndex}&maxResults=${maxResults}`,
    );
    return {data, text};
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

export const addOrRemoveVolume = createAsyncThunk(
  'books/addOrRemoveVolume',
  async (args, {getState, dispatch}) => {
    const state = getState();
    const headers = {
      headers: {
        Authorization: 'Bearer ' + state.auth.accessToken,
      },
    };

    const {items} = getState().books.myFavorites;

    if (
      !items ||
      items?.filter(itemFavorited => itemFavorited.id === args.id).length === 0
    ) {
      const {dataAddVolume} = await googleapis.books.post(
        `/mylibrary/bookshelves/0/addVolume?volumeId=${args.id}`,
        {},
        headers,
      );
    } else {
      const {dataRemoveVolume} = await googleapis.books.post(
        `/mylibrary/bookshelves/0/removeVolume?volumeId=${args.id}`,
        {},
        headers,
      );
    }

    await dispatch(getMyFavorites());

    return null;
  },
);
