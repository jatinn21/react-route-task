import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"></div>
        <div className="links">
          <Link to="/" className="link home">
            Home
          </Link>
          <Link to="/about" className="link about">
            About
          </Link>
          <Link to="/contact" className="link contact">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
