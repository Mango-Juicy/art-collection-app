import React, { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import FormItem from './FormItem'


function CardDetail({ product, addNewItem }) {

  const [readOnly, setReadOnly] = useState(addNewItem);


  const colWSmall = {span: 3, offset: 0}
  const colWFull = {span: 8, offset: 2}

  const addItem = (e) =>{
    e.preventDefault()
    setReadOnly(!readOnly)        
}

  return (
    <Card className="my-2 border-0 c-primary text-white">

        <Row>
          <Card.Title as="div">
            <h4 className='m-2'>{product.name ? product.name : "Add New Item"}</h4>
          </Card.Title>    
        </Row>

        <Row>
          { product.image || !readOnly ?
              <Col sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>         
                <Card.Img className="border-0 rounded my-2" src={product.image}  />              
              </Col>
            : <></>           
          }

          <Col>   
            {
              !readOnly ? 
                <>
                  <p className='m-2'>Description: {product.description}</p>
                  <p className='m-2'>Brand: {product.brand}</p>
                  <p className='m-2'>Category: {product.category}</p>
                  <p className='m-2'>Tag: {product.tag}</p>
                  <p className='m-2'>Price: {product.price}</p>              
                  <p className='m-2'>Brand: {product.brand}</p>
                  <p className="m-2">Year: {product.year}</p>
                  <p className='m-2'>Available: {product.available}</p>
                </>                            
              : <FormItem state={product}></FormItem>
            }   
          </Col>
        </Row>

        <Row>
          <Button 
            type='submit' 
            variant='primary'
            onClick={(e) => addItem(e)}
          >Edit
          </Button>
        </Row>
    </Card>
  )
}

export default CardDetail
