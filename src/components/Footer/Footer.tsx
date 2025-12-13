import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Container className="footer" fluid>
      <Row lg={4} sm={2}>
        <Col>
          <h5>Vegefoods</h5>
          <p className="text-start">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </Col>
        <Col>
          <h5>Menu</h5>
          <p className="text-start link">Shop</p>
          <p className="text-start link">About</p>
          <p className="text-start link">Journal</p>
          <p className="text-start link">Contact Us</p>
        </Col>
        <Col>
          <h5>Help</h5>
          <Row>
            <Col>
              <p className="text-start link">Shipping Information</p>
            </Col>
            <Col>
              <p className="text-start link">FAQs</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-start link">Return and Exchange</p>
            </Col>
            <Col>
              <p className="text-start link">Contact</p>
            </Col>
          </Row>
          <p className="text-start link">Terms & Conditions</p>
          <p className="text-start link">Privacy Policy</p>
        </Col>
        <Col>
          <h5>Have a Questions?</h5>
          <p className="text-start">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <p className="text-start">+2 392 3929 210</p>
          <p className="text-start">info@yourdomain.com</p>
        </Col>
      </Row>
      <p>Copyright ©2025 All rights reserved | Made by NTP developer</p>
    </Container>
  );
};

export default Footer;
