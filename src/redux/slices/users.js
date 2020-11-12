/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import usersApi from '../../api/usersApi';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersById: {},
    allIds: [],
    submitting: false,
    submitError: null,
  },
  reducers: {
    downloadUsersSuccess(state, { payload: { users } }) {
      const allIds = [];

      users.forEach((user) => {
        state.usersById[user.id] = user;
        allIds.push(user.id);
      });

      state.allIds = allIds;
    },
    toggleUsersSubmitState(state) {
      state.submitting = !state.submitting;
    },
    setUsersSubmitError(state, { payload: { error } }) {
      state.submitError = error || null;
    },
    sortIdsByBigger(state) {
      state.allIds.sort((a, b) => a - b);
    },
    sortIdsBySmaller(state) {
      state.allIds.sort((a, b) => b - a);
    },
  },
});

const { setUsersSubmitError, toggleUsersSubmitState, downloadUsersSuccess } = usersSlice.actions;

const downloadUsers = ({ authorizationToken }) => async (dispatch) => {
  dispatch(setUsersSubmitError({ error: null }));
  dispatch(toggleUsersSubmitState());

  try {
    const { data: users } = await usersApi.getUsers({ authorizationToken });

    dispatch(downloadUsersSuccess({ users }));
  } catch (error) {
    console.log(error);
    dispatch(setUsersSubmitError({ error: error.message }));
  } finally {
    dispatch(toggleUsersSubmitState());
  }
};

export const usersActions = {
  ...usersSlice.actions,
  downloadUsers,
};

export const usersReducer = usersSlice.reducer;
