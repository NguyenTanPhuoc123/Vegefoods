import { Col, Container, Row } from "react-bootstrap";
import "./Testimony.css";
import Rating from "./component/Rating";
import { PERSON_1, PERSON_2, PERSON_3 } from "../../../../constants/images";

type Rating = {
  id: number;
  avatar: string;
  fullname: string;
  comment: string;
  job: string;
};

const ratings: Rating[] = [
  {
    id: 1,
    avatar: PERSON_1,
    fullname: "Grarent Smith",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    job: "System Analyst",
  },
  {
    id: 2,
    avatar: PERSON_2,
    fullname: "Sarah Johnson",
    comment:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    job: "Web Developer",
  },
  {
    id: 3,
    avatar: PERSON_3,
    fullname: "Michael Brown",
    comment:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    job: "Graphic Designer",
  },
];

const Testimony = () => {
  return (
    <Container fluid className="text-center my-5">
      <p>Testimony</p>
      <h1>Our satisfied customer says</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
      </p>
      <Row lg={3} md={3} sm={1}  className=" mt-4">
        {ratings.map((rating) => (
          <Col key={rating.id}>
            <Rating
              id={rating.id}
              avatar={rating.avatar}
              fullname={rating.fullname}
              comment={rating.comment}
              job={rating.job}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimony;
