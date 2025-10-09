import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home(){
  return (
    <>
    <Container fluid className='top-header justify-content-around d-flex'>
      <p><li className='fa-solid fa-phone'/> + 1235 2355 98</p>
      <p> <li className='fa-solid fa-envelope'/> vegefood@gmail.com</p>
      <p> 3-5 Business days delivery & Free Returns</p>
    </Container>
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
    <Container fluid className='introduction d-flex justify-content-center align-items-center flex-column'>

    </Container>
    </>
  );
}

export default Home;