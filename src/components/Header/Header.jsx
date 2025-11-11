import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Header-Logo" className="header__logo" />
        <div className="header__user-container">
          <button className="header__home-btn">Home</button>
          <button className="header__signin-btn">Sign in</button>
        </div>
      </div>
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <h3 className="header__subtitle">
          {" "}
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <form className="header__search-form">
          <fieldset className="header__search-form_fieldset">
            <input
              name="search_form"
              type="text"
              className="header__input-form"
              required
              placeholder="Enter topic"
            />
            <button className="header__search-btn">Search</button>
          </fieldset>
        </form>
      </div>
    </header>
  );
}

export default Header;
