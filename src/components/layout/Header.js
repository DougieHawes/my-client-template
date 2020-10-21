import React, { useState } from "react";

import { Link, NavLink, useHistory } from "react-router-dom";

import "./style.css";

const Header = () => {
  const [loggedIn, toggleLogged] = useState(true);

  const history = useHistory()

  return (
    <header className="header">
      <div className="title-box">
        <Link to="/">
          <h1 className="header-title">Client Template</h1>
        </Link>
      </div>
      <div className="links-box">
        {loggedIn ?
          <NavLink className="link" activeClassName="active-link" to="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </NavLink>
          :
          <div className="link" onClick={() => { toggleLogged(!loggedIn); history.push('/') }} to="/">
            <i className="fas fa-sign-out-alt"></i> Logout
          </div>
          }
      </div>
      {/* to be removed on completion */}
      <div className="toggle" onClick={() => { toggleLogged(!loggedIn); history.push('/') }}>toggle</div>
      {/* to be removed on completion */}
    </header>
  );
};

export default Header;
