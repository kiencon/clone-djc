import Logo                 from '../../assets/images/logo.png';
import { useHistory }       from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const history = useHistory();
  const navigateToDashboard = () => history.push("/dashboard");
  return (
    <header className="header">
      <div className="container wraper-header">
        <div onClick={navigateToDashboard} className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
