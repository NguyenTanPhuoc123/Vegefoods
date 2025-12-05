import React from 'react'
import "./Products.css"
import ProductItem from './ProductItem/ProductItem'
import { Col, Container, Row } from 'react-bootstrap'
import { PRODUCT_1, PRODUCT_2, PRODUCT_3, PRODUCT_4, PRODUCT_5, PRODUCT_6, PRODUCT_7, PRODUCT_8 } from '../../../../constants/images'

type Product = {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
}
const listProducts:Product[] = [
  {productId: 1, productName: 'Bell pepper', productImage: PRODUCT_1, productPrice: 10},
  {productId: 2, productName: 'strawberry', productImage: PRODUCT_2, productPrice: 20},
  {productId: 3, productName: 'green beans', productImage: PRODUCT_3, productPrice: 30},
  {productId: 4, productName: 'purple cabbage', productImage: PRODUCT_4, productPrice: 40},
  {productId: 5, productName: 'tomatoe', productImage: PRODUCT_5, productPrice: 50},
  {productId: 6, productName: 'brocolli', productImage: PRODUCT_6, productPrice: 60},
  {productId: 7, productName: 'carrots', productImage: PRODUCT_7, productPrice: 70},
  {productId: 8, productName: 'fruit juice', productImage: PRODUCT_8, productPrice: 80},
]

const Products = () => {
  return (
    <Container className='text-center my-5'>
    <p>Features Products</p>
    <h1>Our Products</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    <Row>
    {listProducts.map((product) => (
      <Col lg={3} sm={6} key={product.productId}>
      <ProductItem 
        productId={product.productId}
        productName={product.productName}
        productImage={product.productImage}
        productPrice={product.productPrice}/>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default Products