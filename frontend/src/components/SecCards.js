import React, { useEffect, useState } from 'react';

import { getItemsByCategory, getItemsBySearch } from '../actions/itemActions'
import { useDispatch, useSelector } from 'react-redux'

import { Form, InputGroup, Row, Col, Container, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardImgText from './CardImgText';
import CardImg from './CardImg';

function SecCards({idCategory}) {

  const dispatch = useDispatch()
  const itemList = useSelector(state => state.itemList)
  const { error, loading, items } = itemList

  const [query, setQuery] = useState('');

  const isArtworks = idCategory === 4 || idCategory === 5
  
  const colWMed = isArtworks ? {span: 4, offset: 4} : {span: 10, offset: 1}
  const colWFull = isArtworks ? {span: 8, offset: 2} : {span: 10, offset: 1}

  useEffect(() => {
    dispatch(getItemsByCategory(idCategory))
  }, [idCategory])

  useEffect(() => {
    if (query.length > 2) {
      dispatch(getItemsBySearch(idCategory,query))
    }else{
      dispatch(getItemsByCategory(idCategory))
    }
  },[query])



  return (
    <Container>
      {/* SecFilter */}
      <Row>
        <hr className='mb-3' style={{height: "2px", backgroundColor: "white"}} />

        <Col className='p-0' sm={12} md={12} lg={12} xl={12} >        
          <InputGroup  controlId='search'>

            <Form.Control
                className='c-secondary text-white'
                required
                type='Name'
                placeholder='Cerca..'
                aria-describedby="basic-addon2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            >
            </Form.Control>

            <Form.Label column>From</Form.Label>  
            <Col>   
              <Form.Control
                  className=' text-white'
                  required
                  type='number'
                  placeholder='Cerca..'
                  aria-describedby="basic-addon2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
              >
              </Form.Control>
            </Col>
           
            <Form.Label column>To</Form.Label>              
            <Col>   
              <Form.Control
                  className=' text-white'
                  required
                  type='number'
                  placeholder='Cerca..'
                  aria-describedby="basic-addon2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
              >
              </Form.Control>
            </Col>

            <Button variant="" id="button-addon2">
              <i class="bi bi-search"></i>
            </Button>

          </InputGroup >
        </Col>

     
       
        <hr className='my-3' style={{height: "2px", backgroundColor: "white"}} />
      </Row>
         


      <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>

        {items.map((item) => (          

          <Row key={item.id} >
            {isArtworks ? <CardImg item={item} />
            : <CardImgText item={item} />}                             
          </Row>      

        ))}  
      </Col>

    </Container>
  )
}

export default SecCards
