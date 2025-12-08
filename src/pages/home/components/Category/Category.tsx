import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./Category.css";
import {
  CATEGORY,
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
} from "../../../../constants/images";
const Category = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="mb-4">
        <Col lg className="category">
          <Image src={CATEGORY_1} className="category-img" />
          <h4>Vegetables</h4>
        </Col>
        <Col className="category category-slogent">
          <h3 className="title">Vegetables</h3>
          <p>Protect the health every home</p>
          <Button id="btn" variant="success">
            SHOP NOW
          </Button>
        </Col>
        <Col lg className="category">
          <Image src={CATEGORY_3} className="category-img" />
          <h4>Juices</h4>
        </Col>
      </Row>
      <Row>
        <Col lg className="category">
          <Image src={CATEGORY_2} className="category-img" />
          <h4>Fruits</h4>
        </Col>
        <Col className="category">
          <Image src={CATEGORY} className="category-img-main" />
        </Col>
        <Col lg className="category">
          <Image src={CATEGORY_4} className="category-img" />
          <h4>Dried</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
