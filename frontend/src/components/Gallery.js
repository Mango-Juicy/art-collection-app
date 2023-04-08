import React, { useEffect } from 'react';

import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

import GalleryCard from './GalleryCard';

function Gallery() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  const colWMed = {span: 4, offset: 4}
  const colWFull = {span: 8, offset: 2}

  useEffect(() => {
    dispatch(listProducts())

  }, [])


  return (

    <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
      {products.map((product, index) => (          
      
        <Row  key={product._id} >
          <GalleryCard  product={product} />                             
        </Row>      

      ))}  
    </Col>
    
    
  )
}

export default Gallery
