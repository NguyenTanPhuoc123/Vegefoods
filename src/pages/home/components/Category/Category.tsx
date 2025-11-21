import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './Category.css'
import { CATEGORY, CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4 } from '../../../../constants/images';
const Category = ()=>{
    return (
        <Container className='text-center my-5'>
            <Row>
            <Col className='category'>
            <Image className='category-img' src={CATEGORY_1}/>
            <h4>Vegetables</h4>
            </Col>
            <Col className='category'>
            <h3 className='title'>Vegetables</h3>
            <p>Protect the health every home</p>
            <Button id="btn"  variant="success">SHOP NOW</Button>
            </Col>
            <Col className='category'>
            <Image className='category-img' src={CATEGORY_3}/>
            <h4>Juices</h4>
            </Col>
            </Row>
            <Row >
            <Col className='category'>
            <Image className='category-img' src={CATEGORY_2}/>
            <h4>Fruits</h4>
            </Col>
            <Col className='category'>
            {/* <Image className='category-img' src={CATEGORY_2}/> */}
            </Col>
            <Col className='category'>
            <Image className='category-img' src={CATEGORY_4}/>
            <h4>Dried</h4>
            </Col>
            </Row>
        </Container>
    )
}

export default Category;