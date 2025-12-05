import "./RowCircleQuality.css";
import CircleQuality from "../../../../components/CircleQuality/CircleQuality";
import { BADGE, DELIVER, SUPPORT, VEGETABLE } from "../../../../constants/images";
import { Col, Row } from "react-bootstrap";


const RowCircleQuality = () => {
  return (
  <Row lg={4} sm={2}>
    <Col>
    <CircleQuality
      bgColor="#e4b2d6"
      title="FREE SHIPPING"
      description="ON ORDER OVER $100"
      icon={DELIVER}
    />
    </Col>
    <Col>
    <CircleQuality
      bgColor="#d3be7dff"
      title="Always Fresh"
      description="Product well package"
      icon={VEGETABLE}
    />
    </Col>
    <Col>
    <CircleQuality
      bgColor="#9acad0ff"
      title="Superior Quality"
      description="Quality Products"
      icon={BADGE}
    />
    </Col>
    <Col>
    <CircleQuality
      bgColor="#d5b75dff"
      title="Support"
      description="24/7 Support"
      icon={SUPPORT}
    />
    </Col>
    </Row>
  );
};

export default RowCircleQuality;
