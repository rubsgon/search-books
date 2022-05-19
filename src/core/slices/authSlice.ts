import {createSlice} from '@reduxjs/toolkit';

import {User} from '@react-native-google-signin/google-signin';
import {signIn} from '../thunks/authThunk';

export type AuthState = {
  userInfo: User | object;
  accessToken: string;
};

const initialState: AuthState = {
  userInfo: {},
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, {payload}) => {
      state.userInfo = payload?.userInfo;
      state.accessToken = payload?.accessToken;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
