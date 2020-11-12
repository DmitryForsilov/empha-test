/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    token: '781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
  },
  reducers: {
    setAuthorizationToken(state, { payload: { token } }) {
      state.token = token;
    },
  },
});

export const authorizationActions = {
  ...authorizationSlice.actions,
};

export const authorizationReducer = authorizationSlice.reducer;
