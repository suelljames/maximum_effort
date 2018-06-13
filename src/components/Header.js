import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ display: "flex" }}>
            Maximum_Effort
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer exact to="/signup">
          <NavItem eventKey={1}>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={2}>Log in</NavItem>
        </LinkContainer>
        <LinkContainer to="/UserProfile">
          <NavItem eventKey={2}>User Profile</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/ProfileList">
          <NavItem eventKey={2}>Profile List</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
