import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Header from './components/header/Header';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function Home () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}

const isLogged = true;

const Nav = () => {
  return isLogged
    ? <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    : null;
};

const Routers = () => (
  <Router>
    <div>
      <Nav />
      {!isLogged
        ? <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </Switch>
        : <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>}
    </div>
  </Router>
);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
