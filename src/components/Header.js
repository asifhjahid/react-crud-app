import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

export default function Header() {
  return (
      <div>
          <Navbar color='dark' dark>
              <Container className='d-flex justify-content-between'>
                  <NavbarBrand href='/' >My Team</NavbarBrand>
                  <Nav>
                      <NavItem>
                          <Link to='/add' className='btn btn-primary '>Add User</Link>
                      </NavItem>
                  </Nav>
              </Container>

          </Navbar>
      </div>
    
  );
}
