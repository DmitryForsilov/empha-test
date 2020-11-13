/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    token: null,
  },
  reducers: {
    setAuthorization(state, { payload: { token } }) {
      state.token = token || null;
    },
  },
});

export const authorizationActions = {
  ...authorizationSlice.actions,
};

export const authorizationReducer = authorizationSlice.reducer;
