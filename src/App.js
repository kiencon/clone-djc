import {
  BrowserRouter as Router,
}                             from "react-router-dom";
import Header                 from './components/header/Header';
import DashboardPage          from './containers/dashboard/index';
import AppRouter              from './router/index';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <DashboardPage />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
