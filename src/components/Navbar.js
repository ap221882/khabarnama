import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import PropTypes from "prop-types";

export class Navbar extends Component {
  // static defaultProps = {
  //   active: "home",
  // };
  // static defaultProps = {
  //   mode: "dark",
  // };
  static propTypes = {
    mode: PropTypes.string,
  };
  componentDidUpdate;
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      homeActive: "",
      aboutActive: "",
      generalActive: "",
      businessActive: "",
      entertainmentActive: "",
      healthActive: "",
      scienceActive: "",
      sportsActive: "",
      technologyActive: "",
      modeWhichIs: this.props.mode,
    };

    // active = this.props.active;
  }
  // toggleState = () => {
  //   this.props.toggleMode();
  //   if (this.props.mode === "dark") {
  //     this.setState({ modeWhichIs: "dark" });
  //   } else if (this.props.mode === "light") {
  //     this.setState({ modeWhichIs: "light" });
  //   }
  // };

  clearClicks = () => {
    this.setState({ homeActive: "" });
    this.setState({ aboutActive: "" });
    this.setState({ generalActive: "" });
    this.setState({ businessActive: "" });
    this.setState({ entertainmentActive: "" });
    this.setState({ healthActive: "" });
    this.setState({ scienceActive: "" });
    this.setState({ sportsActive: "" });
    this.setState({ technologyActive: "" });
  };
  aboutClick = () => {
    this.clearClicks();
    this.setState({ aboutActive: "active" });
    console.log(this.state.active);
  };
  homeClick = () => {
    this.clearClicks();
    this.setState({ homeActive: "active" });
    console.log(this.state.active);
  };
  generalClick = () => {
    this.clearClicks();
    this.setState({ generalActive: "active" });
    console.log(this.state.active);
  };
  businessClick = () => {
    this.clearClicks();
    this.setState({ businessActive: "active" });
    console.log(this.state.active);
  };
  entertainmentClick = () => {
    this.clearClicks();
    this.setState({ entertainmentActive: "active" });
    console.log(this.state.active);
  };
  healthClick = () => {
    this.clearClicks();
    this.setState({ healthActive: "active" });
    console.log(this.state.active);
  };
  scienceClick = () => {
    this.clearClicks();
    this.setState({ scienceActive: "active" });
    console.log(this.state.active);
  };
  sportsClick = () => {
    this.clearClicks();
    this.setState({ sportsActive: "active" });
    console.log(this.state.active);
  };
  techClick = () => {
    this.clearClicks();
    this.setState({ technologyActive: "active" });
    console.log(this.state.active);
  };
  //------------------------------
  //  changeMode=()=>{
  //    if
  //  }
  //------------------------------

  render() {
    // let { active } = this.props;
    // console.log(this.state.active);
    return (
      <div>
        {/* this.toggleState(); console.log({this.state.modeWhichIs}); */}
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top "
          style={{ backgroundColor: "rgb(37 46 53)" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Khabarnama
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.homeActive}`}
                    aria-current="page"
                    to="/"
                    onClick={this.homeClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.aboutActive}`}
                    aria-current="page"
                    to="/about"
                    onClick={this.aboutClick}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.generalActive}`}
                    aria-current="page"
                    to="/general"
                    onClick={this.generalClick}
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.businessActive}`}
                    onClick={this.businessClick}
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.entertainmentActive}`}
                    onClick={this.entertainmentClick}
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.healthActive}`}
                    onClick={this.healthClick}
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.scienceActive}`}
                    onClick={this.scienceClick}
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.sportsActive}`}
                    to="/sports"
                    onClick={this.sportsClick}
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${this.state.technologyActive}`}
                    onClick={this.techClick}
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                // onClick={this.toggleState}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Darkmode/Lightmode
              </label>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
