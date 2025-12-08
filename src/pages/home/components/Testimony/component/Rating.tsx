import { Card, Image } from "react-bootstrap";
import "./Rating.css";

type RatingProps = {
  id: number;
  avatar: string;
  fullname: string;
  comment: string;
  job: string;
};

const Rating = (props: RatingProps) => {
  const { avatar, fullname, comment, job } = props;
  return (
    <Card className="rating-card p-3 justify-content-center align-items-center mx-auto">
      <Image className="avatar" src={avatar} />
      <Card.Body>
        <Card.Text className="text-black-50">
          {comment.substring(0, 130)}...
          <a className="link-view-more" href="#">
            View more
          </a>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Title>{fullname}</Card.Title>
        <Card.Subtitle className="text-uppercase">{job}</Card.Subtitle>
      </Card.Footer>
    </Card>
  );
};

export default Rating;
