import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Button, div, Container } from 'react-bootstrap'
import { getItemById } from '../actions/itemActions'


function ItemScreen({ }) {
  const params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const itemList = useSelector(state => state.itemList)
  const { error, loading, items } = itemList
  const item = items.at(0)

  const colWMed = {span: 6, offset: 3}
  const colWFull = {span: 8, offset: 2}

  useEffect(() => {
    dispatch(getItemById(`${params.id}`))
  }, [dispatch])


  const addToCartEventHandler = ((id) => {
    navigate(`/cart/${id}`)
  })

  return (
    <Container className='py-2'>
      <Row className=''>       
        <h1 className='text-white'>{item?.name}</h1>  
        <hr className='m-0' style={{height: "2px", backgroundColor: "white"}} />
      </Row>

      <Row className='my-4'>       
        <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
          <Image src={item?.image} fluid/>
        </Col>
      </Row>

      <Row className=''>    
        <hr style={{height: "2px", backgroundColor: "white"}} />
        <p className='text-white'>{item?.description}</p> 
        <p className='text-white'>{item?.year}</p> 
        <p className='text-white'>{item?.available ? "Available" : "Not Available"}</p> 
      </Row>

      <Button 
        className='btn-block c-orange'
        onClick={() => addToCartEventHandler(`${params.id}`)}
        type='button' 
        disabled={item?.available === false}
      >I'm interested
      </Button>
    </Container>

  )
}

export default ItemScreen
