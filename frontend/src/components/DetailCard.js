import React, { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import SecItemDetail from './SecItemDetail'


function DetailCard({ product, addNewItem }) {

  const [readOnly, setReadOnly] = useState(addNewItem);


  const colWSmall = {span: 3, offset: 0}
  const colWFull = {span: 8, offset: 2}

  const addItem = (e) =>{
    e.preventDefault()
    setReadOnly(!readOnly)        
}

  return (
    <Card className="my-2 p-2 rounded border-1">

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
              : <SecItemDetail state={product}></SecItemDetail>
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

export default DetailCard
