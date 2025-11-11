// import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p>Header is working</p>
        <img src={logo} alt="Header-Logo" className="header__logo" />
      </div>
    </header>
  );
}

export default Header;
