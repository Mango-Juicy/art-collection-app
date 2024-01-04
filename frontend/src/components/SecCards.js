import React from 'react';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardImgText from './CardImgText';
import CardImg from './CardImg';

// TODO: 
// Dynamic columns, db field columnNumber

function SecCards({items, idCategory}) {

  const isArtworks = idCategory === 4 || idCategory === 5
  const colWMed = isArtworks ? {span: 6, offset: 3} : {span: 10, offset: 1}
  const colWFull = isArtworks ? {span: 8, offset: 2} : {span: 10, offset: 1}

  const itemCard = (item) => {  
    const columnsNumber = item.columnsNumber = 0 ? 12 : 12/item.columnsNumber

    return(
      <Col key={item.id} sm={columnsNumber} md={columnsNumber} lg={columnsNumber} xl={columnsNumber}>
        {
          isArtworks ? <CardImg item={item} />
          : <CardImgText item={item} />
        }    
      </Col>
    )
  }

  return (
    <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
      <Row>      
        {
          items.map((item) => (
            itemCard(item)
          ))
        } 
      </Row>
    </Col>
  )
}

export default SecCards
