import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export var NavBar = function() {
  return <Navbar>
    <Nav>
      <Navbar.Header>
        <Navbar.Brand>
        <Link className="home-button" to="/">
          Do it
        </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <NavItem>
        <Link className="new-button" to="/new">
          Create new
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
}
