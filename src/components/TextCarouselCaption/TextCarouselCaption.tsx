import { Button, Container } from "react-bootstrap";
import './TextCarouselCaption.css';
type TextCarouselCaptionProps = {
    title:string;
    description:string;
} 
const TextCarouselCaption = (props:TextCarouselCaptionProps) => {
    const {title,description} = props;
    
    return (
        <>
            <h1 className="caption">{title}</h1>
            <p className="caption">{description}</p>
            <Button id="btn"  variant="success">SHOP NOW</Button>
        </>
    )
}

export default TextCarouselCaption;