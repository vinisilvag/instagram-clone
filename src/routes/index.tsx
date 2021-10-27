import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} isPrivate exact />
      <Route path="/login" component={SignIn} />
    </Switch>
  </BrowserRouter>
);
