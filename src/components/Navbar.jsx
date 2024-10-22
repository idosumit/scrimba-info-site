import reactLogo from "../assets/react.svg";
import PropTypes from "prop-types";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src={reactLogo} />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
