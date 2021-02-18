import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedInformation } from '../containers/login/state/selector';

const PrivateRoute = ({ children, auth, ...rest }) => {
  const {
    loggedInformation,
  } = useSelector(
    state => ({
      loggedInformation: selectLoggedInformation(state),
    }),
  );
  return (
    <Route
      {...rest}
      render={({ location }) => (loggedInformation.isLogged ? (
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
};

export default PrivateRoute;
