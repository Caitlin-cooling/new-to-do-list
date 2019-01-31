import './global.js';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render() {
    return <Router>
      <Navbar>
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
    </Router>
  }
}
