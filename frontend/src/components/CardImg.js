import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardImg({ item }) {
  return (
    <Card className="my-2 border-0 bg-transparent" >
      <Link to={`/item/${item.id}`}  style={{ textDecoration: 'none' }}>
        
        <Card.Img className="border-0 " src={item.image}   />   

        <Card.Body className="text-center text-white mb-3">
          <Card.Title as="div">
            <strong className=''>{item.name}</strong>
          </Card.Title>    
        </Card.Body>

      </Link>
    </Card>
  )
}

export default CardImg
