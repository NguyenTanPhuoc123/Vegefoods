import { Button, Container } from "react-bootstrap";
import './ImageCarousel.css';
type ImageCarouselProps = {
    img:string;
} 
const ImageCarousel = (props:ImageCarouselProps) => {
    const img = `url(${props.img})`;
    
    return (
        <Container fluid id='introduction' style={{"--url-Bg":img} as React.CSSProperties }>
            {/* <h1>WE SERVE FRESH VEGETABLE AND FRUIT</h1>
            <p>We deliver organic vegetables & fruits</p>
            <Button id="btn"  variant="success">SHOP NOW</Button> */}
        </Container>
    )
}

export default ImageCarousel;