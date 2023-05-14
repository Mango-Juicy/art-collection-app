import React from 'react';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardImgText from './CardImgText';
import CardImg from './CardImg';

function SecCards({items, idCategory}) {

  const isArtworks = idCategory === 4 || idCategory === 5
  const colWMed = isArtworks ? {span: 4, offset: 4} : {span: 10, offset: 1}
  const colWFull = isArtworks ? {span: 8, offset: 2} : {span: 10, offset: 1}

  return (
    <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>

      {items.map((item) => (

        <Row key={item.id} >
          {isArtworks ? <CardImg item={item} />
          : <CardImgText item={item} />}                             
        </Row>      

      ))}  
    </Col>
  )
}

export default SecCards
