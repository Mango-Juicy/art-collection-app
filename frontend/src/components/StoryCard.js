import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function StoryCard({ product }) {
  return (
    <Card className="my-5 p-0 c-gray border-0">
        <Row>

          <Col>         
            <Card.Img className="border-0" src={product.image}  />   
          </Col>

          <Col>   
            <Card.Body className="mb-5 mt-0 text-white">
              
              <Card.Title as="div">
                <h4 className=''>{product.name}</h4>
              </Card.Title>    

              <Card.Text as="div">
                <p className=''>{product.description}</p>
              </Card.Text>   

            </Card.Body>
          </Col>

        </Row>
    </Card>
  )
}

export default StoryCard
