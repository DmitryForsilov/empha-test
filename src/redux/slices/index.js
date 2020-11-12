import { usersActions, usersReducer } from './users';
import { authorizationActions, authorizationReducer } from './authorization';

export const actions = {
  ...usersActions,
  ...authorizationActions,
};

export const reducers = {
  users: usersReducer,
  authorization: authorizationReducer,
};
