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
      users.forEach((user) => {
        state.usersById[user.id] = user;
        state.allIds.push(user.id);
      });
    },
    toggleUsersSubmitState(state) {
      state.submitting = !state.submitting;
    },
    setUsersSubmitError(state, { payload: { error } }) {
      state.submitError = error || null;
    },
  },
});

const { setUsersSubmitError, toggleUsersSubmitState, downloadUsersSuccess } = usersSlice.actions;

const downloadUsers = ({ authorizationToken }) => async (dispatch) => {
  dispatch(setUsersSubmitError({ error: null }));
  dispatch(toggleUsersSubmitState());

  try {
    const { data: users } = await usersApi.getUsers({ authorizationToken });

    console.log(users);
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
