import Logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="container wraper-header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  </header>
);

export default Header;
