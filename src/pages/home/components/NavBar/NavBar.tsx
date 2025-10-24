import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'

const NavBar = ()=>{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home" id='logo'>VEGEFOODS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='justify-content-end w-100'>
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wishlist
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Single Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Checkout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">
              <i className="fa-solid fa-shopping-cart"></i>
              [0]
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;