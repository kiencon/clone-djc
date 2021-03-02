import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { resetJobcardForm } from '../../containers/jobcard/state/action';
import { removeJobcardFromStore } from '../../containers/jobcard/utils';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const backToDashboard = () => {
    dispatch(resetJobcardForm());
    removeJobcardFromStore(dispatch);
    history.push('/');
  };
  return (
    <header className="header">
      <div className="container wraper-header">
        <div
          aria-hidden="true"
          className="logo"
          type="submit"
          onClick={() => backToDashboard()}
        >
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
