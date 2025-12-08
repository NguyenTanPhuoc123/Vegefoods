import "./Deal.css";
import { Col, Container, Row } from "react-bootstrap";
const Deal = () => {
  return (
    <Container fluid className="deal-section my-5 align-items-center justify-content-center d-flex">
      <Row>
        <Col />
        <Col>
          <p className="text-start">Best Price for you</p>

          <h1>Deal of the day</h1>

          <p className="description text-start">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>

          <h4 className="product-name ">Spinach</h4>

          <p className="text-start">
            $10 <span>now $5 only</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Deal;
