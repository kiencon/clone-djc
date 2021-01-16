import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from './router/index';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
