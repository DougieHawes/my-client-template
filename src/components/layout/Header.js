import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  const [loggedIn, toggleLogged] = useState(true);
  return (
    <header className="header">
      <div className="title-box">
        <Link to="/">
          <h1 className="header-title">Client Template</h1>
        </Link>
      </div>
      <div className="links-box">
        {loggedIn && (
          <NavLink className="link" activeClassName="active-link" to="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
