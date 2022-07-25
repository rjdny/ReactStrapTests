import React from "react";
import "./styles.css";
import {
  Nav,
  Navbar,
  Card,
  Col,
  Row,
  Button,
  NavDropdown
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ theme }) {
  var lightmode = false;
  var GetMode = () => {
    return lightmode ? "light" : "dark";
  };

  return (
    <div className="Main">
      <Navbar
        className="Navy"
        collapseOnSelect
        expand="full"
        bg={GetMode()}
        variant={GetMode()}
      >
        <Navbar.Brand href="#home">GottaTryIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">My Posts</Nav.Link>
            <Nav.Link href="#pricing">Top Rated Posts</Nav.Link>
            <NavDropdown title="Other" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="CardHolder">
        <Col>
          <Button
            onClick={() => {
              lightmode = !lightmode;
            }}
          >
            Toggle
          </Button>
        </Col>
      </div>
    </div>
  );
}
