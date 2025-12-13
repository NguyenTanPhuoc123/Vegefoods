import { Button, Col, Container, Row } from "react-bootstrap"
import "./SubcribeNews.css"


const SubcribeNews = () => {
  return (
    <Container fluid className="subcribe-news text-center mt-5 mb-5 p-5">
        <Row>
            <Col >
            <h5>Subcribe to our Newsletter</h5>
            <p>Get e-mail updates about our latest shops and special offers</p>
            </Col>
            <Col md={5} className="justify-content-center align-items-center d-flex">
            <input type="text" placeholder="Enter your email address" id="subcribe-input"/>
            <Button id="subscribe">Subscribe</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default SubcribeNews