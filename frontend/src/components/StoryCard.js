import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function StoryCard({ product }) {
  return (
    <Card className="my-5 p-0 rounded border-1">
        <Row>

          <Col>         
            <Card.Img className="border-0 rounded" src={product.image}  />   
          </Col>

          <Col>   
            <Card.Body className="mb-5 mt-3">
              
              <Card.Title as="div">
                <strong className=''>{product.name}</strong>
              </Card.Title>    

              <Card.Text as="div">
                <strong className=''>{product.description}</strong>
              </Card.Text>   

            </Card.Body>
          </Col>

        </Row>
    </Card>
  )
}

export default StoryCard
