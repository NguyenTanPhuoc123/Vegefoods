import { Container, Image, Row } from "react-bootstrap";
import "./Partners.css";
import {
  PARTNER_1,
  PARTNER_2,
  PARTNER_3,
  PARTNER_4,
  PARTNER_5,
} from "../../../../constants/images";

const partners = [PARTNER_1, PARTNER_2, PARTNER_3, PARTNER_4, PARTNER_5];
const Partners = () => {
  return (
    <Container fluid className="partners-section my-5">
      <Row lg={6} className="mb-4 d-flex justify-content-center align-items-center">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className="partner-logo"
            width={100}
            height={100}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
