import { Carousel } from "react-bootstrap";
import ImageCarousel from "../../../../components/ImageCarousel/ImageCarousel";
import { SLIDE1, SLIDE2 } from "../../../../constants/images";
import TextCarouselCaption from "../../../../components/TextCarouselCaption/TextCarouselCaption";
import "./Carousel.css";
type TypeSLideCarousel = {
  image: string | number;
  title: string;
  description: string;
};

const slideCarousels: TypeSLideCarousel[] = [
  {
    image: SLIDE1,
    title: "100% Fresh & organic foods",
    description: "We deliver organic vegetables & fruits",
  },
  {
    image: SLIDE2,
    title: "We serve fresh vegetables & fruits",
    description: "We deliver organic vegetables & fruits",
  },
];

const Hero = () => {
  return (
    <Carousel
      indicators={false}
      slide={false}
      controls={false}
      className="carousel"
    >
      {slideCarousels.map((val) => (
        <Carousel.Item interval={5000}>
          <ImageCarousel img={val.image} />
          <Carousel.Caption className="carousel-caption">
            <TextCarouselCaption
              title={val.title}
              description={val.description}
            />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
