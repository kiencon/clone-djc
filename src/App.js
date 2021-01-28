import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/Header';
import AppRouter from './router/index';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="main container">
        <section className="wraper-app">
          <AppRouter />
        </section>
      </div>
    </div>
  </Router>
);

export default App;
