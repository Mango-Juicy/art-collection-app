import React from 'react';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardImgText from './CardImgText';
import CardImg from './CardImg';

function SecCards({items, idCategory}) {

  const isArtworks = idCategory === 4 || idCategory === 5
  const colWMed = isArtworks ? {span: 6, offset: 3} : {span: 10, offset: 1}
  const colWFull = isArtworks ? {span: 8, offset: 2} : {span: 10, offset: 1}

  return (
    <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>

      {items.filter(item => item.year < 1964).map((item) => (

        <Row key={item.id} >
          {isArtworks ? <CardImg item={item} />
          : <CardImgText item={item} />}                             
        </Row>      

      ))}  
      <Row>
        {items.filter(item => item.year >= 1964).map((item) => (

          <Col key={item.id} sm={4} md={4} lg={4} xl={4}>

            {isArtworks ? <CardImg item={item} />
            : <CardImgText item={item} />}    

          </Col>

          ))} 
      </Row>   
    </Col>
  )
}

export default SecCards
