import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { resetJobcardForm } from '../../containers/jobcard/state/action';
import { removeJobcardFromStore } from '../../containers/jobcard/utils';
import { logOutRequest } from '../../containers/login/state/action';
import { selectLoggedInformation } from '../../containers/login/state/selector';
import { logOut } from '../../database/auth';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedInfor = useSelector(state => selectLoggedInformation(state));

  const backToDashboard = () => {
    dispatch(resetJobcardForm());
    removeJobcardFromStore(dispatch);
    history.push('/');
  };

  const logout = () => {
    logOut().then(() => {
      dispatch(logOutRequest());
      backToDashboard();
    });
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
        {
          loggedInfor.isLogged ? (
            <div
              className="logOut"
              aria-hidden="true"
              type="submit"
              onClick={() => logout()}
            >
              Log Out
            </div>
          ) : null
        }
      </div>
    </header>
  );
};

export default Header;
