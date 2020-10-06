import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

import { Button1 } from "../../utils/Buttons";
import { Input1 } from "../../utils/Inputs";

const Signup = () => {
  return (
    <div className="page signup">
      <h2 className="page-title">Sign Up</h2>
      <Link className="page-toggler" to="/login">
        Login
      </Link>
      <form className="form">
        <Input1 type="text" placeholder="Enter Username..." />
        <Input1 type="email" placeholder="Enter Email..." />
        <Input1 type="password" placeholder="Enter Password..." />
        <Input1 type="password" placeholder="Confirm Password..." />
        <Button1 text="submit" />
      </form>
    </div>
  );
};

export default Signup;
