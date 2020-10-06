import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

import { Button1 } from "../../utils/Buttons";
import { Input1 } from "../../utils/Inputs";

const Login = () => {
  return (
    <div className="page login">
      <h2 className="page-title">Login</h2>
      <Link className="page-toggler" to="/signup">
        Sign Up
      </Link>
      <form className="form">
        <Input1 type="email" placeholder="Enter Email..." />
        <Input1 type="password" placeholder="Enter Password..." />
        <Button1 text="submit" />
      </form>
    </div>
  );
};

export default Login;
