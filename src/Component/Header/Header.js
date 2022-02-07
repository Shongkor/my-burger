import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
<Navbar collapseOnSelect expand="lg" style={{ background: "#D70F64"}} variant="dark">
  <Container>
  <img className="brand navbar-brand p-0" src="./assets/logo.png" alt="Logo" />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink exact to="/" className="orderNavLink mx-4">BurgerBuilder</NavLink>
      <NavLink to="/order" className="orderNavLink">Orders</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        
    )
}

export default Header