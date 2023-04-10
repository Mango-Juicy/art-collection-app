import React from 'react'
import { Navbar, Nav, Container, Row, NavDrop, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'




function Header() {

  const user = useSelector(state => state.user)
  const { userInfo } = user
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

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

                {userInfo ? (
                  <NavDropdown title={userInfo.first_name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link >Accedi</Nav.Link>
                  </LinkContainer>

                )}
                
              </Nav>

            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
