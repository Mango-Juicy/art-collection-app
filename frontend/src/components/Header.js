import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <header>
        <Navbar  expand="lg" collapseOnSelect>
          <Container>

            <LinkContainer to={'/'} >
              <Navbar.Brand >Art collection</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <LinkContainer to="/shop">
                  <Nav.Link >  Gallery</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/events">
                  <Nav.Link >  Events</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/stories">
                  <Nav.Link >  Stories</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link >  Accedi</Nav.Link>
                </LinkContainer>
                
              </Nav>

            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
