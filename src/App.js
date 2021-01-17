import {
  BrowserRouter as Router,
}                             from "react-router-dom";
import Header                 from './components/header/Header';
import AppRouter              from './router/index';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
