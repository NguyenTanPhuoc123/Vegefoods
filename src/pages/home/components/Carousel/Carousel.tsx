import { Carousel } from "react-bootstrap";
import ImageCarousel from "../../../../components/ImageCarousel/ImageCarousel";
import { SLIDE1, SLIDE2, SLIDE3 } from "../../../../constants/images";
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
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: SLIDE2,
    title: "Second slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: SLIDE3,
    title: "Third slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
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
