import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Carousel, Col, Row, Image } from 'react-bootstrap';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import TextCarouselCaption from '../../components/TextCarouselCaption/TextCarouselCaption';

function Home(){
  return (
    <>
    <Container fluid className='top-header'>
      <Row>
      <Col xs={8} md={4}><li className='fa-solid fa-phone'/> + 1235 2355 98</Col>
      <Col xs={8} md={4}> <li className='fa-solid fa-envelope'/> vegefood@gmail.com</Col>
      <Col xs={8} md={4}> 3-5 Business days delivery & Free Returns</Col>
      </Row>
      
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
    <Carousel slide={false} controls={false} className='carousel'>
      <Carousel.Item interval={5000} >
        <ImageCarousel img='https://themewagon.github.io/vegefoods/images/bg_2.jpg'/>
        <Carousel.Caption className='carousel-caption'>
          <TextCarouselCaption title='First slide label' description='Nulla vitae elit libero, a pharetra augue mollis interdum.'  />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImageCarousel img="https://cdn.magicdecor.in/com/2023/11/15111201/Fresh-Vegetables-and-Fruits-Wallpaper-for-Wall.jpg" />
        <Carousel.Caption className='carousel-caption'>
           <TextCarouselCaption title='First slide label' description='Nulla vitae elit libero, a pharetra augue mollis interdum.'  />
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ImageCarousel img="https://cdn.magicdecor.in/com/2022/10/30092027/1745969564.jpg" />
        <Carousel.Caption className='carousel-caption'>
           <TextCarouselCaption title='First slide label' description='Nulla vitae elit libero, a pharetra augue mollis interdum.'  />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}

export default Home;