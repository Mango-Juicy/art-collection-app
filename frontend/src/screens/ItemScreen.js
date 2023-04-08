import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate, createSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Form, ListGroupItem } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'


function ItemScreen({ }) {
  const [qty, setQty] = useState(1);
  const params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails;

  const colWMed = {span: 6, offset: 3}
  const colWFull = {span: 8, offset: 2}


  useEffect(() => {
    dispatch(listProductDetails(`${params.id}`))

  }, [dispatch, params])



  const addToCartEventHandler = ((id, qty) => {
    navigate(`/cart/${id}`, { state: qty })

  })

  return (
    <div>

      <Row className='mb-4'>       
          <h1>{product.name}</h1>     
      </Row>

      <Row>       
        <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
          <Image src={product.image} fluid/>
        </Col>
      </Row>

      <Row className='m-4'>      

        <h5>{product.description}</h5> 

        <h5>{product.price}</h5> 

      </Row>

      <Button 
        className='btn-block'
        onClick={() => addToCartEventHandler(`${params.id}`, qty)}
        type='button' 
        disabled={product.countInStock === 0}
      >I'm interested
      </Button>
       

    </div>

  )
}

export default ItemScreen
