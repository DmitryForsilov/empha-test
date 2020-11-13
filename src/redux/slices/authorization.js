/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    loggedIn: false,
    token: null,
  },
  reducers: {
    setAuthorization(state, { payload: { loggedIn, token } }) {
      state.loggedIn = loggedIn;
      state.token = token || null;
    },
  },
});

export const authorizationActions = {
  ...authorizationSlice.actions,
};

export const authorizationReducer = authorizationSlice.reducer;
