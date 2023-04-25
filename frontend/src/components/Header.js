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

  //L'Artista
  const artistDropdown = () => {
    return(
        <NavDropdown title="L'Artista" id='artist'>

          <LinkContainer to='/biografia'>
            <NavDropdown.Item>Biografia</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to='/antologiaCritica'>
            <NavDropdown.Item>Antologia Critica</NavDropdown.Item>
          </LinkContainer> 

          <LinkContainer to='/articoliInterviste'>
            <NavDropdown.Item>Articoli & Interviste</NavDropdown.Item>
          </LinkContainer>                  

        </NavDropdown>
    )
  }

  //Opere
  const artworksDropdown = () => {
    return(
        <NavDropdown title="Opere" id='artworks'>

          <LinkContainer to='/dipinti'>
            <NavDropdown.Item>Dipinti</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to='/litografie'>
            <NavDropdown.Item>Litografie</NavDropdown.Item>
          </LinkContainer> 

        </NavDropdown>
    )
  }

  //Mostre
  const expositonsDropdown = () => {
    return(
        <NavDropdown title="Mostre" id='expositions'>

          <LinkContainer to='/mostreCollettive'>
            <NavDropdown.Item>Mostre collettive</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to='/mostrePersonali'>
            <NavDropdown.Item>Mostre personali</NavDropdown.Item>
          </LinkContainer> 

          <LinkContainer to='/cataloghi'>
            <NavDropdown.Item>Cataloghi</NavDropdown.Item>
          </LinkContainer>                  

        </NavDropdown>
    )
  } 

  //Fondazione Romano Notari
  const foundationDropdown = () => {
    return(
        <NavDropdown title="Fondazione Romano Notari" id='foundation'>

          <LinkContainer to='/casaArte'>
            <NavDropdown.Item>Casa D'Arte Romano Notari</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to='/archivio'>
            <NavDropdown.Item>Archivio Romano Notari</NavDropdown.Item>
          </LinkContainer> 

          <LinkContainer to='/autentiche'>
            <NavDropdown.Item>Autentiche</NavDropdown.Item>
          </LinkContainer>                  

        </NavDropdown>
    )
  }


  const userDropdown = () => {
    return(
      userInfo ? (
        <NavDropdown title={userInfo.first_name} id='username'>

          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>

          {
            !userInfo.is_staff ? <></>
            : <LinkContainer to='/addItems'>
                <NavDropdown.Item>Add Items</NavDropdown.Item>
              </LinkContainer>            
          }

          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

        </NavDropdown>
      ) : (
        <LinkContainer to="/login">
          <Nav.Link >Loggin</Nav.Link>
        </LinkContainer>
      )
    )
  }

  return (
    <div>
      <header>
        <Navbar className='c-orange' expand="lg" collapseOnSelect>
          <Container>

            <LinkContainer to={'/'} >
              <Navbar.Brand >Romano Notari</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                {artistDropdown()}

                {artworksDropdown()}

                {expositonsDropdown()}

                {foundationDropdown()}

                <LinkContainer to="/contatti">
                  <Nav.Link>Contatti</Nav.Link>
                </LinkContainer>

                {userDropdown()}
                
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
