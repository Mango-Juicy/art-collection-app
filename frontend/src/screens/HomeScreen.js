import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomeScreen() {  

  const colWMedLeft = {span: 4, offset: 2}
  const colWMedRight = {span: 4, offset: 0}
  const colWFull = {span: 8, offset: 2}

  return (
    <div>
      <Card className="bg-transparent border-0"  >
        <Row className='align-items-center'>
          <Col sm={colWFull} md={colWMedLeft} lg={colWMedLeft} xl={colWMedLeft}>
            <Card.Img className="border-0" src='./1986-Autoritratto-con-uccelli.jpg'  /> 
          </Col>

          <Col sm={colWFull} md={colWMedRight} lg={colWMedRight} xl={colWMedRight}>

            <Link style={{ textDecoration: 'none' }} to={'/biografia'}>
              <h5  className='c-orange text-center my-4 py-2'>
                Biografia
              </h5>            
            </Link>

            <Link style={{ textDecoration: 'none' }} to={'/dipinti'}>
              <h5 className='c-orange text-center my-4 py-2'>
                Dipinti
              </h5>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={'/mostreColletive'}>
              <h5 className='c-orange text-center my-4 py-2'>
                Mostre Collettive
              </h5>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={'/dipinti'}>
              <h5 className='c-orange text-center my-4 py-2'>
                Casa d'Arte Romano Notari
              </h5>
            </Link>

          </Col>
        </Row>  
      </Card>
    </div>
  )
}

export default HomeScreen
