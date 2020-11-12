import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);
