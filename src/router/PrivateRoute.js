import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, auth, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (localStorage.getItem('user') ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
