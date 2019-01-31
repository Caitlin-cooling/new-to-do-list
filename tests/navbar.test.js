import React from 'react';
import renderer from 'react-test-renderer';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar } from '../src/navbar.js';

test('navbar is rendered', () => {
  const component = renderer.create(
    <NavBar/>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
