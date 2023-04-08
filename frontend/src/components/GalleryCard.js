import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function GalleryCard({ product }) {
  return (
    <Card className="my-5 px-2 rounded border-0" >
      <Link to={`/product/${product._id}`}  style={{ textDecoration: 'none' }}>
        
        <Card.Img className="border-0 rounded" src={product.image}   />   

        <Card.Body className="text-center mb-5 mt-3">
          <Card.Title as="div">
            <strong className=''>{product.name}</strong>
          </Card.Title>    
        </Card.Body>

      </Link>
    </Card>
  )
}

export default GalleryCard
