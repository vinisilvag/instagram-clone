import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

import { NotFoundScreen } from '../pages/404';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} isPrivate exact />
      <Route path="/login" component={SignIn} />
      <Route path="/profile/:id" component={Profile} isPublic />

      <Route path="*" component={NotFoundScreen} isPublic />
    </Switch>
  </BrowserRouter>
);
