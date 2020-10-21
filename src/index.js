import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";

import "style.css";

import AdminDashboard from 'components/routes/private/admin/AdminDashboard'
import UserDashboard from 'components/routes/private/user/UserDashboard'

import Header from "components/layout/Header";

import Login from "components/routes/auth/Login";
import Signup from "components/routes/auth/Signup";

import Landing from "components/routes/public/Landing";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path='/admin' component={AdminDashboard} />
        <Route exact path='/user' component={UserDashboard} />
      </div>
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
