import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

/** No login require */
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
/** Login is required */
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
