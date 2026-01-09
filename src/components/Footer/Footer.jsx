import "./Footer.css";

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
            className="footer__triple-ten"
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
