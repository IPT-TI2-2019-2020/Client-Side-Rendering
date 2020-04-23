import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookListPage from "../pages/book/List";
import BookDetailsPage from "../pages/book/Details";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

export default class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/about" component={About} />
          <PrivateRoute roles={[1, 2]} exact path="/book/list" component={BookListPage} />
          <PrivateRoute roles={[1]} exact path="/book/details/:id" component={BookDetailsPage} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}
