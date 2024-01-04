import { React, useRef, useLayoutEffect, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'


function CardImgText({ item }) {
  const textEl = useRef(null)
  const imgEl = useRef(null)

  // TODO FIX 
  const handleImgLoad = () => {
    const imgHeight = imgEl.current.clientHeight
    const lineHeight = parseInt(window.getComputedStyle(textEl.current).lineHeight);
    const numLines = Math.floor((imgHeight) / lineHeight);
    
    textEl.current.style.overflow = 'hidden';
    textEl.current.style.textOverflow = 'ellipsis';
    textEl.current.style.display = '-webkit-box';
    textEl.current.style.webkitBoxOrient = 'vertical';

    textEl.current.style.webkitLineClamp = 15;
  };

 
  return (
    <Card className="my-5 p-0 c-primary border-0 " >
      <Row>

        <Col sm={6} md={6} lg={6} xl={6}>         
          <Card.Img ref={imgEl}  onLoad={handleImgLoad}  className="border-0" src={item.image} id='img' />   
        </Col>

        <Col sm={6} md={6} lg={6} xl={6}>   
          <Card.Body className="my-0 pb-0 text-white">
            
            <Card.Title as="div">
              <h4 className=''>{item.name}</h4>
            </Card.Title>    

            <Card.Text as="div">
              <p className='pb-0'  ref={textEl} id='text' >{item.description}</p>
              <Link className='text-white' to={`/item/${item.id}`}>
                Continua a leggere
              </Link>              
            </Card.Text>   

          </Card.Body>
        </Col>

      </Row>
    </Card>
  )
}

export default CardImgText
