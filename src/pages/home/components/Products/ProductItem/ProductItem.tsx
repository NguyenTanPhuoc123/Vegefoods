import React from 'react'
import { Container, Image } from 'react-bootstrap';
import { PRODUCT_1 } from '../../../../../constants/images';
import "./ProductItem.css"
type ProductItemProps = {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
}

const ProductItem = (props:ProductItemProps) => {
    const {productId, productName, productImage, productPrice} = props;
  return (
    <Container key={productId} className='text-center my-5 product-item'>
        <Image className='product-img' src={productImage}/>
        <h6 className='product-name'>{productName}</h6>
        <p className='product-price'>${productPrice}</p>
    </Container>
  )
}

export default ProductItem;