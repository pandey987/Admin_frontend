// Navbar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/event-form">Event Form</Nav.Link>
          <Nav.Link href="/update-event-form">Update Event Form</Nav.Link>
          <Nav.Link href="/add-blog-post">Add Blog Post</Nav.Link>
          <Nav.Link href="/show-blog-post">Show Blog Post</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
