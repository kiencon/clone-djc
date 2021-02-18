import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="container wraper-header">
      <Route>
        <Link
          className="logo"
          aria-hidden="true"
          to="/"
        >
          <img src={Logo} alt="Logo" />
        </Link>
      </Route>

    </div>
  </header>
);

export default Header;
