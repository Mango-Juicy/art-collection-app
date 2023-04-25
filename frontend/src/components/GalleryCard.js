import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function GalleryCard({ product }) {
  return (
    <Card className="my-2 px-2 border-0 c-gray" >
      <Link to={`/product/${product._id}`}  style={{ textDecoration: 'none' }}>
        
        <Card.Img className="border-0 " src={product.image}   />   

        <Card.Body className="text-center text-white mb-3 mt-3">
          <Card.Title as="div">
            <strong className=''>{product.name}</strong>
          </Card.Title>    
        </Card.Body>

      </Link>
    </Card>
  )
}

export default GalleryCard
