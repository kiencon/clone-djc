import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from '../components/login/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/dashboard/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/public">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default AppRouter;
