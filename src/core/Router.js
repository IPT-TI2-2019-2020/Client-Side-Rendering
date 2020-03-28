import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import BookListPage from '../pages/book/List';
import BookDetailsPage from '../pages/book/Details';

export default class RouterComponent extends React.Component {
  render () {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" component={Nav.Link}>Home</NavLink>
              <NavLink to="/about" component={Nav.Link}>Lesson 3</NavLink>
              <NavLink to="/book/list" component={Nav.Link}>
                Lesson 4 - Books
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>

          <Route exact path="/about" component={About} />
          <Route exact path="/book/list" component={BookListPage} />
          <Route exact path="/book/details/:id" component={BookDetailsPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
