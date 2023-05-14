import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

function Header({categories}) {

  const user = useSelector(state => state.user)
  const { userInfo } = user
  const dispatch = useDispatch()

  //Configuration: title
  const title = 'Romano Notari'

  //Menu labels: returns unique elements
  const menu = [...new Set(categories.map((category) => category.menu))]  

  const logoutHandler = () => {
    dispatch(logout())
  }

  //Dropdown for MainScreen pages
  const dropdown = (menuLabel, index) => {  
    const items = categories.filter(categories => categories.menu === menuLabel)
    
    return(
      <NavDropdown key={index} className='m-1' menuVariant='dark' title={menuLabel} id={index} >
        {items.map((category) => (
          <LinkContainer key={category.id} to={category.url}>
            <NavDropdown.Item>{category.label}</NavDropdown.Item>
          </LinkContainer>
        ))}
      </NavDropdown>
    )
  }


  //Accedi
  const userDropdown = () => {
    return(
      userInfo ? (
        <NavDropdown className='m-1' menuVariant='dark' title={userInfo.first_name} id='username'>

          <LinkContainer to='/profile'>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>

          {
            !userInfo.is_staff ? <></>
            : <LinkContainer to='/manager'>
                <NavDropdown.Item>Add Items</NavDropdown.Item>
              </LinkContainer>            
          }

          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

        </NavDropdown>
      ) : (
        <LinkContainer className='m-1' to="/login">
          <Nav.Link>Accedi</Nav.Link>
        </LinkContainer>
      )
    )
  }

  return (
    <div>
      <header>
        <Navbar className='c-primary py-0' variant='dark' expand="lg" collapseOnSelect>
          <Container>

            <LinkContainer to={'/'} >
              <Navbar.Brand >{title}</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav" />

            <Navbar.Collapse  id="basic-navbar-nav">
              <Nav className="ms-auto">

                {menu.map((menuLabel, index) => (
                  dropdown(menuLabel, index)           
                ))}

                <LinkContainer className='m-1' to="/contatti">
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
