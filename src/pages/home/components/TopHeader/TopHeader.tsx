import { Col, Container, Row } from 'react-bootstrap';
import './TopHeader.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const TopHeader = ()=>{
    return (
        <Container fluid className='top-header'>
      <Row>
      <Col xs={8} md={4}><li className='fa-solid fa-phone'/> + 1235 2355 98</Col>
      <Col xs={8} md={4}> <li className='fa-solid fa-envelope'/> vegefood@gmail.com</Col>
      <Col xs={8} md={4}> 3-5 Business days delivery & Free Returns</Col>
      </Row>
      
    </Container>
    );
}