import React, { useEffect } from 'react';

import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

import StoryCard from './StoryCard';

function Story() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList
  useEffect(() => {
    dispatch(listProducts())

  }, [])


  return (

    <Col sm={12} md={{span: 12, offset: 0}} lg={12} xl={12}>
      {products.map((product, index) => (          
      
        <Row key={product._id} >
          <StoryCard product={product} />                             
        </Row>      

      ))}  
    </Col>
    
    
  )
}

export default Story
