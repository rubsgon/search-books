import {createAsyncThunk} from '@reduxjs/toolkit';

import {googleapis} from '../../services/instances';
import {Volumes} from '../components/Home/domain/volumes';

export const searchVolumes = createAsyncThunk(
  'books/searchVolumes',
  async (volume: string) => {
    const {data} = await googleapis.books.get<Volumes>('/volumes?q=' + volume);
    return data;
  },
);
