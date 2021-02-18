/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './containers/login/index';
import { selectLoggedInformation } from './containers/login/state/selector';

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  const history = useHistory();
  const auth = {};

  return auth.user ? (
    <p>
      Welcome!
      {' '}
      <button
        type="submit"
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
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
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
