import { Container } from "react-bootstrap";
import './ImageCarousel.css';
type ImageCarouselProps = {
    img:string | number;
} 
const ImageCarousel = (props:ImageCarouselProps) => {
    const img = `url(${props.img})`;
    
    return (
        <Container fluid id='introduction' style={{"--url-Bg":img} as React.CSSProperties }>
        
        </Container>
    )
}

export default ImageCarousel;