import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from '../containers/login/index';
import PrivateRoute from './PrivateRoute';
import DashboardPage from '../containers/dashboard/index';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default AppRouter;
