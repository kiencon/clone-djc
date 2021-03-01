import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './containers/login/index';
import PrivateRoute from './router/PrivateRoute';
import AppRouter from './router/index';
import Header from './components/header/Header';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <div className="main container">
            <section className="wraper-app">
              <AppRouter />
            </section>
          </div>
        </PrivateRoute>
      </Switch>
    </Router>
  </>
);

export default App;
