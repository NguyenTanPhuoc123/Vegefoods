import "./Deal.css";
import { Container } from "react-bootstrap";
const Deal = () => {
  return (
    <Container className="deal-section my-5 justify-content-flex-end align-items-center  d-flex">
      <Container id="content">
        <p className="text-start">Best Price for you</p>
        <h1>Deal of the day</h1>
        <p className="description text-start">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <h4 className="product-name text-start">Spinach</h4>
        <p className="text-start">
          $10 <span>now $5 only</span>
        </p>
      </Container>
    </Container>
  );
};

export default Deal;
