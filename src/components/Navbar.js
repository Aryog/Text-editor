import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    // Back ticks are for the templete literals in es6 javascript 
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Wmode} bg-${props.Wmode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={props.toogleRed}
            />
            <label
              className="form-check-label text-warning"
              htmlFor="inlineRadio1"
            >
              Red
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onClick={props.toogleBlue}
            />
            <label
              className="form-check-label text-primary"
              htmlFor="inlineRadio2"
            >
              Blue
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              onClick={props.toogleDefault}
              checked
            />
            <label
              className="form-check-label text-success"
              htmlFor="inlineRadio3"
            >
              Default
            </label>
          </div>

          <form className="d-flex">
            <div
              className={`form-check form-switch text-${
                props.Wmode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toogleState}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
// For the variable type of the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// {for default prop types}
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Here is the text",
};
