import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/book/list">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/book/list" component={BookListPage} />
          <Route exact path="/book/details/:id" component={BookDetailsPage} />
        </Switch>
      </Router>
    );
  }
}
