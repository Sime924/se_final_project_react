import "./Footer.css";
import githubLogo from "../../assets/github-logo.svg";
import linkedinLogo from "../../assets/linkedin-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          {" "}
          &copy; 2025 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <button className="footer__btn">Home</button>
          <a
            className="footer__btn"
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sime924"
          >
            <img className="footer__icon" src={githubLogo} alt="github__logo" />
          </a>
          <a
            target="_blank"
            rel="noopener no referrer"
            href="https://linkedin.com"
          >
            <img
              className="footer__icon"
              src={linkedinLogo}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
