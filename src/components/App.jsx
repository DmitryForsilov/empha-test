import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import UsersPage from '../pages/users';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/users" component={UsersPage} />
  </Switch>
);
